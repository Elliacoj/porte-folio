class Label {
    constructor() {
        this.container = document.getElementById("container");
        this.labelDiv = document.createElement("div");
        this.cv = document.createElement("div");
        this.project = document.createElement("div");
    }

    init() {
        this.cv.innerHTML = "CV";
        this.project.innerHTML = "PROJET";

        this.labelDiv.appendChild(this.cv);
        this.labelDiv.appendChild(this.project);
        this.container.appendChild(this.labelDiv);
    }
}
export {Label};