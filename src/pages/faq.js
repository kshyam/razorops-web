import React from 'react';
import faq from '../assets/images/footer/faq.svg';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import styled from '@emotion/styled';
import TalkOfTheTown from '../components/talk-of-the-town';
import TrustedBy from '../components/trusted-by';
import FrequentlyAskedQuestions from '../components/common/frequently-asked-questions';
import GetStarted from '../components/get-started';
import PageHead from '../components/common/page-head';

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

const content = [
    {
        id: 1,
        title: 'Q. How do I get started?',
        sub: 'Getting started with Razorops is easy, you can have a look quick look on <a style="text-decoration: underline;" href="https://docs.razorops.com/getting_started/"> Documents </a> and signup for razorops.<br><br>1. <a style="text-decoration: underline;" href="https://dashboard.razorops.com/users/sign_in"> Signup </a> Razorops, Create your first Pipeline project<br>2. Add .razorops.yaml to your source code root directory<br>3. Define your Pipeline <a style="text-decoration: underline;" href="https://docs.razorops.com/config/spec/"> (Click here to Learn) </a><br>4. Commit and push your source code<br>5. This new commit will trigger your pipeline<br>6. Still need help <a style="text-decoration: underline;" href="https://razorops.com/schedule-demo"> Schedule a Demo </a>'
    },
    {
        id: 2,
        title: 'Q. Which source code management services are supported?',
        sub: 'Razorops supports major code-hosting services like GitHub, Bitbucket and Gitlab'
    },
    {
        id: 3,
        title: 'Q. How do you handle upgrading or canceling a subscription?',
        sub: 'You can change or cancel your subscription at any time from your dashboard.'
    },
    {
        id: 4,
        title: 'Q. Do your have something custom plan?',
        sub: 'Most of our customers find Razorops SAAS environment covers their usecases. if you need extra support, hosting preferences or features, our support team will help you.'
    },
    {
        id: 5,
        title: 'Q. I have more questions ?',
        sub: 'Most of our customers find Razorops SAAS environment covers their usecases. if you need extra support, hosting preferences or features, our support team will help you.'
    }
];

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Frequently Asked Questions - FAQ',
                description:
                    'Frequently Asked Questions at Razorops like How do I get started? faq etc.'
            }}
        />
    );
};

export default function FAQ() {
    return (
        <>
            <FooterComponent
                heading="Frequently Asked Questions"
                img={faq}
                contentContainer={false}
            />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <FrequentlyAskedQuestions
                    content={content}
                    desc="Following are some FAQ asked to Razorops Team."
                />
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
