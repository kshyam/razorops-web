require('dotenv').config();

module.exports = {
    siteMetadata: {
        siteUrl: 'https://dev.razorops.com',
        siteName: 'Razorops'
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
                  allBlogs: allDatoCmsBlog(sort: {date: DESC}, limit: 20) {
                      nodes {
                        title
                        slug
                        description
                        date
                        content {
                          value
                        }
                        author {
                          name
                          role
                        }
                      }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'author', 'content', 'description', 'date', 'slug'],
                store: ['title', 'author', 'content', 'description', 'date', 'slug'],
                normalizer: ({ data }) =>
                    data.allBlogs.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
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
                    allNewsletters: allDatoCmsNewsletter(sort: {date: DESC}, limit: 20) {
                      nodes {
                          title
                          slug
                          description
                          date
                          content {
                              value
                          }
                          author {
                              name
                              role
                          }
                       }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'author', 'content', 'description', 'date', 'slug'],
                store: ['title', 'author', 'content', 'description', 'date', 'slug'],
                normalizer: ({ data }) =>
                    data.allNewsletters.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
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
                    allWebinars: allDatoCmsWebinar(sort: {date: DESC}, limit: 20) {
                    nodes {
                        title
                        slug
                        date
                        content {
                            value
                        }
                      }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'content', 'date', 'slug'],
                store: ['title', 'content', 'date', 'slug'],
                normalizer: ({ data }) =>
                    data.allWebinars.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content
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
                    allNewsAndUpdates: allDatoCmsNewsAndUpdate(sort: {date: DESC}, limit: 20) {
                        nodes {
                            title
                            slug
                            description
                            date
                            content {
                                value
                            }
                            author {
                                name
                                role
                            }
                        }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'author', 'content', 'description', 'date', 'slug'],
                store: ['title', 'author', 'content', 'description', 'date', 'slug'],
                normalizer: ({ data }) =>
                    data.allNewsAndUpdates.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
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
                  allEbooks: allDatoCmsEbook(sort: {date: DESC}, limit: 20) {
                      nodes {
                        title
                        slug
                        description
                        date
                        content {
                          value
                        }
                      }
                    }
                  }`,
                ref: 'slug',
                index: ['title', 'content', 'description', 'date', 'slug'],
                store: ['title', 'content', 'description', 'date', 'slug'],
                normalizer: ({ data }) =>
                    data.allEbooks.nodes.map((i) => ({
                        title: i.title,
                        date: i.date,
                        slug: i.slug,
                        content: i.content,
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
        'gatsby-plugin-image',
        'gatsby-transformer-sharp'
    ]
};
