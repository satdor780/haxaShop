import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './backBtn.css'

const GoBackButton = ({style}) => {

  const navigate = useNavigate();

  return (
    <div className="container" style={style}>
      <button onClick={() => navigate(-1)} className="GoBackButton">
          <FontAwesomeIcon icon={faArrowLeft} />
          Назад
      </button>
    </div>
  );
};

export default GoBackButton;
