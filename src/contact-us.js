import "../src/styles/contact-us.scss";

import { Footer } from "./common/Footer/Footer.js";
import { createHeader } from "./common/Header/Header.js";
import { ContactForm } from "./components/ContactForm/ContactForm.js";

document.addEventListener("DOMContentLoaded", () => {
  const header = createHeader("contact");
  document.body.insertAdjacentElement("afterbegin", header);

  const mainElement = document.querySelector("main");
  if (mainElement) {
    const contactForm = ContactForm.create();
    contactForm.render();
  }

  // Add footer with isDetailed=false (only dark blue sections)
  const footer = new Footer(document.body, false);
  footer.render();
});