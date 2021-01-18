import React from 'react';

type ContentProps = {
    counter: number;
};

export const Content = (props: ContentProps) => {
    return (
        <div>
            <h1>Counter: {props.counter} </h1>
        </div>
    );
};
