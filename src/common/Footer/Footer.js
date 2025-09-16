import "./Footer.css";

/**
 *
 */
export function createFooter(isDetailed = true) {
  const footer = document.createElement("footer");

  if (isDetailed) {
    footer.innerHTML = `
      <div class="footer-upper">
        <div class="container">
          <div class="client-header">
            <h2>Our Beloved Client</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
          <div class="logo-grid">
            <div class="logo-item">LOGO CLIENT 1</div>
            <div class="logo-item">LOGO CLIENT 2</div>
            <div class="logo-item">LOGO CLIENT 3</div>
            <div class="logo-item">LOGO CLIENT 4</div>
            <div class="logo-item">LOGO CLIENT 5</div>
            <div class="logo-item">LOGO CLIENT 6</div>
            <div class="logo-item">LOGO CLIENT 7</div>
            <div class="logo-item">
              <button>More Client</button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-main">

        <div class="footer-content">
          <div class="container">
          <div class="cta-content">
          <div class="content-container">
            <div class="cta-text">
              <h2>Interested to work with our team?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <button class="btn btn-modal">Let's Talk</button>
          </div>
        </div>

            <div class="footer-grid">
              <div class="company-info">
                <div>
                  <a href="#" class="logo">
                    <img src="/assets/logos/logo-dark.svg" alt="Afrianska Logo" />
                    <span>Afrianska</span>
                  </a>
                </div>
            <div class="info-list">
                    <p>
                      <span>A.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p><span>T.</span>+62-812-7313-4321</p>
                    <p><span>E.</span> hello.afrian@gmail.com</p>
                  </div>
              </div>

              <div class="footer-column">
                <h3>About US</h3>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">What We Do</a></li>
                  <li><a href="#">Project</a></li>
                  <li><a href="#">How It Work With Us</a></li>
                </ul>
              </div>
              <div class="footer-column">
                <h3>Follow US</h3>
                <ul>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Youtube</a></li>
                </ul>
              </div>
                            <span class="copyright">2019 © Afrianska. All rights reserved.</span>

            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    footer.innerHTML = `
      <div class="footer-main">

        <div class="footer-content">
          <div class="container">
          <div class="cta-content">
          <div class="content-container">
            <div class="cta-text">
              <h2>Interested to work with our team?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <button href="#contact-form" class="btn btn-modal">Let's Talk</button>
          </div>
        </div>

            <div class="footer-grid">
              <div class="company-info">
                <div>
                  <a href="#" class="logo">
                    <img src="/assets/logos/logo-dark.svg" alt="Afrianska Logo" />
                    <span>Afrianska</span>
                  </a>
                </div>
            <div class="info-list">
                    <p>
                      <span>A.</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p><span>T.</span>+62-812-7313-4321</p>
                    <p><span>E.</span> hello.afrian@gmail.com</p>
                  </div>
              </div>

              <div class="footer-column">
                <h3>About US</h3>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">What We Do</a></li>
                  <li><a href="#">Project</a></li>
                  <li><a href="#">How It Work With Us</a></li>
                </ul>
              </div>
              <div class="footer-column">
                <h3>Follow US</h3>
                <ul>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Youtube</a></li>
                </ul>
              </div>
                            <span class="copyright">2019 © Afrianska. All rights reserved.</span>

            </div>
          </div>
        </div>
      </div>
    `;
  }

  return footer;
}

/**
 *
 */
export class Footer {

  constructor(bodyElement, isDetailed = true) {
    this.bodyElement = bodyElement;
    this.footerElement = null;
    this.isDetailed = isDetailed;
  }

  render() {
    this.footerElement = createFooter(this.isDetailed);

    const mainElement = this.bodyElement.querySelector("main");
    if (mainElement) {
      mainElement.insertAdjacentElement("afterend", this.footerElement);
    } else {
      this.bodyElement.appendChild(this.footerElement);
    }

    return this.footerElement;
  }

}


