import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { font1, fontSize18, lineHeight29, font3 } from '../../assets/globalStyles';

import join from '../../assets/images/about-page/join.svg';

const Title = styled('span')`
    ${font3};
    font-size: 48px;
    line-height: 70px;
    color: #ffffff;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 27px;
        line-height: 45px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 30px;
        line-height: 45px;
    }

    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 27px;
        line-height: 40px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 25px;
        line-height: 35px;
    }
`;

const Desc = styled('span')`
    ${font1}
    font-size: ${fontSize18};
    line-height: ${lineHeight29};
    color: #ffffff;
    text-align: center;
`;

const LeftContainer = styled(Grid)`
    padding: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #000f30;
`;

const RightContainer = styled(Grid)`
    display: flex;
    justify-content: center;
    background: #ffffff;
`;

const Join = () => {
    return (
        <div>
            <Grid container>
                <LeftContainer container item spacing={3} xs={12} sm={12} md={6} lg={6}>
                    <Grid item display={'flex'} justifyContent={'center'}>
                        <Title>Join the Team!</Title>
                    </Grid>
                    <Grid item display={'flex'} justifyContent={'center'}>
                        <Desc>
                            {
                                "We're always on the lookout for like-minded folks to join our fast-growing global team. Join us in taking software delivery into the future."
                            }
                        </Desc>
                    </Grid>
                </LeftContainer>
                <RightContainer container item xs={12} sm={12} md={6} lg={6}>
                    <img alt="" src={join} />
                </RightContainer>
            </Grid>
        </div>
    );
};

export default Join;
