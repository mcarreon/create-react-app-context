import React, { useState } from 'react';

//create the context
const ExampleContext = React.createContext([{}, () => {}]);

//create a provider wrapper
const ExampleProvider = (props) => {
  const [state, setState] = useState({
    text: "Change me below!"
  });

  return (
    <ExampleContext.Provider value={[state, setState]}>
      {props.children}
    </ExampleContext.Provider>
  );
};

export { ExampleContext, ExampleProvider };