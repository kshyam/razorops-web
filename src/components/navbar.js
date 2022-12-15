import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { Button, CssBaseline, Grid, IconButton, Toolbar, AppBar, Collapse } from '@mui/material';
import logo1 from '../assets/images/logo.svg';
import logo2 from '../assets/images/razorops-logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';
import {
    color1,
    color4,
    font2,
    fontSize18,
    fontSize20,
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
import Topbar from './topbar';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const NavBar = styled(AppBar)`
    background: #ffffff;
    display: flex;
    justify-content: center;

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

const ToolBar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavBarGrid = styled(Grid)`
    position: relative;
    display: flex;
    padding: 0px 80px;
    align-items: center;
    height: 90px;

    @media (min-width: 1200px) and (max-width: 1535px) {
        padding: 0px 30px;
    }

    @media (min-width: 600px) and (max-width: 899px) {
        padding: 0px 20px;
    }

    @media (max-width: 599px) {
        padding: 0px 10px;
        justify-content: flex-start;
        align-items: center;
        height: 80px;
    }
`;

const Text = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight27};
    text-transform: none;
    color: ${(props) => props.color};

    @media (min-width: 1535px) {
        padding: 5px;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 15px;
        line-height: ${lineHeight27};
    }

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: ${lineHeight27};
    }
`;

const NavButton = styled(Button)`
    background: ${(props) => (props.active === true ? '#345eef' : '#ffffff')};
    &:hover {
        background: ${(props) => (props.active === true ? '#345eef' : '#f5f5f5')};
    }
`;

const LogoButton = styled(IconButton)`
    @media (min-width: 1535px) {
        padding-left: 50px;
    }
    &:hover {
        background: none;
    }
`;

const LogoButtonGrid = styled(Grid)`
    @media (max-width: 1199px) {
        display: flex;
        justify-content: center;
    }
`;

const MenuIconButton = styled(IconButton)`
    position: absolute;
    right: 20px;

    @media (min-width: 1199px) {
        display: none;
    }
`;

const Demo = styled('span')`
    ${font2};
    font-size: ${fontSize18};
    line-height: ${lineHeight26};
    color: #ffffff;
    text-transform: none;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 15px;
        line-height: ${lineHeight27};
    }
`;

const DemoButton = styled(Button)`
    width: 216.38px;
    height: 50px;
    background: ${color4};
    border-radius: 8px;
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

const DrawerItemsContainer = styled(Grid)`
    padding: 50px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 599px) {
        align-items: flex-start;
    }
`;

const ResourcesContainer = styled(Grid)`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 599px) {
        align-items: flex-start;
    }
`;

const DrawerButton = styled(Button)`
    background: transparent;
    &:hover {
        background: transparent;
    }
`;

const DrawerText = styled('span')`
    ${font2};
    font-size: ${fontSize20};
    line-height: ${lineHeight27};
    text-transform: none;
    color: #ffffff;
`;

const Logo1 = styled('img')`
    width: 202px;
    height: 33px;
    @media (max-width: 600px) {
        display: none;
    }
`;

const Logo2 = styled('img')`
    display: none;
    @media (max-width: 600px) {
        display: flex;
        height: 30px;
        width: 30px;
    }
