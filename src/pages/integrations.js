import React from 'react';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import styled from '@emotion/styled';
import Footer from '../components/footer';
import SignUp from '../components/sign-up';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import github from '../assets/images/integration-tools/github-black.svg';
import bitbucket from '../assets/images/integration-tools/bitbucket-blue-logo.png';
import gitlab from '../assets/images/integration-tools/gitlab-logo.webp';
import docker from '../assets/images/integration-tools/docker-blue-logo.png';
import harbor from '../assets/images/integration-tools/harbor-logo-razorops.png';
import jfrog from '../assets/images/integration-tools/jfrog-logo-razorops.png';
import gke from '../assets/images/integration-tools/GKE-logo.png';
import ibmk8s from '../assets/images/integration-tools/IBM-kubernetes-service-logo.png';
import aks from '../assets/images/integration-tools/AKS-logo.png';
import eks from '../assets/images/integration-tools/amazon_eks_logo.png';
import grunt from '../assets/images/integration-tools/grunt-logo.svg';
import gulp from '../assets/images/integration-tools/gulp-logo.png';
import gradle from '../assets/images/integration-tools/gradle-logo.png';
import maven from '../assets/images/integration-tools/maven-logo.png';
import civo from '../assets/images/integration-tools/civo.png';
import terraform from '../assets/images/integration-tools/terraform-logo.png';
import helm from '../assets/images/integration-tools/helm.png';
import sonarqube from '../assets/images/integration-tools/sonarqube-logo-razorops.png';
import aquasecurity from '../assets/images/integration-tools/aquasecurity-logo.png';
import FooterComponent from '../components/common/footer-component';
import { font1, font6 } from '../assets/globalStyles';
import { Link } from 'gatsby';
import GetStarted from '../components/get-started';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 100px 50px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 50px;
    }

    @media (max-width: 600px) {
        padding: 50px 20px;
    }
`;

const Title = styled('h1')`
    ${font6};
    font-size: 24px;
    line-height: 24px;
    color: #345eef;

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 20px;
        line-height: 20px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 20px;
        line-height: 20px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 16px;
    }

    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 16px;
    }
`;

const Label = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 16px;
    color: #18204c;

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 16px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 14px;
        line-height: 14px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 14px;
        line-height: 14px;
    }

    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 14px;
    }
`;

const IntegrationsTab = styled(Tab)`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    text-transform: none;
    min-width: 300px;
`;

const GridContainer = styled(Grid)`
    padding: 0px 30px;

    @media (max-width: 899px) {
        padding: 50px 0px;
    }
`;

const BoxContainer = styled(Box)`
    display: flex;

    @media (max-width: 899px) {
        display: block;
    }
`;

const CardContainer = styled('div')`
    padding: 30px;
    background: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    &:hover {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        transition: 0.4s;
    }
`;

const CardTitle = styled('span')`
    ${font6}
    font-size: 20px;
    line-height: 36px;
    color: #161614;

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 14px;
        line-height: 27px;
    }

    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const Img = styled('img')`
    width: 54px;
    height: 54px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const tools1 = [
    {
        id: 1,
        img: github,
        title: 'Github',
        link: 'https://docs.razorops.com/account/create-pipeline/#when-authenticated-with-github'
    },
    {
        id: 2,
        img: bitbucket,
        title: 'Bitbucket',
        link: 'https://docs.razorops.com/account/create-pipeline/#when-authenticated-with-bitbucket'
    },
    {
        id: 3,
        img: gitlab,
        title: 'Gitlab',
        link: 'https://docs.razorops.com/account/create-pipeline/#when-authenticated-with-gitlab'
    }
];

const tools2 = [
    {
        id: 1,
        img: grunt,
        title: 'Grunt',
        link: 'https://razorops.freshdesk.com/support/solutions/articles/89000015139-how-to-intigrate-grunt-with-razorops-cicd'
    },
    {
        id: 2,
        img: gulp,
        title: 'Gulp',
        link: 'https://razorops.freshdesk.com/support/solutions/articles/89000015137-how-to-integrate-gulp-with-razorops-cicd'
    }
];

