import React from 'react';
import writeForUs from '../assets/images/footer/write-for-us.svg';
import img from '../assets/images/footer/support-plans/support.svg';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import img1 from '../assets/images/footer/write-for-us/img1.svg';
import img2 from '../assets/images/footer/write-for-us/img2.svg';
import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';
import { font6, font7 } from '../assets/globalStyles';
import { WriteForUsContent } from '../components/common/constants';
import { Link } from 'gatsby';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    @media (min-width: 1535px) {
        padding: 150px;
    }

    @media (max-width: 599px) {
        padding: 50px 20px;
    }
`;

const GridContainer = styled(Grid)`
    padding: 0px 100px;

    @media (min-width: 1535px) {
        padding: 0px 200px;
    }

    @media (max-width: 599px) {
        padding: 20px;
    }
`;

const GetStarted = styled('div')`
    padding: 40px;
    background: linear-gradient(180deg, #0069ff 0%, #002c9b 100%);
    border-radius: 28px;
`;

const GetStartedTitle = styled('span')`
    ${font6};
    font-size: 28px;
    line-height: 28px;
    color: #f9fafe;
`;

const GetStartedSub = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 28px;
    color: #f9fafe;
`;

const ContactUsButton = styled(Button)`
    background: #f9fafe;
    border-radius: 14px;
    padding: 20px;
    text-transform: none;
    width: -webkit-fill-available;

    &:hover {
        background: #f9fafe;
    }
`;

const ContactUsText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #0069ff;
`;

const Img = styled('img')`
    width: 100px;
    height: 100px;
`;

const Title = styled('span')`
    ${font7};
    font-size: 38px;
    line-height: 48px;
    color: #031b4e;
`;

const Sub = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 32px;
    color: #293241;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

export default function WriteForUs() {
    return (
        <>
            <FooterComponent heading="Write for us" img={writeForUs} contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container direction={'column'} spacing={10}>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <Title>About Razorops</Title>
                                    </Grid>
                                    <Grid item>
                                        <Sub>
                                            Razorops is a complete container native CI/CD solution
                                            handling all aspects of the software lifecycle from the
                                            moment a commit is created until it is deployed to
                                            production.
                                        </Sub>
                                    </Grid>

                                    <Grid item>
                                        <ul>
                                            {WriteForUsContent.list1.map((i) => (
                                                <li
                                                    style={{
                                                        listStyleType: 'disc',
                                                        padding: '5px 0px'
                                                    }}>
                                                    <Sub>{i}</Sub>
                                                </li>
                                            ))}
                                        </ul>
                                    </Grid>
                                    <Grid item>
                                        <Sub>
                                            In a nutshell- Razorops is a container native continuous
                                            delivery platform to automate your workflow from
                                            development to production in a few simple steps.
                                        </Sub>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <img alt="" src={img1} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <img alt="" src={img2} />
                            </Grid>
                            <Grid item md={6}>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <Title>What’s in it for you?</Title>
                                    </Grid>
                                    <Grid item>
                                        <ul>
                                            {WriteForUsContent.list2.map((i) => (
                                                <li
                                                    style={{
                                                        listStyleType: 'disc',
                                                        padding: '5px 0px'
                                                    }}>
                                                    <Sub
                                                        dangerouslySetInnerHTML={{
                                                            __html: i
                                                        }}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <GridContainer container spacing={5} justifyContent={'center'}>
                            <Grid item>
                                <Title>Instructions</Title>
                            </Grid>
                            <Grid item>
                                <ul>
                                    {WriteForUsContent.instructions.map((i) => (
                                        <li style={{ listStyleType: 'disc', padding: '5px 0px' }}>
                                            <Sub
                                                style={{ lineHeight: '32px' }}
                                                dangerouslySetInnerHTML={{
                                                    __html: i
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </GridContainer>
                    </Grid>
                    <Grid item>
                        <GetStarted>
                            <Grid container spacing={5} alignItems={'center'}>
                                <Grid item md={2} xl={1} display={'flex'} justifyContent={'center'}>
                                    <Img alt="" src={img} />
                                </Grid>
                                <Grid item md={7} xl={8}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <GetStartedTitle>Let's Get Started</GetStartedTitle>
                                        </Grid>
                                        <Grid item>
                                            <GetStartedSub>
                                                {
                                                    'Razorops is a complete container native CI/CD solution handling all aspects of the software lifecycle from the moment a commit is created until it is deployed to production.'
                                                }
                                            </GetStartedSub>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={3} xl={3}>
                                    <NavLink to="/contact">
                                        <ContactUsButton>
                                            <ContactUsText>Contact us</ContactUsText>
                                        </ContactUsButton>
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </GetStarted>
                    </Grid>
                    <Grid item>
                        <GridContainer container spacing={5} justifyContent={'center'}>
                            <Grid item>
                                <Title>Terms and Conditions</Title>
                            </Grid>
                            <Grid item>
                                <ul>
                                    {WriteForUsContent.terms.map((i) => (
                                        <li style={{ listStyleType: 'disc', padding: '5px 0px' }}>
                                            <Sub
                                                dangerouslySetInnerHTML={{
                                                    __html: i
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </GridContainer>
                    </Grid>
                </Grid>
            </ContentContainer>

            <Footer />
        </>
    );
}
