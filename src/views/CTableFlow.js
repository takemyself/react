import React from 'react'
import { Table, Row } from 'antd';

class CTableFlow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tableLeft: 10
        }
    }
    scrollHandler = this.handleScroll.bind(this);
    onChange(pageNumber) {
        console.log(pageNumber)
    }

    onShowSizeChange(current, pageSize) {
       console.log(current, pageSize)
    }

    test() {
        this.setState((prevState) => {
            return {tableLeft: prevState.tableLeft + 10}
          })
    }

    handleScroll(event) {
        let scrollLeft = event.srcElement.scrollLeft;
        let scrolBoxWidth = event.path[0].offsetWidth;
        let scrolLargeWidth = event.path[0].scrollWidth;
        console.log(scrollLeft, scrolLargeWidth - scrolBoxWidth)
        let tableLeft = (scrollLeft/(scrolLargeWidth - scrolBoxWidth) * 100).toFixed(0) + '%'
        this.setState(()=>{
            return {tableLeft}
        })

    }

    componentDidMount() {
        document.querySelector('#flowBox').addEventListener('scroll', this.scrollHandler);
    }

    render() {
        let {tableLeft} = this.state;
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖2',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '3',
                name: '胡彦祖3',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '4',
                name: '胡彦祖4',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '5',
                name: '胡彦祖5',
                age: 42,
                address: '西湖区湖底公园1号',
            },
            {
                key: '6',
                name: '胡彦祖6',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        let columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: '10%',
                render: (text) => <div style={{width: 100}}>{text}{tableLeft}</div>,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width: '10%',
                render: (text) => <div style={{width: 100}}>{text}{tableLeft}</div>
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width: 200,
                render: (text) => {
                    return(
                        <Row style={{width:'100%',overflow: 'hidden'}}>
                            <div style={{width: 800,position:'relative',background: 'green',right: tableLeft}}>
                                <span>{text}{text}{text}{text}{text}</span>
                            </div>
                        </Row>
                    )
                }
            },
        ];
        return(
            <div style={{width: 680, overflow:'hidden'}}>
                <div onClick={()=>{this.test()}}>test</div>
                <Row id={'flowBox'} style={{width:'400',overflowX: 'scroll'}}>
                    <div style={{width: 800,background: 'green'}}>
                        <span>assdaffffffffffffffffffffffffffffffffffffffassdaffffffffffffffffffffffffffffffffffffffassdaffffffffffffffffffffffffffffffffffffffassdaffffffffffffffffffffffffffffffffffffff</span>
                    </div>
                </Row>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                />
            </div>
        )
    }
}

export default CTableFlow