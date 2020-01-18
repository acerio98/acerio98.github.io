---
title: "Research"
layout: about
---

# CrowdMask  

![CrowdMask](https://riopelle.me/assets/pics/system_diagram_users.jpg)

I am currently working on a project called "CrowdMask" (or "ObSecure") with Walter Lasecki in the [Crowds and Machines (CROMA) Lab](http://croma.eecs.umich.edu/croma.html) at the University of Michigan. We are researching a system to allow crowd workers to answer questions about an images taken by visually-impaired users without being exposed to private content that may be in those images.  

The approach combines the speed of off-the-shelf object-detection systems such as YOLO with additional crowd workers. In our pipeline these workers can use their contextual human knowledge to decide which of the objects identified are needed to answer a given question, so that the rest of the objects in the image can be masked out. These workers are shown a blurred version of the image so they are not exposed to any private content itself. I am running studies to determine the optimal degree of blur and whether these workers should be able to see the identified objects' labels on the image itself or not.

Once this is done, the masked image can be passed on to another crowd worker in a second pipeline who can then answer the question using the image without being exposed to any unnecessary private content.

# Project Rodin

![Rodin](https://riopelle.me/assets/pics/sword.png)

Recently I completed a project called Project Rodin advised by Austin Yarger at UMich. The project focused on developing a generative ML model to synthesize 3D models for use in video games. Over the course of three months I worked independently to research various cutting-edge generative models and test them on my synthesis task. I eventually settled on using Groueix et al.'s AtlasNet architecture as a base, but then transformed the vanilla autoencoder into a vector-quantized variational autoencoder to enable mesh synthesis.

I trained the model on a set of 100 sword models taken from pretraining, with pre-training of the encoder and decoder on ShapeNet. The synthesis results were not perfect-looking, but seemed to validate the promise of this technique for generating meshes for games, if I had larger and better datasets to train on and get more realistic results.

Many more details about this project can be found on a separate site where I kept a weekly blog throughout the project [here]({% link rodin.md %}).
