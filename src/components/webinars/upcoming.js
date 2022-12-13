import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import bgPattern from '../../assets/images/backgroundPattern.png';
import { font1, font3, font6, font7 } from '../../assets/globalStyles';
import { Button, Grid } from '@mui/material';
import CoverImage from '../../components/common/cover-image';
import { StructuredText } from 'react-datocms';
import { GatsbyImage } from 'gatsby-plugin-image';
import moment from 'moment/moment';

const Title = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #f9fafe;

    @media (max-width: 599px) {
        font-size: 24px;
        line-height: 27px;
    }
`;

const Desc = styled('div')`
    ${font1};
    font-size: 18px;
    line-height: 27px;
    color: #ffffff;
    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 22px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 22px;
    }
`;

const TakeAways = styled('div')`
    ${font3};
    font-size: 20px;
    line-height: 30px;
    color: #f9fafe;
`;

const TextGrid = styled(Grid)`
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
`;

const UpcomingContainer = styled('div')`
    padding: 5px 10px;
    background: #002c9b;
    border-radius: 10px;
`;

const UpcomingText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 40px;
    color: #f9fafe;
`;

const DateText = styled('span')`
    ${font3};
    font-size: 18px;
    line-height: 28px;
    color: #f9fafe;
`;

const RegisterButton = styled(Button)`
    padding: 15px;
    background: #f9fafe;
    border-radius: 14px;
    text-transform: none;

    &:hover {
        background: #f9fafe;
    }
`;

const RegisterText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #0069ff;
`;

export default function Upcoming({ webinars }) {
    return (
        <Grid container>
            <Grid item display={'flex'} alignItems={'center'} xs={12} sm={12} mg={6} lg={6}>
                <CoverImage
                    type={'webinars'}
                    title={webinars.title}
                    fluid={webinars.coverImage.large}
                    slug={webinars.slug}
                />
            </Grid>
            <TextGrid item xs={12} sm={12} mg={6} lg={6}>
                <Grid container spacing={2}>
                    <Grid item>
                        <UpcomingContainer>
                            <UpcomingText>Our Upcoming Webinars</UpcomingText>
                        </UpcomingContainer>
                    </Grid>
                    <Grid item>
                        <Link to={`/webinars/${webinars.slug}`} className="hover:underline">
                            <Title>{webinars.title}</Title>
                        </Link>
                    </Grid>
                    <Grid item>
                        <TakeAways>Takeaways</TakeAways>
                        <div className="prose prose-xl prose-blue">
                            <Desc>
                                <StructuredText
                                    data={webinars.content}
                                    renderBlock={({ record }) => {
                                        if (record.__typename === 'DatoCmsImageBlock') {
                                            return (
                                                <GatsbyImage image={record.image.gatsbyImageData} />
                                            );
                                        }
                                        return (
                                            <>
                                                <p>Don't know how to render a block!</p>
                                                <pre>{JSON.stringify(record, null, 2)}</pre>
                                            </>
                                        );
                                    }}
                                />
                            </Desc>
                        </div>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={5} alignItems={'center'}>
                            <Grid item>
                                <DateText>
                                    {moment(webinars.date).format('MMMM Do YYYY, h:mm A')}
                                </DateText>
                            </Grid>
                            <Grid item>
                                <Link to={`/webinars/${webinars.slug}`}>
                                    <RegisterButton>
                                        <RegisterText>Register Now</RegisterText>
                                    </RegisterButton>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </TextGrid>
        </Grid>
    );
}
