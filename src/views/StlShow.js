import { Spin } from 'antd'
import React from 'react'
import {StlViewer} from "react-stl-viewer"
import audi from '../imgs/audi.stl'

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

class StlShow extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    show = (e) => {
        setTimeout(() => {
            this.setState({loading: false})
        }, 500)
    }

    render() {
        let {loading} = this.state
        return(
            <div style={{width: '100%',position: 'relative', margin: '0 auto'}}>
                <StlViewer
                    style={style}
                    url={audi}
                    // shadows={true}
                    onFinishLoading={this.show}
                />
                {
                    loading ?
                    <div style={{width: '100vw', height: '100vh', position: 'absolute', top: 0, background: '#fff', textAlign: 'center'}}>
                        <Spin size="large" />
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}

export default StlShow