import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { font3, color1, color4, font6, color3, font1 } from '../../assets/globalStyles';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled(Grid)`
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
        padding: 70px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 70px 100px 70px 100px;
    }

    @media (max-width: 600px) {
        padding: 0px;
        justify-content: left;
    }
`;

const Heading = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 70px;
    color: ${color1};
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 37px;
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

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 24px;
        line-height: 40px;
        white-space: inherit;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 24px;
        line-height: 40px;
        white-space: inherit;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 27px;
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
    padding: 10px 0px;
    ${font1};
    font-size: 20px;
    line-height: 28px;
    color: ${color4};
    text-align: left;
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 18px;
        line-height: 27px;
        white-space: inherit;
    }

    @media (max-width: 1199px) {
        font-size: 18px;
        line-height: 26px;
    }

    @media (max-width: 599px) {
        font-size: 16px;
        line-height: 26px;
    }
`;

const SubContainer = styled(Grid)`
    margin: 20px 0px 0px 0px;
    display: flex;
    text-align: left;

    @media (max-width: 899px) {
        margin: 0px;
    }
`;

const ContentGrid = styled(Grid)`
    margin: 50px 0px 0px 0px;
    display: flex;
    flex-direction: column;

    @media (max-width: 899px) {
        margin: 20px 0px 0px 0px;
    }

    @media (max-width: 599px) {
        margin: 0px;
    }
`;

const Number = styled('span')`
    ${font6};
    font-size: 22px;
    line-height: 28px;
    color: ${color4};
`;

const RightContainer = styled(Grid)`
    position: relative;
    display: flex;
    justify-content: center;
`;

const Feature = (props) => {
    const { content } = props;
    return (
        <Container direction={content?.direction} spacing={2} container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container spacing={2} flexDirection={'column'} justifyContent={'center'}>
                    <Grid item>
                        <Number>{content?.number}</Number>
                        <Heading>{content?.title}</Heading>
                    </Grid>
                    <SubContainer container item>
                        <SubText>{content?.desc}</SubText>
                    </SubContainer>
                    <ContentGrid container item>
                        {content &&
                            content.features.map((i) => (
                                <Grid key={i} item display={'flex'} flexDirection={'row'}>
                                    <ArrowRightIcon sx={{ fill: color4, margin: '10px 0px' }} />
                                    <Desc>{i}</Desc>
                                </Grid>
                            ))}
                    </ContentGrid>
                </Grid>
            </Grid>
            <RightContainer item xs={12} sm={12} md={6} lg={6}>
                {content.number === '01' && (
                    <Number style={{ position: 'absolute', top: '48%' }}>04:00</Number>
                )}
                <img alt="" src={content?.img} loading="lazy" width="100%" height="auto" />
            </RightContainer>
        </Container>
    );
};

export default Feature;
