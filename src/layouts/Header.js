/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const headerCss = css({
  backgroundColor: 'tomato',
  width: '100%',
  padding: '20px 40px',
  color: 'white',
})

const Header = ({ children }) => (
  <div>
    <div css={headerCss}>
      <h1>How to Gardner</h1>
    </div>
    {children}
  </div>
)

export default Header
