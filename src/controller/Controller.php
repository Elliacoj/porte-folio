<?php

namespace Amaur\App\controller;

class Controller {

    /**
     * Render for change content of page
     * @param $view
     * @param $title
     * @param array $data
     */
    public function render($view, $title, array $data = []) {
        ob_start();
        require_once dirname(__DIR__) . "/../view/" . $view . ".view.php";
        $html = ob_get_clean();
        require_once dirname(__DIR__) . "/../view/__partials/base.view.php";
    }
}