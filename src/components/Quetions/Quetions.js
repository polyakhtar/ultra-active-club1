import React from 'react';

const Qustion = () => {
    return (
        <div>
            <div>
                <h2>How Does React work?</h2>
                <p><b>Ans:</b> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h2>Difference between props and state :</h2>
                <p><b>Ans:</b>State
                    The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
                <p>Props
                    Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
            </div>
            <div>
                <h2>When useEffect work without dataLoad?</h2>
                <p><b>Ans:</b> It runs when the component is mounted and when it is re-rendered while a dependency of the useEffect has changed. This is powerful, but it is easy to omit dependencies and create bugs in your app </p>
            </div>
        </div>
    );
};

export default Qustion;