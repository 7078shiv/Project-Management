/* eslint-disable react/prop-types */
import {createPortal} from 'react-dom';
import {forwardRef,useRef,useImperativeHandle} from "react";
const EmptySaveModal= forwardRef( function EmptySaveModal({children,buttonName},ref){
    const dialog=useRef();
    useImperativeHandle(ref,
        ()=>{
            return{
            open(){
                dialog.current.showModal();
            }
        }
        }
      )
    return createPortal(
        <dialog ref={dialog} className='backdrop:bg-stone-900/90 shadow-md'>
        {children}
        <form method='dialog'>
            <button className='px-8 mb-4 text-blue-500 border-solid border-2 border-indigo-600 '>{buttonName}</button>
        </form>
        </dialog>,document.getElementById("modal")
    )
}
)
export default EmptySaveModal;



