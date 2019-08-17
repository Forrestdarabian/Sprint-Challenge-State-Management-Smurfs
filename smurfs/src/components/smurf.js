import React from 'react';

const smurf = (props) => {

return (
    <div>
        <h2>{props.smurf.name}</h2>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>

    </div>
)

}

export default smurf;