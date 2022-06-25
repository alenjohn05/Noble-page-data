// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import NPBox from "components/NPBox";
import NPTypography from "components/NPTypography";

function BackgroundBlogCard({ image, title, description, action }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
    {
      transform: `translateX(6px)`,
    },
  };

  return (
    <Card
      sx={{
        backgroundImage: ({
          palette: { black },
          functions: { linearGradient, rgba },
        }) =>
          `${linearGradient(
            rgba(black.main, 0.5),
            rgba(black.main, 0.5)
          )}, url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <NPBox p={3}>
        <NPBox minHeight="20.625rem" my="auto" py={3}>
          <NPTypography
            variant="h2"
            color="white"
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            {title}
          </NPTypography>
          <NPTypography variant="body2" color="white" my={3}>
            {description}
          </NPTypography>
          {action.type === "internal" ? (
            <NPTypography
              component={Link}
              to={action.route}
              variant="body2"
              fontWeight="regular"
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </NPTypography>
          ) : (
            <NPTypography
              component={MuiLink}
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              fontWeight="regular"
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </NPTypography>
          )}
        </NPBox>
      </NPBox>
    </Card>
  );
}

// Typechecking props for the BackgroundBlogCard
BackgroundBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default BackgroundBlogCard;
