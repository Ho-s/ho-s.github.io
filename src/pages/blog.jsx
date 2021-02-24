import { Link, graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Blog" />
        <div style={{ marginBottom: '200px' }}>
          <h4 style={{ color: 'gray', paddingBottom: '5px', borderBottom: '1px solid gray' }}>Recent Posts</h4>
          <ul style={{ margin: 0, padding: 0 }}>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              if (node.frontmatter.description) {
                return (
                  <li className='markdown' style={{ transition: 'all .2s', listStyle: 'none', width: '80%', height: '170px', margin: '0 auto 40px', border: '1px solid #e9e9e9' }} key={node.id}>
                    <Link style={{ textDecoration: 'none', color: 'black', transition: 'all .4s' }} to={node.fields.slug}>
                      <div style={{ float: 'left', backgroundImage: `url(${node.frontmatter.test})`, backgroundSize: '240px 170px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '30%', height: '100%' }}></div>
                      <div style={{ float: 'left', padding: '20px', width: 'calc(70% - 40px)', height: 'calc(100% - 40px)' }}>
                        <div style={{ fontSize: '20px', fontWeight: '600', maxHeight: '26px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{node.frontmatter.title}</div>
                        <div style={{ float: "right", color: 'red' }}>{node.frontmatter.date}</div>
                        <div style={{ marginTop: '30px', textOverflow: 'ellipsis', overflow: 'hidden', height: '62px' }}>{node.excerpt}</div>
                      </div>
                    </Link>
                  </li>
                )
              } else {
                return false
              }
            })}
          </ul>
        </div>
      </Layout>
    </>
  )
}

export default Blog

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
            description
            test
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