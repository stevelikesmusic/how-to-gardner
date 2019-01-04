/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link, graphql } from 'gatsby'
import Header from 'layouts/header'

const Article = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <Header>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Header>
  )
}

export default Article

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
