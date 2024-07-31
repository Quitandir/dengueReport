import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function Sobre() {
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', width: '90%', flexDirection: 'column', alignItems: 'center', margin: '1em auto'}}>
                <Typography variant="h4" color='331800' m='1em' className={rubik.className}>
                    Sobre
                </Typography>
                <Typography component='p' textAlign='justify' m='0.5em 0' className={rubik.className} color='331800'>
                    Projeto desenvolvido durante aulas de Meio Ambiente e Sustentabilidade para o curso Tecnólogo em Análise e Desenvolvimento de Sistema, no campus Canoas do IFRS. 
                </Typography>
                <Typography component='p' textAlign='justify' m='0.5em 0' className={rubik.className} color='331800'>
                    Após pesquisa sobre o crescente casos de dengue no país, mas também especialmente no nosso município, pensou-se no desenvolvimento dessa aplicação como possível ferramente tecnológica para auxiliar na solução do problema pesquisado. 
                </Typography>
                <Typography component='p' textAlign='justify' m='0.5em 0' className={rubik.className} color='331800'>
                    A ideia da aplicação é poder fornecer à administração pública relatos de possíveis focos de dengue. Qualquer pessoa com acesso a internet no celular pode usar a plataforma e com poucos dados do local, informar que essa localização é um risco potencial para nossa cidade. Com mais dados, os administradores municipais podem então agir com mais eficiência na eliminação de focos de dengue. 
                </Typography>              
            </Box>
            <Footer />
        </>
    )
  }