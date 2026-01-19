Here is the assignment formatted cleanly in Markdown, ready to be copied into a `README.md` file or a document editor.

---

# React Assignment: State, Props, and Component Interaction

## Course Topic Coverage

This assignment covers concepts taught last week (Wednesday) and today:

- JSX interpolation for dynamic values
- `useState` Hook
- Iterating lists using the `map()` method
- Functional props (passing functions as props)
- State lifting (sharing state between components)

---

## Assignment Objective

The goal of this assignment is to assess your understanding of how React components interact, how state is managed, and how data flows in a React application. You will build a simple **User Management App** using functional components.

## Project Title

**User Manager App**

---

## Project Requirements

### 1. App Structure (Mandatory)

Your app must contain at least three components:

- **`App`** (Parent component)
- **`UserForm`** (Child component)
- **`UserList`** (Child component)

### 2. State Management (`useState`)

- Store the list of users in the `App` component using the `useState` hook.
- Each user should be an object with the following properties: `id` and `name`.

**Example:**

```javascript
{ id: 1, name: "John" }

```

### 3. JSX Interpolation (Dynamic Values)

Display a heading showing the total number of users dynamically.

**Example:**

```jsx
<h2>Total Users: {users.length}</h2>
```

### 4. Functional Props (Very Important)

The `UserForm` component must:

- Contain an input field and a button.
- Accept a function prop from `App`.
- Call the function to add a new user.

> ⚠️ **Critical:** `UserForm` must **NOT** manage the users list itself.

### 5. State Lifting

- The `users` state must live in the `App` component.
- `UserForm` updates the users list via a **function prop**.
- `UserList` displays the users via **props**.
- This demonstrates state lifting and proper component interaction.

### 6. Using `map()` to Render Lists

The `UserList` component must use the `map()` method to display all users. Each rendered user must have a **unique key**.

**Example:**

```jsx
users.map((user) => <li key={user.id}>{user.name}</li>);
```

---

## Expected Component Responsibilities

### `App` Component

- Holds the `users` state.
- Defines the function to add new users.
- Passes data and functions to child components.

### `UserForm` Component

- Receives a function as a prop.
- Uses local state for the **input value only**.
- Sends data back to the parent when the button is clicked.

### `UserList` Component

- Receives the `users` array as a prop.
- Uses `map()` to render the list.

---

## Bonus Task (Optional)

- Add a **"Remove User"** button next to each user.
- Use functional props to remove a user from the list.
