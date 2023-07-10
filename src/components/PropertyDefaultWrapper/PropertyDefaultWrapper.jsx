import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({
  property1,
  className,
  viewMoreClassName,
  text = "View More",
  viewMoreClassNameOverride,
  iconsClassName,
  icons = "/img/icons.png",
  socialIcons = "/img/social-icons.png",
  href,
  href1,
}) => {
  return (
    <div className={`property-default-wrapper ${property1} ${className}`}>
      {property1 === "default" && (
        <a className={`view-more ${viewMoreClassName}`} href={href1} rel="noopener noreferrer" target="_blank">
          {text}
        </a>
      )}

      {["g-it", "link-to-other-pages"].includes(property1) && (
        <>
          <a
            className={`view-more-2 ${viewMoreClassNameOverride}`}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {text}
          </a>
          <img className={`icons ${iconsClassName}`} alt="Icons" src={property1 === "g-it" ? socialIcons : icons} />
        </>
      )}
    </div>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["link-to-other-pages", "g-it", "default"]),
  text: PropTypes.string,
  icons: PropTypes.string,
  socialIcons: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
