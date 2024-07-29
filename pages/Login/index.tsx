import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Link from "next/link";
import gov from '../../public/gov.svg';
import { StyledDiv, StyledImg } from "./styles";
import Footer from "../../components/Footer";

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