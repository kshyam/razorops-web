import React, { useRef } from 'react';
import customers from '../assets/images/footer/customers/customers.svg';
import img from '../assets/images/footer/customers/customerImg.webp';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';
import { font1, font3, font6, font7 } from '../assets/globalStyles';
import TrustedBy from '../components/trusted-by';
import TalkOfTheTown from '../components/talk-of-the-town';
import { graphql, Link } from 'gatsby';
import GetStarted from '../components/get-started';
import PageHead from '../components/common/page-head';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 50px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 50px;
    }

    @media (max-width: 600px) {
        padding: 50px 20px;
    }
`;

const CustomersText = styled('span')`
    ${font3};
    font-size: 80px;
    line-height: 88px;
    color: #031b4e;
    white-space: pre-wrap;

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
        font-size: 34px;
        line-height: 47px;
        text-align: center;
    }
`;

const Heading = styled('h1')`
    ${font3};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 40px;
    }

    @media (min-width: 1535px) {
        font-size: 38px;
        line-height: 48px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 28px;
        line-height: 42px;
        white-space: unset;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 35px;
        white-space: unset;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #5b6987;
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

const ExploreButton = styled(Button)`
    margin: 40px 0px;
    padding: 20px;
    background: #0069ff;
    border-radius: 14px;
    text-transform: none;

    &:hover {
        background: #0069ff;
    }
`;

const ExploreText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #f9fafe;
`;

const Img = styled('img')`
    height: 100px;
    width: 150px;
`;

const MainImg = styled('img')`
    width: 1200px;
    height: 600px;
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

export const Head = ({ data, ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops Customers',
                description:
                    'See how the world use Razorops to automate their overall development cycle for building remarkable product.'
            }}
        />
    );
};

export default function Customers({ data: { allCustomers } }) {
    const caseStudiesRef = useRef();
    const customerData = allCustomers.nodes.filter((i) => i.slug !== 'egnify');
    const egnify = allCustomers.nodes.filter((i) => i.slug === 'egnify');

    function handleClick() {
        caseStudiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <FooterComponent heading="Customers" img={customers} contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container spacing={10} justifyContent={'center'}>
                    <Grid item>
                        <Grid container spacing={2} justifyContent={'center'}>
                            <Grid item md={6}>
                                <MainImg alt="" src={img} />
                            </Grid>
                            <Grid
                                item
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'flex-end'}
                                md={5}>
                                <CustomersText>
                                    {"1,500+\ncustomers.\nYou're in\nleading\ncompany."}
                                </CustomersText>
                                <ExploreButton onClick={handleClick}>
                                    <ExploreText>Explore Case Studies</ExploreText>
                                </ExploreButton>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5} justifyContent={'center'}>
                            <Grid item md={10}>
                                <Grid container spacing={3} justifyContent={'center'}>
                                    <Grid item>
                                        <Heading>
                                            {
                                                'Leading companies believe in Razorops\nto ship quality code faster'
                                            }
                                        </Heading>
                                    </Grid>
                                    <Grid item>
                                        <Desc>
                                            {
                                                'See how the world use Razorops to automate their overall development cycle for building remarkable product.'
                                            }
                                        </Desc>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={10}>
                                <Grid container justifyContent={'center'} spacing={4}>
                                    <Grid item xs={8} sm={4} md={4}>
                                        <Card>
                                            <Title style={{ textAlign: 'center' }}>Teams</Title>
                                            <Text>1K+</Text>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={8} sm={4} md={4}>
                                        <Card>
                                            <Title style={{ textAlign: 'center' }}>
                                                Developers
                                            </Title>
                                            <Text>10K+</Text>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={8} sm={4} md={4}>
                                        <Card>
                                            <Title style={{ textAlign: 'center' }}>
                                                Successful builds
                                            </Title>
                                            <Text>200K+</Text>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5} justifyContent={'center'}>
                            <Grid item>
                                <Heading>
                                    {
                                        'Our customers do the most amazing things.\nThese are their stories.'
                                    }
                                </Heading>
                            </Grid>
                            <Grid item>
                                <Grid
                                    ref={caseStudiesRef}
                                    container
                                    spacing={5}
                                    alignItems={'center'}>
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
            <TrustedBy
                heading={'Leading companies believe in Razorops to\nship quality code faster'}
            />
            <TalkOfTheTown isHomeScreen={false} />
            <GetStarted />
            <Footer />
        </>
    );
}

export const query = graphql`
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
`;
