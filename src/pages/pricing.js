import React from 'react';
import Container from '../components/container';
import Footer from '../components/footer';
import TalkOfTheTown from '../components/talk-of-the-town';
import GetStarted from '../components/get-started';
import SignUp from '../components/sign-up';
import TrustedBy from '../components/product/trusted-by';
import Plan from '../components/pricing/plan';
import FrequentlyAskedQuestions from '../components/pricing/frequently-asked-questions';
import PageHead from '../components/common/page-head';

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops Plans and Pricing',
                description: 'Start with Free Plan, Scale when you feel, No credit card required.'
            }}
        />
    );
};

export default function Pricing() {
    return (
        <Container>
            <Plan />
            <FrequentlyAskedQuestions />
            <TrustedBy />
            <TalkOfTheTown />
            <GetStarted />
            <SignUp />
            <Footer />
        </Container>
    );
}
