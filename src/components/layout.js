import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

import { Layout } from 'antd'
const { Content, Footer } = Layout

const MyLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Layout className="layout">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content style={{ padding: '20px 20px 0' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Funnystyle.io ©2019 Created by funnystyle
        </Footer>
      </Layout>
    )}
  />
)

MyLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MyLayout
