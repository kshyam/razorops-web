import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { font1, font3, font7 } from '../../assets/globalStyles';
import civo from '../../assets/images/clients/civo.png';
import kubeify from '../../assets/images/clients/kubeify.png';
import digitalocean from '../../assets/images/clients/digitalocean.png';
import { Link } from 'gatsby';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 60px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 60px;
    }

    @media (min-width: 1535px) {
        padding: 60px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 60px;
    }

    @media (max-width: 600px) {
        padding: 50px 20px;
    }
`;

const Heading = styled('h1')`
    ${font3};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;
    white-space: pre-wrap;

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
        white-space: initial;
    }
`;

const Title = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #18204c;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 26px;
        line-height: 37px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 22px;
        line-height: 32px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
        line-height: 32px;
    }
`;

const Sub = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #5b5b5b;
`;

const Card = styled('div')`
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: #f9fafe;
    border-radius: 28px;
`;

const Img = styled('img')`
    height: 100px;
    width: 150px;
`;

const data = [
    {
        id: 1,
        img: digitalocean,
        url: '/try-razorops-cicd-with-digital-ocean-kubernetes',
        title: 'DigitalOcean',
        desc: 'DigitalOcean simplifies cloud computing so builders can spend more time creating software that changes the world.'
    },
    {
        id: 2,
        img: kubeify,
        title: 'Kubeify',
        desc: 'Kubeify helps developers and operators to build, deploy, manage, and scale their applications on top of Kubernetes. Kubeify is ready to lend a helping hand on your journey to Kubernetes.'
    },
    {
        id: 3,
        img: civo,
        title: 'CIVO',
        desc: 'Enabling companies to host core applications with ease. Helping speed up development, increase productivity and reduce costs.'
    }
];

export default function PartnersComponent({ heading }) {
    return (
        <ContentContainer>
            <Grid container spacing={10} justifyContent={'center'}>
                <Grid item>
                    <Grid container spacing={5} justifyContent={'center'}>
                        <Grid item md={10}>
                            <Heading>{heading}</Heading>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container spacing={3}>
                        {data.map((i) => (
                            <Grid key={i.id} item md={6} lg={4}>
                                <Link to={i.url}>
                                    <Card>
                                        <Grid container direction={'column'} spacing={3}>
                                            <Grid item>
                                                <Img src={i.img} alt="" loading="lazy" />
                                            </Grid>
                                            <Grid item>
                                                <Title>{i.title}</Title>
                                            </Grid>
                                            <Grid item>
                                                <Sub>{i.desc}</Sub>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </ContentContainer>
    );
}
