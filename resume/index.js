const LANG = "pt"; // change to 'en' to switch language

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
    li.textContent = item;
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

    const ul = document.createElement("ul");
    entry.bullets.forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      ul.appendChild(li);
    });
    div.appendChild(ul);

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

function render() {
  const t = i18n[LANG];
  document.getElementById("name").textContent = t.name;
  renderLinks(t);
  document.getElementById("about").textContent = t.about;
  document.getElementById("about-text").textContent = t["about-text"];
  document.getElementById("skills-heading").textContent = t["skills-heading"];
  renderSkills(t);
  document.getElementById("experience-heading").textContent =
    t["experience-heading"];
  renderExperience(t);
  document.getElementById("education-heading").textContent =
    t["education-heading"];
  renderEducation(t);
  document.documentElement.lang = LANG === "pt" ? "pt-BR" : "en";
}

render();
