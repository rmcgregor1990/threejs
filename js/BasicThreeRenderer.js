
function WebGLScene(convas){
    this.FOV = 75;
    this.CLIP_NEAR = 0.1;
    this.CLIP_FAR = 1000;
    this.WIDTH = canvas.width;
    this.HEIGHT = canvas.height;
    this.ASPECT = this.WIDTH/this.HEIGHT;
    this.CANVAS = canvas;

    this.initScene = function(colour, alpha){
        if(typeof(colour)==='undefined') colour = 0xffffff;
        if(typeof(alpha)==='undefined') alpha = 0;


        this.renderer = new THREE.WebGLRenderer({canvas: this.CANVAS, alpha: true});
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(this.FOV, this.ASPECT, this.CLIP_NEAR, this.CLIP_FAR);
        this.renderer.setClearColor(colour, alpha);
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        window.addEventListener( 'resize', this.redrawRenderCanvas.bind(this), false );
        this.camera.position.z = 5;

        this.controls = new THREE.TrackballControls( this.camera );
        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;
        this.controls.noZoom = false;
        this.controls.noPan = true;

        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;

        this.controls.keys = [ 65, 83, 68 ];

        light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 );
        this.scene.add( light );

        light = new THREE.DirectionalLight( 0x002288 );
        light.position.set( -1, -1, -1 );
        this.scene.add( light );

        light = new THREE.AmbientLight( 0x222222 );
        this.scene.add( light );
    }

    this.addCube = function (dims, pos, colour, name) {
        if(typeof(colour)==='undefined') colour = 0xffffff;
        if(typeof(name)==='undefined') name = "aCube";

        var SEGMENTS = 2;
        var dimentions = toVec3(dims);
        var geometry = new THREE.BoxGeometry(dimentions.x, dimentions.y, dimentions.z);
        var material = new THREE.MeshLambertMaterial({color: colour});
        var cube = new THREE.Mesh(geometry, material);
        cube.name = name;
        cube.position = toVec3(pos);
        this.scene.add(cube);
    }


    this.addSTL = function (Load_path, scale_dims, pos, colour, name) {
        if(typeof(colour)==='undefined') colour = 0xffffff;
        if(typeof(name)==='undefined') name = "STLModel";

        var dimentions = toVec3(scale_dims);
        var position = toVec3(pos);

        var loader = new THREE.STLLoader();
        loader.addEventListener( 'load', function ( event ) {

            var geometry = event.content;
            var material = new THREE.MeshLambertMaterial( {color: colour} );
            var bBox = geometry.boundingBox;
            var scale = dimentions.x/(bBox.max.x - bBox.min.x);
            geometry.applyMatrix4(new THREE.Matrix4().makeScale(scale,scale,scale));
            geometry.dynamic = true;
            geometry.verticesNeedUpdate = true;

            var mesh = new THREE.Mesh( geometry, material );
            mesh.position = position;
           //mesh.rotation.set( 0, - Math.PI / 2, 0 );
            mesh.name  = name;
            this.scene.add( mesh );

        } );
    }


    this.clearScene = function() {
        var objsToRemove = _.rest(scene.children, 1);
        _.each(objsToRemove, function( object ) {
              scene.remove(object);
        });
    }

    this.render = function () {
        requestAnimationFrame(this.render.bind(this));
        this.controls.update();
        this.renderer.render(this.scene, this.camera);     
    } 


    this.redrawRenderCanvas = function () {
    this.camera.aspect
    this.camera.aspect = this.ASPECT;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.controls.handleResize(); 
    }  
}   


//Useful Global Functions
function toVec3(a) {
    var ret = a;
    if ($.isArray(a))
    {
        ret = new THREE.Vector3(a[0],a[1],a[2]);
    }
    else if (x in a){
        ret = new THREE.Vector3(a.x,a.y,a.z);
    }
    return ret;
}

