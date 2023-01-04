import * as React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { color1, font3, font6, lineHeight29 } from '../assets/globalStyles';
import dossier from '../assets/images/clients/1dossier.webp';
import auzmor from '../assets/images/clients/auzmor.png';
import azure from '../assets/images/clients/azure.png';
import edtech from '../assets/images/clients/edtech.png';
import digitalocean from '../assets/images/clients/digitalocean.png';
import trice from '../assets/images/clients/trice.png';
import nimble from '../assets/images/clients/nimble.png';
import civo from '../assets/images/clients/civo.png';
import kubeify from '../assets/images/clients/kubeify.png';
import nxtGen from '../assets/images/clients/nxt-gen.png';

const BG = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffffff;

    @media (max-width: 1199px) {
        overflow-x: auto;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 50px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 50px;
    }

    @media (min-width: 1535px) {
        padding: 100px 180px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 50px 180px 50px 180px;
    }

    @media (max-width: 600px) {
        padding: 30px;
    }
`;

const Title = styled('div')`
    padding: 100px 0px 0px 0px;
    ${font6};
    font-size: 22px;
    line-height: ${lineHeight29};
    text-align: center;
    color: #5b5b5b;

    @media (max-width: 600px) {
        padding: 0px;
    }
`;

const Heading = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    text-align: center;
    color: ${color1};
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 40px;
        line-height: 54px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 34px;
        line-height: 40px;
    }

    @media (min-width: 1535px) {
        font-size: 38px;
        line-height: 48px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media (max-width: 600px) {
        font-size: 28px;
        line-height: 30px;
    }
`;

const TopGrid = styled(Grid)`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const ImageGrid = styled(Grid)`
    display: flex;
    align-items: center;
    width: 200px;
`;

const Img = styled('img')`
    height: 80px;
    width: 150px;
    transition: transform 1s;

    &:hover {
        transform: scale(1.5);
    }
`;

const Slider = styled('div')`
    display: flex;
    align-items: center;
    background: white;
    height: 140px;
    margin: auto;
    overflow: hidden;
    position: relative;

    &::before,
    &::after {
        background: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 100%
        );
        content: '';
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
    }

    &::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
    }

    &::before {
        left: 0;
        top: 0;
    }
`;

const SlideTrack = styled('div')`
    animation: scroll 40s linear infinite;
    display: flex;
    width: calc(200px * 20);

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-200px * 10));
        }
    }

    &:hover {
        animation-play-state: paused;
    }
`;

const images = [
    { id: 1, img: dossier },
    { id: 2, img: auzmor },
    { id: 3, img: azure },
    { id: 4, img: edtech },
    { id: 5, img: digitalocean },
    { id: 6, img: trice },
    { id: 7, img: nimble },
    { id: 8, img: civo },
    { id: 9, img: kubeify },
    { id: 10, img: nxtGen },
    { id: 11, img: dossier },
    { id: 12, img: auzmor },
    { id: 13, img: azure },
    { id: 14, img: edtech },
    { id: 15, img: digitalocean },
    { id: 16, img: trice },
    { id: 17, img: nimble },
    { id: 18, img: civo },
    { id: 19, img: kubeify },
    { id: 20, img: nxtGen }
];

export default function TrustedBy({ heading }) {
    return (
        <>
            {heading ? <Heading>{heading}</Heading> : <Title>{'Trusted By'}</Title>}
            <BG>
                <TopGrid container>
                    <Slider>
                        <SlideTrack>
                            {images.map((i) => (
                                <ImageGrid key={i.id} item>
                                    <Img src={i.img} alt="" loading="lazy" />
                                </ImageGrid>
                            ))}
                        </SlideTrack>
                    </Slider>
                </TopGrid>
            </BG>
        </>
    );
}
