import * as React from 'react';
import { font3, font6 } from '../../assets/globalStyles';
import razorops from '../../assets/images/logo.svg';
import img1 from '../../assets/images/about-page/img1.svg';
import img2 from '../../assets/images/about-page/img2.svg';
import img3 from '../../assets/images/about-page/img3.svg';
import img4 from '../../assets/images/about-page/img4.svg';
import img5 from '../../assets/images/about-page/img5.svg';
import img6 from '../../assets/images/about-page/img6.svg';
import img7 from '../../assets/images/about-page/img7.svg';
import img8 from '../../assets/images/about-page/img8.svg';
import img9 from '../../assets/images/about-page/img9.svg';

import styled from '@emotion/styled';
import { Grid, ImageList, ImageListItem, useMediaQuery } from '@mui/material';

const TopContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    padding: 60px 0px 40px 0px;

    @media (max-width: 600px) {
        padding: 20px 0px 0px 0px;
    }
`;

const Heading = styled('h1')`
    ${font3};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;
`;

const Text = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #293241;
`;

const Razorops = styled('img')`
    margin: 0px 10px;
    width: 202px;
    height: 33px;
`;

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
    };
}

const itemData = [
    {
        img: img1,
        rows: 2,
        cols: 2
    },
    {
        img: img2
    },
    {
        img: img3
    },
    {
        img: img4,
        rows: 2,
        cols: 2
    },
    {
        img: img5,
        rows: 2,
        cols: 2
    },

    {
        img: img6
    },
    {
        img: img7
    },

    {
        img: img8
    },
    {
        img: img9
    }
];
export default function Images() {
    const matches = useMediaQuery('(max-width:899px)');

    return (
        <TopContainer container spacing={8}>
            <Grid item md={12} lg={!2}>
                <Grid
                    container
                    spacing={2}
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Grid item>
                        <Text>We are here</Text>
                    </Grid>
                    <Grid item display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <Razorops src={razorops} alt="" /> <Heading>@ t-Hub</Heading>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} lg={12}>
                <ImageList variant="quilted" cols={matches ? 2 : 6} rowHeight={250}>
                    {itemData.map((item) => (
                        <ImageListItem
                            key={item.img}
                            cols={item.cols || 1}
                            rows={matches ? 2 : item.rows || 1}>
                            <img
                                {...srcset(item.img, 250, item.rows, item.cols)}
                                alt={''}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </TopContainer>
    );
}
