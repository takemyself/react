import React from 'react'
import { Table, Row, Col, Card } from 'antd';

class CTabledouble extends React.Component{
    onChange(pageNumber) {
        console.log(pageNumber)
    }

    onShowSizeChange(current, pageSize) {
       console.log(current, pageSize)
    }

    onDoubleClick(record) {
        console.log(record)
    }

    testDouble() {
        console.log(11)
    }

    render() {
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

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: text => <span>{text}</span>,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
        ];
        return(
            <div>
                <Row>
                    <Col span={6}>
                        <Card title="Default size card" extra={''} style={{ width: 300 }}>
                            <Row onDoubleClick={()=>this.testDouble()}>addfa</Row>
                            <Row onDoubleClick={()=>this.testDouble()}>addfa</Row>
                            <Row onDoubleClick={()=>this.testDouble()}>addfa</Row>
                            <Row onDoubleClick={()=>this.testDouble()}>addfa</Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Table
                            columns={columns}
                            dataSource={dataSource}
                            pagination={{
                                showQuickJumper: true,
                                showSizeChanger: true,
                                pageSize: 4,
                                total: 6,
                                showTotal: total => `Total ${total}`,
                                onChange:(pageNumber)=>{this.onChange(pageNumber)},
                                onShowSizeChange:(current, pageSize)=>{this.onShowSizeChange(current, pageSize)}
                            }}
                            onRow={record => {
                                return {
                                    onDoubleClick: event => {this.onDoubleClick(record)}
                                }
                            }}
                        />
                    </Col>
                    <Col span={6}>
                        <Card title="Default size card" extra={''} style={{ width: 300 }}>
                            <Row onDoubleClick={()=>this.testDouble()}>addfa</Row>
                            <Row onDoubleClick={()=>this.testDouble()}>addfa</Row>
                            <Row onDoubleClick={()=>this.testDouble()}>addfa</Row>
                            <Row onDoubleClick={()=>this.testDouble()}>addfa</Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CTabledouble