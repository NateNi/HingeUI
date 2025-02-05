import React from 'react';
import './StickyHeader.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

const StickyHeader = ({ toggleComponent, convoTarget }) => {
  return (
    <div className="sticky-header">
      <div className="top-row">
        <div className="left">
            <FontAwesomeIcon className="back-icon" onClick={toggleComponent} icon={faChevronLeft} />
            <div className="name"><strong>{convoTarget}</strong></div>
        </div>
        <div className="right">
          <div className="options-icon">
          <FontAwesomeIcon icon={faEllipsis} />
          </div>
        </div>
      </div>
      <div className="bottom-row">
        <div className="nav-item">
            <div className="selectedNav"><strong>Chat</strong></div>
        </div>
        <div className="nav-item">
            <div className="unselectedNav"><strong>Profile</strong></div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
