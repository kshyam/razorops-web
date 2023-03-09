import React from 'react';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';
import styled from '@emotion/styled';

const Div = styled('div')`
    margin: 2.5rem 0;

    @media (max-width: 1199px) {
        margin: 2.5rem 0;
    }
`;

export default function PostHeader({ type, title, coverImage, date, author }) {
    return (
        <div className="max-w-4xl mx-auto">
            <PostTitle>{title}</PostTitle>
            <Div>
                <div>
                    <Date dateString={date} />
                </div>
                <div className="mt-2 mb-2">
                    <Avatar name={author?.name} role={author?.role} picture={author?.picture} />
                </div>
            </Div>
            <div className="mt-10 mb-10">
                <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
                    <CoverImage
                        type={type}
                        imageType={'large'}
                        title={title}
                        fluid={coverImage?.gatsbyImageData}
                    />
                </div>
            </div>
        </div>
    );
}
