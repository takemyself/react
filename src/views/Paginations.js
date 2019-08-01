import React from 'react'
import { Pagination } from 'antd';
/**
 * 分页组件
 * paginationParams:{pageSize, pageNumber}
 */
class Paginations extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pageSize: 10, //每页条数
            pageNumber: 1, //当前页
            ...props.paginationParams
        }
    }

    onChange(pageNumber) {
        this.setState({pageNumber},()=>{
            this.props.onPaginations(this.state)
        })
    }

    onShowSizeChange(current, pageSize) {
        this.setState({pageNumber: current, pageSize},()=>{
            this.props.onPaginations(this.state);
        });
    }

    shouldComponentUpdate() {
        return false;
    }

    componentDidMount(){
        this.props.onPaginations(this.state);
    }

    render() {
        let {pageSize} = this.state;
        return(
            <Pagination
                showQuickJumper
                showSizeChanger
                onShowSizeChange={(current, pageSize)=>{this.onShowSizeChange(current, pageSize)}}
                defaultCurrent={1}
                defaultPageSize={pageSize}
                total={500}
                showTotal={total => `Total ${total} items`}
                onChange={(pageNumber)=>{this.onChange(pageNumber)}}
            />
        )
    }
}

export default Paginations