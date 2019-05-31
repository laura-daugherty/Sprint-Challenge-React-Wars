# Answers

1.  What is React JS and what problems does it try and solve?

React JS solves our modern problem with data and the Dom. We have lots of dynamic data being used on our websites these days (Facebook) that needed a more memory efficient way to store data and move it around the application. React uses the virtual Dom to handle passing around data to lighten the load for the Dom. The React lets the engineer interact with the virtual Dom while all the Dom management is taken care of by React.

1.  What does it mean to _think_ in react?

Thinking in React is a specific way of looking at problems or applications you’d like to build and determining how to solve them using React. React applications are comprised of components, so one of the main points of thinking in React is to identify components you’d like on your page and building them out accordingly. After producing a static version of the page, the second main point of thinking in React is to visualize how the data will flow through the element from the top down. 

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class component is used when our component needs to use state. Only class components can hold and manipulate state. Functional components are presentation only, in that they show an element but do not manipulate state at all.

1.  Describe state.

State is the internal dynamic data of the component. 

1.  Describe props.

Props are arguments. Props are used to pass data (the state) down through React components. Props are read-only, they can not by dynamically manipulated.

