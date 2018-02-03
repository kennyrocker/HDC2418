# Developer Test

- This is the home depot front end developer test

## Instructions

- Display three instances of the product-box-component in a container component.

- The container component must be responsive, (must use flex - you can use flex natively in scss, or use the angular-flex npm dependency). ( Breakpoints : mobile is screen width within range 375px - 768px, tablet is screen width within range 768px - 1024px)

- Break down the product-box-component into partials. This will mean the product-box.component will act as the container component. How you want to break down this component is up to your own judgement.

## Usage

``` bash
$ npm i 
$ npm start
$ browser: open localhost:4200
```

## Testing (If Applicable)

``` bash
$npm test
```

## Linting 

``` bash
$npm install -g tslint@latest
$npm run lint
```

## Nice-To-Haves
Please chose to implement any or all of the nice-to-have suggested features

- Add Unit tests for product-box.component which would likely be a karma/jasmine unit test that evaluates the rendering of the child components.

- Make the container accept input which will be the amount of child components to display

- Read the amount of child components to render from an endpoint. The endpoint will be 'localhost:3000/itemCount'. 

To stand up this endpoint please run 
``` bash
$ npm run mock server
```
This will also mean you will need to also complete the above task. Use @ngrx/Effects and @ngrx/Store for extra bonus points.

As another bonus - delay the UI rendering until api call has completed

- Improve the responsiveness of the component with following requirements : ( bonus : use mobile first approach )

  mobile : 2 items per row

  tablet : 3 items per row

  desktop : 4 items per row

- Add buttons on the page to switch the layout from n-items per row to one item per row

- Feel free to add in any other neat features as your own nice-to-haves. We value creativity!