import * as React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { font6, lineHeight29 } from '../assets/globalStyles';
import dossier from '../assets/images/clients/1dossier.webp';
import auzmor from '../assets/images/clients/auzmor.png';
import azure from '../assets/images/clients/azure.png';
import bitbucket from '../assets/images/clients/bitbucket.png';
import digitalocean from '../assets/images/clients/digitalocean.png';
import trice from '../assets/images/clients/trice.png';

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
    height: 100px;
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
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
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
    width: calc(200px * 12);

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-200px * 6));
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
    { id: 4, img: bitbucket },
    { id: 5, img: digitalocean },
    { id: 6, img: trice },
    { id: 7, img: dossier },
    { id: 8, img: auzmor },
    { id: 9, img: azure },
    { id: 10, img: bitbucket },
    { id: 11, img: digitalocean },
    { id: 12, img: trice }
];

export default function TrustedBy() {
    return (
        <>
            <Title>Trusted By</Title>
            <BG>
                <TopGrid container>
                    <Slider>
                        <SlideTrack>
                            {images.map((i) => (
                                <ImageGrid id={i.id} item>
                                    <Img src={i.img} alt="" />
                                </ImageGrid>
                            ))}
                        </SlideTrack>
                    </Slider>
                </TopGrid>
            </BG>
        </>
    );
}
