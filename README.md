# Build an Image Search App using NASA API

Submission for the second round of the Capital One Software Engineering Summit. 

The challenge can be found [here](https://www.mindsumo.com/contests/nasa-image-archive).

The final project can be found [here](https://phillippham-capitalone-nasa.herokuapp.com/?fbclid=IwAR2TiZuFdV0fE8mBv1vZzuWh874X1qxS9aMyKoPdRRIO633T5K2nY74UvTc).

## List of of Frameworks and APIs (Works best on Chrome)
* [Vue](https://vuejs.org/) to create app
* [Express](https://expressjs.com/) to run servers
* [Skeleton](http://getskeleton.com/) for frontend css
* [Hover](https://github.com/IanLunn/Hover) css for animations
* [NASA Image API](https://api.nasa.gov/api.html#Images) to get data
* [VueGoodshare](https://github.com/koddr/vue-goodshare/blob/master/src/VueGoodshare.vue) to share to scoial media

#### Challenge Approach/Feature List:
Each sprint can be split into three major sections (in order of priority and implmentation):
* Searching Capability
  * Calling API
  * Adavanced search
  * Parsing/Displaying Information
* Modal data manipulation
  * Sending data to Modal
  * Clickable tags/center text
  * Social Media Sharing Tool
  * Favorites Capability
* Design
  * Aesthetic Look
  * Interactive animations

# Feature Overview

### Search
App will contact the NASA Image Search API root.

`https://images-api.nasa.gov/search?q=`

* Input a search term, keywords, location, or start/end dates and displays results. Implemenented by creating input forms with a submit button that passes the input as strings to a function that appends the respective strings to the API root.
* A collection was returned that can be compared a russian doll. It contained an array of items that contained arrays of objects that had arrays of links and of metadata. Data was displayed by returning the correct subarray.


### Modal
* Implemented by making images listen for @click event
* To display the image metadata, the correspoding image object array from the collection was passed to the modal
* (OPTIONAL) Each keyword/center text was created into a button. It returned the pressed keyword/center name back to the main API to perform the search query again.
* (OPTIONAL) Favorites was implmented by passing image source back on button click to an array in the main app. A remove button removed the image from the array.
* (OPTIONAL) The social media button shared the corresponding image to Facebook and Twitter. This was implemented using VueGoodshare.

### Design
The app uses the skeleton CSS framework for a uniform, but simple and elegant look:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
```

And use this body style:
```css

main,
image{
  width: 80%;
  margin: 2em auto 0 auto;
}
* Image bonuce animations were implmented using Hover.css
* Particles were implmented using Vue-Particles

```
## Challenges
* The search function created to return the API link with the correct search queries could only take one arguement. This aws fixed by sending it a single array contained the different queries ex: [searchTerm, location, keyword].
* Image metadata was not uniform, especially keywords. Some descriptions contained links still in html format and keywords sometimes appeared as one string seperated by commas or semicolons.
  * A fix was to check if the keyword array was length 1, which usually meant it was a bunch of words with commas, and the use the string split function to make an array of keywords.
  * A check was put in to check if image had all the required fields
  * Image descriptions had too many variety with link formatting, no solution was found.
* A big challenge was learning how to deal with the different states of the elements of the two buttons and the main app, especially making sure each favorite entry was unique and that the add and remove buttons would appear and disappear based on what was pressed. This was solved by using props and proper variable names to avoid confusion and have the elements interact in the desired way.

## Final Comments
The animations work best on Google Chrome. This was my first ever web app and this was a great learning experience, I highly reccommend doing coding challenges to further your skills and knowledge because they challenge you with unique problems that task you with using things that you never would've touched before or learn new ways to find solutions.
