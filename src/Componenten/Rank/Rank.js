import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='#99999A f2'>
                {name}{', je hebt al zoveel gezichten gezocht....'}
            </div>
            <div className='#99999A f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;