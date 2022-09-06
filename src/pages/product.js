import React from 'react';
import Container from '../components/container';
import HowItWorks from '../components/product/how-it-works';
import ProductTabs from '../components/product/product-tabs';
import TopSection from '../components/product/top-section';
import Footer from '../components/footer';
import Features from '../components/product/features';
import ToolIntegration from '../components/product/tool-integration';
import TalkOfTheTown from '../components/talk-of-the-town';
import GetStarted from '../components/get-started';
import SignUp from '../components/sign-up';
import TrustedBy from '../components/product/trusted-by';

export default function Product() {
    return (
        <Container>
            <TopSection />
            <HowItWorks />
            <ProductTabs />
            <Features />
            <ToolIntegration />
            <TrustedBy />
            <TalkOfTheTown />
            <GetStarted />
            <SignUp />
            <Footer />
        </Container>
    );
}
