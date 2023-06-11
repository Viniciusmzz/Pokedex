import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Chip, Container, Divider, Paper,  Typography } from "@mui/material";
import {Box} from "@mui/system";
import PokemonTable from  "../components/PokemonTable";
import { useNavigate } from 'react-router-dom';

export const Profile = ({ pokemonData }) => {
    const {name, sprites, moves} = pokemonData || {};
    const navigate = useNavigate();

 useEffect(()=>{
    if (!pokemonData){
        navigate("/");
    }
 }, [])
    if (pokemonData){
        return null;
    }

    return (
        <>
        <Navbar/>

        <Container maxWidth="md">
<Paper elevation={3}>
<Box display="flex" flexDirection="column"  alignItems="center" p={5}> 
<Typography variant="h3">{name}</Typography>
<Box display="flex" alignItems="center" width="100%" >
<Box component="img" src={sprites.front_default} width="50%" height="100%"/>
<PokemonTable pokemonData={pokemonData}/>
</Box>
<Box width="100%">
<Divider>Variações</Divider>
<Box component="img" src={sprites.front_female} width="30%" height="30%"/>
<Box component="img" src={sprites.front_shiny} width="30%" height="30%"/>
<Box component="img" src={sprites.front_shiny_female} width="30%" height="30%"/>
<Divider>Ataque</Divider>

    <Box textAlign="center" marginTop="16px">
    {moves.map((moveData, key) => (
     
    <Chip key={key} sx={{m:"5px"}} label={moveData.move.name}></Chip>  
    
    ))
}
</Box>
</Box>
</Box>
</Paper>
</Container>
</>
    );
};
export default Profile;