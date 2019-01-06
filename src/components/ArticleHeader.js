/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import _ from 'lodash'
import { Link } from 'gatsby'
import HomeLink from 'components/HomeLink'
import { SECTIONS } from 'utils/constants'

const headerCss = css({
  maxWidth: 900,
  margin: '0 auto',
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const linkCss = css({
  paddingLeft: 20,
})

const ArticleHeader = () => (
  <nav css={headerCss}>
    <HomeLink />
    <div>
      {Object.keys(SECTIONS).map(sectionLink => (
        <Link css={linkCss} to={`/${sectionLink}`}>
          {_.capitalize(sectionLink)}
        </Link>
      ))}
    </div>
  </nav>
)

export default ArticleHeader
