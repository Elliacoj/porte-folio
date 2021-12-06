<?php


namespace Amaur\App\manager;

use ReflectionClass;
use ReflectionException;

class Manager {
    private static ?Object $manager = null;

    /**
     * Return instance manager
     * @return Manager
     */
    public static function getManager():self {
        if(is_null(self::$manager)) {
            self::$manager = new self();
        }
        return self::$manager;
    }

    /**
     * Create or update an object
     * @param string $sql
     * @param array $data
     * @return bool
     */
    public static function createUpdate(string $sql,array $data):bool {
        $ndb = DB::getInstance()->prepare($sql);
        foreach ($data as $title => $value) {
            $ndb->bindValue($title, $value);
        }
        if($ndb->execute()) {
            return true;
        }
        else {
            return false;
        }
    }

    /**
     * Return null or an object
     * @param string $sql
     * @param string $class
     * @param array $data
     * @return Object|null
     */
    public static function searchObject(string $sql, string $class, array $data = []):?Object {
        $object = null;
        $ndb = DB::getInstance()->prepare($sql);
        $class = "Amaur\\App\\entity\\" . $class;

        if(count($data) !== 0) {
            foreach ($data as $title => $value) {
                $ndb->bindValue("$title", $value);
            }
        }

        if($ndb->execute() && $result = $ndb->fetch()) {
            $object = new $class();
            foreach ($result as $title => $value) {
                if(strpos($title, "_fk")){

                    $subClass = "Amaur\\App\\manager\\" . ucfirst(substr($title, 0, (strpos($title, "_")))) . "Manager";
                    $subClass = new $subClass();
                    $value = $subClass->search($value);
                    $title = str_replace("_fk", "Fk", $title);
                }

                if(strpos($title, "_")) {
                    $count = substr_count($title, "_");
                    for($x = 0; $x < $count; $x++) {
                        $part = substr($title, (strpos($title, "_") + 1));
                        $part = ucfirst($part);
                        $title = substr($title, 0 , strpos($title, "_")) . $part;
                    }
                }

                $action = "set" . ucfirst($title);

                try {
                    $classReflect = new ReflectionClass($class);
                    if($classReflect->hasMethod($action)) {
                        $object->$action($value);
                    }
                }
                catch (ReflectionException $e) {}
            }
        }
        return $object;
    }

    /**
     * Return null or an object
     * @param string $sql
     * @param string $class
     * @param array $data
     * @return array
     */
    public static function getObject(string $sql, string $class, array $data = []):array {
        $array = [];
        $ndb = DB::getInstance()->prepare($sql);
        $class = "Amaur\\App\\entity\\" . $class;
        if(count($data) !== 0) {
            foreach ($data as $title => $value) {
                $ndb->bindValue("$title", $value);
            }
        }

        if($ndb->execute() && $result = $ndb->fetchall()) {
            foreach ($result as $item) {
                $object = new $class();
                foreach ($item as $title => $value) {
                    if(strpos($title, "_fk")){

                        $subClass = "Amaur\\App\\manager\\" . ucfirst(substr($title, 0, (strpos($title, "_")))) . "Manager";
                        $subClass = new $subClass();
                        $value = $subClass->search($value);
                        $title = str_replace("_fk", "Fk", $title);
                    }

                    if(strpos($title, "_")) {
                        $count = substr_count($title, "_");
                        for($x = 0; $x < $count; $x++) {
                            $part = substr($title, (strpos($title, "_") + 1));
                            $part = ucfirst($part);
                            $title = substr($title, 0 , strpos($title, "_")) . $part;
                        }
                    }

                    $action = "set" . ucfirst($title);

                    try {
                        $classReflect = new ReflectionClass($class);
                        if($classReflect->hasMethod($action)) {
                            $object->$action($value);
                        }
                    }
                    catch (ReflectionException $e) {}
                }
                $array[] = $object;
            }

        }
        return $array;
    }
}