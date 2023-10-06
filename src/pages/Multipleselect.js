import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
  
var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const Multipleselect = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default Multipleselect;