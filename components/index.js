import React, {Component} from 'react';
import render from 'react-dom';
import './index.css'

class Header extends Component {
    render() {
        return (
            <header>
                <ul className='tabHeader'>
                    <li>time</li>
                    <li>time</li>
                    <li>time</li>
                </ul>
            </header>

        )
    }
}

export default class Tabs extends Component {
    render() {
        return (
            <div className='tabs'>
                <Header />
            </div>
        )
    }
}
