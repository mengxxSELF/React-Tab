import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

export default class Hot extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
      let box= this.refs.myInput
      let dom = ReactDOM.findDOMNode(box)
      console.log(dom);
    }

    handleClick(e) {
        e.target.parentNode.style.display = 'none'

    }
    render() {
        let hotDates = this.props.hotDates
        return (
            <ul className='hot'>
                <Input ref='myInput'/>
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

let Input = (props) => {
    return (
        <div className="form-group">
            <input type="text" className="form-control" placeholder="search"/>
        </div>
    )
}
