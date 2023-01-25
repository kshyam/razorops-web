import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { color2, font1, fontSize20, lineHeight26, lineHeight29 } from '../assets/globalStyles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import path from '../assets/images/dottedPath.png';
import line from '../assets/images/line.png';
import verticalLine from '../assets/images/vertical-line.png';

import { color1, font3, font6, fontSize18 } from '../assets/globalStyles';
import { Link } from 'gatsby';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: white;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 50px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 50px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 160px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 50px 100px;
    }

    @media (max-width: 600px) {
        padding: 70px 20px 70px 20px;
    }
`;

const MainContainer = styled(Grid)`
    margin-top: 40px;
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 599px) {
        margin-top: 30px;
        justify-content: center;
        flex-direction: column;
    }
`;

const Title = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    text-align: center;
    color: ${color1};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 40px;
        line-height: 54px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 40px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const Sub = styled('div')`
    padding: 20px 0px;
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    text-align: center;
    white-space: pre-wrap;
    color: ${color2};

    @media (max-width: 600px) {
        white-space: inherit;
    }
`;

const SubText = styled('div')`
    ${font1};
    font-size: ${fontSize20};
    line-height: 28px;
    color: #9c9494;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 25px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 22px;
        padding: 0px 0px 0px 65px;
    }
`;

const Text = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 29px;
    color: ${color1};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 18px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

const Container = styled(Grid)`
    padding: 32px;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.06);
        border-radius: 20px;

        @media (max-width: 599px) {
            background: none;
            box-shadow: none;
            border-radius: none;
        }
    }

    @media (max-width: 599px) {
        padding: 0px;
    }
`;

const TitleText = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 29px;
    color: ${color1};
    margin: 20px 0px 0px 0px;
    background: #ffffff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 18px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 20px;
        line-height: 30px;
        margin: 0px 0px 0px 10px;
    }
`;

const Line1 = styled('img')`
    position: absolute;
    top: 130px;
    left: 100px;
    width: 80%;
    height: 1px;

    @media (max-width: 899px) {
        display: none;
    }

    @media (min-width: 1535px) {
        width: 85%;
    }
`;

const Line2 = styled('img')`
    position: absolute;
    top: 530px;
    left: 100px;
    width: 80%;
    height: 1px;

    @media (max-width: 899px) {
        display: none;
    }

    @media (min-width: 1535px) {
        width: 85%;
    }
`;

const Line3 = styled('div')`
    display: none;

    @media (max-width: 599px) {
        display: flex;
        position: absolute;
        top: 20px;
        left: 20px;
        height: 150px;
        border-left: 1px dashed #345eef;
    }
`;

const Path = styled('img')`
    position: absolute;
    height: 400px;
    right: -110px;
    top: 130px;
    @media (max-width: 899px) {
        display: none;
    }
`;

const GetStartedGrid = styled(Grid)`
    @media (max-width: 599px) {
        display: none;
    }
`;

const GetStarted = styled(Button)`
    padding: 10px;
    background: #345eef;
    border-radius: 15px;
    text-transform: capitalize;
    &:hover {
        background: #345eef;
    }
`;

const ButtonText = styled('span')`
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #ffffff;
`;

const IconGrid = styled(Grid)`
    display: flex;
    flex-direction: column;

    @media (max-width: 599px) {
        flex-direction: row;
        align-items: center;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const GridContainer = styled(Grid)`
    height: 400px;

    @media (max-width: 599px) {
        height: 100%;
        padding: 20px 0px 0px 70px !important;
    }
`;

const GetStartedButton = styled(Button)`
    display: none;

    @media (max-width: 599px) {
        display: flex;
        width: 320px;
        height: 50px;
        padding: 10px;
        margin: 30px 0px 0px 0px;
        background: #345eef;
        border-radius: 15px;
        text-transform: capitalize;

        &:hover {
            background: #345eef;
        }
    }

    @media (max-width: 399px) {
        display: flex;
        width: 250px;
        height: 50px;
        padding: 10px;
        margin: 30px 0px 0px 0px;
        background: #345eef;
        border-radius: 15px;
        text-transform: capitalize;

        &:hover {
            background: #345eef;
        }
    }
`;

const data = [
    {
        id: 1,
        iconColor: '#ACE49E',
        text: 'Pipeline as code',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 2,
        iconColor: '#FBB8F0',
        text: 'Test Performance',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 3,
        iconColor: '#94D1F4',
        text: 'Test Coverage Reports',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 4,
        iconColor: '#FFD88E',
        text: 'Docker Caching',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 5,
        iconColor: '#FCAEAE',
        text: 'Language Caching',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    },
    {
        id: 6,
        iconColor: '#FFC897',
        text: 'Artifacts Storage',
        subText: 'The state-of-the-art anti-spoofing techniques leverage the ability of control.'
    }
];

export default function RazoropsPipeline() {
    const [showButton, setShowButton] = useState(0);
    return (
        <BG>
            <Title>Razorops Pipeline</Title>
            <Sub>
                {'Nowadays, the increasingly growing number of mobile\nand computing devices'}
            </Sub>
            <MainContainer container spacing={10}>
                <Line1 src={line} />
                <Line2 src={line} />
                <Path src={path} />

                {data.map((i) => (
                    <GridContainer key={i.id} item xs={10} sm={6} md={4} lg={4}>
                        <Container
                            onMouseEnter={() => setShowButton(i.id)}
                            onMouseLeave={() => setShowButton(0)}
                            item>
                            <Grid container spacing={2}>
                                <Line3 />
                                <Grid item>
                                    <IconGrid container spacing={2}>
                                        <Grid item>
                                            <CheckCircleIcon
                                                fontSize={'large'}
                                                sx={{
                                                    position: 'relative',
                                                    fill: i.iconColor,
                                                    background: '#fff',
                                                    fontSize: '40px'
                                                }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <TitleText>{i.text}</TitleText>
                                        </Grid>
                                    </IconGrid>
                                </Grid>
                                <Grid item>
                                    <SubText>{i.subText}</SubText>
                                </Grid>
                                {showButton === i.id && (
                                    <GetStartedGrid item>
                                        <NavLink to="https://docs.razorops.com/getting_started/">
                                            <GetStarted>
                                                <ButtonText>Get Started</ButtonText>
                                            </GetStarted>
                                        </NavLink>
                                    </GetStartedGrid>
                                )}
                            </Grid>
                        </Container>
                    </GridContainer>
                ))}
                <GetStartedButton>
                    <ButtonText>Get Started</ButtonText>
                </GetStartedButton>
            </MainContainer>
        </BG>
    );
}
