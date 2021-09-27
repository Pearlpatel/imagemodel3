Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });

get_div=document.getElementById("camera");

Webcam.attach("#camera");

function take_pic() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML="<img id='img_show' src='"+data_uri+"'/>";
    });
}

console.log("The version of ml5: ", ml5.version);

what_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_Sw_NHglK/model.json",modelloaded);
function modelloaded() {
    console.log("model is loaded");
}

function check() {
    capture_image=document.getElementById("img_show");
    what_model.classify(capture_image,gotresult);
}
function gotresult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("name_object").innerHTML=results[0].label;
        document.getElementById("Acc_object").innerHTML=results[0].confidence.toFixed(3);
    }
}