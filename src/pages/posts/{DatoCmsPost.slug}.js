import React from 'react';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import MoreStories from '../../components/blog/more-stories';
import PostBody from '../../components/blog/post-body';
import PostHeader from '../../components/blog/post-header';
import SectionSeparator from '../../components/blog/section-separator';
import { HelmetDatoCms } from 'gatsby-source-datocms';

export default function Post({ data: { site, post, morePosts } }) {
    return (
        <Container>
            <HelmetDatoCms seo={post.seo} favicon={site.favicon} />
            <article>
                <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                />
                <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.nodes.length > 0 && <MoreStories posts={morePosts.nodes} />}
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
