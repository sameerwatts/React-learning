import Card from './Card';
import useCounter from '../hooks/useCounter';

const ForwardCounter = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  function increment(prevValue) {
    return prevValue + 1
  }
  const counter = useCounter(increment);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
