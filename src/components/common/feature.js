import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { font3, color1, color4, font6, color3, font1 } from '../../assets/globalStyles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled(Grid)`
    background: #ffffff;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: space-between;

    @media (max-width: 899px) {
        align-items: center;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 70px 80px 70px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 70px 50px 70px 50px;
    }

    @media (min-width: 1535px) {
        padding: 70px 100px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 40px 0px 40px 0px;
    }
`;

const Heading = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 70px;
    color: ${color1};
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 34px;
        line-height: 57px;
    }

    @media (max-width: 600px) {
        font-size: 24px;
        line-height: 32px;
    }
`;

const SubText = styled('span')`
    ${font6};
    font-size: 30px;
    line-height: 40px;
    color: ${color3};
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 30px;
        line-height: 40px;
        white-space: inherit;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 29px;
        line-height: 32px;
        white-space: inherit;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 26px;
        white-space: inherit;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: 20px;
    line-height: 28px;
    color: ${color4};
    text-align: left;

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 26px;
    }
`;

const SubContainer = styled(Grid)`
    display: flex;
    text-align: left;
`;

const Number = styled('span')`
    ${font6};
    font-size: 22px;
    line-height: 28px;
    color: ${color4};
`;

const LeftContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    @media (max-width: 899px) {
        margin: 20px;
    }
`;

const RightContainer = styled(Grid)`
    display: flex;
    justify-content: center;
`;

const Feature = (props) => {
    const { content } = props;
    return (
        <Container direction={content?.direction} spacing={2} container>
            <LeftContainer item direction={'column'} xs={10} sm={10} md={6} lg={6}>
                <Grid item>
                    <Number>{content?.number}</Number>
                    <Heading>{content?.title}</Heading>
                </Grid>
                <SubContainer container style={{ marginTop: '20px' }} item>
                    <SubText>{content?.desc}</SubText>
                </SubContainer>
                {content &&
                    content.features.map((i) => (
                        <Grid container style={{ marginTop: '20px' }}>
                            <Grid item display={'flex'} flexDirection={'row'}>
                                <ArrowRightIcon sx={{ fill: color4, margin: '4px 0px' }} />
                                <Desc>{i}</Desc>
                            </Grid>
                        </Grid>
                    ))}
            </LeftContainer>
            <RightContainer container xs={10} sm={10} md={6} lg={6}>
                <Grid style={{ display: 'flex', justifyContent: 'center' }} item>
                    <img alt="" src={content?.img} />
                </Grid>
            </RightContainer>
        </Container>
    );
};

export default Feature;
