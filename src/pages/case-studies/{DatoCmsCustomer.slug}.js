import React from 'react';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import Footer from '../../components/footer';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { color1, color2, font1, font2, font3, font5 } from '../../assets/globalStyles';
import bg from '../../assets/images/bg.png';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StructuredText } from 'react-datocms';
import GetStarted from '../../components/get-started';
import PageHead from '../../components/common/page-head';

const ContentContainer = styled(Grid)`
    display: flex;
    justify-content: space-between;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 80px 50px 80px 50px;
    }

    @media (min-width: 1535px) {
        padding: 80px 140px 80px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 80px 100px 80px 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 60px 40px;
    }
`;

const TopContainer = styled(Grid)`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 150px;

    @media (max-width: 1199px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media (max-width: 899px) {
        padding: 80px;
    }
`;
const Heading = styled('h1')`
    ${font3};
    font-size: 45px;
    line-height: 76px;
    text-align: center;
    color: #ffffff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 40px;
        line-height: 54px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 40px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const Title = styled('h1')`
    ${font3};
    font-size: 30px;
    line-height: 45px;
    text-align: center;
    color: #ffffff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 28px;
        line-height: 35px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 26px;
        line-height: 35px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 22px;
        line-height: 32px;
    }

    @media (max-width: 600px) {
        font-size: 22px;
        line-height: 30px;
    }
`;

const Logo = styled('img')`
    height: 150px;
    width: 200px;
`;

const Text = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 28px;
    color: #191e27;
`;

const Divider = styled('hr')`
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
`;

const Name = styled('span')`
    ${font2};
    font-size: 18px;
    line-height: 29px;
    color: #000000;

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

const Role = styled('span')`
    ${font2};
    font-size: 16px;
    line-height: 27px;
    color: ${color2};
    text-align: left;
`;

const Quote = styled('span')`
    ${font5};
    font-size: 22px;
    line-height: 32px;
    color: #000000;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const TechStackGrid1 = styled(Grid)`
    display: flex;
    flex-direction: column;

    @media (max-width: 899px) {
        display: none;
    }
`;

const TechStackGrid2 = styled(Grid)`
    display: none;

    @media (max-width: 899px) {
        padding: 40px 0px 0px 0px;
        display: flex;
        flex-direction: row;
    }
`;

const GridItem = styled(Grid)`
    display: flex;
    align-items: center;
