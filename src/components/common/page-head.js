import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

export default function PageHead({ location, meta, children }) {
    const {
        site: { siteMetadata }
    } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        siteName
                        siteUrl
                    }
                }
            }
        `
    );
    const { siteName, siteUrl } = siteMetadata;
    const title = meta?.title;
    const image = meta?.image;
    const description = meta?.description;
    const canonical = location && `${siteUrl}${location.pathname}`;
    const twitterCreator = meta?.creator;
    const twitterCard = 'summary_large_image';
    return (
        <>
            <html lang="en" />
            <title>{title}</title>
            <link rel="canonical" href={canonical} />
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="twitter:card" content={twitterCard} />
            <meta name="twitter:creator" content={twitterCreator} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:image" content={image} />
            {children}
        </>
    );
}
