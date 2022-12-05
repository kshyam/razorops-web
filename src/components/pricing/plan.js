import * as React from 'react';
import { font1, font5, font6, font7, fontSize20 } from '../../assets/globalStyles';
import bgPattern from '../../assets/images/pricing/backgroundPattern.png';
import img from '../../assets/images/pricing/pricing.svg';
import bg from '../../assets/images/bg.png';

import styled from '@emotion/styled';
import { Button, Card, CardActions, CardContent, Grid, List, ListItem } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

const MainContainer = styled('div')`
    background-image: url(${bgPattern});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px;
    }

    @media (max-width: 600px) {
        padding: 40px;
    }
`;

const Title = styled('span')`
    ${font5};
    font-size: 60px;
    line-height: 90px;
    color: #ffffff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 50px;
        line-height: 77px;
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

const Desc = styled('span')`
    ${font1};
    font-size: 24px;
    line-height: 29px;
    color: #000000;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 22px;
        line-height: 27px;
        white-space: pre-wrap;
    }

    @media (min-width: 600px) and (max-width: 1199px) {
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

const Sub = styled('span')`
    padding: 20px 0px 0px 0px;
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #ffffff;
    text-align: left;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
        white-space: pre-wrap;
    }

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

const TextContainer = styled('div')`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1199px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 0px 0px 40px 0px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px;
    }

    @media (min-width: 1535px) {
        padding: 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 20px 40px;
    }
`;

const MoneyBack = styled('span')`
    ${font7};
    font-size: 24px;
    line-height: 30px;
    color: #18204c;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

const Text = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 30px;
    color: #5b5b5b;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

const Type = styled('span')`
    ${font1};
    font-size: 24px;
    line-height: 30px;
    color: #000000;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

const TryItFree = styled(Button)`
    padding: 10px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    background: #345eef;
    border-radius: 15px;
    &:hover {
        background: #345eef;
    }
`;

const ButtonText = styled('span')`
    ${font1};
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    text-transform: none;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 18px;
        line-height: 27px;
    }
`;

const Monthly = styled('span')`
    ${font7}
    font-size: 42px;
    line-height: 30px;
    text-align: center;
    color: #18204c;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 32px;
        line-height: 27px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 20px;
        line-height: 24px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 19px;
        line-height: 24px;
    }

    @media (max-width: 599px) {
        font-size: 17px;
        line-height: 22px;
    }
`;

const Yearly = styled('span')`
    ${font7};
    font-size: ${fontSize20};
    line-height: 30px;
    text-align: center;
    color: #345eef;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 18px;
        line-height: 24px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 17px;
        line-height: 24px;
    }

    @media (max-width: 599px) {
        font-size: 15px;
        line-height: 22px;
    }
`;

const InfoGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 899px) {
        padding: 20px;
    }
`;

const FeaturesGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    @media (max-width: 899px) {
        padding: 20px;
    }
`;

const ButtonGrid = styled(Grid)`
    display: flex;
    align-items: center;
    @media (max-width: 899px) {
        padding: 20px;
    }
`;

const PlansContainer = styled(Grid)`
    @media (max-width: 899px) {
        display: flex;
        justify-content: center;
    }
`;

const EnterpriseContainer = styled('div')`
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 2px 6px 20px -8px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(2px);
    border-radius: 20px;
    margin: 40px 0px 0px 0px;
    padding: 80px;

    @media (max-width: 899px) {
        padding: 30px;
    }
`;

const CardContainer = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 2px 6px 20px -8px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    height: 100%;
    padding: 20px;

    &:hover {
        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.5) -10.52%,
            rgba(140, 157, 218, 0.5) 204.31%
        );
    }
`;

const Email = styled('span')`
    ${font7};
    font-size: 24px;
    line-height: 30px;
    color: #345eef;

    @media (max-width: 1199px) {
        font-size: 15px;
        line-height: 22px;
    }
`;

const Img = styled('img')`
    @media (max-width: 599px) {
        width: 70px;
        height: 70px;
    }
`;

const ImageGrid = styled(Grid)`
    @media (max-width: 1199px) {
        padding: 20px;
    }
`;