`;

export const Head = ({ data, ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: data.customer.title,
                description: data.customer.description
            }}
        />
    );
};

export default function Customer({ data: { customer } }) {
    return (
        <Container>
            <TopContainer container>
                <Grid item>
                    <Logo src={customer.logo.url} alt="" />
                </Grid>
                <Grid item>
                    <Heading>{customer.title}</Heading>
                </Grid>
            </TopContainer>
            <ContentContainer container>
                <Grid item xs={12} sm={12} md={8}>
                    <Grid container direction={'column'} spacing={8}>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid item>
                                    <Title style={{ color: color1 }}>About</Title>
                                </Grid>
                                <Grid item>
                                    <Text>{customer.description}</Text>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                spacing={2}
                                direction={'column'}
                                alignItems={'flex-start'}>
                                <Grid item>
                                    <Title style={{ color: color1 }}>The Challenge</Title>
                                </Grid>
                                <Grid item>
                                    <div className="prose prose-xl prose-blue">
                                        <Text>
                                            <StructuredText
                                                data={customer.challenge}
                                                renderBlock={({ record }) => {
                                                    if (record.__typename === 'DatoCmsImageBlock') {
                                                        return (
                                                            <GatsbyImage
                                                                style={{ display: 'block' }}
                                                                image={record.image.gatsbyImageData}
                                                            />
                                                        );
                                                    }
                                                    return (
                                                        <>
                                                            <p>Don't know how to render a block!</p>
                                                            <pre>
                                                                {JSON.stringify(record, null, 2)}
                                                            </pre>
                                                        </>
                                                    );
                                                }}
                                            />
                                        </Text>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                spacing={2}
                                direction={'column'}
                                alignItems={'flex-start'}>
                                <Grid item>
                                    <Title style={{ color: color1 }}>The Solution</Title>
                                </Grid>
                                <Grid item>
                                    <div className="prose prose-xl prose-blue">
                                        <Text>
                                            <StructuredText
                                                data={customer.solution}
                                                renderBlock={({ record }) => {
                                                    if (record.__typename === 'DatoCmsImageBlock') {
                                                        return (
                                                            <GatsbyImage
                                                                style={{ display: 'block' }}
                                                                image={record.image.gatsbyImageData}
                                                            />
                                                        );
                                                    }
                                                    return (
                                                        <>
                                                            <p>Don't know how to render a block!</p>
                                                            <pre>
                                                                {JSON.stringify(record, null, 2)}
                                                            </pre>
                                                        </>
                                                    );
                                                }}
                                            />
                                        </Text>
                                    </div>
                                </Grid>
                                {customer?.videoUrl?.providerUid && (
                                    <Grid style={{ width: '100%' }} item>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${customer.videoUrl.providerUid}`}
                                            title="YouTube video player"
                                            frameborder="0"
                                            width="100%"
                                            height="450px"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen></iframe>
                                    </Grid>
                                )}
                                <Grid item>
                                    <TechStackGrid2 container spacing={3}>
                                        <GridItem xs={12} sm={12} item>
                                            <Title style={{ color: color1, textAlign: 'left' }}>
                                                Tech Stack
                                            </Title>
                                        </GridItem>
                                        {customer.techStack.map((i) => (
                                            <GridItem xs={6} sm={6} item>
                                                <img
                                                    style={{ width: '64px', height: '64px' }}
                                                    src={i.picture.url}
                                                    alt={''}
                                                />
                                                <Name style={{ padding: '0px 20px' }}>
                                                    {i.name}
                                                </Name>
                                            </GridItem>
                                        ))}
                                    </TechStackGrid2>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Divider />
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                spacing={3}
                                direction={'column'}
                                justifyContent={'center'}
                                alignItems={'center'}>
                                <Grid item>
                                    <GatsbyImage
                                        style={{ width: '150px', height: '150px' }}
                                        image={customer.clientInfo.picture.gatsbyImageData}
                                        className="rounded-full mr-4"
                                        alt={''}
                                    />
                                </Grid>
                                <Grid item>
                                    <div className="prose prose-xl prose-blue">
                                        <Quote>"{customer.clientInfo.quote}"</Quote>
                                    </div>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={'column'} alignItems={'center'}>
                                        <Grid item>
                                            <Name>{customer.clientInfo.name}</Name>
                                        </Grid>
                                        <Grid item>
                                            <Role>{customer.clientInfo.role}</Role>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <TechStackGrid1 container spacing={3}>
                        <GridItem item>
                            <Title style={{ color: color1, textAlign: 'left' }}>Tech Stack</Title>
                        </GridItem>
                        {customer.techStack.map((i) => (
                            <GridItem item>
                                <img
                                    style={{ width: '64px', height: '64px' }}
                                    src={i.picture.url}
                                    alt={''}
                                />
                                <Name style={{ padding: '0px 20px' }}>{i.name}</Name>
                            </GridItem>
                        ))}
                    </TechStackGrid1>
                </Grid>
            </ContentContainer>
            <GetStarted />
            <Footer />
        </Container>
    );
}

export const query = graphql`
    query CustomerBySlug($id: String) {
        customer: datoCmsCustomer(id: { eq: $id }) {
            title
            description
            date
            challenge {
                value
            }
            solution {
                value
            }
            logo {
                url
            }
            techStack {
                name
                picture {
                    url
                }
            }
            clientInfo {
                name
                role
                quote
                picture {
                    gatsbyImageData(
                        layout: FIXED
                        width: 48
                        height: 48
                        imgixParams: { sat: -100 }
                    )
                }
            }
            videoUrl {
                providerUid
            }
        }
    }
`;
