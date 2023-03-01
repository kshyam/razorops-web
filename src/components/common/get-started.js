import React from 'react';
import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';
import { font6 } from '../../assets/globalStyles';
import { Link } from 'gatsby';
import img from '../../assets/images/footer/support-plans/support.svg';

const Container = styled('div')`
    padding: 40px;
    background: linear-gradient(180deg, #0069ff 0%, #002c9b 100%);
    border-radius: 28px;
`;

const Title = styled('span')`
    ${font6};
    font-size: 28px;
    line-height: 28px;
    color: #f9fafe;
`;

const Sub = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 28px;
    color: #f9fafe;
`;

const ContactUsButton = styled(Button)`
    background: #f9fafe;
    border-radius: 14px;
    padding: 20px;
    text-transform: none;
    width: -webkit-fill-available;

    &:hover {
        background: #f9fafe;
    }
`;

const ContactUsText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #0069ff;
`;

const Img = styled('img')`
    width: 100px;
    height: 100px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

export default function GetStarted() {
    return (
        <Container>
            <Grid container spacing={5} alignItems={'center'}>
                <Grid item md={2} xl={1} display={'flex'} justifyContent={'center'}>
                    <Img alt="" src={img} />
                </Grid>
                <Grid item md={7} xl={8}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Title>Let's Get Started</Title>
                        </Grid>
                        <Grid item>
                            <Sub>
                                {
                                    'Razorops is a complete container native CI/CD solution handling all aspects of the software lifecycle from the moment a commit is created until it is deployed to production.'
                                }
                            </Sub>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={3} xl={3}>
                    <NavLink to="/contact">
                        <ContactUsButton>
                            <ContactUsText>Contact us</ContactUsText>
                        </ContactUsButton>
                    </NavLink>
                </Grid>
            </Grid>
        </Container>
    );
}
