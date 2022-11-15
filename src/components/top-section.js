import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {
    font2,
    font3,
    fontSize18,
    lineHeight29,
    color1,
    color2,
    font4,
    color4,
    lineHeight26,
    font5
} from '../assets/globalStyles';
import banner from '../assets/images/bannerImg.png';
import btnIcon from '../assets/images/btnIcon.svg';
import { Button } from '@mui/material';
import { Link } from 'gatsby';

const Bg = styled('div')`
    margin-top: 110px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const Heading = styled('div')`
    ${font3};
    font-size: 80px;
    line-height: 90px;
    color: ${color1};
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 64px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 64px;
        line-height: 77px;
    }

    @media (max-width: 600px) {
        font-size: 40px;
        line-height: 44px;
    }
`;

const SubText = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    color: ${color2};
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 13px;
        line-height: 20px;
        white-space: inherit;
    }
`;

const TopSectionContainer = styled(Grid)`
    display: flex;
    justify-content: space-between;

    @media (max-width: 899px) {
        align-items: center;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 100px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 100px 50px;
    }

    @media (min-width: 1535px) {
        padding: 200px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 120px 100px;
    }

    @media (max-width: 600px) {
        padding: 50px 40px 100px 40px;
        justify-content: center;
    }
`;

const Cicd = styled('span')`
    ${font4};
    font-size: 30px;
    line-height: 34px;
    color: ${color4};
    border-bottom: 2px solid ${color4};

    @media (max-width: 600px) {
        font-size: 22px;
        line-height: 34px;
    }
`;

const SignUpText = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #ffffff;
    text-transform: none;

    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 26px;
    }
`;

const SignUpButton = styled(Button)`
    padding: 10px 30px;
    background: ${color4};
    border-radius: 15px;

    &:hover {
        background: ${color4};
    }

    @media (max-width: 600px) {
        width: 220px;
    }
`;

const Demo = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #1717d2;
    text-transform: none;

    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 26px;
    }
`;

const DemoButton = styled(Button)`
    padding: 10px 30px;
    background: #dde5ff;
    border-radius: 15px;

    &:hover {
        background: #dde5ff;
    }

    @media (max-width: 600px) {
        width: 220px;
    }
`;

const Explore = styled('span')`
    ${font5};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    color: #18204c;

    @media (max-width: 600px) {
        font-size: 14px;
        line-height: ${lineHeight29};
        text-align: left;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const SubTextGrid = styled(Grid)`
    margin: 30px 0px 0px 0px;

    @media (max-width: 600px) {
        margin: 0px;
    }
`;

const ButtonGrid = styled(Grid)`
    display: flex;
    flex-direction: row;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const BottomContainer = styled(Grid)`
    display: flex;

    @media (max-width: 600px) {
        margin: 0px 0px 0px 10px;
        flex-direction: column;
    }
`;

const TopSection = () => {
    return (
        <Bg>
            <TopSectionContainer spacing={4} container flexDirection={'column'}>
                <Grid item>
                    <Grid container spacing={2} flexDirection={'column'}>
                        <Grid item>
                            <Cicd>{'CI/CD'}</Cicd>
                        </Grid>
                        <Grid item>
                            <Heading>{'Let’s get your\ncode tested!'}</Heading>
                        </Grid>
                        <SubTextGrid item>
                            <SubText>
                                {
                                    'Nowadays,  the increasingly growing number of mobile\nand computing devices'
                                }
                            </SubText>
                        </SubTextGrid>
                    </Grid>
                </Grid>
                <BottomContainer item>
                    <Grid container spacing={3} flexDirection={'column'}>
                        <Grid item>
                            <ButtonGrid container spacing={2}>
                                <Grid item>
                                    <SignUpButton variant="outlined">
                                        <SignUpText>Sign up for free trial</SignUpText>
                                    </SignUpButton>
                                </Grid>
                                <Grid item>
                                    <DemoButton variant="contained">
                                        <img style={{ padding: '0px 12px' }} src={btnIcon} alt="" />
                                        <Demo>Watch a demo</Demo>
                                    </DemoButton>
                                </Grid>
                            </ButtonGrid>
                        </Grid>
                        <Grid item>
                            <NavLink>
                                <Explore>Explore Doc</Explore>
                            </NavLink>
                        </Grid>
                    </Grid>
                </BottomContainer>
            </TopSectionContainer>
        </Bg>
    );
};

export default TopSection;
