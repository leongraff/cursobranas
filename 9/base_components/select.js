class Select {
    constructor(id) {
        this.element = document.createElement("select"); // creates the select by an id
        this.element.id = id //linking the id of the class with de id of the element created
    }
    addOption(text) {
        const option = document.createElement("option");
        option.text = text;
        this.element.appendChild(option); //calls the option text
    }
}
