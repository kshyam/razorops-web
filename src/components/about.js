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
    lineHeight26
} from '../assets/globalStyles';

import img from '../assets/images/about/sideImg-2.svg';
import bottomImg from '../assets/images/about/bottomImg.svg';
import github from '../assets/images/about/github-black.svg';
import gitlab from '../assets/images/about/gitlab.svg';
import bitbucket from '../assets/images/about/bitbucket.svg';
import { Button } from '@mui/material';
import { Link } from 'gatsby';

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
        padding: 40px 0px;
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
    padding: 80px 0px 0px 0px;
    @media (max-width: 1199px) {
        padding: 40px 0px 0px 0px;
    }

    @media (max-width: 599px) {
        margin: 0px;
        text-align: left;
    }
`;

const RightContainer = styled(Grid)`
    display: flex;

    @media (max-width: 599px) {
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

const NavLink = styled(Link)`
    text-decoration: none;
`;

const About = () => {
    return (
        <BG>
            <TopSectionContainer container>
                <LeftContainer item direction={'column'} xs={10} sm={10} md={6} lg={6}>
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

                <RightContainer item direction={'column'} xs={10} sm={10} md={6} lg={6}>
                    <Grid style={{ display: 'flex', justifyContent: 'center' }} item>
                        <img alt="" src={img} />
                    </Grid>
                </RightContainer>
            </TopSectionContainer>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                    item>
                    <img alt="" src={bottomImg} />
                    <NavLink to="https://razorops.com/schedule-demo">
                        <DemoButton variant="outlined">
                            <DemoText>Schedule a demo</DemoText>
                        </DemoButton>
                    </NavLink>
                </Grid>
            </Grid>
        </BG>
    );
};

export default About;
