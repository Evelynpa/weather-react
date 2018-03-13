import React from 'react';
import PropTypes from 'prop-types';

// const Location = () => (
//     <div>
//        <h1> Santiago</h1>
//     </div>
// )

// const Location = (props) => {
//     const city = props.city;
//     return (
//         <div>
//             <h1>{city}</h1>
//         </div>
//     )
// }

// Se reescribio
const Location = ({ city }) => (
    <div className="locationCont">
        <h1>{city}</h1>
    </div>
)

Location.protoTypes = {
    city: PropTypes.string.isRequired,
}


export default Location;