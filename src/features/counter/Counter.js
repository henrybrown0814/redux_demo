import React, {useState, setState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
    decrement, 
    increment,
    incrementByAmount,
    decrementByAmount,
    selectCount
} from './counterSlice'
import styles from './Counter.module.css'



export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch();
  const [incrementByAmount ] = useState('2');
  //this.state ={val : 2};
  const [val, setVal ]= useState('2');

  


  return (
    <div>
      <div>
        <div>
    
        </div>
        
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        
      </div>
    </div>
  )
}


export default 'Counter'; 