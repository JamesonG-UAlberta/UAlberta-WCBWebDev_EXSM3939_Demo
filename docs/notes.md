# Notes for React
## Main React Files
React relies on several files just to achieve the template. They have a flow to them, as follows:
1. `public/index.html`, the traditional HTML file is basically empty aside from a notice to anyone with JS disabled that they need it on, and an empty div with an ID of "root". This div serves as the entry point for React (where it renders everything).
2. `src/index.js` targets and populates the "root" div in the index.html file with the application. On line 7 of the template, you can see the `root` variable being assigned to `ReactDOM.createRoot()`, which pulls a `document.getElementById()` in order to target our empty div. This binds the root of the React application to that div. Then, inside of that div, on line 8, `root.render()` puts the `<App />` component (defined in step 3) inside of the root div. 
3. `src/App.js` serves as the main "web page", pulling together all of the other components (if any) and setting their order, etc. Many other files may be referenced by this file, but this is the "entry point", similar to `Main()` in the JS console.

### Other Notable Files
- `src/App.css` serves as your primary CSS file for the application.

## JSX
JSX is a hybrid language of HTML and JavaScript. It's basically just HTML, however you can use braces to render a value or expression from JavaScript. IE:

`let myName = "Joe";`
`<p>Hello, {myName}!</p>`