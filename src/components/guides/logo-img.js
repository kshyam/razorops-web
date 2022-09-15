import React from 'react';
import cn from 'classnames';
import { Link } from 'gatsby';

export default function LogoImage({ url, slug }) {
    const image = (
        <img
            style={{ display: 'block' }}
            src={url}
            alt={`Cover Image for ${url}`}
            className={cn('shadow-small', {
                'hover:shadow-medium  ': slug
            })}
        />
    );
    return (
        <div className="-mx-5 sm:mx-0">
            {slug ? (
                <Link to={`/posts/${slug}`} aria-label={title}>
                    {image}
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
