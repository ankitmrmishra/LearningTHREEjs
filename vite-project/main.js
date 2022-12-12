import * as THREE from 'three' ;
import { Light } from 'three';
// create scene
const scene = new THREE.Scene();

// create geometry

const geometry = new THREE.SphereGeometry(3,64,64)
const material = new THREE.MeshPhysicalMaterial({
  color: "#776ff"
})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

// add lght
const light = new THREE.PointLight(0xffffff , 1, 100)
light.position.set(0,10,10)
scene.add(light)

// add a camera

const camera = new THREE.PerspectiveCamera(45, 800/600)
camera.position.z = 20
scene.add(camera)

// rendering

const canvas = document.querySelector('.bg')
const renderer = new THREE.WebGLRenderer({canvas})

renderer.setSize(800,600)
renderer.render(scene,camera)
