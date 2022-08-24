import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Button, CssBaseline, Grid, IconButton, Toolbar, AppBar } from '@mui/material';
import logo from '../assets/images/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
import Dropdown from './common/dropdown';
import ios from '../assets/images/dropdown/ios-logo-razorops.png';
import kubernetes from '../assets/images/dropdown/docker&kubernetes-razorops.png';
import android from '../assets/images/dropdown/android-logo-razorops.png';
import monorepos from '../assets/images/dropdown/monorepos-razorops.png';
import report from '../assets/images/dropdown/test-report-razorops.png';
import hosted from '../assets/images/dropdown/self-hosted-razorops.png';
import github from '../assets/images/dropdown/github.svg';
import slack from '../assets/images/dropdown/slack.webp';
import aws from '../assets/images/dropdown/aws.png';
import bucket from '../assets/images/dropdown/bitbucket-blue-logo.png';
import gitlab from '../assets/images/dropdown/gitlab.webp';

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
    padding: 5px;
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

const DrawerItem = styled(Grid)`
    padding: 10px;
`;

export default function Navbar() {
    const [showDrawer, setShowDrawer] = useState(false);
    const [anchorElProduct, setAnchorElProduct] = useState(null);
    const [anchorElResources, setAnchorElResources] = useState(null);
    const [anchorElCompany, setAnchorElCompany] = useState(null);

    const openProduct = Boolean(anchorElProduct);
    const openResources = Boolean(anchorElResources);
    const openCompany = Boolean(anchorElCompany);

    const handleOpenProduct = (event) => {
        setAnchorElProduct(event.currentTarget);
    };

    const handleOpenResources = (event) => {
        setAnchorElResources(event.currentTarget);
    };

    const handleOpenCompany = (event) => {
        setAnchorElCompany(event.currentTarget);
    };

    const handleDrawerToggle = () => {
        setShowDrawer(!showDrawer);
    };
    return (
        <>
            <NavBar position="fixed">
                <CssBaseline />
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <MenuIconButton onClick={handleDrawerToggle} aria-label="menu">
                        <MenuIcon />
                    </MenuIconButton>
                    <LogoButton color="inherit" aria-label="menu">
                        <img src={logo} alt="" />
                    </LogoButton>
                    <Grid item />
                    <NavSection
                        spacing={2}
                        container
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <Grid item>
                            <NavLink to="/posts">
                                <Text>Blog</Text>
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink style={{ display: 'flex', alignItems: 'center' }}>
                                <Text>Product</Text>
                                <ExpandMoreIcon
                                    style={{ color: 'black' }}
                                    onMouseOver={handleOpenProduct}
                                />
                                <Dropdown
                                    open={openProduct}
                                    anchorEl={anchorElProduct}
                                    setAnchorEl={setAnchorElProduct}
                                    column1={{
                                        heading: 'Overview',
                                        sub: 'Product Overview',
                                        desc: 'Learn about Razorops - an industry-leading performance CI/CD tool'
                                    }}
                                    column2={{
                                        heading: 'User Cases',
                                        list: [
                                            {
                                                img: ios,
                                                text: 'IOS'
                                            },
                                            {
                                                img: kubernetes,
                                                text: 'Docker & Kubernetes'
                                            },
                                            {
                                                img: android,
                                                text: 'Android'
                                            }
                                        ]
                                    }}
                                    column3={{
                                        heading: 'Top Features',
                                        list: [
                                            {
                                                img: report,
                                                text: 'Test Reports'
                                            },
                                            {
                                                img: monorepos,
                                                text: 'Monorepos'
                                            },
                                            {
                                                img: hosted,
                                                text: 'Self-hosted agents'
                                            }
                                        ]
                                    }}
                                    column4={{
                                        heading: 'Tools',
                                        sub: 'Integrated Tools',
                                        desc: 'Drag and drop actions & create\ndelivery pipelines like a devops\nexpert in a fully visualized user\ninterface.',
                                        logos: [github, gitlab, aws, slack, bucket, aws]
                                    }}
                                />
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink style={{ display: 'flex', alignItems: 'center' }}>
                                <Text>Resources</Text>
                                <ExpandMoreIcon
                                    style={{ color: 'black' }}
                                    onMouseOver={handleOpenResources}
                                />
                                <Dropdown
                                    open={openResources}
                                    anchorEl={anchorElResources}
                                    setAnchorEl={setAnchorElResources}
                                    column1={{
                                        heading: 'Overview',
                                        sub: 'Resources Overview',
                                        desc: 'Learn about Razorops - an industry-leading performance CI/CD tool'
                                    }}
                                    column2={{
                                        heading: 'Documentation',
                                        list: [
                                            {
                                                img: ios,
                                                text: 'Documents'
                                            },
                                            {
                                                img: kubernetes,
                                                text: 'Get Started'
                                            },
                                            {
                                                img: android,
                                                text: 'Case Studies'
                                            },
                                            {
                                                img: android,
                                                text: 'Write For Us'
                                            }
                                        ]
                                    }}
                                    column3={{
                                        heading: 'Media & Publications',
                                        list: [
                                            {
                                                img: report,
                                                text: 'Webinars'
                                            },
                                            {
                                                img: monorepos,
                                                text: 'Newsletter'
                                            },
                                            {
                                                img: hosted,
                                                text: 'Blog'
                                            },
                                            {
                                                img: hosted,
                                                text: 'Videos'
                                            },
                                            {
                                                img: hosted,
                                                text: 'Community'
                                            }
                                        ]
                                    }}
                                    column4={{
                                        heading: 'Tools',
                                        sub: 'Integrated Tools',
                                        desc: 'Drag and drop actions & create\ndelivery pipelines like a devops\nexpert in a fully visualized user\ninterface.',
                                        logos: [github, gitlab, aws, slack, bucket, aws]
                                    }}
                                />
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink style={{ display: 'flex', alignItems: 'center' }}>
                                <Text>Company</Text>
                                <ExpandMoreIcon
                                    style={{ color: 'black' }}
                                    onMouseOver={handleOpenCompany}
                                />
                                <Dropdown
                                    open={openCompany}
                                    anchorEl={anchorElCompany}
                                    setAnchorEl={setAnchorElCompany}
                                    column1={{
                                        heading: 'Overview',
                                        sub: 'Company Overview',
                                        desc: 'Learn about Razorops - an industry-leading performance CI/CD tool'
                                    }}
                                    column2={{
                                        heading: 'Overview',
                                        list: [
                                            {
                                                img: ios,
                                                text: 'About Us'
                                            },
                                            {
                                                img: kubernetes,
                                                text: 'Customers'
                                            },
                                            {
                                                img: android,
                                                text: 'Open Source'
                                            }
                                        ]
                                    }}
                                    column3={{
                                        heading: 'Learn & Connect',
                                        list: [
                                            {
                                                img: report,
                                                text: 'Partner with Razorops'
                                            },
                                            {
                                                img: monorepos,
                                                text: 'Refer & Earn'
                                            },
                                            {
                                                img: hosted,
                                                text: 'Career'
                                            },
                                            {
                                                img: hosted,
                                                text: 'Contact Us'
                                            }
                                        ]
                                    }}
                                    column4={{
                                        heading: 'Socials',
                                        logos: [github, gitlab, aws, slack, bucket, aws]
                                    }}
                                />
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
                </Toolbar>
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
