import React from "react";
import noteContext from '../context/notes/noteContext'
import { useContext } from 'react'

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note , updateNote } = props;
  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body my-3">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="bi bi-trash-fill mx-3" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="bi bi-pencil-square" onClick={()=>{updateNote(note)}}></i>
          </div>

          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
