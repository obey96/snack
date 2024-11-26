### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
 It enables navigation between views in a React application while maintaining a single-page application structure.

- What is a single page application?
An application that dynamically updates content on the same page without requiring full page reloads, improving user experience.

- What are some differences between client side and server side routing?
Client-side routing updates the URL and renders components without a server request, while server-side routing reloads the entire page with every navigation.

- What are two ways of handling redirects with React Router? When would you use each?
Use the <Navigate> component for declarative redirects or the navigate() function in code. Use <Navigate> for component-based routing and navigate() for programmatic navigation.


- What are two different ways to handle page-not-found user experiences using React Router? 
Use a path="*" route to match undefined URLs or implement a Switch/Routes component with a fallback NotFound page.

- How do you grab URL parameters from within a component using React Router?
Use the useParams() hook to access route parameters in a component.

- What is context in React? When would you use it?
A way to share global data like themes or authentication state without passing props down the component tree. Use it when state needs to be accessed by multiple, deeply nested components.

- Describe some differences between class-based components and function
  components in React.
   Class components use this and lifecycle methods, while function components rely on hooks for state and side effects. Function components are simpler and more concise.

- What are some of the problems that hooks were designed to solve?
Hooks simplify state management and side effects in function components, eliminating the need for class components and improving reusability and readability.