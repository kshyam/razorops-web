import React from 'react';
import styled from '@emotion/styled';
import Details from '../components/about/details';
import Join from '../components/about/join';
import Team from '../components/about/team';
import Footer from '../components/footer';
import { Grid } from '@mui/material';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import about from '../assets/images/about-page/about.svg';
import FooterComponent from '../components/common/footer-component';
import Process from '../components/about/process';
import Images from '../components/about/images';
import PageHead from '../components/common/page-head';
const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    @media (min-width: 1535px) {
        padding: 60px 150px;
    }

    @media (max-width: 599px) {
        padding: 50px 20px;
    }
`;

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops About',
                description:
                    'Razorops is a complete container native CI/CD solution. In a similar manner to Docker, Razorops comes with dedicated support for Kubernetes deployments.'
            }}
        />
    );
};

export default function About() {
    return (
        <>
            <FooterComponent heading="About" img={about} contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container spacing={5} justifyContent={'center'}>
                    <Grid item>
                        <Details />
                    </Grid>
                    <Grid item>
                        <Process />
                    </Grid>
                    <Grid item>
                        <Images />
                    </Grid>
                </Grid>
            </ContentContainer>
            <Team />
            <Join />
            <Footer />
        </>
    );
}
