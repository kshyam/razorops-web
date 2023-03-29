import React from 'react';
import { graphql } from 'gatsby';
import Container from '../../components/container';
import MoreStories from '../../components/common/more-stories';
import PostBody from '../../components/common/post-body';
import PostHeader from '../../components/common/post-header';
import SectionSeparator from '../../components/common/section-separator';
import { GatsbyImage } from 'gatsby-plugin-image';
import cn from 'classnames';
import PostTitle from '../../components/common/post-title';

export default function Post({ data: { site, guide, moreguides } }) {
    return (
        <Container>
            <article className="mt-50">
                <PostTitle>{`Integrate RazorOps with ${guide.title} `}</PostTitle>
                <GatsbyImage
                    style={{ width: '50px', height: '50px' }}
                    image={guide.coverImage.small}
                    alt={`Cover Image for ${guide.title}`}
                    className={cn('shadow-small', {
                        'hover:shadow-medium transition-shadow duration-200': guide.slug
                    })}
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
                        gatsbyImageData(layout: FULL_WIDTH)
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
            sort: { date: DESC }
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
