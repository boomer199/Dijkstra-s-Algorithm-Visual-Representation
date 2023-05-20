
// Define the `preprocess` function.
function preprocess(image) {
  // Preprocess the image.
  return image;
}

// Create a new inference session.
const session = new ort.InferenceSession("model.onnx");

// Add an event listener to the `fileInput` element.
document.getElementById("fileInput").addEventListener("change", e =>{
  
});

// Create a function that will be called when the file is uploaded.
function submit() {
  // Get the file that was uploaded.
  const file = document.getElementById("fileInput").files[0];
  if (file) {
    // Create a new FileReader object.
    const reader = new FileReader();
    reader.onload = (event) => {
      // Get the image data.
      const image = event.target.result;
      // Preprocess the image.
      const preprocessedImage = preprocess(image);
      // Make a prediction.
      const prediction = session.run(["output"], {
        input: preprocessedImage,
      })[0];
      // Print the predicted category.
      const classId = prediction.argmax();
      const categoryName = weights.meta["categories"][classId];
      document.getElementById("result").innerHTML = `${categoryName}: ${
        100 * prediction[classId]
      }%`;
    };
    reader.readAsDataURL(file);
  }
}
