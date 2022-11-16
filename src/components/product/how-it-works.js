import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { font1, lineHeight29, color2, fontSize18, color1, font3 } from '../../assets/globalStyles';
import img from '../../assets/images/product/how-it-works/img.svg';

const BG = styled('div')`
    background: #ffffff;
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 70px 200px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 0px 70px 0px;
    }
`;

const Title = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    text-align: center;
    color: ${color1};

    @media (max-width: 600px) {
        font-size: 22px;
        line-height: 27px;
    }
`;

const SubText = styled('div')`
    padding: 20px 0px;
    ${font1};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    text-align: center;
    white-space: pre-wrap;
    color: ${color2};

    @media (max-width: 600px) {
        white-space: inherit;
    }
`;

const HowItWorks = () => {
    return (
        <BG id="how-it-works">
            <Title>How it works</Title>
            <SubText>
                {'Nowadays, the increasingly growing number of mobile\nand computing devices'}
            </SubText>
            <Grid container display={'flex'} justifyContent={'center'}>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} item>
                    <img alt="" src={img} />
                </Grid>
            </Grid>
        </BG>
    );
};

export default HowItWorks;
