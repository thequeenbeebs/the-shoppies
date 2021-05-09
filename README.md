# THE SHOPPIES
> This project was made in conjunction with my application for a Frontend Developer Internship with Shopify for Fall 2021. It is an application that uses the React.js library and connects to the OMDB API to allow a user to search for movies and add them to a nomination list (along with removing them). After a user nominates 5 movies, they get a fun surprise.
>

## Demo
https://bb-presents-the-shoppies.herokuapp.com/

## Technologies
* React.js | HTML | CSS
* Styling: React-Bootstrap
* Confetti: react-confetti
* API: OMDB

## Set Up
* Fork this repo onto your own machine `git clone git@github.com:thequeenbeebs/the-shoppies.git`
* Once you have opened it, run `npm install` to install necessary dependencies to your computer
* Run `npm start`, and the app will run on http://localhost:3000

## Features
* A user is able to search for movies, with results coming from OMDB's API
* Movie results include the title and release date, and hovering over the result opens a popover that contains an image of the movie's poster
* Pressing the "Nominate" button will add that movie to a user's Nominations list, and the "Remove" button will remove it 
* After a user nominates 5 movies, all Nominate buttons are disabled and a modal is revealed with a fun confetti surprise!
* A user's list of nominated movies is persisted when the page refreshes using localStorage

## Continuing Goals
* Testing
* Implementing Hooks in all components 
* Loading spinner and other animations
