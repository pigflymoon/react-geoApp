import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import News from '../components/News/News'

import Snippet from '../components/Snippet/Snippet'

import js from '!!raw!../components/Buttons/Buttons';
import css from '!!raw!../components/Buttons/Buttons.css';

function NewsContainer(props) {

    const { route } = props;

    const files = [
        { name: './News.js', source: js },
        { name: './News.css', source: css }
    ];

    return (
        <div>
            <Snippet files={files}>
                <News />
            </Snippet>
        </div>
    );
}

export default connect()(NewsContainer)
