import React, {useState} from "react";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export function Tictacktoe() {

    const [board,setboard]=useState([null,null,null,null,null,null,null,null,null]);

    //To check winner
 function decidewinner(board)
    {
        
        const lines=[[0,1,2],
                     [3,4,5],
                     [6,7,8],
                     [0,3,6],
                     [1,4,7],
                     [2,5,8],
                     [0,4,8],
                     [2,4,6]];

              for(let x=0;x<lines.length;x++)
              {
                  const [a,b,c]=lines[x];
                  if(board[a]!==null && board[a]==board[b] && board[b]==board[c])
                  {
                    
                      return (board[a]);
                  }
                 
              }     
           let z=0;
              while(z<9){
                   if(z==8 && board[z]!=null )return( "nill");
                if(board[z]!=null)z++;
                    else break
              }
    }
   const winner=decidewinner(board);
  
//   

    const[isxtrue,setisxtrue]=useState(true);
   

    //onclick function
    function handleclick(index){
      
        const copyboard=[...board];
   

        //to set "x" or "o" is index is null (to avid overlapping)
        if(!winner && !board[index])
        {
            copyboard[index]=isxtrue ? "x" : "o" ;
    
            setisxtrue(!isxtrue);
           
            setboard(copyboard);
           
     
        }
      
        
    }
    function restartgame()
    {
        setboard([null,null,null,null,null,null,null,null,null])
    }
   
  
    // const { width, height } = useWindowSize()
  return (
      <div className="wrappers">
      <div className="container">
        <h1>Tic-Tac-Toe</h1>
       <div className="infoline">
       </div>
     <div className="board">
          {board.map((value,index)=><Square value={value} index={index} onPlayerClick={()=>handleclick(index)} /> )}
          {winner && <Winnerboard winner={winner} restartgame={restartgame}/> }
    
      </div>
      </div>
      </div>
  );
}

function Square({value,onPlayerClick})
{
  
 
    return(
        <div className="box" onClick={onPlayerClick} >
     {value}
        
        </div>
    );
}     

function Winnerboard({winner,restartgame}){
    return(
        <div className="model">
        <div className="modelarea">
          <div className="modelheader">
         
          </div>
          <div className="modelcontent">
           
            {winner=="nill" ? <p>Match over..!!<br/>Match tie</p> :  <p>Match over..!!<br/>The winner is {winner}</p> }
       
          <button onClick={()=> restartgame()}>Restart Game</button>
          </div>
        </div>
      </div>
       
    );
}