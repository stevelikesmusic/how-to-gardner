/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import { Link, graphql } from 'gatsby'
import ArticleHeader from 'components/ArticleHeader'
import sanitizeCss from 'utils/sanitize-css'

const mainCss = {
  maxWidth: 800,
  margin: '0 auto',
  fontSize: 20,
}

const Article = props => {
  const post = props.data.markdownRemark
  const siteTitle = props.data.site.siteMetadata.title

  return (
    <div>
      <Global styles={sanitizeCss} />
      <ArticleHeader />
      <main css={mainCss}>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </main>
    </div>
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
