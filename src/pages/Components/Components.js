import { Twitter } from '@material-ui/icons';
import { Favorite, Instagram, KeyboardArrowLeft, KeyboardArrowRight, ThumbUp } from '@mui/icons-material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Box, Card, Container, Divider, Grid, Icon, Stack } from '@mui/material'
import { WhiteBrandLogo } from 'assets/images/icons/ExportSvg';
import NPAlert from 'components/NPAlert'
import NPAvatar from 'components/NPAvatar'
import NPBadge from 'components/NPBadge'
import NPBox from 'components/NPBox'
import NPButton from 'components/NPButton'
import NPInput from 'components/NPInput'
import NPPagination from 'components/NPPagination'
import NPProgress from 'components/NPProgress'
import { NPSkeleton } from 'components/NPSkeleton/NPSkeleton';
import NPSocialButton from 'components/NPSocialButton'
import { NPTooltip } from 'components/NPToolTip/NPTooltip';
import NPTypography from 'components/NPTypography'
import DefaultNavbar from 'examples/Navbars/DefaultNavbar'
import React from 'react'
import { LandingPageNavigations } from 'Routes/Navigations'

const Components = () => {
    return (
        <>
            <Box style={{ paddingBottom: "30px", backgroundColor: "#0432A3" }}>
                <DefaultNavbar
                    routes={LandingPageNavigations}
                    action={{
                        type: "external",
                        route: "/",
                        label: "free download",
                        color: "info",
                    }}
                    sticky
                    light
                    brand={<WhiteBrandLogo />}
                // relative
                />
                <NPBox>
                    <Container maxWidth="sm">
                        <Grid container spacing={2} style={{ paddingBottom: "30px", }}>
                            <Grid mt={12} item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Typography</NPTypography>
                                <Divider />
                                <NPTypography variant="h1" color="heading">Heading 1</NPTypography>
                                <NPTypography variant="h2" color="heading">Heading 2</NPTypography>
                                <NPTypography variant="h3" color="heading">Heading 3</NPTypography>
                                <NPTypography variant="h4" color="heading">Heading 4</NPTypography>
                                <NPTypography variant="h5" color="heading">Heading 5</NPTypography>
                                <NPTypography variant="h6" color="heading">Heading 6</NPTypography>
                                <NPTypography variant="subtitle1" color="heading">Subtitle 1</NPTypography>
                                <NPTypography variant="subtitle2" color="heading">Subtitle 2</NPTypography>
                                <NPTypography variant="body1" color="heading">Body 1</NPTypography>
                                <NPTypography variant="body2" color="heading">Body 2</NPTypography>
                                <NPTypography variant="button" color="heading">Button</NPTypography>
                                <NPTypography variant="caption" color="heading">Caption</NPTypography>
                                <NPTypography variant="overline" color="heading">Overline</NPTypography>
                                <NPTypography variant="inherit" color="heading">Inherit</NPTypography>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Button</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPButton variant="text" color="info">Button Text</NPButton>
                                    <NPButton variant="contained" color="info">Button Contained</NPButton>
                                    <NPButton variant="outlined" color="info">Button Outlined</NPButton>
                                    <NPButton variant="gradient" color="info">Button Gradient</NPButton>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Button With Sizes</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPButton variant="contained" color="info" size="small">Button</NPButton>
                                    <NPButton variant="contained" color="info" size="medium">Button</NPButton>
                                    <NPButton variant="contained" color="info" size="large">Button</NPButton>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Button With Sizes</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPButton variant="contained" color="info" fullWidth>Button</NPButton>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Button With Icons</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPButton variant="contained" color="info">
                                        <Favorite />
                                        &nbsp;  Button
                                    </NPButton>

                                    <NPButton variant="contained" color="info">
                                        Button &nbsp;
                                        <Favorite />
                                    </NPButton>

                                    <NPButton variant="contained" color="info">
                                        <Favorite />
                                    </NPButton>
                                    <NPButton variant="gradient" color="info">
                                        <Favorite />
                                    </NPButton>
                                    <NPButton variant="contained" color="info" iconOnly>
                                        <Favorite />
                                    </NPButton>
                                </Stack>
                                <Stack mt={2} spacing={2} direction="row">
                                    <NPButton variant="outlined" color="info">
                                        <Favorite />
                                        &nbsp;  Button
                                    </NPButton>

                                    <NPButton variant="outlined" color="info">
                                        Button &nbsp;
                                        <Favorite />
                                    </NPButton>

                                    <NPButton variant="outlined" color="info">
                                        <Favorite />
                                    </NPButton>

                                    <NPButton variant="outlined" color="info" iconOnly>
                                        <Favorite />
                                    </NPButton>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Alerts</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="column">
                                    <NPAlert>This is an alert!</NPAlert>
                                    <NPAlert color="dark">
                                        <ThumbUp />
                                        &nbsp;
                                        This is an alert with icon!
                                    </NPAlert>
                                    <NPAlert color="error" dismissible>This is a dismissible alert!</NPAlert>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Avatars</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" size="xs" />
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" size="sm" />
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" size="md" />
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" size="lg" />
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" size="xl" />
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" size="xxl" />
                                </Stack>
                                <Stack spacing={2} direction="row">
                                    <NPAvatar bgColor="info">
                                        <Favorite />
                                    </NPAvatar>
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" variant="circular" size="lg" />
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" variant="rounded" size="lg" />
                                    <NPAvatar src="https://bit.ly/34BY10g" alt="Avatar" variant="square" size="lg" />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Badge</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPBadge badgeContent="Badge" container variant="contained" color="primary" />
                                    <NPBadge badgeContent="Badge" container variant="outlined" color="primary" />
                                    <NPBadge badgeContent="Badge" container variant="outlined" color="secondary" />
                                    <NPBadge badgeContent="Badge" container variant="outlined" color="dark" />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Box</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPBox
                                        color="white"
                                        bgColor="info"
                                        variant="contained"
                                        borderRadius="lg"
                                        shadow="lg"
                                        opacity={1}
                                        p={2}
                                    >
                                        Box
                                    </NPBox>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Input</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <Grid sm={12} md={4}>
                                        <NPTypography style={{ marginBottom: "15px" }} variant="subtitle2" color="heading">Input With Title</NPTypography>
                                        <NPInput mt={2} label="Type here" />
                                    </Grid>
                                    <Grid sm={12} md={4}>
                                        <NPTypography style={{ marginBottom: "15px" }} variant="subtitle2" color="heading">Input With Title</NPTypography>
                                        <NPInput mt={2} variant="standard" label="Type here" />
                                    </Grid>
                                </Stack>
                                <Stack spacing={2} direction="row">
                                    <Grid sm={12} md={4}>
                                        <NPTypography style={{ marginBottom: "15px" }} variant="subtitle2" color="heading">Input With Title</NPTypography>
                                        <NPInput mt={2} variant="filled" />
                                    </Grid>
                                    <Grid sm={12} md={4}>
                                        <NPTypography style={{ marginBottom: "15px" }} variant="subtitle2" color="heading">Input With Title</NPTypography>
                                        <NPInput mt={2} variant="standard" label="Type here" />
                                    </Grid>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Pagination</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPPagination variant="contained">
                                        <NPPagination item>
                                            <KeyboardArrowLeft />
                                        </NPPagination>
                                        <NPPagination item active>1</NPPagination>
                                        <NPPagination item>2</NPPagination>
                                        <NPPagination item>3</NPPagination>
                                        <NPPagination item>
                                            <KeyboardArrowRight />
                                        </NPPagination>
                                    </NPPagination>
                                    <NPPagination variant="gradient">
                                        <NPPagination item>
                                            <KeyboardArrowLeft />
                                        </NPPagination>
                                        <NPPagination item active>1</NPPagination>
                                        <NPPagination item>2</NPPagination>
                                        <NPPagination item>3</NPPagination>
                                        <NPPagination item>
                                            <KeyboardArrowRight />
                                        </NPPagination>
                                    </NPPagination>
                                </Stack>
                            </Grid>
                            <Grid item md={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Tool Tip</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPTooltip title="ToolTip Sample" >
                                        <NPButton variant="text" color="info">ToolTip</NPButton>
                                    </NPTooltip>
                                </Stack>

                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Progress Bar</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPProgress value="50" variant="contained" />
                                    <NPProgress value="50" variant="gradient" />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Loading Cards</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <Grid>
                                        <NPSkeleton variant="text" />
                                        <NPSkeleton variant="circular" width={40} height={40} />
                                        <NPSkeleton variant="rectangular" width={210} height={118} />
                                    </Grid>
                                    <Grid width={500}>
                                        <NPSkeleton />
                                        <NPSkeleton animation="wave" />
                                        <NPSkeleton animation={false} />
                                    </Grid>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                                <NPTypography variant="h6" color="warning">Social Media Icons</NPTypography>
                                <Divider />
                                <Stack spacing={2} direction="row">
                                    <NPSocialButton>
                                        <FacebookOutlinedIcon />
                                        &nbsp;Facebook
                                    </NPSocialButton>
                                    <NPSocialButton color="twitter" iconOnly>
                                        <Twitter />
                                    </NPSocialButton>
                                    <NPSocialButton color="instagram" iconOnly circular>
                                        <Instagram />
                                    </NPSocialButton>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </NPBox>
            </Box>
        </>
    )
}

export default Components