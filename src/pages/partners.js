import React from 'react';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import TalkOfTheTown from '../components/talk-of-the-town';

export default function Partners() {
    return (
        <>
            <FooterComponent heading="Partners" contentContainer={false} />
            <TalkOfTheTown />
            <Footer />
        </>
    );
}
