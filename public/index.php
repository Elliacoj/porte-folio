<?php

use Amaur\App\controller\HomePageController;

require_once "../vendor/autoload.php";

session_start();

if(isset($_GET["controller"])) {
    $controller = "App\\PorteFolio\\Controller\\" . ucfirst(filter_var($_GET['controller'], FILTER_SANITIZE_STRING)) . "Controller";

    if(class_exists($controller)) {
        if(isset($_GET['action'])) {
            $controller = new $controller();
            try {
                $reflection = new ReflectionClass($controller);
                $action = filter_var($_GET['action'], FILTER_SANITIZE_STRING);

                if($reflection->hasMethod($action)) {
                    $controller->$action();
                }
                else {
                    $controller->homepage();
                }
            }
            catch (ReflectionException $exception) {}
        }
        else {
            $controller->homepage();
        }
    }
    else {
        (new HomePageController())->homepage();
    }
}
else {
    (new HomePageController())->homepage();
}