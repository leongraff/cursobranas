class Div {
    constructor(id, className) { //parameter to receive the function value
        this.element = document.createElement("div");
        this.element.id = id;
        this.element.className = className
    }
    addChildElement(child) {
        this.element.appendChild(child);
    }
}
