class ContentPage {
    constructor() {
        this.pageLeft = document.getElementById("pageLeft");
        this.pageRight = document.getElementById("pageRight");
        this.divLeft = document.createElement("div");
        this.divRight = document.createElement("div");
    }

    cvPage() {
        this.pageLeft.innerHTML = "";
        this.pageRight.innerHTML = "";

        let h1 = document.createElement("h1");
        let personalInfoH = document.createElement("h2");
        let skillsH = document.createElement("h2");
        let assetH = document.createElement("h2");
        let divPersonal = document.createElement("div");
        let personalInfo = [
            "Rue de la Station 5", "6590", "Momignies", "Belgique", "+32 493 07 90 96", "amaury.jocaille@hotmail.com", "Permis B + voiture"
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

        divPersonal.style.cssText = "display: flex; flex-wrap: wrap;";

        this.divLeft.appendChild(h1);
        this.divLeft.appendChild(personalInfoH);
        this.data(personalInfo, divPersonal, true);
        this.divLeft.appendChild(divPersonal);
        this.divLeft.appendChild(skillsH);
        this.data(skills, this.divLeft);
        this.divRight.appendChild(assetH);
        this.data(asset, this.divRight);

        this.pageLeft.appendChild(this.divLeft)
        this.pageRight.appendChild(this.divRight)

        /*this.clickNext();*/
    }

    data(array, page, check = false) {
        array.forEach(e => {
            let div = document.createElement("div");
            if(check === true) {
                div.style.cssText = "width: 42%; padding: 0.5rem 4%";
            }
            else {
                div.style.cssText = "padding: 1rem 4%";
            }

            div.innerHTML = e;
            page.appendChild(div)
        });
    }

    /*clickNext() {
        setTimeout(() => {
            /!*document.getElementById("bookDivBack").style.zIndex = "100"*!/
            this.flipPage("-57%", "0");
            this.flipPage("-114%", "1");
        },2000);
    }*/

    flipPage(translate, scale) {
        document.getElementById("pageLeft").animate([
            {
                transform: 'translate(' + translate + ') scaleX(' + scale + ')'
            },
        ], {
            duration: 300,
            fill: "forwards"
        });
    }
}
export {ContentPage}