/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core'
import Header from 'components/Header'
import sanitizeCss from 'utils/sanitize-css'

const mainCss = css({
  textAlign: 'center',
  margin: 'auto',
  maxWidth: 800,
})

const foo = css`
  * {
    color: tomato;
  }
`

const MainLayout = ({ children }) => (
  <main css={mainCss}>
    <Global styles={sanitizeCss} />
    <Header />
    {children}
  </main>
)

export default MainLayout
