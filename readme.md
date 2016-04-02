#PopcornParty <3

This project was inspired from another project called NetflixParty which is pretty amazing, but was a little hard to setup also that it was only available for netflix, PopcornParty makes Popcorn Time available to be streamed with all your friends and family with very little effort. :)

##Screenshot Time!
![PlayImage](http://imgur.com/pJqaweC.png)
![WelcomeImage](http://i.imgur.com/ND2Avy8.png)

# Installation :

* Copy the streamer.js file to the lib folder inside popcorntime. **VERY IMPORTANT**
* Forward the ports 27069 and 27070. (If you're behind a NAT)
* To start the server :
  * Open shell/terminal of your machine.
  * git clone https://github.com/Fazelesswhite/PopcornParty.git
  * cd PopcornParty/
  * npm install
  * node server.js
* Turn on PopcornTime and then stream the playback to VLC using the VLC option. **VERY IMPORTANT**
* To view the movie from your network, goto http://YourInternalIP:27070/index.html
* To view the movie from external networks, goto http://YourExternalIP:27070/index.html
* For other users to connect from outside your home you should share 'http://YourExternalIP:27070/index.html' link :)

***For seeking problems, First seek then you should pause and play so that it syncs to all the users viewing! :) 


##### Most video files can be played, but some are problematic, just keep that in mind, but when I was testing it out, all of them played pretty well! :)

# To-do list :

- [x] Integrate a chat within.
- [ ] Make more userfriendly.
- [ ] Make the UI prettier.
- [ ] Make a video explaining the setup of the server. :)

## Any contributions are welcome and thank you! :)
## Ain't no party like a PopcornParty! XD

