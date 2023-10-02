import { v4 as uuidv4 } from 'uuid';

import GoogleImg from '../images/GoogleImg.png';
import SpotifyImg from '../images/SpotifyImg.png';
import YoutubeImg from '../images/YoutubeImg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Google Chrome',
    desc:
      'A search engine designed for accessing information on the web with ease utilising search predictions and user friendly interface',
    img: GoogleImg,
  },
  {
    id: uuidv4(),
    name: 'Spotify',
    desc:
      'An app to help people store their music playlists and share them with others',
    img: SpotifyImg,
  },
  {
    id: uuidv4(),
    name: 'Youtube',
    desc:
      'An app where users can upload or download digital content , watch and listen to songs and videos',
    img: YoutubeImg,
  },
];

export default projects;
