import React from 'react';
import { Grid, IconButton } from '@mui/material';
import img from '../assets/images/top-bar.png';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import styled from '@emotion/styled';
import { font1, fontSize16 } from '../assets/globalStyles';

const BG = styled('div')`
    width: 100%;
    background: #0069ff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled('span')`
    padding: 5px;
    ${font1};
    font-size: ${fontSize16};
    line-height: 16px;
    text-align: center;
    color: #ffffff;

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 16px;
    }

    @media (max-width: 400px) {
        font-size: 12px;
        line-height: 16px;
    }
`;

const MenuIconButton = styled(IconButton)`
    @media (min-width: 1199px) {
        display: none;
    }
`;

export default function Topbar({ handleTopBar }) {
    return (
        <BG>
            <Grid container justifyContent={'space-between'} alignItems={'center'}>
                <Grid item />
                <Grid item display={'flex'} alignItems={'center'}>
                    <img style={{ height: '24px', width: '24px' }} alt="" src={img} />
                    <Text>
                        <a href="https://dashboard.razorops.com/users/sign_up" target="_blank">
                            <b>Sign Up </b>
                        </a>
                        <span>to test your code for</span>
                        <a href="https://dashboard.razorops.com/users/sign_up" target="_blank">
                            <b> 30 days free trial.</b>
                        </a>
                    </Text>
                </Grid>
                <Grid item display={'flex'} alignItems={'center'}>
                    <IconButton onClick={handleTopBar} color="inherit" aria-label="menu">
                        <HighlightOffIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </BG>
    );
}
