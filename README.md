<h1 align="center">Codium</h1>

[![web app](https://img.shields.io/badge/webapp-up-green)](https://malcodium.herokuapp.com/)

<div align="center">
<img style="margin: 100px;" src="https://github.com/akri16/Codium/blob/main/assets/screenshot.PNG"/>
</div>

# Problem Statement
Malware has become so common these days that there are a whopping 300 million hacking cases each day just in the US computer systems. Malware attacks cost companies billions every year and it leads to a data breach on top of everything. The effect of data leakage from a government or defence organization is very detrimental. Computer Scientists have come up with rudimentary ways that prove useful only against a set of known viruses that are there in the registry. In order to extend its power to detect any new malware that gets introduced the system has to adapt and learn the nature of a typical malware. This project aims to create a malware detection and analysis system backed by Artificial Intelligence that can potentially recognize any new malware by following a dynamic approach. Our approach is an implementation of a deep neural network for a binary classification task in which the goal was to distinguish correctly whether the file is benign or malicious, given features extracted from portable executables (PEs) files to detect and alert the user when the system is infected with an entirely new kind that it has never seen before.

# Project Structure
<div align="center">
<img style="margin: 100px;" src="https://github.com/akri16/Codium/blob/main/assets/arch-diagram.jpg"/>
</div>

## 1. Static HTML/CSS/JS
This module consists of all the static HTML/CSS/JS that makes up the frontend UI of the Web App. This is statically served at the root endpoint using the FastAPI Python web framework. Since this is a small application, we use server side rendering for code manageability. 
## 2. Trained model
A model was trained using Convolutional Neural Networks (CNN) on the open source Ember dataset. The EMBER2018 dataset contains features from 1 million PE files scanned in or before 2018. This makes the dataset complete and comprehensive and made it possible for us to achieve the high accuracy of 97.6%. Google Colaboratory, a web IDE by Google was used to code the model as it enabled us as a team to experiment and tinker with the model very easily. We used Tensorflow framework to build and train the model. The trained model was then run using Tensorflow libraries on a Uvicorn server deployed on Heroku.
## 3. API for running the model
We used the FastAPI web framework that run on a uvicorn server to create an API to run the model and also to serve the frontend. The model is run using Tensorflow library for python at the endpoint /predict. You can run the model with this endpoint by uploading a file here. However, the frontend makes it easier by providing an easy-to-use file picker and uploading interface. It also grabs the result and displays it in an aesthetically pleasing way.

# Deeplearning Model
<div align="center">
<img style="margin: 100px;" src="https://github.com/akri16/Codium/blob/main/assets/model-description.jpg"/>
</div>

## 1.	Convert features into dataset
Raw features are extracted to JSON format and included in the publicly available dataset. Vectorized features can be produced from these raw features and saved in binary format from which they can be converted to CSV, dataframe, or any other format

## 2.	Split to train test
The dataset is split to train and test sets for training and testing respectively.

## 3.	Vectorize the labels
The labels are vectorized as TensorFlow accepts only tenors or vectors
Converts integer labels to binary class matrix:
[0 1] -> Malignant
[1 0] -> Benign

## 4.	Validation Split
A part of the train set is used for validation during training to let us check the model for overfitting on the train set. This is called the validation split.

## 5.	Normalize it
The dataset is normalized to equalize the influence of each feature in the dataset. The normalization is done with scikit library. The normalizer is then saved to a file using pickler and exported to the server along with the model.

## 6.	Expand the dimensions
An extra dimension is to be added to as TensorFlow expects a 3D input

## 7.	Build the model
A CNN model was built. The Convolutional layers are interspersed in the normalization layers and a dense layer with softmax activation is used to perform the final classification. 

## 8.	Train the model
## 9.	Test the model
## 10.	Save the model
The model was saved in .h5 format and exported to be used in the webapp. 

# Steps to Execute
The project is live at [https://malcodium.herokuapp.com/](https://malcodium.herokuapp.com/) It is deployed on Heroku’s free plan.

To execute the project from GitHub:
-	Clone the Repository with `git clone https://github.com/akri16/Codium/`
-	Install all the dependencies in requirements.txt with `pip install –r requirements.txt`
-	Run main.py using `python main.py`
-	Go to the url where it’s running on your localhost. (Will be printed on the console)

# Conclusion and Future Scope
In this project report we build a novel Deep Learning Malware Detection tool and trained it using the EMBER Dataset. It was successful in distinguishing between malicious and benign executable files with an accuracy of 97.7%. The deep learning approach for the EMBER dataset is successful. 
Using a machine learning approach similar to those presented in this report is an interesting avenue that may have success. Different criteria of data features are included in the other datasets which may be more compatible with the models. For future work related to applications of the proposed model would be developing a working real-time detector. This would scan files/executables on the user’s computer then predict using the model to output the classification to the user.

# License
    MIT License

    Copyright (c) 2021 Amit Krishna A

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
