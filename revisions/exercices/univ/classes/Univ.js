class Univ {
  constructor(name, url) {
    this.name = name;
    this.url = url;

    this.render();
  }
  render() {
    const section_elt = this.createDomElement("section", "", document.querySelector("#univs"), []);
    const name_elt = this.createDomElement("h2", this.name, section_elt, []);
    const link_elt = this.createDomElement("a", "Voir le site web", section_elt, [["href", this.url]]);
  }
  /**
   * 
   * @param {String} markup_name 
   * @param {String} text 
   * @param {Dom Element} parent 
   * @param {Array} attributes
   */
  createDomElement(markup_name, text, parent, attributes) {
    const dom_element = document.createElement(markup_name);
    dom_element.innerText = text;
    parent.appendChild(dom_element);
    attributes.forEach(attribute => {
      dom_element.setAttribute(attribute[0], attribute[1]);
    })
    return dom_element;
  }
}
export default Univ;