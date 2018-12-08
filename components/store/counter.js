import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../../store/actions'


const Counter = ({count, dispatch}) => {

    const increment = () => {
        dispatch(incrementCount())
      }
    
    const decrement = () => {
        dispatch(decrementCount())
      }
    
    const reset = () => {
        dispatch(resetCount())
    }

    return (<div>
        <h1>Count: <span>{count}</span></h1>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>)
}


function mapStateToProps (state) {
  const {count} = state
  return {count}
}

export default connect(mapStateToProps)(Counter)