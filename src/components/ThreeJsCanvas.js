import React, { Component} from 'react';
import './style.css';
import * as THREE from "three";

class ThreeJsCanvas extends Component{
    

    componentDidMount() {
        var scene = new THREE.Scene();
        scene.background = new THREE.Color( '#ffffff' );

        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer( { antialias: true } );

        renderer.setSize( window.innerWidth, window.innerHeight );
        var canvas = document.getElementById("canvas");
        canvas.appendChild( renderer.domElement );

        var geometry = new THREE.BoxGeometry();
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh( geometry, material );
        cube.position.y = 2;
        scene.add( cube );

        camera.position.z = 5;

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        }

        var animate = function () {
            requestAnimationFrame( animate );

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            window.addEventListener( 'resize', onWindowResize(), false );

            renderer.render( scene, camera );
        };

        animate();
    }
    render(){
        return(
            <div className="canvas" id="canvas"></div>
        );
    }
}

export default ThreeJsCanvas;