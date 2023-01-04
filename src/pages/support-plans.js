import React from 'react';
import support from '../assets/images/footer/support-plans/support.svg';
import supportPlans from '../assets/images/footer/support-plans/support-plans.webp';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import styled from '@emotion/styled';
import { Button, Card, CardActions, CardContent, Grid } from '@mui/material';
import { font2, font3, font6 } from '../assets/globalStyles';
import { Link } from 'gatsby';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    @media (min-width: 1535px) {
        padding: 150px;
    }

    @media (max-width: 599px) {
        padding: 50px 20px;
    }
`;

const Title = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #f9fafe;
`;

const Sub = styled('span')`
    ${font2};
    font-size: 16px;
    line-height: 28px;
    color: #191e27;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }
`;

const Desc = styled('span')`
    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #191e27;
`;

const Price = styled('span')`
    ${font6};
    font-size: 28px;
    line-height: 28px;
    text-align: center;
    color: #002c9b;
`;

const CardContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #deecff;
    border-radius: 24px;
    height: 100%;
`;

const TopSection = styled(Grid)`
    padding: 30px;
    background: ${(props) => props.bg};
`;

const SignUpButton = styled(Button)`
    padding: 20px;
    background: ${(props) => props.bg};
    border-radius: 12px;
    text-transform: none;
    width: -webkit-fill-available;

    &:hover {
        background: ${(props) => props.bg};
    }
`;

const SignUpText = styled('span')`
    ${font3};
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #ffffff;
`;

const ItemGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const Img = styled('img')`
    width: 610px;
    height: 470px;
`;

const plans = [
    {
        id: 1,
        type: 'Standard',
        desc: 'Great for obtaining a fast response to urgent\nissues',
        monthlyPrice: '$100/month',
        slo: '2 hours',
        supportChannels: 'Email',
        supportAgents: 'Dedicated Agents',
        technicalResources: 'none',
        buttonText: 'Sign Up for Standard Support',
        color: '#1681fe'
    },
    {
        id: 2,
        type: 'Premium',
        desc: 'Great for getting near real-time help for scaling\nbusinesses.',
        monthlyPrice: '$1000/month',
        slo: '30 minutes',
        supportChannels: 'Email + Hangouts',
        supportAgents: 'Dedicated Agents',
        technicalResources: 'Customer Success Manager + Technical Account Manager',
        buttonText: 'Sign Up for Premium Support',
        color: '#0069FF'
    }
];

export default function SupportPlans() {
    return (
        <>
            <FooterComponent
                heading="Introducing Razorops Support Plans"
                img={support}
                contentContainer={false}
            />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container direction={'column'} spacing={10}>
                    <Grid item>
                        <Grid container spacing={3} justifyContent={'center'}>
                            <ItemGrid item md={8}>
                                <Img alt="" src={supportPlans} />
                            </ItemGrid>
                            <Grid item md={8}>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Sub>
                                            From developers testing an idea to growing businesses
                                            hosting mission-critical applications, Razorops’s range
                                            of support plans give you access to troubleshooting
                                            tips, support articles and Razorops experts when you
                                            need it the most.
                                        </Sub>
                                    </Grid>
                                    <Grid item>
                                        <Sub>
                                            Razorops is known for its excellent support. Whether
                                            through online resources like community or docs, or our
                                            responsive and reliable support team, customers
                                            frequently cite support as one of the reasons why they
                                            choose Razorops. In addition to our robust free support
                                            plan, we’re excited to announce the addition of two
                                            higher-level support plans, which will ensure that those
                                            with urgent inquiries get even faster responses from our
                                            team.
                                        </Sub>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent={'center'} spacing={3}>
                            {plans.map((i) => (
                                <Grid key={i.id} item md={5} lg={4} sm={10} xs={12}>
                                    <NavLink to="https://dashboard.razorops.com/users/sign_in">
                                        <CardContainer>
                                            <TopSection
                                                bg={i.color}
                                                container
                                                spacing={2}
                                                alignItems={'center'}
                                                direction={'column'}>
                                                <Grid item>
                                                    <Title>{i.type}</Title>
                                                </Grid>
                                                <Grid item>
                                                    <Sub style={{ color: '#F9FAFE' }}>{i.desc}</Sub>
                                                </Grid>
                                            </TopSection>
                                            <CardContent>
                                                <Grid container direction={'column'} spacing={4}>
                                                    <ItemGrid item>
                                                        <Sub>
                                                            All communication between your browser
                                                            and our website is SSL encrypted.
                                                        </Sub>
                                                    </ItemGrid>
                                                    <ItemGrid item>
                                                        <Price>{i.monthlyPrice}</Price>
                                                    </ItemGrid>
                                                    <ItemGrid item>
                                                        <Sub>SLO</Sub>
                                                        <Desc>{i.slo}</Desc>
                                                    </ItemGrid>
                                                    <ItemGrid item>
                                                        <Sub>Support Channels</Sub>
                                                        <Desc>{i.supportChannels}</Desc>
                                                    </ItemGrid>
                                                    <ItemGrid item>
                                                        <Sub>Support Agents</Sub>
                                                        <Desc>{i.supportAgents}</Desc>
                                                    </ItemGrid>
                                                    <ItemGrid item>
                                                        <Sub>Technical Resources</Sub>
                                                        <Desc>{i.technicalResources}</Desc>
                                                    </ItemGrid>
                                                </Grid>
                                            </CardContent>
                                            <CardActions
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    padding: '20px'
                                                }}>
                                                <SignUpButton bg={i.color}>
                                                    <SignUpText>{i.buttonText}</SignUpText>
                                                </SignUpButton>
                                            </CardActions>
                                        </CardContainer>
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </ContentContainer>
            <Footer />
        </>
    );
}
