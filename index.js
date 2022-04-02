/* eslint-disable prettier/prettier */
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

// navbar navigator
const router = new Navigo("/");
function render(st) {
  document.querySelector("#root").innerHTML = `
      ${Header(st)}
      ${Nav(state.Links)}
      ${Main(st)}
      ${Footer()}
    `;
  router.updatePageLinks();

  afterRender(st);
}

// render(state.Home);//

function afterRender(st) {
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
  console.log(st);

  // leaflet api
  if (st.view === "Goexploring") {
    // add nashville lat and long
    let map = L.map("map").setView([35.59367, -83.824997], 13);
    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.LEAFLET_API_KEY}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.LEAFLET_API_KEY,
      }
    ).addTo(map);
  }
}

// national park api router hooks
router.hooks({
  before: (done, params) => {
    const page =
      params && params.data && params.data.page
        ? capitalize(params.data.page)
        : "Home";

    if (page === "Goexploring") {
      axios
        .get(process.env.NATIONAL_PARK_API_URL)
        .then((response) => {
          console.log(response);
          let hikingActivity = response.data.data[0].parks.filter((park) => {
            return park.states === "TN";
          });
          console.log(hikingActivity);
          state.Goexploring.parks = hikingActivity;
          done();
        })
        .catch((err) => console.log(err));
    } else {
      done();
    }
  },
});

router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.data.page);
      render(state[page]);
    },
  })
  .resolve();

// console.log(response);
// console.log(response.data.data);
// state.Goexploring.parks = response.data.data;
// console.log(state.Goexploring.parks);
// state.Goexploring.activities = response.data.data[0].activities.hiking;
