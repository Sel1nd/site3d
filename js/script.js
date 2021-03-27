
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

renderer = new THREE.WebGLRenderer({alpha:true , antialias: true});
renderer.setClearColor(0x000000,0);
renderer.setSize(window.innerWidth , window.innerHeight);

renderer.domElement.setAttribute("id","Minecraft3DObj");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0x404040,5);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF,2);
scene.add(aLight);


let loader = new THREE.GLTFLoader();
let obj = null;

loader.load('../model/scene.gltf',function(gltf){
    obj = gltf;
    obj.scene.scale.set(0.4,0.4,0.4);
    obj.scene.position.set(7,7,3)
    scene.add(obj.scene);
});

function animate(){
    requestAnimationFrame(animate);

    if (obj)
    obj.scene.rotation.y += 0.01;

    renderer.render(scene,camera);
}
animate();



