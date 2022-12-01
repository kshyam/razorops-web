import React from 'react';
import faq from '../assets/images/footer/faq.svg';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import FrequentlyAskedQuestions from '../components/pricing/frequently-asked-questions';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import styled from '@emotion/styled';
import TalkOfTheTown from '../components/talk-of-the-town';
import TrustedBy from '../components/trusted-by';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1535px) {
        padding: 40px 60px;
    }
`;
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
                <FrequentlyAskedQuestions desc="Following are some FAQ asked to Razorops Team." />
            </ContentContainer>
            <TrustedBy
                heading={'Trusted by the growing engineering teams to\nbuild quality products'}
            />
            <TalkOfTheTown />
            <Footer />
        </>
    );
}
