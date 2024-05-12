import React from 'react';

const FormComponent = () => {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default FormComponent;