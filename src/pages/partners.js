import React from 'react';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import partners from '../assets/images/footer/partners/partners.svg';
import partnerImg from '../assets/images/footer/partners/partnerImg.svg';
import marketingBenefits from '../assets/images/footer/partners/marketing-benefits.svg';
import presales from '../assets/images/footer/partners/presales.svg';
import commission from '../assets/images/footer/partners/commission.svg';
import styled from '@emotion/styled';
import { font1, font3, font6 } from '../assets/globalStyles';
import { Button, Grid, List, CircularProgress } from '@mui/material';
import FrequentlyAskedQuestions from '../components/common/frequently-asked-questions';
import HubspotForm from 'react-hubspot-form';
import { Link } from 'gatsby';
import PartnersComponent from '../components/common/partners-component';

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
    padding: 60px 0px 30px 0px;

    @media (max-width: 600px) {
        padding: 20px 0px 20px 0px;
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
    line-height: 29px;
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

const MeetingButton = styled(Button)`
    margin: 10px;
    padding: 15px 80px;
    background: #0069ff;
    border-radius: 14px;
    text-transform: none;

    &:hover {
        background: #0069ff;
    }
`;

const MeetingText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #f9fafe;
`;

const BottomSectionGrid = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
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
        padding: 80px;
    }

    @media (max-width: 600px) {
        padding: 50px 20px;
    }
`;

const BottomSectionTitle = styled('h1')`
    ${font6};
    font-size: 22px;
    line-height: 28px;
    color: #031b4e;
`;

const BottomSectionSub = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 28px;
    color: #5b6987;
`;

const FormGrid = styled(Grid)`
    padding: 0px 0px 50px 0px;

    @media (max-width: 600px) {
        padding: 40px 0px;
    }
`;

const FormContainer = styled('div')`
    position: relative;
    min-width: -webkit-fill-available;
    height: 100%;
    padding: 40px;
    background: #f9fafe;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

const CircularProgressDiv = styled('div')`
    position: absolute;
    top: 40%;
    left: 45%;
`;

const FaqGrid = styled(Grid)`
    @media (min-width: 1535px) {
        margin: 50px 0px;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const content = [
    {
        id: 1,
        title: 'Q. What is the procedure to join the Razorops Partners Program?',
        sub: 'All you need to do is follow a few simple steps. First step to join the Razorops Partners Program is to book a meeting with the Razorops team or you can write to us at <a href="mailto:support@razorops.com" style="color: #0069ff; text-decoration: underline;">support@razorops.com</a>. Thereafter discuss the program in detail along with the benefits and join the program.'
    },
    {
        id: 2,
        title: 'Q. Who can join the Razorops Partners program to earn commission?',
        sub: 'Any company can join the Razorops Partners program- startups, small businesses, full fledged organisations, and earn commissions.'
    },
    {
        id: 3,
        title: 'Q. How much amount can partners earn as commission?',
        sub: 'The commissions for the Partners Program will be 10% of the subscription plan selected by the subscriber.'
    },
    {
        id: 4,
        title: 'Q. What are the prime benefits offered to the partners?',
        sub: 'The prime benefits offered to the partners through Razorops Partners Program are-\n\n<ul><li>1. High Visibility through contributed content and co-marketing initiatives.</li><li>2. Pre- Sales Support</li><li>3. Chance to earn commissions</li></ul>'
    },
    {
        id: 5,
        title: 'Q. What is the difference between Razorops Referral Program & Razorops Partners Program?',
        sub: 'As the title suggests Razorops Referral Program is for individuals to earn commissions whereas the Razorops Partners Program is for companies to join and earn commissions.'
    }
];

export default function Partners() {
    const [form, setForm] = React.useState(true);

    return (
        <>
            <FooterComponent
                heading="Partner Program"
                sub="Join the program and earn commissions."
                contentContainer={false}
                img={partners}
            />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container spacing={10} justifyContent={'center'}>
                    <Grid item>
                        <TopContainer container spacing={3}>
                            <Grid item md={12} lg={6}>
                                <Grid container spacing={3} direction={'column'}>
                                    <Grid item>
                                        <Title>
                                            {
                                                'Sign up with Razorops Partners Program and enjoy exclusive Partners Benefits'
                                            }
                                        </Title>
                                    </Grid>
                                    <Grid item>
                                        <Sub>
                                            {
                                                'Team up with Razorops to generate leads and Enjoy all the benefits offered exclusively to Razorops Partners with 3 simple steps'
                                            }
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
                                                            <Points>Schedule a Meeting</Points>
                                                        </li>
                                                        <li
                                                            style={{
                                                                listStyleType: 'disc',
                                                                padding: '5px 0px'
                                                            }}>
                                                            <Points>
                                                                Discuss the details and benefits of
                                                                the Razorops Partnership Program
                                                            </Points>
                                                        </li>
                                                        <li
                                                            style={{
                                                                listStyleType: 'disc',
                                                                padding: '5px 0px'
                                                            }}>
                                                            <Points>
                                                                Signup for the program & avail all
                                                                the exclusive partners benefits
                                                                instantly
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
                                <Grid container justifyContent={'center'}>
                                    <Grid item>
                                        <img src={partnerImg} alt="" />
                                    </Grid>
                                    <Grid item>
                                        <NavLink to="/schedule-demo">
                                            <MeetingButton>
                                                <MeetingText>Set up a meeting</MeetingText>
                                            </MeetingButton>
                                        </NavLink>
                                    </Grid>
                                </Grid>
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
                                        <Heading>{'Earn exclusive benefits'}</Heading>
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
                                                    <Img src={marketingBenefits} alt="" />
                                                </Grid>
                                                <Grid item md={12} lg={9}>
                                                    <Grid container spacing={2}>
                                                        <Grid item>
                                                            <CardTitle>
                                                                Earn marketing benefits
                                                            </CardTitle>
                                                        </Grid>
                                                        <Grid item>
                                                            <CardSub>
                                                                {
                                                                    'We assure HIGH VISIBILITY to our partners through contributed content and co-marketing initiatives.'
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
                                                    <Img src={presales} alt="" />
                                                </Grid>
                                                <Grid item md={12} lg={9}>
                                                    <Grid container spacing={2}>
                                                        <Grid item>
                                                            <CardTitle>
                                                                Get Pre-sales support
                                                            </CardTitle>
                                                        </Grid>
                                                        <Grid item>
                                                            <CardSub>
                                                                {
                                                                    'Stay in constant touch with Razorops marketing & sales team to earn commissions easily.'
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
                                                    <Img src={commission} alt="" />
                                                </Grid>
                                                <Grid item md={12} lg={9}>
                                                    <Grid container spacing={2}>
                                                        <Grid item>
                                                            <CardTitle>
                                                                Earn additional commission
                                                            </CardTitle>
                                                        </Grid>
                                                        <Grid item>
                                                            <CardSub>
                                                                {
                                                                    'Our selected partnership tier and higher will qualify for lucrative commissions on Razorops private regions.'
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
                        </Grid>
                    </Grid>
                </Grid>
            </ContentContainer>
            <PartnersComponent heading={'Check out some of our partners'} />
            <BottomSectionGrid container spacing={3}>
                <Grid item xs={10} md={4}>
                    <Grid container spacing={8}>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <BottomSectionTitle>Partner with us</BottomSectionTitle>
                                </Grid>
                                <Grid item>
                                    <BottomSectionSub>
                                        We are waiting to hear from you. Just drop your details and
                                        our team will get in touch with you.
                                    </BottomSectionSub>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <BottomSectionTitle>
                                        Become an Implementation Partner
                                    </BottomSectionTitle>
                                </Grid>
                                <Grid item>
                                    <BottomSectionSub>
                                        Become an Implementation Partner and implement container
                                        native DevOps for our new customers.
                                    </BottomSectionSub>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container>
                                <Grid item>
                                    <BottomSectionTitle>
                                        Become a Reseller Partner
                                    </BottomSectionTitle>
                                </Grid>
                                <Grid item>
                                    <BottomSectionSub>
                                        Utilize RazorOps CI/CD for your existing customers or new
                                        customers and get a recurring revenue out of our
                                        subscription plans.
                                    </BottomSectionSub>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <FormGrid item xs={10} md={4}>
                    <FormContainer>
                        {form === true && (
                            <CircularProgressDiv>
                                <CircularProgress />
                            </CircularProgressDiv>
                        )}
                        <HubspotForm
                            portalId="6775901"
                            formId="ac2123e0-dbc1-497b-a2ff-a3296ef11bc3"
                            onSubmit={() => console.log('Submit!')}
                            onReady={() => setForm(false)}
                            loading={<div></div>}
                        />
                    </FormContainer>
                </FormGrid>
                <FaqGrid item md={10}>
                    <FrequentlyAskedQuestions content={content} />
                </FaqGrid>
            </BottomSectionGrid>
            <Footer />
        </>
    );
}
