import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.png'
import { StyledHeader } from "./styles";
import { Box } from "@mui/material";

export default function Header() {
    return(
        <StyledHeader>
            <Link href='/'>
                <Image alt="logo do projeto" src={logo} style={{width: '50px', height: 'auto'}} priority/>
            </Link>
            <Box sx={{display: 'flex', gap: '1em'}}>
                <Link href="/Sobre" style={{fontSize: '16px'}}>Sobre o projeto</Link>
                <Link href="/Login" style={{fontSize: '16px'}}>Faça seu login</Link>
            </Box>
        </StyledHeader>
    )
}