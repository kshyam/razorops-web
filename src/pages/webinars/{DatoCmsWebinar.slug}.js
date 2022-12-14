import React from 'react';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import Footer from '../../components/footer';
import styled from '@emotion/styled';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import bg from '../../assets/images/bg.png';
import moment from 'moment';
import { font1, font3, font6, font7 } from '../../assets/globalStyles';
import { CircularProgress, Grid } from '@mui/material';
import CoverImage from '../../components/common/cover-image';
import { StructuredText } from 'react-datocms';
import HubspotForm from 'react-hubspot-form';
import ShareButtons from '../../components/common/share-buttons';
import bgPattern from '../../assets/images/backgroundPattern.png';
import img from '../../assets/images/webinar.svg';

const TopContainer = styled('div')`
    background-image: ${(props) => `url(${props.background})`};
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 140px 140px 140px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 100px 100px 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 60px 40px;
    }
`;

const BottomContainer = styled('div')`
    background-image: url(${bgPattern});
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 140px 140px 140px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 100px 100px 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 60px 40px;
    }
`;

const HeadingContainer = styled(Grid)`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 120px;

    @media (max-width: 1199px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

const BottomGrid = styled(Grid)`
    padding: 40px;
    background: #f9fafe;
    border: 8px solid #deecff;
    border-radius: 28px;
`;

const FormContainer = styled('div')`
    position: relative;
    min-width: -webkit-fill-available;
    height: ${(props) => (props.form ? '800px' : '100%')};
    padding: 40px;
    border-radius: 12px;
    background: #f9fafe;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

const FormTitle = styled('h1')`
    ${font3};
    font-size: 28px;
    color: #031b4e;
    text-align: center;
`;

const CircularProgressDiv = styled('div')`
    position: absolute;
    top: 40%;
    left: 50%;
`;

const Heading = styled('h1')`
    ${font7};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 90px;
    color: #f9fafe;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 60px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
        padding: 20px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 40px;
        line-height: 77px;
        padding: 20px;
    }

    @media (max-width: 600px) {
        font-size: 32px;
        line-height: 48px;
        padding: 20px 0px;
    }
`;

const Title = styled('h1')`
    ${font3};
    font-size: 48px;
    line-height: 56px;
    color: ${(props) => (props.type === 'On-Demand' ? '#293241' : '#f9fafe')};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 44px;
        line-height: 50px;
    }

    @media (max-width: 1199px) {
        font-size: 32px;
        line-height: 37px;
    }
`;

const Desc = styled('div')`
    ${font1};
    font-size: 16px;
    line-height: 34px;
    color: ${(props) => (props.type === 'On-Demand' ? '#293241' : '#f9fafe')};
    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 22px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const TakeAways = styled('div')`
    padding: 20px 0px 0px 0px;
    ${font6};
    font-size: 24px;
    line-height: 28px;
    color: ${(props) => (props.type === 'On-Demand' ? '#293241' : '#f9fafe')};
`;

const DateText = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 36px;
    color: ${(props) => (props.type === 'On-Demand' ? '#293241' : '#f9fafe')};
`;

const TopicContainer = styled('div')`
    padding: 5px 30px;
    background: #002c9b;
    border-radius: 10px;
`;

const TopicText = styled('span')`
    ${font3};
    font-size: 20px;
    line-height: 40px;
    color: #f9fafe;
`;

const TextGrid = styled(Grid)`
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
`;

const BottomTitle = styled('h1')`
    ${font3};
    font-size: 28px;
    line-height: 34px;
    color: #031b4e;
`;

const BottomText = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 30px;
    color: #293241;
