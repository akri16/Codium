import tensorflow as tf
import keras
import numpy as np
import ember
import pickle


def load(path):
  with open(path, 'rb') as file:
    return pickle.load(file)


model = keras.models.load_model("detection/model.h5")
scaler = load("detection/scaler.pkl")
extractor = ember.features.PEFeatureExtractor()

def predict(raw_bytes):
    feature = np.array(extractor.feature_vector(raw_bytes), dtype=np.float32)

    features = np.array([feature[:2351]], dtype=np.float32)
    features = scaler.transform(features)
    features = np.expand_dims(features, axis=-1)
    return model.predict(features)[0][-1].item()

