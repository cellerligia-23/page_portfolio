const btn_skills = document.getElementById("icon-skills");
const btn_languages = document.getElementById("icon-languages");
const btn_education = document.getElementById("icon-education");
const btn_portfolio = document.getElementById("icon-portfolio");
const btn_professional_experience = document.getElementById("icon-professional-experience");

function changeDisplay({ target }) {
  const icon = target.classList;
  const section = target.parentNode.parentNode;
  let display = target.parentNode.parentNode.lastElementChild;
  
  console.log(display);

  if (icon[1] === "fa-sort-down") {
    display.style.display = "block";
    section.style.backgroundColor = "#b054b8";
    icon.remove("fa-sort-down");
    icon.add("fa-sort-up");
  } else {
    display.style.display = "none";
    section.style.backgroundColor = "transparent";
    icon.remove("fa-sort-up");
    icon.add("fa-sort-down");
  };
};

btn_skills.addEventListener("click", changeDisplay);
btn_languages.addEventListener("click", changeDisplay);
btn_education.addEventListener("click", changeDisplay);
btn_portfolio.addEventListener("click", changeDisplay);
btn_professional_experience.addEventListener("click", changeDisplay);
