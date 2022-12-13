import React from 'react'
// import { Spin } from 'antd'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor5-custom-build-leo';
import { Button } from 'antd';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import {ButtonView} from '@ckeditor/ckeditor5-react'

// console.log('xx', ButtonView)

class Ckeditor extends React.Component{

    state = {
        value: null,
        loadSta: false,
        content: '',
        columns: [
            {
                field: 'titleName',
                headerName: '名称',
                width: 300,
                
            },
            {
                field: 'id',
                headerName: '描述',
                width: 300,
            }
        ],
        dataSource: [
            {
                titleName: "需求规格书",
                id: "0",
                className: '01',
                content: "<p>需求规格书</p>",
                children: [
                    {
                        titleName: "1.目录",
                        id: "1",
                        className: '011',
                        content: "<p>目录</p>",
                    },
                    {
                        titleName: "2.项目概要",
                        id: "2",
                        className: '012',
                        content: "<p>项目概要</p>",
                        children: [
                            {
                                titleName: "2.1.项目来源",
                                id: "2.1",
                                className: '0121',
                                content: "<p>项目来源</p>",
                            },
                            {
                                titleName: "2.2.产品定位",
                                id: "2.2",
                                className: '0122',
                                content: "<p>产品定位</p>",
                            },
                            {
                                titleName: "2.3.车辆使用场景",
                                id: "2.3",
                                className: '0123',
                                content: "<p>车辆使用场景</p>",
                            },
                            {
                                titleName: "2.4.主要信息描述",
                                id: "2.4",
                                className: '0124',
                                content: "<p>主要信息描述</p>",
                                children: [
                                    {
                                        titleName: "2.4.1.标准版技术要求",
                                        id: "2.4.1",
                                        className: '01241',
                                        content: "标准版技术要求"
                                    }, {
                                        titleName: "2.4.2.增强版技术要求",
                                        id: "2.4.2",
                                        className: '01242',
                                        content: "增强版技术要求"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        titleName: "3.项目环境",
                        id: "3",
                        className: '013',
                        content: "<p>项目环境</p>",
                    },
                    {
                        titleName: "4.技术和概念设计",
                        id: "4",
                        className: '014',
                        content: "<p>技术和概念设计</p>",
                    },
                    {
                        titleName: "5.附加要求",
                        id: "5",
                        className: '015',
                        content: "<p>附加要求</p>",
                    }
                ]
            }
        ]
    }

    getPosi = (level = '2') => {
        // let arr = document.querySelectorAll(`.titleH${level}`)
        let {dataSource} = this.state
        this.treeEach(dataSource, function(node, parent, i, level) {
            console.log('xx', document.querySelector(`.t${node.className}`).innerHTML)
            console.log('xx', document.querySelector(`.p${node.className}`).innerHTML)
        })
    }

    init = async () => {
        let {dataSource} = this.state
        let content = ""
        this.treeEach(dataSource, function(node, parent, i, level) {
            node.level = level + 2
            let title = `<h${level + 2} class='titleH${level + 2} t${node.className}'>${node.titleName}</h${level + 2}>`
            content += node.content ? title + `<div class='p${node.className}'>${node.content}</div>` : title
        })
        this.setState({content})
    }

    treeEach(data, callback, field = 'children', parent = null, level = 0) {
        for (let i = 0; i < data.length; i++) {
            let node = data[i];
            if (callback.call(node, node, parent, i, level, data) === false) {
                return false;
            }
            if (node[field] && node[field].length) {
                if (this.treeEach(node[field], callback, field, node, level + 1) === false) {
                    return false;
                }
            }
        }
    }

    componentDidMount() {
        this.init()
    }

    render() {
        let {content = ''} = this.state
        return(
            <div style={{width: '90%'}}>
                <Button onClick={() => this.getPosi()}>试试</Button>
                <CKEditor
                    editor={ ClassicEditor }
                    // data="<h2 class='h1'>h1</h2><p foo='aaa' class='foo'>Hello from CKEditor 5!</p><div class='foo'>foo</div><div class='fff'>fff</div><span class='ck-sss'>span</span>"
                    data={content}
                    config={{
                        removePlugins: [],
                        htmlSupport: {
                            allow: [
                                {
                                    name: /^(div|p|h[1-9])$/ ,
                                    classes: true
                                }
                            ]
                        }
                    }}
                    
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );
                        const data = editor.getData();
                        console.log('xx', data );
                        // const view = new ButtonView();
                        // view.set( {
                        //     label: 'A button',
                        //     keystroke: 'Ctrl+B',
                        //     tooltip: true,
                        //     withText: true
                        // } );

                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    // onBlur={ ( event, editor ) => {
                    //     console.log( 'Blur.', editor );
                    // } }
                    // onFocus={ ( event, editor ) => {
                    //     console.log( 'Focus.', editor );
                    // } }
                />
            </div>
        )
    }
}

export default Ckeditor