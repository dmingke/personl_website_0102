
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const ButtonNew = ({
  property1,
  className,
  viewMoreClassName,
  text = "View More",
  iconsClassName,
  viewMoreClassNameOverride,
  icons = "/img/icons.png",
  socialIcons = "/img/social-icons.png",
  to,
  href,
  href1,
}) => {
  return (
    <Link className={`button ${property1} ${className}`} to={to}>
      {property1 === "default" && (
        <a className={`view-more ${viewMoreClassNameOverride}`} href={href1} rel="noopener noreferrer" target="_blank">
          {text}
        </a>
      )}

      {["g-it", "link-to-other-pages"].includes(property1) && (
        <>
          <a className={`view-more-2 ${viewMoreClassName}`} href={href} rel="noopener noreferrer" target="_blank">
            {text}
          </a>
          <img className={`icons ${iconsClassName}`} alt="Icons" src={property1 === "g-it" ? socialIcons : icons} />
        </>
      )}
    </Link>
  );
};

ButtonNew.propTypes = {
  property1: PropTypes.oneOf(["link-to-other-pages", "g-it", "default"]),
  text: PropTypes.string,
  icons: PropTypes.string,
  socialIcons: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
