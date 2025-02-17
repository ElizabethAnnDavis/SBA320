# SBA 320: React Web Application Project ✔

A practical web application built with React using the NASA api.

## Features

- **TBA:** tbd
- **TBA:** tbd
- **TBA:** tbd
- **TBA:** tbd


## Files

- **App.jsx:** tbd
- **App.css:** tbd

- **components:** Caption, ComponentContainer, Image, ImageContainer, Nav, Title
- **Caption.jsx:** receives a caption as a prop and returns the caption as an p element to display
- **Caption.css:** styles the caption
- **ComponentContainer.jsx:** holds the image title, image container, and image caption in a group
- **ComponentContainer.css:** tbd
- **Image.jsx:** accepts a url as a prop and returns a img tag
- **Image.css:** sets the size of the images to be more uniform
- **ImageContainer.jsx:** holds a previous button, Image, and a next button together in a group
- **ImageContainer.css:** uses display flex on the item in the container and does some css on the buttons, including button hover effects
- **Nav.jsx:** navbar containing links to main page, details page, and a dropdown list of image titles
- **Nav.css:** sets the navbar's opacity and pins it to the top of the display and styles the nav items like the dropdown menu
- **Title.jsx:** receives a title as a prop and returns the title as an h1 element to display
- **Title.css:** styles the title

- **data:** data.jsx
- **apiData.js:** calls getAPIData funtion to create an array of objects

- **pages:** DetailsPage, MainPage
- **DetailsPage.jsx:** tbd
- **MainPage.jsx:** tbd

- **utilities:** getAPIData, reducer
- **getAPIData.js:** contains a async function of the same name that makes a fetch request for data from the [NASA API](https://api.nasa.gov/)
- **reducer.mjs** tbd


## Specifications
### Objectives:
*  -  The content, context, and objective of your application is entirely up to you. Be creative, and think of something that will both allow you to demonstrate the skills you've acquired thus far and solve a need (practical or fictional).
*  -  Once you have an idea for your project, keeping the below requirements and resources in mind, speak to your instructor to have your project approved before you begin. This will ensure you're on the right track from the start, and not running into unforseen issues or wasting time on something that will not satisfy the assignment's objectives.
*  -  Find an API: Please be extremely thorough when finding an API you'd like to use for your project. In other words, please ensure you have properly vetted your API by taking the time to read its documentation and even "hitting a few endpoints". Take the time to test the API, see how you can get it to respond with data, and see what that data looks like.

### Instructions:
*  -  Put everything you've learned to the test and apply it to a practical web application.

### Requirements:
*  ✔   %  --> React Application (built with vite)
*    
*  ✔   %  --> Get data from a 3rd party api
*    
*  ✔   %  --> Display data from the api on the screen (DOM)
*    
*  ✔   %  --> Use `useState` hook
*    
*  -   %  --> Use `useReducer` hook
*    
*  ✔   %  --> Use `useEffect` hook
*    
*  ✔   %  --> Access the `react-router-dom` routing library to use hooks like `useRoutes` and `useParams`
*    
*  ✔   %  --> Commit frequently to the git repository. At least ~15
*    
*  -   %  --> Include a README file that contains a description of your application. README should include: 
        - Explanations of the technologies used. 
        - Explanations of the approach taken. 
        - Usage instructions, if relevant. 
        - Unsolved problems. 
        - List sources.
*    
*  -  ?%  --> Utilize reasonable data structuring practices.
*    
*  -  ?%  --> Utilize reasonable code organization practices.
*    
*  -  ?%  --> Ensure that the program runs without errors 
        - Comment out things that do not work, and explain your blockers - you can still receive partial credit.
*    
*  -  ?%  --> Level of effort displayed in creativity, presentation, and user experience.
##### Bonus Objectives:
*  ✔ +?%  --> Have one or more complex user interface modules such as a carousel, drag and drop, a sticky nav, tooltips, etc.
*    
*  - +?%  --> Look into `localstorage` so you can save data to the user's browser.