import React from 'react';
import termsOfService from '../assets/images/footer/terms-of-service.svg';
import { FooterSupportSection } from '../components/common/constants';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';

export default function TermsOfService() {
    return (
        <>
            <FooterComponent
                heading="Terms of Service"
                img={termsOfService}
                contentContainer
                text={'These terms of service are effective as of June 15, 2018'}
                textDesc={
                    'Read carefully the following terms of service, which contain the exclusive terms and conditions between <b>Razorops</b>, a Californian company, with an address at 3975 Freedom Cir, Suite 800,Santa Clara, California, United States 95054 (Razorops), and you (together with the business or other entity, if any, for which you are accessing this site or any of the services, <b>customer</b>), regarding the provision and use of the site. You represent and warrant to Razorops that you have full legal authority to accept these terms of service and that you are not banned from accessing or using the site under the laws of any country.'
                }
                content={FooterSupportSection.termsOfService}
            />
            <Footer />
        </>
    );
}
