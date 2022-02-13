import { DataGrid } from '@mui/x-data-grid';
import React, {useState } from 'react';






const TourData = ({object}) => {
    
    
console.log(object)
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Your Tour', width: 130,sortable: true,},
       
       
    ];
    
    const rows = object

    const handleClick =(e) =>{
        console.log(e.value)
    }
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                onCellClick={handleClick}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default TourData;