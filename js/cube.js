canvas = document.getElementById('c');
// content = document.getElementById('content');

var scenes = [];
var renderers = [];
var texts = ["Home", "Work", "Projects", "Resume", "Contact"]

var color1 = new THREE.Color("rgb(244,42,1)");
var color2 = new THREE.Color("rgb(247,120,1)");
var color3 = new THREE.Color("rgb(252, 203, 74)");
var color4 = new THREE.Color("rgb(254, 242, 94)");
var color5 = new THREE.Color("rgb(85, 32, 0)");

var colors = [color1,color2,color3,color4,color5];
var width, height;
var numCubes = 5;

for(var i = 1; i <= numCubes; i++){
	var container = document.getElementById("canvas"+i);
	// .appendChild(container);

	var scene = new THREE.Scene();

	scene.userData.element = container;
	var camera = new THREE.PerspectiveCamera( 25, 1, 0.1, 1000);
	scene.userData.camera = camera;

	width = container.offsetWidth;
	height = container.offsetHeight;

	var renderer = new THREE.WebGLRenderer({antialias:true});
	renderer.setSize(width,height);
	container.appendChild(renderer.domElement);
	renderers.push(renderer);

	var geometry = new THREE.BoxGeometry(1,1,1);
	var material = new THREE.MeshStandardMaterial({
		color: colors[i-1],
		roughness: 0.2,
		metalness: 0,
		shading: THREE.FlatShading
	});
	var cube = new THREE.Mesh(geometry, material);
	cube.rotation.z += 0.15;
	scene.add(cube);

	scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));
	var light = new THREE.DirectionalLight(0xffffff, 0.5);
	light.position.set(1,1,1);
	scene.add(light);

	camera.position.z = 5;

	var label = document.createElement('div');
	label.style.position = 'absolute';
	label.style.color = 'white';
	label.style.width="100%";
	label.innerHTML = texts[i-1];
	label.style.textAlign = 'center';
	label.style.marginTop = -width/2-18+'px';
	label.style.fontSize = 20+'px';
	label.style.fontFamily = "\"HelveticaNeue-Bold\", \"Helvetica Neue Bold\", \"Helvetica Neue\", Helvetica";

	label.style.mozUserSelect = "-moz-none";
	label.style.khtmlUserSelect = "none";
	label.style.webkitUserSelect = "none";
	label.style.msUserSelect = "none";
	label.style.userSelect = "none";

	container.appendChild(label);

	scenes.push(scene);

	renderer.render(scene,camera);
}

var selectedIndex = 0;
var render = function(){
		var sc = scenes[selectedIndex];

		sc.children[0].rotation.x += 0.02;
		sc.children[0].rotation.y += 0.03;


		renderers[selectedIndex].render(sc,sc.userData.camera);
}

var animate = function(){
	requestAnimationFrame(animate);
	render();
}

animate();
