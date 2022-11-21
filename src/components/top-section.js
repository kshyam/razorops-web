import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import {
    lineHeight29,
    color1,
    color2,
    color4,
    font5,
    fontSize20,
    lineHeight20,
    font6,
    font11
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
    ${font5};
    font-size: 60px;
    line-height: 90px;
    color: ${color1};
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 60px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 40px;
        line-height: 77px;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

const HeadingMobileView = styled('span')`
    display: none;
    @media (max-width: 600px) {
        display: flex;
        ${font11};
        font-size: 32px;
        line-height: 48px;
        white-space: pre-wrap;
    }
`;

const SubText = styled('span')`
    ${font5};
    font-size: ${fontSize20};
    line-height: ${lineHeight29};
    color: ${color2};
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 16px;
        line-height: 29px;
        white-space: inherit;
    }

    @media (max-width: 599px) {
        display: none;
    }
`;

const SubTextMobileView = styled('span')`
    display: none;

    @media (max-width: 599px) {
        display: flex;
        ${font5};
        color: ${color2};
        font-size: 15px;
        line-height: 23px;
        white-space: pre-wrap;
    }
`;

const Container = styled(Grid)`
    display: flex;
    align-items: flex-start;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 130px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 130px 50px;
    }

    @media (min-width: 1535px) {
        padding: 210px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 150px 100px;
    }

    @media (max-width: 600px) {
        padding: 120px 20px 120px 20px;
    }
`;

const SignUpText = styled('span')`
    ${font6};
    font-size: ${fontSize20};
    line-height: ${lineHeight20};
    color: #ffffff;
    text-transform: none;

    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 14px;
    }
`;

const SignUpButton = styled(Button)`
    padding: 15px 30px;
    background: ${color4};
    border-radius: 14px;

    &:hover {
        background: ${color4};
    }

    @media (max-width: 600px) {
        padding: 15px 16px;
        height: 40px;
    }
`;

const Demo = styled('span')`
    ${font6};
    font-size: ${fontSize20};
    line-height: ${lineHeight20};
    color: #031b4e;
    text-transform: none;

    @media (max-width: 600px) {
        font-size: 14px;
        line-height: 14px;
    }
`;

const DemoButton = styled(Button)`
    padding: 15px 30px;
    border-radius: 14px;
    background: transparent;
    border: 1px solid #031b4e;

    &:hover {
        background: transparent;
    }

    @media (max-width: 600px) {
        padding: 15px 16px;
        height: 40px;
    }
`;

const DemoImg = styled('img')`
    padding: 0px 12px;

    @media (max-width: 600px) {
        padding: 0px 8px;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const SubTextGrid = styled(Grid)`
    display: flex;
    justify-content: center;
    margin: 10px 0px 0px 0px;

    @media (max-width: 600px) {
        margin: 0px;
    }
`;

const ButtonGrid = styled(Grid)`
    display: flex;
    flex-direction: row;
    padding: 30px 0px 0px 0px;

    @media (max-width: 600px) {
        padding: 10px 0px 0px 0px;
    }
`;

const TopSection = () => {
    return (
        <Bg>
            <Container spacing={3} container flexDirection={'column'}>
                <Grid item>
                    <Heading>{'The Simplest Container\nNative CI/CD '}</Heading>
                    <HeadingMobileView>
                        {'The Simplest\nContainer Native\nCI/CD '}
                    </HeadingMobileView>
                </Grid>
                <SubTextGrid item>
                    <SubText>
                        {
                            'Razorops is a container native continuous delivery platform to automate\nyour workflow from development to production in a few steps.'
                        }
                    </SubText>
                    <SubTextMobileView>
                        {
                            'Razorops is a container native\ncontinuous delivery platform to\nautomate your workflow from\ndevelopment to production in a\nfew steps.'
                        }
                    </SubTextMobileView>
                </SubTextGrid>

                <Grid item>
                    <ButtonGrid container spacing={2}>
                        <Grid item>
                            <NavLink to="https://dashboard.razorops.com/users/sign_up">
                                <SignUpButton variant="outlined">
                                    <SignUpText>Sign Up</SignUpText>
                                </SignUpButton>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <DemoButton variant="contained">
                                <DemoImg src={btnIcon} alt="" />
                                <Demo>Watch a demo</Demo>
                            </DemoButton>
                        </Grid>
                    </ButtonGrid>
                </Grid>
            </Container>
        </Bg>
    );
};

export default TopSection;
