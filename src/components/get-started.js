import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { color1, font3, font6, color3, font7, color4 } from '../assets/globalStyles';

import img from '../assets/images/get-started/img.svg';
import { Button } from '@mui/material';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: #deecff;
`;

const Title = styled('span')`
    ${font3}
    font-size: 60px;
    line-height: 70px;
    color: ${color1};

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

const Sub = styled('span')`
    ${font6};
    font-size: 30px;
    line-height: 40px;
    color: ${color3};

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 28px;
        line-height: 29px;
        white-space: pre-wrap;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 23px;
        line-height: 27px;
        white-space: pre-wrap;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 22px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 22px;
        line-height: 27px;
    }
`;

const TitleGrid = styled(Grid)`
    @media (max-width: 899px) {
        display: flex;
        justify-content: center;
    }
`;

const SubGrid = styled(Grid)`
    @media (max-width: 899px) {
        display: flex;
        justify-content: center;
    }
`;

const LeftContainer = styled(Grid)`
    display: flex;
`;

const RightContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    @media (max-width: 899px) {
        margin: 10px;
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

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 0px 40px 0px 20px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px 40px 20px 20px;
    }

    @media (min-width: 1535px) {
        padding: 0px 80px 0px 80px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 0px 40px 0px 20px;
    }

    @media (max-width: 600px) {
        padding: 50px 0px 0px 0px;
        flex-direction: column-reverse;
    }
`;

const ButtonGrid = styled(Grid)`
    display: flex;
    padding: 40px 0px 0px 0px;

    @media (max-width: 899px) {
        justify-content: center;
        padding: 40px 20px 0px 0px;
    }
`;

const GetStartedButton = styled(Button)`
    width: 231px;
    height: 50px;
    background: ${color4};
    border-radius: 15px;
    text-transform: none;

    @media (max-width: 1199px) {
        width: 200px;
        height: 40px;
    }

    &:hover {
        background: ${color4};
    }
`;

const ButtonText = styled('span')`
    ${font7};
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const GetStarted = () => {
    return (
        <BG>
            <TopSectionContainer container>
                <LeftContainer item xs={12} sm={12} md={5} lg={5}>
                    <Grid justifyContent={'center'} item>
                        <StaticImage
                            alt=""
                            src={'../assets/images/get-started/img.svg'}
                            placeholder="blurred"
                        />
                    </Grid>
                </LeftContainer>
                <RightContainer item xs={10} sm={10} md={6} lg={6}>
                    <Grid container spacing={4} direction={'column'} justifyContent={'center'}>
                        <TitleGrid item>
                            <Title>{'25 Minutes onboarding\nand setup'}</Title>
                        </TitleGrid>
                        <SubGrid item>
                            <Sub>{'We Have Fastest in the Market that\nsupports developers.'}</Sub>
                        </SubGrid>
                        <Grid item>
                            <ButtonGrid container spacing={2} direction={'row'}>
                                <Grid item>
                                    <NavLink to="https://docs.razorops.com/getting_started/">
                                        <GetStartedButton variant="contained">
                                            <ButtonText>Get Started</ButtonText>
                                        </GetStartedButton>
                                    </NavLink>
                                </Grid>
                                <Grid item>
                                    <NavLink to="/schedule-demo">
                                        <GetStartedButton variant="contained">
                                            <ButtonText>Schedule a demo</ButtonText>
                                        </GetStartedButton>
                                    </NavLink>
                                </Grid>
                            </ButtonGrid>
                        </Grid>
                    </Grid>
                </RightContainer>
            </TopSectionContainer>
        </BG>
    );
};

export default GetStarted;
