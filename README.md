# Repertoire
A web application for musicians to build their own personal songbook. 

> # Table of Contents
1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Features](#features)
4. [Tech Stack](#tech-stack)

## Overview
This fullstack web application was part of a 2-day sprint to create a minimum viable product, using React, Express, MongoDB, and OpenAI API. 

## Features
* Landing Page

  From this page, the user can -
  
   Create a new account, initiating an axios POST request to relay their user information to the 
   database.

   Sign in to a previously created account, initializing an axios GET request to retrieve their 
    songbook and info for each song.  
  
* Dashboard

  Here users can input an instrument, difficulty, and artist name, initializing a call to the OpenAI API to present the user with three different song choices. They can then click on any of the song titles and these will be added to the database via a POST request, and subsequently displayed in the songbook below.
  
* Songbook

  Any songs that the user has chosen are rendered here, where the user has the option to add performance notes, mark the song completed, or delete the song from the list.
---

## Getting Started

1. From the terminal, clone repo
```
git clone https://github.com/timdecillis/repertoire
```

2. Install dependencies
```
npm install
```
3. Compile the page
```
npm run client-dev
```
4. Run the server
```
npm run server-dev
```
5. Open a browser window and visit localhost:3000

## Tech Stack

Javascript, React, Node, Express, MongoDB, OpenAI API
