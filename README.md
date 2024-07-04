
<img src="https://pclub.in/images/pclub.png" width=60/>

# CampusEbay

CampusEbay is an e-commerce platform developed as a Secretary recruitment task for the Programming Club during the Summer Term 2024. The platform is designed to facilitate user authentication, product browsing, and order management. Built with React.js, Redux, Firebase, and Tailwind, it offers a seamless user experience.

### Features

**1. Login and SignUp:**
   - Utilizes FirebaseAuth for user authentication.
   - Protects the Checkout route, ensuring only registered users can access it.

**2. Home:**
   - Lists all available products.
   - Provides a search functionality to filter products based on user queries.

**3. Profile Page:**
   - Displays user details and delivery address.
   - Allows users to update their information, storing changes in local storage (can be extended to save in Firebase).

**4. Product Page:**
   - Shows detailed information about each product.
   - Includes an option to add products to the cart.

**5. Cart:**
   - Displays all items added to the cart.
   - Features a checkout button, which requires user login to be enabled.

**6. Checkout:**
   - Prompts for delivery address during checkout.
   - On placing an order, shows a "Order Successful" popup and updates the order in the orders section.

### Technologies Used

- **React.js:** For building the user interface.
- **Redux:** For state management.
- **Firebase:** For authentication and potential data storage.
- **Tailwind CSS:** For styling the application.

### Preview

Check out the live preview of CampusEbay: [CampusEbay Preview](https://pclub-task.pages.dev/)



### How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/Akshatgupta15/CampusEbay.git
   cd CampusEbay

2. Install dependencies:
   ```sh
   npm install
   
3. Start the development server:
   ```sh
   npm start

Open your browser and navigate to http://localhost:3000 to see the application in action.

### Future Enhancements
- Integrate Firebase for storing user profile updates.
- Add order history tracking for users.
- Improve search functionality with advanced filtering options.
- Enhance UI/UX with additional Tailwind components.
- Feel free to explore the codebase and contribute to the project on GitHub.



For any queries or suggestions, please contact the Programming Club, IIT Kanpur.

Developed by Akshat Gupta
- Secretary, Programming Club, IIT Kanpur
- Web Executive SPO 

