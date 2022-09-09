import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { color1, font3, font6, color3, font7, color4 } from '../assets/globalStyles';

import img from '../assets/images/get-started/img.svg';
import { Button } from '@mui/material';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.8) -1.11%,
        rgba(240, 238, 255, 0.8) 109.65%
    );

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 0px 70px 0px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 0px 70px 0px;
    }

    @media (min-width: 1535px) {
        padding: 70px 0px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 0px 70px 0px;
    }

    @media (max-width: 600px) {
        padding: 40px 0px 0px 0px;
    }
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
        font-size: 32px;
        line-height: 39px;
        white-space: pre-wrap;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 30px;
        line-height: 35px;
        white-space: pre-wrap;
    }

    @media (max-width: 599px) {
        white-space: pre-wrap;
        font-size: 24px;
        line-height: 34px;
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
        font-size: 25px;
        line-height: 32px;
        white-space: pre-wrap;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 25px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 22px;
        line-height: 27px;
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
        padding: 0px 40px 0px 20px;
    }

    @media (min-width: 1535px) {
        padding: 0px 80px 0px 80px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 0px 40px 0px 20px;
    }

    @media (max-width: 600px) {
        padding: 0px 0px 0px 0px;
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

const GetStarted = () => {
    return (
        <BG>
            <TopSectionContainer container>
                <LeftContainer item xs={12} sm={12} md={5} lg={5}>
                    <Grid justifyContent={'center'} item>
                        <img alt="" src={img} />
                    </Grid>
                </LeftContainer>
                <RightContainer
                    container
                    item
                    spacing={4}
                    direction={'column'}
                    xs={10}
                    sm={10}
                    md={6}
                    lg={6}>
                    <Grid item>
                        <Title>{'25 Minutes onboarding\nand setup'}</Title>
                    </Grid>
                    <Grid item>
                        <Sub>{'We Have Fastest in the Market that\nsupports developers.'}</Sub>
                    </Grid>
                    <ButtonGrid container item spacing={2} display={'flex'} flexDirection={'row'}>
                        <Grid item>
                            <GetStartedButton variant="contained">
                                <ButtonText>Get Started</ButtonText>
                            </GetStartedButton>
                        </Grid>
                        <Grid item>
                            <GetStartedButton variant="contained">
                                <ButtonText>Schedule a demo</ButtonText>
                            </GetStartedButton>
                        </Grid>
                    </ButtonGrid>
                </RightContainer>
            </TopSectionContainer>
        </BG>
    );
};

export default GetStarted;
