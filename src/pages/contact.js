import "./contact.css";

function Contact() {
  return (
    <div>
      <section class="contact">
        <div class="content">
          <h2>Contact Us</h2>
          <p>
            Create and customize. Streamline and save. Break down design
            barriers and scale your business with manufacturing on request.
          </p>
        </div>

        <div class="container">
          <div class="contactInfo">
            <div class="box">
              <div class="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>

                <div class="text">
                  <h3>Address</h3>
                  <p>
                    Banani,Block-d
                    <br />
                    Road-6/a,House-37
                  </p>
                </div>
              </div>
            </div>

            <div class="box">
              <div class="icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>

                <div class="text">
                  <h3>Email</h3>
                  <p>ntabassum213@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="box">
              <div class="icon">
                <i class="fa fa-phone" aria-hidden="true"></i>

                <div class="text">
                  <h3>Phone</h3>
                  <p>01798051434</p>
                </div>
              </div>
            </div>
            <div class="contactForm">
              <form>
                <h2>Send Message</h2>
                <div class="inputBox">
                  <input type="text" name="" required="required" />
                  <span>Full Name</span>
                </div>

                <div class="inputBox">
                  <input type="text" name="" required="required" />
                  <span>Email</span>
                </div>

                <div class="inputBox">
                  <textarea required="required"></textarea>
                  <span>Type your Message...</span>
                </div>

                <div class="inputBox">
                  <input type="submit" name="" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