`;

export default function Navbar({ showTopBar, setShowTopBar }) {
    const [showDrawer, setShowDrawer] = useState(false);
    const [anchorElProduct, setAnchorElProduct] = useState(null);
    const [anchorElResources, setAnchorElResources] = useState(null);
    const [anchorElCompany, setAnchorElCompany] = useState(null);
    const [open, setOpen] = React.useState(true);

    const openProduct = Boolean(anchorElProduct);
    const openResources = Boolean(anchorElResources);
    const openCompany = Boolean(anchorElCompany);

    const isPricingOpen =
        typeof window !== 'undefined' ? window.location.href.indexOf('pricing') !== -1 : false;
    const isProductOpen =
        typeof window !== 'undefined' ? window.location.href.indexOf('product') !== -1 : false;

    const handleClick = () => {
        setOpen(!open);
    };

    const handleTopBar = () => {
        setShowTopBar(!showTopBar);
    };

    const handleOpenProduct = (event) => {
        setAnchorElProduct(event.currentTarget);
        setAnchorElResources(null);
        setAnchorElCompany(null);
    };

    const handleOpenResources = (event) => {
        setAnchorElResources(event.currentTarget);
        setAnchorElProduct(null);
        setAnchorElCompany(null);
    };

    const handleOpenCompany = (event) => {
        setAnchorElCompany(event.currentTarget);
        setAnchorElProduct(null);
        setAnchorElResources(null);
    };

    const handleDrawerToggle = () => {
        setShowDrawer(!showDrawer);
    };
    return (
        <>
            <NavBar position="sticky">
                <CssBaseline />
                <ToolBar disableGutters>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            {showTopBar ? <Topbar handleTopBar={handleTopBar} /> : false}
                        </Grid>
                        <NavBarGrid item xs={12} sm={12} md={12} lg={12}>
                            <MenuIconButton onClick={handleDrawerToggle} aria-label="menu">
                                <MenuIcon
                                    style={{ color: '#345EEF', height: '30px', width: '30px' }}
                                />
                            </MenuIconButton>
                            <LogoButtonGrid item md={2}>
                                <LogoButton
                                    onClick={() => navigate('/')}
                                    color="inherit"
                                    aria-label="menu">
                                    <Logo1 src={logo1} alt="" />
                                    <Logo2 src={logo2} alt="" />
                                </LogoButton>
                            </LogoButtonGrid>
                            <NavSection item md={8}>
                                <Grid container spacing={1} justifyContent={'center'}>
                                    <Grid item>
                                        <NavButton
                                            onMouseEnter={handleOpenProduct}
                                            onClick={() => navigate('/product')}
                                            active={isProductOpen}
                                            style={{ display: 'flex', alignItems: 'center' }}>
                                            <Text
                                                color={isProductOpen === true ? '#ffffff' : color1}>
                                                Product
                                            </Text>
                                            <ExpandMoreIcon
                                                style={{ color: isProductOpen ? 'white' : 'black' }}
                                            />
                                        </NavButton>
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
                                    </Grid>
                                    <Grid item>
                                        <NavButton
                                            onClick={() => navigate('/pricing')}
                                            active={isPricingOpen}
                                            style={{ display: 'flex', alignItems: 'center' }}>
                                            <Text
                                                color={isPricingOpen === true ? '#ffffff' : color1}>
                                                Pricing
                                            </Text>
                                        </NavButton>
                                    </Grid>
                                    <Grid item>
                                        <NavButton
                                            style={{ display: 'flex', alignItems: 'center' }}
                                            onClick={() => navigate('https://docs.razorops.com/')}>
                                            <Text color={color1}>Documentation</Text>
                                        </NavButton>
                                    </Grid>
                                    <Grid item>
                                        <NavButton
                                            onMouseEnter={handleOpenCompany}
                                            style={{ display: 'flex', alignItems: 'center' }}>
                                            <Text color={color1}>Company</Text>
                                            <ExpandMoreIcon style={{ color: 'black' }} />
                                        </NavButton>
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
                                    </Grid>
                                    <Grid item>
                                        <NavButton
                                            onMouseEnter={handleOpenResources}
                                            style={{ display: 'flex', alignItems: 'center' }}>
                                            <Text color={color1}>Resources</Text>
                                            <ExpandMoreIcon style={{ color: 'black' }} />
                                        </NavButton>
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
                                                        text: 'Write For Us',
                                                        url: '/write-for-us'
                                                    }
                                                ]
                                            }}
                                            column3={{
                                                heading: 'Media & Publications',
                                                list: [
                                                    {
                                                        img: report,
                                                        text: 'Webinars',
                                                        url: '/webinars'
                                                    },
                                                    {
                                                        img: monorepos,
                                                        text: 'Newsletter',
                                                        url: '/newsletter'
                                                    },
                                                    {
                                                        img: hosted,
                                                        text: 'Blog',
                                                        url: '/blog'
                                                    },
                                                    {
                                                        img: report,
                                                        text: 'News and Updates',
                                                        url: '/news-and-updates'
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
                                    </Grid>
                                </Grid>
                            </NavSection>
                            <NavSection item md={2}>
                                <Grid container spacing={1} justifyContent={'flex-start'}>
                                    <Grid item>
                                        <NavButton
                                            style={{ display: 'flex', alignItems: 'center' }}
                                            onClick={() =>
                                                navigate('https://razorops.com/schedule-demo')
                                            }>
                                            <Text color={color1}>Talk to Sales</Text>
                                        </NavButton>
                                    </Grid>
                                    <Grid item>
                                        <NavButton
                                            style={{ display: 'flex', alignItems: 'center' }}
                                            onClick={() =>
                                                navigate(
                                                    'https://dashboard.razorops.com/users/sign_in'
                                                )
                                            }>
                                            <Text color={color1}>Login</Text>
                                        </NavButton>
                                    </Grid>
                                </Grid>
                            </NavSection>
                        </NavBarGrid>
                    </Grid>
                </ToolBar>
            </NavBar>
            <Drawer
                anchor={'left'}
                open={showDrawer}
                onClose={handleDrawerToggle}
                PaperProps={{ sx: { width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.9)' } }}
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
                                <CloseIcon
                                    style={{ color: '#345EEF', height: '30px', width: '30px' }}
                                />
                            </IconButton>
                        </Grid>
                        <DrawerItemsContainer container>
                            <DrawerItem item>
                                <DrawerButton onClick={() => navigate('/product')}>
                                    <DrawerText>Product</DrawerText>
                                </DrawerButton>
                            </DrawerItem>
                            <DrawerItem item>
                                <DrawerButton onClick={() => navigate('/pricing')}>
                                    <DrawerText>Pricing</DrawerText>
                                </DrawerButton>
                            </DrawerItem>
                            <DrawerItem item>
                                <DrawerButton
                                    onClick={() =>
                                        navigate('https://docs.razorops.com/getting_started/')
                                    }>
                                    <DrawerText>Docs</DrawerText>
                                </DrawerButton>
                            </DrawerItem>
                            <DrawerItem item>
                                <DrawerButton onClick={handleClick}>
                                    <DrawerText>Resources</DrawerText>
                                    {open ? (
                                        <ExpandLess style={{ color: '#ffffff' }} />
                                    ) : (
                                        <ExpandMore style={{ color: '#ffffff' }} />
                                    )}
                                </DrawerButton>
                            </DrawerItem>
                            <DrawerItem item>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <ResourcesContainer container>
                                        <DrawerItem item>
                                            <DrawerButton onClick={() => navigate('/blog')}>
                                                <DrawerText>Blog</DrawerText>
                                            </DrawerButton>
                                        </DrawerItem>
                                        <DrawerItem item>
                                            <DrawerButton onClick={() => navigate('/newsletter')}>
                                                <DrawerText>Newsletter</DrawerText>
                                            </DrawerButton>
                                        </DrawerItem>
                                        <DrawerItem item>
                                            <DrawerButton
                                                onClick={() => navigate('/news-and-updates')}>
                                                <DrawerText>News and updates</DrawerText>
                                            </DrawerButton>
                                        </DrawerItem>
                                        <DrawerItem item>
                                            <DrawerButton onClick={() => navigate('/webinars')}>
                                                <DrawerText>Webinars</DrawerText>
                                            </DrawerButton>
                                        </DrawerItem>
                                    </ResourcesContainer>
                                </Collapse>
                            </DrawerItem>
                            <DrawerItem item>
                                <NavLink to="https://razorops.com/schedule-demo">
                                    <DemoButton variant="contained">
                                        <Demo>Schedule a demo</Demo>
                                    </DemoButton>
                                </NavLink>
                            </DrawerItem>
                        </DrawerItemsContainer>
                    </Grid>
                </DrawerComponent>
            </Drawer>
        </>
    );
}