const plans = [
    {
        type: 'Basic',
        monthlyPrice: 'Free',
        builds: '200 BUILDS/MONTH',
        users: '5 users included',
        details: [
            '1/2 vCPU @ 3.4GHz, 1GB RAM',
            'Ideal for individuals',
            'Unlimited Pipelines',
            'Unlimited Builds',
            'Private Docker Registry',
            '1 Concurrent pipelines',
            '1 Parallel actions',
            'Email Support'
        ],
        buttonText: 'TRY IT FREE'
    },
    {
        type: 'Growth',
        monthlyPrice: '$49/MONTH',
        yearlyPrice: '$499/YEAR',
        users: 'per 20 users',
        details: [
            '2 vCPU @ 3.4GHz, 4GB RAM',
            'Includes all BASIC features',
            'Ideal for small teams',
            'Docker Layer Caching',
            '2 Factor Authentication',
            '2 Concurrent pipelines',
            '2 Parallel actions',
            'Email Support',
            '30 Day money back guarantee'
        ],
        buttonText: 'Get a demo'
    },
    {
        type: 'Pro',
        monthlyPrice: '$199/MONTH',
        yearlyPrice: '$1999/YEAR',
        users: 'per 40 users',
        details: [
            '4 vCPU @ 3.4GHz, 8GB RAM',
            'Includes all GROWTH features',
            'Ideal for Small Medium teams',
            'Kubernetes GitOps',
            'Helm, Jsonnet, Kustomize Support',
            'Artifactory and Reports Support',
            '5 Concurrent pipelines',
            '5 Parallel actions',
            'Dedicated Phone Support',
            '30 Day money back guarantee'
        ],
        buttonText: 'Get a demo'
    }
];

const Enterprise = [
    {
        type: 'Enterprise',
        desc: 'Start POC',
        details: [
            'Includes all PRO features',
            'Unlimited data retention',
            '20 concurrent builds and steps',
            'Behind the firewall support',
            'Hybrid - Run builds on your infrastructure, and the Razorops UI on our infrastructure.',
            'On-premise - Run the full Razorops stack on your own infrastructure.'
        ]
    }
];

export default function Plan() {
    return (
        <>
            <TextContainer>
                <Grid item display={'flex'} flexDirection={'column'}>
                    <Title>{'Choose your plan'}</Title>
                    <Sub>
                        {'Start with Free Plan, Scale when you feel, No credit card\nrequired.'}
                    </Sub>
                </Grid>
                <ImageGrid item>
                    <Img alt="" src={img} />
                </ImageGrid>
            </TextContainer>
            <MainContainer>
                <PlansContainer container spacing={2}>
                    {plans.map((i) => (
                        <Grid item md={4} sm={6} xs={12}>
                            <CardContainer>
                                <CardContent>
                                    <Grid container spacing={2} flexDirection={'column'}>
                                        <Grid item>
                                            <Grid container spacing={2} flexDirection={'column'}>
                                                <Grid item>
                                                    <Type>{i.type}</Type>
                                                </Grid>
                                                <Grid item>
                                                    <Monthly>{i.monthlyPrice}</Monthly>
                                                </Grid>
                                                <Grid item>
                                                    <Yearly>{i?.builds || i?.yearlyPrice}</Yearly>
                                                </Grid>
                                                <Grid item>
                                                    <Text>{i.users}</Text>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <List sx={{ width: '100%' }}>
                                                {i.details.map((i) => (
                                                    <ListItem disableGutters>
                                                        <CircleOutlinedIcon
                                                            fontSize="small"
                                                            style={{ color: '#000000' }}
                                                        />
                                                        {i === '30 Day money back guarantee' ? (
                                                            <MoneyBack
                                                                style={{ paddingLeft: '10px' }}>
                                                                {i}
                                                            </MoneyBack>
                                                        ) : (
                                                            <Text style={{ paddingLeft: '10px' }}>
                                                                {i}
                                                            </Text>
                                                        )}{' '}
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <TryItFree>
                                        <ButtonText>{i.buttonText}</ButtonText>
                                    </TryItFree>
                                </CardActions>
                            </CardContainer>
                        </Grid>
                    ))}
                </PlansContainer>
                <EnterpriseContainer>
                    <Grid container justifyContent={'space-between'}>
                        {Enterprise.map((i) => (
                            <>
                                <InfoGrid item xs={12} sm={12} md={4} lg={4}>
                                    <Grid item>
                                        <Grid item>
                                            <Type>{i.type}</Type>
                                        </Grid>
                                        <Grid item>
                                            <Monthly>{i.desc}</Monthly>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid item>
                                            <Email>{'info@razorops.com'}</Email>
                                        </Grid>
                                        <Grid item>
                                            <Text>{'Mail Us'}</Text>
                                        </Grid>
                                    </Grid>
                                </InfoGrid>
                                <FeaturesGrid item xs={12} sm={12} md={4} lg={4}>
                                    <Grid container spacing={2}>
                                        <List sx={{ width: '100%' }}>
                                            {i.details.map((i) => (
                                                <ListItem disableGutters>
                                                    <CircleOutlinedIcon
                                                        fontSize="small"
                                                        style={{ color: '#000000' }}
                                                    />
                                                    <Text style={{ paddingLeft: '10px' }}>{i}</Text>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grid>
                                </FeaturesGrid>
                                <ButtonGrid item xs={12} sm={12} md={3} lg={3}>
                                    <TryItFree>
                                        <ButtonText>Contact Us</ButtonText>
                                    </TryItFree>
                                </ButtonGrid>
                            </>
                        ))}
                    </Grid>
                </EnterpriseContainer>
            </MainContainer>
        </>
    );
}
