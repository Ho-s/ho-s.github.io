import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  return (
    <Layout>
    <SEO title="Home" />
    <div>
        <h1>
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span style={{float:'right',fontSize:'15px',fontWeight:'600',color:'red'}}>{node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`