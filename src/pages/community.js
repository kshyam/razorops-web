import React from 'react';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import TalkOfTheTown from '../components/talk-of-the-town';

export default function Community() {
    return (
        <>
            <FooterComponent heading="Community" contentContainer={false} />
            <TalkOfTheTown />
            <Footer />
        </>
    );
}
