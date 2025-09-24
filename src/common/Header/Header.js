import "./Header.scss";

/**
 *
 */
export function createHeader(currentPage = "index") {
  const header = document.createElement("header");
  
  const logoLink = currentPage === "contact" ? "index.html" : "#";
  
  header.innerHTML = `
    <a href="#" class="logo">
      <img src="./assets/logos/logo-light.svg" alt="Afrianska Logo">
    </a>
    <nav>
      <ul>
        <li>
          <img class="burger-icon" src="./assets/burger-list.svg" alt="Burger List Icon">
        </li>
      </ul>
    </nav>
  `;
  
  return header;
}

/**
 *
 */
export class Header {

  constructor(bodyElement, currentPage = "index") {
    this.bodyElement = bodyElement;
    this.headerElement = null;
    this.currentPage = currentPage;
  }

  render() {
    this.headerElement = createHeader(this.currentPage);
    this.bodyElement.insertAdjacentElement("afterbegin", this.headerElement);
    return this.headerElement;
  }

}