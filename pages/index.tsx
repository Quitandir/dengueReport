import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Image from "next/image";
import map from '../public/map.jpg'
import Footer from "../components/Footer";

import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })

export default function Page() {
    return (
      <>
        <Header />
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '2em', mb: '2em'}}>
          <Typography variant="h4" textAlign='center' marginTop='24px' fontWeight='700' className={rubik.className} color='1b0000'>
            Canoas contra a dengue
          </Typography>
          <Typography color='331800' textAlign='center' width='90%' className={rubik.className} >
            Aqui você consegue relatar lugares com focos de dengue na nossa cidade. 
          </Typography>
          <Image alt="mapa de cidade" src={map} style={{maxWidth: '80%', height: 'auto'}}/>
          <Typography color='331800' textAlign='center' width='90%' className={rubik.className}>
            Faça seu login usando o .gov e faça seu relato de lugares da cidade com possíveis focos de dengue.
          </Typography>
        </Box>
        <Footer />
      </>
    )
  }