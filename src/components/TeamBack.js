import React from 'react';
import '../mysass.scss';

const TeamBack = ({setSelected, setType}) => {
    return (
        <button className="team-back" onClick={() => {setSelected(false);setType('normal')}}>
            {" < Back to Type"}
        </button>
    )
};

export default TeamBack;
