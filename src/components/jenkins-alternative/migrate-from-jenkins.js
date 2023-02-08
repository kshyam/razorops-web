import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { font1, font7 } from '../../assets/globalStyles';

import arrow from '../../assets/images/jenkins-alternative/arrow.svg';
import jenkins from '../../assets/images/jenkins-alternative/jenkins.svg';
import razorops from '../../assets/images/jenkins-alternative/razorops.svg';

import { Button } from '@mui/material';
import { Link } from 'gatsby';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: #deecff;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 70px 20px 70px 20px;
    }
`;

const Text = styled('span')`
    ${font7};
    font-size: 54px;
    line-height: 60px;
    color: #031b4e;

    @media (max-width: 599px) {
        font-size: 27px;
        line-height: 34px;
    }
`;

const Sub = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 34px;
    color: #5b6987;
`;

const Container = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TalkToUsText = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 26px;
    color: #ffffff;
    text-transform: none;
`;

const TalkToUsButton = styled(Button)`
    padding: 10px 20px;
    background: #0069ff;
    border-radius: 14px;
    &:hover {
        background: #0069ff;
    }

    @media (max-width: 599px) {
        padding: 20px 30px;
    }
`;

const Img = styled('img')`
    @media (max-width: 1199px) {
        width: 120px;
        height: 150px;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const MigrateFromJenkins = () => {
    return (
        <BG>
            <Container container spacing={5}>
                <Grid item md={12} lg={6}>
                    <Grid container spacing={2} direction={'column'}>
                        <Grid item>
                            <Text>{'Migrate from Jenkins to Razorops CI/CD'}</Text>
                        </Grid>
                        <Grid item>
                            <Sub>
                                {
                                    'Fully optimized runners for fast and easy builds so wait less build more. Migrate your CI/CD to RazorOps in just few steps.'
                                }
                            </Sub>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} lg={6}>
                    <Grid
                        container
                        spacing={5}
                        direction={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        <Grid item>
                            <Grid
                                container
                                spacing={3}
                                justifyContent={'center'}
                                alignItems={'center'}>
                                <Grid item>
                                    <Img src={jenkins} alt="" />
                                </Grid>
                                <Grid item>
                                    <Img src={arrow} alt="" />
                                </Grid>
                                <Grid item>
                                    <Img src={razorops} alt="" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <NavLink to="/contact">
                                <TalkToUsButton>
                                    <TalkToUsText>Talk to Us</TalkToUsText>
                                </TalkToUsButton>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </BG>
    );
};

export default MigrateFromJenkins;
