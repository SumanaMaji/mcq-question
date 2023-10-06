import {useState} from 'react';
import Select from 'react-select';

const FlatListDropDown = () => {
  const optionsList = [
    { value: 'blues', label: 'Blues' },
    { value: 'rock', label: 'Rock' },
    { value: 'jazz', label: 'Jazz' },
    { value: 'orchestra', label: 'Orchestra' } 
  ];
  
  const options = [
    {value: '', text: '--Choose an option--'},
    {value: 'apple', text: 'Apple 🍏'},
    {value: 'banana', text: 'Banana 🍌'},
    {value: 'kiwi', text: 'Kiwi 🥝'},
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [fruit, setFruit] = useState();
  const [gender, setGender] = useState("Male");
  
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("Kofi");

  const handleChange = event => {
   // console.log(event.target.value);
    setSelected(event.target.value);
  };
const onChangeValue= (event) => {
  setGender(event.target.value);
 // console.log(event.target.value);
}
  return (
    <>
     <div>
      <select value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
     
      <select id="fruits" defaultValue="Select fruit"
              onChange={(e) => setFruit(e.target.value)}>
        <option value="Apple">Apple</option>
        <option value="Pear">Pear</option>
        <option value="Pineapple">Pineapple</option>
      </select>
      <h1>Selected Fruit: {fruit}</h1>
   
    </div>
       <div onChange={onChangeValue}>
      <input type="radio" value="Male" name="gender" checked={gender === "Male"} /> Male
      <input type="radio" value="Female" name="gender" checked={gender === "Female"}/> Female
      <input type="radio" value="Other" name="gender" checked={gender === "Other"} /> Other
    </div>
    <div>
    <Select className="mt-4 col-md-8 col-offset-4" options = { optionsList }
  />
  </div>
  <div>
						<p> Hello {name} , it is {date.toLocaleTimeString()} </p>
						<p>Date: {date.toLocaleDateString()} </p>
			</div>
    </> 
  );
};

export default FlatListDropDown;
