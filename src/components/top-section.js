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
import { Button } from '@mui/material';
import { Link } from 'gatsby';

const Bg = styled('div')`
    margin-top: 100px;
    height: 100vh;
    background-size: contain;
    background-image: url(${banner});
    background-repeat: no-repeat;

    @media (max-width: 899px) {
        background-size: cover;
    }
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
        font-size: 44px;
        line-height: 53px;
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
        font-size: 16px;
        line-height: 26px;
    }
`;

const SubContainer = styled(Grid)`
    display: flex;
    text-align: left;
`;

const TopSectionContainer = styled(Grid)`
    display: flex;
    justify-content: space-between;
    @media (max-width: 899px) {
        align-items: center;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 100px calc((100% - 852px) / 2) 10px calc((100% - 852px) / 2);
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 100px calc((100% - 552px) / 2) 10px calc((100% - 552px) / 2);
    }

    @media (min-width: 1535px) {
        padding: 200px 100px 10px 100px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 120px calc((100% - 1152px) / 2) 10px calc((100% - 1152px) / 2);
    }
    @media (max-width: 600px) {
        padding: 20px calc((100% - 335px) / 2) 10px calc((100% - 335px) / 2);
    }
`;

const Cicd = styled('span')`
    ${font4};
    font-size: 30px;
    line-height: 34px;
    color: ${color4};
    border-bottom: 2px solid ${color4};
`;

const SignUpText = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #ffffff;
    text-transform: none;
`;

const SignUpButton = styled(Button)`
    width: 231px;
    height: 50px;
    background: ${color4};
    border-radius: 15px;

    &:hover {
        background: ${color4};
    }
`;

const Demo = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #1717d2;
    text-transform: none;
`;

const DemoButton = styled(Button)`
    width: 231px;
    height: 50px;
    background: #dde5ff;
    border-radius: 15px;

    &:hover {
        background: #dde5ff;
    }
`;

const Explore = styled('span')`
    ${font5};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    color: #18204c;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const TopSection = () => {
    return (
        <Bg>
            <TopSectionContainer spacing={2} container>
                <Grid item>
                    <Cicd>{'CI/CD'}</Cicd>
                    <Heading>{'Let’s get your\ncode tested!'}</Heading>
                </Grid>
                <SubContainer container style={{ marginTop: '10px' }} item>
                    <Grid item>
                        <SubText>
                            {
                                'Nowadays,  the increasingly growing number of mobile\nand computing devices'
                            }
                        </SubText>
                    </Grid>
                </SubContainer>
                <Grid container item spacing={2} display={'flex'} flexDirection={'row'}>
                    <Grid item>
                        <SignUpButton variant="outlined">
                            <SignUpText>Sign up for free trial</SignUpText>
                        </SignUpButton>
                    </Grid>
                    <Grid item>
                        <DemoButton variant="contained">
                            <Demo>Watch a demo</Demo>
                        </DemoButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <NavLink>
                        <Explore>Explore Doc</Explore>
                    </NavLink>
                </Grid>
            </TopSectionContainer>
        </Bg>
    );
};

export default TopSection;
