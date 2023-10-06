export const allBlogs= `query MyQuery {
    blogPosts {
      date
      blogPostSlug
      id
      image {
        url
      }
      text {
        html
      }
      title
      summary
    }
  }`