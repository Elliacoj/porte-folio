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
        this.divOne = document.createElement("div");
        this.divTwo = document.createElement("div");
        this.divThree = document.createElement("div");
        this.divFour = document.createElement("div");
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
     * Init content pages
     */
    init() {
        this.pageOneCV();
        this.pageTwoCv();
        this.pageFourCv();
        this.pageThreeCv();
    }

    /**
     * Init the content of cv into pages
     * @returns
     */
    cvPage(action = 0) {
        if(action === 0) {
            this.pageLeft.innerHTML = "";
            this.pageRight.innerHTML = "";
            this.pageLeft.appendChild(this.divOne);
            this.pageRight.appendChild(this.divTwo);
        }
        else if(action === 1) {
            this.divThree.style.cssText = "transform: rotateY(180deg)";
            this.subPageRight.innerHTML = "";
            this.subPageRight.appendChild(this.divFour);

            setTimeout(() => {
                this.pageRight.innerHTML = "";
                this.pageRight.appendChild(this.divThree);
            }, 150);

            setTimeout(() => {
                this.subPageLeft.innerHTML = this.pageRight.innerHTML;
                this.pageLeft.innerHTML = this.pageRight.innerHTML;
                this.pageLeft.style.display = "none";
                this.pageRight.style.display = "none";
                this.pageRight.innerHTML = this.subPageRight.innerHTML;

                this.flipRevers("0%", "1", document.getElementById("pageRight"));

                setTimeout(() => {
                    this.pageRight.style.display = "flex";
                    this.pageRight.innerHTML = '';
                    this.pageRight.appendChild(this.divFour);
                    this.pageLeft.style.display = "flex";
                    this.pageLeft.innerHTML = '';
                    this.pageLeft.appendChild(this.divThree);
                }, 10);

            }, 320);
        }
        else if(action === 2) {
            document.getElementById("bookDiv").style.zIndex = "15";
            this.subPageLeft.innerHTML = "";
            this.subPageLeft.appendChild(this.divOne);

            setTimeout(() => {
                this.pageLeft.innerHTML = "";
                this.pageLeft.appendChild(this.divTwo);
                this.divTwo.style.cssText = "transform: rotateY(0)";
            }, 150);

            setTimeout(() => {
                this.subPageRight.innerHTML = this.pageLeft.innerHTML;
                this.pageRight.innerHTML = this.pageLeft.innerHTML;
                this.pageLeft.style.display = "none";
                this.pageRight.style.display = "none";
                this.pageLeft.innerHTML = this.subPageLeft.innerHTML;

                this.flipRevers("0%", "1", document.getElementById("pageLeft"));

                setTimeout(() => {
                    document.getElementById("bookDiv").style.zIndex = "0";
                    this.pageRight.style.display = "flex";
                    this.pageRight.innerHTML = '';
                    this.pageRight.appendChild(this.divTwo);
                    this.pageLeft.style.display = "flex";
                    this.pageLeft.innerHTML = '';
                    this.pageLeft.appendChild(this.divOne);
                }, 10);

            }, 320);
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

            this.divOne.appendChild(h1);
            this.divOne.appendChild(personalInfoH);
            this.data(personalInfo, divPersonal, true);
            this.divOne.appendChild(divPersonal);
            this.divOne.appendChild(skillsH);
            this.data(skills, this.divOne);
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
        this.buttonNext.id = "buttonNext";
        this.divTwo.appendChild(assetH);
        this.data(asset, this.divTwo);

        this.divTwo.appendChild(this.buttonNext);
        this.buttonNext.addEventListener("click", () => this.clickNext());
    }

    /**
     * Content for page three of CV
     */
    pageThreeCv() {
        let studyH = document.createElement("h2");
        this.buttonPrevious.innerHTML = "< Page précédente";
        this.buttonPrevious.id = "buttonPrevious";
        studyH.innerHTML = "Etudes et formations";
        this.divThree.appendChild(studyH);

        for(let x = 0; x < this.studdyContent.length; x++) {
            if(x <= 4 ) {
                let div = document.createElement("div");
                div.style.cssText = "padding: 0.7rem 4%";
                div.innerHTML = "<p>" + this.studdyDate[x] + "</p><p>" + this.studdyContent[x] + "</p>";
                this.divThree.appendChild(div);
            }
        }
        this.divThree.appendChild(this.buttonPrevious);
        this.buttonPrevious.addEventListener("click", () => this.clickPrevious());
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
                this.divFour.appendChild(div);
            }
        }
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
     * Change page right on click
     */
    clickNext() {
        this.cvPage(1);
        this.flipPage("-114%", "-1", document.getElementById("pageRight"));
    }

    /**
     * Change page left on click
     */
    clickPrevious() {
        this.cvPage(2);
        this.flipPage("-114%", "-1", document.getElementById("pageLeft"));
    }

    /**
     * Animation for change page
     * @param translate
     * @param scale
     * @param page
     */
    flipPage(translate, scale, page) {
        page.animate([
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
     * @param page
     */
    flipRevers(translate, scale, page) {
        page.animate([
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