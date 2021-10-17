import React, { Component } from 'react';
import * as THREE from "three";
// import * f/rom '';
class ThreeBackground extends Component {
    componentDidMount(){
        setTimeout( _=> {
        var container;

        var camera, scene, renderer;

        var geometry, group;

        var mouseX = 0, mouseY = 0;

        var windowHalfX = window.innerWidth / 2;
        var windowHalfY = window.innerHeight / 2;

        // document.addEventListener( 'mousemove', onDocumentMouseMove, false );

        init();
        animate();

        function init() {

            container = document.createElement( 'div' );
            const dom = document.getElementById("three");
            dom.appendChild( container );
            dom.classList.add("img-loaded");

            camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 50, 10000 );
            camera.position.z = 700;

            scene = new THREE.Scene();
            var fogColor = new THREE.Color(0xffffff);
            // var fogColor = new THREE.Color(0xff0000 );

            // scene.background = fogColor;
            scene.fog = new THREE.Fog(fogColor, 0.0025, 1000);

            var geometry = new THREE.BoxGeometry( 70, 70, 70 );
            // var material = new THREE.MeshNormalMaterial( { overdraw: 0.5 } );
            // const material = new THREE.MeshLambertMaterial({color: 0xffffff});
            const material = new THREE.MeshLambertMaterial( {
                color: 0xffffff,
                reflectivity: 1,
            } );

            // const light_p = new THREE.PointLight(0xffffff);
            // light_p.position.set(100, 100, 100);
            // scene.add(light_p);

            const light_a = new THREE.AmbientLight(0x404040, 1);
            scene.add(light_a);

            var light = new THREE.HemisphereLight( 0xffffff, 0x080820, 1 );
            scene.add( light );



            group = new THREE.Group();

            for ( var i = 0; i < 200; i ++ ) {

                var mesh = new THREE.Mesh( geometry, material );
                mesh.position.x = Math.random() * 2000 - 1000;
                mesh.position.y = Math.random() * 2000 - 1000;
                mesh.position.z = Math.random() * 2000 - 1000;
                mesh.rotation.x = Math.random() * 2 * Math.PI;
                mesh.rotation.y = Math.random() * 2 * Math.PI;
                mesh.matrixAutoUpdate = false;
                mesh.updateMatrix();
                group.add( mesh );

            }

            scene.add( group );
            // scene.background = new THREE.Color( 0xff0000 );

            renderer = new THREE.WebGLRenderer( {alpha: true } );
            // renderer.setClearColor( 0xffffff );
            renderer.setClearColor( 0x000000, 0 );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            container.appendChild( renderer.domElement );

            window.addEventListener( 'resize', onWindowResize, false );

        }

        function onWindowResize() {

            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();


            var h =  window.innerHeight;
            var w =  window.innerWidth;
            renderer.setSize(w, h );

        }

        function onDocumentMouseMove(event) {

            mouseX = ( event.clientX - windowHalfX ) * 10;
            mouseY = ( event.clientY - windowHalfY ) * 10;

        }

        //

        function animate() {
            requestAnimationFrame( animate );
            render();
        }

        var cnt = 0;
        var mx = 0;
        function render() {

            camera.position.x += ( mouseX - camera.position.x ) * .01;
            camera.position.y += ( - mouseY - camera.position.y ) * .01;
            camera.lookAt( scene.position );

            var currentSeconds = Date.now() ;
            group.rotation.x = Math.cos( currentSeconds * 0.0007 ) * 0.1;

            // if (Math.tan(currentSeconds * 0.0007) > mx ) {
            //     mx = Math.tan(currentSeconds * 0.0007)
            // }
            // if (cnt % 10 === 0) {
            //     console.log(mx)
            // }E
            // cnt++;


            group.rotation.y = Math.cos( currentSeconds * 0.0003 ) * 0.5;
            group.rotation.z = Math.cos( currentSeconds * 0.0002 ) * 0.5;

            renderer.render( scene, camera );

        }
            }, 1000);
    }
    render() {
        return (
            <div>
                <div id="three"/>
            </div>
        );
    }
}

export default ThreeBackground;
