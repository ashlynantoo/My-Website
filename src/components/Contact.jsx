import { useState, useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Reaptcha from "reaptcha";
import Wrapper from "../assets/wrappers/Contact";
import Heading from "./Heading";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const formRef = useRef(null);
  const captchaRef = useRef(null);
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailjsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const siteKey = import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY;

  const onVerify = () => {
    captchaRef.current.getResponse().then((result) => {
      setCaptchaVerified(true);
    });
  };

  const onExpire = () => {
    setCaptchaVerified(false);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    emailjs.sendForm(serviceID, templateID, formRef.current, emailjsKey).then(
      (result) => {
        if (result.text === "OK") {
          toast.success("Thank you for the message. I will contact you soon.");
          formRef.current.name.value = "";
          formRef.current.email.value = "";
          formRef.current.subject.value = "";
          formRef.current.message.value = "";
        } else {
          toast.error("Message sending failed");
          console.log(result.text);
        }
      },
      (error) => {
        toast.error("Message sending failed");
        console.log(error.text);
      }
    );
  };

  return (
    <Wrapper id="contact">
      <div className="section contact-section">
        <div className="container contact-container">
          <Heading heading1="contact" heading2="me" />
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="form-control"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="form-control"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              className="form-control"
              required
            ></textarea>
            <div className="reaptcha">
              <Reaptcha
                sitekey={siteKey}
                ref={captchaRef}
                size={window.innerWidth < 375 ? "compact" : "normal"}
                onVerify={onVerify}
                onExpire={onExpire}
              />
            </div>
            <button type="submit" className="btn" disabled={!captchaVerified}>
              Send
            </button>
          </form>
        </div>
        <div className="container contact-footer-container">
          <h3>get in touch</h3>
          <p>Hey! I am looking forward to start a project with you!</p>
          <SocialLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
