

/* function addElement(parent, elementType, text) { // adiciona um elemento com "parent" - pai. que ele usa para chamar ali embaixo; - tipo de elemento "td,tr,"
    const element = document.createElement(elementType); // nao se direciona parametros entre aspas
    if (text !== "" && text !== undefined && text !== null && text !== 0) {
        //  if (text === "") {
        element.innerText = text; // this is a conditional that makes the function able to accept empty parameters
    }
    parent.appendChild(element);
}
*/

const tela = new Tela();
tela.renderizar();




