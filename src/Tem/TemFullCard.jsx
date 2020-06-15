import React from 'react'
import styled from 'styled-components'
import { useParams, Link } from 'react-router-dom'

const HomeButton = styled.button`
    position: fixed;
`;


const TemFullCard = ({temtem, setSearchResults}) => {
    let { name } = useParams();
    const singleTem = temtem.filter(obj => obj.name === name);
    console.log(singleTem)
    console.log(name)
    return (
       <Link to="/"><HomeButton onClick={() => { setSearchResults(temtem)}}>Home</HomeButton></Link> 
    )

}

export default TemFullCard