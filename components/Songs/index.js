import React, {Component} from 'react'
import render from 'react-dom'

import './index.scss'

class Tab extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            panelState: this.props.panelState
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({panelState: nextProps.panelState})
    }

    handleClick(e) {
        if (this.state.panelState) {
            this.setState({
                panelState: !this.state.panelState
            })
            return
        }
        let index = Number(e.target.getAttribute('data-index'))
        this.props.handleClick(index)
    }
    render() {
        let {item, index} = this.props;
        let panelState = this.state.panelState
        let dis = panelState
            ? 'show'
            : 'hide'

        return (
            <div className='panel'>
                <div className='panelHead'>
                    <span>{item.class}</span>

                    <button data-index={index} onClick={this.handleClick}>{panelState
                            ? '折叠列表'
                            : '展开列表'
}</button>

                </div>
                <div className={`panelBody ${dis}`}>
                    <ul>
                        {item.songs.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span>{item.name}</span>
                                    <span>
                                        -- {item.singer}</span>
                                </li>

                            )
                        })
}
                    </ul>
                </div>
            </div>
        )
    }
}

export default class Songs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            panelIndex: null
        }
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(index) {
        this.setState({panelIndex: index})
    }

    render() {
        let {songsDates} = this.props

        return (
            <div className='panels'>
                {songsDates.map((item, index) => {
                    let tabProps = {
                        item: item,
                        index: index,
                        handleClick: this.handleClick,
                        panelState: (index == this.state.panelIndex
                            ? true
                            : false)
                    }
                    return (<Tab key={index} {...tabProps}/>)

                })
}

            </div>
        )
    }
}
