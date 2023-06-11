import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import PokemonCard from "../components/PokemonCard";
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import style from "../pages/style.css"
import { Box } from "@mui/material";
import { useNavigate} from 'react-router-dom';


 export const Home = ({setPokemonData}) => {
    const [pokemons, setPokemons] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for ( var i = 1; i < 250; i++) {

            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/ `);
        }
        
       axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };
    const pokemonFilter = (name) => {
        var filterPokemons = [];
        if(name===""){
            getPokemons();
        }
        for (var i in pokemons) {
        if(pokemons[i].data.name.includes(name)) {
            filterPokemons.push(pokemons[i]);
        }
    }

    setPokemons(filterPokemons);
    };

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/profile");

    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter}/>
            <Container maxWidth="xg">
                <Grid container spacing={4}>
                    {pokemons.map((pokemon, key) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                        <Box onClick={()=>pokemonPickHandler(pokemon.data)}>
                        <PokemonCard name = {pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                        </Box>

                        </Grid> ))}

                       
                </Grid>
            </Container>
            
        </div>
    )
}
export default Home;
