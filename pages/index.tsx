import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Image from "next/image";
import map from '../public/map.jpg'
import Footer from "../components/Footer";

export default function Page() {
    return (
      <>
        <Header />
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '2em', mb: '2em'}}>
          <Typography variant="h4" textAlign='center' marginTop='24px' fontWeight='700' fontFamily={"unset"}>
            Canoas contra a dengue
          </Typography>
          <Typography color='gray' textAlign='center' fontFamily={"unset"}>
            Aqui você consegue relatar lugares com focos de dengue na nossa cidade. 
          </Typography>
          <Image alt="mapa de cidade" src={map} style={{maxWidth: '80%', height: 'auto'}}/>
          <Typography color='gray' textAlign='center' fontFamily={"unset"}>
            Faça seu login usando o .gov e faça seu relato de lugares da cidade com possíveis focos de dengue.
          </Typography>
        </Box>
        <Footer />
      </>
    )
  }