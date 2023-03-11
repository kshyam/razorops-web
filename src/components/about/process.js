import * as React from 'react';
import { font3, font6, font8 } from '../../assets/globalStyles';
import product from '../../assets/images/about-page/product.svg';
import model from '../../assets/images/about-page/model.svg';
import marketing from '../../assets/images/about-page/marketing.svg';
import manage from '../../assets/images/about-page/manage.svg';
import styled from '@emotion/styled';
import { Button, Grid } from '@mui/material';

const Container = styled(Grid)`
    display: flex;
    justify-content: center;
    padding: 60px 0px 40px 0px;

    @media (max-width: 600px) {
        padding: 20px 0px 0px 0px;
    }
`;

const OurProcess = styled('span')`
    ${font3};
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 2px;
    color: #4790eb;
`;

const Heading = styled('h1')`
    ${font3};
    font-size: 42px;
    line-height: 55px;
    letter-spacing: -1.26px;
    color: #2a323c;
    text-align: center;
    white-space: pre-wrap;
`;

const Title = styled('span')`
    ${font3};
    font-size: 32px;
    line-height: 42px;
    color: #2a323c;
`;

const Desc = styled('span')`
    ${font8};
    font-size: 16px;
    line-height: 28px;
    color: #546478;
`;

const LearnMore = styled(Button)`
    padding: 10px 20px;
    background: #e3eefc;
    border-radius: 8px;
    text-transform: none;

    &:hover {
        background: #e3eefc;
    }
`;

const ButtonText = styled('span')`
    ${font8};
    font-size: 14px;
    line-height: 20px;
    color: #0069ff;
`;

const Circle = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: #e3eefc;
`;

const Text = styled('span')`
    ${font6};
    font-size: 24px;
    line-height: 32px;
    color: #0069ff;
`;

const Divider = styled('div')`
    border-top: 1px solid #e1e5ea;
    margin: 40px 0px;
    display: ${(props) => (props.id === 4 ? 'none' : 'flex')};
`;

const Line = styled('div')`
    border-left: 2px solid #e1e5ea;
    position: absolute;
    width: 2px;
    height: 100%;
    top: 50px;

    @media (max-width: 1199px) {
        display: none;
    }
`;

const Center = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GridContainer = styled(Grid)`
    position: relative;
    display: flex;
    align-items: baseline;
    padding: 20px 0px;
`;

const data = [
    {
        id: 1,
        img: product,
        title: 'We will gather your empty listed  <span style="color:#0069FF;">Product</span>',
        desc: 'Lorem ipsum dolor sit back amet, consectetura adipiscing elit, sedia doi eiusmod temporary incidita dunt buntut labore et dolore magna aliqua. Uterus denim ad minim veniam.'
    },
    {
        id: 2,
        img: model,
        title: 'We will try to make a new Business <span style="color:#0069FF;">Model</span>',
        desc: 'Lorem ipsum dolor sit back amet, consectetura adipiscing elit, sedia doi eiusmod temporary incidita dunt buntut labore et dolore magna aliqua. Uterus denim ad minim veniam.'
    },
    {
        id: 3,
        img: marketing,
        title: 'We will help you about <span style="color:#0069FF;">Marketing</span> and SEO',
        desc: 'Lorem ipsum dolor sit back amet, consectetura adipiscing elit, sedia doi eiusmod temporary incidita dunt buntut labore et dolore magna aliqua. Uterus denim ad minim veniam.'
    },
    {
        id: 4,
        img: manage,
        title: 'We <span style="color:#0069FF;">manage</span> all your products, so you can <span style="color:#0069FF;">relax</span>',
        desc: 'Lorem ipsum dolor sit back amet, consectetura adipiscing elit, sedia doi eiusmod temporary incidita dunt buntut labore et dolore magna aliqua. Uterus denim ad minim veniam.'
    }
];

export default function Process() {
    return (
        <Container container spacing={10}>
            <Grid item>
                <Grid
                    container
                    spacing={2}
                    direction={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Grid item>
                        <OurProcess>OUR PROCESS</OurProcess>
                    </Grid>
                    <Grid item>
                        <Heading>{'Our process on how to\ngrow your business'}</Heading>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container>
                    {data.map((i) => (
                        <Grid key={i.id} item>
                            <GridContainer container>
                                <Center item md={2}>
                                    <Line />
                                    <Circle style={{ zIndex: 1 }}>
                                        <Text>{i.id}</Text>
                                    </Circle>
                                </Center>
                                <Grid item md={10}>
                                    <Center container alignItems={'center'}>
                                        <Grid item md={4}>
                                            <Grid container direction={'column'} spacing={3}>
                                                <Grid item>
                                                    <Title
                                                        dangerouslySetInnerHTML={{
                                                            __html: i.title
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Desc>{i.desc}</Desc>
                                                </Grid>
                                                <Grid item>
                                                    <LearnMore>
                                                        <ButtonText>Learn more</ButtonText>
                                                    </LearnMore>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Center
                                            item
                                            md={8}
                                            display={'flex'}
                                            justifyContent={'center'}>
                                            <img src={i.img} alt="" />
                                        </Center>
                                    </Center>
                                    <Divider id={i.id} />
                                </Grid>
                            </GridContainer>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}
