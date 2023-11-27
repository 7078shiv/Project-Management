/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
// export default function Button({name,...props}){
//     return(
//         <p>
//             <button className="py-4 px-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-600" {...props}>{name}</button>
//         </p>
//     )
// }

//import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage({name,...props}) {
  return <Button variant="outlined" {...props}>{name}</Button>;
}