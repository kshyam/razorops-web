import React from 'react';
import customers from '../assets/images/footer/customers/customers.svg';
import img from '../assets/images/footer/customers/customerImg.webp';
import egnify from '../assets/images/footer/customers/egnify.webp';
import applozic from '../assets/images/product/trusted-by/applozic.svg';
import edtech from '../assets/images/clients/edtech.png';
import nimble from '../assets/images/clients/nimble.png';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';
import { font1, font3, font6, font7 } from '../assets/globalStyles';
import TrustedBy from '../components/trusted-by';
import TalkOfTheTown from '../components/talk-of-the-town';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 50px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 50px;
    }

    @media (max-width: 600px) {
        padding: 50px 20px;
    }
`;

const CustomersText = styled('span')`
    ${font3};
    font-size: 80px;
    line-height: 88px;
    color: #031b4e;
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 60px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 40px;
        line-height: 47px;
    }

    @media (max-width: 600px) {
        font-size: 34px;
        line-height: 47px;
        text-align: center;
    }
`;

const Heading = styled('h1')`
    ${font3};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 40px;
    }

    @media (min-width: 1535px) {
        font-size: 38px;
        line-height: 48px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 28px;
        line-height: 42px;
        white-space: unset;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 35px;
        white-space: unset;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #5b6987;
`;

const Title = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #18204c;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 26px;
        line-height: 37px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 22px;
        line-height: 32px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
        line-height: 32px;
    }
`;

const Sub = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #5b5b5b;
`;

const Text = styled('span')`
    ${font3};
    font-size: 80px;
    line-height: 80px;
    text-align: center;
    color: #0069ff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 60px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 40px;
        line-height: 47px;
    }

    @media (max-width: 600px) {
        font-size: 30px;
        line-height: 37px;
    }
`;

const Card = styled('div')`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: #f9fafe;
    border-radius: 28px;
`;

const ExploreButton = styled(Button)`
    margin: 40px 0px;
    padding: 20px;
    background: #0069ff;
    border-radius: 14px;
    text-transform: none;

    &:hover {
        background: #0069ff;
    }
`;

const ExploreText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #f9fafe;
`;

const Img = styled('img')`
    height: 80px;
    width: 150px;
`;

const MainImg = styled('img')`
    width: 1200px;
    height: 600px;
`;

const CustomerImg = styled('img')`
    width: 730px;
    height: 475px;
`;

const ReadText = styled('span')`
    ${font6}
    font-size: 18px;
    line-height: 29px;
    color: #0069ff;
`;

const customerData = [
    {
        id: 1,
        img: egnify,
        title: 'We are very happy with Razorops CI/CD pipeline automation, we can now focus on our goal without worrying about trivial matters',
        desc: 'Egnify is an Edu-tech company that aims to make education simpler and accessible to all. Egnify provides an online platform to learners and educators accessible from ...'
    },
    {
        id: 2,
        img: applozic,
        title: 'Applozic uses Razorops to focus on fast delivery without any compromises',
        desc: 'Applozic is a Real-Time Chat and Messaging API for Developers which makes communication easy from both the web...'
    },
    {
        id: 3,
        img: edtech,
        title: 'CI/CD Case Study for EdTech Startup',
        desc: 'EdTech Startup is an Enterprise Platform for Managing Education. It is building an Enterprise Platform for Institutions to adapt to the changing...'
    },
    {
        id: 4,
        img: nimble,
        title: 'Razorops is the easiest CI/CD tool to set up',
        desc: 'Nimble Buying is a cognitive B2B e-commerce platform with expertise in providing end-to-end sourcing and supply...'
    }
];

export default function Customers() {
    return (
        <>
            <FooterComponent heading="Customers" img={customers} contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container spacing={10} justifyContent={'center'}>
                    <Grid item>
                        <Grid container spacing={2} justifyContent={'center'}>
                            <Grid item md={6}>
                                <MainImg alt="" src={img} />
                            </Grid>
                            <Grid
                                item
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'flex-end'}
                                md={5}>
                                <CustomersText>
                                    {"1,500+\ncustomers.\nYou're in\nleading\ncompany."}
                                </CustomersText>
                                <ExploreButton>
                                    <ExploreText>Explore Case Studies</ExploreText>
                                </ExploreButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5} justifyContent={'center'}>
                            <Grid item md={10}>
                                <Grid container spacing={3} justifyContent={'center'}>
                                    <Grid item>
                                        <Heading>
                                            {
                                                'Leading companies believe in Razorops\nto ship quality code faster'
                                            }
                                        </Heading>
                                    </Grid>
                                    <Grid item>
                                        <Desc>
                                            {
                                                'See how the world use Razorops to automate their overall development cycle for building remarkable product.'
                                            }
                                        </Desc>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={10}>
                                <Grid container justifyContent={'center'} spacing={4}>
                                    <Grid item xs={8} sm={4} md={4}>
                                        <Card>
                                            <Title style={{ textAlign: 'center' }}>Teams</Title>
                                            <Text>1K+</Text>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={8} sm={4} md={4}>
                                        <Card>
                                            <Title style={{ textAlign: 'center' }}>
                                                Developers
                                            </Title>
                                            <Text>10K+</Text>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={8} sm={4} md={4}>
                                        <Card>
                                            <Title style={{ textAlign: 'center' }}>
                                                Successful builds
                                            </Title>
                                            <Text>200K+</Text>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5} justifyContent={'center'}>
                            <Grid item>
                                <Heading>
                                    {
                                        'Our customers do the most amazing things.\nThese are their stories.'
                                    }
                                </Heading>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={5} alignItems={'center'}>
                                    <Grid item md={6}>
                                        <CustomerImg
                                            alt=""
                                            src={customerData[0].img}
                                            loading="lazy"
                                        />
                                    </Grid>
                                    <Grid item md={6}>
                                        <Grid container spacing={3}>
                                            <Grid item>
                                                <Title>{customerData[0].title}</Title>
                                            </Grid>
                                            <Grid item>
                                                <Sub>{customerData[0].desc}</Sub>
                                            </Grid>
                                            <Grid item>
                                                <ReadText>Read case study</ReadText>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container spacing={3}>
                                            {customerData.slice(1, 4).map((i) => (
                                                <Grid id={i.id} item md={4}>
                                                    <Card>
                                                        <Grid container spacing={3}>
                                                            <Grid item>
                                                                <Img
                                                                    src={i.img}
                                                                    alt=""
                                                                    loading="lazy"
                                                                />
                                                            </Grid>
                                                            <Grid item>
                                                                <Title>{i.title}</Title>
                                                            </Grid>
                                                            <Grid item>
                                                                <Sub>{i.desc}</Sub>
                                                            </Grid>
                                                            <Grid item>
                                                                <ReadText>
                                                                    Read full case study
                                                                </ReadText>
                                                            </Grid>
                                                        </Grid>
                                                    </Card>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ContentContainer>
            <TrustedBy
                heading={'Leading companies believe in Razorops to\nship quality code faster'}
            />
            <TalkOfTheTown />
            <Footer />
        </>
    );
}
