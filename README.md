<h1 style="text-align:center">

 **Hey welcome to our first project as a group.**
</h1>

It takes great pleasure to introduce you to the first project that we will make as a group. 
This project will be a **retail ecommerce** store with the fundamentals, nothing too fancy. The webapp will be a full stack project using new technologies as we go. Since we are mostly front-end developers, that means that we will have alot of work on our hands.

<br>

## Content Table:
- [Purpose of the project](#why-we-build-this-project).
- [How to contribute](#contributing-to-the-repository).

- [Technologies that will be uses](#technologies-that-will-be-used).
- [Working as a group ](#working-as-a-group).

<br>


## Why we build this project. 
The main aim of this project is to allow the contributors to gain a firm understanding of how to work in a group. Since many of us have varying levels of experience working on project, it would be best to know how to work with team members' strengths and weaknesses. 

It is also important to note that the best way to learn is by doing. Experience is the greatest teacher and simply reading and doing simple snippets will not really prepare you for what is to come in the workforce. 

This project aims to build a full blown web app which means that the amount of technologies used won't be just the ones learnt in school. So practice hard and do your best. 

<br>

## Contributing to the repository. 
<br>

### *Cloning the repository*
Cloning gives you access to the files on your local machine. In other words, it downloads a copy of the repository to your local machine. This is done by using the command:
<br>

`git clone https://github.com/aldaineclarke/retailWebapp.git`

### *Forking the repository*
Forking a repository allows you to create a copy of the repository to your github profile. It gives you ownership of that copied repository, it will not be affected, nor will it affect, the original repository. This is done by using the command: 
<br>

 `git fork https://github.com/aldaineclarke/retailWebapp.git`
<br>

The main difference between a fork and the clone is that with fork you have a copy of the repository on your github profile, and you have to clone it to access it from your local machine. While to with clone you have the copy on your local machine.
<br>

### *Installing the dependencies.*
The following command will install the different dependencies necessary to run the project from the package.json file.
<br>

`npm install`

<br>

### *Running the project.*
To run the project you just need to use the command:  
<br>

`npm run devStart`

<br>

in the command prompt. This will run nodemon which will automatically reload the server whenever you make changes to the file.

<br>

### *Making changes to the project.*
Ensure that whatever changes you push to the project is done through a branch of the dev branch. 

#### Step by step of the process: 
<br>

1. `git pull origin dev` which pulls down whatever changes are currently in the dev branch.
2. `git branch feature-name` creates a branch called *feature-name* of the current state of the branch you are in. ***in vscode this is shown at the bottom left of the window***
3. `git checkout feature-name` switches to the branch feature-name.
4. make the changes you want to contribute to the repository.
5. `git add .` adds all the changed files to the staging area for commit
6. `git commit -m "created this commit"` creates a commit with the message *created this commit* .
7. `git push origin feature-name` this will create a new branch in the remote repository(GitHub) with the name *feature-name*
8. There will be a message on github which says **compare and pull request**, once you click there it will ask you to select where you would like to make the merge.
9. Select the **dev** branch. This will prompt you to create a pull request to the dev branch. Done.

**DO NOT PUSH TO THE MAIN BRANCH**. 
<br>

## Technologies that will be used. 
To make sure that we are using up to date technologies and tools, we will be choosing the well known technologies and the famous **MEAN** Stack with a little spin.

Some of these Technologies are: 

- [MongoDb](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [Angular.js](https://angularjs.org/)/ [Angular 13*](https://angular.io/)
- [Node.js](https://nodejs.org/)
  
<br>

## Working as a group.
<br>

### Working with CSS
In order to allow better integration and less conflict, we deem it necessary and prefered if you use the [BEM](http://getbem.com/introduction) naming convention when creating styles.

### Working with Angular
Appending **.component**, or **.module** before the end of the respective file should be a must to properly identify what the file is and what it does. 

<br>

## Features of the Webapp
As mentioned above the webapp will have all the fundamental feature of an e-commerce application. These include: 
- Products Listing
- Product Details Page
- Shopping Cart
- User Authentication (Login and Signup);
- User Options(Seller or Customer)
- User Dashboard(Seller)
- User Profile(Customer)
- Orders Page.
- Seller Page(Where the customer can view / contact seller)
- Email Responses
<br>

## Minimum Viable Product (MVP)
While it is possible to create all this functionality for the application, there may be hiccups and/or we may just choose to give up on this project. Not having any working product for a project would mean that we have wasted hours and days doing nothing. Therefore we will first aim to create a MVP to atleast show that the project was possible to complete. 

The features will include: 
- Products Listing
- Product Details Page
- Shopping Cart
- User Profile (Customer)
- Orders Page. 

<br>

## In Conclusion
### Have Fun!!! Nothing is wrong with mistakes.
We encourage all our contributer not to be afraid of making a mistake. Mistakes help us to realize what we did wrong and, when programming, tells you how to fix them. I don't remember where this quote comes from but it essentially says: 
### *"The only bug free code is a code that is never written"*

