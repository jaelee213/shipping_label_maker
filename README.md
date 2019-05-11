## Author

Jae H Lee

## Get Started

To run the app, you can run in the project directory: 

`npm install` then `npm start`

and on your browser, go onto `localhost:3000`

## Testing

To test, you can run in the project directory:

`npm run test`

## Notes
* At the root, `Authorization` component is a HOC in charge of authenticating users via a `Login` component before rendering `ShippingLabelMaker` component
* Currently, username `Publicis` and password `Sapient` is the only verified credential (hard coded)
* Upon completing the shipping label, user has option to go back and edit the label, prompting them back to the `Wizard`
* Testing done with Jest / Enzyme

## To Refactor / Add
* Include validation to make sure all input fields are filled out before proceeding to next step
* Definitely can go back and flush out all step components to be stateless functional components, with `ShippingLabelMaker` being the single component with state (and possibly `Wizard` as well)
* Can possibly simplify logic by handling all onChange and onClick logic within the `onAction` method that is passed down to all steps as props
* Re-structure the directory layout, with a `containers` folder and `components` folder instead of the current `core` and `features`
* Add splash screen / modals to enhance user experience