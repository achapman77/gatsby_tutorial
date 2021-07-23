import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const title = data.site.siteMetadata.title
  return (
    <main className={container}>
      <title>{pageTitle} | {title}</title>
      <p className={siteTitle}>{title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>Home</Link>
            </li>
          <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>About</Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>Blog</Link>
            </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}
export default Layout