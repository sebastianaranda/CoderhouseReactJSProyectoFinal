import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = () => {
    return (
        <div className="itemCount">
            <FontAwesomeIcon icon={faMinus} />
            <p>0</p>
            <FontAwesomeIcon icon={faPlus} />
        </div>
    )
}
export default ItemCount;