import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Link from "next/link";
import gov from '../../public/gov.svg';
import Footer from "../../components/Footer";
import Image from 'next/image';
import styled from 'styled-components';

import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })

export const StyledDiv = styled.div`

	display:inline-block;
	cursor:pointer;
	padding:6px 24px;
	text-decoration:none;
	text-shadow:0px 1px 0px #ffffff;

    :hover{
        background:linear-gradient(to bottom, #e9e9e9 5%, #f9f9f9 100%);
	    background-color:#e9e9e9;
    }
`

export const StyledImg = styled(Image)`
    object-fit: contain;
    max-height: -webkit-fill-available;
    max-width: 200px;
    max-height: 100px;
    margin-top: 1em;
`

export default function Login() {
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', width: '100vw', flexDirection: 'column', alignItems: 'center', height: '100vh', pt: '2em' }}>
                <Typography variant="h4" textAlign='center' marginTop='48px' fontWeight='700' width='90%' className={rubik.className}>
                    Faça seu login pelo
                </Typography>
                <Link href='/Form'>
                    <StyledDiv>
                        <StyledImg src={gov} alt="Logo do gov.br" />
                    </StyledDiv>
                </Link>
                <Typography variant="h4" textAlign='center' marginTop='12px' fontWeight='700' width='90%' className={rubik.className}>
                    para fazer seu relato.
                </Typography>

            </Box>
            <Footer />
        </>
    )
}