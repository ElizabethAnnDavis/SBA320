# SBA 320: React Web Application Project ✔

A practical web application built with React using the [NASA API](https://api.nasa.gov/). This project displays images from NASA's Astronomy Picture of the Day (APOD) API.


## Technologies

- **React**
- **Vite**
- **JavaScript**
- **CSS**


## Approach

- **Seperation of Concerns:** Code broken apart in to many files, each containing small working pieces which are connected together to form the final product.


## Instructions

- **Clone Repo:** clone [this repo](https://github.com/ElizabethAnnDavis/SBA320)
- **Obtain API key:** get a key for the [NASA API](https://api.nasa.gov/)
- **Store Key:** in a `.env` file, create a variable as followed: VITE_API_KEY=YOUR_KEY_HERE
- **Necessary Installs:** run `npm install` and `npm install react-router-dom`
- **Run Program:** run `npm run dev` to launch this web app


## Features

- **Main Page Carousel:** The main page of this web app features a carousel of images that changes every 5 seconds. An image can be clicked to display details about it.
- **Image Details Page:** A detailed view of the image with its title, caption, and navigational buttons to view the next/previous images.
- **Sticky Navigation Bar:** A navbar pinned to the top of the display containing a link to the main page and a dropdown menu of the avalible image titles.
- **Dropdown Navigation:** The dropdown menu in the navbar containing clickable image titles which, when clicked, display the details of the image selected.
- **Persistent Image Index:** The current index is saved with `localStorage` so that it is persistant after reloads.


## Files

- **App.jsx:** sets a global state of index using `useState` and uses `react-router-dom` to use `Route` and `Routes`. creates `localStorage` to store the index and uses `useEffect` to access the index that has been saved.
- **App.css:** sets a background image for the web app

- **components:** Caption, ComponentContainer, Image, ImageContainer, Nav, Title
- **Caption.jsx:** receives a caption as a prop and returns the caption as an p element to display
- **Caption.css:** styles the caption
- **ComponentContainer.jsx:** holds the image title, image container, and image caption in a group
- **Image.jsx:** accepts a url as a prop and returns a img tag
- **Image.css:** sets the size of the images to be more uniform
- **ImageContainer.jsx:** holds a previous button, Image, and a next button together in a group
- **ImageContainer.css:** uses display flex on the item in the container and does some css on the buttons, including button hover effects
- **Nav.jsx:** navbar containing links to main page, details page, and a dropdown list that accesses `react-router-dom` to use `Link` to create a clikcable list of image titles and uses `useState` to deterime if the dropdown menu is expanded
- **Nav.css:** sets the navbar's opacity and pins it to the top of the display and styles the nav items like the dropdown menu
- **Title.jsx:** receives a title as a prop and returns the title as an h1 element to display
- **Title.css:** styles the title

- **data:** data.jsx
- **apiData.js:** calls getAPIData funtion to create an array of objects

- **pages:** DetailsPage, MainPage
- **DetailsPage.jsx:** accesses `react-router-dom` to use `useParams` to display a selected image and uses `useEffect` to update the index state whenever there is a change
- **MainPage.jsx:** creates a continuous carousel of images in the apiData array using `useEffect` with each picture being a clickable item which accesses `react-router-dom` to use `useNavigate` to redirect to the DetailsPage

- **utilities:** getAPIData
- **getAPIData.js:** contains a async function of the same name that makes a `fetch` request for data from the [NASA API](https://api.nasa.gov/) and filters out results that do not contain a usable image.


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
*  ✔   %  --> Use `useState` hook or `useReducer` hook
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
*  ✔  ?%  --> Utilize reasonable data structuring practices.
*    
*  ✔  ?%  --> Utilize reasonable code organization practices.
*    
*  ✔  ?%  --> Ensure that the program runs without errors 
        - Comment out things that do not work, and explain your blockers - you can still receive partial credit.
*    
*  ✔  ?%  --> Level of effort displayed in creativity, presentation, and user experience.
##### Bonus Objectives:
*  ✔ +?%  --> Have one or more complex user interface modules such as a carousel✔, drag and drop, a sticky nav✔, tooltips, etc.
*    
*  - +?%  --> Look into `localstorage` so you can save data to the user's browser.