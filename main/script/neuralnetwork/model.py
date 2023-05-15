from torchvision.io import read_image
from torchvision.models import resnet50, ResNet50_Weights
import torch

img = read_image("canoe.jpg")
if img.shape[0] == 4:
    img = img[:3]
print(img.shape)

# Step 1: Initialize model with the best available weights
weights = ResNet50_Weights.DEFAULT
model = resnet50(weights=weights)
model.eval()

# Step 2: Initialize the inference transforms
preprocess = weights.transforms()

# Step 3: Apply inference preprocessing transforms
batch = preprocess(img).unsqueeze(0)

# Step 4: Use the model and print the predicted category
prediction = model(batch).squeeze(0).softmax(0)
class_id = prediction.argmax().item()
score = prediction[class_id].item()
category_name = weights.meta["categories"][class_id]
print(f"{category_name}: {100 * score:.1f}%")

import torch.onnx as onnx
torch.onnx.export(model, batch, 'model.onnx', export_params=True)
