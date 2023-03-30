import React from 'react';
import { font5, font6 } from '../assets/globalStyles';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import TalkOfTheTown from '../components/talk-of-the-town';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import communityLogo from '../assets/images/footer/community/community.svg';

import facebook from '../assets/images/footer/community/facebook.png';
import telegram from '../assets/images/footer/community/telegram.png';
import linkedin from '../assets/images/footer/community/linkedin.png';
import instagram from '../assets/images/footer/community/instagram.png';
import twitter from '../assets/images/footer/community/twitter.png';
import github from '../assets/images/footer/community/github.png';
import youtube from '../assets/images/footer/community/youtube.png';
import discord from '../assets/images/footer/community/discord.png';
import whatsapp from '../assets/images/footer/community/whatsapp.png';
import quora from '../assets/images/footer/community/quora.png';

import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { Link } from 'gatsby';
import GetStarted from '../components/get-started';
import PageHead from '../components/common/page-head';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    @media (min-width: 1535px) {
        padding: 150px;
    }

    @media (max-width: 599px) {
        padding: 50px 20px;
    }
`;

const Title = styled('span')`
    ${font5};
    font-size: 60px;
    line-height: 70px;
    color: #18204c;
    white-space: pre-wrap;
    text-align: center;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 34px;
        line-height: 39px;
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

const Desc = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #5b6987;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 20px;
        line-height: 27px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 19px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 27px;
    }
`;

const Name = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 48px;
    text-align: center;
    color: #293241;

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

const Image = styled('img')`
    height: 120px;
    width: 120px;

    @media (max-width: 599px) {
        height: 60px;
        width: 60px;
    }
`;

const Card = styled('div')`
    padding: 40px;
    background: #f9fafe;
    border-radius: 28px;

    &:hover {
        background: linear-gradient(180deg, #1681fe 0%, #002c9b 100%);
    }

    &:hover #name {
        color: #ffffff;
    }

    &:hover #image {
        filter: brightness(0) invert(1);
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const data = [
    { id: 1, img: facebook, name: 'Facebook', link: 'https://www.facebook.com/razorops' },
    { id: 2, img: telegram, name: 'Telegram', link: 'https://t.me/+F3o5iCzYFqeSd54d' },
    {
        id: 3,
        img: linkedin,
        name: 'LinkedIn Newsletters',
        link: 'https://www.linkedin.com/newsletters/container-native-devops-cicd-6920671272087552000/'
    },
    { id: 4, img: instagram, name: 'Instagram', link: 'https://www.instagram.com/razoropscicd/' },
    { id: 5, img: linkedin, name: 'LinkedIn', link: 'https://www.linkedin.com/company/razorops' },
    { id: 6, img: twitter, name: 'Twitter', link: 'https://twitter.com/razorops' },
    { id: 7, img: github, name: 'Github', link: 'https://github.com/RazorOp' },
    {
        id: 8,
        img: youtube,
        name: 'Youtube',
        link: 'https://www.youtube.com/channel/UCq-0f5HPIAJ_2Ds6uvwBW4g/videos'
    },
    { id: 9, img: discord, name: 'Discord', link: 'https://discord.gg/rfsHNYDs4j' },
    {
        id: 10,
        img: whatsapp,
        name: 'Whatsapp',
        link: 'https://chat.whatsapp.com/GHqlbyWGn778P88UwOovaQ'
    },
    { id: 11, img: quora, name: 'Quora', link: 'https://razorops.quora.com/' }
];

export const Head = ({ ...props }) => {
    return (
        <PageHead
            {...props}
            meta={{
                title: 'Best CI/CD Tool Razorops - Community',
                description:
                    'Razorops is a Saas based CI/CD tool. It is also platform independent. Build your apps for any platform. Start Building.'
            }}
        />
    );
};

export default function Community() {
    return (
        <>
            <FooterComponent heading="Community" img={communityLogo} contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid
                    style={{ zIndex: 1 }}
                    container
                    spacing={5}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Grid item>
                        <Title>Join RazorOps Community</Title>
                    </Grid>
                    <Grid item md={8} display={'flex'} justifyContent={'center'}>
                        <Desc>
                            Get the latest updates on Container Native CI/CD and DevOps Industry.
                            Join in our favourite communication channels :
                        </Desc>
                    </Grid>
                    <Grid style={{ marginTop: '30px' }} item md={10}>
                        <Grid container spacing={5}>
                            {data.map((i) => (
                                <Grid key={i.id} item xs={6} sm={6} md={4}>
                                    <NavLink to={i.link} target="_blank">
                                        <Card>
                                            <Grid
                                                container
                                                spacing={3}
                                                direction={'column'}
                                                justifyContent={'center'}
                                                alignItems={'center'}>
                                                <Grid item>
                                                    <Image id="image" src={i.img} alt="" />
                                                </Grid>
                                                <Grid item>
                                                    <Name id="name">{i.name}</Name>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </NavLink>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </ContentContainer>
            <TalkOfTheTown isHomeScreen={false} />
            <GetStarted />
            <Footer />
        </>
    );
}
