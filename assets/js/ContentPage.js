import {logPlugin} from "@babel/preset-env/lib/debug";

class ContentPage {
    /**
     * Constructor
     */
    constructor() {
        this.pageLeft = document.getElementById("pageLeft");
        this.pageRight = document.getElementById("pageRight");
        this.subPageLeft = document.getElementById("subPageLeft");
        this.subPageRight = document.getElementById("subPageRight");
        this.divLeft = document.createElement("div");
        this.divRight = document.createElement("div");
        this.subDivLeft = document.createElement("div");
        this.subDivRight = document.createElement("div");
        this.buttonNext = document.createElement("div");
        this.buttonPrevious = document.createElement("div");

        this.studdyDate = [
            "2020 - 2021", "2017 - 2018", "2016 - 2017", "2016", "2011", "2011"
        ]

        this.studdyContent = [
            "Formation de développeur Web/Web mobile niveau 3 (en attente du verdict de l'obtention du diplôme) à l'école de fourmies UpTo, avec un stage en entreprise de 1 " +
            "mois chez Attardo Renovation (modification de modules Prestashop).",
            "Formation de technicien de bureau (15 mois) avec obtention du diplôme de secrétariat 2 à l’école de cours industriels et commerciaux de Chimay avec" +
            " stage de 3 semaines à la «Maison des services» de Momignies.",
            "Formation de commis de cuisine avec obtention du diplôme à l’école de cours industriels et commerciaux de Chimay avec stage d’un mois au restaurant «L’Original» à Chimay.",
            "Formation théorique et pratique axée sur la fonction de technicien de surface organisée par MIRESEM – FOREM. Stage en tant que technicien de surface: hôtel de ville, maison de repos," +
            " caserne de pompiers, centre culturel, CPAS, divers bâtiments communaux, professions libérales, entreprises du bâtiment,…",
            "Titre de gestion de base obtenu à l'institut Sainte-Marie, Couvin.",
            "CESS électricité réparation-maintenance et installateur-monteur obtenu à l’institut Sainte-Marie, Couvin."
        ]
    }

    /**
     * Init the content of cv into pages
     * @returns {Promise<void>}
     */
    async cvPage(page) {
        if(page === 0) {
            this.pageLeft.innerHTML = "";
            this.pageRight.innerHTML = "";
            this.pageOneCV();
            this.pageTwoCv();
        }
        else if(page === 1) {
            this.pageFourCv();
            this.pageThreeCv();
        }

    }

    /**
     * Content for page one of CV
     */
    pageOneCV() {
        let h1 = document.createElement("h1");
        let personalInfoH = document.createElement("h2");
        let skillsH = document.createElement("h2");
        let divPersonal = document.createElement("div");

        let personalInfo = [
            "<i class='far fa-map'></i> Rue de la Station 5", "<i class='fas fa-mail-bulk'></i> 6590", "<i class='far fa-flag'></i> Momignies",
            "<i class='fas fa-globe-europe'></i> Belgique", "<i class='fas fa-phone-square-alt'></i> +32 493 07 90 96", "<i class='fas fa-at'></i> amaury.jocaille@hotmail.com",
            "<i class='fas fa-car'></i> Permis B + voiture"
        ];

        let skills = [
            "A l'aise avec l'intégration du front-end et le back-end (avec une préférence pour le back-end).",
            "Connaissance de plusieurs language de programmation (PHP, JS, HTML, CSS, SQL).",
            "Connaissance de plusieurs gestionnaires de paquets (Composer, npm)",
            "Peux créer et gérer une base de données complexe.",
            "Développe sur le logiciel PhpStorm.",
            "Connaissance basique sur Prestashop et WordPress."
        ];

        h1.innerHTML = "AMAURY JOCAILLE";
        personalInfoH.innerHTML = "Informations personelles";
        skillsH.innerHTML = "Compétences";

        divPersonal.style.cssText = "display: flex; flex-wrap: wrap;";

        this.divLeft.appendChild(h1);
        this.divLeft.appendChild(personalInfoH);
        this.data(personalInfo, divPersonal, true);
        this.divLeft.appendChild(divPersonal);
        this.divLeft.appendChild(skillsH);
        this.data(skills, this.divLeft);

        this.pageLeft.appendChild(this.divLeft);
    }

