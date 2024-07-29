import { FormLabel, Radio } from '@mui/material';
import styled from 'styled-components';

export const StyledLabel = styled(FormLabel)`
    :focus {
        color: rgba(0, 0, 0, 0.6);
    }
`

export const StyledRadio = styled(Radio)`
    checked: {
      color: '#4B8DF8'
    }
`