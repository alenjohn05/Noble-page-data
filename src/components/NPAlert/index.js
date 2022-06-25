import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Fade from "@mui/material/Fade";

// Material Kit 2 React components
import NPBox from "components/NPBox";

// Custom styles for the NPAlert
import NPAlertRoot from "components/NPAlert/NPAlertRoot";
import NPAlertCloseIcon from "components/NPAlert/NPAlertCloseIcon";

function NPAlert({ color, dismissible, children, ...rest }) {
  const [alertStatus, setAlertStatus] = useState("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <NPAlertRoot ownerState={{ color }} {...rest}>
        <NPBox
          display="flex"
          alignItems="center"
          fontSize="1rem"
          fontWeight="regular"
          color={color === "light" ? "dark" : "white"}
        >
          {children}
        </NPBox>
        {dismissible ? (
          <NPAlertCloseIcon onClick={mount ? handleAlertStatus : null}>
            &times;
          </NPAlertCloseIcon>
        ) : null}
      </NPAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Setting default values for the props of NPAlert
NPAlert.defaultProps = {
  color: "info",
  dismissible: false,
};

// Typechecking props of the NPAlert
NPAlert.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  dismissible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default NPAlert;
