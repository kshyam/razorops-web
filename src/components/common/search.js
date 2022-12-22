import React, { useState, useRef } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {
    Autocomplete,
    InputBase,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Popper
} from '@mui/material';
import { font1, font7 } from '../../assets/globalStyles';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const TextField = styled(InputBase)`
    background: #ffffff;
    width: 384px;
    height: 50px;
    ${font1};
    padding: 0px 10px;
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

    &:hover {
        background: #f5f5f5;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const SearchContainer = styled(Paper)`
    border: ${(props) => (props.detailsPage === true ? 'none' : '2px solid #bebebe')};
    display: flex;
    align-items: center;
    width: 400px;
    box-shadow: none;
    transition: all 0.5s;
    position: relative;
    overflow: hidden;
    height: 50px;
    border-bottom: ${(props) => (props.show === true ? '2px solid #bebebe' : 'none')};
    border-radius: ${(props) => (props.show === true ? '0px' : '10px')};
`;

const Icon = styled(IconButton)`
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
    let textInput = useRef(null);
    const [show, setShow] = useState(false);
    const [focus, setFocus] = useState(false);

    const onFocus = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
        setShow(false);
    };

    return (
        <>
            <SearchContainer detailsPage={detailsPage} show={show}>
                <Autocomplete
                    id="free-solo-2-demo"
                    freeSolo
                    onInputChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    getOptionLabel={(option) => JSON.stringify(option)}
                    options={searchResults || []}
                    PopperComponent={(props) => (
                        <Popper {...props} style={{ width: '400px' }} placement="bottom-start" />
                    )}
                    renderOption={(props, option) => {
                        return (
                            <>
                                <li style={{ padding: 0 }} {...props}>
                                    <NavLink to={`/${type}/${option.slug}`}>
                                        <Item alignItems="flex-start">
                                            {option?.author && (
                                                <ListItemAvatar>
                                                    <GatsbyImage
                                                        style={{ borderRadius: '10px' }}
                                                        image={
                                                            option?.author?.picture?.gatsbyImageData
                                                        }
                                                        className="w-12 h-12 rounded-full mr-4"
                                                        alt={''}
                                                    />
                                                </ListItemAvatar>
                                            )}
                                            <ListItemText
                                                primary={
                                                    <React.Fragment>
                                                        <Title>
                                                            {getHighlightedText(
                                                                option.title,
                                                                searchQuery
                                                            )}
                                                        </Title>
                                                    </React.Fragment>
                                                }
                                                secondary={
                                                    <React.Fragment>
                                                        <Desc>
                                                            {getHighlightedText(
                                                                option.description,
                                                                searchQuery
                                                            )}
                                                        </Desc>
                                                    </React.Fragment>
                                                }
                                            />
                                        </Item>
                                    </NavLink>
                                </li>
                            </>
                        );
                    }}
                    renderInput={(params) => {
                        return detailsPage ? (
                            show && (
                                <TextField
                                    {...params.InputProps}
                                    {...params}
                                    placeholder={label}
                                    inputRef={textInput}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                />
                            )
                        ) : (
                            <TextField {...params.InputProps} {...params} placeholder={label} />
                        );
                    }}
                />
                {detailsPage ? (
                    <Icon
                        onClick={() => {
                            setShow(!show);
                            setTimeout(() => {
                                textInput.current.focus();
                            }, 100);
                        }}
                        disabled={focus}
                        type="button"
                        sx={{ p: '10px', m: '0px 0px 0px 40px' }}
                        aria-label="search">
                        <SearchIcon />
                    </Icon>
                ) : (
                    !searchQuery && (
                        <Icon type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </Icon>
                    )
                )}
            </SearchContainer>
        </>
    );
};

export default SearchBar;
