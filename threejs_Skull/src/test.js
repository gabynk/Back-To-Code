// import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
// import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
// import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader'
// import CANNON from 'cannon-es'

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// /* models */
// // const dracoLoader=new DRACOLoader()
// // dracoLoader.setDecoderPath('/draco/')
// const gltfLoader=new GLTFLoader()
// // gltfLoader.setDRACOLoader(dracoLoader)
// let value=null
// gltfLoader.load(
//     // '/models/Buggy/glTF/Buggy.gltf'
//     '/models/ferrari/scene.gltf'
//     // '/models/car/scene.gltf'
//     ,
//     (gltf)=>{
//         const carModel = gltf.scene.children[ 0 ];

// 					carModel.getObjectByName( 'body' ).material = bodyMaterial;

// 					carModel.getObjectByName( 'rim_fl' ).material = detailsMaterial;
// 					carModel.getObjectByName( 'rim_fr' ).material = detailsMaterial;
// 					carModel.getObjectByName( 'rim_rr' ).material = detailsMaterial;
// 					carModel.getObjectByName( 'rim_rl' ).material = detailsMaterial;
// 					carModel.getObjectByName( 'trim' ).material = detailsMaterial;

// 					carModel.getObjectByName( 'glass' ).material = glassMaterial;

// 					wheels.push(
// 						carModel.getObjectByName( 'wheel_fl' ),
// 						carModel.getObjectByName( 'wheel_fr' ),
// 						carModel.getObjectByName( 'wheel_rl' ),
// 						carModel.getObjectByName( 'wheel_rr' )
// 					);

// 					// shadow
// 					const mesh = new THREE.Mesh(
// 						new THREE.PlaneGeometry( 0.655 * 4, 1.3 * 4 ),
// 						new THREE.MeshBasicMaterial( {
// 							map: shadow, blending: THREE.MultiplyBlending, toneMapped: false, transparent: true
// 						} )
// 					);
// 					mesh.rotation.x = - Math.PI / 2;
// 					mesh.renderOrder = 2;
// 					carModel.add( mesh );

// 					scene.add( carModel );

//     }
// )


// /**
//  * Floor
//  */
// const floor = new THREE.Mesh(
//     new THREE.PlaneBufferGeometry(10, 10),
//     new THREE.MeshStandardMaterial({
//         color: '#444444',
//         metalness: 0,
//         roughness: 0.5
//     })
// )
// floor.receiveShadow = true
// floor.rotation.x = - Math.PI * 0.5
// scene.add(floor)

// // window.addEventListener('mousemove',(event)=>{
// //     const xAxis=event.pageX/window.innerWidth
// //     const yAxis=-(event.pageY/window.innerHeight)

// //     floor.position.x=1-xAxis*2
// //     floor.position.y=1-yAxis*2
// // })
// /* car  */


// /**
//  * Lights
//  */
// const ambientLight = new THREE.AmbientLight(0xffffff, 1)
// scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
// directionalLight.castShadow = true
// directionalLight.shadow.mapSize.set(1024, 1024)
// directionalLight.shadow.camera.far = 15
// directionalLight.shadow.camera.left = - 7
// directionalLight.shadow.camera.top = 7
// directionalLight.shadow.camera.right = 7
// directionalLight.shadow.camera.bottom = - 7
// directionalLight.position.set(5, 5, 5)
// scene.add(directionalLight)

// /**
//  * Sizes
//  */
// const sizes = 
// {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () => {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.set(2, 2, 2)
// scene.add(camera)

// // Controls
// const controls = new OrbitControls(camera, canvas)
// controls.target.set(0, 0.75, 0)
// controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */
// const clock = new THREE.Clock()
// let previousTime = 0

// const tick = () => {
//     const elapsedTime = clock.getElapsedTime()
//     const deltaTime = elapsedTime - previousTime
//     previousTime = elapsedTime

//     // Update controls
//     controls.update()

//     // if(value!==null)
//     // {

//     //     value.update(deltaTime)
//     // }
//     // for ( let i = 0; i < wheels.length; i ++ ) {

//     //     wheels[ i ].rotation.x = time * Math.PI;

//     // }
//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()