
import './Break.css'

const Break = ({ iteam, brakes, setBrake }) => {

    const { breake } = iteam
    const addBreakTime = () => {
        const brakeTime = breake;
        setBrake(brakeTime)

    }
    return (
        <div >
            <button onClick={addBreakTime}>{breake}</button>

        </div>
    );
};

export default Break;