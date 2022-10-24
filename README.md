# Getting Started with CatFact App

This project is a very simple React project using redux, where i implemented redux-saga middle ware.

This is a simple app with the functionality to fetch and display the fact about the cat from the given API end-point.
The project has one container to display the fact, one refresh button and one counter-text to display how many cat-facts were displayed in each session.

`on-Load` the app should display one random fact about the cat, and `on-Clicking` the app should fetch another fact about the cat and `update` the counter-text.

## To run this application in your local machine, you can run:

### `git clone SSH`

Visit the github link for this repository and copy the SSH key and in your terminal, go to your preferred directory and run that command with the SSH you just copied.

### `npm i`

After you successfully clone the application, run this command to install all the dependecies.

### `npm start`

After installation of dependencies, run this command to run the application in your local machine.
This will open the application in localhost:3000.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Description

### how i start building this project

- At first, i wireframed the app, using pen and paper.
- I then started working in the markup and the style.
- I created components directory to keep two components i.e. FactContainer and Button
- After i finished the markup and the style, i created the helper directory to store the function which helps in fetching and storing the facts about the cat.
- Then i made a state in the app to store the facts about the cat and i drilled down the props to respective component to make first working prototype using only REACT framework.
- Now was the time to implement state-management using redux. I created store, wrapped the root level of the app with Provider, created slice and actions to perform the same action, till here, I was using same helper function to fetch and update the state of the redux.
- After successfull implementation of react-redux, i read about the saga and started implementing it, At first it took me a while to understand, but after watching couple of tutorial videos and reading the documentation i made it work, At this point i was no longer using helper function to fetch the data, but using my saga middleware to watch for the action being dispatch, to update the state.

The app itself was not really complicated to build, however the implementation of the saga-middleware caught me for couple of hours. It was my first time using saga. The cool thing about saga is it makes calling the external api super easy by constantly watching the action.
During the implementation of saga i came to know about the generator function and its weird looking syntax.

## Assumption

- As the application was focusing on simple implementation, I didnot consider using any fancy svgs background or any other images.
- The app is small, with just two components, so i consider writing css in the app.css. However if the app was big in size, using styles in respective folder structure is considered best practice.
- Actions and reducers are defined in the respective folder, In redux implementation, i have created `factsAction.js` and `factSlice.js` to perform dispatching the action and updating the state, since FactContainer was the area of target I kept those file in same folder where the component was.

* The api provided was consisting 34 different pages value with 10 differennt facts coming from single page, to choose one random fact from one random page, I created `randomGenerator` function, to target random page and select the random fact from that page.

## Testing

- As a junior developer i have never done testing, this is my first time writing testing for any application.

* I used jest to test my react-redux application.
* All my tests are written in App.test.js

## Bugs

- In the development bond due to some issue with the useEffect hook, it renders twice for the first time when the FactContainer renders, However in the build this is not an issue.

## References

- As redux-saga and the testing was my first attempt, i took numerous online material as the reference, `Redux-saga-docs`, `stackOverFlow`, tutorials from `Youtube` were few motivation for me to have the app functioning.
- For redux-saga implementation i used, [reduxsaga officialdocumentation](https://redux-saga.js.org/) and [edRoh](https://www.youtube.com/watch?v=9MMSRn5NoFY)

* For testing i used [react-testing-library](https://create-react-app.dev/docs/running-tests/)
