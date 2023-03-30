import React from 'react';
import privacyPolicy from '../assets/images/footer/privacy-policy.svg';
import FooterComponent from '../components/common/footer-component';
import { FooterSupportSection } from '../components/common/constants';
import Footer from '../components/footer';
import PageHead from '../components/common/page-head';

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops Privacy Policy',
                description: 'Continuous integration and delivery simplified for Containers'
            }}
        />
    );
};

export default function PrivacyPolicy() {
    return (
        <>
            <FooterComponent
                heading="Privacy Policy"
                img={privacyPolicy}
                contentContainer
                text={'This Privacy Policy is effective as of June 15, 2018.'}
                textDesc={
                    'Welcome, and thank you for your interest in Razorops,(“Razorops” “us” or “we”) and our Service, as described in the Razorops Terms of Service.\n\nThis Privacy Policy describes the information that we gather from you, how we use and disclose your information, and the steps we take to protect your information. By using or accessing the Site or the Service, you are accepting the practices described in this Privacy Policy, and you are consenting to our processing of your information as set forth in this Privacy Policy now and as amended by us. If you have any questions or comments about this Privacy Policy or our use of your personally identifying information, please contact us at support@razorops.com. This Privacy Policy is incorporated into and is subject to the Razorops Terms of Service. Capitalized terms that are not defined in the Privacy Policy have the meaning given to them in the Terms of Service. The information that we collect: User-provided Information when you use the service, you may provide and we may collect what is generally called “personally identifiable” information, such as your name, e-mail address, mailing address, mobile phone number, demographic information. For example, you may provide us with personally identifiable information when you register for an account, use the service, post customer sata, or send us customer service related requests. We collect and store content that you create, input, submit, post, upload, transmit, store or display in the process of using our Site or Service (“Licensee Content”). Such Content includes any personal information or other sensitive information that you choose to include (“incidentally-collected Personal Information”).'
                }
                content={FooterSupportSection.privacyPolicy}
            />
            <Footer />
        </>
    );
}
