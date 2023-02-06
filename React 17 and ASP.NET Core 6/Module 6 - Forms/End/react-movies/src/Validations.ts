import * as Yup from "yup";

// We need to add this function to the app.tsx
// We need to add declare module 'yup' to global.d.ts since we are working with typeScript
// Here we configure all the validations that we want to add to Yup
function configureValidations() {

  // firstLetterUppercase is the name of the function custom validator
  Yup.addMethod(Yup.string, "firstLetterUppercase", function () {

    // 1st parameter is the name of the test
    // 2nd parameter is the message that we are displaying
    return this.test(
      "first-letter-uppercase",
      "First letter must be uppercase",
      function (value) {
        if (value && value.length > 0) {
          // Here I am getting the 1st letter
          const firstLetter = value.substring(0, 1);
          //Checking if the first letter is upper case
          return firstLetter === firstLetter.toUpperCase();
        }
        // If user doesn't enter anything we don't want to validate
        return true;
      }
    );
  });
}

export default configureValidations;
