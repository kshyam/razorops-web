import React from 'react';
import { Grid } from '@mui/material';
import img from '../../assets/images/jenkins-alternative/img.svg';
import styled from '@emotion/styled';
import { font1, font7 } from '../../assets/globalStyles';
import Video from '../common/video';
import demoVideo from '../../assets/videos/WHAT-IS-CICD-PIPELINE-CONTAINER-NATIVE-CICD-RAZOROPS-BEST-CICD-TOOL.mp4';

const MainContainer = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled('h1')`
    ${font7};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;
`;

const Desc = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #5b6987;
    white-space: pre-wrap;

    @media (max-width: 899px) {
        white-space: unset;
    }
`;

const Img = styled('img')`
    width: 1000px;
    height: 600px;

    @media (max-width: 899px) {
        width: 600px;
        height: 300px;
    }
`;

export default function WhatIsRazorops() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(!open);
    };
    return (
        <MainContainer>
            <Video src={demoVideo} open={open} handleClose={handleClose} />
            <Grid
                container
                spacing={3}
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}>
                <Grid item>
                    <Title>What is RazorOps?</Title>
                </Grid>
                <Grid item>
                    <Desc>
                        {
                            'Razorops is the simplest container-native CI/CD platform that offers complete automation of your\nsoftware development cycle from development to production.'
                        }
                    </Desc>
                </Grid>
                <Grid item>
                    <Img src={img} alt="" onClick={() => setOpen(true)} />
                </Grid>
            </Grid>
        </MainContainer>
    );
}
