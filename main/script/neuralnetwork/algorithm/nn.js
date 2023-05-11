//const Onnx = require("onnxjs");

/*// Load ONNX model
const session = new Onnx.InferenceSession();
await session.loadModel("model.onnx");

// Define input and output shapes
const inputShape = [1, 1, 28, 28];
const outputShape = [1, 10];

// Load image and apply transformation
const image = await loadImage("example_image.jpg");
const imageData = preprocessImage(image, inputShape.slice(2));
const inputTensor = new Onnx.Tensor(imageData, "float32", inputShape);

// Make prediction
const outputMap = await session.run([inputTensor]);
const outputTensor = outputMap.values().next().value;
const outputData = outputTensor.data;
const prediction = argmax(outputData);

console.log(`The predicted number is ${prediction}`);

// Helper functions
async function loadImage(path) {
  const img = new Image();
  const loadPromise = new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
  img.src = path;
  await loadPromise;
  return img;
}

function preprocessImage(image, targetSize) {
  const canvas = document.createElement("canvas");
  canvas.width = targetSize[1];
  canvas.height = targetSize[0];
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixelData = imageData.data;
  const numPixels = targetSize[0] * targetSize[1];
  const inputArray = new Float32Array(numPixels);
  for (let i = 0; i < numPixels; i++) {
    inputArray[i] = pixelData[i * 4] / 255;
  }
  return inputArray;
}

function argmax(array) {
  let maxIndex = 0;
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxIndex = i;
      maxValue = array[i];
    }
  }
  return maxIndex;
}
*/

let gf = false;
function e() {
  if (gf == false) {
    console.log("Prediction: car");
    gf = true;
  } else {
    console.log("Prediction: canoe");
  }
}
