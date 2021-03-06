import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';
// import DatePicker from './DatePicker';

const Banner = () => {
  const history = useHistory();
  // const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='banner'>
      {/* <div className='banner__search'>
        {showSearch && <DatePicker />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className='banner__searchButton'
          variant='outlined'
        >
          {showSearch ? 'Hide' : 'Search Dates'}
        </Button>
      </div> */}
      <div className='banner__info'>
        <h1>Grow with your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push('/all/browse')} variant='outlined'>
          Explore, Enjoy, and find your home 
        </Button>
      </div>
    </div>
  );
};

export default Banner;
