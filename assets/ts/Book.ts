
export class Books {
    public container: HTMLDivElement;
    public divContainer: HTMLDivElement;
    public divBack: HTMLDivElement;
    public title: HTMLDivElement;
    public signing: HTMLDivElement;
    public content: HTMLDivElement;
    public pageRight: HTMLDivElement;
    public pageSubRight: HTMLDivElement;
    public pageLeft: HTMLDivElement;
    public pageSubLeft: HTMLDivElement;


    /**
     * Constructor
     */
    constructor() {
        this.container = document.getElementById("container") as HTMLDivElement;
        this.divContainer = document.createElement("div") as HTMLDivElement;
        this.divBack = document.createElement("div") as HTMLDivElement;
        this.title = document.createElement("div") as HTMLDivElement;
        this.content = document.createElement("div") as HTMLDivElement;
        this.signing = document.createElement("div") as HTMLDivElement;
        this.pageRight = document.createElement("div") as HTMLDivElement;
        this.pageLeft = document.createElement("div") as HTMLDivElement;
        this.pageSubRight = document.createElement("div") as HTMLDivElement;
        this.pageSubLeft = document.createElement("div") as HTMLDivElement;
    }

    /**
     * Init the book into the container.
     * Write the content of page
     */
    public async init(): Promise<void> {
        this.divContainer.id = "bookDiv";
        this.divBack.id = "bookDivBack";
        this.title.innerHTML = "Portfolio";
        this.content.innerHTML = '' +
            '<p>Bienvenue sur mon portfolio numérique.</p>' +
            '<p>Vous retrouverez tous mes projets et informations sur mon parcours professionel.</p>' +
            '<p>Bon visionnage.</p>';
        this.signing.innerHTML = "Amaury Jocaille";

        this.addClassId();

        this.divContainer.appendChild(this.title);
        this.divContainer.appendChild(this.content);
        this.divContainer.appendChild(this.signing);
        this.divContainer.appendChild(this.pageLeft);
        this.divBack.appendChild(this.pageRight);
        this.divContainer.appendChild(this.pageSubLeft);
        this.divBack.appendChild(this.pageSubRight);
        this.container.appendChild(this.divContainer);
        this.container.appendChild(this.divBack);
    }

    /**
     * Add class for different elements
     */
    public addClassId():void {
        this.title.className = "contentBook";
        this.content.className = "contentBook";
        this.signing.className = "contentBook";

        this.pageRight.id = "pageRight";
        this.pageLeft.id = "pageLeft";
        this.pageSubRight.id = "subPageRight";
        this.pageSubLeft.id = "subPageLeft";

        this.pageRight.className = "pages";
        this.pageLeft.className = "pages";
        this.pageSubRight.className = "pages";
        this.pageSubLeft.className = "pages";
    }
}
