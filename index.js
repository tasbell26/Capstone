/* eslint-disable prettier/prettier */
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(st) {
  document.querySelector("#root").innerHTML = `
      ${Header(st)}
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer()}
    `;
  router.updatePageLinks();

  addEventListeners();
}

// render(state.Home);//

function addEventListeners(st) {
  // eslint-disable-next-line prettier/prettier
  document.querySelectorAll("nav a").forEach((navLink) =>
    // eslint-disable-next-line prettier/prettier
    navLink.addEventListener("click", (event) => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.page);
      render(state[page]);
    },
  })
  .resolve();
