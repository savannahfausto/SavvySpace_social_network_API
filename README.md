# Challenge 18 NoSQL Breakdown: Social Network API

![badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description

Using Express.js for routing, a mongoDB database, and the Mongoose ODM, this project creates API for a social network web application where users can share their thoughts, react to friend's thoughts, and create a friend list.

The motivation behind creating this project was to demonstarted how MongoDB can be used to store and retrieve unstructured data quickly.

This project is the back-end API for a social media website. These API end points include CRUD operations for users, thoughts and a subSchema for reactions to thoughts.

This project taught me the fundamentals of using mongoDB and mongoose, and how they easily display and connect data.


## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Questions](#questions)


## Installation

Steps required to install your project: 

In order to install this project please clone [this repository](https://github.com/savannahfausto/SavvySpace_social_network_API). Once the repository is cloned to your local device, open a terminal and run npm i to install dependencies and then run npm start to start the server. Once you have successfully started the server navigate to insomnia to test API end points.

## Usage

Find below instructions and examples for project use. 

Once you have Insomnia open, test the following API endpoints: 
* localhost:3001/api/users to GET all users and to POST a new user by passing in a JSON object with username and email properties. 
* localhost:3001/api/users/:userId to GET a single user, PUT a user (or update a user), and DELETE a user. 
* localhost:3001/api/users/:userId/friends to POST a friend by passing in a JSON object with the id of the friend you want to add. 
* localhost:3001/api/users/:userId/friends/:friendId to delete a particular friend 
* localhost:3001/api/thoughts to get all thoughts or to POST a thought by passing in a JSON object with thoughtText, username and userId as properties. 
* localhost:3001/api/thoughts/:thoughtId to GET a single thought, update/PUT a thought, or DELETE a thought. 
* localhost:3001/api/thoughts/:thoughtId/reactions passing in a JSON object with reactionBody and username as properties to POST a reaction to a particular thought. 
* localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId to DELETE a reaction from a thought

Please refer to [this walkthrough video](https://drive.google.com/file/d/13aGaUHv6fipBj5Y_dr2-ECWURNo2AeYI/view), which demonstrates how to test each API endpoint in Insomnia
## License 

This project is covered under MIT. For more information on licenses please 
click [here](https://choosealicense.com/).

## Contribution

I am currently not taking contributions from other developers right now, but please feel free to contact me with questions.

## Questions

Thank you so much for taking interest in this project. If you have any questions or feedback please reach out to me: 

My github profile is: 
[GitHub Link](https:///github.com/savannahfausto)

My email is: 
[savannahfausto@gmail.com](mailto:savannahfausto@gmail.com)
