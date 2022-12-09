import React from 'react';
import { graphql, Link } from 'gatsby';
import Container from '../../components/container';
import PostBody from '../../components/common/post-body';
import PostHeader from '../../components/common/post-header';
import Footer from '../../components/footer';
import styled from '@emotion/styled';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import HomeIcon from '@mui/icons-material/Home';
import { Grid, IconButton } from '@mui/material';
import { color2, font1 } from '../../assets/globalStyles';
import ShareButtons from '../../components/common/share-buttons';

const MainContainer = styled('div')`
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 20px 80px 80px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px 50px 50px 50px;
    }

    @media (min-width: 1535px) {
        padding: 40px 140px 80px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 30px 100px 80px 100px;
    }

    @media (max-width: 600px) {
        padding: 20px 40px 40px 40px;
    }
`;

const Text = styled('span')`
    ${font1};
    font-size: 14px;
    line-height: 27px;
    color: #002c9b;
    text-align: left;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;
export default function Blog({ data: { site, blog, morePosts } }) {
    const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Container>
            <HelmetDatoCms seo={blog.seo} favicon={site.favicon} />
            <MainContainer>
                <Grid container alignItems={'center'}>
                    <Grid item>
                        <NavLink to="/">
                            <IconButton>
                                <HomeIcon style={{ color: '#000000' }} />
                            </IconButton>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink to="/blog">
                            <Text> / Blog / </Text>
                        </NavLink>
                        <Text style={{ color: color2 }}>{blog.title}</Text>
                    </Grid>
                </Grid>
                <PostHeader
                    type={'blog'}
                    title={blog.title}
                    coverImage={blog.coverImage}
                    date={blog.date}
                    author={blog.author}
                />
                <PostBody content={blog.content} />
                <div className="flex justify-center mt-20 m-10 max-w-4xl mx-auto">
                    <ShareButtons title={blog.title} url={url} />
                </div>
            </MainContainer>
            <Footer />
        </Container>
    );
}

export const query = graphql`
    query BlogBySlug($id: String) {
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        blog: datoCmsBlog(id: { eq: $id }) {
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
                role
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
        morePosts: allDatoCmsBlog(
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
