import React from 'react';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import referral from '../assets/images/footer/referral/referral.svg';
import referralImg from '../assets/images/footer/referral/referralImg.svg';
import share from '../assets/images/footer/referral/share.svg';
import signup from '../assets/images/footer/referral/signup.svg';
import earn from '../assets/images/footer/referral/earn.svg';
import styled from '@emotion/styled';
import { font1, font3, font6 } from '../assets/globalStyles';
import { Button, Grid, List } from '@mui/material';
import FrequentlyAskedQuestions from '../components/common/frequently-asked-questions';
import TrustedBy from '../components/trusted-by';
import { Link } from 'gatsby';
import TalkOfTheTown from '../components/talk-of-the-town';
import GetStarted from '../components/get-started';

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

const TopContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    padding: 60px 0px 40px 0px;

    @media (max-width: 600px) {
        padding: 20px 0px 0px 0px;
    }
`;
const Title = styled('h1')`
    ${font3};
    font-size: 38px;
    line-height: 48px;
    color: #031b4e;

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const Sub = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 28px;
    color: #5b6987;
`;

const Points = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 25px;
    color: #5b6987;

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

const Heading = styled('h1')`
    ${font3};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #5b6987;
    white-space: pre-wrap;
`;

const CardContainer = styled('div')`
    padding: 20px;
    background: #f9fafe;
    border-radius: 28px;
    height: 100%;
`;

const CardTitle = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #002c9b;

    @media (max-width: 1199px) {
        font-size: 18px;
        line-height: 27px;
    }
`;

const CardSub = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 24px;
    color: #5b6987;

    @media (max-width: 1199px) {
        font-size: 15px;
        line-height: 22px;
    }
`;

const Img = styled('img')`
    width: 80px;
    height: 80px;
`;

const GetStartedButton = styled(Button)`
    margin: 40px;
    padding: 15px 80px;
    background: #0069ff;
    border-radius: 14px;
    text-transform: none;

    &:hover {
        background: #0069ff;
    }
