async function fetchLabelNames() {
  const response = await fetch(
    "https://raw.githubusercontent.com/weiaicunzai/pytorch-cifar100/master/labels.txt"
  );
  const text = await response.text();
  const labelNames = text.split("\n").filter((name) => name !== "");
  return labelNames;
}

async function loadImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

async function main() {
  // Load the pre-trained model
  const model = torchvision.models.resnet18({ pretrained: true });
  model.eval();

  // Get the label names for CIFAR100
  const labelNames = await fetchLabelNames();

  // Get the input image from the user
  const fileInput = document.getElementById("file-input");
  fileInput.addEventListener("change", async () => {
    const file = fileInput.files[0];
    const img = await loadImage(file);

    // Preprocess the input image
    const tensor = torchvision.transforms.ToTensor()(img);
    const normalized = torchvision.transforms.Normalize(
      [0.5071, 0.4865, 0.4409],
      [0.2673, 0.2564, 0.2762]
    )(tensor);
    const batched = normalized.unsqueeze(0);

    // Run the model inference
    const output = model.forward(batched);

    // Get the predicted class index
    const values = output.detach().squeeze().tolist();
    const index = values.indexOf(Math.max(...values));

    // Show the predicted class label
    const predictedLabel = labelNames[index];
    const outputElement = document.getElementById("output");
    outputElement.textContent = predictedLabel;
  });
}

// Call the main function to start the program
main();
