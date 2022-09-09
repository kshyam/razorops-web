import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { font7, fontSize18, lineHeight26 } from '../assets/globalStyles';

import arrow from '../assets/images/sign-up/arrow.svg';
import { Button } from '@mui/material';

const BG = styled('div')`
    position: relative;
    overflow: hidden;
    background: #345eef;

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
    font-size: 30px;
    line-height: 49px;
    color: #ffffff;

    @media (max-width: 599px) {
        font-size: 27px;
        line-height: 34px;
    }
`;

const Sub = styled('span')`
    ${font7};
    font-size: 60px;
    line-height: 90px;
    color: #ffffff;

    @media (max-width: 599px) {
        font-size: 37px;
        line-height: 34px;
    }
`;

const Container = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SignUpText = styled('span')`
    ${font7};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #345eef;
    text-transform: none;
`;

const SignUpButton = styled(Button)`
    padding: 10px 20px;
    background: #ffffff;
    border-radius: 20px;
    &:hover {
        background: #ffffff;
    }

    @media (max-width: 599px) {
        padding: 20px 30px;
    }
`;

const ArrowGrid = styled(Grid)`
    @media (max-width: 645px) {
        display: none;
    }
`;
const SignUp = () => {
    return (
        <BG>
            <Container container spacing={5}>
                <Grid container item md={6} flexDirection={'column'} spacing={2}>
                    <Grid item>
                        <Text>{'Ready to get started?'}</Text>
                    </Grid>
                    <Grid item>
                        <Sub>{'30 Days Free Trial'}</Sub>
                    </Grid>
                </Grid>
                <ArrowGrid item md={3}>
                    <img src={arrow} alt="" />
                </ArrowGrid>
                <Grid item md={3}>
                    <SignUpButton>
                        <SignUpText>Sign up with Github</SignUpText>
                    </SignUpButton>
                </Grid>
            </Container>
        </BG>
    );
};

export default SignUp;
