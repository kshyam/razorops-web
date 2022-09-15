import React from 'react';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import MoreStories from '../../components/blog/more-stories';
import PostBody from '../../components/blog/post-body';
import PostHeader from '../../components/blog/post-header';
import SectionSeparator from '../../components/blog/section-separator';
import { HelmetDatoCms } from 'gatsby-source-datocms';

export default function Post({ data: { site, guide, moreguides } }) {
    return (
        <Container>
            <HelmetDatoCms seo={guide.seo} favicon={site.favicon} />
            <article>
                <PostHeader
                    title={guide.title}
                    coverImage={guide.coverImage}
                    date={guide.date}
                    author={guide.author}
                />
                <PostBody content={guide.content} />
            </article>
            <SectionSeparator />
            {moreguides.nodes.length > 0 && <MoreStories posts={moreguides.nodes} />}
        </Container>
    );
}

export const query = graphql`
    query GuideBySlug($id: String) {
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        guide: datoCmsHowToGuide(id: { eq: $id }) {
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
        moreguides: allDatoCmsHowToGuide(
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
