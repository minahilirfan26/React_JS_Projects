import React from 'react'

function List({people}) {
  return (
    <div>
      {people.map((person)=>{
        const {id,name,age,image} = person;
        return(
            <>
             <div key={id} className='person'>
                <img src={image} alt={image} />
                <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                </div>

             </div>
            </>
        )
      })}
    </div>
  )
}

export default List