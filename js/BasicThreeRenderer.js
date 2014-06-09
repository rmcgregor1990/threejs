
function WebGLScene(canvas){
    this.FOV = 75;
    this.CLIP_NEAR = 0.1;
    this.CLIP_FAR = 1000;
    this.WIDTH = canvas.width;
    this.HEIGHT = canvas.height;
    this.ASPECT = this.WIDTH/this.HEIGHT;
    this.CANVAS = canvas;

    this.initScene = function(colour, alpha, params){
        if(typeof(colour)==='undefined') colour = 0xffffff;
        if(typeof(alpha)==='undefined') alpha = 0;
        if(typeof(params)==='undefined') params = new Object();

        params.canvas = this.CANVAS;
        params.alpha = true;

        this.renderer = new THREE.WebGLRenderer(params);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(this.FOV, this.ASPECT, this.CLIP_NEAR, this.CLIP_FAR);
        this.renderer.setClearColor(colour, alpha);
        this.renderer.setSize(this.WIDTH, this.HEIGHT);
        window.addEventListener( 'resize', this.redrawRenderCanvas.bind(this), false );
        this.camera.position.z = 20;

        this.controls = new THREE.TrackballControls( this.camera, this.renderer.domElement );
        this.controls.rotateSpeed = 0.8;
        this.controls.zoomSpeed = 0.8;
        this.controls.panSpeed = 0.8;
        this.controls.noZoom = false;
        this.controls.noPan = true;
        this.controls.minDistance = 10;
        this.controls.maxDistance = 70;

        //this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.2;
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
        //setCentre(geometry);
        var material = new THREE.MeshLambertMaterial({color: colour});
        var cube = new THREE.Mesh(geometry, material);
        cube.name = name;
        cube.position = toVec3(pos);
        cube.position.x += (dimentions.x /2);
        cube.position.y += (dimentions.y /2);
        cube.position.z += (dimentions.z /2);
        this.scene.add(cube);
    }


    this.addSTL = function (load_path, pos, colour, name, scale_dims) {
        if(typeof(scale_dims)==='undefined') scale_dims = [0,0,0];
        if(typeof(colour)==='undefined') colour = 0xffffff;
        if(typeof(name)==='undefined') name = "STLModel";

        var dimentions = toVec3(scale_dims);
        var position = toVec3(pos);

        var loader = new THREE.STLLoader();

        loader.addEventListener( 'load', function ( event ) {

            var geometry = event.content;
            setCentre(geometry);

            //Scale the geometry
            if (dimentions.x != 0){
                var bBox = geometry.boundingBox;
                var scale = dimentions.x/(bBox.max.x - bBox.min.x);
                geometry.applyMatrix(new THREE.Matrix4().makeScale(scale,scale,scale));
            }

            //rotate the geometry
            geometry.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI /2));

            geometry.dynamic = true;
            geometry.verticesNeedUpdate = true;

            var material = new THREE.MeshLambertMaterial( {color: colour} );
            var mesh = new THREE.Mesh( geometry, material );
            mesh.name = name;
            mesh.position = position;
            mesh.position.x += (dimentions.x /2);
            mesh.position.y += (dimentions.y /2);
            mesh.position.z += (dimentions.z /2);

            this.scene.add( mesh );

            //var helper = new THREE.BoundingBoxHelper( mesh);
            //helper.update();
            //this.scene.add(helper);

        }.bind(this));

        loader.load( load_path );
    }


    this.clearScene = function() {
        var objsToRemove = _.rest(this.scene.children, 1);
        _.each(objsToRemove, function( object ) {
              this.scene.remove(object);
        }.bind(this));
    }

    this.render = function () {
        requestAnimationFrame(this.render.bind(this));
        this.controls.handleResize();
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    this.exportToSTL = function () {
        var exporter = new THREE.STLExporter();
        return exporter.parse(this.scene);
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
    else if ('x' in a){
        ret = new THREE.Vector3(a.x,a.y,a.z);
    }
    return ret;
}


function toColour(a) {
    var colour = a;
    if ($.isArray(a))
    {
        colour = 255*parts[i].colour[0]*Math.pow(2,16)+255*parts[i].colour[1]*255+255*parts[i].colour[2];
    }

    return colour;
}



function setCentre(geometry, new_centre) {
    var geometry;
    geometry.computeBoundingBox();
    if(typeof(new_centre)==='undefined') new_centre = geometry.boundingBox.min;

    new_centre = new THREE.Vector3(0,0,0);
    THREE.GeometryUtils.center( geometry );
    var offset = toVec3(new_centre);
    geometry.applyMatrix( new THREE.Matrix4().makeTranslation( offset.x, offset.y, offset.z ) );
    geometry.computeBoundingBox();

    return offset;
}

