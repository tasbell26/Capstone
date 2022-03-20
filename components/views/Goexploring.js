import html from "html-literal";
export default () => html`
  <section id="Goexploring">
    <div>
      <!-- safety blurb -->
      <p><strong>Don't forget to observe some basic rules of safety:</strong>
        <>
          <li>Be sure to research route and time to complete route well before starting to ensure you won't be caught in the dark. </li>
          <li>Don't forget to bring a map, water, snacks and other items such as a flashlight and bug spray to make your journey more enjoyable.</li>
          <li>Let someone know where you are going and what time you plan to complete your journey to ensure if you become lost help won't be far behind.</li>
          <li>Better yet bring a friend!</li>
          <li>Please be aware of all no trespassing signs and all postings at trails where animals may be in the area.</li>
          <li>Most importantly bring a camera to record all the wonderful things you capture while exploring.</li>
        </ul>
      </p>
      <p>
        Use this map to assist you in finding hiking and biking trails for you
        to do your own hunting for Cryptids in your area.
      </p>
      <!-- or make it one whole box w/ a line break to separate sections -->
      <!-- leaflet api -->
      <div id="map"></div>
    </div>
  </section>
`;
