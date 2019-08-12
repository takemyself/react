import React from 'react'
import {Row, Col} from 'antd'


class ChirldrenClick extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showData: [],
            showTitle: [],
            data: {
                    name: 'name1',
                    id: 1,
                    chirldren: [
                        {
                            name: 'name12',
                            id: 2,
                            pid: 1,
                            chirldren: [
                                {
                                    name: 'name22',
                                    pid: 2,
                                    id: 4,
                                    chirldren: [
                                        {
                                            id: 7,
                                            name: 'name22',
                                            pid: 4,
                                        },
                                        {
                                            id: 8,
                                            name: 'name23',
                                            pid: 4,
                                        }
                                    ]
                                },
                                {
                                    name: 'name23',
                                    pid: 2,
                                }
                            ]
                        },
                        {
                            id: 3,
                            name: 'name13',
                            pid: 1,
                            chirldren: [
                                {
                                    id: 5,
                                    name: 'name222',
                                    pid: 3,
                                },
                                {
                                    id: 6,
                                    name: 'name233',
                                    pid: 3,
                                }
                            ]
                        }
                    ]
                }
        }
    }

    checkChirld(item, k, name) {
        let {showData, showTitle} = this.state;
        let newTitle = [...showTitle];
        if(item >= 1 && showTitle.length === (item + 1)){
            newTitle = newTitle.slice(0, item)
            newTitle[item] = name;
        }else{
            newTitle.push(name);
        }

        if(item >= 1 && showData.length === (item + 1) && showData[item][k].chirldren && showData[item][k].chirldren.length) {
            showData.push(showData[item][k].chirldren);
        }else{
            showData[item + 1] = showData[item][k].chirldren;
        }
        this.setState({showData, showTitle:newTitle})
    }

    componentDidMount() {
        let {data} = this.state;
        let showTitle = []
        let showData = [];
        showData.push([data]);
        if(data.chirldren && data.chirldren.length){
            showData.push(data.chirldren)
        }
        showTitle.push(data.name)
        this.setState({showData, showTitle})
    }

    render() {
        let {showData, showTitle} = this.state
        let oindex  = 0
        if(!showData.length){return null}
        console.log(showData)
        return(
            <Row>
                <Row>展示：
                    {showTitle.map(item => item)}
                </Row>
                {
                    showData.map((item, index) => {
                        return(
                            <Row key={item.id}>
                                {
                                    item.map((v, k) => {
                                        return(
                                            <Col key={v.id} span={2} onClick={()=>this.checkChirld(index, k, v.name)}>{v.name}</Col>
                                        )
                                    })
                                }
                            </Row>
                        )
                    })
                }
            </Row>
        )
    }
}

export default ChirldrenClick