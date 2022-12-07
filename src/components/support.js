import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import img1 from '../assets/images/support/img1.svg';
import img2 from '../assets/images/support/img2.svg';
import img3 from '../assets/images/support/img3.svg';
import img4 from '../assets/images/support/img4.svg';
import {
    color1,
    color2,
    color4,
    font1,
    font3,
    fontSize20,
    lineHeight24,
    lineHeight29
} from '../assets/globalStyles';
import { Card, Rating } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';

const BG = styled('div')`
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.8) -2.41%,
        rgba(222, 236, 255, 0.8) 42.23%
    );
    position: relative;
    overflow: hidden;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 0px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 0px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 0px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 0px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 0px 20px 70px 20px;
    }
`;

const Heading = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    text-align: left;
    color: ${color1};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 60px;
        line-height: 90px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 60px;
        line-height: 77px;
        text-align: center;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
        text-align: center;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: ${fontSize20};
    line-height: ${lineHeight29};
    color: ${color2};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 29px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 26px;
    }
`;

const Title = styled('span')`
    ${font3};
    font-size: 30px;
    line-height: 90px;
    text-align: center;
    color: ${color1};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 26px;
        line-height: 50px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 26px;
        line-height: 50px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 26px;
    }
`;

const Sub = styled('span')`
    ${font1};
    font-size: ${fontSize20};
    line-height: ${lineHeight24};
    color: #9c9494;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 22px;
    }

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 22px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 26px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 26px;
    }
`;

const LeftContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 899px) {
        margin: 20px;
    }
`;

const RightContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TopSectionContainer = styled(Grid)`
    display: flex;
    justify-content: space-between;

    @media (max-width: 899px) {
        justify-content: center;
        align-items: center;
    }
`;

const BottomSectionContainer = styled(Grid)`
    padding: 140px 20px 80px 20px;
    display: flex;
    justify-content: center;

    @media (max-width: 1199px) {
        min-width: 2000px;
        padding: 140px 0px 80px 0px;
    }

    @media (max-width: 599px) {
        padding: 60px 0px 40px 0px;
    }
`;

const BottomDiv = styled('div')`
    @media (max-width: 1199px) {
        overflow-x: auto;
    }
`;

const CardContainer = styled(Card)`
    padding: 30px 20px;
    margin: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    opacity: 0.8;
    box-shadow: 0px 4px 60px 6px rgba(0, 0, 0, 0.03);
    border-radius: 20px;

    @media (max-width: 1199px) {
        margin: 10px;
    }
`;

const CardText = styled('span')`
    ${font3};
    font-size: 30px;
    line-height: 60px;
    color: ${color1};
`;

const CardSubText = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 26px;
    color: ${color2};
`;

const CardDescText = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 26px;
    color: ${color4};
`;

const CardImg = styled('img')`
    padding: 0px 20px 0px 10px;
`;

const SubGrid = styled(Grid)`
    display: flex;
    flex-direction: column;

    @media (max-width: 599px) {
        padding: 30px 0px 0px 0px;
    }
`;

const data = [
    {
        img: img1,
        text: '5/5',
        rating: 5,
        sub: 'Nowadays, the increasingly growing number mobile that is known. Nowadays',
        desc: '-Martin Momumi, Cheif Devops'
    },
    {
        img: img2,
        text: '4.5/5',
        rating: 4.5,
        sub: 'Nowadays, the increasingly growing number mobile that is known. Nowadays',
        desc: '-Martin Momumi, Cheif Devops'
    },
    {
        img: img3,
        text: '4/5',
        rating: 4,
        sub: 'Nowadays, the increasingly growing number mobile that is known. Nowadays',
        desc: '-Martin Momumi, Cheif Devops'
    },
    {
        img: img4,
        text: '4/5',
        rating: 4,
        sub: 'Nowadays, the increasingly growing number mobile that is known. Nowadays',
        desc: '-Martin Momumi, Cheif Devops'
    }
];

const Support = () => {
    return (
        <BG>
            <TopSectionContainer container>
                <LeftContainer item xs={10} sm={10} md={6} lg={6}>
                    <Grid item>
                        <StaticImage
                            alt=""
                            src={'../assets/images/support/contactImg.svg'}
                            placeholder="blurred"
                        />
                    </Grid>
                </LeftContainer>
                <RightContainer item xs={12} sm={10} md={5} lg={5}>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item>
                            <Heading>Better Support</Heading>
                        </Grid>
                        <Grid item>
                            <Desc>
                                {
                                    'Nowadays, the increasingly growing number of mobile and\ncomputing devices.'
                                }
                            </Desc>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={5}>
                                <SubGrid item xs={12} sm={4} md={4}>
                                    <Grid item>
                                        <Title>24/7</Title>
                                    </Grid>
                                    <Grid item>
                                        <Sub>The state art anti spoofing techniques</Sub>
                                    </Grid>
                                </SubGrid>
                                <SubGrid item xs={12} sm={4} md={4}>
                                    <Grid item>
                                        <Title>24/7</Title>
                                    </Grid>
                                    <Grid item>
                                        <Sub>The state art anti spoofing techniques</Sub>
                                    </Grid>
                                </SubGrid>
                                <SubGrid item xs={12} sm={4} md={4}>
                                    <Grid item>
                                        <Title>24/7</Title>
                                    </Grid>
                                    <Grid item>
                                        <Sub>The state art anti spoofing techniques</Sub>
                                    </Grid>
                                </SubGrid>
                            </Grid>
                        </Grid>
                    </Grid>
                </RightContainer>
            </TopSectionContainer>
            <BottomDiv>
                <BottomSectionContainer container>
                    {data.map((i) => (
                        <Grid key={i.id} item xs={3} sm={3} md={3} lg={6}>
                            <CardContainer>
                                <CardImg
                                    alt=""
                                    src={i.img}
                                    loading="lazy"
                                    width="100%"
                                    height="auto"
                                />
                                <Grid item>
                                    <Grid container spacing={1}>
                                        <Grid item display={'flex'} flexDirection={'column'}>
                                            <CardText>{i.text}</CardText>
                                            <Rating
                                                name="read-only"
                                                value={i.rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                        </Grid>
                                        <Grid item>
                                            <CardSubText>{i.sub}</CardSubText>
                                        </Grid>
                                        <Grid item>
                                            <CardDescText>{i.desc}</CardDescText>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContainer>
                        </Grid>
                    ))}
                </BottomSectionContainer>
            </BottomDiv>
        </BG>
    );
};

export default Support;
