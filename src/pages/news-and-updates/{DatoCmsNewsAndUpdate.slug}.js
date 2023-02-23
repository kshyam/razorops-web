import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import Container from '../../components/container';
import PostBody from '../../components/common/post-body';
import PostHeader from '../../components/common/post-header';
import Footer from '../../components/footer';
import styled from '@emotion/styled';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { Grid, IconButton } from '@mui/material';
import { color2, font1 } from '../../assets/globalStyles';
import HomeIcon from '@mui/icons-material/Home';
import ShareButtons from '../../components/common/share-buttons';
import SearchBar from '../../components/common/search';
import { useFlexSearch } from 'react-use-flexsearch';

const MainContainer = styled('div')`
    position: relative;
    overflow: hidden;
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
    text-transform: capitalize;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const SearchGrid = styled(Grid)`
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1199px) {
        padding: 20px;
    }
`;
export default function NewsAndUpdates({
    data: {
        localSearchNews: { index, store },
        site,
        newsAndUpdates,
        morePosts
    }
}) {
    const { search } = typeof window !== 'undefined' && window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const results = useFlexSearch(searchQuery, index, store);
    const url = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Container>
            <HelmetDatoCms seo={newsAndUpdates.seo} favicon={site.favicon} />
            <MainContainer>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Grid container alignItems={'center'}>
                            <Grid item>
                                <NavLink to="/">
                                    <IconButton>
                                        <HomeIcon style={{ color: '#000000' }} />
                                    </IconButton>
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="/news-and-updates">
                                    <Text> / News and updates / </Text>
                                </NavLink>
                                <Text style={{ color: color2 }}>{newsAndUpdates.title}</Text>
                            </Grid>
                        </Grid>
                    </Grid>
                    <SearchGrid item xs={12} md={4}>
                        <SearchBar
                            detailsPage={true}
                            label={'Search in News and Updates'}
                            type="news-and-updates"
                            searchResults={searchQuery ? results : null}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />
                    </SearchGrid>
                </Grid>
                <PostHeader
                    type={'news-and-updates'}
                    title={newsAndUpdates.title}
                    coverImage={newsAndUpdates.coverImage}
                    date={newsAndUpdates.date}
                    author={newsAndUpdates.author}
                />
                <PostBody content={newsAndUpdates.content} />
                <div className="flex justify-center mt-20 m-10 max-w-4xl mx-auto">
                    <ShareButtons title={newsAndUpdates.title} url={url} />
                </div>
            </MainContainer>
            <Footer />
        </Container>
    );
}

export const query = graphql`
    query NewsAndUpdatesBySlug($id: String) {
        localSearchNews {
            index
            store
        }
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        newsAndUpdates: datoCmsNewsAndUpdate(id: { eq: $id }) {
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
    }
`;
