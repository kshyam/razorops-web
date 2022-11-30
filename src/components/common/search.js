import React from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, Paper } from '@mui/material';
import { font1 } from '../../assets/globalStyles';
import styled from '@emotion/styled';

const TextField = styled(InputBase)`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #000000;
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

const SearchBar = ({ searchQuery, setSearchQuery, label }) => (
    <Paper
        component="form"
        sx={{
            p: '5px 20px',
            border: '1px solid #BEBEBE',
            display: 'flex',
            alignItems: 'center',
            width: 400
        }}>
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
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>
);

export default SearchBar;
