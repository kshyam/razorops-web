import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { color2, font1, fontSize20, lineHeight26, lineHeight29 } from '../assets/globalStyles';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import path from '../assets/images/dottedPath.png';
import line from '../assets/images/line.png';

import { color1, font3, font6, fontSize18 } from '../assets/globalStyles';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: white;
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 100px calc((100% - 852px) / 2) 90px calc((100% - 852px) / 2);
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 100px calc((100% - 552px) / 2) 90px calc((100% - 552px) / 2);
    }

    @media (min-width: 1535px) {
        padding: 100px calc((100% - 1152px) / 2) 90px calc((100% - 1152px) / 2);
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px calc((100% - 1152px) / 2) 90px calc((100% - 1152px) / 2);
    }

    @media (max-width: 599px) {
        padding: 72px 20px 72px 20px;
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
    }
`;

const Title = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    text-align: center;
    color: ${color1};

    @media (max-width: 600px) {
        font-size: 22px;
        line-height: 27px;
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

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 18px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const Text = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 40px;
    color: ${color1};

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 18px;
        line-height: 32px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const Container = styled(Grid)`
    padding: 20px;
    position: relative;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 360px;
    &:hover {
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0px 4px 80px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
    }
`;

const Line1 = styled('img')`
    position: absolute;
    top: 120px;
    left: 100px;
    width: 72%;
    height: 1px;
    @media (max-width: 899px) {
        display: none;
    }
`;

const Line2 = styled('img')`
    position: absolute;
    top: 540px;
    left: 100px;
    width: 72%;
    height: 1px;
    @media (max-width: 899px) {
        display: none;
    }
`;

const Path = styled('img')`
    position: absolute;
    height: 422px;
    right: -90px;
    top: 120px;
    @media (max-width: 899px) {
        display: none;
    }
`;

const GetStarted = styled(Button)`
    padding: 10px 40px;
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
                    <Grid key={i.id} item xs={8} sm={6} md={4} lg={4}>
                        <Container
                            onMouseEnter={() => setShowButton(i.id)}
                            onMouseLeave={() => setShowButton(0)}
                            container
                            item
                            spacing={2}>
                            <Grid item>
                                <CheckCircleIcon
                                    fontSize={'large'}
                                    sx={{
                                        position: 'relative',
                                        fill: i.iconColor,
                                        background: '#fff'
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Text>{i.text}</Text>
                            </Grid>
                            <Grid item>
                                <SubText>{i.subText}</SubText>
                            </Grid>
                            {showButton === i.id && (
                                <Grid item>
                                    <GetStarted>
                                        <ButtonText>Get Started</ButtonText>
                                    </GetStarted>
                                </Grid>
                            )}
                        </Container>
                    </Grid>
                ))}
            </MainContainer>
        </BG>
    );
}
