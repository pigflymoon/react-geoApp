import React from 'react'
import CSSModules from 'react-css-modules'

import { buttons, grids } from 'pure-css'
let styles = {}
Object.assign(styles, grids, buttons)

class Test extends React.Component {
    render () {
        return (
            <div styleName='pure-g'>
                <div styleName="pure-u-1">
                    <button styleName='pure-button'>A button in a grid</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(Test, styles);
// module.exports = Test;