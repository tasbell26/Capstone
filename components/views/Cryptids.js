import html from "html-literal";
export default () => html`
  <section id="Cryptids">
    <!-- mothman -->
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mothman_Artist%27s_Impression.png/562px-Mothman_Artist%27s_Impression.png"
        alt="Mothman"
      />
      <p>Have you seen the Mothman?</p>
      <figcaption>
        Tim Bertelink, CC BY-SA 4.0
        <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons
      </figcaption>
    </div>
    <!-- bigfoot -->
    <div>
      <img src="https://freesvg.org/img/Bigfoot.png" alt="Bigfoot" />
      <p>Bigfoot!</p>
    </div>
    <!-- chupacabra -->
    <>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Chupacabra_padayachee.jpg/512px-Chupacabra_padayachee.jpg" alt="Chupacabra" />
      <p>The Chupacabra killed my goats!</p>
    <figcaption>Alvin Padayachee, Public Domain, via Wikimedia Commons</figcaption>
    </div>
  </section>
`;
