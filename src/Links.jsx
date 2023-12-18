import React from "react";

const Links = () => {
  return (
    <div className="links-section">
      <div className="title">
        <h3>Useful Links</h3>
        <div className="title-underline"></div>
      </div>
      <ul className="contact-list">
        <li>
          <h5>
            <a href="https://github.com/LukeFBM" target="_blank">
              GitHub
            </a>
          </h5>
        </li>
        <li>
          <h5>
            <a
              href="https://www.linkedin.com/in/luca-capruzzi-036838201/"
              target="_blank"
            >
              Linkedin
            </a>
          </h5>
        </li>
        <li>
          <h5>
            <a
              href="https://www.instagram.com/lucacapruzzi/?hl=it"
              target="_blank"
            >
              Instagram
            </a>
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default Links;
