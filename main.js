function setup() {
  canvas = createCanvas(200, 200);
  canvas.center();
  classifier = ml5.imageClassifier("mobileNet", modelLoaded);

}

function modelLoaded() {

  console.log("model loaded");
}

function draw() {

  image(video, 0, 0, 200, 200);
  classifier.classify(video, gotResults);

}

var previous_result = "";

function gotResults(error, results) {

  if (error) {
    console.error(error);
  }
  else {
    if((results[0].confidence>0.5)&&(previous_result!=results[0])){
    console.log(results);
    previous_result=results[0].label;
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2)*100+"%";
    }
}
}


