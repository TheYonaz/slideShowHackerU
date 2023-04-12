import { onInputChange, onReset } from "../../forms/utils/formMethods.js";
import {
  LOGIN_EMAIL_FIELD,
  LOGIN_EMAIL_ERROR,
  LOGIN_PASSWORD_FIELD,
  LOGIN_PASSWORD_ERROR,
  LOGIN_SUBMIT_BTN,
  SIGNUP_CANCEL_BTN,
  SIGNUP_COUNTRY_ERROR,
  SIGNUP_COUNTRY_FIELD,
  SIGNUP_EMAIL_ERROR,
  SIGNUP_EMAIL_FIELD,
  SIGNUP_FIRST_ERROR,
  SIGNUP_FIRST_FIELD,
  SIGNUP_HOUSE_ERROR,
  SIGNUP_HOUSE_FIELD,
  SIGNUP_LAST_ERROR,
  SIGNUP_LAST_FIELD,
  SIGNUP_PASSWORD_ERROR,
  SIGNUP_PASSWORD_FIELD,
  SIGNUP_PHONE_ERROR,
  SIGNUP_PHONE_FIELD,
  SIGNUP_STATE_ERROR,
  SIGNUP_STATE_FIELD,
  SIGNUP_STREET_ERROR,
  SIGNUP_STREET_FIELD,
  SIGNUP_SUBMIT_BTN,
  SIGNUP_ZIP_ERROR,
  SIGNUP_ZIP_FIELD,
  SIGNUP_CITY_ERROR,
  SIGNUP_CITY_FIELD,
  LOGOUT_BTN,
  SIGNUP_PAGE_LINK,
  LOGIN_PAGE_LINK,
  CREATE_PIC_PAGE_LINK,
  SIGNUP_PAGE,
} from "../../services/domService.js";
import { updateUserInterface } from "../../routes/router.js";
import useForm from "./../../forms/useForm.js";
export const logout = () => {
  localStorage.removeItem("user");
  user = null;
  updateUserInterface();
};

export const login = () => {
  const INITIAL_LOGIN_FORM = {
    email: "",
    password: "",
  };

  const LOGIN_SCHEMA = {
    email: "email",
    password: "password",
  };

  const LOGIN_INPUTS_ARRAY = [LOGIN_EMAIL_FIELD, LOGIN_PASSWORD_FIELD];
  const LOGIN_ERROR_ARRAY = [LOGIN_EMAIL_ERROR, LOGIN_PASSWORD_ERROR];

  const handleLoginSubmit = (data) => {
    console.log(data);
    // זיהוי אם יש משתמשים
    // זיהוי המשתמש במערך המשתמשים
    // אותנתיקציה של הסיסמה שהוזנה עם סיסמת המשתמ
    let FoundUser = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    // creating token - payload
    // set token in localStorage
    if (!FoundUser)
      LOGIN_PASSWORD_ERROR.textContent = "User email or password are incorrect";
    else {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: FoundUser._id,
          isAdmin: FoundUser.isAdmin,
          isBusiness: FoundUser.isBusiness,
        })
      );
      // set global variable user
      const user = {
        id: FoundUser._id,
        isAdmin: FoundUser.isAdmin,
        isBusiness: FoundUser.isBusiness,
      };
      // clear form field and errors
      onReset(
        LOGIN_INPUTS_ARRAY,
        LOGIN_ERROR_ARRAY,
        LOGIN_SUBMIT_BTN,
        form.handleReset
      );
      // move to home page
      updateUserInterface();
    }
  };

  const form = useForm(INITIAL_LOGIN_FORM, LOGIN_SCHEMA, handleLoginSubmit);

  LOGIN_EMAIL_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      LOGIN_EMAIL_ERROR,
      LOGIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  LOGIN_PASSWORD_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      LOGIN_PASSWORD_ERROR,
      LOGIN_SUBMIT_BTN,
      form.handleInputChange,
      form.handleDisableSubmitBtn
    );
  });

  LOGIN_SUBMIT_BTN.addEventListener("click", form.onSubmit);
  LOGOUT_BTN.addEventListener("click", logout);
};

//register//
export const registerService = () => {
  const initialSignUpForm = {
    firstname: "",
    lastname: "",
    state: "",
    country: "",
    city: "",
    street: "",
    housenumber: "",
    zip: "",
    email: "",
    phone: "",
    password: "",
  };
  const signUpSchema = {
    firstname: "string",
    lastname: "string",
    state: "string",
    country: "string",
    city: "string",
    street: "string",
    housenumber: "number",
    zip: "number",
    email: "email",
    phone: "number",
    password: "password",
  };
  const signUpError = [
    SIGNUP_ZIP_ERROR,
    SIGNUP_COUNTRY_ERROR,
    SIGNUP_EMAIL_ERROR,
    SIGNUP_FIRST_ERROR,
    SIGNUP_HOUSE_ERROR,
    SIGNUP_LAST_ERROR,
    SIGNUP_PASSWORD_ERROR,
    SIGNUP_STATE_ERROR,
    SIGNUP_STREET_ERROR,
    SIGNUP_PHONE_ERROR,
    SIGNUP_CITY_ERROR,
  ];
  const SIGNUP_INPUTS_ARRAY = [
    SIGNUP_FIRST_FIELD,
    SIGNUP_LAST_FIELD,
    SIGNUP_STATE_FIELD,
    SIGNUP_COUNTRY_FIELD,
    SIGNUP_CITY_FIELD,
    SIGNUP_PASSWORD_FIELD,
    SIGNUP_STREET_FIELD,
    SIGNUP_HOUSE_FIELD,
    SIGNUP_ZIP_FIELD,
    SIGNUP_EMAIL_FIELD,
    SIGNUP_PHONE_FIELD,
  ];
  const handleSignUpSubmit = (data) => {
    console.log(data);
    // זיהוי אם יש משתמשים
    // זיהוי המשתמש במערך המשתמשים
    // אותנתיקציה של הסיסמה שהוזנה עם סיסמת המשתמש
    // creating token - payload
    // set token in localStorage
    // set global variable user
    // clear form field and errors
    onReset(
      SIGNUP_INPUTS_ARRAY,
      signUpError,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleReset
    );
    // move to home page
  };
  const signUpform = useForm(
    initialSignUpForm,
    signUpSchema,
    handleSignUpSubmit
  );

  SIGNUP_FIRST_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_FIRST_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_LAST_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_LAST_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_PHONE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_PHONE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_EMAIL_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_EMAIL_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_PASSWORD_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_PASSWORD_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_STREET_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_STREET_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_HOUSE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_HOUSE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_ZIP_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_ZIP_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_CITY_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_CITY_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });
  SIGNUP_STATE_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_STATE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });
  SIGNUP_COUNTRY_FIELD.addEventListener("input", (event) => {
    onInputChange(
      event,
      SIGNUP_STATE_ERROR,
      SIGNUP_SUBMIT_BTN,
      signUpform.handleInputChange,
      signUpform.handleDisableSubmitBtn
    );
  });

  SIGNUP_SUBMIT_BTN.addEventListener("click", signUpform.onSubmit);
};
