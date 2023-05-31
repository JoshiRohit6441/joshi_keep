import React, { useState } from "react";
import Header, { Header1 } from "./keep_app/header";
import CreateNote from "./keep_app/createNote";
import Note from "./keep_app/Note";

let App = () => {

    let [data, setData] = useState([])
    let addEvent = (note) => {
        setData((oldData) => {
            return [...oldData, note]
        })
    };

    let deleteButton1 = (id) => {
        setData((joshi) => {
            return joshi.filter((arr, index) => {
                return index !== id
            });
        })
    }
    return (
        <>
            <Header />
            <CreateNote rohit={addEvent} />
            <Header1 />
            <div className="mainDiv">
                {data.map((val, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        delete={deleteButton1}
                    />
                })}
            </div>
        </>
    )
}
export default App;
