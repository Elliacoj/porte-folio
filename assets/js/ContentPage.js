class ContentPage {
    constructor() {
        this.pageLeft = document.querySelectorAll(".pages")[0];
        this.pageRight = document.querySelectorAll(".pages")[1];
    }

    cvPage() {

        this.pageLeft.innerHTML = "";
        this.pageRight.innerHTML = "";
        /*this.pageLeft.style.transform = "rotateY(180deg)";*/

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


        this.pageLeft.appendChild(h1);
        this.pageLeft.appendChild(personalInfoH);

        personalInfo.forEach(e => {
            let p = document.createElement("p");
            p.style.cssText = "display: block; width: 50%;";
            p.innerHTML = e;
            divPersonal.appendChild(p)
        });

        divPersonal.style.cssText = "display: flex; flex-wrap: wrap;";
        this.pageLeft.appendChild(divPersonal);

        this.pageLeft.appendChild(skillsH);

        skills.forEach(e => {
            let p = document.createElement("p");
            p.innerHTML = e;
            this.pageLeft.appendChild(p)
        });

        this.pageRight.appendChild(assetH);

        asset.forEach(e => {
            let p = document.createElement("p");
            p.innerHTML = e;
            this.pageRight.appendChild(p)
        });
    }
}
export {ContentPage}