// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";

// Material Kit 2 React components
import NPBox from "components/NPBox";
import NPTypography from "components/NPTypography";

function Breadcrumbs({ routes, ...rest }) {
  return (
    <NPBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <NPTypography
              key={label}
              component={Link}
              to={route}
              variant="button"
              color="text"
              fontWeight="regular"
              opacity={0.8}
              sx={{
                "&:hover, &:focus": {
                  color: ({ palette: { info } }) => info.main,
                },
              }}
            >
              {label}
            </NPTypography>
          ) : (
            <NPTypography key={label} variant="button" fontWeight="regular">
              {label}
            </NPTypography>
          )
        )}
      </MuiBreadcrumbs>
    </NPBox>
  );
}

// Typechecking props for the Breadcrumbs
Breadcrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Breadcrumbs;
