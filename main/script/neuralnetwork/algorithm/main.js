function classifyImage() {
  console.log("checkpoint 1");
  var imageInput = document.getElementById("imageInput");
  var file = imageInput.files[0];

  var reader = new FileReader();
  reader.onload = function (event) {
    var img = new Image();
    img.onload = function () {
      predictImage(img);
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

async function predictImage(img) {
  const model = await tf.loadLayersModel(
    "https://storage.googleapis.com/tfjs-models/tfjs/cifar10_v1/model.json"
  );
  const tensor = tf.browser
    .fromPixels(img)
    .resizeNearestNeighbor([32, 32])
    .expandDims()
    .toFloat()
    .div(tf.scalar(255));
  const predictions = await model.predict(tensor).data();
  const classId = predictions.indexOf(Math.max(...predictions));
  const classNames = [
    "airplane",
    "automobile",
    "bird",
    "cat",
    "deer",
    "dog",
    "frog",
    "horse",
    "ship",
    "truck",
  ];
  const resultElement = document.getElementById("result");
  resultElement.innerText = `Prediction: ${classNames[classId]} (${(
    predictions[classId] * 100
  ).toFixed(2)}%)`;
}
