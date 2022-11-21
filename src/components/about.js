import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {
    font1,
    color4,
    font7,
    color2,
    fontSize18,
    lineHeight27,
    color1,
    font3,
    font2,
    lineHeight26,
    font10,
    font6
} from '../assets/globalStyles';

import bottomImg from '../assets/images/about/bottomImg-v1.2.svg';
import razorops from '../assets/images/about/razorops.svg';
import add from '../assets/images/about/add.svg';
import digitalOcean from '../assets/images/about/digital-ocean.svg';

import github from '../assets/images/about/github-black.svg';
import gitlab from '../assets/images/about/gitlab.svg';
import bitbucket from '../assets/images/about/bitbucket.svg';
import { Button } from '@mui/material';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: linear-gradient(rgba(255, 255, 255, 0.8), rgba(222, 236, 255, 0.8));

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 0px 180px 40px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 20px;
    }
`;

const Razorops = styled('span')`
    ${font3}
    font-size: 40px;
    line-height: 60px;
    color: ${color4};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 32px;
        line-height: 40px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 24px;
        line-height: 35px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 24px;
        line-height: 35px;
    }

    @media (max-width: 599px) {
        font-size: 24px;
        line-height: 36px;
    }
`;

const Desc = styled('span')`
    ${font3}
    font-size: 40px;
    line-height: 60px;
    color: ${color1};
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 32px;
        line-height: 40px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        white-space: inherit;
        font-size: 24px;
        line-height: 35px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        white-space: inherit;
        font-size: 24px;
        line-height: 35px;
    }

    @media (max-width: 599px) {
        white-space: inherit;
        font-size: 24px;
        line-height: 36px;
    }
`;

const SubText = styled('span')`
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight27};
    color: ${color2};

    @media (max-width: 599px) {
        font-size: ${fontSize18};
        line-height: 29px;
    }
`;

const LeftContainer = styled(Grid)`
    display: flex;
    justify-content: flex-start;

    @media (max-width: 599px) {
        margin: 0px;
        text-align: left;
    }
`;

const RightContainer = styled(Grid)`
    @media (max-width: 899px) {
        padding: 50px 0px 0px 0px;
    }
`;

const SubContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    text-align: left;

    @media (max-width: 899px) {
        text-align: left;
    }
`;

const TopSectionContainer = styled(Grid)`
    display: flex;
    justify-content: space-between;
    position: relative;

    @media (max-width: 899px) {
        justify-content: center;
        align-items: center;
    }
`;

const ImageGrid = styled(Grid)`
    padding: 0px 30px 0px 0px;

    @media (max-width: 899px) {
        display: flex;
        justify-content: center;
    }
`;

const Img = styled('img')`
    width: 40px;
    height: 40px;
`;

const ImgContainer = styled(Grid)`
    display: flex;
    justify-content: flex-start;
`;

const DemoText = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #ffffff;
    text-transform: none;

    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 26px;
    }
`;

const DemoButton = styled(Button)`
    margin: 40px;
    padding: 10px 30px;
    background: ${color4};
    border-radius: 15px;

    &:hover {
        background: ${color4};
    }

    @media (max-width: 600px) {
        width: 220px;
    }
`;

const TopGrid = styled(Grid)`
    padding: 50px 20px;
    background: #0069ff;
    border-radius: 30px 30px 0px 0px;

    @media (max-width: 599px) {
        padding: 40px 30px;
    }
`;

const TopGridText = styled('span')`
    ${font10};
    font-size: 22px;
    line-height: 44px;
    text-align: center;
    color: #deecff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

const BottomGrid = styled(Grid)`
    padding: 50px;
    background: rgba(222, 236, 255, 0.8);
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 30px 30px;

    @media (max-width: 599px) {
        padding: 20px;
    }
`;

const PrettyConvincing = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #5b6987;
    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 20px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

const GetStarted = styled('span')`
    ${font6};
    font-size: 34px;
    line-height: 34px;
    color: #031b4e;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 24px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

const ApplyButton = styled(Button)`
    padding: 20px;
    background: #0069ff;
    border-radius: 14px;
    text-transform: none;
    &:hover {
        background: #0069ff;
    }
`;

const ApplyText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #f9fafe;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 20px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

const BottomContainer = styled(Grid)`
    margin-top: 100px;
    background: #f9fafe;
    border-radius: 40px;
    overflow: hidden;
