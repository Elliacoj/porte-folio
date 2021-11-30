<?php

namespace Amaur\App\manager;

use Amaur\App\config\ConfigDev;
use Amaur\App\config\ConfigLocal;
use Amaur\App\config\ConfigProd;
use PDO;
use PDOException;

class DB {
    static ?PDO $dbInstance = null;

    /**
     * Construct PDO instance
     */
    public function __construct() {
        if(file_exists("Amaur\\App\\config\\ConfigDev") && $_SERVER['SERVER_NAME'] === "porte-folio.elliacoj.be") {
            [$host, $dbName, $user, $password] = (new ConfigDev)->getConfig();
        }
        else if($_SERVER['SERVER_NAME'] === "localhost") {
            [$host, $dbName, $user, $password] = (new ConfigLocal)->getConfig();
        }
        else {
            [$host, $dbName, $user, $password] = (new ConfigProd)->getConfig();
        }

        try {
            self::$dbInstance = new PDO("mysql:host=$host;dbname=$dbName;charset=utf8;", $user, $password);
            self::$dbInstance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$dbInstance->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        }
        catch (PDOException $e) {
            echo $e->getMessage();
        }
    }

    /**
     * Return instance
     * @return PDO
     */
    public static function getInstance():PDO {
        if(is_null(self::$dbInstance)) {
            new self();
        }
        return self::$dbInstance;
    }

    /**
     * For no clone
     */
    public function __clone() {}
}