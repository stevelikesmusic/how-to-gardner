/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import {
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaGithubSquare,
} from 'react-icons/fa'

const listCss = css`
  grid-gap: 3%;
  justify-content: center;
  grid-template-columns: repeat(5, 60px);
  display: grid;
  margin-bottom: 40px;
`

const theSocials = [
  {
    link: 'https://linkedin.com/in/gardnersj',
    site: 'linkedin',
    Component: FaLinkedin,
    color: '#0077b5',
  },
  {
    link: 'https://facebook.com/gardnersj',
    site: 'facebook',
    Component: FaFacebook,
    color: '#3b5998',
  },
  {
    link: 'https://twitter.com/stevelikemusic',
    site: 'twitter',
    Component: FaTwitterSquare,
    color: '#55acee',
  },
  {
    link: 'https://instagram.com/stevelikemusic',
    site: 'instagram',
    Component: FaInstagram,
    color: '#517fa4',
  },
  {
    link: 'https://github.com/stevelikesmusic',
    site: 'github',
    Component: FaGithubSquare,
    color: 'black',
  },
]

const SocialLinksList = () => (
  <nav>
    <ul css={listCss}>
      {theSocials.map((social, i) => (
        <li key={`${i}_${social.site}`}>
          <a href={social.link}>
            <social.Component color={social.color} size="3em" />
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

export default SocialLinksList
