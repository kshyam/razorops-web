import React from 'react';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import { Link } from 'gatsby';
import { font1, font7, font8 } from '../../assets/globalStyles';
import styled from '@emotion/styled';

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

const DateText = styled('span')`
    ${font8};
    font-size: 14px;
    line-height: 29px;
    color: #5b5b5b;
`;

export default function PostPreview({ title, coverImage, date, excerpt, author, slug }) {
    return (
        <div>
            <div className="mb-5">
                <CoverImage slug={slug} title={title} fluid={coverImage.small} />
            </div>
            <div className="mb-4">
                <DateText>
                    <Date dateString={date} />
                </DateText>
            </div>
            <div className="mb-3">
                <Link to={`/blogs/${slug}`} className="hover:underline">
                    <Title> {title}</Title>
                </Link>
            </div>
            <div className="mb-4">
                <Desc>{excerpt}</Desc>
            </div>
            <Avatar name={author?.name} picture={author?.picture} />
        </div>
    );
}
