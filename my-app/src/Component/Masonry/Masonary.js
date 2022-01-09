import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

import m1 from '../../Image/8.jpg'; 
import m2 from '../../Image/9.jpg'; 
import m3 from '../../Image/10.jpg'; 

const heights = [315, 666, 271, 223];


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    border: '1px solid black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

export default function ImageMasonry() {
  return (
    <Box sx={{ minHeight: '100%',width:'100%',mt:{xs:0,lg:2}, mb:{xs:0,lg:2}}}>
      <Masonry columns={2} spacing={2}>
        {itemData.map((item, index) => (
          <Stack key={index}>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4,height:item.height}}
            />
          </Stack>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
    {
      img: 'https://www.attaubah-institute.com/wp-content/uploads/2018/02/jeremie-cremer-4419-unsplash-1920x1000.jpg',
      title: 'Fern',
      height:'180px',
      width:'450px'
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Eiffel_Tower%2C_Paris_1_November_2014.jpg',
      title: 'Snacks',
      height:'460px',
      width:'251px'
    },
    {
      img: 'https://cdn.memiah.co.uk/uploads/counselling-directory.org.uk/image_gallery/farsai-chaikulngamdee-oZSDI44GwKU-unsplash-1584694069.jpg',
      title: 'Mushrooms',
      height:'180px',
      width:'213px'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVXHXm6g6qQlKbp7TnAGacHp89tQKVQ11Yw&usqp=CAU',
      title: 'Tower',
      height:'280px',
      width:'213px'
    },
    {
      img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
      title: 'Tower',
      height:'200px',
      width:'213px'
    }
  ]