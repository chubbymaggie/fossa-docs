import _ from 'underscore'
import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import createFragment from 'react-addons-create-fragment'
import { nuc } from '../js/utils.js'

var require_doc = require.context('../md/', true, /.+/)

var routes = { '/': []}
_.each(require_doc.keys(), route => {
  if (!route.endsWith('.md') && !route.endsWith('.js')) {
    return
  }

  var parts = route.split('/')
  if (parts.length <= 2) {
    routes['/'].push(route)
    return
  }
  var category = parts[1]
  if (!routes[category]) routes[category] = []
  routes[category].push(parts[parts.length - 1].slice(0, -3))
})

function slugToTitle (slug) {
  return slug.replace('-', ' ').replace(/(^| )(.)/g, $1 => $1.toUpperCase()).replace(')', '.')
}

var Documentation = React.createClass({
  render () {
    var page, activeCategory
    try {
      page = React.createElement(require_doc('./' + (this.props.params.splat || 'index') + '.md'))
      activeCategory = this.props.params.splat.split('/')[0]
    } catch (e) {}
    return (
      <div className='container margin-top documentation'>
        <Helmet title='Documentation' />
        <div className='row doc-quick-links'>
          <div className='col-md-3 doc-quick-link'>
            <Link activeClassName='active' to={'#'}>
              <i className='fa fa-circle-o large' />
              <h3>Quick Start</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales justo sit amet turpis dignissim.</p>
            </Link>
          </div>
          <div className='col-md-3 doc-quick-link'>
            <Link activeClassName='active' to={'#'}>
              <i className='fa fa-circle-o large' />
              <h3>Customize Policies</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales justo sit amet turpis dignissim.</p>
            </Link>
          </div>
          <div className='col-md-3 doc-quick-link'>
            <Link activeClassName='active' to={'#'}>
              <i className='fa fa-circle-o large' />
              <h3>Manage Files</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales justo sit amet turpis dignissim.</p>
            </Link>
          </div>
          <div className='col-md-3 doc-quick-link'>
            <Link activeClassName='active' to={'#'}>
              <i className='fa fa-circle-o large' />
              <h3>Resolve Issues</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales justo sit amet turpis dignissim.</p>
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <div className='docs-nav'>
              {createFragment(_.mapObject(_.omit(routes, '/'), (pages, category) => <div>
                <h3 key={'$docs-category-' + category} className={category == activeCategory ? 'active' : null}>{slugToTitle(category)}</h3>
                <ul className='nav nav-pills nav-stacked'>
                  {_.map(pages, route => <li key={'$docs-page-' + route}><Link activeClassName='active' to={'/docs/' + category + '/' + nuc(route)}>{slugToTitle(route)}</Link></li>)}
                </ul>
                <br />
              </div>))}
            </div>
          </div>
          <div className='col-md-9 documentation-container'>
            <div className='documentation-body'>
              {page ||
              <div>
                <h1>No Documentation Available</h1>
                No documentation is available for <b>"{slugToTitle(this.props.params.splat)}"</b>. {' '}
                <a href='mailto:support@fossa.io'>Request Documentation</a>
              </div>}
            </div>
          </div>
        </div>
      </div>
    )
  }

})

export default Documentation
