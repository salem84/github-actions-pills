import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


export default ({ children }) => {

    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
      )
    
    return (
        <div>
            <h1>{data.site.siteMetadata.title}</h1>
          <Link to={`/`}>
            <h3>
              Pandas Eating Lots
            </h3>
          </Link>
          <Link
            to={`/about/`}
          >
            About
          </Link>
          {children}
        </div>
      )      
}