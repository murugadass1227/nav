import {Box, Stack, Skeleton } from '@mui/material';
import { useState } from 'react';
import React from 'react'
import Post from './Post';


const Feed = ( )=> {
    const[loading, setLoading] = useState(true);

    setTimeout(()=>{
        setLoading(false);
    },[3000]);
  return (
    <Box flex={4} p={{ xs:0, md:2}} >
        { loading?

        (
            <Stack spacing={1}>
            <Skeleton variant="text" height={100}/>
            <Skeleton variant="text" height={100}/>
            <Skeleton variant="text" height={100}/>
            <Skeleton variant="rectangular" height={300}/>

            </Stack>
        ):(
            <>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            </>
        )
        

    }
         
        
    </Box>
  );
};

export default Feed