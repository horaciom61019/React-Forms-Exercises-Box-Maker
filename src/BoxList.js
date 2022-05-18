import React, { userState } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = userState([]);
    const add = boxObj => {
        setBoxes(boxes => [...boxes, boxObj]);
    };
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };
    const BoxComponents = boxes.map(box => (
        <Box
          key={box.id}
          id={box.id}
          width={box.width}
          height={box.height}
          handleRemove={remove}
          backgroundColor={box.backgroundColor}
        />
    ));

    return (
        <div>
          <NewBoxForm createBox={add} />
          {BoxComponents}
        </div>
    );
};

export default BoxList;