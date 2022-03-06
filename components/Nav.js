import html from "html-literal";

// eslint-disable-next-line prettier/prettier
export default (links) => html`
  <nav class="navBar">
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links.map(
        // eslint-disable-next-line prettier/prettier
        (el) =>
          `<li><a href="/${el.title}" title="${el.title}" data-navigo>${el.text}</a></li>`
      )}
    </ul>
  </nav>
`;
