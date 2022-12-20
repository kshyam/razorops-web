import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {
    Button,
    InputBase,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper
} from '@mui/material';
import { font1, font6, font7 } from '../../assets/globalStyles';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const TextField = styled(InputBase)`
    position: absolute;
    right: 0%;
    width: 400px;
    padding: 20px;
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #000000;
    text-align: left;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 1199px) {
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: 599px) {
        font-size: 12px;
        line-height: 20px;
    }
`;

const Title = styled('span')`
    ${font7};
    font-size: 16px;
    line-height: 27px;
    color: #18204c;

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: 14px;
    line-height: 24px;
    color: #5b5b5b;

    @media (max-width: 1199px) {
        font-size: 12px;
        line-height: 24px;
    }
`;

const Item = styled(ListItem)`
    padding: 10px 20px;
    background: #ffffff;
`;

const LoadMore = styled(Button)`
    background: #ffffff;
    padding: 10px 0px;
    text-transform: none;
    min-width: -webkit-fill-available;

    &:hover {
        background: #ffffff;
    }
`;

const LoadMoreText = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 29px;
    text-align: center;
    color: #0069ff;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const SearchContainer = styled(Paper)`
    padding: 0px 20px;
    border: ${(props) => (props.detailsPage === true ? 'none' : '2px solid #bebebe')};
    display: flex;
    align-items: center;
    border-radius: 10px;
    width: ${(props) => (props.detailsPage === true ? '50px' : '400px')};
    box-shadow: none;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    height: 50px;
    &:hover {
        width: 400px;
        border-bottom: ${(props) => (props.detailsPage === true ? '2px solid #bebebe' : 'none')};
        border-radius: ${(props) => (props.detailsPage === true ? '0px' : '10px')};
    }
`;

const SearchIconButton = styled(IconButton)`
    position: absolute;
    right: 0;
`;

function getHighlightedText(text, highlight) {
    const parts = text?.split(new RegExp(`(${highlight})`, 'gi'));
    return (
        <span>
            {parts?.map((part, i) => (
                <span
                    key={i}
                    style={
                        part.toLowerCase() === highlight.toLowerCase()
                            ? { fontWeight: 'bold', color: '#0069ff' }
                            : {}
                    }>
                    {part}
                </span>
            ))}
        </span>
    );
}

const SearchBar = ({ detailsPage, searchQuery, setSearchQuery, label, type, searchResults }) => {
    const [index, setIndex] = useState(5);
    const initialResults = searchResults?.slice(0, index);

    const loadMore = () => {
        setIndex(index + 5);
    };

    useEffect(() => {
        setIndex(5);
    }, [searchQuery]);

    return (
        <>
            <SearchContainer detailsPage={detailsPage} component="form">
                <TextField
                    fullWidth
                    id="search-bar"
                    className="text"
                    value={searchQuery}
                    onInput={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    placeholder={label}
                />
                <SearchIconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </SearchIconButton>
            </SearchContainer>
            {initialResults && (
                <List
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        width: '100%',
                        maxWidth: 400,
                        boxShadow: '0px 4px 100px rgba(0, 0, 0, 0.06)',
                        bgcolor: '#ffffff',
                        borderRadius: '10px'
                    }}>
                    {initialResults.map((i) => (
                        <NavLink to={`/${type}/${i.slug}`}>
                            <Item alignItems="flex-start">
                                {i?.author && (
                                    <ListItemAvatar>
                                        <GatsbyImage
                                            style={{ borderRadius: '10px' }}
                                            image={i?.author?.picture?.gatsbyImageData}
                                            className="w-12 h-12 rounded-full mr-4"
                                            alt={''}
                                        />
                                    </ListItemAvatar>
                                )}
                                <ListItemText
                                    primary={
                                        <React.Fragment>
                                            <Title>
                                                {getHighlightedText(i.title, searchQuery)}
                                            </Title>
                                        </React.Fragment>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Desc>
                                                {getHighlightedText(i.description, searchQuery)}
                                            </Desc>
                                        </React.Fragment>
                                    }
                                />
                            </Item>
                        </NavLink>
                    ))}
                    {searchResults.length !== initialResults.length && (
                        <LoadMore onClick={loadMore}>
                            <LoadMoreText>Load More</LoadMoreText>
                        </LoadMore>
                    )}
                    {searchResults.length === 0 && (
                        <Item>
                            <ListItemText
                                style={{ textAlign: 'center' }}
                                primary={
                                    <React.Fragment>
                                        <Title>No results found</Title>
                                    </React.Fragment>
                                }
                            />
                        </Item>
                    )}
                </List>
            )}
        </>
    );
};

export default SearchBar;
