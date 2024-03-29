import React from "react";

const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="pt-4 pb-2 px-2 text-center bg-blue-900 text-white w-full"
    >
      Copyright &copy; 2024{" "}
      <a
        href="https://github.com/NwekeMaxwell"
        className="underline cursor-pointer font-bold"
      >
        Nweke Maxwell
      </a>
      . All rights reserved
    </footer>
  );
};

export default Footer;
