import * as React from 'react';
import { font6, font8 } from '../../assets/globalStyles';
import styled from '@emotion/styled';
import { Card, Grid } from '@mui/material';
import linkedin from '../../assets/images/about-page/team/linkedin.png';
import shyam from '../../assets/images/about-page/team/shyam.jpeg';
import dinesh from '../../assets/images/about-page/team/dinesh.jpeg';
import vinay from '../../assets/images/about-page/team/vinay.jpeg';
import deepak from '../../assets/images/about-page/team/deepak.jpeg';
import mike from '../../assets/images/about-page/team/mike.jpeg';
import sangam from '../../assets/images/about-page/team/sangam.jpeg';
import ranbir from '../../assets/images/about-page/team/ranbir.jpeg';
import marc from '../../assets/images/about-page/team/marc.jpeg';

const MainContainer = styled('div')`
    background: #ffffff;

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
    ${font6};
    font-size: 61px;
    line-height: 77px;
    letter-spacing: -2.56px;
    color: #1a1a1a;
    text-align: center;

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
    font-size: 22px;
    line-height: 32px;
    color: #1a1a1a;

    @media (max-width: 899px) {
        font-size: 20px;
        line-height: 25px;
    }
`;

const Desc = styled('span')`
    ${font6};
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.96px;
    text-transform: uppercase;
    color: #b2b2b2;
`;

const Sub = styled('span')`
    ${font8};
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.14px;
    color: #1a1a1a;
`;

const MeetTheTeam = styled('span')`
    ${font6};
    font-size: 13px;
    line-height: 21px;
    letter-spacing: 1.12px;
    text-transform: uppercase;
    color: #0069ff;
    text-align: center;
`;

const GridContainer = styled(Grid)`
    padding: 100px 0px 0px 0px;

    @media (min-width: 1535px) {
        padding: 100px 100px 0px 100px;
    }
`;

const CardContainer = styled(Card)`
    padding: 20px;
    box-shadow: 0px 4px 20px -6px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`;

const Img = styled('img')`
    width: 200px;
    height: 223.12px;
    border-radius: 20px;
`;

const Logo = styled('img')`
    width: 30px;
    height: 30px;
`;

const team = [
    {
        id: 1,
        img: shyam,
        name: 'Shyam Mohan',
        desc: 'Founder & CEO',
        sub: 'UPTU Lucknow',
        url: 'https://www.linkedin.com/in/shyam-mohan-k/'
    },
    {
        id: 2,
        img: dinesh,
        name: 'Dinesh Yadav',
        desc: 'Founder & CTO',
        sub: 'IIIT Hyderabad',
        url: 'https://www.linkedin.com/in/dineshsinghyadav/'
    },
    {
        id: 3,
        img: vinay,
        name: 'Vinay Kumar',
        desc: 'Solutions Engineer',
        sub: 'IIIT Hyderabad',
        url: 'https://www.linkedin.com/in/vinay-kumar-iiith/'
    },
    {
        id: 4,
        img: deepak,
        name: 'Deepak Vig',
        desc: 'Solutions Engineer',
        sub: 'IIIT Hyderabad',
        url: 'https://www.linkedin.com/in/deepakvig/'
    },
    {
        id: 5,
        img: mike,
        name: 'Mike Raghavan',
        desc: 'Dev Sales',
        sub: 'IIT-Madras, UC Berkeley Alumni',
        url: 'https://www.linkedin.com/in/mike-raghavan-2223b7188/'
    },
    {
        id: 6,
        img: sangam,
        name: 'Sangam Biradar',
        desc: 'Devops Evangelist',
        url: 'https://www.linkedin.com/in/sangambiradar/'
    },
    {
        id: 7,
        img: ranbir,
        name: 'Ranbir Singh',
        desc: 'Engineering',
        url: 'https://www.linkedin.com/in/ranbir-singh-ab0a3011a/'
    },
    {
        id: 8,
        img: marc,
        name: 'Marc Tenggrik',
        desc: 'Senior Sales Engineer',
        url: 'https://www.linkedin.com/in/marc-tenggrik-gabil-201196178/'
    }
];

export default function Team() {
    return (
        <MainContainer>
            <Grid
                container
                spacing={2}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Grid item>
                    <MeetTheTeam>Meet the Team</MeetTheTeam>
                </Grid>
                <Grid item>
                    <Title>{'Razorops Team'}</Title>
                </Grid>
            </Grid>
            <GridContainer container spacing={4}>
                {team.map((i) => (
                    <Grid key={i.id} item xs={6} sm={4} md={6} lg={4}>
                        <CardContainer>
                            <Grid container spacing={{ sm: 2, xs: 2, lg: 3 }}>
                                <Grid item xs={12} sm={12} md={6} lg={6}>
                                    <Img alt="" src={i.img} />
                                </Grid>
                                <Grid item display={'flex'} xs={12} sm={12} md={6} lg={6}>
                                    <Grid container>
                                        <Grid
                                            item
                                            display={'flex'}
                                            alignItems={'center'}
                                            xs={12}
                                            sm={12}
                                            md={12}>
                                            <Grid container spacing={1} direction={'column'}>
                                                <Grid item>
                                                    <Desc>{i.desc}</Desc>
                                                </Grid>
                                                <Grid item>
                                                    <Name>{i.name}</Name>
                                                </Grid>
                                                <Grid item>
                                                    <Sub>{i.sub}</Sub>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid
                                            item
                                            display={'flex'}
                                            alignItems={'flex-end'}
                                            xs={12}
                                            sm={12}
                                            md={12}>
                                            <a href={i.url} target="_blank">
                                                <Logo src={linkedin} alt="" />
                                            </a>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContainer>
                    </Grid>
                ))}
            </GridContainer>
        </MainContainer>
    );
}
