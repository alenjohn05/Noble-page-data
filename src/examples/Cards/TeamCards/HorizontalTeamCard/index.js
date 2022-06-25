// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import NPBox from "components/NPBox";
import NPTypography from "components/NPTypography";

function HorizontalTeamCard({ image, name, position, description }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <NPBox width="100%" pt={2} pb={1} px={2}>
            <NPBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </NPBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <NPBox
            pt={{ xs: 1, lg: 2.5 }}
            pb={2.5}
            pr={4}
            pl={{ xs: 4, lg: 1 }}
            lineHeight={1}
          >
            <NPTypography variant="h5">{name}</NPTypography>
            <NPTypography variant="h6" color={position.color} mb={1}>
              {position.label}
            </NPTypography>
            <NPTypography variant="body2" color="text">
              {description}
            </NPTypography>
          </NPBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
HorizontalTeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
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
  description: PropTypes.string.isRequired,
};

export default HorizontalTeamCard;
