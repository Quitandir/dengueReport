import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Link from "next/link";
import gov from '../../public/gov.svg';
import Footer from "../../components/Footer";
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

export default function Login() {
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', width: '100vw', flexDirection: 'column', alignItems: 'center', height: '100vh', pt: '2em' }}>
                <Typography variant="h4" textAlign='center' marginTop='48px' fontWeight='700' fontFamily={"unset"}>
                    Faça seu login pelo
                </Typography>
                <Link href='/Form'>
                    <StyledDiv>
                        <StyledImg src={gov} alt="Logo do gov.br" />
                    </StyledDiv>
                </Link>
                <Typography variant="h4" textAlign='center' marginTop='12px' fontWeight='700' fontFamily={"unset"}>
                    para fazer seu relato.
                </Typography>

            </Box>
            <Footer />
        </>
    )
}