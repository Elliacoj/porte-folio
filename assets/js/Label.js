import {ContentPage} from "./ContentPage";

class Label {
    /**
     * Constructor
     */
    constructor() {
        this.container = document.getElementById("container");
        this.home = document.createElement("div");
        this.labelDiv = document.createElement("div");
        this.cv = document.createElement("div");
        this.project = document.createElement("div");
        this.state = true;
    }

    /**
     * Init the label into container
     */
    init() {
        this.home.innerHTML = "Accueil";
        this.cv.innerHTML = "CV";
        this.project.innerHTML = "PROJETS";

        this.labelDiv.appendChild(this.home);
        this.labelDiv.appendChild(this.cv);
        this.labelDiv.appendChild(this.project);
        this.container.appendChild(this.labelDiv);
    }

    /**
     * Add event click from label buttons
     */
    clickPage() {
        this.cv.addEventListener("click", () => {
            let contentPage = new ContentPage();
            contentPage.cvPage();

            if(this.state === true) {
                document.querySelectorAll(".pages")[1].style.display = "block";
                this.flipPage("-50%", "0");

                setTimeout(() => {
                    document.querySelectorAll(".contentBook").forEach(e => {
                        e.style.display = "none";
                    });
                    document.querySelectorAll(".pages")[0].style.display = "block";
                }, 100);

                this.flipPage("-100%", "-1");

                this.state = false;
            }
        });

        this.project.addEventListener("click", () => {
            if(this.state === true) {
                document.querySelectorAll(".pages")[1].style.display = "block";
                this.flipPage("-50%", "0");

                setTimeout(() => {
                    document.querySelectorAll(".contentBook").forEach(e => {
                        e.style.display = "none";
                    });
                    document.querySelectorAll(".pages")[0].style.display = "block";
                }, 100);

                this.flipPage("-100%", "-1");

                this.state = false;
            }
        });

        this.home.addEventListener("click", () => {
            if(this.state === false) {
                this.flipPage("-50%", "0");

                setTimeout(() => {
                    document.querySelectorAll(".contentBook").forEach(e => {
                        e.style.display = "block";
                    });
                    document.querySelectorAll(".pages")[0].style.display = "none";
                }, 100);

                this.flipPage("0", "1");

                setTimeout(() => {
                    document.querySelectorAll(".pages")[1].style.display = "none";
                }, 300);

                this.state = true;
            }
        });


    }

    /**
     * Animation flip page
     * @param translate
     * @param scale
     */
    flipPage(translate, scale) {
        document.getElementById("bookDiv").animate([
            {
                transform: 'translate(' + translate + ') scaleX(' + scale + ')'
            },
        ], {
            duration: 300,
            fill: "forwards"
        });
    }
}
export {Label};