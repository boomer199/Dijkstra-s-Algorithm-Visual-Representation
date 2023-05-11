import torch #type: ignore
import torchvision.models as models #type: ignore
import torchvision.transforms as transforms #type: ignore
from PIL import Image #type: ignore
import urllib.request
url = 'https://raw.githubusercontent.com/pytorch/hub/master/imagenet_classes.txt'
class_names = urllib.request.urlopen(url).read().decode('utf-8').split('\n')[:-1]


# Load pre-trained model
model = models.resnet50(pretrained=True)

# Define image transformation
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])


# Load image and apply transformation
image = Image.open('canoe.jpg')
image = image.convert('RGB')
image_tensor = transform(image).unsqueeze(0)
print(image_tensor.shape)
# Make prediction
with torch.no_grad():
    output = model(image_tensor)

#prediction = output.argmax(dim=1).item()
probabilities = torch.nn.functional.softmax(output, dim=1)
max_probs, max_indices = torch.max(probabilities, dim=1)
predicted_class_idx = max_indices.item()
predicted_class_label = class_names[predicted_class_idx]
print(max_indices)
print(f"The predicted class is {predicted_class_label}")

#TODO: for some reason model thinks that a car is a hook bruh
