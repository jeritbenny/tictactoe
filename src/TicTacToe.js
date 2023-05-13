import React, { useState } from 'react'
import './TicTacToe.css'
function TicTacToe() {

    const [turn,setTurn] = useState('x');
    const[cell,setCells] = useState(Array(9).fill(''));
     const [winner, setWinner] = useState();
 const checkForWinner=(squares)=>{

    let combos ={
        across:[
            [0,1,2],
            [3,4,5],
            [6,7,8]
        ],
        down:[
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ],
        diagnol:[
            [0,4,8],
            [2,4,6],
            
        ]
    };
    for (let combo in combos) {
        combos[combo].forEach((pattern)=>{
            if(
                squares[pattern[0]]==='' ||
                squares[pattern[1]]==='' ||
                squares[pattern[2]]===''
            ){

            }else if(

                squares[pattern[0]]=== squares[pattern[1]]&&
                squares[pattern[1]]=== squares[pattern[2]]
            ){
               setWinner(squares[pattern[0]])
            }
            
        })
    }
 }

    const handleClick =(num)=>{
if(cell[num] !==''){
    alert('already clicked');
    return;
}

        let squares =[...cell];
        if(turn=== 'x'){
            squares[num]='x';
            setTurn('o');
        }else{
            squares[num]='o'
            setTurn('x');
        }

        setCells(squares)
        checkForWinner(squares);
    
    }
    const handleRestart =()=>{
       setWinner(null) ;
       setCells(Array(9).fill(''));
    }


const Cell =({num})=>{
    return <td onClick={()=>handleClick(num)}>{cell[num]}</td>
}



  return (
    <div className='container'>
        <table>
            <p style={{color:"red"}}>Turn: {turn}</p>
            <tbody>
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                   <Cell num={2}/>
                </tr>

                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>

                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
            </tbody>
        </table>
              {
            <button id='btn' onClick={()=>handleRestart()}>Play Again</button>
              }{
            winner && (
        
               <p>{winner} is the Winner !</p>  
            )
            
            }
    </div>
  )
}

export default TicTacToe