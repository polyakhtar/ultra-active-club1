
import './Break.css'

const Break = ({ iteam, setBrake }) => {

    const { breake } = iteam;
    const addBreakTime = () => {
        const breakTime = breake;
        setBrake(breakTime);

    }
    return (
        <div >
            <button onClick={addBreakTime}>{breake}</button>

        </div>
    );
};

export default Break;