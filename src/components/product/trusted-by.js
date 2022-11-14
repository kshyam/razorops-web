import React from 'react';
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { font1, fontSize18, lineHeight29, font3 } from '../../assets/globalStyles';

import dossier from '../../assets/images/product/trusted-by/1dossier.svg';
import pi from '../../assets/images/product/trusted-by/72pi.svg';
import applozic from '../../assets/images/product/trusted-by/applozic.svg';
import auzmor from '../../assets/images/product/trusted-by/auzmor.svg';
import dbmt from '../../assets/images/product/trusted-by/dbmt-group.svg';
import egnify from '../../assets/images/product/trusted-by/egnify.svg';
import railsroot from '../../assets/images/product/trusted-by/railsroot.svg';
import trice from '../../assets/images/product/trusted-by/trice.svg';
import yaxis from '../../assets/images/product/trusted-by/yaxis.svg';

const Title = styled('span')`
    ${font3};
    font-size: 48px;
    line-height: 70px;
    color: #ffffff;

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
`;

const LeftContainer = styled(Grid)`
    padding: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(180deg, #345eef 0%, #1717d2 100%);
`;

const RightContainer = styled(Grid)`
    padding: 60px 40px;
    display: flex;
    justify-content: center;
`;

const ImageGrid = styled(Grid)`
    display: flex;
    align-items: center;
    padding: 20px;
`;

const Img = styled('img')`
    width: 120px;
`;

const data = [
    dossier,
    pi,
    applozic,
    dbmt,
    auzmor,
    egnify,
    railsroot,
    trice,
    yaxis,
    dossier,
    railsroot,
    egnify,
    applozic,
    auzmor,
    pi,
    dbmt
];

const TrustedBy = () => {
    return (
        <div>
            <Grid container>
                <LeftContainer container item xs={12} sm={12} md={6} lg={6}>
                    <Grid item>
                        <Title>
                            Trusted by the growing engineering teams to build quality products
                        </Title>
                    </Grid>
                    <Grid item>
                        <Desc>{'Nowadays, the increasingly growing number of mobile '}</Desc>
                    </Grid>
                </LeftContainer>

                <RightContainer container item xs={12} sm={12} md={6} lg={6}>
                    {data.map((i) => (
                        <ImageGrid item md={3} lg={3}>
                            <Img alt="" src={i} />
                        </ImageGrid>
                    ))}
                </RightContainer>
            </Grid>
        </div>
    );
};

export default TrustedBy;
