import React, { useState } from 'react';
import Container from '../components/container';
import HeroPost from '../components/common/hero-post';
import MoreStories from '../components/common/more-stories';
import { graphql, Link } from 'gatsby';
import SearchBar from '../components/common/search';
import { useFlexSearch } from 'react-use-flexsearch';
import styled from '@emotion/styled';
import bgPattern from '../assets/images/backgroundPattern.png';
import bg from '../assets/images/bg.png';
import { font1, font5 } from '../assets/globalStyles';
import { Grid, IconButton } from '@mui/material';
import Footer from '../components/footer';
import GetStarted from '../components/get-started';
import SignUp from '../components/sign-up';
import HomeIcon from '@mui/icons-material/Home';
import PageHead from '../components/common/page-head';

const MainContainer = styled('div')`
    position: relative;
    overflow: hidden;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 20px 80px 20px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px 50px 20px 50px;
    }

    @media (min-width: 1535px) {
        padding: 80px 140px 50px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 30px 100px 50px 100px;
    }

    @media (max-width: 600px) {
        padding: 20px 40px 20px 40px;
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
    ${font5};
    font-size: 60px;
    line-height: 90px;
    color: #ffffff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 50px;
        line-height: 77px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 39px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 29px;
        line-height: 32px;
    }

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
    }
`;

const TextContainer = styled(Grid)`
    display: flex;
    align-items: center;
    padding: 40px 0px 40px 0px;

    @media (max-width: 1199px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

const SearchGrid = styled(Grid)`
    display: flex;
    justify-content: flex-end;

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

const Text = styled('span')`
    ${font1};
    font-size: 14px;
    line-height: 27px;
    color: #ffffff;
    text-align: left;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

export const Head = ({ data, ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Razorops News and Updates',
                description:
                    'Learn how to achieve continuous delivery to Kubernetes with Helm, Istio, Selenium testings, security testing, performance testing, and more.'
            }}
        />
    );
};

export default function NewsAndUpdates({
    data: {
        localSearchNews: { index, store },
        allNewsAndUpdates
    }
}) {
    const { search } = typeof window !== 'undefined' && window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const results = useFlexSearch(searchQuery, index, store);
    const posts = allNewsAndUpdates.nodes;
    const allPostsData = posts.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });
    return (
        <Container>
            <MainContainer>
                <Grid container alignItems={'center'}>
                    <Grid item>
                        <NavLink to="/">
                            <IconButton>
                                <HomeIcon style={{ color: '#ffffff' }} />
                            </IconButton>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <Text>/ News and updates</Text>
                    </Grid>
                </Grid>

                <TextContainer container>
                    <Grid xs={12} md={6} item display={'flex'} flexDirection={'column'}>
                        <Title>{'News and Updates'}</Title>
                        <Sub>{'Simplest Container Native CI/CD Platform'}</Sub>
                    </Grid>
                    <SearchGrid xs={12} md={6} item>
                        <SearchBar
                            label={'Search in News and Updates'}
                            type={'news-and-updates'}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            searchResults={searchQuery ? results : null}
                        />
                    </SearchGrid>
                </TextContainer>
                {allPostsData.length > 0 && (
                    <HeroPost
                        type={'news-and-updates'}
                        title={allPostsData[0].title}
                        coverImage={allPostsData[0].coverImage}
                        date={allPostsData[0].date}
                        author={allPostsData[0].author}
                        slug={allPostsData[0].slug}
                        description={allPostsData[0].description}
                    />
                )}
                {allPostsData.length === 0 && (
                    <NoResultsGrid container>
                        <Title>{'No results found'}</Title>
                    </NoResultsGrid>
                )}
            </MainContainer>
            {allPostsData.length > 1 && (
                <PostsContainer>
                    <MoreStories type={'news-and-updates'} posts={allPostsData.slice(1)} />
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
        localSearchNews {
            index
            store
        }
        allNewsAndUpdates: allDatoCmsNewsAndUpdate(sort: { date: DESC }, limit: 20) {
            nodes {
                title
                slug
                description
                date
                content {
                    value
                }
                coverImage {
                    large: gatsbyImageData(width: 1500)
                    small: gatsbyImageData(width: 760)
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
    }
`;
