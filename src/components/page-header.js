import React from "react";
import Grid from '@mui/material/Grid';
import { FormControl, OutlinedInput } from "@mui/material";
import styled from '@emotion/styled';
import {
    font2,
    font3,
    fontSize15,
    fontSize18,
    lineHeight29,
    fontWeight600,
    color4,
    lineHeight26,
    font7,
    font1
} from '../assets/globalStyles';
import bg from '../assets/images/intro-bg.png'
import { grey } from '@mui/material/colors';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const BG = styled('div')`
    margin-top: 60px;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
   overflow: hidden;

  
   
 border-radius:0 0 80% 80%/0 0 80% 80%;
`;

const TopSectionContainer = styled(Grid)`
    display: flex;
    height: 390px;
    justify-content: space-between;

    @media (max-width: 899px) {
        align-items: center;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        padding: 100px 80px 100px 80px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 100px 50px 100px 50px;
    }

    @media (min-width: 1535px) {
        padding: 90px 200px 
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 90px 180px 90px 180px;
    }

    @media (max-width: 600px) {
        padding: 60px 40px 100px 40px;
        justify-content: center;
    }
`;

const LeftContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 899px) {
        margin: 20px;
        text-align: center;
    }

    @media (max-width: 599px) {
        margin: 0px;
        text-align: left;
    }
`;

const RightContainer = styled(Grid)`
    display: flex;
    justify-content: center;
`;

const TextContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;



const Sub = styled('div')`
    ${font3};
    font-size: 60px;
    line-height: 90px;
    color: #ffffff;
    white-space: pre-wrap;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 50px;
        line-height: 77px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 44px;
        line-height: 53px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 64px;
        line-height: 77px;
    }

    @media (max-width: 600px) {
        font-size: 44px;
        line-height: 53px;
    }
`;

const Desc = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    color: #ffffff;
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 26px;
    }
`;

const greycolor = {
    background: '#fff',
    

};

const HeaderButton = styled('button')`
    
    background: #18204C;
    margin: 6px;
    padding: 2px ;
    border-radius: 6px;
    width: 130px;
    
`;

const ButtonText = styled('span')`
   
    ${font2};
    font-size: ${fontSize15};
    line-height: ${lineHeight29};
    color: #C4C4C4;
    white-space: pre-wrap;

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 16px;
        line-height: 26px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 18px;
        line-height: 29px;
    }

    @media (max-width: 599px) {
        font-size: 14px;
        line-height: 26px;
    }
`;


const PageHeader = () =>{
    return(
        <BG>
            <TopSectionContainer container sm={12} xs={12} md={12} lg={12}>
                <LeftContainer item xs={10} sm={12} md={7} lg={7}>
                    <TextContainer container item spacing={2}>
                        
                        <Grid item>
                            <Sub>{'Integration'}</Sub>
                        </Grid>
                        <Grid item>
                            <Desc>
                                {
                                    'Nowadays,  the increasingly growing number of mobile\nand computing devices'
                                }
                            </Desc>
                        </Grid>
                    </TextContainer>
                    
                </LeftContainer>
                <RightContainer container item xs={12} sm={12} md={5} lg={5}>
                    <TextContainer container item spacing={2}>
                        <Grid item>
                            <FormControl sx={{ width: '100%'}}>
                                <OutlinedInput sx={{ color: 'grey' , background:'white', fontSize:'18px', fontFamily:{font2}, borderRadius:'12px',   }} placeholder="Enter what you are searching for...." >
                                <SearchSharpIcon />
                                </OutlinedInput>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Desc>
                                {'May we suggest'}
                            </Desc>
                            <HeaderButton>
                                <ButtonText>
                                    {'Build Tool'}
                                </ButtonText>    
                                
                            </HeaderButton>
                            <HeaderButton>
                                <ButtonText>
                                    {'SCM'}
                                </ButtonText>  
                            </HeaderButton>
                            <HeaderButton>
                                <ButtonText>
                                    {'Testing'}
                                </ButtonText>  
                            </HeaderButton>
                        </Grid>
                    </TextContainer>    
                </RightContainer>
            </TopSectionContainer>
        </BG>
    )
}

export default PageHeader;