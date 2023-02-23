import React from 'react';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import Footer from '../../components/footer';
import styled from '@emotion/styled';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import bg from '../../assets/images/bg.png';
import { font1, font3 } from '../../assets/globalStyles';
import { Grid } from '@mui/material';
import { StructuredText } from 'react-datocms';

const TopContainer = styled('div')`
    background-image: url(${bg});
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

const FormContainer = styled('div')`
    display: flex;
    justify-content: center;
    position: relative;
    min-width: -webkit-fill-available;
    height: 700px;
    padding: 40px;
    border-radius: 12px;
    background: #ffffff;
    box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`;

const Title = styled('h1')`
    ${font3};
    font-size: 48px;
    line-height: 56px;
    color: #f9fafe;

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
    color: #f9fafe;
    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 22px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const TextGrid = styled(Grid)`
    padding: 40px 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 599px) {
        padding: 40px 0px;
    }
`;

const Form = styled('iframe')`
    width: 360px;
    height: 620px;

    @media (min-width: 1200px) and (max-width: 1535px) {
        width: 500px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        width: 500px;
    }

    @media (min-width: 1535px) {
        width: 600px;
    }

    @media (max-width: 600px) {
        width: 270px;
    }
`;

export default function Ebooks({ data: { site, ebook } }) {
    return (
        <Container>
            <HelmetDatoCms seo={ebook.seo} favicon={site.favicon} />
            <TopContainer>
                <Grid container>
                    <TextGrid item xs={12} sm={12} md={6} lg={7}>
                        <Grid container spacing={2} alignItems={'center'}>
                            <Grid item>
                                <Title>{ebook.title}</Title>
                            </Grid>

                            <Grid item>
                                <div className="prose prose-xl prose-blue">
                                    <Desc>
                                        <StructuredText
                                            data={ebook.content}
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
                        </Grid>
                    </TextGrid>
                    <Grid item display={'flex'} alignItems={'center'} xs={12} sm={12} md={6} lg={5}>
                        <FormContainer>
                            <Form
                                scrolling="no"
                                target="_parent"
                                src="https://app.blinkcrm.in/forms/ffd68802-ecdf-48ef-9ed3-860e64242726?output=embed"></Form>
                        </FormContainer>
                    </Grid>
                </Grid>
            </TopContainer>
            <Footer />
        </Container>
    );
}

export const query = graphql`
    query EbookBySlug($id: String) {
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        ebook: datoCmsEbook(id: { eq: $id }) {
            seo: seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            title
            slug
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
    }
`;
