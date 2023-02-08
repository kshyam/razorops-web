import React from 'react';
import TableComponent from '../components/common/table-component';
import Container from '../components/container';
import Footer from '../components/footer';
import TopSection from '../components/jenkins-alternative/top-section';
import WhatIsRazorops from '../components/jenkins-alternative/what-is-razorops';
import styled from '@emotion/styled';
import jenkins from '../assets/images/jenkins-alternative/jenkins.svg';
import GetStarted from '../components/get-started';
import MigrateFromJenkins from '../components/jenkins-alternative/migrate-from-jenkins';

const MainContainer = styled('div')`
    position: relative;
    overflow: hidden;
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 140px 140px 140px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 100px 100px 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 60px 40px;
    }
`;

const data = [
    createData(
        'Hosting',
        'SAAS hosted, on-prem, closed source, No maintenance headaches',
        'Open source, Self-hosted, maintenance required'
    ),
    createData(
        'Modern/Container-native',
        'Container-native from the ground up, more resilient with better environment boundaries',
        'Built years before, though still a good tool for automation and flexible pipelines'
    ),
    createData(
        'Extensibility',
        'Marketplace based managed integrations and plugins',
        'Plugins ( made by independent authors and inhouse)'
    ),
    createData(
        'Docker Support (docker daemon, storage and image management)',
        'Out-of-box',
        'TBC, Limited'
    ),
    createData('Docker Layer Caching', 'In-build (faster builds)', 'NO'),
    createData('Concurrent/Parallel builds', 'YES', 'Limited, Plugin'),
    createData('Artifact support', 'In-build', 'Plugin based, TBC'),
    createData('Test Reports and analysis', 'In-build', 'Plugin based, TBC'),
    createData('Pipeline as code', 'YES', 'NO, TBC'),
    createData('Database and service testing', 'YES', 'NO'),
    createData('Dependency caching', 'YES', 'NO'),
    createData('Language runtimes', 'YES, managed by us', 'YES, Managed by the community'),
    createData('Technical Support', 'YES', 'NO'),
    createData('Git Triggers (push, click, Pull Request, tag )', 'YES', 'YES'),
    createData('Trigger on a scheduled time', 'NO', 'YES'),
    createData('CLI / API Access', 'YES', 'YES, Limited'),
    createData('Notification', 'Email and chart (slack and others)', 'TBC, Plugin'),
    createData('Linux VM', 'YES and managed', 'YES, TBC by you'),
    createData('Android / iPhone builds', 'Limited', 'Limited'),
    createData('Windows', 'NO', 'YES, TBC'),
    createData('OSX support', 'NO', 'YES, TBC')
];

function createData(title, company1Features, company2Features) {
    return { title, company1Features, company2Features };
}

export default function JenkinsAlternative() {
    return (
        <Container>
            <TopSection />
            <MainContainer>
                <WhatIsRazorops />
                <TableComponent heading="Compare RazorOps vs. Jenkins" data={data} img={jenkins} />
            </MainContainer>
            <MigrateFromJenkins />
            <GetStarted
                bg={'linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)), #DEECFF'}
            />
            <Footer />
        </Container>
    );
}
