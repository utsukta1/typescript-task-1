import Questions from "../../components/questions/questions";
import "./toggle.css"
import { useState } from "react";
import Component1 from "./component1";
import Component2 from "./component2";

function Toggle() {
    const [toggleState, setToggleState] = useState<boolean>(false);

    const toggleComponent = () => {
        setToggleState((prevState) => !prevState);
    };

    return (
        <>

            <div className="question">
                <Questions title="Create a utility function that toggles a boolean state variable when
                    called. Use this utility in a React component to toggle the
                    visibility of a certain element."/>

            </div>

            <main>
                <div className="area">
                    <label className="switch">
                        <input type="checkbox" onClick={toggleComponent} />
                        <span className="slider"></span>
                    </label>
                    {toggleState ? <Component2 /> : <Component1 />}
                </div>

            </main>
        </>
    )
}
export default Toggle;