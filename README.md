
# Online Judge System

A web application for online judge(algorithm questions), built with MERN stack( MongoDB, Express, React and Node.js ).
This online judge application is used to practice programming to solve algorithm questions. It can compile and execute code, and test them with pre-constructed data. The output of the code will be captured by the system, and compared with the standard output. The system will then return the result.
Three languages are currently supported, including Java, Javascript and Python.
  
 

 
## Screenshots 
 ![screely-1670857686408](https://user-images.githubusercontent.com/77838959/207155058-ae0396e7-0144-4a6c-b769-d67469a8d94f.png)
 ![screely-1670874330883](https://user-images.githubusercontent.com/77838959/207155031-98492fe9-8b83-48c6-8479-d3594077f2e5.png)
![screely-1670857662717](https://user-images.githubusercontent.com/77838959/207155139-06ec729b-76aa-4285-8960-13652fff2869.png)
![screely-1670857648113](https://user-images.githubusercontent.com/77838959/207155166-a2e99423-88e2-4555-84e8-4b42406a0cc7.png)
![screely-1670874413118](https://user-images.githubusercontent.com/77838959/207155183-d208b598-8ba0-450b-8bcc-473ffc752d12.png)
![screely-1670874441653](https://user-images.githubusercontent.com/77838959/207155243-641aed41-a62d-4f67-a2ce-f448fc89516e.png)
![screely-1670874452993](https://user-images.githubusercontent.com/77838959/207155251-808cb69d-ec62-4044-8829-8863b2ef0d9f.png)
![screely-1670874427451](https://user-images.githubusercontent.com/77838959/207155258-92a934a4-3886-4c4c-8626-7028f47817c5.png)
![screely-1670879539881](https://user-images.githubusercontent.com/77838959/207155542-b901d8b3-d1a0-4bb3-a2d3-2cd308537283.png)

 
 
 
 
## Description

This application is used to solve algorithm questions. You can submit the solution to see if it passes all test cases. Below are the available features.

- Token Based Authentication - Register, Login, Auto Login, User Profile, etc.
- Question Management - Create, Update, Delete question.
- Judging System - Judging Engine, Solution Template, Submission History, Multi-programming language support.
- Programming Languages - Three languages are currently supported, including Java, Javascript and Python.

The following functions are under development.
- Contest - Generate contest by randomly selecting four questions from the question library.
- Collaborative code editor - Different users can work on the same solution simultaneously.


### Tech Stack:
The Server is built with Express and MongoDB. The used libraries for server are listed as follows.

- RESTful API: express, express router, mongoose, cors
- Logging: morgan, winston
- User Authentication: jsonwebtoken, passport, cookie-parser, express-jwt

The Client is built with React and 3rd-party libraries

## Installation

Install project with npm

```bash
git clone https://github.com/ahmed-tahoon/Online-Judge-Mern
cd Online-Judge-Mern
npm install 

```
    
