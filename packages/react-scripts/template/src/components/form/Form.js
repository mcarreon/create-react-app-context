import React from 'react';

import useExample from '../../utils/hooks/useExample';

const Form = () => {
  const { text, handleTextChange } = useExample();

  return (
    <div className="app-form">
      <p>{text}</p>
      <input type="text" name="example" value={text} onChange={handleTextChange}/>
    </div>
  );
}

export default Form;