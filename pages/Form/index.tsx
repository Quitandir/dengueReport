import * as React from 'react';
import { Box, Button, Dialog, DialogContent, DialogContentText, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import Header from "../../components/Header";
import { useState } from "react";
import Image from 'next/image';
import map2 from '../../public/map2.jpeg'
import { StyledLabel, StyledRadio } from './styles';
import Footer from '../../components/Footer';

export default function Form() {

    const [adressLocation, setAdressLocation] = React.useState('adress');
    const [adress, setAdress] = useState('')
    const [publicPrivate, setPublicPrivate] = React.useState('');
    const [place, setPlace] = React.useState('');
    const [description, setDescription] = useState('')
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdressLocation((event.target as HTMLInputElement).value);
    };

    const handlePublicPrivate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPublicPrivate((event.target as HTMLInputElement).value);
    };

    const handlePlace = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlace((event.target as HTMLInputElement).value);
    };

    const submitForm = () => {
        console.log(adressLocation, adress, publicPrivate, place, description);
        handleClickOpen();
        setAdress('')
        setAdressLocation('adress')
        setPublicPrivate('')
        setPlace('')
        setDescription('')
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Header />
            <Typography variant="h4" textAlign='center' marginTop='48px' fontWeight='700' fontFamily={"unset"}>
                Faça aqui seu relato
            </Typography>
            <Box sx={{ width: '90%', display: 'flex', flexDirection: 'column', margin: '2em auto' }}>

                <FormControl style={{ gap: '1em' }} >
                    <StyledLabel id="publicPrivate-label">Você quer informar o endereço ou usar sua localização?</StyledLabel>
                    <RadioGroup
                        aria-labelledby="publicPrivate-label"
                        defaultValue="adress"
                        name="publicPrivate"
                        value={adressLocation}
                        onChange={handleChange}
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
                        
                    >
                        <FormControlLabel value="adress" control={<StyledRadio />} label="Endereço" />
                        <FormControlLabel value="location" control={<StyledRadio />} label="Localização" />
                    </RadioGroup>

                    {adressLocation == 'adress' ? <TextField
                        id="outlined-controlled"
                        label="Endereço"
                        value={adress}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setAdress(event.target.value);
                        }}
                    /> :
                        <Image src={map2} alt='mapa para localização' style={{ width: '100%', height: 'auto' }} />
                    }


                    <FormLabel id="demo-radio-buttons-group-label">Esse espaço com foco de dengue é público ou privado?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={publicPrivate}
                        onChange={handlePublicPrivate}
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}
                        aria-required
                    >
                        <FormControlLabel value="public" control={<Radio />} label="Público" />
                        <FormControlLabel value="private" control={<Radio />} label="Privado" />
                    </RadioGroup>
                    {
                        publicPrivate != '' ?
                            <>

                                <RadioGroup
                                    aria-labelledby="place-label"
                                    name="place"
                                    value={place}
                                    onChange={handlePlace}
                                >
                                    {
                                        publicPrivate == 'public' ?
                                            <>
                                                <FormControlLabel value="park" control={<Radio />} label="Parque ou praça" />
                                                <FormControlLabel value="street" control={<Radio />} label="Rua ou avenida" />
                                                <FormControlLabel value="building" control={<Radio />} label="Prédio público" />
                                            </>
                                            :
                                            <>
                                                <FormControlLabel value="house" control={<Radio />} label="Moradia privada" />
                                                <FormControlLabel value="company" control={<Radio />} label="Empresa privada" />
                                                <FormControlLabel value="lot" control={<Radio />} label="Terreno particular" />
                                            </>

                                    }

                                </RadioGroup>
                            </>
                            : null
                    }
                    <TextField
                        id="outlined-controlled"
                        label="Descreva aqui detalhes do foco de dengue."
                        value={description}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDescription(event.target.value);
                        }}
                        multiline

                    />
                    <Button type='submit' onClick={submitForm}>
                        Enviar
                    </Button>
                </FormControl>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                onClick={handleClose}
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Relato enviado com sucesso!
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Footer />
        </>
    )
}