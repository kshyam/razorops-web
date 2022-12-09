import React from 'react';
import Avatar from './avatar';
import Date from './date';
import CoverImage from './cover-image';
import PostTitle from './post-title';

export default function PostHeader({ type, title, coverImage, date, author }) {
    return (
        <div className="max-w-4xl mx-auto">
            <PostTitle>{title}</PostTitle>
            <div className="m-10">
                <div>
                    <Date details={true} dateString={date} />
                </div>
                <div className="mt-2 mb-2">
                    <Avatar
                        details={true}
                        name={author?.name}
                        role={author?.role}
                        picture={author?.picture}
                    />
                </div>
            </div>
            <div className="m-10">
                <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
                    <CoverImage type={type} title={title} fluid={coverImage?.gatsbyImageData} />
                </div>
            </div>
        </div>
    );
}
