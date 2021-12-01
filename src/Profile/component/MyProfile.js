import React from 'react'

function MyProfile(props) {
    return (
        <div>
            {props.children}
            <h1>{props.FullName}</h1>
            <h1>{props.Age}</h1>
            <h1>{props.profisson}</h1> 
            <h1>{props.bio}</h1>
           
            
        </div>
    )
}

export default MyProfile

