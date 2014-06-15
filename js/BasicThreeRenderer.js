/**
 * The Base WebGLScene object
 * @param {canva domElement} canvas     The canvas element to render the Scene into
 */
function WebGLScene(canvas) {
    this.FOV = 75;
    this.CLIP_NEAR = 0.1;
    this.CLIP_FAR = 1000;
    this.WIDTH = canvas.width;
    this.HEIGHT = canvas.height;
    this.ASPECT = this.WIDTH / this.HEIGHT;
    this.CANVAS = canvas;
}

/**
 * initalizes the WebGl Scene
 * @param  {uint24} colour (Optional) colour of the window 0xRRGGBB
 * @param  {float} alpha  (Optional) Alpha of the render range 1-0
 * @param  {dict} params (Optional) The paramter dict passed to the WebGLRenderer
 * @return {None}
 */
WebGLScene.prototype.initScene = function(colour, alpha, params) {
    if(typeof(colour) === 'undefined') colour = 0xffffff;
    if(typeof(alpha) === 'undefined') alpha = 0;
    if(typeof(params) === 'undefined') params = new Object();

    params.canvas = this.CANVAS;
    params.alpha = true;

    try {
        this.renderer = new THREE.WebGLRenderer(params);
    }
    catch(err)
    {
        console.error("Error Could Not Create WebGL Context");
        throw(err);
    }

    this.billboards = [];
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.FOV, this.ASPECT, this.CLIP_NEAR, this.CLIP_FAR);
    this.renderer.setClearColor(colour, alpha);
    this.renderer.setSize(this.WIDTH, this.HEIGHT);

    //Event lister for canvas element resize
    window.addEventListener('resize', this.redrawRenderCanvas.bind(this), false );
    this.camera.position.z = 20;

    this.controls = new THREE.TrackballControls( this.camera, this.renderer.domElement );
    this.controls.rotateSpeed = 0.8;
    this.controls.zoomSpeed = 0.8;
    this.controls.panSpeed = 0.8;
    this.controls.noZoom = false;
    this.controls.noPan = true;
    this.controls.minDistance = 10;
    this.controls.maxDistance = 70;

    this.controls.update();
    this.controls.addEventListener( 'change', this.renderFrame.bind(this) );

    this.controls.dynamicDampingFactor = 0.2;
    this.controls.keys = [ 65, 83, 68 ];

    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 1, 1, 1 );
    this.scene.add( light );

    light = new THREE.DirectionalLight( 0x002288 );
    light.position.set( -1, -1, -1 );
    this.scene.add( light );

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.3 );
    directionalLight.position.set( 0, 1, -20 );
    this.scene.add( directionalLight );

    light = new THREE.AmbientLight( 0x222222 );
    this.scene.add( light );
}

/**
 * adds a cube to the rendered scene with a simple diffuse texture
 * @param {[x, y, z] or THREE.Vector3} dims     Dimentions of the created Cube
 * @param {[x, y, z] or THREE.Vector3} pos      Possition in the Scene to add to the Cube
 * @param {uint24} colour   (optional) 0xRRGGBB
 * @param {string} name     (optional) the name of the object
 * @return {THREE.Mesh}
 */
WebGLScene.prototype.addCube = function (dims, pos, colour, name) {
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
    cube.separate = false;
    this.scene.add(cube);

    return cube;
}

WebGLScene.prototype.drawLine = function (points, colour, width)  {
    if(typeof(colour)==='undefined') colour = 0x00ff00;
    if(typeof(width)==='undefined') width = 4;

    var start = toVec3(points[0]);
    var geometry = new THREE.Geometry();

    for (var i = points.length - 1; i >= 0; i--) {
        var point = toVec3(points[i])
        geometry.vertices.push(point.sub(start));
    };

    var type = THREE.LinePieces;
    var object = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: colour, linewidth: width } ), type );

    //object.position.x = Math.random() * 400 - 200;
    //object.position.y = Math.random() * 400 - 200;
    //object.position.z = Math.random() * 400 - 200;
    object.position = start;
    //object.rotation.x = Math.random() * 2 * Math.PI;
    //object.rotation.y = Math.random() * 2 * Math.PI;
    //object.rotation.z = Math.random() * 2 * Math.PI;

    //object.scale.x = Math.random() + 0.5;
    //object.scale.y = Math.random() + 0.5;
    //object.scale.z = Math.random() + 0.5;

    this.scene.add( object );
}

WebGLScene.prototype.addText2D = function(text, size, position, rotation, colour, name) {
    if(typeof(rotation)==='undefined') rotation = [0, 0, 0];
    if(typeof(colour)==='undefined') colour = 0x0000ff;
    if(typeof(name)==='undefined') name = "2Dtext";

    position = toVec3(position);
    rotation = toVec3(rotation);
    var shapes, geom, mat, mesh;

    shapes = THREE.FontUtils.generateShapes( text, {
      font: "helvetiker",
      weight: "bold",
      size: size
    } );
    geom = new THREE.ShapeGeometry( shapes );
    mat = new THREE.MeshBasicMaterial({color: colour, side:THREE.DoubleSide});
    mesh = new THREE.Mesh( geom, mat );
    mesh.position = position;
    mesh.name = name;
    this.billboards.push(mesh);
    this.scene.add(mesh);

    return mesh;
}


