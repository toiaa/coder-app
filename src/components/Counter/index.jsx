import React, { useState } from "react";
import { Button } from '@material-ui/core'; //no es necesario entrar a la carpeta directo


const Counter = () => {

    const [counter, setCounter] = useState(0); //declaramos [el nombre, como un setter] = el valor inicial(aca)
    const topCount = 9; // variables para utilizar en las f(x)
    const minCount = 0;

    const addItem = () => {
        setCounter(counter < topCount ? counter + 1 : counter); // fxes para usar en el onclick
    };

    const subItem = () => {
        setCounter(counter > minCount ? counter - 1 : counter);
    };
    return (
        <div>
        <Button
            color="secondary"
            variant="outlined"
            onClick={subItem}>
            -
            </Button>
        <div>
            {counter}
        </div>
        <Button
            color="primary"
            variant="outlined"
            onClick={addItem}>
            +
        </Button>
        </div>
    );
};
export default Counter;