    /**
     * Content for page two of CV
     */
    pageTwoCv() {
        let assetH = document.createElement("h2");
        let asset = [
            "Capacités organisationnelles", "Soigneux et méticuleux", "Intégration facile dans une équipe", "Autonome", "Résistant au stress"
        ];

        assetH.innerHTML = "Atouts";
        this.buttonNext.innerHTML = "Page suivante >";
        this.buttonNext.className = "buttonNext";
        this.divRight.appendChild(assetH);
        this.data(asset, this.divRight);

        this.divRight.appendChild(this.buttonNext);
        this.pageRight.appendChild(this.divRight);
    }

    /**
     * Content for page three of CV
     */
    pageThreeCv() {
        let studyH = document.createElement("h2");
        this.buttonPrevious.innerHTML = "< Page précédente";
        this.buttonPrevious.className = "buttonPrevious";
        studyH.innerHTML = "Etudes et formations";
        this.subDivLeft.appendChild(studyH);

        for(let x = 0; x < this.studdyContent.length; x++) {
            if(x <= 4 ) {
                let div = document.createElement("div");
                div.style.cssText = "padding: 0.7rem 4%";
                div.innerHTML = "<p>" + this.studdyDate[x] + "</p><p>" + this.studdyContent[x] + "</p>";
                this.subDivLeft.appendChild(div);
            }
        }

        this.subDivLeft.appendChild(this.buttonPrevious);
        this.subDivLeft.style.cssText = "transform: rotateY(180deg)";

        setTimeout(() => {
            this.pageRight.innerHTML = "";
            this.pageRight.appendChild(this.subDivLeft);
            setTimeout(() => {
                this.divLeft.innerHTML = this.subDivLeft.innerHTML;
            }, 150)
        }, 150);
    }

    /**
     * Content for page four of CV
     */
    pageFourCv() {
        for(let x = 5; x < this.studdyContent.length; x++) {
            if(x <= 10 ) {
                let div = document.createElement("div");
                div.style.cssText = "padding: 0.7rem 4%";
                div.innerHTML = "<p>" + this.studdyDate[x] + "</p><p>" + this.studdyContent[x] + "</p>";
                this.subDivRight.appendChild(div);
            }
        }
        this.subPageRight.innerHTML = "";
        this.subPageRight.appendChild(this.subDivRight);

        setTimeout(() => {
            this.pageRight.style.display = "none";
            this.pageRight.innerHTML = "";
            this.divRight.innerHTML = this.subDivRight.innerHTML;
            this.pageRight.appendChild(this.divRight);
            this.flipRevers("0%", "1");
            setTimeout(() => {
                this.pageRight.style.display = "flex";
            }, 10);

        }, 305);
    }
    /**
     * Init the content project into pages
     */
    projectPage() {
        this.pageLeft.innerHTML = "";
        this.pageRight.innerHTML = "";
    }

    /**
     * Create data div for append page
     * @param array
     * @param page
     * @param check
     */
    data(array, page, check = false) {
        array.forEach(e => {
            let div = document.createElement("div");
            if(check === true) {
                div.style.cssText = "width: 42%; padding: 0.5rem 4%";
            }
            else {
                div.style.cssText = "padding: 0.7rem 4%";
            }

            div.innerHTML = e;
            page.appendChild(div)
        });
    }

    /**
     * Change page on click
     */
    clickNext() {
        this.buttonNext.addEventListener("click", () => {
            this.cvPage(1).then(() => this.clickNext());
            this.flipPage("-114%", "-1");
        });
    }

    /**
     * Animation for change page
     * @param translate
     * @param scale
     */
    flipPage(translate, scale) {
        document.getElementById("pageRight").animate([
            {
                transform: 'translate(' + translate + ') scaleX(' + scale + ')',
            },
        ], {
            duration: 300,
            fill: "forwards"
        });
    }

    /**
     * Animation return for change page
     * @param translate
     * @param scale
     */
    flipRevers(translate, scale) {
        document.getElementById("pageRight").animate([
            {
                transform: 'translate(' + translate + ') scaleX(' + scale + ')',
            },
        ], {
            duration: 1,
            fill: "forwards"
        });
    }
}
export {ContentPage}