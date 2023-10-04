# Car Search App (React Assignment 1)

This is a simple React-based car rental listing app. It allows users to browse and search for cars available for rent. The project consists of three main components:

1. **App Component (`App.js`):** This is the main component that sets up the routing for the application using React Router. It defines the routes for the car listing page and sets up the routing for pagination.

2. **CarList Component (`CarList.js`):** This component displays a list of cars available for rent. It includes pagination and a search bar for filtering cars by name. The car data is fetched from a JSON file (`data.json`).

3. **CarCard Component (`CarCard.js`):** This component represents a single car listing card. It displays information about each car, including its name, image, year of manufacture, seating capacity, fuel type, mileage, and more.

4. **CarSearchBar Component (`CarSearchBar.js`):** This component provides a search bar for users to filter cars by name.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your web browser and go to `http://localhost:3000` to view the application.

## Project Structure

The project follows a basic structure with components and data:

- `src/`
  - `App.js`: The main application component with routing setup.
  - `CarList.js`: Component for displaying the list of cars, including pagination.
  - `CarCard.js`: Component for rendering individual car listing cards.
  - `CarSearchBar.js`: Component for searching cars by name.
  - `data.json`: JSON file containing the car data.

## Features

- Browse a list of available cars for rent.
- Use the search bar to filter cars by name.
- Navigate through paginated car listings.

## Technologies Used

- React.js
- React Router for routing
- Bootstrap for styling
- React Icons for icons


## Author

Ajay Aggarwal

## Acknowledgments

Special thanks to the creators of React, Bootstrap, and React Icons for their amazing tools and libraries that made this project possible.
