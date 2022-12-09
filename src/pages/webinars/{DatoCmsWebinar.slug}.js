import React from 'react';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import PostBody from '../../components/common/post-body';
import PostHeader from '../../components/common/post-header';
import Footer from '../../components/footer';
import styled from '@emotion/styled';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const MainContainer = styled('div')`
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px 50px 50px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 140px 100px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 100px 100px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 40px 40px 40px;
    }
`;
export default function Webinars({ data: { site, webinar, morePosts } }) {
    return (
        <Container>
            <HelmetDatoCms seo={webinar.seo} favicon={site.favicon} />
            <MainContainer>
                <PostHeader
                    type={'webinars'}
                    title={webinar.title}
                    coverImage={webinar.coverImage}
                    date={webinar.date}
                />
                <PostBody content={webinar.content} />
            </MainContainer>
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
                description
                date
                coverImage {
                    small: gatsbyImageData(width: 760)
                }
            }
        }
    }
`;
