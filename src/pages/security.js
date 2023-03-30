import React from 'react';
import security from '../assets/images/footer/security.svg';
import { FooterSupportSection } from '../components/common/constants';
import FooterComponent from '../components/common/footer-component';
import PageHead from '../components/common/page-head';
import Footer from '../components/footer';

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops Security Cloud Platform & Integration Security',
                description:
                    'We fully understand and recognize, that the security of your source code as critical componant. Therefore we put lots of efforts to provide a secure infrastructure to use.'
            }}
        />
    );
};

export default function Security() {
    return (
        <>
            <FooterComponent
                heading="Security | Cloud Platform 
            & Integration Security"
                img={security}
                contentContainer
                textDesc={
                    'We fully understand and recognize, that the security of your source code as critical componant. Therefore we put lots of efforts to provide a secure infrastructure to use.'
                }
                content={FooterSupportSection.security}
            />
            <Footer />
        </>
    );
}
