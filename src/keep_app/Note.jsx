import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

let Note = (props) => {
    let deleteButton = () => {
        props.delete(props.id)
    }
    return (
        <>


            <div className="main_body1">
                <h1 className="title">{props.title}</h1>
                <p className="content">{props.content}</p>
                <div className="btn">
                    <button onClick={deleteButton}>
                        <DeleteOutlineIcon className="icon" />
                    </button>
                </div>
            </div>

        </>
    )
}
export default Note;