import React from 'react';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import TalkOfTheTown from '../components/talk-of-the-town';

export default function Jobs() {
    return (
        <>
            <FooterComponent heading="Jobs" contentContainer={false} />
            <TalkOfTheTown isHomeScreen={false} />
            <Footer />
        </>
    );
}
