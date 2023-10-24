import './BottomField.css';
const BottomField=({increaseHandel,decreaseHandel,resetHandel})=>{



    return <div>
        <button type="button" onClick={increaseHandel}>+</button>
        <button type="button" onClick={decreaseHandel}>-</button>
        <button type="button" onClick={resetHandel}>Reset</button>
    </div>
}
export default BottomField;