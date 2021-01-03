import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

const IndexPage = ({data}) => {


  return (
    <Layout>
    <SEO title="Home" />
    <Helmet>
      <link rel="shortcut icon" type="image/x-icon" href="https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png" />
      <meta name="google-site-verification" content="Hv1uhwrkRDipEN3M6bZHEOFYjBado_jbT5QPE40pKjc" />
    </Helmet>
    <div style={{marginBottom:'200px'}}>
        <h4 style={{color:'gray',paddingBottom:'5px',borderBottom:'1px solid gray'}}>Recent Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          if(node.frontmatter.description){
            return(
              <div key={node.id}>
              <Link className='markdown' to={node.fields.slug}>
                <div  style={{marginBottom:'20px',fontSize:'20px',fontWeight:'600'}}>
                  {node.frontmatter.title}{" "}
                  <span style={{float:'right',fontSize:'15px',fontWeight:'600',color:'red'}}>{node.frontmatter.date}</span>
                </div>
                <div style={{marginBottom:'40px'}}>{node.frontmatter.description}</div>
              </Link>
            </div>
            )
          }else{
            return false
          }
        })}
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
            description
          }
          fields {
            slug
          }
          excerpt(pruneLength: 15)
        }
      }
    }
  }
`