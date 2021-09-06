import { Container , Switch, withStyles} from '@material-ui/core';
import axios from 'axios';
import { grey } from "@material-ui/core/colors";

import { useEffect, useState,  } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Header from './components/header/Header';

function App() {

  const [word, setWord] = useState("");
  // const [meanings, setMeanings] = useState([]);
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);



  const PurpleSwitch = withStyles({
      switchBase: {
        color: grey[50],
        "&$checked": {
          color: grey[900],
        },
        "&$checked + $track": {
          backgroundColor: grey[500],
        },
      },
      checked: {},
      track: {},
    })(Switch);

  const dictionaryAPI = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

      setMeanings(data.data)
    } catch (error) {
      console.log(error)
      setMeanings(null)
    }
  };

  console.log( meanings)

  useEffect(() => {
    dictionaryAPI();
    // eslint-disable-next-line
  }, [word, category]);

  return (
    <div
      className="App"
      style={{
        height: '100vh',
        backgroundColor: LightTheme ? "#fff" : "#282c34",
        color: LightTheme ? "black" : "white",
        transition: "all 0.5s linear",

      }}
    >
      <Container maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >

        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <PurpleSwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>

        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          LightTheme={ LightTheme}
        />

        {meanings && (
          <Definitions
            word={word}
            meanings={meanings}
            LightTheme={LightTheme}


          />
        )}

      </Container>
    </div>);
}

export default App;
