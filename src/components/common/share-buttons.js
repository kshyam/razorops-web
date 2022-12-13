import React from 'react';
import styled from '@emotion/styled';
import { font7 } from '../../assets/globalStyles';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share';
import { Grid } from '@mui/material';

const Text = styled('span')`
    ${font7};
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: ${(props) => (props.whiteTitle === true ? '#ffffff' : ' #031b4e')};
`;

const ShareButtons = ({ whiteTitle, title, url }) => {
    return (
        <Grid container spacing={3} direction={'column'} alignItems={'center'}>
            <Grid item>
                <Text whiteTitle={whiteTitle}>Share with your friends</Text>
            </Grid>
            <Grid item>
                <Grid container spacing={3}>
                    <Grid item>
                        <FacebookShareButton url={url} title={title}>
                            <FacebookIcon size={40} round={true} />
                        </FacebookShareButton>
                    </Grid>
                    <Grid item>
                        <TwitterShareButton url={url} title={title}>
                            <TwitterIcon size={40} round={true} />
                        </TwitterShareButton>
                    </Grid>
                    <Grid item>
                        <LinkedinShareButton url={url} title={title}>
                            <LinkedinIcon size={40} round={true} />
                        </LinkedinShareButton>
                    </Grid>
                    <Grid item>
                        <WhatsappShareButton url={url} title={title}>
                            <WhatsappIcon size={40} round={true} />
                        </WhatsappShareButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default ShareButtons;
