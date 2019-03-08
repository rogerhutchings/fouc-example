import React from "react"
import { Link } from "gatsby"
import { Grommet, Heading } from 'grommet'
import Foo from '@zooniverse/testlib'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Grommet>
      <Heading>yeah grommet</Heading>
      <Foo />
    </Grommet>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage