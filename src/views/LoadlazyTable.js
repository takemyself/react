import React from 'react';
import 'react-virtualized/styles.css';
import { Column, Table } from 'react-virtualized';

class LoadlazyTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        let list = []
        for(let i = 0;i< 10000;i++){
            list.push(
                {
                    name: 'Brian Vaughn'+ i,
                    description: 'Software engineer',
                    children: [
                        {
                            name: 'Brian Vaughn'+ i + i,
                            description: 'Software engineer',
                            children: []
                        }
                    ]
                }
            )
        }
        this.setState({data: list})
    }

    render() {
        return(
            <div>
                <Table
                    width={500}
                    height={300}
                    headerHeight={20}
                    rowHeight={30}
                    rowCount={this.state.data.length}
                    rowGetter={({ index }) => this.state.data[index]}
                >
                    <Column
                    label='Name'
                    dataKey='name'
                    width={100}
                    />
                    <Column
                    width={200}
                    label='Description'
                    dataKey='description'
                    />
                </Table>
            </div>
        )
    }
}

export default LoadlazyTable