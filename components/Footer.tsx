import React, { useState } from "react";
import Link from "next/link";
import AppPopup from "./AppPopup";
import FullScreenPopup from "./Fullscreen";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer">
        {/* Back Button on the left - now inactive */}
        <button
          className="icon-button back-button"
          style={{ backgroundImage: `url('images/triangular.svg')` }}
        ></button>

        <div className="toolbar">
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Group 4548.svg')` }}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Vector (1).svg')` }}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Group 427318962.svg')` }}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/tesla.svg')` }}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Vector (2).svg')` }}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Vector (3).svg')` }}
          ></button>
          <button
            className="icon-button"
            style={{ backgroundImage: `url('images/Group 427318961.svg')` }}
          ></button>
        </div>

        {/* Emergency Button - now inactive */}
        <button
          className="icon-button emergency-button"
          style={{ backgroundImage: `url('images/emergency.svg')` }}
        ></button>
      </footer>
    </>
  );
};

export default Footer;