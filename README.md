View the [live site](https://dotapop.herokuapp.com/)

# DotaPop
![Splash Page](https://github.com/darrenyong/dotaPop/blob/master/assets/readme_images/splash.png)

DotaPop is a data visualization project designed to show the popularity of heroes
over time throughout official Valve events. <strong>Popularity is calculated by how often
each hero is picked AND banned for each event.</strong> It is built using the following technologies:
* <strong>Backend</strong>: Node.js with Express.js
* <strong>Frontend</strong>: JavaScript
* <strong>Misc</strong>: D3.js, HTML5, CSS3

# Features 
### Current Features
* [Sorting by Heroes](https://github.com/darrenyong/dotaPop#sorting-by-heroes)
* [Sorting by Events](https://github.com/darrenyong/dotaPop#sorting-by-events)
* [Viewing Hero Details](https://github.com/darrenyong/dotaPop#viewing-hero-details)

### Planned Features
* Add data for more events
* Create line graph for each hero
* Create histogram for each event 


## Sorting by Heroes
Users are granted the option to sort the heroes based on:
* Name
* Popularity

![Sorting Herpes](https://github.com/darrenyong/dotaPop/blob/master/assets/readme_images/sortingHeroes.gif)


## Sorting by Events
Users are also granted the option to sort the data based on Valve events. The
events that are available as options are as follows:
* [The International 2013](https://liquipedia.net/dota2/The_International/2013)
* [The International 2014](https://liquipedia.net/dota2/The_International/2014)
* [The International 2015](https://liquipedia.net/dota2/The_International/2015)
* [The Frankfurt Major 2015](https://liquipedia.net/dota2/Frankfurt_Major/2015)
* [The Shanghai Major 2016](https://liquipedia.net/dota2/Shanghai_Major/2016)
* [The Manila Major 2016](https://liquipedia.net/dota2/Manila_Major/2016)
* [The International 2016](https://liquipedia.net/dota2/The_International/2016)
* [The Boston Major 2016](https://liquipedia.net/dota2/Boston_Major/2016)
* [The Kiev Major 2017](https://liquipedia.net/dota2/Kiev_Major/2017)
* [The International 2017](https://liquipedia.net/dota2/The_International/2017)
* [The Bucharest Major 2018](https://liquipedia.net/dota2/PGL/Bucharest_Major/2018)
* [The International 2018](https://liquipedia.net/dota2/The_International/2018)

![Sorting Events](https://github.com/darrenyong/dotaPop/blob/master/assets/readme_images/sortEvent.gif)

## Viewing Hero Details
Clicking on each hero sprite will display the details of that hero. Details include:
* Overall popularity of the hero per event
* How many games they participated in
* How often the hero was picked
* How often the hero was banned

![Viewing Details](https://github.com/darrenyong/dotaPop/blob/master/assets/readme_images/viewDetails.gif)