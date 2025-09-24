
import "./styles/main.scss";

import { Footer } from "./common/Footer/Footer.js";
import { createHeader } from "./common/Header/Header.js";
import { ContactForm } from "./components/ContactForm/ContactForm.js";

document.addEventListener("DOMContentLoaded", () => {
  // Add header to the page using the new reusable function
  const header = createHeader("index");
  document.body.insertAdjacentElement("afterbegin", header);

  // Create main element if it doesn't exist
  let mainElement = document.querySelector("main");
  if (!mainElement) {
    mainElement = document.createElement("main");
    mainElement.innerHTML = "<h1>Main Content</h1><p>This is the main content area.</p>";
    document.body.appendChild(mainElement);
  }

  // Footer with detailed view (shows both light blue and dark blue sections)
  const footer = new Footer(document.body, true);
  footer.render();

  // Initialize ContactForm - it will auto-detect it's on index page and set up modal mode
  const contactForm = ContactForm.create();
  contactForm.render();
});