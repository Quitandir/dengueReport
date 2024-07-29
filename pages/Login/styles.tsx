import Image from 'next/image';
import styled from 'styled-components';

export const StyledDiv = styled.div`
    border: 3px solid black;
    border-radius: 20px;
    width: 200px;
    height: 100px;
    padding: 1em;
    background-color: white;
    margin: 2em 0;
    -webkit-box-shadow: -1px 10px 19px 3px rgba(0,0,0,0.5);
    -moz-box-shadow: -1px 10px 19px 3px rgba(0,0,0,0.5);
    box-shadow: -1px 10px 19px 3px rgba(0,0,0,0.5);
`

export const StyledImg = styled(Image)`
    object-fit: contain;
    max-height: -webkit-fill-available;
`