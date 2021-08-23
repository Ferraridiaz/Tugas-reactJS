import React from "react";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
import Linkedin from "../img/linkedin.png";
import Wa from "../img/wa.png";

export default class Footer extends React.Component {
    render() {
      return (
        <div class="flex my-24 justify-center">
          <img className="m-2" src={Facebook} alt="Facebook" />
          <img className="m-2" src={Twitter} alt="Twitter" />
          <img className="m-2" src={Linkedin} alt="Linkedin" />
          <img className="m-2" src={Instagram} alt="Instagram" />
          <img className="m-2" src={Wa} alt="Whatsapp" />
        </div>
      );
    }
  }