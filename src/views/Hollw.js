import React from 'react'
<<<<<<< HEAD
import Text from './Test'

class Hellw extends React.Component{
    constructor() {
        super()
        this.state = {
            aa: 1
        }
        this.name = {
            name: 222
        }
    }
    componentDidMount(){

    }
    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(nextState) === JSON.stringify(this.state)) {
            return false
        }else {
            return true
        }
    }
    test() {
        this.setState({
            aa: 22
        })
    }
    fatherEdit(stateAa) {
        this.setState(stateAa)
    }
    render() {
        let {aa} = this.state, {name} = this.name
        console.log(aa)
        console.log(name)
        return (
            <div>
                <div onClick={() => {this.test()}}>hellw  {aa} {name}</div>
                <Text onClicked={this.fatherEdit.bind(this)} data={aa}></Text>
            </div>
        )
    }
}

export default Hellw
=======
class Test export React.Component {
    render(){
        return ()
    }
}
>>>>>>> 83f10489e021744fd8399a5f4d00ee5ebadc0661
