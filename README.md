# Build an Image Search App using NASA API

Submission for the second round of the Capital One Software Engineering Summit. 

The challenge can be found here.
The final project can be found here.

## List of of Frameworks and APIs
* [Vue](https://vuejs.org/) for backend
* [Skeleton](http://getskeleton.com/) for frontend
* [NASA Image API](https://api.nasa.gov/api.html#Images) to search NASA database
* [VueGoodshare](https://github.com/koddr/vue-goodshare/blob/master/src/VueGoodshare.vue) to share to scoial media
* [Hover](https://github.com/IanLunn/Hover) for animations
* [Vue-Particles](https://github.com/creotip/vue-particles) to get background design

#### Challenge Approach:
The approach can be split up into three major sections (in order of priority and implmentation):
* Search Engine
  * Calling API
  * Parsing Information
  * Displaying Information
* Modal data manipulation
  * Pop up on image click
  * Sending data to Modal
  * Search with tags
  * Social Media Sharing Tool
* Design
  * Aesthetic Look
  * Interactive animations

# Feature Overview

### Search
* Input a search term, keywords, location, or start/end dates and displays results. Implemenented by creating input forms with a submit button that passes the input fields to a function that appends the respective strings to the API root.
* A collection was returned that can be compared a russian doll. It contained an array of items that contained arrays of objects that had arrays of links and of metadata.
* In order to display the data, an html <section> was created and ran through the correct links array from the collection

App will contact the NASA Image Search API.

`https://images-api.nasa.gov/search?q=`

### Modal
* In order to pop up the modal, each image listened for an @click event.
* To display the image metadata, on the click event, the correspoding image object array from the collection is passed onto the modal
* (OPTIONAL) Each keyword was created into a button. Each button caused the modal to close, but returned the pressed keyword back to the main API to perform the search function again.
* (OPTIONAL) The social media button was created in the modal and the image.links[0].href linked was passed to share. This was implemented using VueGoodshare

### Design
* Image bonuce animations were implmented using Hover.css
* Particles were implmented using Vue-Particles

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
```
## Challenges
* The search function created to return the API link with the correct search queries could only take one arguement. This aws fixed by sending it a single array contained the different queries ex: [searchTerm, location, keyword].
* Image metadata was not uniform, especially keywords. Some descriptions contained links still in html format and keywords sometimes appeared as one string seperated by commas.
 * A fix was to check if the keyword array was length 1, which usually meant it was a bunch of words with commas, and the use the string split function to make an array of keywords.
 * Image descriptions had too many variety with link formatting, no solution was found.
* Particle background does not grow with page when search results appear.