`;

const GetStartedText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #f9fafe;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const content = [
    {
        id: 1,
        title: 'Q. How do I refer Razorops to my friends?',
        sub: 'Firstly, signup for the Razorops Referral Program and generate your unique <a style="color: #0069ff; text-decoration: underline;" href="https://dashboard.razorops.com/users/sign_up"> referral link </a>. Once the first step is complete and the referral link is generated, share it with your friends and contacts.'
    },
    {
        id: 2,
        title: 'Q. When will I receive my referral commission?',
        sub: 'The referral commissions will be credited once the subscription plan selected by the subscriber is active.'
    },
    {
        id: 3,
        title: 'Q. How much amount can I earn as commission?',
        sub: 'Referral commission & Referral bonus will be 10% of the subscription plan selected by the subscriber.'
    },
    {
        id: 4,
        title: 'Q. Who can join the referral program to earn commission?',
        sub: 'Anyone and Everyone can join the Razorops Referral Program and earn referral commissions on new subscribers.'
    }
];

export default function Referral() {
    return (
        <>
            <FooterComponent
                heading="Referral"
                sub="Join the program and earn commissions."
                contentContainer={false}
                img={referral}
            />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container spacing={10} justifyContent={'center'}>
                    <Grid item>
                        <TopContainer container spacing={3}>
                            <Grid item md={12} lg={6}>
                                <Grid container spacing={3} direction={'column'}>
                                    <Grid item>
                                        <Title>{'Refer, Earn & Repeat Program'}</Title>
                                    </Grid>
                                    <Grid item>
                                        <Sub>
                                            {"Don't keep us a secret. SHARE the link and EARN."}
                                        </Sub>
                                    </Grid>
                                    <Grid item>
                                        <List
                                            sx={{
                                                listStyleType: 'disc',
                                                color: '#5b6987',
                                                '& .MuiListItem-root': {
                                                    display: 'list-item'
                                                }
                                            }}>
                                            <Grid container>
                                                <Grid style={{ padding: '0px 10px' }} item>
                                                    <ul>
                                                        <li
                                                            style={{
                                                                listStyleType: 'disc',
                                                                padding: '5px 0px'
                                                            }}>
                                                            <Points>
                                                                Earn a 10% referral commission on
                                                                every new subscription using your
                                                                unique referral link.
                                                            </Points>
                                                        </li>
                                                        <li
                                                            style={{
                                                                listStyleType: 'disc',
                                                                padding: '5px 0px'
                                                            }}>
                                                            <Points>
                                                                Each New Subscriber joining through
                                                                your referral link will receive a
                                                                referral bonus on their first
                                                                subscription plan.
                                                            </Points>
                                                        </li>
                                                        <li
                                                            style={{
                                                                listStyleType: 'disc',
                                                                padding: '5px 0px'
                                                            }}>
                                                            <Points>
                                                                Referral commission & Referral bonus
                                                                will be 10% of the subscription plan
                                                                selected by the subscriber.
                                                            </Points>
                                                        </li>
                                                    </ul>
                                                </Grid>
                                            </Grid>
                                        </List>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={8} lg={5}>
                                <img src={referralImg} alt="" />
                            </Grid>
                        </TopContainer>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={8} justifyContent={'center'}>
                            <Grid item>
                                <Grid
                                    container
                                    spacing={3}
                                    justifyContent={'center'}
                                    direction={'column'}>
                                    <Grid item>
                                        <Heading>
                                            {'Follow these simple steps & Cash your reward'}
                                        </Heading>
                                    </Grid>
                                    <Grid item textAlign={'center'}>
                                        <Desc>
                                            {
                                                'Unlock additional benefits by moving up through the partnership\ntiers- Registered to Premiere Partnership.'
                                            }
                                        </Desc>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container justifyContent={'center'} spacing={2}>
                                    <Grid item xs={10} sm={8} md={4}>
                                        <CardContainer>
                                            <Grid container spacing={3} alignItems={'center'}>
                                                <Grid item md={12} lg={3}>
                                                    <Img src={share} alt="" />
                                                </Grid>
                                                <Grid item md={12} lg={9}>
                                                    <Grid container spacing={1}>
                                                        <Grid item>
                                                            <CardTitle>
                                                                Share Referral Link
                                                            </CardTitle>
                                                        </Grid>
                                                        <Grid item>
                                                            <CardSub>
                                                                {
                                                                    'Signup and generate your unique referral link and share this unique referral link with your friends and contacts.'
                                                                }
                                                            </CardSub>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContainer>
                                    </Grid>
                                    <Grid item xs={10} sm={8} md={4}>
                                        <CardContainer>
                                            <Grid container spacing={3} alignItems={'center'}>
                                                <Grid item md={12} lg={3}>
                                                    <Img src={signup} alt="" />
                                                </Grid>
                                                <Grid item md={12} lg={9}>
                                                    <Grid container spacing={1}>
                                                        <Grid item>
                                                            <CardTitle>New Signs Up</CardTitle>
                                                        </Grid>
                                                        <Grid item>
                                                            <CardSub>
                                                                {
                                                                    'Every new subscriber will receive a REFERRAL BONUS & you will get a 10% Referral Commission of the subscribed plan.'
                                                                }
                                                            </CardSub>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContainer>
                                    </Grid>
                                    <Grid item xs={10} sm={8} md={4}>
                                        <CardContainer>
                                            <Grid container spacing={3} alignItems={'center'}>
                                                <Grid item md={12} lg={3}>
                                                    <Img src={earn} alt="" />
                                                </Grid>
                                                <Grid item md={12} lg={9}>
                                                    <Grid container spacing={1}>
                                                        <Grid item>
                                                            <CardTitle>Earn</CardTitle>
                                                        </Grid>
                                                        <Grid item>
                                                            <CardSub>
                                                                {
                                                                    'Cash your Referral Commission on each new subscription.'
                                                                }
                                                            </CardSub>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </CardContainer>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <NavLink
                                style={{ paddingTop: '30px' }}
                                to="https://dashboard.razorops.com/users/sign_up">
                                <GetStartedButton>
                                    <GetStartedText>Get Started</GetStartedText>
                                </GetStartedButton>
                            </NavLink>
                        </Grid>
                    </Grid>
                    <Grid item md={10}>
                        <FrequentlyAskedQuestions content={content} />
                    </Grid>
                </Grid>
            </ContentContainer>
            <TrustedBy
                heading={'Trusted by the growing engineering teams to\nbuild quality products'}
            />
            <TalkOfTheTown isHomeScreen={false} />
            <GetStarted />
            <Footer />
        </>
    );
}
