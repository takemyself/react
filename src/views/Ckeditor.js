import React from 'react'
// import { Spin } from 'antd'
import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import {ButtonView} from '@ckeditor/ckeditor5-react'

// console.log('xx', ButtonView)

class Ckeditor extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    render() {
        return(
            <div style={{width: '90%'}}>
                
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p foo='aaa' class='foo'>Hello from CKEditor 5!</p><div class='foo'>11</div>"
                    config={{
                        removePlugins: [],
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