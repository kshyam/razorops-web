import * as React from 'react';
import { font5, font6, font8 } from '../../assets/globalStyles';
import styled from '@emotion/styled';
import { Card, CardContent, CardMedia, Grid } from '@mui/material';
import linkedin from '../../assets/images/about-page/team/linkedin.svg';
import shyam from '../../assets/images/about-page/team/shyam.jpeg';
import dinesh from '../../assets/images/about-page/team/dinesh.jpeg';
import vinay from '../../assets/images/about-page/team/vinay.jpeg';
import deepak from '../../assets/images/about-page/team/deepak.jpeg';

const MainContainer = styled('div')`
    margin: 50px 0px 0px 0px;
    background: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.8) -1.11%,
        rgba(240, 238, 255, 0.8) 109.65%
    );

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 40px 80px 100px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 20px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 50px 140px 120px 140px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 50px 100px 120px 100px;
    }

    @media (max-width: 600px) {
        padding: 20px 40px 60px 40px;
    }
`;

const Title = styled('span')`
    ${font5};
    font-size: 48px;
    line-height: 40px;
    color: #18204c;

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

const Name = styled('span')`
    ${font6};
    font-size: 18px;
    line-height: 29px;
    color: #000000;

    @media (max-width: 899px) {
        font-size: 15px;
        line-height: 22px;
    }
`;

const Desc = styled('span')`
    ${font8};
    font-size: 12px;
    line-height: 20px;
    color: #000000;
`;

const CardContainer = styled(Card)`
    box-shadow: 0px 4px 20px -6px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

const team = [
    {
        img: shyam,
        name: 'Shyam Mohan',
        desc: 'CEO',
        url: 'https://www.linkedin.com/in/shyam-mohan-k/'
    },
    {
        img: dinesh,
        name: 'Dinesh Yadav',
        desc: 'Co-Founder',
        url: 'https://www.linkedin.com/in/dineshsinghyadav/'
    },
    {
        img: vinay,
        name: 'Vinay Kumar',
        desc: 'Solutions Engineer',
        url: 'https://www.linkedin.com/in/vinay-kumar-iiith/'
    },
    {
        img: deepak,
        name: 'Deepak Vig',
        desc: 'Solutions Engineer',
        url: 'https://www.linkedin.com/in/deepakvig/'
    },
    {
        img: shyam,
        name: 'Shyam Mohan',
        desc: 'CEO',
        url: 'https://www.linkedin.com/in/shyam-mohan-k/'
    },
    {
        img: dinesh,
        name: 'Dinesh Yadav',
        desc: 'Co-Founder',
        url: 'https://www.linkedin.com/in/dineshsinghyadav/'
    },
    {
        img: vinay,
        name: 'Vinay Kumar',
        desc: 'Solutions Engineer',
        url: 'https://www.linkedin.com/in/vinay-kumar-iiith/'
    },
    {
        img: deepak,
        name: 'Deepak Vig',
        desc: 'Solutions Engineer',
        url: 'https://www.linkedin.com/in/deepakvig/'
    }
];

export default function Team() {
    return (
        <MainContainer>
            <Grid style={{ padding: '20px' }} container justifyContent={'center'}>
                <Grid item>
                    <Title>{'Our Executive'}</Title>
                    <Title style={{ color: '#345EEF' }}>{' Team'}</Title>
                </Grid>
            </Grid>
            <Grid style={{ padding: '40px 0px 0px 0px' }} container spacing={3}>
                {team.map((i) => (
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <CardContainer>
                            <CardMedia component="img" height="140" image={i.img} alt="" />
                            <CardContent>
                                <Grid container justifyContent={'space-between'}>
                                    <Grid item display={'flex'} flexDirection={'column'}>
                                        <Name>{i.name}</Name>
                                        <Desc>{i.desc}</Desc>
                                    </Grid>
                                    <Grid item display={'flex'} alignItems={'center'}>
                                        <a href={i.url} target="_blank">
                                            <img src={linkedin} alt="" />
                                        </a>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardContainer>
                    </Grid>
                ))}
            </Grid>
        </MainContainer>
    );
}
