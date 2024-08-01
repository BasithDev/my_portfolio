let sendbtn = document.getElementById("sendBtn")
  sendbtn.addEventListener("click", sendMail)
  async function sendMail(e){
    e.preventDefault()
    let alertmsg = document.getElementById("alertMsg")
    let name = document.getElementById("fullname")
    let email = document.getElementById("mail")
    let phno = document.getElementById("number")
    let mesg = document.getElementById("msg")
    let regexNumber = /^(\+)?[-\s]?([0-9]{1,3})?[0-9]{10}$/
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexName = /^[a-zA-z][a-zA-z]{2,}$/
  let params = {
    from_name : name.value,
    mail: email.value,
    number: phno.value,
    message: mesg.value
  }
  if (params.from_name === "" || params.mail === "" || params.message === "" || params.number === "") {
      alertmsg.style.display = "block"
      alertmsg.style.color = "red"
      alertmsg.innerHTML = "Please Enter Details"
      setTimeout(() => {
        alertmsg.style.display = "none"
      }, 3000)
  }
  else if (!regexName.test(params.from_name)){
    alertmsg.style.display = "block"
    alertmsg.style.color = "red"
    alertmsg.innerHTML = "Please Enter Proper Name"
    setTimeout(() => {
      alertmsg.style.display = "none"
    }, 3000)
  }
  else if (!regexNumber.test(params.number)){
    alertmsg.style.display = "block"
    alertmsg.style.color = "red"
    alertmsg.innerHTML = "Please Enter Proper Phone Number"
    setTimeout(() => {
      alertmsg.style.display = "none"
    }, 3000)
  }
  else if (!regexEmail.test(params.mail)) {
    alertmsg.style.display = "block"
    alertmsg.style.color = "red"
    alertmsg.innerHTML = "Please Enter Proper Email"
    setTimeout(() => {
      alertmsg.style.display = "none"
    }, 3000)
  }
  else {
    await emailjs.send('service_z53ct4t', 'template_occ9hhd', params).then(
      () => {
        alertmsg.style.display = "block"
       alertmsg.style.color = "green"
       alertmsg.innerHTML = "Message Sent"
       setTimeout(() => {
        alertmsg.style.display = "none"
       }, 3000);
      },
      () => {
        alertmsg.style.display = "block"
        alertmsg.style.color = "red"
        alertmsg.innerHTML = "Message Not Sent"
        setTimeout(() => {
          alertmsg.style.display = "none"
         }, 3000);
      },
    ); 
  }
  name.value = '' , email.value = '',phno.value = '',mesg.value = ''
}

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}