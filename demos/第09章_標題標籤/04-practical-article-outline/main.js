const article = document.querySelector("[data-article]");
const outline = document.querySelector("[data-outline]");
const headings = Array.from(article.querySelectorAll("h1, h2, h3"));

headings.forEach((heading) => {
  const level = heading.tagName.slice(1);
  const item = document.createElement("li");
  const button = document.createElement("button");
  const tag = document.createElement("span");
  const text = document.createElement("span");

  item.className = `outline-level-${level}`;
  tag.className = "heading-tag";
  tag.textContent = heading.tagName.toLowerCase();
  text.textContent = heading.textContent;

  button.type = "button";
  button.append(tag, text);
  button.addEventListener("click", () => {
    document.querySelectorAll(".active-heading").forEach((activeHeading) => {
      activeHeading.classList.remove("active-heading");
    });

    heading.classList.add("active-heading");
    heading.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  item.append(button);
  outline.append(item);
});
