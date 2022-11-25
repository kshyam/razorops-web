import React from 'react';
import security from '../assets/images/footer/security.svg';
import FooterSupport from '../components/footer-support';
import { FooterSupportSection } from '../components/common/constants';

export default function Security() {
    return (
        <FooterSupport
            heading="Security | Cloud Platform 
            & Integration Security"
            img={security}
            textDesc={
                'We fully understand and recognize, that the security of your source code as critical componant. Therefore we put lots of efforts to provide a secure infrastructure to use.'
            }
            content={FooterSupportSection.security}
        />
    );
}
