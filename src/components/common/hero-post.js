import React from 'react';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import { Link } from 'gatsby';
import { Button, Grid } from '@mui/material';
import styled from '@emotion/styled';
import { font1, font7, font6 } from '../../assets/globalStyles';

const TextGrid = styled(Grid)`
    padding: 20px 50px;
    display: flex;
    flex-direction: column;

    @media (max-width: 899px) {
        padding: 20px 0px;
    }
`;

const Title = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 37px;
    color: #ffffff;
    text-transform: capitalize;

    &:hover {
        color: #000000;
    }

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 24px;
        line-height: 32px;
    }

    @media (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }
`;

const Desc = styled('span')`
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

const ReadMoreButton = styled(Button)`
    background: #f9fafe;
    border-radius: 14px;
    padding: 20px 30px;
    text-transform: none;

    &:hover {
        background: #f9fafe;
    }
`;

const ReadMoreText = styled('span')`
    ${font6};
    font-size: 20px;
    line-height: 20px;
    color: #0069ff;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 20px;
    }
`;

export default function HeroPost({ type, title, coverImage, date, description, author, slug }) {
    return (
        <Grid container>
            <Grid item display={'flex'} alignItems={'center'} xs={12} sm={12} md={6} lg={6}>
                <CoverImage
                    type={type}
                    imageType={'large'}
                    title={title}
                    fluid={coverImage.large}
                    slug={slug}
                />
            </Grid>
            <TextGrid item xs={12} sm={12} mg={6} lg={6}>
                <Grid container direction={'column'} spacing={2}>
                    <Grid item>
                        <Date whiteColor={true} dateString={date} />
                    </Grid>
                    <Grid item>
                        <Link to={`/${type}/${slug}`}>
                            <Title>{title}</Title>
                        </Link>
                    </Grid>
                    {description && (
                        <Grid item>
                            <Desc>{description}</Desc>
                        </Grid>
                    )}
                    {type === 'blog' ? (
                        <Grid item>
                            <Avatar
                                whiteColor={true}
                                name={author?.name}
                                role={author?.role}
                                picture={author?.picture}
                            />
                        </Grid>
                    ) : (
                        <Grid sx={{ margin: '20px 0px 0px 0px' }} item>
                            <Link to={`/${type}/${slug}`}>
                                <ReadMoreButton>
                                    <ReadMoreText>Read More</ReadMoreText>
                                </ReadMoreButton>
                            </Link>
                        </Grid>
                    )}
                </Grid>
            </TextGrid>
        </Grid>
    );
}
