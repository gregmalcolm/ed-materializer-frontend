# Materializer (Web Frontend)

Materializer is a web app and API for gathering material prospecting data
for the game Elite: Dangerous.

The API part can be found [here](https://github.com/gregmalcolm/ed-materializer).

## Installation

See the [Ember-cli Guide](http://ember-cli.com/user-guide/) for to get started.

Global npms:
* npm install bower -g
* npm install ember -g

Build ember project
* `npm install`
* `bower install`
* `ember s --proxy localhost:3000`
* Open the browser at [http://localhost:4200](http://localhost:4200).

**Note:** This assumes you have the ed-materializer rails project running on port 3000

## Running against the QA api

If you only want to work on the frontend then no need to bother installing API your 
machine. Connect to our QA server instead:

* `ember s --environment=qa --proxy=http://ed-materializer.herokuapp.com/`

** Contributing

Contributions to the project are welcome, though Issues and Pull Request.

You can discuss details on the Elite Dangerous forum here:

https://forums.frontier.co.uk/showthread.php?t=242152&p=3754329#post3754329

You also ping me (as @Marlon Blake) on Discord chat server:

https://discord.gg/0wESJJF3brdY0NVK