import React from 'react';
import writeForUs from '../assets/images/footer/write-for-us.svg';
import FooterComponent from '../components/common/footer-component';
import Footer from '../components/footer';
import bgPattern from '../assets/images/footer/backgroundPattern.svg';
import img1 from '../assets/images/footer/write-for-us/img1.svg';
import img2 from '../assets/images/footer/write-for-us/img2.svg';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { font6, font7 } from '../assets/globalStyles';

const ContentContainer = styled('div')`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;

    @media (min-width: 1535px) {
        padding: 150px;
    }
`;

const GridContainer = styled(Grid)`
    padding: 0px 100px;

    @media (min-width: 1535px) {
        padding: 0px 200px;
    }
`;

const Title = styled('span')`
    ${font7};
    font-size: 38px;
    line-height: 48px;
    color: #031b4e;
`;

const Sub = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 32px;
    color: #293241;
`;

const list1 = [
    'Code compilation/build',
    'Artifact packaging',
    'Testing Automation(unit, integration, acceptance, etc.)',
    'Faster builds and shipping to production'
];

const list2 = [
    'You can freely explore the DevOps entrepreneurial space in-depth which will help you to craft your writing style. As BONUS, you learn effective writing techniques for our industry.',
    'This is a platform where you express your views, thoughts, and ideas in front of a global DevOps community and make a difference. The article must fall under the scope of Razorops (eg- DevOps, Kubernetes, Docker, CI/CD, etc). Do share your titles with us at <a href="mailto:support@razorops.com" style="color: #0069ff; text-decoration: underline;">support@razorops.com</a>. Please check out <a href="/blog" style="text-decoration: underline;">Razorops blog</a> for reference.',
    'EARN & LEARN while having FUN - <b>EARN $50 or more</b> on your published articles (Depending on the quality of your content)'
];

const instructions = [
    'Fresh & Original Content: We accept ONLY original and authentic content.',
    'Topic Relevance: We cover topics around & about razorops and CI/CD pipeline, so please focus on these areas while coming up with unique topic ideas. We are looking for practical, actionable content that adds value to our readers.',
    'Content Structure:1. The title of the blog- (Choose a unique title for your article. Check out Razorops blog for reference).2. The overall takeaways for readers.3. A three-sentence paragraph summarising the idea.',
    'Featured Image and supporting images: Please include images in the article. Every submission should at least have one featured image, which is mandatory for publication. Please make sure that the images are not copyrights-controlled.',
    'Ownership and Syndication:<br>1. Razorops will own the rights to all the submitted articles and by submitting you will agree that we can make changes to the articles by discussing them with you.<br>2. If you republish the article elsewhere, please quote the Razorops blog as the source of the article, by putting the statement <b>“This article was originally published on the Razorops blog”<b> and by mentioning the link of the Razorops website and the original article, to the article.'
];

const terms = [
    'By Submitting to us you agree to permit us to post the content you submit on our Website.',
    'Your Submission cannot be published elsewhere, whether online or on the market, which includes your own website or blog.',
    'We focus to notify you about our decision within 45 days from the date you submit (Review Period).',
    'We will reach you using the email address you used when making the Submission.',
    "If we inform you that we plan to post your Submission it doesn't mean it will be posted immediately and we may post it eventually at our discretion.",
    'We may make changes to your Submission before posting it with your concern.'
];
export default function WriteForUs() {
    return (
        <>
            <FooterComponent heading="Write for us" img={writeForUs} contentContainer={false} />
            <ContentContainer>
                <img style={{ position: 'absolute', top: 0 }} src={bgPattern} alt="" />
                <Grid style={{ zIndex: 1 }} container direction={'column'} spacing={10}>
                    <Grid item md={12}>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <Title>About Razorops</Title>
                                    </Grid>
                                    <Grid item>
                                        <Sub>
                                            Razorops is a complete container native CI/CD solution
                                            handling all aspects of the software lifecycle from the
                                            moment a commit is created until it is deployed to
                                            production.
                                        </Sub>
                                    </Grid>

                                    <Grid item>
                                        <ul>
                                            {list1.map((i) => (
                                                <li
                                                    style={{
                                                        listStyleType: 'disc',
                                                        padding: '5px 0px'
                                                    }}>
                                                    <Sub>{i}</Sub>
                                                </li>
                                            ))}
                                        </ul>
                                    </Grid>
                                    <Grid item>
                                        <Sub>
                                            In a nutshell- Razorops is a container native continuous
                                            delivery platform to automate your workflow from
                                            development to production in a few simple steps.
                                        </Sub>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={6}>
                                <img alt="" src={img1} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <Grid container spacing={2}>
                            <Grid item md={6}>
                                <img alt="" src={img2} />
                            </Grid>
                            <Grid item md={6}>
                                <Grid container spacing={3}>
                                    <Grid item>
                                        <Title>What’s in it for you?</Title>
                                    </Grid>
                                    <Grid item>
                                        <ul>
                                            {list2.map((i) => (
                                                <li
                                                    style={{
                                                        listStyleType: 'disc',
                                                        padding: '5px 0px'
                                                    }}>
                                                    <Sub
                                                        dangerouslySetInnerHTML={{
                                                            __html: i
                                                        }}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={12}>
                        <GridContainer container spacing={5} justifyContent={'center'}>
                            <Grid item>
                                <Title>Instructions</Title>
                            </Grid>
                            <Grid item>
                                <ul>
                                    {instructions.map((i) => (
                                        <li style={{ listStyleType: 'disc', padding: '5px 0px' }}>
                                            <Sub
                                                style={{ lineHeight: '32px' }}
                                                dangerouslySetInnerHTML={{
                                                    __html: i
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </GridContainer>
                    </Grid>
                    <Grid item md={12}>
                        <GridContainer container spacing={5} justifyContent={'center'}>
                            <Grid item>
                                <Title>Terms and Conditions</Title>
                            </Grid>
                            <Grid item>
                                <ul>
                                    {terms.map((i) => (
                                        <li style={{ listStyleType: 'disc', padding: '5px 0px' }}>
                                            <Sub
                                                dangerouslySetInnerHTML={{
                                                    __html: i
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                        </GridContainer>
                    </Grid>
                </Grid>
            </ContentContainer>

            <Footer />
        </>
    );
}
