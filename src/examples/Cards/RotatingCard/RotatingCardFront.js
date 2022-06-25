// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import NPBox from "components/NPBox";
import NPTypography from "components/NPTypography";

function RotatingCardFront({ color, image, icon, title, description }) {
  return (
    <NPBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow={color}
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({
          palette: { gradients },
          functions: { linearGradient, rgba },
        }) =>
          `${linearGradient(
            rgba(
              gradients[color] ? gradients[color].main : gradients.info.main,
              0.85
            ),
            rgba(
              gradients[color] ? gradients[color].main : gradients.info.main,
              0.85
            )
          )}, url(${image})`,
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      }}
    >
      <NPBox py={12} px={3} textAlign="center" lineHeight={1}>
        {icon && (
          <NPTypography variant="h2" color="white" my={2}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </NPTypography>
        )}
        <NPTypography variant="h3" color="white" gutterBottom>
          {title}
        </NPTypography>
        <NPTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </NPTypography>
      </NPBox>
    </NPBox>
  );
}

// Setting default props for the RotatingCardFront
RotatingCardFront.defaultProps = {
  color: "info",
  icon: "/",
};

// Typechecking props for the RotatingCardFront
RotatingCardFront.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
};

export default RotatingCardFront;
