import './style.css'
import * as THREE from 'three'
import { Mesh } from 'three'

/**
 * Sizes
 */
 const sizes = {
    width: 800,
    height: 600
}


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Axes Helper 
 */

const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

/**
 * Objects / group
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
const mesh = new THREE.Mesh(geometry, material)

const group = new THREE.Group()
scene.add(group)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xAAFFFF})
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xAAAAFF})
)
cube2.position.x = -2
group.add(cube2)
group.add(cube1)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xFFAAFF})
)
cube3.position.x = 2
group.add(cube3)

//Mesh Position
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1
group.position.x = 1.1

//Mesh Scale
mesh.scale.set(2, 1, 0.5)
mesh.scale.set(1, 1, 1)
mesh.scale.set(2, 0.5, 0.5)

//Mesh Rotation (rotating by pi is a half rotation - a full rotation is 2*pi) - Using eulers 
mesh.rotation.reorder('YXZ')
mesh.rotation.y = 3.14159
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25
group.rotation.y = Math.PI * 0.25


/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 1
// camera.position.y = 1
scene.add(camera)
camera.lookAt(group.position)

//distance to the center of the screen (length of the position vector)
console.log(mesh.position.length())

//distance vector between two vectors
console.log(mesh.position.distanceTo(camera.position))

//normalize the position vector (set all to 1)
mesh.position.normalize()

//set the positon vector in one line
mesh.position.set(0.7, -0.6, 1)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)