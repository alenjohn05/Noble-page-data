import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for NPInput
import NPInputRoot from "components/NPInput/NPInputRoot";

const NPInput = forwardRef(({ error, success, disabled, ...rest }, ref) => (
  <NPInputRoot {...rest} ref={ref} ownerState={{ error, success, disabled }} />
));

// Setting default values for the props of NPInput
NPInput.defaultProps = {
  error: false,
  success: false,
  disabled: false,
};

// Typechecking props for the NPInput
NPInput.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default NPInput;
