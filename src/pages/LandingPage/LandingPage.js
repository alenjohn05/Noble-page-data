import { Twitter } from '@material-ui/icons';
import { BorderStyle, Favorite, Instagram, KeyboardArrowLeft, KeyboardArrowRight, ThumbUp } from '@mui/icons-material'
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
import HeroImage from '../../assets/images/HeroImages/hero_img.png';

/**
 * Setting the Background Image
 */
const styles = {
    mainContainer: {
        backgroundImage: `url(${HeroImage})`,
        height: "90vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    mainBox: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        padding: "30px"
    }
};

const LandingPage = () => {
    return (
        <>
            <NPBox style={styles.mainContainer}>
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
                />
                <Container >
                    <NPBox style={styles.mainBox}>
                        <Grid lg={4} md={12}>
                            <NPBox style={{ borderStyle: 'dashed' }}>
                                <NPTypography variant={"h2"} color={"white"}>
                                    Lorem ipsum dolor sit
                                    amet consectetur
                                </NPTypography>
                                <NPTypography variant={"subtitle2"} color={"white"}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                </NPTypography>
                            </NPBox>
                        </Grid>
                        <Grid lg={6} sm={12}>
                            <NPTypography variant={"h2"} color={"white"}>
                                Lorem ipsum dolor sit
                                amet consectetur
                            </NPTypography>
                        </Grid>
                    </NPBox>
                </Container>
            </NPBox>
        </>
    )
}

export default LandingPage