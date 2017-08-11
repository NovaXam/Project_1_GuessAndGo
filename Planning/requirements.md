# Wireframing & Project Planning!

You're about to embark on your first project! Exciting! Today we'll be talking about some tools to help you as you're planning.

### Learning Objectives

- Define "user stories" and create user stories / acceptance criteria for a familiar web app
- Create wireframes based on user stories and use them as a roadmap for tackling programming challenges
- Use project boards to organize project flow

## User Stories

> A user story is an informal, natural language description of one or more features of a software system, often written from the perspective of an end user. [Adapted from Wikipedia](https://en.wikipedia.org/wiki/User_story)

User stories help clarify and define an app's purpose. For example, a user story could be something like:

```
As a user, I want to be able to login with Facebook.
```

You'll care a lot more about user stories when you start building larger-scale apps in units 2 and 3, since most of the user stories for your game will be along the lines of "As a user, I want to play [insert game here]."

### Acceptance Criteria

Acceptance criteria are the criteria that needs to be fulfilled for the user story to be finished. For example, the acceptance criteria for the Facebook user story above would go something like this:

```
- When I'm on the home screen,
- And I'm not logged in with Facebook,
- Then I see the 'Login With Facebook' button,
- And I press the 'Login With Facebook' button,
- And I login with my Facebook credentials,
- Then I'm back on the home screen, and the app shows that I'm logged in.
```

[Source](https://medium.com/@sasa_sekulic/how-to-write-a-user-story-a-programmer-s-perspective-part-1-573f413e0bae)

We all know how to log in to Facebook. But breaking the problem down like this allows us to really subdivide the problem into its smallest possible parts and describe the actions we as developers would need to take in order to complete the action.

```
- When I'm on the home screen,
    (There is a design for the home screen)
- And I'm not logged in with Facebook,
    (The design for the home screen when logged out is visually distinct)
- Then I see the 'Login With Facebook' button,
    (The "Login with Facebook" button is clearly visible on the page)
- And I press the 'Login With Facebook' button,
    (The "Login with Facebook" button can be pressed and performs a distinct action -- in this case, pulls up a login screen.)
- And I login with my Facebook credentials,
    (There is a login page with input fields)
    (When input is submitted, we can obtain data about the user from Facebook's servers)
- Then I'm back on the home screen, and the app shows that I'm logged in.
    (The data from Facebook's server about the user is used to populate the logged-in homepage)
```

That's a lot of things to have happen just for one simple action. And we haven't even started about the technical specifications.

Reading: 
- [10 Tips for Writing Good User Stories](http://www.romanpichler.com/blog/10-tips-writing-good-user-stories/)
- [How to write a user story, a programmer's perspective](https://medium.com/@sasa_sekulic/how-to-write-a-user-story-a-programmer-s-perspective-part-1-573f413e0bae) (Acceptance criteria are from here)

### 👥 We do together: create user stories for the Racer game
- Describe every possible feature for the "Perfect" Racer game.

As a User I want to be able to:

    * See "start" game button on the welcome screen
    * See the game layout on the new screen
    * Choose what keys on the keyboard I want to play.
    * What else?

### ⚗ You do: User stories & acceptance criteria for the Tic Tac Toe game

- Describe every possible feature for the "Perfect" Tic Tac Toe game. Some ideas:
As a User I want to be able to:

    * See "start" game button on the welcome screen
    * Enter my name
    * See the game layout on the new screen
    * Choose my turn: "X" or "O"
    * ...
    
    You got the gist 👍🏼
 
- Write down every step you take in order to do your small action
- Based on each step, see if you can intuit some of what's happening behind the scenes in order to make those actions possible.

There's no right or wrong way to do this lab -- I'm not looking for an exact list of steps or something like that. Just familiarize yourself with the concept of breaking down an action into very small steps.

## Wireframing

> A wireframe is an image or set of images which displays the functional elements of a website or page, typically used for planning a site's structure and functionality.

Drawing out wireframes for each state of interaction in your game is a good way to plan out what you'll need to put in the DOM, and what DOM manipulations you'll need to accomplish in order to make your game work. And even a little bit of the logic behind those things.

You should have one wireframe for each state. (I like to colorcode mine.)

Great wireframing tool: [Balsamiq](https://balsamiq.com/) (It's paid but they give you a whole month of free trial)
Or just colorful markers and whiteboard will suffice. ✅

#### Example wireframes:

![todo wireframes](./assets/todo_wireframe.png)

### 👥 We do together on the board: wireframing the Racer game

### ⚗ You do: wireframing Tic Tac Toe game

## Project workflow

> Project boards are tools that help you organize when and where to do what tasks in your program.

### 👥 Follow along: [Div Racer!! project board](https://git.generalassemb.ly/nyc-wdi-ada/div-racer/projects/1)

### ⚗ You do: Project board familarization & project creation

- Based on the user sories and wireframes for the Tic Tac Toe game that you've created earlier and your experience building the actual game, create a project board (on GitHub) with phases & cards. You can work with a partner for this activity.

## README.md
Alright, look, we already completed all the building blocks for the Racer game and Tic Tac Toe, great job!
However, we are still missing a summary of the approach, technologies used, the story behind the project creation, and finally, some screenshots of the game.

This summary is called `README.md` the project is not complete without it!

Here are some sample Readmes. And we expect nothing less for your project 🤓:
* [Cheesy puffs](https://github.com/mattkersner/Project1GA)
* [Castle Adventure](https://github.com/jlr7245/castleadventure)
* [Space invaders](https://github.com/arianadziedzic/space_invaders)

### ⚗ You do: Complete the README for your Tic Tac Toe game

## Reconvene & Discuss

- Questions or comments about project boards?
- Questions about user stories and wireframes?

### ⚗ You do: Start working on your ✨ PROJECT PROPOSAL!!! ✨

Start working on your project proposal! You'll find a template linked below.

#### Project Proposal Template:
- [Blank template](./lab/proposal-outline.md)
- [Example project proposal](https://github.com/jlr7245/castleadventure/blob/master/proposal.md)

