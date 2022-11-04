import * as React from 'react';
import { font1, font5, font7 } from '../../assets/globalStyles';
import bg from '../../assets/images/backgroundPattern.png';
import img from '../../assets/images/about-page/img.svg';
import story from '../../assets/images/about-page/story.svg';
import styled from '@emotion/styled';
import { Card, Grid } from '@mui/material';

const MainContainer = styled('div')`
    margin: 50px 0px 0px 0px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 40px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px 50px 20px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 140px 50px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 100px 50px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 40px 20px 40px;
    }
`;

const Title = styled('span')`
    ${font5};
    font-size: 60px;
    line-height: 90px;
    color: #000000;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 50px;
        line-height: 77px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 39px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 29px;
        line-height: 32px;
    }

    @media (max-width: 599px) {
        font-size: 24px;
        line-height: 27px;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: 24px;
    line-height: 29px;
    color: #000000;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 22px;
        line-height: 27px;
        white-space: pre-wrap;
    }

    @media (min-width: 600px) and (max-width: 1199px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media (max-width: 599px) {
        padding: 20px;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
    }
`;

const Sub = styled('span')`
    padding: 20px 0px 0px 0px;
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #000000;
    text-align: left;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 1199px) {
        padding: 10px 0px 0px 0px;
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: 599px) {
        padding: 10px 0px 0px 0px;
        font-size: 12px;
        line-height: 20px;
    }
`;

const TextContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 80px 0px;

    @media (max-width: 1199px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

const Razorops = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #345eef;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 24px;
        line-height: 32px;
    }

    @media (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }
`;

const RazoropsDesc = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #000000;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 24px;
        line-height: 32px;
    }

    @media (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }
`;

const CardTitle = styled('span')`
    ${font7};
    font-size: 48px;
    line-height: 40px;
    color: #18204c;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 38px;
        line-height: 32px;
    }

    @media (max-width: 1199px) {
        font-size: 24px;
        line-height: 27px;
    }
`;

const Container = styled(Grid)`
    display: flex;
    justify-content: space-between;
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
    padding: 60px 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(244, 243, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    border-radius: 20px;

    @media (min-width: 1535px) {
        padding: 90px 60px;
    }
`;

export default function Details() {
    return (
        <MainContainer>
            <TextContainer>
                <Grid item display={'flex'} flexDirection={'column'}>
                    <Title>{'About'}</Title>
                    <Sub>
                        {
                            'Lorem Ipsum is simply dummy text of the printing and\ntypesetting industry.'
                        }
                    </Sub>
                </Grid>
                <Desc>
                    {
                        'Razorops is a single solution that implements\nthe whole pipeline from start to deployment.'
                    }
                </Desc>
            </TextContainer>
            <Container container sm={12} xs={12} md={12} lg={12}>
                <LeftContainer item xs={10} sm={12} md={6} lg={6}>
                    <Grid container item spacing={2}>
                        <Grid item>
                            <Razorops>Razorops</Razorops>
                            <RazoropsDesc>
                                {
                                    ' is a complete container native CI/CD\nsolution handling all aspects of the software\nlifecycle from the moment a commit is created\nuntil it is deployed to production.'
                                }
                            </RazoropsDesc>
                        </Grid>
                        <Grid item>
                            <Sub>
                                {
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.\nLorem Ipsum has been the industry's standard dummy text ever since the\n1500s, when an unknown printer took a galley of type and scrambled it to make\na type specimen book."
                                }
                            </Sub>
                        </Grid>
                    </Grid>
                </LeftContainer>
                <RightContainer container item xs={12} sm={12} md={5} lg={5}>
                    <Grid style={{ display: 'flex', justifyContent: 'center' }} item>
                        <img alt="" src={img} />
                    </Grid>
                </RightContainer>
                <Grid style={{ padding: '60px' }} container justifyContent={'center'}>
                    <img alt="" src={story} />
                </Grid>
                <Grid style={{ padding: '20px 0px 0px 0px' }} container spacing={4}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <CardContainer>
                            <Grid
                                container
                                item
                                display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                spacing={3}>
                                <Grid item>
                                    <CardTitle>{'Our'}</CardTitle>
                                    <CardTitle style={{ color: '#345eef' }}>{' Mission'}</CardTitle>
                                </Grid>
                                <Grid item>
                                    <Sub>
                                        {
                                            "Our main focus is to increase developer productivity and makes\nsoftware deployment faster, easier and better. Lorem Ipsum has\nbeen the industry's standard dummy text ever since the 1500s,\nwhen an unknown printer took a galley of type and scrambled it\nto make a type specimen book."
                                        }
                                    </Sub>
                                </Grid>
                            </Grid>
                        </CardContainer>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <CardContainer>
                            <Grid
                                container
                                item
                                display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                spacing={3}>
                                <Grid item>
                                    <CardTitle>{'Our'}</CardTitle>
                                    <CardTitle style={{ color: '#345eef' }}>{' Value'}</CardTitle>
                                </Grid>
                                <Grid item>
                                    <Sub>
                                        {
                                            "Lorem Ipsum is simply dummy text of the printing and\ntypesetting industry. Lorem Ipsum has been the industry's\nstandard dummy text ever since the 1500s, when an unknown\nprinter took a galley of type and scrambled it to make a type\nspecimen book."
                                        }
                                    </Sub>
                                </Grid>
                            </Grid>
                        </CardContainer>
                    </Grid>
                </Grid>
            </Container>
        </MainContainer>
    );
}
