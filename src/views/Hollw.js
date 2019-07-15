import React from 'react'
import Text from './Test'
import {arrayUnion, arrayIntersection, arrayDifference} from '../utils/arrayOperation'

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
        let arr1 = [{name:'name1',id:6},{name:'name2',id:2},{name:'name3',id:3}];
        let arr2 = [{name:'name1',id:6},{name:'name4',id:4},{name:'name5',id:5}];
        // let arr1 = [1,2,5,3]
        // let arr2 = [4,3]
        console.log(arrayUnion(arr1,arr2));
        console.log(arrayIntersection(arr1,arr2,true,'id'));
        console.log(arrayDifference())
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
        return (
            <div>
                <div onClick={() => {this.test()}}>hellw  {aa} {name}</div>
                <Text onClicked={this.fatherEdit.bind(this)} data={aa}></Text>
            </div>
        )
    }
}

export default Hellw
