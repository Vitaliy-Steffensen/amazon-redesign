export const initialCheckoutValues = {
  firstname: "",
  lastname: "",
  street: "",
  postalCode: "",
  city: "",
  email: "",
  phone: "",
};

export const invalidCheckOutValues = (formValues) => {
  let errors = {};

  Object.keys(formValues).forEach((key) => {
    if (formValues[key].length === 0) errors[key] = "Not all fileds are filled";
  });
  console.log("errors", errors);

  if (Object.keys(errors).length > 0) return errors;

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!emailRegex.test(formValues.email)) {
    errors.email = "Invalid email";
    return errors;
  }

  return false;
};
