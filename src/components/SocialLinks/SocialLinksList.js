import { Link } from 'gatsby'
import {
  FaLinkedin,
  FaFacebook,
  FaTwitterSquare,
  FaInstagram,
  FaGithubSquare,
} from 'react-icons/fa'

const theSocials = [
  {
    link: 'https://linkedin.com/in/gardnerj',
    site: 'linkedin',
    Component: FaLinkedin,
    color: 'blue',
  },
  {
    link: 'https://facebook.com/gardnerj',
    site: 'facebook',
    Component: FaFacebook,
    color: 'blue',
  },
  {
    link: 'https://twitter.com/stevelikemusic',
    site: 'twitter',
    Component: FaTwitterSquare,
    color: 'blue',
  },
  {
    link: 'https://instagram.com/stevelikemusic',
    site: 'instagram',
    Component: FaInstagram,
    color: 'blue',
  },
  {
    link: 'https://github.com/stevelikesmusic',
    site: 'github',
    Component: FaGithubSquare,
    color: 'black',
  },
]

const SocialLinksList = () => (
  <ul>
    {theSocials.map(social => (
      <li>
        <Link to={social.link}>
          <social.Component color={social.color} />
        </Link>
      </li>
    ))}
  </ul>
)

export default SocialLinksList
