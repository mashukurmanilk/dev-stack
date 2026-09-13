# Dev Stack Builder

A modern web application that allows developers to explore, compare, and construct their ideal technology stack by selecting tools from various categories.

### Technology Stack
- React (Vite)
- TypeScript
- Tailwind CSS
- React-Toastify

### Key Features
1. **Interactive Stack Building**: Users can dynamically add and remove technologies from their stack list in real-time.
2. **Gradient-Themed UI**: A beautifully cohesive UI powered by a shared gradient design system across the application.
3. **Smart Notifications**: User actions like adding, duplicating, or removing stack items are acknowledged with sleek toast notifications.

---

## React Q&A

**1. What is JSX, and why is it used in React?**
JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript files. It is used in React to describe what the UI should look like in a more readable and intuitive way, seamlessly combining markup and logic.

**2. What is the difference between props and state?**
Props (properties) are used to pass data from a parent component down to a child component, and they are read-only. State, on the other hand, is used to manage local, mutable data within a component itself. When state changes, it triggers the component to re-render.

**3. What does the useState hook do, and where did you use it in this project?**
The `useState` hook allows functional components to store and update their own local state. In this project, it was used in `AvailableProducts.tsx` to manage the `stack` array (the user's selected items), the `products` list, and the `isLoading` state.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
The `useEffect` hook lets you perform side effects in your components, such as fetching data or setting up subscriptions. It was needed to fetch the JSON data asynchronously when the component first mounts, ensuring the UI could render initially (and show a loading spinner) without blocking the browser.

**5. Why does every item in a .map() list need a unique key prop?**
React uses the unique `key` prop to identify which items have changed, been added, or been removed in a list. This allows React to efficiently update only the necessary parts of the DOM instead of re-rendering the entire list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering is the practice of displaying different UI elements based on certain conditions (like true/false variables). In this project, it was used to show the loading spinner:
```tsx
{isLoading ? (
    <LoadingSpinner />
) : (
    products.map(...)
)}
```
It was also used in the `SelectedProducts` component to show "Your stack is empty." when `stack.length === 0`.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data is passed from a parent to a child using **props** (e.g., `<ChildComponent data={myState} />`). To send something back, the parent passes a **callback function** as a prop to the child. The child then calls this function (e.g., `onRemove(item)`), executing the logic back in the parent component.
