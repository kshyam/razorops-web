import React from 'react';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import PostBody from '../../components/blog/post-body';
import PostHeader from '../../components/blog/post-header';
import Footer from '../../components/footer';
import styled from '@emotion/styled';

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
export default function Post({ data: { site, post, morePosts } }) {
    return (
        <Container>
            <MainContainer>
                <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                />
                <PostBody content={post.content} />
            </MainContainer>
            <Footer />
        </Container>
    );
}

export const query = graphql`
    query PostBySlug($id: String) {
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        post: datoCmsPost(id: { eq: $id }) {
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
            author {
                name
                picture {
                    gatsbyImageData(
                        layout: FIXED
                        width: 48
                        height: 48
                        imgixParams: { sat: -100 }
                    )
                }
            }
        }
        morePosts: allDatoCmsPost(
            sort: { fields: date, order: DESC }
            limit: 2
            filter: { id: { ne: $id } }
        ) {
            nodes {
                title
                slug
                excerpt
                date
                coverImage {
                    small: gatsbyImageData(width: 760)
                }
                author {
                    name
                    picture {
                        gatsbyImageData(
                            layout: FIXED
                            width: 48
                            height: 48
                            imgixParams: { sat: -100 }
                        )
                    }
                }
            }
        }
    }
`;
