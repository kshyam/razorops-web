import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { font1, font3, font6, font7 } from '../../assets/globalStyles';
import { graphql, Link, useStaticQuery } from 'gatsby';

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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const Text = styled('span')`
    ${font3};
    font-size: 80px;
    line-height: 80px;
    text-align: center;
    color: #0069ff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 60px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 40px;
        line-height: 47px;
    }

    @media (max-width: 600px) {
        font-size: 30px;
        line-height: 37px;
    }
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

const CustomerImg = styled('img')`
    width: 730px;
    height: 475px;
`;

const ReadText = styled('span')`
    ${font6}
    font-size: 18px;
    line-height: 29px;
    color: #0069ff;
`;

export default function PartnersComponent({ heading }) {
    const data = useStaticQuery(graphql`
        {
            allCustomers: allDatoCmsCustomer {
                nodes {
                    title
                    slug
                    description
                    logo {
                        url
                    }
                    coverImage {
                        url
                    }
                    clientInfo {
                        name
                        role
                        quote
                    }
                }
            }
        }
    `);

    const customerData = data?.allCustomers?.nodes?.filter((i) => i.slug !== 'egnify');
    const egnify = data?.allCustomers?.nodes?.filter((i) => i.slug === 'egnify');

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
                    <Grid container spacing={5} justifyContent={'center'}>
                        <Grid item>
                            <Grid container spacing={5} alignItems={'center'}>
                                <Grid item md={6}>
                                    <CustomerImg
                                        alt=""
                                        src={egnify[0].coverImage.url}
                                        loading="lazy"
                                    />
                                </Grid>
                                <Grid item md={6}>
                                    <Grid container spacing={3}>
                                        <Grid item>
                                            <Title>{egnify[0].clientInfo.quote}</Title>
                                        </Grid>
                                        <Grid item>
                                            <Sub>{egnify[0].description}</Sub>
                                        </Grid>
                                        <Grid item>
                                            <Link to={`/case-studies/egnify`}>
                                                <ReadText>Read case study</ReadText>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={3}>
                                        {customerData.map((i) => (
                                            <Grid key={i.title} item md={6} lg={4}>
                                                <Link to={`/case-studies/${i.slug}`}>
                                                    <Card>
                                                        <Grid container spacing={3}>
                                                            <Grid item>
                                                                <Img
                                                                    src={i.logo.url}
                                                                    alt=""
                                                                    loading="lazy"
                                                                />
                                                            </Grid>
                                                            <Grid item>
                                                                <Title>{i.title}</Title>
                                                            </Grid>
                                                            <Grid item>
                                                                <Sub>{i.description}</Sub>
                                                            </Grid>
                                                            <Grid item>
                                                                <ReadText>
                                                                    Read full case study
                                                                </ReadText>
                                                            </Grid>
                                                        </Grid>
                                                    </Card>
                                                </Link>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ContentContainer>
    );
}
