[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/hayzamjs/PopcornParty)

# PopcornParty <3

This project was inspired from another project called NetflixParty which is pretty amazing, but was a little hard to setup also that it was only available for netflix, PopcornParty makes Popcorn Time available to be streamed with all your friends and family with very little effort. :)

## Screenshot Time!
![PlayImage](http://imgur.com/pJqaweC.png)
![WelcomeImage](http://i.imgur.com/jRo4KgB.png)

#Use our server, (Coming soon!)

# Installation :

* Copy the streamer.js file to the lib folder inside popcorntime. **VERY IMPORTANT IF STREAMING FROM POPCORNTIME**
* Forward the port 27070. [AND 27069 if streaming from PopcornTime]
* To start the server :
  * Open shell/terminal of your machine.
  * git clone https://github.com/Fazelesswhite/PopcornParty.git
  * cd PopcornParty/
  * npm install
  * node server.js
* Turn on PopcornTime and then stream the playback to VLC using the VLC option. **VERY IMPORTANT**
* To view the movie from your network, goto http://YourInternalIP:27070/index.html [Third box in index.html]
* To view the movie from external networks, goto http://YourExternalIP:27070/index.html [Third box in index.html]
* For other users to connect from outside your home you should share 'http://YourExternalIP:27070' [Third box in index.html]
* If it is another link suppose, http://html5demos.com/assets/dizzy.mp4, then just use that in the link box! [Third box in index.html]

***For seeking problems, First seek then you should press sync play button below. 


##### Most video files can be played, but some are problematic, just keep that in mind, but when I was testing it out, all of them played pretty well! :)

# To-do list :

- [x] Integrate a chat within.
- [x] Make more userfriendly.
- [x] Make the UI prettier.
- [ ] Make a video explaining the setup of the server. :)
- [x] Make room functionality.

## Any contributions are welcome and thank you! :)
## Ain't no party like a PopcornParty! XD


