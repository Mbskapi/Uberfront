import { useState } from "react";


const Content = ()=>{
    const [name, setName] = useState('Dave')
    const [count, setCount] =useState(0);

    const handleNameChange = () =>{
        const names =['bob', 'kelvin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        return (names[int]);
    }

    const handleClick = () => {
        setCount(count +1)
        console.log(count)
    }
  
    const handleClick2 = (name) => {
        console.log('${name} was clicked')
     }

    const handleClick3 = (e) => {
        console.log(e.taget.innertext)
    }
       
return(
    <main>
        <p onDoubleClick={handleClick}>
            hello {name}!
        </p>
        <button onclick={handleNameChange}> Change name</button>
        <button onclick={handleClick}> click it</button>
        <button onclick={(e) => handleClick3(e)}> click it</button>
    </main>
)
}

export default Content;