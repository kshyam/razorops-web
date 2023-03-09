import React from 'react';
import styled from '@emotion/styled';
import bg from '../assets/images/bg.png';
import razorops from '../assets/images/footer/try-razorops/razorops.png';
import add from '../assets/images/footer/try-razorops/add.png';
import digitalOcean from '../assets/images/footer/try-razorops/digital-ocean.png';
import HubspotForm from 'react-hubspot-form';
import { font1, font3, font5, font6 } from '../assets/globalStyles';
import { CircularProgress, Grid, List, ListItem } from '@mui/material';
import Container from '../components/container';
import Footer from '../components/footer';
import WhatIsRazorops from '../components/jenkins-alternative/what-is-razorops';
import TrustedBy from '../components/trusted-by';
import TalkOfTheTown from '../components/talk-of-the-town';

const MainContainer = styled('div')`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 140px 140px 140px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 100px 100px 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 60px 40px;
    }
`;

const Title = styled('h1')`
    ${font3};
    font-size: 48px;
    line-height: 56px;
    color: #f9fafe;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 42px;
        line-height: 56px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 40px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 37px;
        line-height: 52px;
    }

    @media (max-width: 600px) {
        font-size: 32px;
        line-height: 48px;
    }
`;

const Sub = styled('div')`
    ${font5};
    font-size: 24px;
    line-height: 28px;
    color: #f9fafe;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 22px;
        line-height: 27px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (max-width: 600px) {
        font-size: 18px;
        line-height: 25px;
    }
`;

const Desc = styled('div')`
    ${font1};
    font-size: 16px;
    line-height: 28px;
    color: #f9fafe;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 22px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const Features = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 54px;
    color: #f9fafe;

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const TextGrid = styled(Grid)`
    padding: 40px 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 599px) {
        padding: 40px 0px;
    }
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
    padding: 20px 5px;
    ${font3};
    font-size: 32px;
    line-height: 51px;
    color: #031b4e;
    text-align: center;

    @media (max-width: 599px) {
        font-size: 22px;
        line-height: 29px;
    }
`;

const CircularProgressDiv = styled('div')`
    position: absolute;
    top: 40%;
    left: 45%;
`;

const Img = styled('img')`
    @media (max-width: 599px) {
        width: 100px;
        height: 30px;
    }
`;

export default function TryRazoropsWithDigitalOcean() {
    const [form, setForm] = React.useState(true);

    return (
        <Container>
            <MainContainer>
                <Grid container justifyContent={'center'}>
                    <TextGrid item xs={12} sm={12} md={12} lg={7}>
                        <Grid container spacing={3} alignItems={'center'}>
                            <Grid item>
                                <Grid container alignItems={'center'} spacing={3}>
                                    <Grid item>
                                        <Img src={razorops} alt="" />
                                    </Grid>
                                    <Grid item>
                                        <img src={add} alt="" />
                                    </Grid>
                                    <Grid item>
                                        <Img src={digitalOcean} alt="" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Title>Try Razorops CI/CD With DigitalOcean Kubernetes</Title>
                            </Grid>
                            <Grid item>
                                <Sub>
                                    Build, Deploy and Manage softwares with RazorOps CI/CD over
                                    DigitalOcean Kubernetes
                                </Sub>
                            </Grid>
                            <Grid item>
                                <Desc>
                                    DigitalOcean Kubernetes Service (DOKS) is a managed Kubernetes
                                    service that allows you to deploy Kubernetes clusters without
                                    having to deal with the control plane or containerized
                                    infrastructure.
                                </Desc>
                            </Grid>
                            <Grid item>
                                <List
                                    sx={{
                                        listStyleType: 'disc',
                                        color: '#f9fafe',
                                        '& .MuiListItem-root': {
                                            display: 'list-item'
                                        }
                                    }}>
                                    <Grid container>
                                        <Grid style={{ padding: '0px 10px' }} item>
                                            <ListItem>
                                                <Features>
                                                    Build optimized container for Kubernetes
                                                </Features>
                                            </ListItem>
                                            <ListItem>
                                                <Features>
                                                    Configure your load balancer in Kubernetes
                                                    Clusters
                                                </Features>
                                            </ListItem>
                                            <ListItem>
                                                <Features>
                                                    Manage services across the varied infrastructure
                                                </Features>
                                            </ListItem>
                                            <ListItem>
                                                <Features>
                                                    Full access to the Kubernetes API
                                                </Features>
                                            </ListItem>
                                        </Grid>
                                    </Grid>
                                </List>
                            </Grid>
                        </Grid>
                    </TextGrid>
                    <Grid item display={'flex'} alignItems={'center'} xs={12} sm={12} md={8} lg={5}>
                        <FormContainer $form={form}>
                            {form === true && (
                                <CircularProgressDiv>
                                    <CircularProgress />
                                </CircularProgressDiv>
                            )}
                            <div className="pt-2 pb-5">
                                <FormTitle>Claim $250 DigitalOcean Credits</FormTitle>
                            </div>
                            <HubspotForm
                                portalId="6775901"
                                formId="70837a8d-b059-4dc1-9673-76e069b85a0c"
                                onSubmit={() => console.log('Submit!')}
                                onReady={() => setForm(false)}
                                loading={<div></div>}
                            />
                        </FormContainer>
                    </Grid>
                </Grid>
            </MainContainer>
            <TrustedBy
                title={'Trusted by the growing engineering teams to\nbuild quality products'}
                textColor={'#031B4E'}
            />
            <WhatIsRazorops
                title="How it works"
                desc="Nowadays,  the increasingly growing number of mobile and computing devices"
            />
            <TalkOfTheTown />
            <Footer />
        </Container>
    );
}
