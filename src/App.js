import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import TemCard from './Tem/TemCard';
import TemFullCard from './Tem/TemFullCard'
import background from './IMG/tetem.jpg';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${background}) fixed center;
  min-height: 100vh;
  width: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2%;

  a {
    text-decoration: none;
    margin: 2% .5% .3% .5%;
  }
`;

const SearchInput = styled.input`
  width: 33%;
  left: 33%;
  text-align: center;
  position: fixed;
  color: royalblue;
  border: 2px solid royalblue;
  height: 3vh;
  letter-spacing: 1px;
  border-radius: 5px;

  &::placeholder {
    color: royalblue; 
    letter-spacing: .5px;
  } 
`;


function App() {
  const [temtem, setTemTem] = useState();
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState();
  useEffect( () => {
    axios.get(`https://temtem-api.mael.tech/api/temtems/`)
    .then(res => {
      setTemTem(res.data)
      setSearchResults(res.data)
      // console.log('temtem', res)
    })
      
    .catch(err=> console.log('from app err', err) 
    )
  }, [])

  useEffect (() => {
    axios.get(`https://temtem-api.mael.tech/api/techniques
    `)
    .then(res => {
   
      // console.log('types', res)
    })
    .catch(err=> console.log('from app err', err) 
    )
  },[])

  useEffect(() => {
    if(temtem){
      const results = temtem.filter(temtem => {
        return temtem.name.toLowerCase().includes(search.toLowerCase())//compare character to search
        //types are at types[0]
      }) //arr of results that is subset arr w/ matching serach
  
      return setSearchResults(results)
    }

  }, [search]);

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  if(!searchResults){
    return <div>loading...</div>
  }
  return (
    <MainContainer>
      <Route exact path="/">
        <SearchInput placeholder="What Temtem would you like?" onChange={onChange}></SearchInput >
        <ContentContainer>
          {/* <TemCard name={temtem.name} image={temtem.wikiPortraitUrlLarge} type={temtem.types} description={temtem.gameDescription}/> */}
          {searchResults.map((obj, index) => {
            return (
            <Link key={index} to={`/${obj.name}`}>
              <TemCard name={obj.name} image={obj.wikiPortraitUrlLarge} type={obj.types} key={index}/>
            </Link>
            )
          })}
        </ContentContainer>
      </Route>
      <Route exact path="/:name">
          <TemFullCard temtem={temtem} setSearchResults={setSearchResults}></TemFullCard>
      </Route>

    </MainContainer>

  )
}

export default App;
