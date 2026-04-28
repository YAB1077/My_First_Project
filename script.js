function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

document.addEventListener("DOMContentLoaded", () => {
  const plans = document.querySelectorAll(".plan[data-plan]");

  const setActivePlan = (selectedPlan) => {
    plans.forEach((plan) => {
      plan.classList.toggle("is-active", plan === selectedPlan);
    });
  };

  plans.forEach((plan) => {
    plan.addEventListener("click", (event) => {
      event.preventDefault();
      setActivePlan(plan);
    });

    const button = plan.querySelector(".plan__btn");
    if (button) {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        setActivePlan(plan);
      });
    }

    plan.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setActivePlan(plan);
      }
    });
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    closeMenu();
  }
});
