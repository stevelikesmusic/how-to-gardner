/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const headerCss = css({
  backgroundColor: 'tomato',
  width: '100%',
  padding: '20px 40px',
  color: 'white',
})

const Header = () => (
  <div css={headerCss}>
    <h1>How to Gardner</h1>
  </div>
)

export default Header
