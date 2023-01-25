import React from 'react';
import { Grid, Menu } from '@mui/material';
import styled from '@emotion/styled';
import {
    color1,
    font1,
    font6,
    fontSize12,
    fontSize16,
    fontSize18,
    lineHeight20,
    lineHeight27
} from '../../assets/globalStyles';
import { Link } from 'gatsby';

const GridContainer = styled(Grid)`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background: #ffffff;
`;

const Title = styled('span')`
    ${font1};
    font-size: ${fontSize12};
    line-height: ${lineHeight27};
    color: #848484;
`;

const Text = styled('span')`
    ${font6};
    font-size: ${fontSize18};
    line-height: ${lineHeight27};
    color: ${color1};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 14px;
        line-height: 27px;
    }
    @media (min-width: 900px) and (max-width: 1199px) {
        font-size: 12px;
        line-height: 27px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        font-size: 12px;
        line-height: 27px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 27px;
    }
`;

const SubText = styled('span')`
    ${font1};
    font-size: ${fontSize16};
    line-height: ${lineHeight20};
    color: #848484;
    white-space: pre-wrap;
`;

const Divider = styled('div')`
    height: 1px;
    background: rgba(132, 132, 132, 0.2);
`;

const IconImg = styled('img')`
    margin: 0px 5px;
    width: 30px;
    height: 30px;
`;

const Logos = styled('img')`
    margin: 0px 20px;
    width: 30px;
    height: 30px;
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

function Container({ heading, sub, desc, list, logos }) {
    return (
        <Grid spacing={2} md={logos ? 5 : 2} sm={6} xs={6} container direction={'column'}>
            <Grid item>
                <Title>{heading}</Title>
            </Grid>
            <Divider />
            {sub && (
                <Grid item>
                    <Text>{sub}</Text>
                </Grid>
            )}

            {list &&
                list.map((i) => (
                    <Grid item>
                        <NavLink to={i.url}>
                            <Grid container>
                                <Grid item>
                                    <IconImg src={i?.img} alt="" />
                                </Grid>
                                <Grid item>
                                    <Text>{i?.text}</Text>
                                </Grid>
                            </Grid>
                        </NavLink>
                    </Grid>
                ))}
            <Grid md={6} item display={'flex'} flexDirection={'row'}>
                {desc && (
                    <Grid item>
                        <SubText>{desc}</SubText>
                    </Grid>
                )}
                <Grid item display={'flex'} flexDirection={'column'}>
                    <Grid item display={'flex'} flexDirection={'row'}>
                        {logos && logos.slice(0, 3).map((i) => <Logos src={i} alt="" />)}
                    </Grid>
                    <Grid
                        style={{ padding: '20px 0px 0px 0px' }}
                        item
                        display={'flex'}
                        flexDirection={'row'}>
                        {logos && logos.slice(3).map((i) => <Logos src={i} alt="" />)}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default function Dropdown({
    showTopBar,
    open,
    anchorEl,
    setAnchorEl,
    column1,
    column2,
    column3,
    column4
}) {
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Menu
            open={open}
            anchorEl={anchorEl}
            placement={'bottom'}
            sx={{
                pointerEvents: 'none'
            }}
            anchorReference="none"
            PaperProps={{
                onMouseLeave: handleClose,
                style: {
                    left: '0px',
                    top: showTopBar ? '130px' : '90px',
                    minWidth: '-webkit-fill-available',
                    borderRadius: '0px'
                }
            }}
            elevation={1}
            MenuListProps={{
                style: { pointerEvents: 'auto' }
            }}
            onClose={handleClose}>
            <GridContainer container>
                <Container heading={column1?.heading} sub={column1?.sub} desc={column1?.desc} />
                <Container heading={column2?.heading} list={column2?.list} />
                <Container heading={column3?.heading} list={column3?.list} />
                <Container
                    heading={column4?.heading}
                    sub={column4?.sub}
                    desc={column4?.desc}
                    logos={column4?.logos}
                />
            </GridContainer>
        </Menu>
    );
}
