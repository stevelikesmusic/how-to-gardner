/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import HomeLink from 'components/HomeLink'

const headerCss = css({
  padding: '20px 40px',
  color: 'green',
})

const Header = ({ children }) => (
  <div>
    <div css={headerCss}>
      <HomeLink />
      <p>by Steve</p>
    </div>
    {children}
  </div>
)

export default Header
