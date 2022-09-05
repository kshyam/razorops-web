import React from "react";
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import ToolIntegration from "../components/tool-integration";
import Footer from "../components/footer";
import SignUp from "../components/sign-up";
import docker from '../assets/images/integration-tools/docker-blue-logo.png';
import bitbucket from '../assets/images/integration-tools/bitbucket-blue-logo.png';
import firebase from '../assets/images/integration-tools/firebase-logo.png';

import clientdossier from '../assets/images/clients/1dossier.png';
import clientauzmor from '../assets/images/clients/auzmor.png';
import clientazure from '../assets/images/clients/azure.png';
import clientbitbucket from '../assets/images/clients/bitbucket.png';
import clientdigitalocean from '../assets/images/clients/digitalocean.png';
import clienttrice from '../assets/images/clients/trice.png';

import Container from '../components/container';
import {
    color1,
    color2,
    font1,
    font3,
    fontSize18,
    lineHeight29
} from '../assets/globalStyles';

import '../styles/integration.css'



const BG = styled('div')`
    background: white;
    margin-top: 80px;

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
        padding: 70px 20px 70px 20px;
    }
`;

const BlueBG = styled('div')`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #FFF;
    margin-top: 80px;

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
        padding: 70px 20px 70px 20px;
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

const BoxSection= styled(Grid)`
    color: #FFF;
    padding: 0px 150px;

`;

const MainContainer = styled(Grid)`
    margin-top: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    @media (max-width: 899px) {
        justify-content: center;
    }

    @media (max-width: 599px) {
        margin-top: 30px;
    }
`;

const GridContent = styled('div')`
    ${font3};
    align-items: center;
    text-align: center;
    padding: 20px;
    border-radius: 6px;
    background-color: rgba(230, 227, 255, 0.971);
    border: 1px solid rgba(218, 214, 253, 0.8);
    box-shadow: 0 0 1px 0 rgba(18, 32, 73, 0.08), 0 8px 32px 0 rgba(29, 83, 231, 0.08);
    cursor: pointer;
`;

const BoxLink = styled('a')`
    color: #345eef;
    font-weight: 600;
`;
const BoxImage =styled('img')`
    height: 82px;
    align-items: center;
    text-align: center;
    margin: auto;
    margin-bottom: 20px;

`;

const BoxTitle = styled('h3')`
    
    color:#000;
    font-weight: 900;
    margin-bottom: 15px;
    font-size: 29px;

`;

const BoxDescription = styled('p')`
    color: rgb(111, 111, 111);  
    margin-bottom: 15px;
    font-weight: 600;
`;

const Slider = styled('div')`
    height: auto;
    margin-top: 50px !important;
    margin: auto;
    position: relative;
    width:80% ;
    place-items: center;
    overflow: hidden;

    &::before,
    &::after{
        background: linear-gradient(to right,#345def1c 0%,rgba(255,255,255,0) 100%);
        content: "";
        height: 100%;
        position: absolute;
        width: 15%;
        z-index: 2;
    }
    &::before{
        left:0;
        top:0;
    }
   
    &::after{
       right:0;
       top:0;
       transform: rotateZ(180deg);
   }
`;

const SlideTrack = styled('div')`
    display: flex;;
    width: calc(250px * 17);
    animation: scroll 40s linear infinite;

    @keyframes scroll {
        0%{
            transform: translateX(0);
        }
        100%{
            transform: translateX(calc(-250px * 9));
        }
    }

    &:hover{
        animation-play-state: paused;
    }
`;

const SlideBox = styled('div')`
    height: 200px;
    width: 240px;
    display: flex;
    align-items: center;
    padding: 8px;
    perspective: 100px;
`;

const Img = styled('img')`
    width: 210px;
    margin-right: 10px;
    transition: transform 1s;
    

    &:hover{
        transform: translateZ(20px);
    }
`;


const clientdata = [
    { id: 1, img: clientdossier },
    { id: 2, img: clientauzmor },
    { id: 3, img: clientazure },
    { id: 4, img: clientbitbucket },
    { id: 5, img: clientdigitalocean },
    { id: 6, img: clienttrice },
    { id: 7, img: clientdossier },
    { id: 8, img: clientauzmor },
    { id: 9, img: clientazure },
    { id: 10, img: clientbitbucket },
    { id: 11, img: clientdigitalocean },
    { id: 12, img: clienttrice },
    
  
];
export default function Integration(){
    return(
        <Container>
            <BG>
                <Title>RazorOps Integration</Title>
                <SubText>
                    {'Nowadays, the increasingly growing number of mobile\nand computing devices'}
                </SubText>

                <BoxSection>
                    <MainContainer container spacing={5}  >    
                        <Grid sm={4} className="gridpadding" >
                            <GridContent>
                                <BoxImage alt="GitHub" src={docker}></BoxImage>
                                <BoxTitle>Docker</BoxTitle>
                                <BoxDescription>Do integrate with your amazing favourite app.Integrations let you define access data to services in Razorops's pipelines. </BoxDescription>
                                <BoxLink>Read More</BoxLink>
                            </GridContent>
                        </Grid>
                        <Grid sm={4} className="gridpadding">
                            <GridContent>
                                <BoxImage alt="BitBucket" src={bitbucket}></BoxImage>
                                <BoxTitle>BitBucket</BoxTitle>
                                <BoxDescription>Do integrate with your amazing favourite app.Integrations let you define access data to services in Razorops's pipelines.</BoxDescription>
                                <BoxLink>Read More</BoxLink>
                            </GridContent>
                        </Grid>
                        <Grid sm={4} className="gridpadding">
                            <GridContent>
                                <BoxImage alt="Firebase" src={firebase}></BoxImage>
                                <BoxTitle>Firebase</BoxTitle>
                                <BoxDescription>Do integrate with your amazing favourite app.Integrations let you define access data to services in Razorops's pipelines.</BoxDescription>
                                <BoxLink>Read More</BoxLink>
                            </GridContent>
                        </Grid>
                    </MainContainer> 
                </BoxSection> 
                      
            </BG>
            <ToolIntegration/>
            <BlueBG>
                <Slider>
                    <SlideTrack>
                    {clientdata.map((i)=>(
                        <SlideBox id={i.id}>
                            <Img src={i.img} alt=""/>
                        </SlideBox>
                    ))}
                        
                    </SlideTrack>
                </Slider>
            </BlueBG>
            <SignUp />
            <Footer />
        </Container>
    );
};