`;

const BottomContainerTitle = styled('span')`
    ${font7};
    font-size: 48px;
    line-height: 63px;
    color: #031b4e;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 32px;
        line-height: 39px;
        white-space: pre-wrap;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 27px;
        line-height: 32px;
        white-space: pre-wrap;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 30px;
        line-height: 32px;
        white-space: pre-wrap;
    }

    @media (max-width: 599px) {
        white-space: pre-wrap;
        font-size: 22px;
        line-height: 29px;
    }
`;

const BottomContainerDesc = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 30px;
    color: #5b6987;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 29px;
        white-space: pre-wrap;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 18px;
        line-height: 27px;
        white-space: pre-wrap;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const FreeTrialText = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 20px;
    color: #f9fafe;
`;

const About = () => {
    return (
        <BG>
            <TopSectionContainer container>
                <LeftContainer item direction={'column'} xs={12} sm={12} md={6} lg={6}>
                    <Grid item>
                        <Razorops>Razorops</Razorops>
                        <Desc>
                            {
                                ' is a blazing Fast CI/CD\nPlatform with powerful tools to\nbuild, test & automate the code\ndeployment.'
                            }
                        </Desc>
                    </Grid>
                    <SubContainer spacing={2} container style={{ marginTop: '20px' }}>
                        <Grid item>
                            <SubText>{'Sign up with an account'}</SubText>
                        </Grid>
                        <ImgContainer item display={'flex'} flexDirection={'row'}>
                            <ImageGrid item>
                                <Img src={github} alt=""></Img>
                            </ImageGrid>
                            <ImageGrid item>
                                <Img src={gitlab} alt=""></Img>
                            </ImageGrid>
                            <ImageGrid item>
                                <Img src={bitbucket} alt=""></Img>
                            </ImageGrid>
                        </ImgContainer>
                    </SubContainer>
                </LeftContainer>

                <RightContainer item direction={'column'} xs={12} sm={12} md={5} lg={5}>
                    <Grid container>
                        <TopGrid item xs={12} sm={12} md={12} lg={12}>
                            <Grid container spacing={3} justifyContent={'center'}>
                                <Grid item>
                                    <Grid
                                        container
                                        spacing={2}
                                        justifyContent={'center'}
                                        alignItems={'center'}>
                                        <Grid item>
                                            <img alt="" src={razorops} />
                                        </Grid>
                                        <Grid item>
                                            <img alt="" src={add} />
                                        </Grid>
                                        <Grid item>
                                            <img alt="" src={digitalOcean} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item display={'flex'} justifyContent={'center'}>
                                    <TopGridText>
                                        {
                                            ' Try Razorops CI/CD and get $250 Credits over DigitalOcean Kubernetes'
                                        }
                                    </TopGridText>
                                </Grid>
                            </Grid>
                        </TopGrid>
                        <BottomGrid item xs={12} sm={12} md={12} lg={12}>
                            <Grid container spacing={3} direction={'column'} alignItems={'center'}>
                                <Grid item>
                                    <PrettyConvincing>PRETTY CONVINCING, RIGHT?</PrettyConvincing>
                                </Grid>
                                <Grid item>
                                    <GetStarted>Ready to get started?</GetStarted>
                                </Grid>
                                <Grid item>
                                    <ApplyButton variant="outlined">
                                        <ApplyText>Apply Now</ApplyText>
                                    </ApplyButton>
                                </Grid>
                            </Grid>
                        </BottomGrid>
                    </Grid>
                </RightContainer>
            </TopSectionContainer>
            <BottomContainer container>
                <Grid sx={{ padding: 5 }} item md={6}>
                    <Grid container spacing={4} direction={'column'}>
                        <Grid item>
                            <BottomContainerTitle>
                                {'The best flows on\nthe planet, at your\nfingertips.'}
                            </BottomContainerTitle>
                        </Grid>
                        <Grid item>
                            <BottomContainerDesc>
                                {
                                    'Nulla facilisi. Vestibulum non est nisl. Donec eget\nsodales nisl. Donec ut velit erat. '
                                }
                            </BottomContainerDesc>
                        </Grid>
                        <Grid item>
                            <ApplyButton variant="contained">
                                <FreeTrialText>Start 30 days free trial</FreeTrialText>
                            </ApplyButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{ paddingTop: 5 }} item md={6}>
                    <img alt="" src={bottomImg} />
                </Grid>
            </BottomContainer>
        </BG>
    );
};

export default About;
