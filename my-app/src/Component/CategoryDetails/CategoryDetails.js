import React, { useState, useRef,useEffect } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';



import { DataGrid } from '@mui/x-data-grid';
import MyCalender from './../Calender/Calender';




const columns = [
    { field: 'id', headerName: 'ID', width: 120, sortable: false },
    { field: 'Time', headerName: 'Time', width: 170, sortable: false },
    { field: 'Event', headerName: 'Event', width: 180, sortable: false },
    { field: 'Country', headerName: 'Country', width: 190, sortable: true },
]


function incrementeDate(any) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + any);
    return tomorrow.toLocaleDateString()
}

console.log(incrementeDate(1))

const rows = [
    { id: 1, Time: `${incrementeDate(0)}`, Event: 'XYZ', Country: "India", },
    { id: 2, Time: `${incrementeDate(10)}`, Event: 'XYZ', Country: "Bangladesh" },
    { id: 3, Time: `${incrementeDate(20)}`, Event: 'XYZ', Country: "Srilanka" },
    { id: 4, Time: `${incrementeDate(30)}`, Event: 'XYZ', Country: "Indonesia" },
    { id: 5, Time: `${incrementeDate(40)}`, Event: 'XYZ', Country: "Malaysia" },
    { id: 6, Time: `${incrementeDate(50)}`, Event: 'XYZ', Country: "Bhutan" },
    { id: 7, Time: `${incrementeDate(60)}`, Event: 'XYZ', Country: "Nepal" }
]





const CategoryDetails = () => {
    const history = useHistory()
    console.log(history)
    const categoryData = history.location.state
    const user = categoryData.user
    const email = categoryData.email
    const country = categoryData.country
    const des = categoryData.des

    const [tourDetails, setTourDetails] = useState(new Date())
    const [date, setDate] = React.useState(tourDetails);
    const [dataArray, setdataArray] = useState([])

    const [localData,setLocalData] = useState([])
    
    // useEffect(()=>{
    //     const existingData = localStorage.getItem("data")
    //     setdataArray(JSON.parse(existingData))

    // },[])
    //Function for receiving Data from Table by Click
    const handleOnCellClick = (e) => {
        if (dataArray.indexOf(e.row) === -1) {
            dataArray.push(e.row)
            // localStorage.setItem("data",JSON.stringify(dataArray))
        }
        else {
            return
        }

        //Next I have used time to filter data from Table. So I have taken time here. 
        const dateString = e.row.Time
        const dateFormat = Date.parse(dateString)
        setTourDetails(dateFormat) 
    }

    //This function for showing Date in the Calender component. 
    const handleChange = (tourDetails) => {
        setDate(tourDetails)
    }

    const [touristState,settouristState] = useState([])
    

    useEffect(()=>{
        settouristState([

        ])
    },[])

    const countryRef = useRef()
    const dateRef = useRef()

    console.log(countryRef)

  
    

    const handleRemove = () => {
        console.log(countryRef.current)
        const country = countryRef.current?.innerText
        console.log(country)
        if (dataArray.length > 1) {
            const updatedArray = dataArray.filter((item) => item.Country !== country)
            setdataArray(updatedArray)
        }
        else {
            setdataArray([])
        }
    }
    const useStyles = makeStyles({
        demowrap: {
            position: 'relative',
            height: "350px",
            borderRadius: "25px",
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                opacity: 0.2,
                backgroundImage: `url(${categoryData.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: "5px",
            }
        },
        demoContent: {
            position: 'relative',
            height: '100%'
        }
    })

    const classes = useStyles();

    const handleSendData=()=>{
        history.push({ 
            pathname: '/mytravel',
            state: {
              data:{id:1, name:"Sushanta"}
            }
           });
    }
    


    return (
        <Container>
            <Box className={classes.demowrap} sx={{ p: 1 }}>
                <Box className={classes.demoContent}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Typography sx={{ fontFamily: "Poppins", color: 'warning.main', fontWeight: 'bold' }} variant="h4"> {des} </Typography>
                        <Box sx={{ bgcolor: "white", p: 2, my: 1, borderRadius: 1, fontFamily: "Poppins", boxShadow: 2 }}>
                            <Typography> {user} </Typography>
                            <Typography> {email} </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography variant="h2"
                            sx={{
                                fontFamily: "Poppins",
                                color: 'primary.main',
                                fontWeight: 'bold',
                                top: "100px",
                                textAlign: 'center'
                            }} > {country}...
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <hr></hr>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "Poppins",
                                fontWeight: 'bold',
                            }}> Tour Schedule
                        </Typography>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                checkboxSelection
                                onRowClick={handleOnCellClick}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <MyCalender handleChange={handleChange} timeD={tourDetails}></MyCalender>
                        <table>
                            <tbody>
                                <tr>
                                    <th style={{ border: "1px solid black", padding: "5px", borderRadius: "5px", backgroundColor: "gray", color: "white" }}> Date </th>
                                    <th style={{ border: "1px solid black", padding: "5px", borderRadius: "5px", backgroundColor: "gray", color: "white" }}> Country</th>
                                    {/* <th style={{border:"1px solid black",padding:"5px",borderRadius:"5px",backgroundColor:"gray",color:"white"}}> Action</th>
                                <th style={{border:"1px solid black",padding:"5px",borderRadius:"5px",backgroundColor:"gray",color:"white"}}> Action</th> */}
                                </tr>
                                {
                                    dataArray.map((item) =>
                                        <tr key={item.id}>
                                            <td ref={dateRef} style={{ border: "1px solid black", padding: "5px", borderRadius: "5px" }}> {item.Time} </td>
                                            <td ref={countryRef} style={{ border: "1px solid black", padding: "5px", borderRadius: "5px" }}> {item.Country} </td>
                                            <td style={{ padding: "5px", borderRadius: "5px" }}>
                                                <Button type="button"
                                                    onClick={handleSendData}
                                                    variant="outlined"> MyTour
                                                </Button>
                                            </td>
                                            <td style={{ padding: "5px", borderRadius: "5px" }}>
                                                <Button onClick={handleRemove} variant="outlined">Remove</Button>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default CategoryDetails;


