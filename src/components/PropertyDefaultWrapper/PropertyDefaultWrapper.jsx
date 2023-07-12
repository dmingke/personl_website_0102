import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
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
  to,
  href,
  href1,
}) => {
  const Wrapper = href || href1 ? 'a' : Link;
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { to };
  return (
    <Wrapper className={`property-default-wrapper ${property1} ${className}`} {...wrapperProps}>
      {property1 === "default" && (
        <span className={`view-more ${viewMoreClassName}`}>
          {text}
        </span>
      )}

      {["g-it", "link-to-other-pages"].includes(property1) && (
        <>
          <span
            className={`view-more-2 ${viewMoreClassNameOverride}`}
          >
            {text}
          </span>
          <img className={`icons ${iconsClassName}`} alt="Icons" src={property1 === "g-it" ? socialIcons : icons} />
        </>
      )}
    </Wrapper>
  );
};

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["link-to-other-pages", "g-it", "default"]),
  text: PropTypes.string,
  icons: PropTypes.string,
  socialIcons: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
