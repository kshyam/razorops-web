import React from 'react';
import { Card, Grid } from '@mui/material';
import styled from '@emotion/styled';

import feature1 from '../../assets/images/product/features/feature1.svg';
import feature2 from '../../assets/images/product/features/feature2.svg';
import feature3 from '../../assets/images/product/features/feature3.svg';
import feature4 from '../../assets/images/product/features/feature4.svg';
import feature5 from '../../assets/images/product/features/feature5.svg';
import feature6 from '../../assets/images/product/features/feature6.svg';
import feature7 from '../../assets/images/product/features/feature7.svg';
import feature8 from '../../assets/images/product/features/feature8.svg';
import feature9 from '../../assets/images/product/features/feature9.svg';

import {
    color1,
    color2,
    font1,
    font3,
    font7,
    font8,
    fontSize18,
    lineHeight29
} from '../../assets/globalStyles';

const BG = styled('div')`
    background: white;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 40px 70px 40px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 20px 70px 20px;
    }

    @media (min-width: 1535px) {
        padding: 100px 50px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 50px 70px 50px;
    }

    @media (max-width: 600px) {
        padding: 70px 20px 70px 20px;
    }
`;

const MainContainer = styled(Grid)`
    margin-top: 40px;
    display: flex;
    align-items: center;
    @media (max-width: 899px) {
        justify-content: center;
    }

    @media (max-width: 599px) {
        margin-top: 30px;
    }
`;

const Title = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    text-align: center;
    color: ${color1};

    @media (max-width: 600px) {
        font-size: 22px;
        line-height: 27px;
    }
`;

const SubText = styled('div')`
    padding: 20px 0px;
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    text-align: center;
    white-space: pre-wrap;
    color: ${color2};

    @media (max-width: 600px) {
        white-space: inherit;
    }
`;

const CardContainer = styled(Card)`
    height: 470px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(52, 94, 239, 0.3);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    border-radius: 20px;

    @media (min-width: 1535px) {
        height: 540px;
    }
`;

const CardTitle = styled('span')`
    ${font7};
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    color: #000000;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 25px;
        line-height: 35px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 30px;
        line-height: 35px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 32px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 27px;
        line-height: 32px;
    }
`;

const CardSub = styled('span')`
    ${font8};
    font-size: 22px;
    line-height: 36px;
    color: #000000;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 22px;
        line-height: 35px;
    }

    @media (max-width: 599px) {
        font-size: 20px;
        line-height: 25px;
    }
`;

const CardImg = styled('img')`
    padding: 30px;
    width: 156px;
    height: 156px;
`;

const data = [
    {
        id: 1,
        img: feature1,
        title: 'Container Native',
        sub: 'Software that treats the container as the first-class unit of infrastructure. Razorops gives a fresh isolated environment for every step in your pipeline.'
    },
    {
        id: 2,
        img: feature2,
        title: 'Connect Environments',
        sub: 'Create new Kubernetes clusters on any server or cloud no matter where they run. Integrate and promote builds across multiple environments according to your needs (development, staging and more).'
    },
    {
        id: 3,
        img: feature3,
        title: 'Deployment Pipeline',
        sub: 'Manage your entire pipeline visually or put inside your codebase. No scripts, delays and downtime.'
    },
    {
        id: 4,
        img: feature4,
        title: 'Automatic rollback',
        sub: 'We analyze data from monitoring tools and uses automated testing tools to look for anomalies and failures to rollback broken within seconds.'
    },
    {
        id: 5,
        img: feature5,
        title: 'Incorporate Gitops',
        sub: 'Align your pipelines with the branch structure, making it easier to work with branching workflows like feature branching or git-flow.'
    },
    {
        id: 6,
        img: feature6,
        title: 'Code as configuration',
        sub: 'Store and manage your configurations in a single .razorops.yaml file. Only few lines of code to get you started.'
    },
    {
        id: 7,
        img: feature7,
        title: 'Git as Source Code',
        sub: 'Razorops integrates well with top git based source code management systems like GitHub, Bitbucket, and GitLab.'
    },
    {
        id: 8,
        img: feature8,
        title: 'Language Agnostic',
        sub: 'Razorops is language agnostic, it works with any language or service that runs inside a Docker container. You can choose public docker images or use your private images.'
    },
    {
        id: 9,
        img: feature9,
        title: 'Platform Independent',
        sub: "Razorops is a cloud based SAAS product, it's a zero installation, quick start platform, you can build your apps for any platform AWS, GCP, Azure, iOS, Android, ReactNative etc."
    }
];

export default function Features() {
    return (
        <BG>
            <Title>Razorops Features</Title>
            <SubText>
                {'Nowadays, the increasingly growing number of mobile\nand computing devices'}
            </SubText>
            <MainContainer container spacing={2}>
                {data.map((i) => (
                    <Grid key={i.id} item xs={12} sm={10} md={6} lg={4}>
                        <CardContainer>
                            <Grid item display={'flex'} justifyContent={'center'}>
                                <CardImg alt="" src={i.img} />
                            </Grid>
                            <Grid
                                container
                                item
                                display={'flex'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                                spacing={3}>
                                <Grid item display={'flex'} justifyContent={'center'}>
                                    <CardTitle>{i.title}</CardTitle>
                                </Grid>
                                <Grid item>
                                    <CardSub>{i.sub}</CardSub>
                                </Grid>
                            </Grid>
                        </CardContainer>
                    </Grid>
                ))}
            </MainContainer>
        </BG>
    );
}
