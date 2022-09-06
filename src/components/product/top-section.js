import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {
    font2,
    font3,
    fontSize18,
    lineHeight29,
    color4,
    lineHeight26,
    font7,
    font1
} from '../../assets/globalStyles';
import bg from '../../assets/images/product/top-section/background.svg';
import img1 from '../../assets/images/product/top-section/img1.svg';
import img2 from '../../assets/images/product/top-section/img2.svg';
import img3 from '../../assets/images/product/top-section/img3.svg';

import btnIcon from '../../assets/images/btnIcon.svg';
import { Button, Card } from '@mui/material';

const Bg = styled('div')`
    margin-top: 90px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Title = styled('span')`
    ${font7};
    font-size: 24px;
    line-height: ${lineHeight29};
    color: #ffffff;
`;

const Sub = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    color: #ffffff;
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 50px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 64px;
        line-height: 77px;
    }

    @media (max-width: 600px) {
        font-size: 44px;
        line-height: 53px;
    }
`;

const Desc = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    color: #ffffff;
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 26px;
    }
`;

const TextContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TopSectionContainer = styled(Grid)`
    display: flex;
    justify-content: space-between;

    @media (max-width: 899px) {
        align-items: center;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 100px 80px 100px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 100px 50px 100px 50px;
    }

    @media (min-width: 1535px) {
        padding: 200px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 200px 100px 200px 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 100px 40px;
        justify-content: center;
    }
`;

const SignUpText = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #ffffff;
    text-transform: none;
`;

const SignUpButton = styled(Button)`
    padding: 10px 30px;
    background: ${color4};
    border-radius: 15px;

    &:hover {
        background: ${color4};
    }
`;

const Demo = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #1717d2;
    text-transform: none;
`;

const DemoButton = styled(Button)`
    padding: 10px 30px;
    background: #dde5ff;
    border-radius: 15px;

    &:hover {
        background: #dde5ff;
    }
`;

const ButtonGrid = styled(Grid)`
    padding: 30px 0px;
    display: flex;
    flex-direction: row;

    @media (max-width: 899px) {
        justify-content: center;
    }
`;

const LeftContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
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
    justify-content: center;
`;

const CardContainer = styled(Card)`
    padding: 30px 20px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(4px);
    border-radius: 12px;

    @media (max-width: 1199px) {
        margin: 10px;
    }
`;

const CardTitle = styled('span')`
    ${font7};
    font-size: 24px;
    line-height: 30px;
    color: #18204c;
`;

const CardSub = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 24px;
    color: #18204c;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 14px;
        line-height: 22px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 24px;
    }

    @media (max-width: 599px) {
        font-size: 12px;
        line-height: 22px;
    }
`;

const CardImg = styled('img')`
    padding: 0px 20px 0px 10px;
`;

const data = [
    {
        id: 1,
        img: img1,
        title: 'SaaS Platform',
        sub: 'We provide secured, managed and highly-available infrastructure for our SaaS Solution.'
    },
    {
        id: 2,
        img: img2,
        title: 'Hybrid Solution',
        sub: 'Run builds on your infrastructure, and use Razorops UI on our infrastructure.'
    },
    {
        id: 3,
        img: img3,
        title: 'On Prem Self-hosted',
        sub: 'Run the full Razorops stack on your own infrastructure.'
    }
];
const TopSection = () => {
    return (
        <Bg>
            <TopSectionContainer container sm={12} xs={12} md={12} lg={12}>
                <LeftContainer item xs={10} sm={12} md={7} lg={7}>
                    <TextContainer container item spacing={2}>
                        <Grid item>
                            <Title>{'Get Razorops as Platform'}</Title>
                        </Grid>
                        <Grid item>
                            <Sub>{'The Simplest Container\nNative CI/CD Platform'}</Sub>
                        </Grid>
                        <Grid item>
                            <Desc>
                                {
                                    'Nowadays,  the increasingly growing number of mobile\nand computing devices'
                                }
                            </Desc>
                        </Grid>
                    </TextContainer>
                    <ButtonGrid container item spacing={2}>
                        <Grid item>
                            <SignUpButton variant="outlined">
                                <SignUpText>Sign up for free trial</SignUpText>
                            </SignUpButton>
                        </Grid>
                        <Grid item>
                            <DemoButton variant="contained">
                                <img style={{ padding: '0px 12px' }} src={btnIcon} alt="" />
                                <Demo>Watch a demo</Demo>
                            </DemoButton>
                        </Grid>
                    </ButtonGrid>
                </LeftContainer>
                <RightContainer container item xs={12} sm={12} md={5} lg={5}>
                    {data.map((i) => (
                        <Grid key={i.id} item xs={12} sm={8} md={12} lg={12}>
                            <CardContainer>
                                <CardImg alt="" src={i.img} />
                                <Grid container item spacing={1}>
                                    <Grid item display={'flex'} flexDirection={'column'}>
                                        <CardTitle>{i.text}</CardTitle>
                                    </Grid>
                                    <Grid item>
                                        <CardSub>{i.sub}</CardSub>
                                    </Grid>
                                </Grid>
                            </CardContainer>
                        </Grid>
                    ))}
                </RightContainer>
            </TopSectionContainer>
        </Bg>
    );
};

export default TopSection;
