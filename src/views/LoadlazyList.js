import React from 'react';
import 'react-virtualized/styles.css';
import List from 'react-virtualized/dist/commonjs/List'

class LoadlazyList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ['a','b','c']
        }
    }

    componentWillMount() {
        let list = []
        for(let i = 0;i< 10000;i++){
            list.push('daffssasdfffffffffffffffffffffffffffffffffff'+i)
        }
        this.setState({data: list})
    }

    rowRenderer = ({
        key,         // Unique key within array of rows
        index,       // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible,   // This row is visible within the List (eg it is not an overscanned row)
        style        // Style object to be applied to row (to position it)
      }) => {
        return (
            <div
              key={key}
              style={style}
            >
              {this.state.data[index]}
            </div>
          )
      }

      tests() {
          console.log(1)
          this.setState({})
      }

    render() {
        return(
            <div onClick={()=>{this.tests()}}>
                <List
                    width={300}
                    height={300}
                    rowHeight={100}
                    rowCount={this.state.data.length}
                    rowRenderer={this.rowRenderer}
                />
            </div>
        )
    }
}

export default LoadlazyList