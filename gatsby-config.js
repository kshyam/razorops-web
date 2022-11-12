require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Gatsby Blog Demo'
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: process.env.DATO_API_TOKEN,
                environment: process.env.DATO_ENVIRONMENT
            }
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'pages',
                engine: 'flexsearch',
                query: `
                {
                  allPosts: allDatoCmsPost(sort: {fields: date, order: DESC}, limit: 20) {
                      nodes {
                        title
                        slug
                        excerpt
                        date
                        content {
                          value
                        }
                        coverImage {
                          large: gatsbyImageData(width: 1500)
                          small: gatsbyImageData(width: 760)
                        }
                        author {
                          name
                          picture {
                            gatsbyImageData(layout: FIXED, width: 48, height: 48, imgixParams: {sat: -100})
                          }
                        }
                      }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'author', 'content', 'excerpt', 'date', 'slug'],
                store: ['title', 'author', 'content', 'excerpt', 'date', 'slug', 'coverImage'],
                normalizer: ({ data }) =>
                    data.allPosts.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
                        coverImage: i.coverImage,
                        excerpt: i.excerpt,
                        author: i.author
                    }))
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp'
    ]
};
