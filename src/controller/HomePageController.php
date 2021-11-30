<?php

namespace Amaur\App\controller;

class HomePageController extends Controller {

    /**
     * Redirects into home page view
     */
    public function homePage() {
        self::render("homePage", "Page d'accueil");
    }
}