import React, {Component} from 'react';
import './index.scss'


const Rank = (props) => {
    let {rankDates} = props
    let datalength = rankDates.length
    return (
        <ul className='rank'>
            {rankDates && rankDates.map((item, index) => {
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
    )
}
export default Rank
