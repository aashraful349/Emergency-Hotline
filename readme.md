1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

These methods are all used to find elements in the DOM, but they work differently.

getElementById("id") finds just one element using its unique ID. IDs are meant to be unique, so this will only ever return one element or null if it doesn’t exist.

getElementsByClassName("class") finds all elements that share a specific class name. It returns an HTMLCollection, which automatically updates if elements are added or removed from the page.

querySelector("selector") returns the first element that matches any valid CSS selector (for example, .class, #id, div > p, etc.).

querySelectorAll("selector") returns all matching elements as a static NodeList, which means it doesn’t change if the DOM updates.

In short:
Use getElementById when you know the exact ID.
Use getElementsByClassName for multiple elements with the same class.
Use querySelector or querySelectorAll when you want more flexibility with CSS selectors.

2. How to create and insert a new element into the DOM

You can create a new element using document.createElement() and then add it to the page using appendChild().

For example, you can write:
const newDiv = document.createElement("div");
newDiv.textContent = "Hello, world!";
newDiv.className = "greeting";
document.body.appendChild(newDiv);

This creates a new div and places it inside the body.

3. What is Event Bubbling and how does it work?

Event bubbling means that when an event happens on an element, it also bubbles up to its parent elements.

For example, if you have a div with a button inside it and you add a click event listener to both the button and the div, clicking the button will first trigger the button’s event and then the div’s event. The event starts at the clicked element and moves upward through its ancestors.

4. What is Event Delegation and why is it useful?

Event delegation is a technique where you add a single event listener to a parent element instead of multiple listeners to each child. You then check which child element triggered the event using event.target.

For example, instead of adding a click listener to every list item, you can add one to the parent list and detect which item was clicked.

This is useful because it’s more efficient, works for dynamically added elements, and keeps your code cleaner and easier to maintain.

5. Difference between preventDefault() and stopPropagation()

The preventDefault() method stops the browser’s default action. For example, it can prevent a link from opening a new page or stop a form from submitting.

The stopPropagation() method stops the event from bubbling up to parent elements.

For example, if you click on a link inside a div, calling preventDefault() would stop the link from opening, while calling stopPropagation() would stop the click event from reaching the div’s event listener.

In short, preventDefault() controls what the browser does, and stopPropagation() controls how the event travels through the DOM.