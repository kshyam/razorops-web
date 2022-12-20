import React, { useState } from 'react';
import Container from '../components/container';

import { graphql } from 'gatsby';
import SearchBar from '../components/common/search';
import { useFlexSearch } from 'react-use-flexsearch';
import styled from '@emotion/styled';
import bgPattern from '../assets/images/backgroundPattern.png';
import bg from '../assets/images/bg.png';
import { font1, font7 } from '../assets/globalStyles';
import { Grid } from '@mui/material';
import Footer from '../components/footer';
import GetStarted from '../components/get-started';
import SignUp from '../components/sign-up';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Upcoming from '../components/webinars/upcoming';
import OnDemand from '../components/webinars/on-demand';

const MainContainer = styled('div')`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 80px 80px 40px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 20px 50px;
    }

    @media (min-width: 1535px) {
        padding: 140px 140px 50px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 100px 100px 50px 100px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 20px 40px;
    }
`;

const PostsContainer = styled('div')`
    background-image: url(${bgPattern});
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 60px 80px 40px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px 50px 20px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 140px 50px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 60px 100px 50px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 40px 20px 40px;
    }
`;

const Title = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #f9fafe;

    @media (max-width: 599px) {
        font-size: 24px;
        line-height: 27px;
    }
`;

const Sub = styled('span')`
    padding: 20px 0px 0px 0px;
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #ffffff;
    text-align: left;
    white-space: pre-wrap;

    @media (min-width: 1535px) {
        white-space: pre-wrap;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 1199px) {
        padding: 10px 0px 0px 0px;
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: 599px) {
        padding: 10px 0px 0px 0px;
        font-size: 12px;
        line-height: 20px;
        white-space: inherit;
    }
`;

const TextContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 0px 80px 0px;

    @media (max-width: 1199px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 0px 0px 40px 0px;
    }
`;

const SearchGrid = styled(Grid)`
    @media (max-width: 1199px) {
        padding: 20px;
    }
`;

const NoResultsGrid = styled(Grid)`
    padding: 100px;
    display: flex;
    justify-content: center;
    @media (max-width: 1199px) {
        padding: 0px 0px 40px 0px;
    }
`;

export default function Webinars({
    data: {
        localSearchWebinar: { index, store },
        allWebinars,
        site,
        webinar
    }
}) {
    const { search } = typeof window !== 'undefined' && window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const results = useFlexSearch(searchQuery, index, store);
    const posts = allWebinars.nodes;

    const allPostsData = posts;
    const onDemandWebinars = allPostsData.slice(1);

    return (
        <Container>
            <HelmetDatoCms seo={webinar.seo} favicon={site.favicon} />
            <MainContainer>
                <TextContainer>
                    <Grid item display={'flex'} flexDirection={'column'}>
                        <Title>{'Webinars'}</Title>
                        <Sub>
                            {
                                'Get the most out of RazorOps CI/CD with one of our free webinars. Whether you’re\nbrand new DevOps or an experienced developer, we have the perfect workshops for you.'
                            }
                        </Sub>
                    </Grid>
                    <SearchGrid item>
                        <SearchBar
                            label={'Search in Webinars'}
                            type={'webinars'}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            searchResults={searchQuery ? results : null}
                        />
                    </SearchGrid>
                </TextContainer>
                {allPostsData.length > 0 && <Upcoming webinars={allPostsData[0]} />}
                {allPostsData.length === 0 && (
                    <NoResultsGrid container>
                        <Title>{'No results found'}</Title>
                    </NoResultsGrid>
                )}
            </MainContainer>
            {onDemandWebinars.length > 0 && (
                <PostsContainer>
                    <OnDemand onDemandWebinars={onDemandWebinars} />
                </PostsContainer>
            )}
            <GetStarted />
            <SignUp />
            <Footer />
        </Container>
    );
}

export const query = graphql`
    {
        localSearchWebinar {
            index
            store
        }
        site: datoCmsSite {
            favicon: faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
            }
        }
        webinar: datoCmsWebinar {
            seo: seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
        }
        allWebinars: allDatoCmsWebinar(sort: { fields: date, order: DESC }, limit: 20) {
            nodes {
                title
                slug
                date
                content {
                    value
                }
                coverImage {
                    large: gatsbyImageData(width: 1500)
                    small: gatsbyImageData(width: 760)
                }
            }
        }
    }
`;
