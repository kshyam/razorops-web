import React from 'react';
import TopSection from '../components/top-section';
import Container from '../components/container';
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
import PageHead from '../components/common/page-head';

export const Head = ({ data, ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Container Native Continuous Integration & Deployment',
                description:
                    'Razorops is a container native continuous integration and delivery platform to automate testing and deployment across the environments in few steps.'
            }}
        />
    );
};

export default function Index() {
    return (
        <Container>
            <TopSection />
            <TrustedBy title={'Trusted By'} textColor={'#5b5b5b'} />
            <About />
            <FeaturesContainer />
            <ToolIntegration />
            <RazoropsPipeline />
            <Support />
            <TalkOfTheTown isHomeScreen={true} />
            <GetStarted />
            <SignUp />
            <Footer />
        </Container>
    );
}
