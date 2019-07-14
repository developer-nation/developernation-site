import axios from 'axios';

export const DiscordAPI = axios.create({
    baseURL: 'https://discordapp.com/api/',
});