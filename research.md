---
title: "Research"
layout: about
---

While a student at the University of Michigan I was able to partake in several courses and groups that allowed me to get involved with research in computer science. I have listed the two main projects I worked on here:

# CrowdMask  

![CrowdMask](https://riopelle.me/assets/pics/system_diagram_users.jpg)

I worked on a project called "CrowdMask" (or "ObSecure") on a team advised by Walter Lasecki in the [Crowds and Machines (CROMA) Lab](http://croma.eecs.umich.edu/croma.html) at the University of Michigan. The group researched a system to allow crowd workers to answer questions about an images taken by visually-impaired users without being exposed to private content that may be in those images. I was a member of this group in the lab for over a year from September 2018 through December 2019.

The approach combined the speed of off-the-shelf object-detection systems such as YOLO with additional crowd workers. In the pipeline these workers could use their contextual human knowledge to decide which of the objects identified were needed to answer a given question, so that the rest of the objects in the image could be masked out. These workers were shown a blurred version of the image so they could not be exposed to any private content itself. Toward the end of my time on the project I ran several studies to determine the optimal degree of blur and whether these workers should have been able to see the identified objects' labels on the image itself or not.

# Project Rodin

![Rodin](https://riopelle.me/assets/pics/sword.png)

In the fall of 2019 I completed an individual research project called Project Rodin advised by Austin Yarger at UMich. The project focused on developing a generative ML model to synthesize 3D models for use in video games. Over the course of three months I worked independently to research various cutting-edge generative models and test them on my synthesis task. I eventually settled on using Groueix et al.'s AtlasNet architecture as a base, but then transformed the vanilla autoencoder into a vector-quantized variational autoencoder to enable mesh synthesis.

I trained the model on a set of 100 sword models taken from pretraining, with pre-training of the encoder and decoder on ShapeNet. The synthesis results were not perfect-looking, but seemed to validate the promise of this technique for generating meshes for games, if I had larger and better datasets to train on and get more realistic results.

Many more details about this project can be found on a separate site where I kept a weekly blog throughout the project [here]({% link rodin.md %}).
