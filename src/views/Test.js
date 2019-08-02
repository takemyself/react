import React from 'react'
import Paginations from './Paginations'
import { Spin } from 'antd'


class Test extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
        this.pw = React.createRef();
    }


    propsEdit(data) {
        data = 1
    }

    // 获取分页的数据
    onPaginations=(data)=>{
        this.setState({loading: true},()=>{
            //模拟数据请求
            setTimeout(()=>{
                this.setState({loading: false})
            },1000)
        })
    }
    getRef() {
        console.log(this.pw.current.refTest())
    }

    componentDidMount() {
        // console.log(1111)
    }

    render() {
        let {loading} = this.state
        return(
            <Spin spinning={loading}>
                <div>
                    <div onClick={()=>{this.getRef()}}>test</div>
                    <Paginations onPaginations={this.onPaginations} ref={this.pw} />
                </div>
            </Spin>
        )
    }
}

export default Test