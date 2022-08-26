import React from 'react';
import TopSection from '../components/top-section';
import Container from '../components/container';
import { graphql } from 'gatsby';
import TrustedBy from '../components/trusted-by';
import About from '../components/about';
import FeaturesContainer from '../components/features-container';

export default function Index({ data: { allPosts, site, blog } }) {
    return (
        <Container>
            <TopSection />
            <TrustedBy />
            <About />
            <FeaturesContainer />
        </Container>
    );
}

export const query = graphql`
    {
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        blog: datoCmsBlog {
            seo: seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
        }
        allPosts: allDatoCmsPost(sort: { fields: date, order: DESC }, limit: 20) {
            nodes {
                title
                slug
                excerpt
                date
                coverImage {
                    large: gatsbyImageData(width: 1500)
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
