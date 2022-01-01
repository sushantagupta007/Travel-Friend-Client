import React from 'react';
import Pagination from '@mui/material/Pagination';

import Explore from './Explore';
import { useLocation, Link, MemoryRouter, Route, Switch } from 'react-router-dom';
import { Stack } from '@mui/material';


const ExplorePagination = ({totalPost,postPerPage,count}) => {
  const [page, setPage] = React.useState(1);

  const handleChange =(event,value)=>{
    setPage(value);
  }

  return (
    <Stack spacing={2}>
      
      <Pagination onChange={handleChange} count={count} />
      
    </Stack>
  );
}
    

export default ExplorePagination