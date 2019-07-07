import React from 'react'

class Test extends React.Component{
    propsEdit(data) {
        data = 1
    }
    render() {
        let {data} = this.props
        return(
            <div onClick={()=> this.props.onClicked({aa: 11})} >test {data}</div>
        )
    }
}s

export default Test