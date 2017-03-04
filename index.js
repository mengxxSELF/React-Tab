import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

class App extends Component {
    render() {
        return (
            <div>app</div>
        )
    }
}

ReactDOM.render(
    <App/>, document.querySelector('#app'));
