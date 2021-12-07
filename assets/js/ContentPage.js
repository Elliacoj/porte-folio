class ContentPage {
    constructor() {
        this.pageLeft = document.getElementById("pageLeft");
        this.pageRight = document.getElementById("pageRight");
        this.divLeft = document.createElement("div");
        this.divRight = document.createElement("div");
        this.buttonNext = document.createElement("div");
        this.buttonPrevious = document.createElement("div");
    }

    async cvPage() {
        this.pageLeft.innerHTML = "";
        this.pageRight.innerHTML = "";

        let h1 = document.createElement("h1");
        let personalInfoH = document.createElement("h2");
        let skillsH = document.createElement("h2");
        let assetH = document.createElement("h2");
        let divPersonal = document.createElement("div");
        let personalInfo = [
            "<i class='far fa-map'></i> Rue de la Station 5", "<i class='fas fa-mail-bulk'></i> 6590", "<i class='far fa-flag'></i> Momignies",
            "<i class='fas fa-globe-europe'></i> Belgique", "<i class='fas fa-phone-square-alt'></i> +32 493 07 90 96", "<i class='fas fa-at'></i> amaury.jocaille@hotmail.com",
            "<i class='fas fa-car'></i> Permis B + voiture"
        ];

        let skills = [
            "A l'aise avec l'intégration du front-end et le back-end (avec une préférence pour le back-end).",
            "Connaissance de plusieurs language de programmation (PHP, JS, HTML, CSS, SQL).",
            "Peux créer et gérer une base de données complexe.",
            "Développe sur le logiciel PhpStorm.",
            "Connaissance basique sur Prestashop et WordPress."
        ];

        let asset = [
            "Capacités organisationnelles", "Soigneux et méticuleux", "Intégration facile dans une équipe", "Autonome", "Résistant au stress"
        ];

        h1.innerHTML = "AMAURY JOCAILLE";
        personalInfoH.innerHTML = "Informations personelles";
        skillsH.innerHTML = "Compétences";
        assetH.innerHTML = "Atouts";
        this.buttonNext.innerHTML = "Page suivante";

        divPersonal.style.cssText = "display: flex; flex-wrap: wrap;";

        this.divLeft.appendChild(h1);
        this.divLeft.appendChild(personalInfoH);
        this.data(personalInfo, divPersonal, true);
        this.divLeft.appendChild(divPersonal);
        this.divLeft.appendChild(skillsH);
        this.data(skills, this.divLeft);
        this.divRight.appendChild(assetH);
        this.data(asset, this.divRight);

        this.divRight.appendChild(this.buttonNext);
        this.pageLeft.appendChild(this.divLeft);
        this.pageRight.appendChild(this.divRight);
    }

    projectPage() {
        this.pageLeft.innerHTML = "";
        this.pageRight.innerHTML = "";
    }

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

    clickNext() {
        this.buttonNext.addEventListener("click", () => {
            console.log("ok");
            this.flipPage("-57%", "0");
            this.flipPage("-114%", "1");
        })
    }

    flipPage(translate, scale) {
        document.getElementById("pageRight").animate([
            {
                transform: 'translate(' + translate + ') scaleX(' + scale + ')'
            },
        ], {
            duration: 300,
            endDelay: 200
        });
    }
}
export {ContentPage}