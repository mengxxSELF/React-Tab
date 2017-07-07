import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss'

import {Rank, Songs,Hot} from './components'

class Tabs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rank: false,
            songs: false,
            hot: true,
            rankDates: null
        }

        //this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount() {
        // 排行榜数据
        let rankDates = [
            {
                name: ' 棠梨煎雪',
                singer: '西瓜jun'
            }, {
                name: '刚好遇见你',
                singer: '排骨教主'
            }, {
                name: '山有木兮',
                singer: '伦桑'
            }

        ]

        let songsDate = [
            {
                class: '古风',
                songs: [
                    {
                        name: ' 棠梨煎雪',
                        singer: '西瓜jun'
                    }, {
                        name: '刚好遇见你',
                        singer: '排骨教主'
                    }
                ]
            }, {
              class:'岑岑',
              songs:[]
            },{
                class: '翻唱',
                songs: [
                    {
                        name: ' 棠梨煎雪',
                        singer: '西瓜jun'
                    }, {
                        name: '刚好遇见你',
                        singer: '排骨教主'
                    }, {
                        name: '山有木兮',
                        singer: '伦桑'
                    }
                ]
            }, {
                class: '欧美',
                songs: [
                    {
                        name: ' 棠梨煎雪',
                        singer: '西瓜jun'
                    }, {
                        name: '刚好遇见你',
                        singer: '排骨教主'
                    }, {
                        name: '山有木兮',
                        singer: '伦桑'
                    }
                ]
            }, {
                class: '流行',
                songs: [
                    {
                        name: ' 棠梨煎雪',
                        singer: '西瓜jun'
                    }, {
                        name: '刚好遇见你',
                        singer: '排骨教主'
                    }, {
                        name: '山有木兮',
                        singer: '伦桑'
                    }
                ]
            }
        ]
        // 热门数据
        let hotDates = [
            {
                name: '笔墨稠',
                singer: '伦桑'
            }, {
                name: '典狱司',
                singer: 'Mr.岑'
            },{
              name: '告白气球',
              singer: '萧忆情'
            }
        ]
        this.setState({rankDates: rankDates, songsDates: songsDate, hotDates: hotDates})

    }
    handleClick(e) {
        let tag = e.target
        let name = tag.getAttribute('data-name')
        let stateS = {
            rank: false,
            songs: false,
            hot: false
        }
        stateS[e.target.getAttribute('data-name')] = true
        this.setState(stateS)

    }

    render() {
        let {rank, songs, hot} = this.state;
        return (
            <div className='tabs'>
                <header>
                    <ul className={rank
                        ? 'rankShow'
                        : songs
                            ? 'songShow'
                            : 'hotShow'}>
                        <li data-name='rank' onClick={::this.handleClick}>排行榜</li>
                        <li data-name='songs' onClick={::this.handleClick}>歌单</li>
                        <li data-name='hot' onClick={::this.handleClick}>收藏</li>
                    </ul>
                </header>
                <div className='cont'>
                    {/*<Rank /> <Songs /> */}
                    {rank
                        ? <Rank rankDates={this.state.rankDates}/>
                        : (songs
                            ? <Songs songsDates={this.state.songsDates}/>
                            : <Hot hotDates={this.state.hotDates} />)
}

                </div>

            </div>
        )
    }
}

ReactDOM.render(
    <Tabs/>, document.querySelector('#app'));
