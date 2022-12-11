const faqItemElements = document.querySelectorAll(".faq-item");

const toggleActive = (element) => {
  faqItemElements.forEach((el) => el.classList.remove("active"));
  element.classList.toggle("active");
};

faqItemElements.forEach((faqItem) => {
  faqItem.addEventListener("click", () => toggleActive(faqItem));
});
