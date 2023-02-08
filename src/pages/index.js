import React from 'react';
import TopSection from '../components/top-section';
import Container from '../components/container';
import { graphql } from 'gatsby';
import TrustedBy from '../components/trusted-by';
import About from '../components/about';
import FeaturesContainer from '../components/features-container';
import ToolIntegration from '../components/tool-integration';
import RazoropsPipeline from '../components/razorops-pipeline';
import Support from '../components/support';
import TalkOfTheTown from '../components/talk-of-the-town';
import GetStarted from '../components/get-started';
import SignUp from '../components/sign-up';
import Footer from '../components/footer';

export default function Index() {
    return (
        <Container>
            <TopSection />
            <TrustedBy />
            <About />
            <FeaturesContainer />
            <ToolIntegration />
            <RazoropsPipeline />
            <Support />
            <TalkOfTheTown />
            <GetStarted bg={'#deecff'} />
            <SignUp />
            <Footer />
        </Container>
    );
}
