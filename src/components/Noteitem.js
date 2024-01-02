import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Noteitem = (props) => {
  let navigate = useNavigate();

  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const cardStyle = {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  };

  const cardBodyStyle = {
    padding: "20px",
  };

  const cardTitleStyle = {
    marginBottom: "10px",
  };

  const iconStyle = {
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "1.2rem",
    color: "#555",
    transition: "color 0.3s ease-in-out",
  };

  const handleIconClick = (event, action) => {
    event.stopPropagation();
    action();
  };

  return (
    <div className="col-md-3 my-2">
      <div
        className="card"
        style={cardStyle}
        onClick={() => navigate(`/blogs/:${note._id}`)}
      >
        <div className="card-body my-3" style={cardBodyStyle}>
          <div className="d-flex align-items-center">
            <h5 className="card-title" style={cardTitleStyle}>
              {note.title}
            </h5>
            <i
              className="bi bi-trash-fill mx-3"
              style={iconStyle}
              onClick={(event) =>
                handleIconClick(event, () => deleteNote(note._id))
              }
            ></i>
            <i
              className="bi bi-pencil-square"
              style={iconStyle}
              onClick={(event) => handleIconClick(event, () => updateNote(note))}
            ></i>
          </div>

          <p className="card-text">
            <Link to={`/blogs/:${note._id}`}>{note.description.slice(0, 100)}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
