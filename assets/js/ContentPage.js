import {logPlugin} from "@babel/preset-env/lib/debug";

class ContentPage {
    /**
     * Constructor
     */
    constructor() {
        this.pageLeft = document.getElementById("pageLeft");
        this.pageRight = document.getElementById("pageRight");
        this.divLeft = document.createElement("div");
        this.divRight = document.createElement("div");
        this.buttonNext = document.createElement("div");
        this.buttonPrevious = document.createElement("div");
    }

    /**
     * Init the content of cv into pages
     * @returns {Promise<void>}
     */
    async cvPage(page) {
        this.pageLeft.innerHTML = "";
        this.pageRight.innerHTML = "";

        if(page === 0) {
            console.log("ok");
            this.pageOneCV();
            this.pageTwoCv(this.divRight, this.pageRight);
        }
        else if(page === 1) {
            this.divLeft.innerHTML = "";
            this.pageTwoCv(this.divLeft, this.pageLeft);
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
    pageTwoCv(divContent, pageContent) {
        let assetH = document.createElement("h2");
        let asset = [
            "Capacités organisationnelles", "Soigneux et méticuleux", "Intégration facile dans une équipe", "Autonome", "Résistant au stress"
        ];

        assetH.innerHTML = "Atouts";
        this.buttonNext.innerHTML = "Page suivante >";
        this.buttonNext.className = "buttonNext";
        divContent.appendChild(assetH);
        this.data(asset, divContent);

        divContent.appendChild(this.buttonNext);
        pageContent.appendChild(divContent);
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
            this.flipPage("-57%", "0");
            this.flipPage("-114%", "1");
            setTimeout(() => {
                this.cvPage(1).then(() => this.clickNext());
            }, 300)
        })
    }

    /**
     * Animation for change page
     * @param translate
     * @param scale
     */
    flipPage(translate, scale) {
        document.getElementById("pageRight").animate([
            {
                transform: 'translate(' + translate + ') scaleX(' + scale + ')'
            },
        ], {
            duration: 300,
        });
    }
}
export {ContentPage}