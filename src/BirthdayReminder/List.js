import React from 'react'
import ClearData from './ClearData';

function List({people,handleClick,displayClick}) {
    console.log(people);
  return (
    <>
        {
           people.map((p)=>{
            const {id,name,age,image} =p;
            return(
                <article className='person' key={id}>
                    <img src={image} alt={name}></img>
                    <div>
                        <h4>{name}</h4>
                        <h4>{age} years</h4>
                    </div>
                </article>
            );
           })
        }
        <ClearData handleClick={handleClick}/>
        {/* <button onClick={handleClick}>Clear All</button> */}
        <button onClick={displayClick}>Show Data</button>
    </>
  )
}

export default List
