import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { font1, font5 } from '../../assets/globalStyles';

import styled from '@emotion/styled';

const MainContainer = styled('div')`
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 40px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px 50px 50px 50px;
    }

    @media (min-width: 1535px) {
        padding: 50px 100px 100px 100px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 50px 100px 100px 100px;
    }

    @media (max-width: 600px) {
        padding: 20px 40px 40px 40px;
    }
`;

const Title = styled('span')`
    ${font5};
    font-size: 60px;
    line-height: 70px;
    color: #18204c;
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 34px;
        line-height: 39px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 39px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 29px;
        line-height: 32px;
    }

    @media (max-width: 599px) {
        font-size: 24px;
        line-height: 27px;
    }
`;

const TextContainer = styled('div')`
    padding: 20px 60px 40px 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TabLabel = styled('span')`
    ${font5};
    font-size: 30px;
    line-height: 40px;
    color: #18204c;
    text-align: left;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 24px;
        line-height: 37px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 24px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 20px;
        line-height: 24px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const Sub = styled('span')`
    padding: 20px 0px 0px 0px;
    ${font1};
    text-align: left;
    font-size: 18px;
    line-height: 28px;
    color: #161614;
    @media (min-width: 600px) and (max-width: 1199px) {
        padding: 10px 0px 0px 0px;
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: 599px) {
        padding: 10px 0px 0px 0px;
        font-size: 12px;
        line-height: 20px;
    }
`;

const FAQTab = styled(Tab)`
    display: flex;
    align-items: flex-start;
    min-width: -webkit-fill-available;
    padding: 30px;
    text-transform: none;
    border-left: 16px solid rgba(52, 94, 239, 0.2);
`;

const BoxContainer = styled(Box)`
    display: flex;

    @media (max-width: 1199px) {
        display: block;
    }
`;

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

export default function FrequentlyAskedQuestions() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainContainer>
            <TextContainer>
                <Title>{'Frequently Asked Questions'}</Title>
            </TextContainer>
            <BoxContainer>
                <Tabs
                    sx={{ overflow: 'visible', width: '100%' }}
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style: { background: '#345EEF', width: '16px', left: '0px' }
                    }}
                    aria-label="Vertical tabs example">
                    <FAQTab
                        label={
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    paddingLeft: '20px'
                                }}>
                                <TabLabel>Q. How do I get started?</TabLabel>
                                <Sub style={{ display: value === 0 ? 'flex' : 'none' }}>
                                    Getting started with Razorops is easy, you can have a look quick
                                    look on Documents and signup for razorops.
                                    <br /> 1. Signup Razorops, Create your first Pipeline project 2.
                                    Add .razorops.yaml to your source code root directory <br /> 3.
                                    Define your Pipeline (Click here to Learn) <br /> 4. Commit and
                                    push your source code <br /> 5.This new commit will trigger your
                                    pipeline <br /> 6. Still need help Schedule a Demo
                                </Sub>
                            </Box>
                        }
                        {...a11yProps(0)}
                    />
                    <FAQTab
                        label={
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    paddingLeft: '20px'
                                }}>
                                <TabLabel>
                                    Q. Which source code management services are supported?
                                </TabLabel>
                                <Sub style={{ display: value === 1 ? 'flex' : 'none' }}>
                                    Razorops supports major code-hosting services like GitHub,
                                    Bitbucket and Gitlab
                                </Sub>
                            </Box>
                        }
                        {...a11yProps(1)}
                    />
                    <FAQTab
                        label={
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    paddingLeft: '20px'
                                }}>
                                <TabLabel>
                                    Q. How do you handle upgrading or canceling a subscription?
                                </TabLabel>
                                <Sub style={{ display: value === 2 ? 'flex' : 'none' }}>
                                    You can change or cancel your subscription at any time from your
                                    dashboard.
                                </Sub>
                            </Box>
                        }
                        {...a11yProps(2)}
                    />
                    <FAQTab
                        label={
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    paddingLeft: '20px'
                                }}>
                                <TabLabel>Q. Do your have something custom plan?</TabLabel>
                                <Sub style={{ display: value === 3 ? 'flex' : 'none' }}>
                                    Most of our customers find Razorops SAAS environment covers
                                    their usecases. if you need extra support, hosting preferences
                                    or features, our support team will help you.
                                </Sub>
                            </Box>
                        }
                        {...a11yProps(3)}
                    />
                    <FAQTab
                        label={
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    paddingLeft: '20px'
                                }}>
                                <TabLabel>Q. I have more questions ?</TabLabel>
                                <Sub style={{ display: value === 4 ? 'flex' : 'none' }}>
                                    Most of our customers find Razorops SAAS environment covers
                                    their usecases. if you need extra support, hosting preferences
                                    or features, our support team will help you.
                                </Sub>
                            </Box>
                        }
                        {...a11yProps(4)}
                    />
                </Tabs>
            </BoxContainer>
        </MainContainer>
    );
}
