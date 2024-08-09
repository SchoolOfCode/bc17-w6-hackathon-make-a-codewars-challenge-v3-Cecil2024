# Animal Crossing Traffic Light Control 🦡 🐿 🦔 🦆 🚦

![App Screenshot](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUMWDylhXGlx7TDcyZc-MWK8eE6GslP6oGyQ&s)



You're tasked with writing code to control a traffic light system for an animal crossing. This traffic light system ensures the safety of animals as they cross paths frequented by vehicles. The light cycles through three states: green, yellow, and red.

- **Green**: Animals are waiting to cross, and vehicles are allowed to pass.
- **Yellow**: A warning for vehicles to slow down, as the light is about to turn red.
- **Red**: Vehicles must stop, allowing animals to cross safely.

## Goal

Your goal is to implement a function that manages the transition between these light states. The function will take the current state of the traffic light as a string (either `"green"`, `"yellow"`, or `"red"`) and return a string representing the next state in the cycle.

For instance, when the input is `"green"`, the function should return `"yellow"`, indicating that the light is transitioning to the next phase.

## Function Signature

```javascript
function updateLight(current) {
    // Your code here
}
