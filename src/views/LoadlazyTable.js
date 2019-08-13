import React from 'react'
import { Table } from 'antd';
import LazyLoad from 'react-lazyload';

class LoadlazyTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    onChange(pageNumber) {
        console.log(pageNumber)
    }

    onShowSizeChange(current, pageSize) {
       console.log(current, pageSize)
    }

    getData() {
        let data = []
        for(let i = 0; i< 1500; i++){
            data.push({
                key: i,
                name: '胡彦斌' + i,
                age: i
            })
        }
        return data;
    }
    componentDidMount() {
        let data = this.getData();
        this.setState({data})
    }

    render() {
        let {data} = this.state;
        console.log('开始',new Date())
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <LazyLoad height={100} offset={500}>{text}</LazyLoad>,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                render: (text, record) => {
                    return <LazyLoad height={100} offset={10}>{text}</LazyLoad>
                }
            }
        ];
        console.log('晕车',new Date())
        return(
            <div>
                <Table
                    columns = {columns}
                    dataSource = {data}
                    pagination = {false}
                />
            </div>
        )
    }
}

export default LoadlazyTable