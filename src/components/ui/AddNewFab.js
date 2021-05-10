import React from "react";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

const AddNewFab = () => {
  const dispatch = useDispatch();
  const HandleClickNew = () => {
    dispatch(uiOpenModal());
  };
  return (
    <div>
      <button className="btn btn-primary fab" onClick={HandleClickNew}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default AddNewFab;
