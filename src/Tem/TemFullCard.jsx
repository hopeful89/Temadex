import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'


const HomeButton = styled.button`
    position: fixed;
    margin: 0 auto;
    height: 100px;
    width: 100px;
    background: rgba(125,125,125,.25);
    color: red;
    border: none;
`;

const UnderConstruction = styled.p`
    font-size: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
`;


const TemFullCard = ({temtem, setSearchResults}) => {
    let { name } = useParams();
    const singleTem = temtem.filter(obj => obj.name === name);
    console.log(singleTem)
    console.log(name)
    return (
        <>
       <Link to="/"><HomeButton onClick={() => { setSearchResults(temtem)}}>Home</HomeButton></Link>
       <UnderConstruction>Under Construction</UnderConstruction>
       </> 
    )

}

export default TemFullCard