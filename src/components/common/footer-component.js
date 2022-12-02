import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { font6, font7, font1 } from '../../assets/globalStyles';
import bgPattern from '../../assets/images/footer/backgroundPattern.svg';
import bg from '../../assets/images/bg.png';
import Navbar from '../navbar';

const BG = styled('div')`
    margin: ${(props) => (props.showTopBar === true ? '140px 0px 0px 0px' : '100px 0px 0px 0px')};
`;
const TopContainer = styled('div')`
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 120px;

    @media (max-width: 1199px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;
const Heading = styled('div')`
    ${font7};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 72px;
    line-height: 90px;
    color: #f9fafe;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 60px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
        padding: 20px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 40px;
        line-height: 77px;
        padding: 20px;
    }

    @media (max-width: 600px) {
        font-size: 32px;
        line-height: 48px;
        padding: 20px 0px;
    }
`;

const Title = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 28px;
    color: #191e27;
`;

const Text = styled('p')`
    ${font6};
    font-size: 18px;
    line-height: 28px;
    color: #191e27;
    padding: 0px 0px 10px 0px;
`;

const SubText = styled('p')`
    padding: 5px 0px;
    ${font1};
    font-size: 16px;
    line-height: 28px;
    color: #191e27;
    white-space: pre-wrap;
`;

const ContentContainer = styled(Grid)`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 40px 150px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 40px 80px;
    }

    @media (min-width: 1535px) {
        padding: 40px 340px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 40px 200px;
    }

    @media (max-width: 600px) {
        padding: 20px;
    }
`;

const ContentGrid = styled(Grid)`
    display: flex;
    flex-direction: column;
    padding: 20px 0px;
    z-index: 1;
`;

export default function FooterComponent({
    heading,
    img,
    contentContainer,
    text,
    textDesc,
    content
}) {
    const [showTopBar, setShowTopBar] = React.useState(true);

    return (
        <>
            <Navbar showTopBar={showTopBar} setShowTopBar={setShowTopBar} />
            <BG showTopBar={showTopBar}>
                <TopContainer container>
                    <Grid item>
                        <Heading>{heading}</Heading>
                    </Grid>
                    <Grid item>
                        <img alt="" src={img} />
                    </Grid>
                </TopContainer>
                {contentContainer && (
                    <ContentContainer container>
                        <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                        <Grid style={{ padding: '30px 0px' }} item>
                            <Text>{text}</Text>
                            <SubText
                                dangerouslySetInnerHTML={{
                                    __html: textDesc
                                }}
                            />
                        </Grid>

                        {content?.map((i) => (
                            <ContentGrid id={i.id} container spacing={2}>
                                <Grid item>
                                    <Title>{i.title}</Title>
                                </Grid>
                                <Grid item>
                                    <SubText
                                        dangerouslySetInnerHTML={{
                                            __html: i.desc
                                        }}
                                    />
                                </Grid>
                            </ContentGrid>
                        ))}
                    </ContentContainer>
                )}
            </BG>
        </>
    );
}
