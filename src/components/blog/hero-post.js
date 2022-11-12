import React from 'react';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import { Link } from 'gatsby';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import { font1, font7, font8 } from '../../assets/globalStyles';

const TextGrid = styled(Grid)`
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
`;

const Title = styled('span')`
    ${font7};
    font-size: 28px;
    line-height: 32px;
    color: #18204c;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 24px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: #5b5b5b;

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

const DateText = styled('span')`
    ${font8};
    font-size: 14px;
    line-height: 29px;
    color: #5b5b5b;
`;

export default function HeroPost({ title, coverImage, date, excerpt, author, slug }) {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} mg={6} lg={6}>
                <CoverImage title={title} fluid={coverImage.large} slug={slug} />
            </Grid>
            <TextGrid item xs={12} sm={12} mg={6} lg={6}>
                <div>
                    <div className="mb-4 md:mb-0 text-lg">
                        <DateText>
                            <Date dateString={date} />
                        </DateText>
                    </div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link to={`/posts/${slug}`} className="hover:underline">
                            <Title>{title}</Title>
                        </Link>
                    </h3>
                </div>
                <div>
                    <p className="text-lg leading-relaxed mb-4">
                        <Desc>{excerpt}</Desc>
                    </p>
                    <Avatar name={author?.name} picture={author?.picture} />
                </div>
            </TextGrid>
        </Grid>
    );
}
