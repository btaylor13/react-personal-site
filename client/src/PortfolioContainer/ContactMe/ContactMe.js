import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} />
      <div className="contact-form">
        <div className="form-header">
          <h2 className="form-title">Get in Touch</h2>
          <div className="footer-icons">
            <a href="mailto: btaylor7224@gmail.com">
              <i className="fa fa-envelope f-icon"></i>
            </a>
            <a href="https://github.com/btaylor13">
              <i className="fa fa-github f-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/bridgett-taylor-dev">
              <i className="fa fa-linkedin f-icon"></i>
            </a>
          </div>
        </div>

        <div className="form-description">
          <h4>Send me an email here.</h4>
          <p>
            {" "}
            Whether you're looking to chat about employment opportunities or
            just to connect and say hello, I look forward to hearing from you!
          </p>
        </div>

        <form onSubmit={submitForm}>
          <p>{banner}</p>
          <label htmlFor="name">Your Name</label>
          <input type="text" onChange={handleName} value={name} />

          <label htmlFor="email">Your Email</label>
          <input type="email" onChange={handleEmail} value={email} />

          <label htmlFor="message">Your Message</label>
          <textarea type="text" onChange={handleMessage} value={message} />

          <div className="send-btn">
            <button type="submit">
              Send Message <i className="fa fa-paper-plane" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
