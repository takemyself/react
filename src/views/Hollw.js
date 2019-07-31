import React from 'react';
import LazyLoad from 'react-lazyload';
import imgs from '../imgs/load.jpeg'
import LazyImage from './LazyImage'

class Hellw extends React.Component{
    constructor() {
        super()
        this.state = {
            aa: 1,
            arr: [
                {a: 1},
                {a: 1},
                {a: 1}
            ]
        }
        this.name = {
            name: 222
        }
    }

    scrollHandler = this.handleScroll.bind(this);

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    }

    _handleScroll(scrollTop) {
        console.log(scrollTop)
        //滚动条距离页面的高度
    }
    handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop;
        let scrollY = event.path[1].scrollY // 滚动条滚动距离
        let scrollH = event.srcElement.body.scrollHeight //滚动条高度
        let windowH = event.path[1].innerHeight // 窗口高度
        console.log(scrollH - windowH, scrollY, scrollTop)
        // this._handleScroll(scrollTop);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(JSON.stringify(nextState) === JSON.stringify(this.state)) {
            return false
        }else {
            return true
        }
    }
    test() {
        let data= 'Hello world!';
        let blob = new Blob([data], {
            type: 'text/html,charset=UTF-8'
        });
        window.URL = window.URL || window.webkitURL;
        let a = document.createElement('a')
        a.download = 'data.txt'
        a.href = URL.createObjectURL(blob);
        a.click()
    }
    fatherEdit(stateAa) {
        this.setState(stateAa)
    }
    loadimg() {
        alert(1)
    }




    render() {
        return (
            <div>
                <div style={{height: '800px',background: 'green'}}></div>
                <LazyLoad height={400} offset={100}>
                    <div>
                        <img src={imgs} height={400} onClick={()=>{this.loadimg()}} alt="" />
                    </div>
                </LazyLoad>
                <div>3333</div>
                <div>
                    <LazyImage
                        srcset={imgs}
                        src='https://placehold.it/200x300?text=Image2'
                        alt="200x300"
                        width="200"
                        height="300"
                    />
                </div>
            </div>
        )
    }
}

export default Hellw
