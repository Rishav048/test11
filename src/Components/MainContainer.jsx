import react, { useState } from "react"
import { ImClubs } from "react-icons/im";

const MianContainer = ()=>{

   
    const [drawnCards, setDrawncards] = useState([]);
    const [btndisable,setButtonDisable] = useState(false);
    const [cardValues,setcardValues] = useState(['club','diamond','hearts','spaces'])
      
    const clubsArr = new Array(13).fill('club');
    const DiamondsArr = new Array(13).fill('diamond');
    const HeartsArr = new Array(13).fill('hearts');
    const SpacesArr = new Array(13).fill('spaces');

    let resultArr = clubsArr.concat(DiamondsArr,HeartsArr,SpacesArr)


    const randomswitch = (arr)=>{
        for(let i=arr.length-1; i>0; i--){
           let j = Math.floor(Math.random()*(i+1));
     
           let val = arr[i];
           arr[i] = arr[j];
           arr[j] = val;
     
        }
     
        return arr;
       }

       let finalShuffedArray = randomswitch(resultArr);
       console.log('finalShuffedArray',finalShuffedArray)

    

    const cardsCounts = {
        club:13,
        diamond:13,
        hearts:13,
        spaces:13
    }

    const getrandomnumber = (min,max)=>{
        return Math.random()* (max-min) + min
    }
    


    






    


    const addCards = ()=>{
             if(drawnCards?.length <= 47){
                let array = [];
                for(let i=0; i<5; i++){
                    let val = Math.floor(getrandomnumber(0,4));
                    array?.push(cardValues[val]);
                    console.log("lop",cardValues[val])
                    console.log("lop",val)
                   cardsCounts.cardValues[val] = cardsCounts.cardValues[val] - 1
                }

                let result = drawnCards.concat(array)
                setDrawncards(result);
             }
           else{
             let leftCards = 52 - drawnCards?.length;
             console.log("LEFTCARDS",leftCards);
             let array = []
             for(let i=0; i<leftCards; i++){ 
                array?.push('filled')
                
             }

             let result = drawnCards.concat(array)
             setDrawncards(result);
            
            setButtonDisable(true)
           }
           
    }

    

  
    return (
       <div className="container">
        <button disabled={btndisable} className="draw-btn" onClick={()=>addCards()} >Draw Cards</button>
        <div className="card-wrapper">

            {drawnCards?.map(()=>
                <div className="card">
                <div>10</div>
                <div className="icon-holder" >
                <ImClubs />
                </div>
                
                
                
            </div>
)}

        </div>
       </div>
    )
}


export default MianContainer;