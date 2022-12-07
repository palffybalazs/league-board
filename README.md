# LeagueBoard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Installation
The project should be good to run after cloning it into a new folder. Can be reached on localhost:4200, and contains to my backend application implemented during this semester.


### Main components of the projetct
Modules </br>
1. App components, gives the base of the project. Contains the router to other modules and also a basic navbar html, which appears on all pages.
2. TeamGroups, listing the groups, contains:
      * html and css format
      * services for get post update delete requests
      * teamgroup class/module
      * detailed group format, for printing the teams in the groups
3. Teams, listing the groups, contains:
      * html and css format
      * services for get post update delete requests
      * team class/module
      * detailed tream format, for printing the players in the given team
4. Players, listing the players:
      * html and css format
      * services for get post update delete requests
      * player class/module
5. Form
      * html and css format
      * uses already implemented services
      * add teamgroup, update team, remove player requests are implemented to show one from each
6. Home
      * html and css format
      * simple welcome page with background pic
