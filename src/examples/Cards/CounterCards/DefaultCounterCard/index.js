// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-countup component
import CountUp from "react-countup";

// Material Kit 2 React components
import NPBox from "components/NPBox";
import NPTypography from "components/NPTypography";

function DefaultCounterCard({ color, count, title, description, ...rest }) {
  return (
    <NPBox p={2} textAlign="center" lineHeight={1}>
      <NPTypography variant="h1" color={color} textGradient>
        <CountUp end={count} duration={1} {...rest} />
      </NPTypography>
      {title && (
        <NPTypography variant="h5" mt={2} mb={1}>
          {title}
        </NPTypography>
      )}
      {description && (
        <NPTypography variant="body2" color="text">
          {description}
        </NPTypography>
      )}
    </NPBox>
  );
}

// Setting default props for the DefaultCounterCard
DefaultCounterCard.defaultProps = {
  color: "info",
  description: "",
  title: "",
};

// Typechecking props for the DefaultCounterCard
DefaultCounterCard.propTypes = {
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
  count: PropTypes.number.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default DefaultCounterCard;
