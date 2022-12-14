import React from 'react';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import { Link } from 'gatsby';
import { font1, font7, font8 } from '../../assets/globalStyles';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const Container = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f9fafe;
`;

const Title = styled('span')`
    ${font7};
    font-size: 22px;
    line-height: 32px;
    color: #18204c;

    @media (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }
`;

const Desc = styled('span')`
    ${font1};
    font-size: 15px;
    line-height: 24px;
    color: #5b5b5b;

    @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

const ReadMoreButton = styled(Button)`
    background: #deecff;
    padding: 10px 0px;
    border-radius: 0px 0px 24px 24px;
    text-transform: none;
    min-width: -webkit-fill-available;

    &:hover {
        background: #deecff;
    }
`;

const ReadMoreText = styled('span')`
    ${font1};
    font-size: 16px;
    line-height: 29px;
    text-align: center;
    color: #5b6987;
`;

export default function PostPreview({ type, title, coverImage, date, description, author, slug }) {
    return (
        <Container>
            <div>
                <CoverImage type={type} slug={slug} title={title} fluid={coverImage.small} />
                <div className="m-4">
                    <Date dateString={date} />
                    <div className="mt-2">
                        <Link to={`/${type}/${slug}`} className="hover:underline">
                            <Title> {title}</Title>
                        </Link>
                    </div>
                    <div className="mt-2">
                        <Desc>{description}</Desc>
                    </div>
                </div>
            </div>
            {type === 'blog' && (
                <div className="m-4 mt-2">
                    <Avatar name={author?.name} role={author?.role} picture={author?.picture} />
                </div>
            )}
            {(type === 'newsletter' || type === 'news-and-updates') && (
                <div className="mt-5">
                    <Link to={`/${type}/${slug}`}>
                        <ReadMoreButton>
                            <ReadMoreText>Read More</ReadMoreText>
                        </ReadMoreButton>
                    </Link>
                </div>
            )}
        </Container>
    );
}
