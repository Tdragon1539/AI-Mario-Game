

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	collect_coin = loadSound("coin.wav");
	gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

	posenet = ml5.poseNet( video, modelLoaded);
	posenet.on('pose', gotPose);
}

function modelLoaded(){
	console.log("Model Loaded!");
}

function draw() {
	
	game()
}

function gotPose(result){
	if(result.length > 0){
console.log(result);
 
noseX = result[0].pose.nose.x;
noseY = result[0].pose.nose.y;
	}
	
}






