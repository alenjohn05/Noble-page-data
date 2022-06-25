import * as React from 'react';
import { styled } from '@mui/material/styles';
import Skeleton from '@mui/material/Skeleton';

export const NPSkeleton = styled(({ className, ...props }) => (
    <Skeleton {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({

}));