/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link, graphql } from 'gatsby'
import MainLayout from 'layouts/MainLayout'

const listCss = css({
  listStyleType: 'none',
  padding: 0,
})

const ArticlesIndex = ({ data }) => {
  const articleList = data.allMarkdownRemark.edges

  return (
    <MainLayout>
      <ul css={listCss}>
        {articleList.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              <div>
                <h1>{node.frontmatter.title}</h1>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  )
}

export default ArticlesIndex

export const articlesQuery = graphql`
  query AllArticles {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            title
            description
            date(formatString: "dddd, MMM DD YYYY")
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