`;

export default function Webinars({ data: { site, webinar, morePosts } }) {
    const [form, setForm] = React.useState(true);
    const url = typeof window !== 'undefined' ? window.location.href : '';
    return (
        <Container>
            <HelmetDatoCms seo={webinar.seo} favicon={site.favicon} />
            {webinar.typeOfWebinar === 'On-Demand' && (
                <HeadingContainer container>
                    <Grid item>
                        <Heading>{'Razorops CI/CD Webinar'}</Heading>
                    </Grid>
                    <Grid item>
                        <img alt="" src={img} />
                    </Grid>
                </HeadingContainer>
            )}
            <TopContainer background={webinar.typeOfWebinar === 'On-Demand' ? bgPattern : bg}>
                <Grid container>
                    <TextGrid item xs={12} sm={12} md={7} lg={7}>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item>
                                <TopicContainer>
                                    <TopicText>Topic</TopicText>
                                </TopicContainer>
                            </Grid>
                            <Grid item>
                                <Title type={webinar.typeOfWebinar}>{webinar.title}</Title>
                            </Grid>
                            {webinar?.typeOfWebinar === 'Upcoming' && (
                                <Grid item>
                                    <DateText type={webinar.typeOfWebinar}>
                                        {moment(webinar.date).format('MMMM Do YYYY, h:mm A')}
                                    </DateText>
                                </Grid>
                            )}
                            <Grid item>
                                <TakeAways type={webinar.typeOfWebinar}>Takeaways</TakeAways>
                                <div className="prose prose-xl prose-blue">
                                    <Desc type={webinar.typeOfWebinar}>
                                        <StructuredText
                                            data={webinar.content}
                                            renderBlock={({ record }) => {
                                                if (record.__typename === 'DatoCmsImageBlock') {
                                                    return (
                                                        <GatsbyImage
                                                            image={record.image.gatsbyImageData}
                                                        />
                                                    );
                                                }
                                                return (
                                                    <>
                                                        <p>Don't know how to render a block!</p>
                                                        <pre>{JSON.stringify(record, null, 2)}</pre>
                                                    </>
                                                );
                                            }}
                                        />
                                    </Desc>
                                </div>
                            </Grid>
                            {webinar?.typeOfWebinar === 'On-Demand' && (
                                <Grid style={{ margin: '20px 0px 0px 0px' }} item>
                                    <ShareButtons title={webinar.title} url={url} />
                                </Grid>
                            )}
                        </Grid>
                    </TextGrid>
                    <Grid item display={'flex'} alignItems={'center'} xs={12} sm={12} md={5} lg={5}>
                        <FormContainer $form={form}>
                            {form === true && (
                                <CircularProgressDiv>
                                    <CircularProgress />
                                </CircularProgressDiv>
                            )}
                            <div className="mb-5">
                                <FormTitle>
                                    {webinar.typeOfWebinar === 'On-Demand'
                                        ? 'Get Access to On-Demand Webinar'
                                        : 'Register CI/CD Webinar'}
                                </FormTitle>
                            </div>
                            <HubspotForm
                                region="na1"
                                portalId="6775901"
                                formId="2889af18-9f85-4a7a-9ded-81d0b9ac0e61"
                                onSubmit={() => console.log('Submit!')}
                                onReady={() => setForm(false)}
                                loading={<div></div>}
                            />
                        </FormContainer>
                    </Grid>
                </Grid>
            </TopContainer>
            {webinar?.typeOfWebinar === 'Upcoming' && (
                <BottomContainer>
                    <BottomGrid container>
                        <Grid item display={'flex'} alignItems={'center'} md={6} lg={6}>
                            <CoverImage
                                type={'webinars'}
                                title={webinar.title}
                                fluid={webinar.coverImage?.gatsbyImageData}
                                slug={webinar.slug}
                            />
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <Grid style={{ margin: '0px 20px' }} container spacing={3}>
                                <Grid item>
                                    <BottomTitle>Who should attend this webinar</BottomTitle>
                                </Grid>
                                <Grid item>
                                    <ul style={{ listStyleType: 'disc', padding: '0px 10px' }}>
                                        <li style={{ padding: '10px' }}>
                                            <BottomText>
                                                Founders, CEOs, CTOs, and Managing heads of the
                                                organisations and teams who are planning to
                                                introduce DevOps-based solutions for their teams and
                                                organizations.
                                            </BottomText>
                                        </li>
                                        <li style={{ padding: '10px' }}>
                                            <BottomText>
                                                Organizations and developers seeking solutions to
                                                optimize their deployment workflow.
                                            </BottomText>
                                        </li>
                                        <li style={{ padding: '10px' }}>
                                            <BottomText>
                                                Developers and individuals who are keen on creative
                                                tech innovations to improve on delivering
                                                efficiently.
                                            </BottomText>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </Grid>
                    </BottomGrid>
                    <div className="mt-20">
                        <ShareButtons title={webinar.title} url={url} />
                    </div>
                </BottomContainer>
            )}

            <Footer />
        </Container>
    );
}

export const query = graphql`
    query WebinarBySlug($id: String) {
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        webinar: datoCmsWebinar(id: { eq: $id }) {
            seo: seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            title
            slug
            typeOfWebinar
            content {
                value
                blocks {
                    __typename
                    id: originalId
                    image {
                        gatsbyImageData(width: 700)
                    }
                }
            }
            date
            coverImage {
                gatsbyImageData(width: 1500)
            }
        }
        morePosts: allDatoCmsWebinar(
            sort: { fields: date, order: DESC }
            limit: 2
            filter: { id: { ne: $id } }
        ) {
            nodes {
                title
                slug
                date
                coverImage {
                    small: gatsbyImageData(width: 760)
                }
            }
        }
    }
`;
