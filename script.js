function openMenu() {
  document.body.classList += " menu--open";
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}
document.addEventListener("DOMContentLoaded", function () {
  const plans = document.querySelectorAll(".plans .plan");
  const socialLinks = document.querySelectorAll(".footer__social--link");

  plans.forEach(function (plan) {
    plan.addEventListener("click", function () {
      plans.forEach(function (item) {
        item.classList.remove("plan--selected");
      });

      this.classList.add("plan--selected");
    });
  });

  socialLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      socialLinks.forEach(function (item) {
        item.classList.remove("is-active");
      });

      this.classList.add("is-active");
    });
  });
});