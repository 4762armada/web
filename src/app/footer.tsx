// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 text-xs">
          <a href="https://discord.com/invite/4762" target="_blank">
            Discord
          </a>
          <a href="https://twitter.com/punk4762" target="_blank">
            Twitter
          </a>
          <a href="https://github.com/4762armada" target="_blank">
            Github
          </a>
        </div>
      </div>
      <p className="mt-4 text-xxs">
        &copy; 2023 4762=4762. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
