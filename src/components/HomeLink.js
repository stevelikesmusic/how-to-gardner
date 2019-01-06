/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Link, StaticQuery, graphql } from 'gatsby'

const homeLinkCss = css({
  color: 'green',
  textDecoration: 'none',
  ':visited': {
    color: 'green',
  },
})

const HomeLink = ({ data }) => (
  <Link css={homeLinkCss} to="/">
    <h1>{data.site.siteMetadata.title}</h1>
  </Link>
)

const query = graphql`
  query GetSiteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={query}
    render={data => <HomeLink data={data} {...props} />}
  />
)
