// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import NPBox from "components/NPBox";
import NPTypography from "components/NPTypography";
import NPButton from "components/NPButton";

function CenteredBlogCard({ image, title, description, action }) {
  return (
    <Card>
      <NPBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <NPBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
        />
        <NPBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </NPBox>
      <NPBox p={3} mt={-1} textAlign="center">
        <NPTypography
          display="inline"
          variant="h5"
          textTransform="capitalize"
          fontWeight="regular"
        >
          {title}
        </NPTypography>
        <NPBox mt={1} mb={3}>
          <NPTypography variant="body2" component="p" color="text">
            {description}
          </NPTypography>
        </NPBox>
        {action.type === "external" ? (
          <NPButton
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </NPButton>
        ) : (
          <NPButton
            component={Link}
            to={action.route}
            variant="gradient"
            size="small"
            color={action.color ? action.color : "dark"}
          >
            {action.label}
          </NPButton>
        )}
      </NPBox>
    </Card>
  );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
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
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default CenteredBlogCard;
