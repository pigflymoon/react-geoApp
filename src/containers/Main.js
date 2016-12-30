import React, {createElement} from 'react';
import CSSModules from 'react-css-modules';
import {connect} from 'react-redux';
import {routeNodeSelector} from 'redux-router5';

import GridsDemo from './GridsDemo';
import ButtonsDemo from './ButtonsDemo';
import MenusDemo from './MenusDemo';
import FormsDemo from './FormsDemo';
import TablesDemo from './TablesDemo';
import NewsContainer from './NewsContainer';
import Intro from './Intro';

import NotFound from '../components/NotFound';

import sideCss from '../components/Menus/sideMenu.css';
let styles = {};
Object.assign(styles, sideCss);

const components = {
    'intro': Intro,
    'news': NewsContainer,
    'buttons': ButtonsDemo,
    'grids': GridsDemo,
    'menus': MenusDemo,
    'forms': FormsDemo,
    'tables': TablesDemo
};

function Main(props) {
    const {route} = props;
    const segment = route ? route.name.split('.')[0] : undefined;
    return createElement(components[segment] || NotFound,);
}

export default connect(routeNodeSelector(''))(Main);
