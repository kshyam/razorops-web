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
                name: 'blog',
                engine: 'flexsearch',
                query: `
                {
                  allBlogs: allDatoCmsBlog(sort: {fields: date, order: DESC}, limit: 20) {
                      nodes {
                        title
                        slug
                        description
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
                          role
                          picture {
                            gatsbyImageData(layout: FIXED, width: 48, height: 48, imgixParams: {sat: -100})
                          }
                        }
                      }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'author', 'content', 'description', 'date', 'slug'],
                store: ['title', 'author', 'content', 'description', 'date', 'slug', 'coverImage'],
                normalizer: ({ data }) =>
                    data.allBlogs.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
                        coverImage: i.coverImage,
                        description: i.description,
                        author: i.author
                    }))
            }
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'newsletter',
                engine: 'flexsearch',
                query: `
                {
                    allNewsletters: allDatoCmsNewsletter(sort: { fields: date, order: DESC }, limit: 20) {
                      nodes {
                          title
                          slug
                          description
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
                              role
                              picture {
                                  gatsbyImageData(
                                      layout: FIXED
                                      width: 48
                                      height: 48
                                      imgixParams: { sat: -100 }
                                  )
                              }
                          }
                       }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'author', 'content', 'description', 'date', 'slug'],
                store: ['title', 'author', 'content', 'description', 'date', 'slug', 'coverImage'],
                normalizer: ({ data }) =>
                    data.allNewsletters.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
                        coverImage: i.coverImage,
                        description: i.description,
                        author: i.author
                    }))
            }
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'webinar',
                engine: 'flexsearch',
                query: `
                {
                    allWebinars: allDatoCmsWebinar(sort: { fields: date, order: DESC }, limit: 20) {
                    nodes {
                        title
                        slug
                        date
                        content {
                            value
                        }
                        coverImage {
                            large: gatsbyImageData(width: 1500)
                            small: gatsbyImageData(width: 760)
                        }
                      }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'content', 'date', 'slug'],
                store: ['title', 'content', 'date', 'slug', 'coverImage'],
                normalizer: ({ data }) =>
                    data.allWebinars.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
                        coverImage: i.coverImage
                    }))
            }
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'news',
                engine: 'flexsearch',
                query: `
                {
                    allNewsAndUpdates: allDatoCmsNewsAndUpdate(sort: { fields: date, order: DESC }, limit: 20) {
                        nodes {
                            title
                            slug
                            description
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
                                role
                                picture {
                                    gatsbyImageData(
                                        layout: FIXED
                                        width: 48
                                        height: 48
                                        imgixParams: { sat: -100 }
                                    )
                                }
                            }
                        }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'author', 'content', 'description', 'date', 'slug'],
                store: ['title', 'author', 'content', 'description', 'date', 'slug', 'coverImage'],
                normalizer: ({ data }) =>
                    data.allNewsAndUpdates.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
                        coverImage: i.coverImage,
                        description: i.description,
                        author: i.author
                    }))
            }
        },
        {
            resolve: 'gatsby-plugin-local-search',
            options: {
                name: 'ebooks',
                engine: 'flexsearch',
                query: `
                {
                  allEbooks: allDatoCmsEbook(sort: {fields: date, order: DESC}, limit: 20) {
                      nodes {
                        title
                        slug
                        description
                        date
                        content {
                          value
                        }
                        coverImage {
                          large: gatsbyImageData(width: 1500)
                          small: gatsbyImageData(width: 760)
                        }
                      }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'content', 'description', 'date', 'slug'],
                store: ['title', 'content', 'description', 'date', 'slug', 'coverImage'],
                normalizer: ({ data }) =>
                    data.allEbooks.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
                        coverImage: i.coverImage,
                        description: i.description
                    }))
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/assets/images/razorops.png'
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-transformer-sharp'
    ]
};
