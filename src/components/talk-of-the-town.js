import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {
    font3,
    fontSize18,
    color1,
    color2,
    font1,
    lineHeight27,
    lineHeight29
} from '../assets/globalStyles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import yesBank from '../assets/images/talk-of-the-town/rakesh/yes-bank.svg';
import rakesh from '../assets/images/talk-of-the-town/rakesh/rakesh-arora.svg';
import Slider from 'react-slick/lib/slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconButton } from '@mui/material';

const Bg = styled('div')`
    position: relative;
    overflow: hidden;

    background: #ffffff;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 0px 0px 0px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 0px 0px 0px;
    }

    @media (min-width: 1535px) {
        padding: 100px 0px 0px 0px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 0px 0px 0px;
    }

    @media (max-width: 600px) {
        padding: 70px 0px 0px 0px;
    }
`;

const Title = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    text-align: center;
    color: ${color1};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 40px;
        line-height: 54px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 40px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const Sub = styled('div')`
    padding: 10px 0px 120px 0px;
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    text-align: center;
    color: ${color2};

    @media (max-width: 600px) {
        padding: 10px 0px 20px 0px;
    }
`;

const Desc = styled('div')`
    ${font3};
    font-size: 40px;
    line-height: 60px;
    color: ${color1};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 30px;
        line-height: 40px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 20px;
        line-height: 29px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 27px;
        line-height: 42px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
        line-height: 29px;
        text-align: left;
    }
`;

const TopSectionContainer = styled(Grid)`
    display: flex !important;
    justify-content: center;
    background: #ffffff;

    @media (max-width: 899px) {
        justify-content: center;
        align-items: center;
    }
`;

const LeftContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    padding: 40px 40px 40px 100px;
    @media (max-width: 899px) {
        margin: 20px;
        text-align: center;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 40px 40px 40px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 40px 40px 40px 50px;
    }

    @media (min-width: 1535px) {
        padding: 40px 80px 40px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 40px 40px 40px 100px;
    }

    @media (max-width: 600px) {
        padding: 0px 0px 20px 0px;
    }
`;

const RightContainer = styled(Grid)`
    display: flex;
    position: relative;
`;

const DetailsGrid = styled(Grid)`
    padding: 50px 0px 0px 0px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const Name = styled('span')`
    ${font3};
    font-size: 20px;
    line-height: 29px;
    color: ${color1};
    text-align: left;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 14px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
    }
`;

const Role = styled('span')`
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight27};
    color: ${color2};
    text-align: left;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 14px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
    }
`;

const ArrowBackButton = styled(IconButton)`
    position: absolute;
    right: 200px;
    bottom: 0px;
    width: 100px;
    height: 100px;
    background: #345eef;
    color: #fff;
    border-radius: 0;

    &:hover {
        background: #345eef;
    }

    @media (max-width: 600px) {
        width: 60px;
        height: 60px;
        right: 160px;
    }
`;

const ArrowForwardButton = styled(IconButton)`
    position: absolute;
    right: 90px;
    bottom: 0px;
    width: 100px;
    height: 100px;
    background: #345eef;
    color: #fff;
    border-radius: 0;

    &:hover {
        background: #345eef;
    }

    @media (max-width: 600px) {
        width: 60px;
        height: 60px;
    }
`;

const Img = styled('img')`
    width: -webkit-fill-available;
    -webkit-filter: grayscale(1);
`;

const data = [
    {
        name: 'Rakesh Arora',
        role: 'Product Manager',
        desc: 'Razorops is a blazing Fast CI CD Platform with powerful tools to build, test & automate the deployment. I loved the product.',
        img: rakesh,
        company: yesBank
    },
    {
        name: 'Rakesh Arora',
        role: 'Product Manager',
        desc: 'Razorops is a blazing Fast CI CD Platform with powerful tools to build, test & automate the deployment. I loved the product.',
        img: rakesh,
        company: yesBank
    }
];

const TalkOfTheTown = () => {
    const slider = React.useRef(null);

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Bg>
            <Title>Talk of the town</Title>
            <Sub>{'Nowadays,  the increasingly growing number of mobile '}</Sub>
            <Slider ref={slider} {...settings}>
                {data?.map((i) => (
                    <TopSectionContainer container>
                        <LeftContainer item direction={'column'} xs={10} sm={10} md={6} lg={6}>
                            <Grid item>
                                <Desc style={{ fontSize: '60px', textAlign: 'left' }}>“</Desc>
                                <Desc>{i.desc}</Desc>
                            </Grid>
                            <DetailsGrid item>
                                <Grid item display={'flex'} flexDirection={'column'}>
                                    <Name>{i.name}</Name>
                                    <Role>{i.role}</Role>
                                </Grid>
                                <Grid item>
                                    <img
                                        alt=""
                                        src={i.company}
                                        loading="lazy"
                                        width="100%"
                                        height="auto"
                                    />
                                </Grid>
                            </DetailsGrid>
                        </LeftContainer>

                        <RightContainer item xs={10} sm={10} md={6} lg={6}>
                            <Img alt="" src={i.img} loading="lazy" width="100%" height="auto" />
                            <ArrowBackButton onClick={() => slider?.current?.slickPrev()}>
                                <ArrowBackIcon />
                            </ArrowBackButton>
                            <ArrowForwardButton onClick={() => slider?.current?.slickNext()}>
                                <ArrowForwardIcon />
                            </ArrowForwardButton>
                        </RightContainer>
                    </TopSectionContainer>
                ))}
            </Slider>
        </Bg>
    );
};

export default TalkOfTheTown;
