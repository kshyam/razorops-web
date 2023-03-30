import React, { useRef } from 'react';
import styled from '@emotion/styled';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import { Button, Grid } from '@mui/material';
import { font1, font3, font6, font7 } from '../assets/globalStyles';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import career from '../assets/images/footer/careers/career.svg';
import careerImg from '../assets/images/footer/careers/careerImg.svg';
import proudImg from '../assets/images/footer/careers/proudImg.png';
import img1 from '../assets/images/footer/careers/img1.png';
import img2 from '../assets/images/footer/careers/img2.png';
import img3 from '../assets/images/footer/careers/img3.png';
import WhatIsRazorops from '../components/jenkins-alternative/what-is-razorops';
import PageHead from '../components/common/page-head';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 50px 100px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px 100px;
    }

    @media (min-width: 1535px) {
        padding: 100px 120px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 50px 100px;
    }

    @media (max-width: 600px) {
        padding: 50px 20px;
    }
`;

const TopContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    padding: 30px 0px 0px 0px;

    @media (max-width: 600px) {
        padding: 20px 0px 0px 0px;
    }
`;

const Heading = styled('h1')`
    ${font3};
    font-size: 60px;
    line-height: 80px;
    color: #031b4e;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 42px;
        line-height: 57px;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const Sub = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 38px;
    color: #5b6987;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 22px;
        line-height: 34px;
    }

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (max-width: 600px) {
        font-size: 18px;
        line-height: 29px;
    }
`;

const Title = styled('h1')`
    ${font7};
    font-size: 38px;
    line-height: 48px;
    color: #031b4e;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }
`;

const ViewButton = styled(Button)`
    padding: 20px 30px;
    background: #0069ff;
    border-radius: 14px;
    text-transform: none;

    &:hover {
        background: #0069ff;
    }
`;

const ButtonText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #f9fafe;
`;

const Img = styled('img')`
    width: 610.82px;
    height: 100%;
`;

const OpenPositionsContainer = styled('div')`
    padding: 30px;
    height: 100%;
    background: #f9fafe;
    border-radius: 28px;
`;

const PositionsTitle = styled('h1')`
    ${font3};
    font-size: 28px;
    line-height: 40px;
    color: #18204c;
`;

const PositionsDesc = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #5b5b5b;
`;

const Apply = styled('span')`
    ${font6};
    font-size: 18px;
    line-height: 29px;
    color: #0069ff;
`;

const openPositions = [
    {
        id: 1,
        title: 'Jobs for Business Development Manager - Cloud Solution',
        desc: 'Razorops is looking for highly talented sales manager to grow our SaaS business. Get More Details & Apply'
    },
    {
        id: 2,
        title: 'Jobs for Kubernetes Developer and Admin',
        desc: 'Razorops is looking for highly talented hands on Kubernetes Developers to help accelerate our growing Professional Services consulting Cloud & DevOps practice.'
    },
    {
        id: 3,
        title: 'Jobs for Sr. Golang Developer',
        desc: 'We need a strong battletested Golang developer with experience developing in the Kubernetes operator SDK, runtime controller'
    }
];

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops Careers',
                description:
                    'Come and join razorops team of Kubernetes System engineer to help us build great developer tools on Cloud Native DevOps platform.'
            }}
        />
    );
};

export default function Jobs() {
    const openPositionsRef = useRef();

    function handleClick() {
        openPositionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <FooterComponent heading="Careers" contentContainer={false} img={career} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container justifyContent={'center'} spacing={12}>
                    <Grid item md={12}>
                        <TopContainer container justifyContent={'space-between'} spacing={6}>
                            <Grid item md={12} lg={6}>
                                <Grid container spacing={3} direction={'column'}>
                                    <Grid item>
                                        <Heading>
                                            {
                                                'Build an industry-\ndefining product\nwith a great team'
                                            }
                                        </Heading>
                                    </Grid>
                                    <Grid item>
                                        <Sub>
                                            {
                                                'At Razorops, we’re building a platform that makes\ndevelopment teams move faster. Join us!'
                                            }
                                        </Sub>
                                    </Grid>
                                    <Grid item>
                                        <ViewButton onClick={handleClick}>
                                            <ButtonText>View open positions</ButtonText>
                                        </ViewButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item display={'flex'} justifyContent={'center'} md={12} lg={5}>
                                <img src={careerImg} alt="" />
                            </Grid>
                        </TopContainer>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container justifyContent={'space-between'} spacing={{ xs: 3 }}>
                            <Grid item md={12}>
                                <WhatIsRazorops />
                            </Grid>
                            <Grid item md={4}>
                                <Img src={proudImg} alt="" />
                            </Grid>
                            <Grid item md={8}>
                                <Grid
                                    container
                                    justifyContent={'center'}
                                    spacing={{ xs: 5, md: 2 }}>
                                    <Grid item md={10}>
                                        <Title>
                                            {'So proud of the work our team has\naccomplished'}
                                        </Title>
                                    </Grid>
                                    <Grid item md={10}>
                                        <Grid
                                            container
                                            spacing={{ xs: 2 }}
                                            justifyContent={'center'}
                                            alignItems={'center'}>
                                            <Grid item md={4}>
                                                <img src={img1} alt="" />
                                            </Grid>
                                            <Grid item md={4}>
                                                <img src={img2} alt="" />
                                            </Grid>
                                            <Grid item md={4}>
                                                <img src={img3} alt="" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={11}>
                        <Grid
                            ref={openPositionsRef}
                            container
                            justifyContent={'center'}
                            spacing={8}>
                            <Grid item>
                                <Title>Currently open positions</Title>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={3}>
                                    {openPositions.map((i) => (
                                        <Grid key={i.id} item md={6} lg={4}>
                                            <OpenPositionsContainer>
                                                <Grid container direction={'column'} spacing={3}>
                                                    <Grid item>
                                                        <PositionsTitle>{i.title}</PositionsTitle>
                                                    </Grid>
                                                    <Grid item>
                                                        <PositionsDesc>{i.desc}</PositionsDesc>
                                                    </Grid>
                                                    <Grid item>
                                                        <Apply>Get More Details & Apply</Apply>
                                                    </Grid>
                                                </Grid>
                                            </OpenPositionsContainer>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ContentContainer>
            <Footer />
        </>
    );
}
