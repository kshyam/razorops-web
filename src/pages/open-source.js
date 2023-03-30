import React from 'react';
import openSource from '../assets/images/footer/open-source.svg';
import support from '../assets/images/footer/open-source/support.svg';
import iutest from '../assets/images/footer/open-source/iutest.svg';
import jekyll from '../assets/images/footer/open-source/jekyll.svg';

import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';
import { font1, font6, font7 } from '../assets/globalStyles';
import { Link } from 'gatsby';
import GetStarted from '../components/get-started';
import PageHead from '../components/common/page-head';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    @media (max-width: 600px) {
        padding: 40px 20px;
    }
`;

const Title = styled('span')`
    ${font7};
    font-size: 24px;
    line-height: 29px;
    color: #0069ff;
`;

const Desc = styled('span')`
    ${font7};
    font-size: 60px;
    line-height: 90px;
    text-align: center;
    color: #031b4e;
    white-space: pre-wrap;

    @media (max-width: 899px) {
        font-size: 40px;
        line-height: 40px;
    }
`;

const Sub = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #5b6987;
    white-space: pre-wrap;
`;

const ScheduleButton = styled(Button)`
    padding: 15px 30px;
    border-radius: 14px;
    background: transparent;
    border: 1px solid #031b4e;

    &:hover {
        background: transparent;
    }
`;

const ScheduleText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #031b4e;
    text-transform: none;
`;

const TryButton = styled(Button)`
    background: #0069ff;
    border-radius: 14px;
    padding: 15px 30px;

    &:hover {
        background: #0069ff;
    }
`;

const TryText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #f9fafe;
    text-transform: none;
`;

const UsingRazorops = styled('span')`
    ${font6};
    font-size: 28px;
    line-height: 28px;
    color: #f9fafe;
`;

const Feedback = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 24px;
    color: #f9fafe;
`;

const WhoIsUsing = styled('span')`
    ${font7};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;
    white-space: pre-wrap;
`;

const ProjectTitle = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #18204c;
    white-space: pre-wrap;
`;

const ReadMore = styled('span')`
    ${font6};
    font-size: 18px;
    line-height: 29px;
    color: #0069ff;
`;

const FeedbackGrid = styled(Grid)`
    margin: 20px 0px;
    padding: 25px 35px;
    background: linear-gradient(180deg, #0069ff 0%, #002c9b 100%);
    border-radius: 28px;
`;

const ProjectGrid = styled(Grid)`
    margin: 20px;
    padding: 40px;
    background: #f9fafe;
    border-radius: 28px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops Open Source',
                description:
                    'Razorops is a complete container native CI/CD solution. In a similar manner to Docker, Razorops comes with dedicated support for Kubernetes deployments.'
            }}
        />
    );
};

export default function OpenSource() {
    return (
        <>
            <FooterComponent heading="Open Source" img={openSource} contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid sx={{ zIndex: 1 }} container spacing={5} justifyContent={'center'}>
                    <Grid item md={12} display={'flex'} justifyContent={'center'}>
                        <Title>Get Razorops as Platform</Title>
                    </Grid>
                    <Grid item md={12} display={'flex'} justifyContent={'center'}>
                        <Desc>{'Build your open source\nprojects FREE.'}</Desc>
                    </Grid>
                    <Grid item md={12} display={'flex'} justifyContent={'center'}>
                        <Sub>
                            {
                                'We too ❤️ the open source community. You can build\nyour public or private projects for Free.'
                            }
                        </Sub>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container spacing={2} justifyContent={'center'}>
                            <Grid item>
                                <NavLink to="/schedule-demo">
                                    <ScheduleButton>
                                        <ScheduleText>Schedule a demo</ScheduleText>
                                    </ScheduleButton>
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="https://dashboard.razorops.com/users/sign_in">
                                    <TryButton>
                                        <TryText>Try it Free</TryText>
                                    </TryButton>
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <FeedbackGrid container>
                            <Grid sx={{ padding: '0px 30px 0px 0px' }} item>
                                <img src={support} alt="" />
                            </Grid>
                            <Grid item display={'flex'} alignItems={'center'}>
                                <Grid container direction={'column'} spacing={2}>
                                    <Grid item>
                                        <UsingRazorops>
                                            Using Razorops for your open source project?
                                        </UsingRazorops>
                                    </Grid>
                                    <Grid item>
                                        <Feedback>
                                            Send your feedback at support@razorops.com
                                        </Feedback>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </FeedbackGrid>
                    </Grid>
                    <Grid item md={12} display={'flex'} justifyContent={'center'}>
                        <WhoIsUsing>{'Who is using RazorOps for Open\nSource Project?'}</WhoIsUsing>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container justifyContent={'center'}>
                            <NavLink to="https://github.com/srz-zumix/iutest" target={'_blank'}>
                                <ProjectGrid item>
                                    <Grid container spacing={2} direction={'column'}>
                                        <Grid item>
                                            <img src={iutest} alt="" />
                                        </Grid>
                                        <Grid item>
                                            <ProjectTitle>
                                                {'IUTEST - a C++ testing\nframework'}
                                            </ProjectTitle>
                                        </Grid>
                                        <Grid item>
                                            <Sub>iutest is framework for writing C++ tests.</Sub>
                                        </Grid>
                                        <Grid item>
                                            <ReadMore>Read More</ReadMore>
                                        </Grid>
                                    </Grid>
                                </ProjectGrid>
                            </NavLink>
                            <NavLink
                                to="https://jekyllrb.com/docs/continuous-integration/razorops/"
                                target={'_blank'}>
                                <ProjectGrid item>
                                    <Grid container spacing={2} direction={'column'}>
                                        <Grid item>
                                            <img src={jekyll} alt="" />
                                        </Grid>
                                        <Grid item>
                                            <ProjectTitle>
                                                {'Jekyll - a static site\ngenerator'}
                                            </ProjectTitle>
                                        </Grid>
                                        <Grid item>
                                            <Sub>Markdown, Liquid, HTML & CSS go in.</Sub>
                                        </Grid>
                                        <Grid item>
                                            <ReadMore>Read More</ReadMore>
                                        </Grid>
                                    </Grid>
                                </ProjectGrid>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </ContentContainer>
            <GetStarted />
            <Footer />
        </>
    );
}
