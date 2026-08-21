const LANG = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "pt"; // ?lang=en

const i18n = { pt: PT_BR, en: EN };

function renderLinks(t) {
  const el = document.getElementById("links");
  el.innerHTML = "";
  t.links.forEach((link, i) => {
    if (i > 0) el.appendChild(document.createTextNode(" | "));
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.label;
    a.target = "_blank";
    el.appendChild(a);
  });
}

function renderSkills(t) {
  const el = document.getElementById("skills");
  el.innerHTML = "";
  t.skills.forEach((item) => {
    const li = document.createElement("li");
    const label = document.createElement("strong");
    label.textContent = `${item.label}:`;
    li.appendChild(label);
    li.appendChild(document.createTextNode(` ${item.value}`));
    el.appendChild(li);
  });
}

function makeEntryHeader(leftContent, periodText) {
  const header = document.createElement("div");
  header.className = "entry-header";

  const left = document.createElement("span");
  left.appendChild(leftContent);

  const period = document.createElement("span");
  period.className = "entry-period";
  period.textContent = periodText;

  header.appendChild(left);
  header.appendChild(period);
  return header;
}

function renderExperience(t) {
  const el = document.getElementById("experience");
  el.innerHTML = "";
  t.experience.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "entry";

    const left = document.createDocumentFragment();
    const role = document.createElement("strong");
    role.textContent = entry.role;
    left.appendChild(role);
    left.appendChild(document.createTextNode(` | ${entry.company}`));

    div.appendChild(makeEntryHeader(left, entry.period));

    (entry.projects || []).forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "project";

      const projectName = document.createElement("h3");
      projectName.className = "project-name";
      projectName.textContent = project.name;
      projectDiv.appendChild(projectName);

      const ul = document.createElement("ul");
      project.bullets.forEach((bullet) => {
        const li = document.createElement("li");
        li.textContent = bullet;
        ul.appendChild(li);
      });
      projectDiv.appendChild(ul);

      div.appendChild(projectDiv);
    });

    el.appendChild(div);
  });
}

function renderEducation(t) {
  const el = document.getElementById("education");
  el.innerHTML = "";
  t.education.forEach((entry) => {
    const div = document.createElement("div");
    div.className = "entry";

    const left = document.createDocumentFragment();
    const degree = document.createElement("strong");
    degree.textContent = entry.degree;
    left.appendChild(degree);
    left.appendChild(document.createTextNode(` | ${entry.institution}`));

    div.appendChild(makeEntryHeader(left, entry.period));

    el.appendChild(div);
  });
}

function renderLanguages(t) {
  const el = document.getElementById("languages");
  el.innerHTML = "";
  (t.languages || []).forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    el.appendChild(li);
  });
}

function render() {
  const t = i18n[LANG];
  document.getElementById("name").textContent = t.name;
  renderLinks(t);
  document.getElementById("about").textContent = t.about;
  document.getElementById("about-text").textContent = t.aboutText;
  document.getElementById("skills-header").textContent = t.skillsHeader;
  renderSkills(t);
  document.getElementById("experience-header").textContent = t.experienceHeader;
  renderExperience(t);
  document.getElementById("education-header").textContent = t.educationHeader;
  renderEducation(t);
  document.getElementById("language-header").textContent = t.languageHeader;
  renderLanguages(t);
  document.documentElement.lang = LANG === "pt" ? "pt-BR" : "en";
}

render();
