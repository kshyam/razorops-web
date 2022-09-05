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
    font3
} from '../assets/globalStyles';

import img from '../assets/images/about/sideImg.svg';
import bottomImg from '../assets/images/about/bottomImg.svg';
import github from '../assets/images/about/github-black.svg';
import gitlab from '../assets/images/about/gitlab.svg';
import bitbucket from '../assets/images/about/bitbucket.svg';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.8) -2.41%,
        rgba(240, 238, 255, 0.8) 42.23%
    );

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 70px 200px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 0px 70px 0px;
    }
`;

const Razorops = styled('span')`
    ${font3}
    font-size: 40px;
    line-height: 60px;
    color: ${color4};

    @media (max-width: 600px) {
        font-size: 27px;
        line-height: 45px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 32px;
        line-height: 40px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 27px;
        line-height: 35px;
    }
`;

const Desc = styled('span')`
    ${font3}
    font-size: 40px;
    line-height: 60px;
    color: ${color1};

    @media (max-width: 600px) {
        font-size: 27px;
        line-height: 45px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 32px;
        line-height: 40px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 27px;
        line-height: 35px;
    }
`;

const SubText = styled('span')`
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight27};
    color: ${color2};
`;

const LeftContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    @media (max-width: 899px) {
        margin: 20px;
        text-align: center;
    }

    @media (max-width: 599px) {
        margin: 0px;
        text-align: left;
    }
`;

const RightContainer = styled(Grid)`
    display: flex;
`;

const SubContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    text-align: left;
    @media (max-width: 899px) {
        text-align: center;
        justify-content: center;
    }

    @media (max-width: 599px) {
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

const RightSectionImg = styled('img')`
    margin: 20px 0;
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
    @media (max-width: 899px) {
        display: flex;
        justify-content: center;
    }
`;

const About = () => {
    return (
        <BG>
            <TopSectionContainer container sm={12} xs={12} md={12} lg={12}>
                <LeftContainer item direction={'column'} xs={10} sm={10} md={6} lg={6}>
                    <Grid item>
                        <Razorops>Razorops</Razorops>
                        <Desc>
                            {
                                ' is a blazing Fast CI/CD\nPlatform with powerful tools to\nbuild, test & automate the code\ndeployment.'
                            }
                        </Desc>
                    </Grid>
                    <SubContainer spacing={2} container style={{ marginTop: '20px' }} item>
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
                    <Grid justifyContent={'center'} item>
                        <Grid style={{ display: 'flex', justifyContent: 'center' }} item>
                            <RightSectionImg alt="" src={img} />
                        </Grid>
                    </Grid>
                </RightContainer>
            </TopSectionContainer>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} item>
                    <img alt="" src={bottomImg} />
                </Grid>
            </Grid>
        </BG>
    );
};

export default About;
