import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
let CreateNote = (props) => {
    let [note, setNote] = useState({
        title: "",
        content: ""
    });

    let addNote = (event) => {
        let { name, value } = event.target;
        setNote((joshi) => {
            return {
                ...joshi,
                [name]: value
            };

        })
    }
    let addData = () => {
        props.rohit(note);
        setNote({
            title: "",
            content: ""
        })
    }


    let [show, hide] = useState(false)
    let showData = () => {
        hide(true)
    }
    return (
        <>
            <div className="main_body">
                {show ? <input className="title" type="text" placeholder="Title" onChange={addNote} name="title" autoComplete="off" value={note.title} /> : null}
                <textarea className="content" name="content" cols="" rows="" onChange={addNote} value={note.content} onClick={showData} placeholder="Write a note....." />
                <div className="btn">
                    {show ? <button onClick={addData}>
                        <AddIcon className="icon" />
                    </button> : null}
                </div>
            </div>
        </>
    )
}
export default CreateNote;
