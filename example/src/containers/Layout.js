import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'redux-router5'

import { menus } from 'pure-css'
import layoutCss from '../components/Layout/Layout.css';
let styles = {}
Object.assign(styles, layoutCss)

class Layout extends Component {
    constructor(props, context) {
        super(props);
        this.router = context.router;
    }

    render() {
       

        return (
          
                <div styleName="layout">
                   
                </div>
           
        );
    }
}

Layout.contextTypes = {
    router: PropTypes.object.isRequired
};

export default connect(
    state => state.router.route,
    dispatch => bindActionCreators({ navigateTo: actions.navigateTo }, dispatch)
)( CSSModules(Layout, styles, {allowMultiple: true} ) );
