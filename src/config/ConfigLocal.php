<?php

namespace Amaur\App\config;

class ConfigLocal {
    const HOST = "localhost";
    const DBNAME = "porte_folio";
    const USER = "root";
    const PASSWORD = "";

    /**
     * Return an array of data config
     * @return string[]
     */
    public function getConfig():array {
        return [self::HOST, self::DBNAME, self::USER, self::PASSWORD];
    }
}