import React from 'react';
import styled from '@emotion/styled';
import { Grid, IconButton } from '@mui/material';
import {
    font1,
    font6,
    fontSize16,
    fontSize24,
    lineHeight27,
    lineHeight32
} from '../assets/globalStyles';

import razorops from '../assets/images/footer/razorops.png';
import img from '../assets/images/footer/img.png';
import logo from '../assets/images/footer/logo.svg';
import linkedin from '../assets/images/footer/linkedin.svg';
import github from '../assets/images/footer/github.svg';
import twitter from '../assets/images/footer/twitter.svg';
import facebook from '../assets/images/footer/facebook.svg';
import youtube from '../assets/images/footer/youtube.svg';
import whatsapp from '../assets/images/footer/whatsapp.svg';
import discord from '../assets/images/footer/discord.svg';
import telegram from '../assets/images/footer/telegram.svg';
import quora from '../assets/images/footer/quora.svg';

import { Link } from 'gatsby';

const Bg = styled('div')`
    background: #011337;
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
    background: #031b4e;
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 20px 80px 20px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px 50px 20px 50px;
    }

    @media (min-width: 1535px) {
        padding: 30px 200px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 30px 100px 30px 100px;
    }

    @media (max-width: 600px) {
        padding: 20px 20px 20px 20px;
    }
`;

const Title = styled('p')`
    ${font6};
    font-size: ${fontSize24};
    line-height: ${lineHeight32};
    color: #f9fafe;
`;

const Sub = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 27px;
    color: #deecff;
`;

const CopyRights = styled('span')`
    ${font6};
    font-size: ${fontSize16};
    line-height: 24px;
    color: #ffffff;
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

const SubscribeText = styled('span')`
    padding: 10px;
    ${font1};
    font-size: ${fontSize16};
    line-height: ${lineHeight27};
    color: #011337;

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 5px;
        font-size: 14px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 19px;
    }
`;

const SubscibeButton = styled(IconButton)`
    padding: 10px;
    background: #f9fafe;
    border-radius: 8px;

    @media (max-width: 1199px) {
        margin: 0px 0px 20px 0px;
    }

    &:hover {
        background: #f9fafe;
    }
`;

export default function Footer() {
    return (
        <Bg>
            <TopGrid container spacing={2}>
                <Grid md={12} lg={3} sm={12} xs={12} item>
                    <Grid container spacing={3} direction={'column'}>
                        <Grid item>
                            <img alt="" src={razorops} />
                        </Grid>
                        <Grid item>
                            <Sub>
                                It is important to speak out and address a mental health issue.
                                Therhappi is here to provide you with all the support you need. Take
                                the right step, talk to us.
                            </Sub>
                        </Grid>
                        <Grid item>
                            <SubscibeButton color="inherit" aria-label="menu">
                                <img src={img} alt="" />
                                <SubscribeText>Subscribe to our Newsletter</SubscribeText>
                            </SubscibeButton>
                        </Grid>
                    </Grid>
                </Grid>
                <GridSection md={4} lg={2} sm={4} xs={6} item>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item>
                            <Title>Product</Title>
                        </Grid>
                        <Grid item>
                            <NavLink to="/product">
                                <Sub>Overview</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/product#how-it-works">
                                <Sub>How it works</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/product#features">
                                <Sub>Features</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/product#integrations">
                                <Sub>Integrations</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/pricing">
                                <Sub>Pricing</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink>
                                <Sub>Schedule Demo</Sub>
                            </NavLink>
                        </Grid>
                    </Grid>
                </GridSection>
                <GridSection md={4} lg={2} sm={4} xs={6} item>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item>
                            <Title>Company</Title>
                        </Grid>
                        <Grid item>
                            <NavLink to="/about">
                                <Sub>About Us</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <Sub>Contact Us</Sub>
                        </Grid>
                        <Grid item>
                            <Sub>Customers</Sub>
                        </Grid>
                        <Grid item>
                            <Sub>Open Source</Sub>
                        </Grid>
                        <Grid item>
                            <Sub>Partners with us</Sub>
                        </Grid>
                        <Grid item>
                            <Sub>Refer and Earn</Sub>
                        </Grid>
                        <Grid item>
                            <Sub>We are Hiring!</Sub>
                        </Grid>
                    </Grid>
                </GridSection>
                <GridSection md={4} lg={2} sm={4} xs={6} item>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item>
                            <Title>Resources</Title>
                        </Grid>
                        <Grid item>
                            <NavLink to="https://docs.razorops.com/getting_started/">
                                <Sub>Getting Started</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <Sub>Migrate From Jenkins To RazorOps</Sub>
                        </Grid>
                        <Grid item>
                            <Sub>Case Studies</Sub>
                        </Grid>
                        <Grid item>
                            <Sub>Webinars</Sub>
                        </Grid>
                        <Grid item>
                            <NavLink to="/posts">
                                <Sub>Blog</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <Sub>Newsletter</Sub>
                        </Grid>
                        <Grid item>
                            <Sub>Write for us</Sub>
                        </Grid>
                    </Grid>
                </GridSection>
                <GridSection md={4} lg={2} sm={4} xs={6} item>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item>
                            <Title>Support</Title>
                        </Grid>
                        <Grid item>
                            <NavLink to="https://docs.razorops.com/">
                                <Sub>Documentation</Sub>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <Sub>Community</Sub>
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
                        <Grid item>
                            <Sub>Status Page</Sub>
                        </Grid>
                    </Grid>
                </GridSection>
            </TopGrid>
            <Divider />
            <BottomSection>
                <Grid container justifyContent={'space-between'} spacing={2}>
                    <Grid item>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item>
                                <img alt="" src={logo} />
                            </Grid>
                            <Grid item>
                                <CopyRights>© 2022 Razorops. All right reserved.</CopyRights>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item>
                                <NavLink
                                    to="https://www.linkedin.com/company/razorops"
                                    target="_blank">
                                    <img alt="" src={linkedin} />
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="https://github.com/razorops-public" target="_blank">
                                    <img alt="" src={github} />
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="https://twitter.com/razorops" target="_blank">
                                    <img alt="" src={twitter} />
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="https://www.facebook.com/razorops" target="_blank">
                                    <img alt="" src={facebook} />
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink
                                    to="https://www.youtube.com/channel/UCq-0f5HPIAJ_2Ds6uvwBW4g/videos"
                                    target="_blank">
                                    <img alt="" src={youtube} />
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink
                                    to="https://api.whatsapp.com/send/?phone=918688468400&text=Hi%20Shyam,%20I%20like%20to%20know%20more%20about%20Razorops%20CICD&app_absent=0"
                                    target="_blank">
                                    <img alt="" src={whatsapp} />
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="https://discord.gg/rfsHNYDs4j" target="_blank">
                                    <img alt="" src={discord} />
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="https://t.me/+F3o5iCzYFqeSd54d" target="_blank">
                                    <img alt="" src={telegram} />
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="https://razorops.quora.com/" target="_blank">
                                    <img alt="" src={quora} />
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </BottomSection>
        </Bg>
    );
}
