import "./ContactForm.scss";

export class ContactForm {
  constructor(container = null, mode = "page") {
    this.container = container;
    this.mode = mode;
    this.formElement = null;
    this.modalElement = null;
    this.isOpen = false;
  }

  // автоопределение режима по текущей странице
  static create(container = null) {
    const currentPage = window.location.pathname;
    const mode =
      currentPage.includes("contact") || currentPage.includes("contact-us")
        ? "page"
        : "modal";
    return new ContactForm(container, mode);
  }

  createFormHTML() {
    return `
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
    `;
  }

  createModalHTML() {
    return `
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
    `;
  }

  render() {
    if (this.mode === "page") {
      return this.renderAsPage();
    } else {
      return this.renderAsModal();
    }
  }

  renderAsPage() {
    const grid = document.querySelector(".content-wrapper");
    if (!grid) {
      console.error("No .contact-us-grid element found");
      return null;
    }

    grid.classList.add("contact-form-page");

    const formWrapper = document.createElement("div");
    formWrapper.innerHTML = this.createFormHTML();
    const formElement = formWrapper.firstElementChild;

    // удаляем старую форму
    const oldForm = grid.querySelector("#contact-form");
    if (oldForm) oldForm.remove();

    grid.appendChild(formElement);
    this.formElement = formElement;
    this.attachFormEventListeners();
    return grid;
  }

  renderAsModal() {
    this.setupModalTrigger();
    return null;
  }

  setupModalTrigger() {
    const checkForButton = () => {
      const talkButton = document.querySelector(".btn-modal");
      if (talkButton) {
        talkButton.addEventListener("click", (e) => {
          e.preventDefault();
          this.openModal();
        });
      } else {
        setTimeout(checkForButton, 100);
      }
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", checkForButton);
    } else {
      checkForButton();
    }
  }

  openModal() {
    if (this.isOpen) return;

    this.modalElement = document.createElement("div");
    this.modalElement.innerHTML = this.createModalHTML();
    document.body.appendChild(this.modalElement);

    this.formElement = this.modalElement.querySelector(".modal-form-container");
    document.body.style.overflow = "hidden";

    this.isOpen = true;
    this.attachFormEventListeners();
    this.attachModalEventListeners();
  }

  closeModal() {
    if (!this.isOpen) return;

    if (this.modalElement) {
      document.body.removeChild(this.modalElement);
      this.modalElement = null;
      this.formElement = null;
    }

    document.body.style.overflow = "";
    this.isOpen = false;
  }

  attachFormEventListeners() {
    const form = this.getForm();
    if (form) {
      form.addEventListener("submit", (e) => this.handleSubmit(e));

      // валидация в реальном времени
      const inputs = form.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        input.addEventListener("blur", () => this.validateField(input));
        input.addEventListener("input", () => this.clearFieldError(input));
      });
    }
  }

  attachModalEventListeners() {
    if (this.mode !== "modal" || !this.isOpen) return;

    const closeBtn = this.modalElement.querySelector("#modal-close");
    const overlay = this.modalElement.querySelector("#modal-overlay");

    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.closeModal());
    }

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          this.closeModal();
        }
      });
    }

    // закрытие по escape
    const escapeHandler = (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeModal();
        document.removeEventListener("keydown", escapeHandler);
      }
    };
    document.addEventListener("keydown", escapeHandler);
  }

  getForm() {
    if (!this.formElement) return null;
    return this.formElement.querySelector("#contact-form") || this.formElement;
  }

  getFormData() {
    const container =
      this.mode === "modal" ? this.modalElement : this.formElement;
    if (!container) return null;

    return {
      fullName: container.querySelector("#fullName")?.value?.trim() || "",
      email: container.querySelector("#email")?.value?.trim() || "",
      message: container.querySelector("#message")?.value?.trim() || "",
    };
  }

  validateField(field) {
    const fieldName = field.name;
    const value = field.value.trim();
    let error = "";

    switch (fieldName) {
      case "fullName":
        if (!value) {
          error = "Full name is required";
        } else if (value.length < 2) {
          error = "Full name must be at least 2 characters";
        } else if (!/^[a-zA-Zа-яА-ЯёЁ\s-']+$/.test(value)) {
          error =
            "Full name can only contain letters, spaces, hyphens and apostrophes";
        }
        break;

      case "email":
        if (!value) {
          error = "Email is required";
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            error = "Please enter a valid email address";
          }
        }
        break;

      case "message":
        if (!value) {
          error = "Message is required";
        } else if (value.length < 10) {
          error = "Message must be at least 10 characters";
        } else if (value.length > 1000) {
          error = "Message must not exceed 1000 characters";
        }
        break;
    }

    this.displayFieldError(fieldName, error);
    return !error;
  }

  validateForm(formData) {
    const errors = {};

    if (!formData.fullName) {
      errors.fullName = "Full name is required";
    } else if (formData.fullName.length < 2) {
      errors.fullName = "Full name must be at least 2 characters";
    } else if (!/^[a-zA-Zа-яА-ЯёЁ\s-']+$/.test(formData.fullName)) {
      errors.fullName =
        "Full name can only contain letters, spaces, hyphens and apostrophes";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
    }

    if (!formData.message) {
      errors.message = "Message is required";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 1000) {
      errors.message = "Message must not exceed 1000 characters";
    }

    return errors;
  }

  displayFieldError(fieldName, error) {
    const container =
      this.mode === "modal" ? this.modalElement : this.formElement;
    if (!container) return;

    const errorElement = container.querySelector(`#${fieldName}-error`);
    if (errorElement) {
      errorElement.textContent = error;
    }
  }

  clearFieldError(field) {
    const fieldName = field.name;
    const container =
      this.mode === "modal" ? this.modalElement : this.formElement;
    if (!container) return;

    const errorElement = container.querySelector(`#${fieldName}-error`);
    if (errorElement) {
      errorElement.textContent = "";
    }
  }

  displayErrors(errors) {
    const container =
      this.mode === "modal" ? this.modalElement : this.formElement;
    if (!container) return;

    container.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
    });

    Object.keys(errors).forEach((field) => {
      const errorElement = container.querySelector(`#${field}-error`);
      if (errorElement) {
        errorElement.textContent = errors[field];
      }
    });
  }

  clearAllFields() {
    const container =
      this.mode === "modal" ? this.modalElement : this.formElement;
    if (!container) return;

    // очищаем все поля
    const inputs = container.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.value = "";
    });

    // очищаем все ошибки
    container.querySelectorAll(".error-message").forEach((el) => {
      el.textContent = "";
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    const formData = this.getFormData();
    if (!formData) return;

    // валидация формы
    const errors = this.validateForm(formData);

    if (Object.keys(errors).length > 0) {
      this.displayErrors(errors);
      return;
    }

    this.displayErrors({});

    try {
      // instead of axios.post → just console.log
      console.log("Simulated POST to /api/contact");
      console.log("Data:", formData);
      console.log("Headers:", { "Content-Type": "application/json" });

      console.log("форма отправлена успешно (симуляция)");

      // очищаем все поля после "успешной отправки"
      this.clearAllFields();

      // закрываем модальное окно
      if (this.mode === "modal") {
        this.closeModal();
      }
    } catch (error) {
      console.error("ошибка отправки формы (симуляция):", error.message);

      // закрываем модальное окно даже при ошибке
      if (this.mode === "modal") {
        this.closeModal();
      }
    }
  }
}
