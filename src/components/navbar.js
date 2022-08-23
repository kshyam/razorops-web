import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Button, CssBaseline, Grid, IconButton, Toolbar, AppBar } from '@mui/material';
import logo from '../assets/images/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';
import {
    color1,
    color4,
    font2,
    fontSize18,
    lineHeight26,
    lineHeight27
} from '../assets/globalStyles';
import { Drawer } from '@mui/material';

const NavBar = styled(AppBar)`
    background: white;
    display: flex;
    justify-content: center;
    height: 80px;
    background: transparent;
    box-shadow: none;
    &:hover {
        background: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    &.scrolled {
        background: #ffffff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
`;

const Text = styled('span')`
    padding: 10px;
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight27};
    color: ${color1};

    &:hover {
        background: #f2f2f2;
    }

    &:active {
        color: #345eef;
    }
`;

const LogoButton = styled(IconButton)`
    &:hover {
        background: none;
    }

    @media (max-width: 899px) {
        display: flex;
        justify-content: center;
    }
`;

const MenuIconButton = styled(IconButton)`
    @media (min-width: 1199px) {
        display: none;
    }
`;

const SignUpText = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: ${color4};
    text-transform: none;
`;

const SignUpButton = styled(Button)`
    width: 143.08px;
    height: 50px;
    background: #ffffff;
    border: 1px solid ${color4};
    border-radius: 15px;
`;

const Demo = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #ffffff;
    text-transform: none;
`;

const DemoButton = styled(Button)`
    width: 216.38px;
    height: 50px;
    background: ${color4};
    border-radius: 15px;
`;

const NavSection = styled(Grid)`
    @media (max-width: 1199px) {
        display: none;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
`;

const DrawerComponent = styled('div')`
    padding: 50px;
    display: flex;
    justify-content: center;
`;

const ToolbarComponent = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const DrawerItem = styled(Grid)`
    padding: 10px;
`;

export default function Navbar() {
    const [showDrawer, setShowDrawer] = useState(false);

    const handleDrawerToggle = () => {
        setShowDrawer(!showDrawer);
    };
    return (
        <>
            <NavBar position="fixed">
                <CssBaseline />
                <ToolbarComponent>
                    <MenuIconButton onClick={handleDrawerToggle} aria-label="menu">
                        <MenuIcon />
                    </MenuIconButton>
                    <LogoButton color="inherit" aria-label="menu">
                        <img src={logo} alt="" />
                    </LogoButton>
                    <Grid item />
                    <NavSection
                        spacing={1}
                        container
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <Grid item>
                            <NavLink to="/posts">
                                <Text>Blog</Text>
                            </NavLink>
                        </Grid>

                        <Grid item>
                            <NavLink>
                                <Text>Use-cases</Text>
                            </NavLink>
                        </Grid>

                        <Grid item>
                            <NavLink>
                                <Text>Resources</Text>
                            </NavLink>
                        </Grid>

                        <Grid item>
                            <NavLink>
                                <Text>Customers</Text>
                            </NavLink>
                        </Grid>
                    </NavSection>
                    <NavSection
                        spacing={2}
                        container
                        alignItems={'center'}
                        justifyContent={'flex-end'}>
                        <Grid item>
                            <NavLink>
                                <Text style={{ color: color4 }}>Login</Text>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <SignUpButton variant="outlined">
                                <SignUpText>Sign up</SignUpText>
                            </SignUpButton>
                        </Grid>
                        <Grid item>
                            <DemoButton variant="contained">
                                <Demo>Schedule a demo</Demo>
                            </DemoButton>
                        </Grid>
                    </NavSection>
                </ToolbarComponent>
            </NavBar>
            <Drawer
                anchor={'left'}
                open={showDrawer}
                onClose={handleDrawerToggle}
                PaperProps={{ sx: { width: '100%' } }}
                ModalProps={{
                    keepMounted: true
                }}>
                <DrawerComponent>
                    <Grid container spacing={3}>
                        <Grid
                            style={{ padding: '0px 0px 20px 0px' }}
                            container
                            justifyContent={'flex-end'}>
                            <IconButton
                                onClick={handleDrawerToggle}
                                color="inherit"
                                aria-label="menu">
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                        <Grid container direction={'column'} alignItems={'center'}>
                            <DrawerItem item>
                                <NavLink>
                                    <Text>Login</Text>
                                </NavLink>
                            </DrawerItem>
                            <DrawerItem item>
                                <SignUpButton variant="outlined">
                                    <SignUpText>Sign up</SignUpText>
                                </SignUpButton>
                            </DrawerItem>
                            <DrawerItem item>
                                <DemoButton variant="contained">
                                    <Demo>Schedule a demo</Demo>
                                </DemoButton>
                            </DrawerItem>
                            <DrawerItem item>
                                <NavLink to="/posts">
                                    <Text>Blog</Text>
                                </NavLink>
                            </DrawerItem>
                            <DrawerItem item>
                                <NavLink>
                                    <Text>Use-cases</Text>
                                </NavLink>
                            </DrawerItem>
                            <DrawerItem item>
                                <NavLink>
                                    <Text>Resources</Text>
                                </NavLink>
                            </DrawerItem>

                            <DrawerItem item>
                                <NavLink>
                                    <Text>Customers</Text>
                                </NavLink>
                            </DrawerItem>
                        </Grid>
                    </Grid>
                </DrawerComponent>
            </Drawer>
        </>
    );
}
