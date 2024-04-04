import React from 'react';
//import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import './IconCard.css';

function IconCard(props) {
    return <div class="icon-card  icon-card-react">
        <div className='icon-container'>
            {/* <OfflineBoltOutlinedIcon className="icon-card__icon" /> */}
        </div>
        <h5>Feature name</h5>
        <p>I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.</p>
    </div>;
}

export default IconCard;
