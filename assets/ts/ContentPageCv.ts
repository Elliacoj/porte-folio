class ContentPageCv {
    public pageLeft: HTMLDivElement;
    public pageRight: HTMLDivElement;
    public subPageLeft: HTMLDivElement;
    public subPageRight: HTMLDivElement;
    public divOne: HTMLDivElement;
    public divTwo: HTMLDivElement;
    public divThree: HTMLDivElement;
    public divFour: HTMLDivElement;
    public studdyDate: string[];
    public studdyContent: string[];

    /**
     * Constructor
     */
    constructor() {
        this.pageLeft = document.getElementById("pageLeft") as HTMLDivElement;
        this.pageRight = document.getElementById("pageRight") as HTMLDivElement;
        this.subPageLeft = document.getElementById("subPageLeft") as HTMLDivElement;
        this.subPageRight = document.getElementById("subPageRight") as HTMLDivElement;
        this.divOne = document.createElement("div") as HTMLDivElement;
        this.divTwo = document.createElement("div") as HTMLDivElement;
        this.divThree = document.createElement("div") as HTMLDivElement;
        this.divFour = document.createElement("div") as HTMLDivElement;

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
    public init():void {
        this.pageOneCV();
        this.pageTwoCv();
        this.pageFourCv();
        this.pageThreeCv();
    }

    /**
     * Init the content of cv into pages
     * @returns
     */
    public cvPage(action:number = 0, book:number = 0) {
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

                this.flipPage("0%", "1", document.getElementById("pageRight")!, 1);

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
            if(book === 1) {
                this.flipPage("-114%", "-1", document.getElementById("pageLeft")!);
            }
            this.divTwo.style.cssText = "transform: rotateY(0)";
            document.getElementById("bookDiv")!.style.zIndex = "15";
            this.subPageLeft.innerHTML = "";
            this.subPageLeft.appendChild(this.divOne);

            setTimeout(() => {
                this.pageLeft.innerHTML = "";
                this.pageLeft.appendChild(this.divTwo);

            }, 150);

            setTimeout(() => {
                this.subPageRight.innerHTML = this.pageLeft.innerHTML;
                this.pageRight.innerHTML = this.pageLeft.innerHTML;
                this.pageLeft.style.display = "none";
                this.pageRight.style.display = "none";
                this.pageLeft.innerHTML = this.subPageLeft.innerHTML;

                this.flipPage("0%", "1", document.getElementById("pageLeft")!, 1);

                setTimeout(() => {
                    document.getElementById("bookDiv")!.style.zIndex = "0";
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
     * Init the content of cv into pages for responsive
     * @returns
     */
    public cvPageResponsive(action:number = 0, page:number = 0):void {
        if(action === 0) {
            this.pageRight.innerHTML = "";
            this.pageRight.appendChild(this.divOne);
        }
        else if(action === 1) {
            this.subPageRight.innerHTML = "";
            this.subPageRight.appendChild(this.divTwo);

            setTimeout(() => {
                this.pageRight.style.display = "none";
                this.pageRight.innerHTML = this.subPageRight.innerHTML;

                this.flipPage("0%", "1", document.getElementById("pageRight")!, 1);

                setTimeout(() => {
                    this.pageRight.style.display = "flex";
                    this.pageRight.innerHTML = '';
                    this.pageRight.appendChild(this.divTwo);
                }, 10);
            }, 320);
        }
        else if(action === 2) {
            if(page === 1) {
                document.getElementById("bookDivBack")!.style.zIndex = "-1";
                this.divOne.style.cssText = "transform: rotateY(0)";
                this.pageLeft.innerHTML = "";
                this.pageLeft.appendChild(this.divOne);

                setTimeout(() => {
                    this.pageLeft.style.display = "none";
                    this.pageRight.innerHTML = this.pageLeft.innerHTML;
                    document.getElementById("bookDivBack")!.style.zIndex = "10";
                    this.flipPage("0", "1", document.getElementById("pageLeft")!, 1);

                    setTimeout(() => {
                        this.pageLeft.style.display = "flex";
                        this.pageRight.innerHTML = "";
                        this.pageRight.appendChild(this.divOne)
                    }, 10);
                }, 320);
            }
            else if(page === 2) {
                this.subPageRight.innerHTML = "";
                this.subPageRight.appendChild(this.divThree);

                setTimeout(() => {
                    this.pageRight.style.display = "none";
                    this.pageRight.innerHTML = this.subPageRight.innerHTML;

                    this.flipPage("0%", "1", document.getElementById("pageRight")!, 1);

                    setTimeout(() => {
                        this.pageRight.style.display = "flex";
                        this.pageRight.innerHTML = '';
                        this.pageRight.appendChild(this.divThree);
                    }, 10);
                }, 320);
            }
            else if(page === 3) {
                document.getElementById("bookDivBack")!.style.zIndex = "-1";
                this.divTwo.style.cssText = "transform: rotateY(0)";
                this.pageLeft.innerHTML = "";
                this.pageLeft.appendChild(this.divTwo);

                setTimeout(() => {
                    this.pageLeft.style.display = "none";
                    this.pageRight.innerHTML = this.pageLeft.innerHTML;
                    document.getElementById("bookDivBack")!.style.zIndex = "10";
                    this.flipPage("0", "1", document.getElementById("pageLeft")!, 1);

                    setTimeout(() => {
                        this.pageLeft.style.display = "flex";
                        this.pageRight.innerHTML = "";
                        this.pageRight.appendChild(this.divTwo)
                    }, 10);
                }, 320);
            }
            else if(page === 4) {
                this.subPageRight.innerHTML = "";
                this.subPageRight.appendChild(this.divFour);

                setTimeout(() => {
                    this.pageRight.style.display = "none";
                    this.pageRight.innerHTML = this.subPageRight.innerHTML;

                    this.flipPage("0%", "1", document.getElementById("pageRight")!, 1);

                    setTimeout(() => {
                        this.pageRight.style.display = "flex";
                        this.pageRight.innerHTML = '';
                        this.pageRight.appendChild(this.divFour);
                    }, 10);
                }, 320);
            }
            else if(page === 5) {
                document.getElementById("bookDivBack")!.style.zIndex = "-1";
                this.divThree.style.cssText = "transform: rotateY(0)";
                this.pageLeft.innerHTML = "";
                this.pageLeft.appendChild(this.divThree);

                setTimeout(() => {
                    this.pageLeft.style.display = "none";
                    this.pageRight.innerHTML = this.pageLeft.innerHTML;
                    document.getElementById("bookDivBack")!.style.zIndex = "10";
                    this.flipPage("0", "1", document.getElementById("pageLeft")!, 1);

                    setTimeout(() => {
                        this.pageLeft.style.display = "flex";
                        this.pageRight.innerHTML = "";
                        this.pageRight.appendChild(this.divThree)
                    }, 10);
                }, 320);
            }
        }
    }

    /**
     * Content for page one of CV
     */
    public pageOneCV():void {
        let h1 = document.createElement("h1") as HTMLElement;
        let personalInfoH = document.createElement("h2") as HTMLElement;
        let skillsH = document.createElement("h2") as HTMLElement;
        let divPersonal = document.createElement("div") as HTMLDivElement;

        let personalInfo: string[] = [
            "<i class='far fa-map'></i> Rue de la Station 5", "<i class='fas fa-mail-bulk'></i> 6590", "<i class='far fa-flag'></i> Momignies",
            "<i class='fas fa-globe-europe'></i> Belgique", "<i class='fas fa-phone-square-alt'></i> +32 493 07 90 96", "<i class='fas fa-at'></i> amaury.jocaille@hotmail.com",
            "<i class='fas fa-car'></i> Permis B + voiture"
        ];

        let skills: string[] = [
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

        this.addButton("buttonNext", document.getElementById("pageRight")!, 1, "Page suivante >", this.divOne, 0);
    }

    /**
     * Content for page two of CV
     */
    public pageTwoCv():void {
        let assetH = document.createElement("h2") as HTMLElement;
        let asset: string[] = [
            "Capacités organisationnelles", "Soigneux et méticuleux", "Intégration facile dans une équipe", "Autonome", "Résistant au stress"
        ];

        assetH.innerHTML = "Atouts";
        let buttonNext = document.createElement("div") as HTMLDivElement;

        buttonNext.innerHTML = "Page suivante >";
        buttonNext.className = "buttonNext";
        this.divTwo.appendChild(assetH);
        this.data(asset, this.divTwo);

        this.divTwo.appendChild(buttonNext);
        if(screen.width > 850) {
            buttonNext.addEventListener("click", () => this.click(1, document.getElementById("pageRight")!, 2));
        }

        this.addButton("buttonNext", document.getElementById("pageRight")!, 2, "Page suivante >", this.divTwo, 2);
        this.addButton("buttonPrevious", document.getElementById("pageLeft")!, 2, "< Page précédente", this.divTwo, 1);
    }

    /**
     * Content for page three of CV
     */
    public pageThreeCv():void {
        let studyH = document.createElement("h2") as HTMLElement;
        let buttonPrevious = document.createElement("div") as HTMLDivElement;

        buttonPrevious.innerHTML = "< Page précédente";
        buttonPrevious.className = "buttonPrevious";
        studyH.innerHTML = "Etudes et formations";
        this.divThree.appendChild(studyH);

        for(let x:number = 0; x < this.studdyContent.length; x++) {
            if(x <= 4 ) {
                let div = document.createElement("div") as HTMLDivElement;
                div.style.cssText = "padding: 0.7rem 4%";
                div.innerHTML = "<p>" + this.studdyDate[x] + "</p><p>" + this.studdyContent[x] + "</p>";
                this.divThree.appendChild(div);
            }
        }

        this.divThree.appendChild(buttonPrevious);
        buttonPrevious.addEventListener("click", () => this.click(2, document.getElementById("pageLeft")!, 3));
        this.addButton("buttonNext", document.getElementById("pageRight")!, 2, "Page suivante >", this.divThree, 4);
    }

    /**
     * Content for page four of CV
     */
    public pageFourCv():void {
        for(let x:number = 5; x < this.studdyContent.length; x++) {
            if(x <= 10 ) {
                let div = document.createElement("div") as HTMLDivElement;
                div.style.cssText = "padding: 0.7rem 4%";
                div.innerHTML = "<p>" + this.studdyDate[x] + "</p><p>" + this.studdyContent[x] + "</p>";
                this.divFour.appendChild(div);
            }
        }
        this.addButton("buttonPrevious", document.getElementById("pageLeft")!, 2, "< Page précédente", this.divFour, 5);
    }

    /**
     * Init the content project into pages
     */
    public projectPage():void {
        this.pageLeft.innerHTML = "";
        this.pageRight.innerHTML = "";
    }

    /**
     * Create data div for append page
     * @param array
     * @param page
     * @param check
     */
    public data(array: string[], page:HTMLElement, check:boolean = false):void {
        array.forEach(e => {
            let div = document.createElement("div");
            if(check) {
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
    public click(action:number, element:HTMLElement, page:number = 0):void {
        if(screen.width <= 850) {
            this.cvPageResponsive(action, page);
        }
        else {
            this.cvPage(action);
        }

        if((page === 1 || page === 3 || page === 5) && screen.width <= 850) {
            this.flipPage("-104.5%", "-1", element);
        }
        else {
            this.flipPage("-114%", "-1", element);
        }

    }

    /**
     * Animation for change page
     * @param translate
     * @param scale
     * @param page
     * @param duration
     */
    public flipPage(translate:string, scale:string, page:HTMLElement, duration:number = 300):void {
        if(screen.width <= 850) {
            console.log("ok");
            page.animate([
                {
                    transform: 'translateY(' + translate + ') scaleY(' + scale + ')'
                },
            ], {
                duration: duration,
                fill: "forwards"
            });
        }
        else {
            page.animate([
                {
                    transform: 'translate(' + translate + ') scaleX(' + scale + ')'
                },
            ], {
                duration: duration,
                fill: "forwards"
            });
        }
    }

    /**
     * Create a button
     * @param type
     * @param element
     * @param action
     * @param content
     * @param container
     * @param page
     */
    public addButton(type:string, element:HTMLElement, action:number, content:string, container:HTMLElement, page:number):void {
        if(screen.width <= 850) {
            let button = document.createElement("div");
            button.innerHTML = content;
            button.className = type;
            container.appendChild(button);
            button.addEventListener("click", () => this.click(action, element, page));
        }
    }
}
export {ContentPageCv}