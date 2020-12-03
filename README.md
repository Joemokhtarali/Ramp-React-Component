# Ramp-React-Component
### App.js
I built a functional component using useState Hook to manage my state, in App.js where I render the output after you enter the input.

### Ramp.js 
Ramp.js is a functional component where I pass the input as a prop. With a Switch statement to check the input.
In the first case, if the input is an empty string, which is the default value, the output is the instructions.
In the second case, if the input is either undefined || falsy || even the string undefined "just for experiment", the output will show the time updated every second, rendering that in the Time component. 
In the third case, an If statement to check if the input is an array. "If the first char and the last char of the input, then I parse it, iterate using .map where every element is in a div inside an unordered list.
In the end, I was working on a function that handles JSON errors in case someone inputs an invalid syntax for arrays. That I am still researching. 

### Time.js 
In this component, I used a class component, componentWillMount lifecycle, and setInterval to update the time. 




