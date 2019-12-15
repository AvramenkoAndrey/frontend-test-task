import React, { useState } from 'react';
import styled from 'styled-components';

export default function App() {
    const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
        color: royalblue;
        border: 2px solid royalblue;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: royalblue;
    color: white;
  }
`;

    const [item, setitem] = useState({});

    function fetchData() {
        fetch("http://www.boredapi.com/api/activity/")
        .then(response => response.json())
         .then(response => setitem(response))
    };


        if (!item.activity) {
            return (
                    <div className="App" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>

                    <h1>Are you bored?</h1>


                    <Button onClick={fetchData}>
                    Just Click the Button!                    
                    </Button>

                    </div>
            );
        }
        else {
            return (
                    <div className="App" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>

                    <p><b>You should</b> {item.activity}.</p>
                    <p><b>You wil need</b> {item.participants < 2 ? 'no one' : `${item.participants} participants`} for that.</p> 
                    <p><b>It will cost you</b> {item.price*100}$.</p>

                    <Button onClick={fetchData}>
                    ...or Click It Again!
                    </Button>

                    </div>
            );
        }
}