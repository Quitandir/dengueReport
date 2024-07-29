import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logo.png'
import { Typography } from "@mui/material";
import StyledFooter from "./styles";

export default function Footer() {
    return(
        <StyledFooter>
            <Typography color='white' fontSize='12px' textAlign='right'>
                Projeto desenvolvido para o curso de Meio Ambiente e Sustentabilidade
            </Typography>
            <Link href='/'>
                <Image alt="logo do projeto" src={logo} style={{width: '50px', height: 'auto'}} priority/>
            </Link>
            
        </StyledFooter>
    )
}