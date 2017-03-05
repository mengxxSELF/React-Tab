import React, {Component} from 'react'
import render from 'react-dom'
import './index.scss'

export default class Hot extends Component {
    constructor(props) {
        super(props)
        this.handleClick =this.handleClick.bind(this)
    }
    handleClick(e){
      e.target.parentNode.style.display='none'

    }
    render() {
        let hotDates = this.props.hotDates
        return (
            <ul className='hot'>
                {hotDates && hotDates.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>
                                <span>{item.name}</span>
                                <span>
                                    -- {item.singer}</span>
                            </p>
                            <b onClick={this.handleClick}>
                                取消收藏</b>
                        </li>
                    )
                })
}
            </ul>
        )
    }

}
