(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();function n(l=!0){const e=document.createElement("footer");return l?e.innerHTML=`
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
                    <img src="./assets/logos/logo-dark.svg" alt="Afrianska Logo" />
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
    `:e.innerHTML=`
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
                    <img src="./assets/logos/logo-dark.svg" alt="Afrianska Logo" />
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
    `,e}class d{constructor(e,s=!0){this.bodyElement=e,this.footerElement=null,this.isDetailed=s}render(){this.footerElement=n(this.isDetailed);const e=this.bodyElement.querySelector("main");return e?e.insertAdjacentElement("afterend",this.footerElement):this.bodyElement.appendChild(this.footerElement),this.footerElement}}function c(l="index"){const e=document.createElement("header");return e.innerHTML=`
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
  `,e}class o{constructor(e=null,s="page"){this.container=e,this.mode=s,this.formElement=null,this.modalElement=null,this.isOpen=!1}static create(e=null){const s=window.location.pathname,t=s.includes("contact")||s.includes("contact-us")?"page":"modal";return new o(e,t)}createFormHTML(){return`
      <form class="contact-form" id="contact-form">
        <h3>send us message</h3>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Your Name">
          <span class="error-message" id="fullName-error"></span>
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email">
          <span class="error-message" id="email-error"></span>
        </div>
        
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message"></textarea>
          <span class="error-message" id="message-error"></span>
        </div>
        
        <button type="submit" class="btn">SUBMIT</button>
      </form>
    `}createModalHTML(){return`
      <div class="modal-overlay" id="modal-overlay">
        <div class="modal-content">
          <div class="modal-header">
            <h3>send us message</h3>
            <button class="modal-close" id="modal-close">&times;</button>
          </div>
          <div class="modal-form-container">
            ${this.createFormHTML()}
          </div>
        </div>
      </div>
    `}render(){return this.mode==="page"?this.renderAsPage():this.renderAsModal()}renderAsPage(){const e=document.querySelector(".content-wrapper");if(!e)return console.error("No .contact-us-grid element found"),null;e.classList.add("contact-form-page");const s=document.createElement("div");s.innerHTML=this.createFormHTML();const t=s.firstElementChild,i=e.querySelector("#contact-form");return i&&i.remove(),e.appendChild(t),this.formElement=t,this.attachFormEventListeners(),e}renderAsModal(){return this.setupModalTrigger(),null}setupModalTrigger(){const e=()=>{const s=document.querySelector(".btn-modal");s?s.addEventListener("click",t=>{t.preventDefault(),this.openModal()}):setTimeout(e,100)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()}openModal(){this.isOpen||(this.modalElement=document.createElement("div"),this.modalElement.innerHTML=this.createModalHTML(),document.body.appendChild(this.modalElement),this.formElement=this.modalElement.querySelector(".modal-form-container"),document.body.style.overflow="hidden",this.isOpen=!0,this.attachFormEventListeners(),this.attachModalEventListeners())}closeModal(){this.isOpen&&(this.modalElement&&(document.body.removeChild(this.modalElement),this.modalElement=null,this.formElement=null),document.body.style.overflow="",this.isOpen=!1)}attachFormEventListeners(){const e=this.getForm();e&&(e.addEventListener("submit",t=>this.handleSubmit(t)),e.querySelectorAll("input, textarea").forEach(t=>{t.addEventListener("blur",()=>this.validateField(t)),t.addEventListener("input",()=>this.clearFieldError(t))}))}attachModalEventListeners(){if(this.mode!=="modal"||!this.isOpen)return;const e=this.modalElement.querySelector("#modal-close"),s=this.modalElement.querySelector("#modal-overlay");e&&e.addEventListener("click",()=>this.closeModal()),s&&s.addEventListener("click",i=>{i.target===s&&this.closeModal()});const t=i=>{i.key==="Escape"&&this.isOpen&&(this.closeModal(),document.removeEventListener("keydown",t))};document.addEventListener("keydown",t)}getForm(){return this.formElement?this.formElement.querySelector("#contact-form")||this.formElement:null}getFormData(){const e=this.mode==="modal"?this.modalElement:this.formElement;return e?{fullName:e.querySelector("#fullName")?.value?.trim()||"",email:e.querySelector("#email")?.value?.trim()||"",message:e.querySelector("#message")?.value?.trim()||""}:null}validateField(e){const s=e.name,t=e.value.trim();let i="";switch(s){case"fullName":t?t.length<2?i="Full name must be at least 2 characters":/^[a-zA-Zа-яА-ЯёЁ\s-']+$/.test(t)||(i="Full name can only contain letters, spaces, hyphens and apostrophes"):i="Full name is required";break;case"email":t?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(i="Please enter a valid email address"):i="Email is required";break;case"message":t?t.length<10?i="Message must be at least 10 characters":t.length>1e3&&(i="Message must not exceed 1000 characters"):i="Message is required";break}return this.displayFieldError(s,i),!i}validateForm(e){const s={};return e.fullName?e.fullName.length<2?s.fullName="Full name must be at least 2 characters":/^[a-zA-Zа-яА-ЯёЁ\s-']+$/.test(e.fullName)||(s.fullName="Full name can only contain letters, spaces, hyphens and apostrophes"):s.fullName="Full name is required",e.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(s.email="Please enter a valid email address"):s.email="Email is required",e.message?e.message.length<10?s.message="Message must be at least 10 characters":e.message.length>1e3&&(s.message="Message must not exceed 1000 characters"):s.message="Message is required",s}displayFieldError(e,s){const t=this.mode==="modal"?this.modalElement:this.formElement;if(!t)return;const i=t.querySelector(`#${e}-error`);i&&(i.textContent=s)}clearFieldError(e){const s=e.name,t=this.mode==="modal"?this.modalElement:this.formElement;if(!t)return;const i=t.querySelector(`#${s}-error`);i&&(i.textContent="")}displayErrors(e){const s=this.mode==="modal"?this.modalElement:this.formElement;s&&(s.querySelectorAll(".error-message").forEach(t=>{t.textContent=""}),Object.keys(e).forEach(t=>{const i=s.querySelector(`#${t}-error`);i&&(i.textContent=e[t])}))}clearAllFields(){const e=this.mode==="modal"?this.modalElement:this.formElement;if(!e)return;e.querySelectorAll("input, textarea").forEach(t=>{t.value=""}),e.querySelectorAll(".error-message").forEach(t=>{t.textContent=""})}async handleSubmit(e){e.preventDefault();const s=this.getFormData();if(!s)return;const t=this.validateForm(s);if(Object.keys(t).length>0){this.displayErrors(t);return}this.displayErrors({});try{console.log("data:",s),this.clearAllFields(),this.mode==="modal"&&this.closeModal()}catch(i){console.error("ошибка отправки формы (симуляция):",i.message),this.mode==="modal"&&this.closeModal()}}}export{o as C,d as F,c};
