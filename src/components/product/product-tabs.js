import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { font1, font5, fontSize16 } from '../../assets/globalStyles';
import integration from '../../assets/images/product/tabs/razorops-integration.svg';

import styled from '@emotion/styled';

const MainContainer = styled('div')`
    padding: 20px 0px;
`;

const Title = styled('span')`
    ${font5};
    font-size: 60px;
    line-height: 70px;
    color: #18204c;
    white-space: pre-wrap;

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

const Desc = styled('span')`
    ${font1};
    font-size: 24px;
    line-height: 29px;
    color: #5b5b5b;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 22px;
    }

    @media (max-width: 599px) {
        padding: 20px;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
    }
`;

const TextContainer = styled('div')`
    padding: 20px 60px 40px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 599px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const ProductLabel = styled('span')`
    ${font5};
    font-size: 30px;
    line-height: 40px;
    color: #18204c;
    text-align: left;

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
    font-size: ${fontSize16};
    line-height: 28px;
    color: #5b5b5b;
    text-align: left;

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

const ProductTab = styled(Tab)`
    display: flex;
    align-items: flex-start;
    min-width: 500px;
    padding: 30px;
    text-transform: none;
    border-left: 16px solid rgba(52, 94, 239, 0.2);

    @media (max-width: 1199px) {
        min-width: -webkit-fill-available;
    }
`;

const BoxContainer = styled(Box)`
    display: flex;

    @media (max-width: 1199px) {
        display: block;
    }
`;

const Img = styled('img')`
    min-width: -webkit-fill-available;
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

export default function ProductTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainContainer>
            <TextContainer>
                <Title>{'Run CI/CD pipelines\nRazorops way'}</Title>
                <Desc>The Simplest Container Native CI/CD Platform</Desc>
            </TextContainer>
            <BoxContainer>
                <Tabs
                    sx={{ overflow: 'visible' }}
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style: { background: '#345EEF', width: '16px', left: '0px' }
                    }}
                    aria-label="Vertical tabs example">
                    <ProductTab
                        label={
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <ProductLabel>Razorops Integrations</ProductLabel>
                                <Sub>
                                    We love the same tools your love, with Razorops you can
                                    integrate your existing tools like github, bitbucket, gitlab,
                                    your docker repository from various sources like DockerHub, AWS
                                    ECR, Google GCR etc, Any public or private Kubernetes, and your
                                    slack, email for notifications.
                                </Sub>
                            </Box>
                        }
                        {...a11yProps(0)}
                    />
                    <ProductTab
                        label={<ProductLabel>Super Fast Pipelines</ProductLabel>}
                        {...a11yProps(1)}
                    />
                    <ProductTab
                        label={<ProductLabel>Manage Razorops pipeline</ProductLabel>}
                        {...a11yProps(2)}
                    />
                    <ProductTab
                        label={<ProductLabel>Real Time Builds</ProductLabel>}
                        {...a11yProps(3)}
                    />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Img src={integration} alt="" />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Img src={integration} alt="" />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Img src={integration} alt="" />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Img src={integration} alt="" />
                </TabPanel>
            </BoxContainer>
        </MainContainer>
    );
}
