import React from "react";
import jpgBrandLogo from "../../images/JPG-Brand-Logo.png";
import htmlLogo from "../../images/HTML5-Logo.png";
import jqueryLogo from "../../images/JQuery-Logo.png";
import tailwindLogo from "../../images/Tailwind-Logo.png";
import reactLogo from "../../images/React-Logo.png";
import nodeLogo from "../../images/NodeJS-Logo.png";
import passportLogo from "../../images/Passport-Logo.png";
import mysqlLogo from "../../images/MySQL-Logo.png";
import mongoLogo from "../../images/MongoDB-Logo.png";

const Header = () => {
  return (
    <div className="flex flex-row gap-8 justify-center py-3">
      <div className="grid grid-cols-2 grid-rows-2 w-1/6">
        <img className="" src={htmlLogo} alt="HTML5 Logo" />
        <img className="" src={jqueryLogo} alt="JQuery Logo" />
        <img className="" src={tailwindLogo} alt="Tailwind Logo" />
        <img className="" src={reactLogo} alt="React Logo" />
      </div>

      <img className="rounded-lg border-gray-500 border-8" src={jpgBrandLogo} width="50%" alt="Brand-Logo" />

      <div className="grid grid-cols-2 grid-rows-2 w-1/6">
        <img className="self-center" src={nodeLogo} alt="Node Logo" />
        <img className="self-center pl-3" src={passportLogo} width="80%" alt="Passport Logo" />
        <img className="" src={mysqlLogo} alt="MySQL Logo" />
        <img className="" src={mongoLogo} alt="MongoDB Logo" />
      </div>
    </div>
  );
}

export default Header;