import React from "react"
import { graphql } from "gatsby"
import Layout from "./src/components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div style={{marginBottom:'200px'}}>
        <h4 style={{paddingBottom:'5px',borderBottom:'1px solid gray'}}>
          <span style={{color:'gray'}}>{post.frontmatter.title}</span>
          <span style={{float:'right',color:'red'}}>{post.frontmatter.date}</span>
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`