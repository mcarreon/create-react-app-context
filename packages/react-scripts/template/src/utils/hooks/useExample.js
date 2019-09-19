import { useContext } from 'react';
import { ExampleContext } from '../contexts/exampleContext';

//custom hook with function handle text changing
const useExample = () => {
  const [state, setState] = useContext(ExampleContext);


  function handleTextChange (e) {
    const { value } = e.target;
    
    setState(state => ({
      ...state,
      text: value
    }))
  };

  return {
    text: state.text,
    handleTextChange
  };
};

export default useExample;