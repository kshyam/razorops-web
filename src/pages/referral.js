import React from 'react';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import TalkOfTheTown from '../components/talk-of-the-town';

export default function Referral() {
    return (
        <>
            <FooterComponent heading="Refer and Earn" contentContainer={false} />
            <TalkOfTheTown />
            <Footer />
        </>
    );
}
