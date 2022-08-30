import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { font1 } from '../assets/globalStyles';

import github from '../assets/images/integration-tools/github-black.svg';
import slack from '../assets/images/integration-tools/slack.webp';
import bitbucket from '../assets/images/integration-tools/bitbucket-blue-logo.png';
import aws from '../assets/images/integration-tools/aws.png';
import digitalocean from '../assets/images/integration-tools/digital-ocean-logo.png';
import gitlab from '../assets/images/integration-tools/gitlab-logo.webp';
import firebase from '../assets/images/integration-tools/firebase-logo.png';
import googlecloud from '../assets/images/integration-tools/google-cloud.png';
import docker from '../assets/images/integration-tools/docker-blue-logo.png';
import kubernetes from '../assets/images/integration-tools/kubernetes.png';

import { color1, color2, font3, font6, fontSize18, lineHeight29 } from '../assets/globalStyles';

const BG = styled('div')`
    background: white;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 70px 180px 70px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
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

const Text = styled('span')`
    padding: 0px 0px 0px 10px;
    ${font6};
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    color: #161614;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 20px;
        line-height: 32px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const Container = styled('div')`
    display: flex;
    align-items: center;
    padding: 20px;
    background: #ffffff;
    box-shadow: 0px 4px 100px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
`;

const Content = styled('div')`
    display: flex;
    align-items: center;
`;

const LeftImg = styled('img')`
    width: 50px;
    height: 50px;
`;

const data = [
    { id: 1, img: github, text: 'Github' },
    { id: 2, img: slack, text: 'Slack' },
    { id: 3, img: aws, text: 'Aws' },
    { id: 4, img: bitbucket, text: 'Bitbucket' },
    { id: 5, img: digitalocean, text: 'Digital Ocean' },
    { id: 6, img: firebase, text: 'Firebase' },
    { id: 7, img: googlecloud, text: 'Google Cloud' },
    { id: 8, img: docker, text: 'Docker' },
    { id: 9, img: gitlab, text: 'Gitlab' },
    { id: 10, img: kubernetes, text: 'Kubernetes' },
    { id: 11, img: aws, text: 'Aws' },
    { id: 12, img: bitbucket, text: 'Bitbucket' }
];

export default function ToolIntegration() {
    return (
        <BG>
            <Title>Tool Integration</Title>
            <SubText>
                {'Nowadays, the increasingly growing number of mobile\nand computing devices'}
            </SubText>
            <MainContainer container spacing={5}>
                {data.map((i) => (
                    <Grid key={i.id} item xs={6} sm={6} md={4} lg={3}>
                        <Container>
                            <Content>
                                <LeftImg alt="" src={i.img} />
                                <Text>{i.text}</Text>
                            </Content>
                        </Container>
                    </Grid>
                ))}
            </MainContainer>
        </BG>
    );
}
