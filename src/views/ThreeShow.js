import React from 'react'
import * as THREE from 'three';
// import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
// import audi from '../imgs/audi.stl'
import glb from '../imgs/Soldier.glb'



class ThreeShow extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
    }

    initLine = () => {
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
        camera.position.set( 0, 0, 100 );
        camera.lookAt( 0, 0, 0 );
        const points = [];
        points.push( new THREE.Vector3( - 10, 0, 0 ) );
        points.push( new THREE.Vector3( 0, 10, 0 ) );
        points.push( new THREE.Vector3( 10, 0, 0 ) );
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        const line = new THREE.Line( geometry, material );
        const scene = new THREE.Scene();
        scene.add( line );
        renderer.render( scene, camera );
    }

    init = () => {
        const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#stlCanvas')});
        const loader = new GLTFLoader();
        // const loader = new STLLoader();
        const scene = new THREE.Scene();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
        camera.position.set( 0, 0, 100 );
        camera.lookAt( 0, 0, 0 );
        loader.load(glb, (gltf) => {
            // gltf.scale.set(0, 0, 0);
            console.log('xx', gltf)
            scene.add(gltf);
            renderer.render( scene, camera );
        }, function ( xhr ) {
            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        }, function ( error ) {
            console.log('xx', error);
        })
        const spotLight = new THREE.SpotLight()
        spotLight.position.set(-10, 10, 10)
        scene.add(spotLight)
    }

    componentDidMount() {
        this.init()
    }

    render() {
        return(
            <div style={{width: '100%',position: 'relative', margin: '0 auto'}}>
                111
                <canvas id='stlCanvas'></canvas>
            </div>
        )
    }
}

export default ThreeShow