import html from "html-literal";
export default () => html`
<section id="Resources">
    <div class="movies">
        <!--add documentary links-->
        <p><strong>Movies:</strong>
        <br>
    <a href="https://en.wikipedia.org/wiki/The_Mothman_Prophecies_(film)
" target="blank">The Mothman Prophecies</a>
<br>
<a href="https://www.imdb.com/title/tt7204170/" target="blank">Chasing Bigfoot</a>
<br>
</p>
    </div>
    <div class="books">
        <!--add books links-->
        <p><strong>Books:</strong>
        <br>
        <a href="https://www.amazon.com/Tracking-Chupacabra-Vampire-Fiction-Folklore/dp/0826350151" target="blank">Tracking the Chupacabra</a>
        <br>
        <a href="https://www.barnesandnoble.com/w/mothman-donnie-sergent/1116206027?ean=9780966724677" target="blank">Mothman: The Facts Behind the Legend</a>
        <br>
    </p>
    </div>
    <div class="web">
        <!--add website links-->
        <p><strong>Web Links:</strong>
        <br>
        <a href="$1"></a>
        <br>
        <a href="$1"></a>
        <br>
    </p>
    </div>
    <div class="contactInfo">
    <h4>Contact info: Tiffany Asbell</h4>
    <p>Email: tasbell26@gmail.com</p>
    <a href="https://www.linkedin.com/in/tiffany-a-a76801226?trk=people-guest_people_search-card" target="blank">Linkedin</a>
    </div>
    <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action=https://formspree.io/f/mbjwyjlp method="post">
<fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="email@domain.tld" required="">
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Your website is amazing!" required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
</fieldset>
<input type="submit" value="Submit">
</form>
</section>
`;
