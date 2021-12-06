class Book {
    /**
     * Constructor
     */
    constructor() {
        this.container = document.getElementById("container");
        this.divContainer = document.createElement("div");
        this.divBack = document.createElement("div");
        this.title = document.createElement("div");
        this.content = document.createElement("div");
        this.signing = document.createElement("div");
        this.pageRight = document.createElement("div");
        this.pageLeft = document.createElement("div");
    }

    /**
     * Init the book into the container.
     * Write the content of page
     */
    async init() {
        this.divContainer.id = "bookDiv";
        this.divBack.id = "bookDivBack";
        this.title.innerHTML = "Portfolio";
        this.content.innerHTML = '' +
            '<p>Bienvenue sur mon portfolio numérique.</p>' +
            '<p>Vous retrouverez tous mes projets et informations sur mon parcours professionel.</p>' +
            '<p>Bon visionnage.</p>';
        this.signing.innerHTML = "Amaury Jocaille";

        this.title.className = "contentBook";
        this.content.className = "contentBook";
        this.signing.className = "contentBook";

        this.pageRight.className = "pages";
        this.pageLeft.className = "pages";

        this.divContainer.appendChild(this.title);
        this.divContainer.appendChild(this.content);
        this.divContainer.appendChild(this.signing);
        this.divContainer.appendChild(this.pageLeft);
        this.divBack.appendChild(this.pageRight);
        this.container.appendChild(this.divContainer);
        this.container.appendChild(this.divBack);
    }
}
export {Book};