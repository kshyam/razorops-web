import React from 'react';
import support from '../assets/images/footer/support-plans/support.svg';
import supportPlans from '../assets/images/footer/support-plans/support-plans.webp';
import img from '../assets/images/footer/contact/img.webp';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import styled from '@emotion/styled';
import { Card, Grid, CircularProgress } from '@mui/material';
import { font2, font3, font6 } from '../assets/globalStyles';
import HubspotForm from 'react-hubspot-form';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    @media (min-width: 1535px) {
        padding: 100px 150px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 50px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px;
    }

    @media (max-width: 599px) {
        padding: 50px 20px;
    }
`;

const Title = styled('span')`
    ${font3};
    font-size: 48px;
    line-height: 48px;
    color: #031b4e;
`;

const Sub = styled('span')`
    ${font6};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 34px;
    line-height: 51px;
    color: #031b4e;
`;

const Country = styled('span')`
    ${font6};
    font-size: 48px;
    line-height: 48px;
    color: #031b4e;
`;

const CardContainer = styled(Card)`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f9fafe;
    border-radius: 14px;
    height: 100%;

    &:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
`;

const CardTitle = styled('h1')`
    ${font3};
    font-size: 20px;
    line-height: 28px;
    color: #011337;
`;

const CardSub = styled('span')`
    ${font2};
    font-size: 16px;
    line-height: 28px;
    color: #191e27;
`;

const FormContainer = styled('div')`
    position: relative;
    min-width: -webkit-fill-available;
    height: ${(props) => (props.form ? '800px' : '100%')};
    padding: 0px 40px;
    background: #f9fafe;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

const FormTitle = styled('h1')`
    padding: 20px;
    ${font6};
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #031b4e;
`;

const CircularProgressDiv = styled('div')`
    position: absolute;
    top: 40%;
    left: 45%;
`;

const Img1 = styled('img')`
    margin-top: 50px;
    width: 641px;
    height: 477px;
`;

const Img2 = styled('img')`
    width: 1400px;
    height: 482.91px;
`;

const data = [
    {
        id: 1,
        country: 'India',
        address: [
            {
                id: 'hyderabad',
                title: 'Hyderabad',
                sub: 'T-Hub 2.0 | Technology Hub 2.03rd Floor, 20, Inorbit Mall Road, Vittal Rao Nagar,Madhapur, Telangana 500081',
                email: 'support@razorops.com',
                number: '+91 868-846-8400'
            },
            {
                id: 'bengaluru',
                title: 'Bengaluru',
                sub: 'No 22, Salarpuria Towers-I, 91springboard, 4th Floor, Industrial Layout, Hosur Rd, 7th Block, Koramangala, Bengaluru, Karnataka 560095',
                email: 'support@razorops.com',
                number: '+91 868-846-8400'
            }
        ]
    },
    {
        id: 2,
        country: 'USA',
        address: [
            {
                id: 'california',
                title: 'California',
                sub: '3975 Freedom Cir, Suite 800, Santa Clara, California, United States 95054',
                email: 'support@razorops.com',
                number: '+1 (778) 681 9440'
            }
        ]
    },
    {
        id: 3,
        country: 'Canada',
        address: [
            {
                id: 'vancouver',
                title: 'Vancouver',
                sub: '#602-2232 Douglas Road, Burnaby, Vancouver, Canada - V5C0G9',
                email: 'support@razorops.com',
                number: '+1 (778) 681 9440'
            }
        ]
    }
];

export default function Contact() {
    const [form, setForm] = React.useState(true);

    return (
        <>
            <FooterComponent heading="Contact" img={support} contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container direction={'column'} spacing={10}>
                    <Grid item>
                        <Grid container spacing={3} justifyContent={'center'}>
                            <Grid item md={6}>
                                <Grid container spacing={3} direction={'column'}>
                                    <Grid item>
                                        <Title>Contact Razorops</Title>
                                    </Grid>
                                    <Grid item>
                                        <Sub>Get in Touch</Sub>
                                    </Grid>
                                    <Grid item>
                                        <Img1 alt="" src={supportPlans} />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={5}>
                                <FormContainer $form={form}>
                                    {form === true && (
                                        <CircularProgressDiv>
                                            <CircularProgress />
                                        </CircularProgressDiv>
                                    )}
                                    <div className="pt-2 pb-5">
                                        <FormTitle>
                                            Prefer real talk over a form? Our team is happy to help.
                                        </FormTitle>
                                    </div>
                                    <HubspotForm
                                        portalId="6775901"
                                        formId="ac2123e0-dbc1-497b-a2ff-a3296ef11bc3"
                                        onSubmit={() => console.log('Submit!')}
                                        onReady={() => setForm(false)}
                                        loading={<div></div>}
                                    />
                                </FormContainer>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={3}>
                            <Grid item display={'flex'} flexDirection={'column'}>
                                <Title>We're here for you.</Title>
                                <Title>Say hello.</Title>
                            </Grid>
                            <Grid item>
                                <Img2 alt="" src={img} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5}>
                            {data.map((i) => (
                                <Grid key={i.id} item md={12}>
                                    <Grid container spacing={7}>
                                        <Grid style={{ marginTop: '20px' }} item md={12} lg={3}>
                                            <Country>{i.country}</Country>
                                        </Grid>
                                        {i.address.map((e) => (
                                            <Grid
                                                key={e.id}
                                                style={{ margin: '10px 0px' }}
                                                item
                                                md={6}
                                                lg={4}>
                                                <CardContainer>
                                                    <Grid
                                                        container
                                                        spacing={2}
                                                        direction={'column'}>
                                                        <Grid item>
                                                            <CardTitle>{e.title}</CardTitle>
                                                        </Grid>
                                                        <Grid item>
                                                            <CardSub>{e.sub}</CardSub>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid
                                                                container
                                                                spacing={2}
                                                                alignItems={'center'}>
                                                                <Grid item>
                                                                    <EmailOutlinedIcon />
                                                                </Grid>
                                                                <Grid item>
                                                                    <a
                                                                        href="mailto:support@razorops.com?Subject=Hello%20Razorops"
                                                                        target="_top">
                                                                        <CardSub>{e.email}</CardSub>
                                                                    </a>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid
                                                                container
                                                                spacing={2}
                                                                alignItems={'center'}>
                                                                <Grid item>
                                                                    <LocalPhoneOutlinedIcon />
                                                                </Grid>
                                                                <Grid item>
                                                                    <a
                                                                        href={`tel:${e.number.replace(
                                                                            /[^+\d]+/g,
                                                                            ''
                                                                        )}`}>
                                                                        <CardSub>
                                                                            {e.number}
                                                                        </CardSub>
                                                                    </a>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardContainer>
                                            </Grid>
                                        ))}
                                    </Grid>
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
