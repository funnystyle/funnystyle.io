import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Layout, Icon, Tooltip } from 'antd'

const { Header, Footer, Sider, Content } = Layout

const MyHeader = ({ siteTitle }) => (
  <Header>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '90%',
        // justifyContent: 'center',
      }}
    >
      <h1
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          margin: '0',
          padding: '0',
        }}
      >
        <Tooltip placement="bottomLeft" title={siteTitle}>
          <Link to="/" style={{ color: '#FFF' }}>
            <Icon type="home" />
          </Link>
        </Tooltip>
      </h1>
    </div>
  </Header>
)

MyHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MyHeader.defaultProps = {
  siteTitle: '',
}

export default MyHeader
