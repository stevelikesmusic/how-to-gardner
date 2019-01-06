import React from 'react'
import { Link } from 'gatsby'
import SocialLinks from 'components/SocialLinks/SocialLinksList'
import { SECTIONS } from 'utils/constants'
import MainLayout from 'layouts/MainLayout'
import SEO from '../components/seo'

const IndexPage = () => (
  <MainLayout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Hi there, you</h2>
    <p>
      My name is Steve. My 10 second TLDR; is I like to create. I used to play
      music, now I write code at Zapier. My family is amazing, and we travel all
      over the world.
    </p>
    <p>
      If you want to know more about me, the family, or what we’re doing, you
      can checkout the about page, or look us up on any of these fine platforms
      below:
    </p>
    <SocialLinks />
    {Object.entries(SECTIONS).map(([link, label]) => (
      <p>
        <Link to={`/${link}`}>{label}</Link>
      </p>
    ))}
  </MainLayout>
)

export default IndexPage
