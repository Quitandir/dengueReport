import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Image from "next/image";
import map from '../public/map.jpg'
import Footer from "../components/Footer";
import styled from 'styled-components';
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  gap: 2em;
  margin-bottom: 2em;

`

export default function Page() {
    return (
      <>
        <Header />
        <StyledBox>
          <Typography variant="h4" textAlign='center' marginTop='24px' fontWeight='700' className={rubik.className} color='1b0000'>
            Canoas contra a dengue
          </Typography>
          <Typography color='331800' textAlign='center' width='90%' className={rubik.className} >
            Aqui você consegue relatar lugares com focos de dengue na nossa cidade. 
          </Typography>
          <Image alt="mapa de cidade" src={map} style={{maxWidth: '80%', height: 'auto'}}/>
          <Typography color='331800' textAlign='center' width='90%' className={rubik.className}>
            Faça seu login usando o .gov e nos ajude a identificar possíveis focos de dengue.
          </Typography>
        </StyledBox>
        <Footer />
      </>
    )
  }