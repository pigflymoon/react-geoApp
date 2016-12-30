import React from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import Buttons from '../components/Buttons/Buttons'

import Snippet from '../components/Snippet/Snippet'

import js from '!!raw!../components/Buttons/Buttons';
import css from '!!raw!../components/Buttons/Buttons.css';

function Intro(props) {

    const { route } = props;

    const files = [
        { name: './Buttons.js', source: js },
        { name: './Buttons.css', source: css }
    ];

    return (
        <div>
          Introduction
        </div>
    );
}

export default connect()(Intro)
