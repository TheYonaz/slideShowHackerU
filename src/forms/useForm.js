import Validation from "./Validation.js";

const useForm = (initialForm, schema, handleSubmit) => {
  let data = { ...initialForm };
  let errors = {};

  /********** validate term **********/
  const validateProperty = ({ name, value }) => {
    console.log(name);
      console.log(schema);
      console.log(schema[name]);
    if (Array.isArray(schema[name]) === true) {
      
      const { errors } = Validation.validate(value)[schema[name]](
        schema[name][1]
      );
      return errors.length ? errors[0] : null;
    }

    const { errors } = Validation.validate(value)[schema[name]]();
    return errors.length ? errors[0] : null;
  };

  /********** input validation **********/
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    const error = validateProperty(target);
    if (error) errors[name] = error;
    else delete errors[name];
    data[name] = value;
    return { data, error };
  };

  /********** submit method **********/
  const onSubmit = () => {
    handleSubmit(data);
  };

  /********** reset form **********/
  const handleReset = () => {
    data = { ...initialForm };
    errors = {};
  };

  /********** handle button disabled **********/
  const handleDisableSubmitBtn = () => {
    const errorArray = Object.keys(errors);
    const array = Object.keys(data);
    const dataArray = array.filter(key => !data[key]);
    if (dataArray.length || errorArray.length) return true;
    return false;
  };

  return {
    handleInputChange,
    onSubmit,
    handleDisableSubmitBtn,
    handleReset,
    errors,
  };
};

export default useForm;
