# Build an Image Search App using NASA API
---
Submission for the second round of the Capital One Software Engineering Summit. 

The challenge can be found here.
The final project can be found here.

All apps will contact the NASA Image Search API.

`https://images-api.nasa.gov/search?q=`

The app uses the skeleton CSS framework for a simple, yet elegant look:

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

# Section Overview
---
## 

* [x] Add search form to page
* [x] Update state when input changes
* [x] Make API Request with search term when form is submitted
* [x] Show loading image
* [x] Append Results to the page
* [x] Hide loading image

