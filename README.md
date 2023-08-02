# Shoeventory Web App

![Current Version](https://img.shields.io/badge/version-v0.1-blue)
![GitHub contributors](https://img.shields.io/github/contributors/madhur-taneja/README-Template)
![GitHub stars](https://img.shields.io/github/stars/madhur-taneja/README-Template?style=social)
![GitHub forks](https://img.shields.io/github/forks/madhur-taneja/README-Template?style=social)

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
  - [About](#about)
- [Development](#development)
    - [Part 1: Problem](#part-1-problem)
	  - [Step 1: Development](#step-1-development)
	  - [Step 2: Solution](#step-2-solution)
	- [Part 2: Snippets](#part-3-snippets)
- [Architecture](#architecture)
- [Issues](#issues)

## Getting Started

To get started jump to [Tools Required](#tools-required)

### Tools Required

* Simply open this project in VScode & 'npm install'
* You will also need the [API](https://github.com/jonangeles-sanchez/ShoeventoryAPI) in order to use website's full features. 

### Installation

* Run npm install in VsCode and run the API locally for local dev
    ```
    npm install
  ```


## About

Shoeventory is a curated application for shoe vendors who need a better solution to organizing their inventory of shoes

1. Shoeventory is secure
2. Easy to learn
3. Cheap
4. Access to many features (Point of Sale System & SMS Shoe Request Notification System)

### Part 1: Problem
* Shoe vendors don't really have a way to manage their shoe inventory. Unless they're comfortable with paper and pencil.

#### Step 1: Development
To build this project, we must consider the steps to build this project:
* Luckily, we have someone close to us whose a vendor
  * Collaboration with this shoe vendor allowed us to curate this application to shoe vendors to what they want.
* Phases:
  * Phase I: Building the API
    * The API to this project was built with operations that will allow this web app to communicate efficiently with a database to manage shoes.
    * CRUD operations such as creating, deleting, updating shoes were made.
    * Organization? Collections.
    * Shoes can be categorized by collection. This is so shoes can be easily managed.
    * Security? JWT
    * Nothing better than using bearer tokens for security.
  * Phase II : Testing the API
    * Testing was easy with ASP's Swagger UI & Postman
  * Phase III : Building the UI
    * Planned routes that a user would take e.g. Homepage, login/register, shoe collections, collection view
    * Mocked up some basic designs to show the shoe vendor for approval
    * Upon approval UI was built to completion with mock data
  * Phase IV : Connectiong the API
    *  CORs was easy to enable between the API and UI
    *  Slices were made to keep a clean architecture
  
#### Step 2: Solution

*  Upon completion:
  * We were able to successfully create something that would allow shoe vendors to manage their shoe inventory easily.
* Future plans:
  * 3 DB's is overkill. Combine dataset into 1 database.
  * Only purpose of 3 was to become more competent in various technologies.

For details now how everything has been implemented, refer to the source code and the architecture below:

### Part 3: Snippets

* Here are some snippets of the project
[Video]([Page display](https://i.imgur.com/mOyKTe8.mp4)
![image](https://github.com/jonangeles-sanchez/Shoeventory-web/assets/70487639/11509ac4-fa10-4b0c-a174-076dcbe27022)
![image](https://github.com/jonangeles-sanchez/Shoeventory-web/assets/70487639/23732bd0-8a36-40a7-8cad-54db7f602646)




## Architecture
![Architecture](https://i.imgur.com/E2FmI4V.png)

## Issues

Review and issue creation is welcome :^)


## License

`Shoeventory` is open source software [licensed as MIT][license].


[//]: # (HyperLinks)

[GitHub Repository]: https://github.com/madhur-taneja/README-Template
[GitHub Pages]: https://madhur-taneja.github.io/README-Template
[CONTRIBUTING.md]: https://github.com/madhur-taneja/README-template/blob/master/CONTRIBUTING.md
[tags]: https://github.com/madhur-taneja/README-template/tags

[GitHub]: https://github.com/madhur-taneja
[LinkedIn]: https://www.linkedin.com/in/madhur-taneja/

[contributors]: https://github.com/madhur-taneja/README-template/contributors
[license]: https://github.com/madhur-taneja/README-template/blob/master/LICENSE.md
