import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'antd'

import MyLayout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <MyLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Button type="primary">
      <Link to="/">Go back to the homepage</Link>
    </Button>
  </MyLayout>
)

export default SecondPage
