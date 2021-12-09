import {ContentPageCv} from "./ContentPageCv";

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
        this.state = "home";
    }

    /**
     * Init the label into container
     */
    init() {
        this.home.innerHTML = "Accueil";
        this.cv.innerHTML = "CV";
        this.project.innerHTML = "PROJETS";
        this.labelDiv.style.zIndex = "15";
        this.labelDiv.style.position = "relative";

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
            if(this.state === "home") {
                let contentPage = new ContentPageCv();
                contentPage.init();
                if(screen.width > "850") {
                    contentPage.cvPage(0);
                }
                else {
                    contentPage.cvPageResponsive(0);
                }

                document.getElementById("pageRight").style.display = "flex";
                document.getElementById("bookDiv").classList.add("boxShadow");
                document.getElementById("subPageRight").style.display = "flex";
                document.getElementById("bookDivBack").style.background = "url(\"./build/images/font-book.jpg\")";
                this.flipPage("-50%", "0");

                setTimeout(() => {
                    document.querySelectorAll(".contentBook").forEach(e => {
                        e.style.display = "none";
                    });
                    document.getElementById("pageLeft").style.display = "flex";
                    document.getElementById("subPageLeft").style.display = "flex";
                    document.getElementById("bookDivBack").style.zIndex = "10";

                }, 100);

                this.flipPage("-100%", "-1");
                this.state = "cv";

                if(screen.width < "1400" && screen.width > "850") {
                    this.container.style.width = "95rem";
                }
            }
            else if(this.state !== "cv") {
                let contentPage = new ContentPageCv();
                contentPage.init();
                contentPage.cvPage(2, 1);
            }
        });

        this.project.addEventListener("click", () => {
            if(this.state === "home") {
                let contentPage = new ContentPageCv();
                contentPage.projectPage();

                document.getElementById("pageRight").style.display = "flex";
                document.getElementById("bookDiv").classList.add("boxShadow");
                document.getElementById("subPageRight").style.display = "flex";
                document.getElementById("bookDivBack").style.background = "url(\"./build/images/font-book.jpg\")";
                this.flipPage("-50%", "0");

                setTimeout(() => {
                    document.querySelectorAll(".contentBook").forEach(e => {
                        e.style.display = "none";
                    });
                    document.getElementById("pageLeft").style.display = "flex";
                    document.getElementById("subPageLeft").style.display = "flex";

                    if(screen.width > "850") {
                        document.getElementById("bookDivBack").style.zIndex = "10";
                    }
                }, 100);

                this.flipPage("-100%", "-1");
                this.state = "project";

                if(screen.width < "1400" && screen.width > "850") {
                    this.container.style.width = "95rem";
                }
            }
        });

        this.home.addEventListener("click", () => {
            if(this.state !== "home") {
                if(screen.width > "850") {
                    document.getElementById("bookDivBack").style.zIndex = "-1";
                }

                this.flipPage("-50%", "0");

                setTimeout(() => {
                    document.querySelectorAll(".contentBook").forEach(e => {
                        e.style.display = "block";
                    });
                    document.getElementById("pageLeft").style.display = "none";

                    document.getElementById("subPageLeft").style.display = "none";
                }, 100);

                this.flipPage("0", "1");

                setTimeout(() => {
                    document.getElementById("pageRight").style.display = "none";
                    document.getElementById("subPageRight").style.display = "none";
                    document.getElementById("bookDiv").classList.remove("boxShadow");
                    document.getElementById("bookDivBack").style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\"./build/images/font-book.jpg\")";
                }, 300);

                this.state = "home";

                if(screen.width < "1400" && screen.width > "850") {
                    this.container.style.width = "50rem";
                }
            }
        });


    }

    /**
     * Animation flip page
     * @param translate
     * @param scale
     */
    flipPage(translate, scale) {
        if(screen.width <= "850") {
            document.getElementById("bookDiv").animate([
                {
                    transform: 'translateY(' + translate + ') scaleY(' + scale + ')'
                },
            ], {
                duration: 300,
                fill: "forwards"
            });
        }
        else {
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
}
export {Label};