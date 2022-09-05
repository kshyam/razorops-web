import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import {
    font6,
    font8,
    fontSize16,
    fontSize18,
    fontSize24,
    lineHeight32
} from '../assets/globalStyles';

import bg from '../assets/images/footer/background.svg';
import { Link } from 'gatsby';

const Bg = styled('div')`
    background: url(${bg}), rgb(17, 23, 58);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const TopGrid = styled(Grid)`
    display: flex;
    justify-content: space-between;
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 200px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 20px 70px 20px;
    }
`;

const BottomSection = styled('div')`
    background: rgba(0, 0, 0, 0.6);
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 200px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 20px 70px 20px;
    }
`;

const Razorops = styled('span')`
    ${font6};
    font-size: 22px;
    line-height: 27px;
    color: #ffffff;
`;

const Title = styled('p')`
    ${font6};
    font-size: ${fontSize24};
    line-height: ${lineHeight32};
    color: #bebebe;
`;

const Sub = styled('span')`
    ${font8};
    font-size: ${fontSize18};
    line-height: 24px;
    color: #bebebe;
`;

const CopyRights = styled('span')`
    ${font8};
    font-size: ${fontSize16};
    line-height: 24px;
    color: rgba(190, 190, 190, 0.7);
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const GridSection = styled(Grid)`
    @media (max-width: 1199px) {
        padding: 40px 0px;
    }
`;

const Divider = styled('div')`
    background: rgba(255, 255, 255, 0.2);
    height: 1px;
`;

export default function Footer() {
    return (
        <Bg>
            <TopGrid container spacing={2}>
                <Grid
                    md={12}
                    lg={3}
                    sm={12}
                    xs={12}
                    container
                    item
                    spacing={3}
                    direction={'column'}>
                    <Grid item>
                        <Razorops>Razorops</Razorops>
                    </Grid>
                    <Grid item>
                        <Sub>
                            It is important to speak out and address a mental health issue.
                            Therhappi is here to provide you with all the support you need. Take the
                            right step, talk to us.
                        </Sub>
                    </Grid>
                </Grid>
                <GridSection
                    spacing={2}
                    md={4}
                    lg={2}
                    sm={4}
                    xs={6}
                    container
                    item
                    direction={'column'}>
                    <Grid item>
                        <Title>Product</Title>
                    </Grid>
                    <Grid item>
                        <NavLink>
                            <Sub>Overview</Sub>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink>
                            <Sub>How it works</Sub>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink>
                            <Sub>Features</Sub>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink>
                            <Sub>Integrations</Sub>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink>
                            <Sub>Pricing</Sub>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink>
                            <Sub>Schedule Demo</Sub>
                        </NavLink>
                    </Grid>
                </GridSection>
                <GridSection
                    spacing={2}
                    md={4}
                    lg={2}
                    sm={4}
                    xs={6}
                    container
                    item
                    direction={'column'}>
                    <Grid item>
                        <Title>Company</Title>
                    </Grid>
                    <Grid item>
                        <Sub>Blog</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>About Us</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Customers</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>We are Hiring</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Contact Us</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Partners</Sub>
                    </Grid>
                </GridSection>
                <GridSection
                    spacing={2}
                    md={4}
                    lg={2}
                    sm={4}
                    xs={6}
                    container
                    item
                    direction={'column'}>
                    <Grid item>
                        <Title>Resources</Title>
                    </Grid>
                    <Grid item>
                        <Sub>Documentation</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Getting Started</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Videos</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Open Source</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Covid-19</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>CI/CD Offers</Sub>
                    </Grid>
                </GridSection>
                <GridSection
                    spacing={2}
                    md={4}
                    lg={2}
                    sm={4}
                    xs={6}
                    container
                    item
                    direction={'column'}>
                    <Grid item>
                        <Title>Support</Title>
                    </Grid>
                    <Grid item>
                        <Sub>FAQ</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Terms of Service</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Privacy policy</Sub>
                    </Grid>
                    <Grid item>
                        <Sub>Security</Sub>
                    </Grid>
                </GridSection>
            </TopGrid>
            <Divider />
            <BottomSection>
                <Grid container>
                    <Grid item>
                        <CopyRights>Copyright © Razorops @ 2022</CopyRights>
                    </Grid>
                </Grid>
            </BottomSection>
        </Bg>
    );
}
