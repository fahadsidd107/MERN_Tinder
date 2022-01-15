import React,{useState} from 'react'
import './TinderCards.css'
function TinderCards() {
const [people, setPeople] = useState([{
    name:'Cristiano Ronaldo',
    image_url:'https://static.standard.co.uk/2021/11/28/16/newFile-2.jpg?width=1200',
}])
    return (
        <div className='tindercards'>
        <h1>Cards</h1> 
        {people.map((person)=>
        <>
<h1>{person.name}</h1>
<img src={person.image_url} alt=''/>
        </>
        )}  
        </div>
    )
}

export default TinderCards
