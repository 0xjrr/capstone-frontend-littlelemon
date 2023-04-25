# Capstone project: Restaurant Website with ReactJS - Little Lemon (Created by: 0xjrr)

This project is a frontend development capstone project that utilizes ReactJS to create a website for a restaurant. The website has four main pages: homepage, menu, about, and reserve. The reserve page includes a form for making a reservation.

The form validation is done with formik and Yup. The date input triggers a useEffect with formik validation that fetches times with a mock API call. 

The submit button triggers another useEffect that simulates a real submission with chance to fail. 

If successful the submit button gets disabled and a success message is shown in the the button, else a try again message is shown in the the button.

## Technologies Used

- ReactJS
- HTML
- CSS
- JavaScript

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the necessary dependencies by running the following command: 
```
npm install
```

4. Start the development server by running the following command: 
```
npm start
```
5. Navigate to `http://localhost:3000` in your browser to view the website.

## Pages

### Homepage

The homepage displays the restaurant's name, a brief description, and featured dishes. It also includes a call-to-action button that directs the user to the reserve page.

### Menu

The menu page displays the dishes in a grid.

### About

The about page provides more information about the restaurant, including its history, mission, and values.

### Reserve

The reserve page includes a form for making a reservation. The form asks for the user's name, email, date, time, and number of guests. Once the user submits the form, a confirmation message is displayed.

## Conclusion

This project demonstrates how to use ReactJS to create a restaurant website with multiple pages and a reservation form. The code is well-organized and easy to read, making it a good starting point for further development.

# Author
J Ricardo Ribeiro (0xjrr)

# UI Work - Figma (0xjrr)
## Wireframe Homepage
![Wireframe Homepage](Slice%20wire%20home.png)
## Wireframe Reserve Page
![Wireframe Reserve Page](Slice%20wire%20reserve.png)

## Mockup Homepage
![Mockup Homepage](Slice%20home.png)
## Mockup Reserve Page
![Mockup Reserve Page](Slice%20reserve.png)

# Author
J Ricardo Ribeiro (0xjrr)