const tools3 = [
    {
        id: 1,
        img: harbor,
        title: 'Harbor',
        link: 'https://razorops.freshdesk.com/support/solutions/articles/89000015132-how-to-intigrate-harbor-with-razorops-cicd'
    },
    {
        id: 2,
        img: jfrog,
        title: 'JFrog',
        link: 'https://razorops.freshdesk.com/support/solutions/articles/89000015481-how-to-integration-jfrog-artifacts-with-razorops-ci-cd'
    }
];

const tools4 = [
    { id: 1, img: gke, title: 'GKE' },
    { id: 2, img: ibmk8s, title: 'IBM K8s' },
    { id: 3, img: aks, title: 'AKS' },
    { id: 4, img: eks, title: 'EKS' },
    { id: 5, img: civo, title: 'CIVO' }
];

const tools5 = [
    { id: 1, img: terraform, title: 'Terraform' },
    { id: 2, img: helm, title: 'Helm Chart' },
    {
        id: 3,
        img: sonarqube,
        title: 'Sonarqube',
        link: 'https://razorops.freshdesk.com/support/solutions/articles/89000015114-how-to-intigrate-sonarqube-with-razorops-cicd'
    },
    { id: 4, img: aquasecurity, title: 'Aqua Security' }
];

function Card(props) {
    const { tools, title } = props;

    return (
        <GridContainer container spacing={5}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Title>{title}</Title>
            </Grid>
            {tools.map((i) => (
                <Grid key={i.id} item xs={6} sm={4} md={4} lg={4}>
                    <NavLink to={i.link} target="_blank">
                        <CardContainer>
                            <Grid container alignItems={'center'} spacing={2}>
                                <Grid item>
                                    <Img src={i.img} alt="" />
                                </Grid>
                                <Grid item>
                                    <CardTitle>{i.title}</CardTitle>
                                </Grid>
                            </Grid>
                        </CardContainer>
                    </NavLink>
                </Grid>
            ))}
        </GridContainer>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{ width: '100%' }}
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`
    };
}

export default function Integrations() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <FooterComponent heading="Integrations" contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container spacing={10} justifyContent={'center'}>
                    <Grid item md={12}>
                        <BoxContainer>
                            <Tabs
                                sx={{ overflow: 'visible' }}
                                orientation="vertical"
                                variant="scrollable"
                                value={value}
                                onChange={handleChange}
                                TabIndicatorProps={{
                                    style: { background: '#345EEF', width: '4px', left: '0px' }
                                }}
                                aria-label="Vertical tabs example">
                                <IntegrationsTab
                                    label={<Label>SCM Tools</Label>}
                                    {...a11yProps(0)}
                                />
                                <IntegrationsTab
                                    label={<Label>Build Tools</Label>}
                                    {...a11yProps(1)}
                                />
                                <IntegrationsTab
                                    label={<Label>Unit Testing Tools</Label>}
                                    {...a11yProps(2)}
                                />
                                <IntegrationsTab
                                    label={<Label>Test Coverage Report Tools</Label>}
                                    {...a11yProps(3)}
                                />
                                <IntegrationsTab
                                    label={<Label>Container Registries</Label>}
                                    {...a11yProps(4)}
                                />
                                <IntegrationsTab
                                    label={<Label>Development Tools- Kubernetes</Label>}
                                    {...a11yProps(5)}
                                />
                                <IntegrationsTab
                                    label={<Label>Other Tools</Label>}
                                    {...a11yProps(6)}
                                />
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <Card tools={tools1} title={'SCM Tools'} />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Card tools={tools2} title={'Build Tools'} />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Card tools={tools1} title={'Unit Testing Tools'} />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <Card tools={tools1} title={'Test Coverage Report Tools'} />
                            </TabPanel>
                            <TabPanel value={value} index={4}>
                                <Card tools={tools3} title={'Container Registries'} />
                            </TabPanel>
                            <TabPanel value={value} index={5}>
                                <Card tools={tools4} title={'Development Tools- Kubernetes'} />
                            </TabPanel>
                            <TabPanel value={value} index={6}>
                                <Card tools={tools5} title={'Other Tools'} />
                            </TabPanel>
                        </BoxContainer>
                    </Grid>
                </Grid>
            </ContentContainer>
            <GetStarted />
            <SignUp />
            <Footer />
        </>
    );
}
