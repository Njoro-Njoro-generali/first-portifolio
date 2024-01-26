import "./Contactstyle.css";

const Contact = () => {
  return (
    <div className="contact-page page" id="contact">
      <div className="top">
        <h1>
          Contact <span>Me!</span>
        </h1>
      </div>
      <div className="bottom">
        <form action="" method="POST" className="form">
          <div className="inputs">
            <input
              type="text"
              name="fullname"
              className="name"
              required
              placeholder="Full Name"
              autoComplete="none"
            />
            <input
              type="email"
              name="emai"
              className="email"
              required
              placeholder="Email"
              autoComplete="none"
            />
            <input
              type="number"
              name="phone"
              className="phone"
              required
              placeholder="Phone Number"
              autoComplete="none"
            />
            <input
              type="text"
              name="subject"
              className="subject"
              required
              placeholder="Email Subject"
              autoComplete="none"
            />
          </div>
          <div className="text-area">
            <textarea
              name="message"
              id="message"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
