"use client"
import { useState } from 'react';
import { Button } from './ui/Button';

const Contador = () => {
    const [count, setCount] = useState(0);


    return (
        <>
         {/* <Button  size="sm" onclick={() => setCount(count + 1)}>
                Click me: {count}
            </Button> */}

            <Button onclick={() => setCount(count + 1)}>
                Click me: {count}
            </Button>

             {/* <Button size="lg" onclick={() => setCount(count + 1)}>
                Click me: {count}
            </Button> */}

        </>
    );
}

export default Contador;