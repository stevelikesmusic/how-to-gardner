/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Header from 'components/Header'

const mainCss = css({
  textAlign: 'center',
  margin: 'auto',
  maxWidth: 800,
})

const MainLayout = ({ children }) => (
  <main css={mainCss}>
    <Header />
    {children}
  </main>
)

export default MainLayout
