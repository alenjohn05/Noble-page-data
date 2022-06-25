import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Kit 2 React components
import NPTypography from "components/NPTypography";

// Custom styles for NPProgress
import NPProgressRoot from "components/NPProgress/NPProgressRoot";

const NPProgress = forwardRef(
  ({ variant, color, value, label, ...rest }, ref) => (
    <>
      {label && (
        <NPTypography variant="button" fontWeight="medium" color="text">
          {value}%
        </NPTypography>
      )}
      <NPProgressRoot
        {...rest}
        ref={ref}
        variant="determinate"
        value={value}
        ownerState={{ color, value, variant }}
      />
    </>
  )
);

// Setting default values for the props of NPProgress
NPProgress.defaultProps = {
  variant: "contained",
  color: "info",
  value: 0,
  label: false,
};

// Typechecking props for the NPProgress
NPProgress.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
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
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default NPProgress;
