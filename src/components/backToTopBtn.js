import React, { useState, useEffect } from "react";
import "../assets/styles.css";
import { Icon, Button } from "semantic-ui-react";

const BackToTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showBtn && (
        <Button
          icon
          circular
          onClick={scrollToTop}
          className="back-to-top"
          color="teal"
          size="massive"
        >
          <Icon name="arrow up" />
        </Button>
      )}
    </>
  );
};

export default BackToTopBtn;
