
import React,{Fragment} from 'react';

import './CatergoryCard.css'
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/system';

import { makeStyles } from '@material-ui/core/styles';


    //Create Theme named mytheme. Theme is container of object of css property
    const mytheme = createTheme({
        customCard:{
            height: '250px',
            borderRadius: '5px',
            padding: '1.5rem',
            background: 'white',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            transition: '0.4s ease-out',
            boxShadow: '0px 7px 10px rgba(0, 0, 0, 0.5)'
        },
        before:{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'block',
            width: '100%',
            height: '100%',
            borderRadius: '15px',
            background:'rgba(156, 24, 24, 0.6)',
            zIndex: 2,
            transition: '0.5s',
            opacity: 0
        },
        root:{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            borderRadius: '15px',
            objectFit:'cover'
        },
        info:{
            position: 'relative',
            zIndex: 3,
            color: 'darkred',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: '0.5s',
        },
        title:{
            letterSpacing: '1px',
            fontSize: '20px',
            marginTop: '8px',
        }
    });

    //Creation of Div Component which has the some properties. Here theme is mytheme. 
    
        const CustomCard = styled('div')(({ theme }) => ({
            height: mytheme.customCard.height,
            borderRadius:mytheme.customCard.borderRadius, 
            padding: mytheme.customCard.padding,
            background: mytheme.customCard.background,
            position: mytheme.customCard.position,
            display: mytheme.customCard.display,
            alignItems: mytheme.customCard.alignItems,
            transition: mytheme.customCard.transition, 
            boxShadow:  mytheme.customCard.box,
        '&:hover': {
            transform: 'translateY(10px)',
            '&:info':{
                opacity: 1,
                transform: 'translateY(0px)'
            }
        },
        '&:before':{
            content: mytheme.before.content,
            position: mytheme.before.position,
            top: mytheme.before.top,
            left: mytheme.before.left,
            display: mytheme.before.display,
            width: mytheme.before.width,
            height: mytheme.before.height,
            borderRadius: mytheme.before.borderRadius,
            background:mytheme.before.background,
            zIndex: mytheme.before.zIndex,
            transition: mytheme.before.transition,
            opacity: mytheme.before.opacity,
        },
        
        
        
    }));

    //UseStyles is to make classes. 
    const useStyles = makeStyles((theme) => ({
        customImg: {
            width: mytheme.before.width,
            height: mytheme.before.height,
            objectFit: mytheme.root.objectFit,
            position: mytheme.root.position,
            top: mytheme.root.top,
            left: mytheme.root.left,
            borderRadius: mytheme.root.borderRadius,
        }, 
        info:{
            position: mytheme.info.position,
            zIndex: mytheme.info.zIndex,
            color: mytheme.info.color,
            opacity: mytheme.info.opacity,
            transform: mytheme.info.transform,
            transition: mytheme.info.transition
        },
        
        title:{
            letterSpacing: mytheme.title.letterSpacing,
            fontSize: mytheme.title.fontSize,
            marginTop: mytheme.title.marginTop
        }
      }))

    const CustomCardFunction = ({img,des}) => {
        
    const classes=useStyles(); 
    return (
      <Fragment>
            <CustomCard>
               <img src={img} className={classes.customImg} alt=""/>
                <div className={classes.info}>
                    <p className={classes.title}> {des}</p>
                </div>
            </CustomCard>
      </Fragment>  
       
      
    )
}
        
//ThemeProvide is like context of React. ThemeProvider pass value to its childs. 


const CategoryCard =({img,des})=>{
    return (
        
        <ThemeProvider theme={mytheme}>
            <CustomCardFunction img={img} des={des}></CustomCardFunction>
        </ThemeProvider>
    )
}

export default CategoryCard