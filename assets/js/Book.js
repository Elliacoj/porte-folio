class Book {
    /**
     * Constructor
     */
    constructor() {
        this.container = document.getElementById("container");
        this.divContainer = document.createElement("div");
        this.title = document.createElement("div");
        this.content = document.createElement("div");
        this.signing = document.createElement("div");
    }

    /**
     * Init the book into the container.
     * Write the content of page
     */
    init() {
        this.divContainer.id = "bookDiv";
        this.title.innerHTML = "Portfolio";
        this.content.innerHTML = '' +
            '<p>Bienvenue sur mon portfolio numérique.</p>' +
            '<p>Vous retrouverez tous mes projets et informations sur mon parcours professionel.</p>' +
            '<p>Bon visionnage.</p>';
        this.signing.innerHTML = "Amaury Jocaille";

        this.divContainer.appendChild(this.title);
        this.divContainer.appendChild(this.content);
        this.divContainer.appendChild(this.signing);
        this.container.appendChild(this.divContainer);
    }
}
export {Book};