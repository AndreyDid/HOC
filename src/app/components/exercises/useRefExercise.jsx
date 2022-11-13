import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const prevState = useRef("");
    const styleRef = useRef();
    const [otherState, setOtherState] = useState("Блок");
    const toggleOtherState = () => {
        setOtherState(prevState => prevState === "Блок" ? "Text" : "Блок");
        styleRef.current.style.width = "80px";
        styleRef.current.style.height = "150px";
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={styleRef}
            >
                <small>{otherState}</small>
            </div>
                <button className='btn btn-primary mt-2'
                        onClick={
                    toggleOtherState
                } >Click Me</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
