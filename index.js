import {runingCalc} from "./app/calc.js"


class CustomSelect {
    #options;
    #id;
    #selectButton;
    #select;
    #ulContainer;
    #currentSelectedOption;
  
    static #defaultText = {
      selectItems: "My works"
    };
  
    constructor(id, options = []) {
      this.#selectButton = document.createElement("button");
      this.#select = document.createElement("select");
      this.#ulContainer = document.createElement("ul");
      this.#select.id = id;
      this.#select.style.display = "none";
  
      this.#options = options;
      this.#id = id;
      this.#currentSelectedOption = null;
    }
  
    get selectedValue() {
      return this.#currentSelectedOption;
    }
  
    #renderVisibleSelect(container) {
      const containerId = `select-dropdown__list--${this.#id}`;
      this.#ulContainer.className = `select-dropdown__list ${containerId}`;
  
      this.#options.forEach((option) => {
        const liItem = document.createElement("li");
        liItem.className = "select-dropdown__list-item";
        liItem.dataset.value = option.value;
        liItem.textContent = option.text;
        liItem.addEventListener(
          "click",
          this.#handleDropdownItemSelect.bind(this)
        );
        this.#ulContainer.append(liItem);
      });
  
      if (container) {
        container.append(this.#ulContainer);
      }
    }
  
    #renderSelectButton(container) {
      this.#selectButton.className = `select-dropdown__button select-dropdown__button--${
        this.#id
      }`;
      const buttonTextItem = document.createElement("span");
      buttonTextItem.className = `select-dropdown__text select-dropdown__text--${
        this.#id
      }`;
      buttonTextItem.textContent = CustomSelect.#defaultText.selectItems;
      this.#selectButton.append(buttonTextItem);
      container.append(this.#selectButton);
  
      this.#selectButton.addEventListener(
        "click",
        this.#handleDropdownToggle.bind(this)
      );
    }
  
    #handleDropdownToggle() {
      this.#ulContainer.classList.toggle("active");
    }
  
    #handleDropdownItemSelect(event) {
      const { target } = event;
      const dataValue = target.getAttribute("data-value");
      const targetOption = this.#options.find(
        (option) => option.value === Number(dataValue)
      );
  
      const selectButtonText = this.#selectButton.querySelector(
        ".select-dropdown__text"
      );
      if (selectButtonText && dataValue && targetOption) {
        this.#currentSelectedOption = targetOption;
        const allLiOptions = this.#ulContainer.querySelectorAll(
          ".select-dropdown__list-item"
        );
        allLiOptions.forEach((liOption) => {
          liOption.classList.remove("selected");
        });
        target.classList.add("selected");
  
        selectButtonText.textContent = targetOption.text;
        this.#ulContainer.classList.remove("active");
      }
    }
  
    render(container) {
      const selectDropdownContainer = document.createElement("div");
      selectDropdownContainer.className = `select-dropdown select-dropdown--${
        this.#id
      }`;
      if (container) {
        this.#renderSelectButton(selectDropdownContainer);
        this.#renderVisibleSelect(selectDropdownContainer);
        container.append(selectDropdownContainer);
      }
    }
  }
  
  const options = [
    { value: 1, text: "JavaScript" },
    { value: 2, text: "NodeJS" },
    { value: 3, text: "ReactJS" },
    { value: 4, text: "HTML" },
    { value: 5, text: "CSS" }
  ];


  const customSelect = new CustomSelect("123", options);
  const mainContainer = document.querySelector(".menu");


  function setCalc () {
    const div = document.createElement('div'),
        span = document.createElement('span')
    div.className = 'container_calc'  
    span.textContent = 'Calc'
    span.className = 'container_calc_span'

    div.append(span)
    mainContainer.append(div)
    const calcActive = document.querySelector('.container_calc_span')  
    calcActive.addEventListener('click', runingCalc)      
  }

setCalc ()
customSelect.render(mainContainer);
