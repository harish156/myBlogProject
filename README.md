Overview
This is a simple single page Web Application project which is a personal blog. Main idea is to learn  about design and programming in React JS Component Framework, use MongoDB  and get familiar with Front End techniques like CSS and HTML tags.

Technologies Used
React JS, HTML, CSS , MongoDB, Express JS.

Setup
Project folder -> cool-blog 

Go to /cool-blog.
Run ‘npm start’.
App opens in localhost:3000.
Backend server that connects to the MongoDB and starts the REST API service - ‘node server.js’.
Connecting to MongoDB Compass - Data Tool - Open Compass -> Connection URI for localhost default mongodb - ‘mongodb://localhost’.


Architecture

App
|
|______ Header _____ NavBar ___ NavItem
|
|______ Main
              |
              |______  Left Panel  ________ TabMenu
              |
              |______  Right Panel
                              |
                              |___ Article
                              |
                              |___ Feed



App - Backbone container of the whole application. It contains the Header and Main components.

Header - Contains the Nav Bar where there are certain Nav Items which represents the content of the Main panel of the application. For eg: Travel, Movies, Food, Tech, etc.

Main - It represents the main content of the blog topic, that is currently in view.It has a left panel and right  panel.

Left Panel  -  It represents the list of articles(which forms the Tab Menu) published under the blog topic.

Right Panel - It represents the Article content and the Feed Area where the feed for the content is loaded.

Feed - Should have a post window where a user can post a comment and this is followed by  a list of comments. The comments are all listed in chronological order with likes and dislikes count.





Flow When User selects an Article

The communication from the Left Panel to Right panel is now enabled via the props(bottom to  top) and via the References(Top to bottom).

The Right Panel component maintains a map of articles

	this.articleMap  = {
	        'Travel' : {
	        	1 : Yosemite,
	        	2 : Pfeifer
	        }
	    };

 And also a state which represents what is the current topic and article being presented to the user.
		
this.state = {'topic' : 'Travel', 'article' : 1, 'articleId' : "5e12d5cd18c4a90deb86e964"};

Backend APIs

 /* Model for the Blog post. Each blog post has an entry of title and comments.
 The comments is an array of objects where each object represents the comment's
 body, date and number of likes. */
 
let BlogPost = new Schema({
    title: String,
    comments: [{body: String, date: Date, likes: Number}]
});

The express js library routes the calls to the server to the corresponding mongoose API  calls to the mongoDB.

API Endpoints are:
'/:id' - Getting all the data for a post.
'/addComment/:id' - Adding a comment to a blog post
'/updateComment/:id' - Updating a comment on a blog post. The actual comment’s index is sent  through the  body  of the request itself.
'/add' - Add a new post entry in the database.

Requirements for the App state
The current Topic  and Article that is in view.
Map of Topics -> Articles
When a user clicks a Topic, Nav bar needs to know the map and update the state.  The main content needs to update the article. The left panel has to update the  article list.
When a user clicks an Article, left panel needs to know the map and update the state. Right panel has to update the content.

       
Resources and Helpful Links

Communication between components in ReactJS
https://blog.bitsrc.io/react-communication-between-components-c0cfccfa996a

Handling events in React
https://reactjs.org/docs/handling-events.html

How the browser rendering works?
https://blog.logrocket.com/how-browser-rendering-works-behind-the-scenes-6782b0e8fb10/

https://medium.com/@mustafa.abdelmogoud/how-the-browser-renders-html-css-27920d8ccaa6


Redux  
https://redux.js.org/tutorials/essentials/part-1-overview-concepts








