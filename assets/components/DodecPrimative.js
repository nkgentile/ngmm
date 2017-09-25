"use strict";

Vue.component('dodec-primative', {
	data: function(){
		return {
			scene: new THREE.Scene(),
			camera: new THREE.PerspectiveCamera( 45, 1, 0.1, 1000 ),
			renderer: new THREE.WebGLRenderer({
				alpha: true,
				antialias: true,
			}),
			light: new THREE.DirectionalLight( 0xaaaaaa, 2 ),
			ambientLight: new THREE.AmbientLight( 0x888888 ),
			
			geometry: new THREE.IcosahedronGeometry(),
			material: new THREE.MeshStandardMaterial({
				color: 0x223e7a,
				metalness: 0.0,
				emissive: 0x1e73be,
				emissiveIntensity: 1
			})
		};
	},
	
	methods: {
		render: function(){
			this.renderer.render(this.scene, this.camera);
			
			requestAnimationFrame(this.render);
		}
	},
	
	created: function(){
		this.light.position.set( 0, 0.5, 5 );
		this.light.castShadow = true;
		this.light.shadow.mapSize.width = 2048;
		this.light.shadow.mapSize.height = 2048;
		this.light.shadow.camera.near = 0.5;
		this.light.shadow.camera.far = 500;
		this.scene.add( this.light );
		
		var backboardGeometry = new THREE.PlaneGeometry( 100, 100 ),
			backboardMaterial = new THREE.MeshStandardMaterial({
				color: 0xffffff,
				metalness: 0.0
			}),
			backboard = new THREE.Mesh(
				backboardGeometry,
				backboardMaterial
			);
			backboard.receiveShadow = true;
			backboard.position.set( 0, 0, -1 );
			
			//this.scene.add( backboard );
		
		var icosahedron = new THREE.Mesh(
			this.geometry,
			this.material
		);
		icosahedron.castShadow = true;
		icosahedron.receiveShadow = false;
		this.scene.add( icosahedron );
		
		(function rotate(){
			var speed = 0.01;
			
			icosahedron.rotation.x += speed * 1;
			icosahedron.rotation.y += speed * 0.5;
			icosahedron.rotation.z += speed * 0.1;
			
			requestAnimationFrame(rotate);
		})();

		this.camera.position.z = 4;
		
		this.scene.add( this.ambientLight );
	},
	
	mounted: function(){
		var computedStyles = window.getComputedStyle(this.$el, null),
			elW = parseInt(computedStyles.width),
            elH = elW;
			
		this.renderer.setSize(
			elW,
			elH
		);
		this.renderer.setPixelRatio(1);
		this.renderer.shadowMap.enabled = false;
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
		this.render();
		
		this.$el.appendChild( this.renderer.domElement );
	},
	
	template: '<div id="dodecahedron"></div>'
});
