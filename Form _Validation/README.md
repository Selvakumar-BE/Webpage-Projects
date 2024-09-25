# Registration Form

This project is a simple HTML form with validation using JavaScript. The form collects the user's details such as username, name, email, password, date of birth, state, district, gender, and a checkbox to agree to the terms. The input is validated both on the client side using JavaScript before submission.

## Features

- **Username validation:** The username must contain at least one uppercase letter, one lowercase letter, and be between 3 and 25 characters.
- **Name validation:** The name can only contain alphabets and must be between 3 and 25 characters.
- **Email validation:** The email must follow a standard email format (e.g., `example@example.com`).
- **Password validation:** The password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be between 8 and 25 characters.
- **State and district selection:** Users can select their state, which dynamically loads the corresponding districts. If no state is selected, an error message will be displayed.
- **Gender selection:** Users are required to select a gender, otherwise, an error will be shown.
- **Terms agreement checkbox:** A checkbox is required to confirm the user's agreement with the terms.
- **Responsive UI:** The form is responsive and adjusts based on the screen size.

## JavaScript Functionality

1. **District Selection Based on State:**
   - The form allows the user to choose a state, and based on the state selection, the corresponding districts are dynamically populated in the district dropdown.
   - The function `checkingState()` is triggered when the state is changed and updates the district list according to the selected state.

2. **Validation Functions:**
   - **`checking(inputs)`**: Validates all input fields to check if they are filled.
   - **`checkUser(input)`**: Validates the username against the specified regular expression.
   - **`checkName(input)`**: Validates the name to ensure only alphabets are allowed.
   - **`checkEmail(input)`**: Validates the email against a simple regex pattern.
   - **`checkPassword(input)`**: Ensures the password follows a strong password policy.
   - **`checkConfirmpassword(password, password2)`**: Ensures the password confirmation matches the password.
   - **`checksgender(inputs)`**: Verifies that a gender option is selected.
   - **`checkBoxes(input)`**: Checks if the user has agreed to the terms by selecting the checkbox.
   - **`checkState(select)`**: Verifies that a state is selected from the dropdown.
   - **`checkDistrict(select)`**: Verifies that a district is selected.

3. **Regular Expressions for Validation:**
   - **Username:** A valid username requires at least one uppercase letter, one lowercase letter, and a total length of 3 to 25 characters.
   - **Name:** A valid name should be between 3 and 25 characters and consist only of alphabets.
   - **Email:** The email follows a basic regex for valid email formatting.
   - **Password:** The password requires a mix of uppercase, lowercase, numbers, and special characters, with a length of 8 to 25 characters.

4. **Form Submission:**
   - On submission, the form prevents the default behavior (`event.preventDefault()`), checks all fields, and displays success or error messages based on validation.

5. **Input Feedback:**
   - **`invalidInput(input, message)`**: Shows an error message below the input field if validation fails.
   - **`successInput(input)`**: Indicates that the input has passed validation by highlighting the input with a green border.

## Styling (CSS)

- The form has a black and gray background with white text, creating a modern dark theme.
- The fields are styled with rounded corners, and there is feedback provided for errors (red border) and success (green border).
- The submit button changes its color when hovered over for an interactive experience.

## How to Use

1. Clone the repository.
2. Open the `forms.html` file in your browser.
3. Fill in the form with valid details and submit it.
4. The JavaScript code will validate the input fields and give feedback (highlight errors in red and valid fields in green).
5. If everything is correct, the form will be processed for submission.

## Dependencies

- **Bootstrap 5.3.3**: The form uses Bootstrap for basic styling, which is included via a CDN.

## Files

- **`forms.html`**: The HTML structure of the form.
- **`forms.js`**: The JavaScript file for handling form validation.
- **`forms.css`**: Custom CSS for the form styling.