WebGLScene.prototype.addText3D = function(text, size, height, position, rotation, colour, name) {
    if(typeof(rotation)==='undefined') rotation = [0, 0, 0];
    if(typeof(colour)==='undefined') colour = 0x0000ff;
    if(typeof(name)==='undefined') name = "3Dtext";

    position = toVec3(position);
    rotation = toVec3(rotation);
    var mat, mesh;

    var      hover = 30,

            curveSegments = 3,

            bevelThickness = 0.2,
            bevelSize = 0.2,
            bevelSegments = 1,
            bevelEnabled = true,

            font = "optimer", // helvetiker, optimer, gentilis, droid sans, droid serif
            weight = "bold", // normal bold
            style = "normal"; // normal italic
   var textGeo = new THREE.TextGeometry( text, {

                size: size,
                height: height,
                curveSegments: curveSegments,

                font: font,
                weight: weight,
                style: style,

                bevelThickness: bevelThickness,
                bevelSize: bevelSize,
                bevelEnabled: bevelEnabled,

            });

    mat = new THREE.MeshLambertMaterial({color: colour});
    mesh = new THREE.Mesh( textGeo, mat );
    mesh.position = position;
    mesh.name = name;
    this.billboards.push(mesh);
    this.scene.add(mesh);

    return mesh;
}



WebGLScene.prototype.addSTL = function (load_path, pos, rotation, colour, name, scale_dims) {
    if(typeof(scale_dims)==='undefined') scale_dims = [0,0,0];
    if(typeof(colour)==='undefined') colour = 0xffffff;
    if(typeof(name)==='undefined') name = "STLModel";

    var dimentions = toVec3(scale_dims);
    var position = toVec3(pos);
    rotation = toVec3(rotation);

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
        geometry.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI /2 + rotation.x));

        geometry.dynamic = true;
        geometry.verticesNeedUpdate = true;

        var material = new THREE.MeshLambertMaterial( {color: colour} );
        var mesh = new THREE.Mesh( geometry, material );
        mesh.name = name;
        mesh.position = position;
        mesh.position.x += (dimentions.x /2);
        mesh.position.y += (dimentions.y /2);
        mesh.position.z += (dimentions.z /2);

        mesh.separate = true;

        this.scene.add( mesh );

        //var helper = new THREE.BoundingBoxHelper( mesh);
        //helper.update();
        //this.scene.add(helper);
        this.renderFrame();

    }.bind(this));

    loader.load( load_path );
}

WebGLScene.prototype.getSceneBoundingBox = function () {
    bBox = new THREE.Box3();

    min = new THREE.Vector3(Infinity,Infinity,Infinity);
    max = new THREE.Vector3(-Infinity,-Infinity,-Infinity);
    for (var i = this.scene.children.length - 1; i >= 0; i--) {
        child = this.scene.children[i];
        if ("geometry" in child && child.separate === false){
            child.geometry.computeBoundingBox();
            //min
            bBox.min.x = Math.min(bBox.min.x, child.geometry.boundingBox.min.x);
            bBox.min.y = Math.min(bBox.min.y, child.geometry.boundingBox.min.y);
            bBox.min.z = Math.min(bBox.min.z, child.geometry.boundingBox.min.z);
            //max
            bBox.max.x = Math.max(bBox.max.x, child.geometry.boundingBox.max.x);
            bBox.max.y = Math.max(bBox.max.y, child.geometry.boundingBox.max.y);
            bBox.max.z = Math.max(bBox.max.z, child.geometry.boundingBox.max.z);
        }

    };
    return bBox;
}


WebGLScene.prototype.updateSceneDimentions = function() {
    var bBox = this.getSceneBoundingBox();
    var dims = new THREE.Vector3(0,0,0);

    dims.subVectors(bBox.max, bBox.min);

    this.renderSizeUpdateNotify(dims);
    return dims;
}

WebGLScene.prototype.renderSizeUpdateNotify = function(param) {
    if (param instanceof Function) {
        this.renderSizeUpdateNotify.callback = param;
    }

    if (this.renderSizeUpdateNotify.callback instanceof Function) {
        this.renderSizeUpdateNotify.callback(param);
    }
}

WebGLScene.prototype.clearScene = function()
{
    if (typeof(this.scene) === 'undefined')
    {
        return;
    }

    for (var i = this.scene.children.length - 1; i >= 0; i--) {
        child = this.scene.children[i];
        if ("geometry" in child) {
            this.scene.remove(child);
        }
    };
}

WebGLScene.prototype.animate = function() {
    requestAnimationFrame(this.animate.bind(this));
    for (var i = this.billboards.length - 1; i >= 0; i--) {
        this.billboards[i].quaternion.copy(this.camera.quaternion);
    };
    this.controls.handleResize();
    this.controls.update();
}

WebGLScene.prototype.renderFrame = function (){
    this.renderer.render(this.scene, this.camera);
    this.updateSceneDimentions();
}

WebGLScene.prototype.exportToSTL = function () {
    var exporter = new THREE.STLExporter();
    return exporter.parse(this.scene);
}

WebGLScene.prototype.redrawRenderCanvas = function () {
    this.camera.aspect = this.ASPECT;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.WIDTH, this.HEIGHT);
    this.controls.handleResize();
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

