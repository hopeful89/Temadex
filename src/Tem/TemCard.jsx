import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    height: 100%;
    width: 100%;
    /* box-shadow: 5px 5px rgba(175, 175, 125, .4); */
    background: cadetblue;
    background: rgba(76, 234, 231, .7);
    background-size: contain;
    margin: .5%;
    ${props =>
    ( props.type === 'Digital'
    ? `box-shadow: 2px 2px 3px 3px grey;`
    : props.type === 'Water'
    ? `box-shadow: 2px 2px 3px 3px  blue;`
    : props.type === 'Earth'
    ? `box-shadow: 2px 2px 3px 3px brown;`
    : props.type === 'Nature'
    ? `box-shadow: 2px 2px 3px 3px  green;`
    : props.type === 'Electric'
    ? `box-shadow: 2px 2px 3px 3px  yellow;`
    : props.type === 'Mental'
    ? `box-shadow: 2px 2px 3px 3px purple;`
    : props.type === 'Fire'
    ? `box-shadow: 2px 2px 3px 3px red;`
    : props.type === 'Crystal'
    ? `box-shadow: 2px 2px 3px 3px  violet;`
    : props.type === 'Wind'
    ? `box-shadow: 2px 2px 3px 3px  teal;`
    : props.type === 'Neutral'
    ? `box-shadow: 2px 2px 3px 3px  dodgerblue;`
    : props.type === 'Melee'
    ? `box-shadow: 2px 2px 3px 3px  orange;`
    : props.type === 'Toxic'
    ? `box-shadow: 2px 2px 3px 3px darkgreen;`
    : props.type === 'Unknown'
    ? `box-shadow: 2px 2px 3px 3px white;`
    : null
    )};


    span {
        /* color: white; */
        margin: 1%;
    }
`;

const CardDescription = styled.div`
    display: flex;



`;

// const CardDescriptionDiv = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 70%;
//     padding: 1%;
//     line-height: 1.5;
//     color: white;
//     font-size: 1.5rem;

//     p {
//         font-size: 2rem;
//         padding: 0 0 1% 0;
//     }
// `;

const CardHeading = styled.h3`
    display: flex;
    justify-content: space-between; 
    font-size: 2rem;
    width: 25%;
    color: white;
    margin-left: 1%;
`;

const CardHeader = styled.img`
    max-height: 105px;
    width: 105px;
    margin: 1% auto 0 auto;
    /* box-shadow: 2px 2px 3px 3px rgba(76, 234, 231); */

    background: rgba(175, 175, 125, .4);
    ${props =>
    ( props.type === 'Digital'
    ? `border: 1px solid grey;`
    : props.type === 'Water'
    ? `border: 1px solid blue;`
    : props.type === 'Earth'
    ? `border: 1px solid brown;`
    : props.type === 'Nature'
    ? `border: 1px solid green;`
    : props.type === 'Electric'
    ? `border: 1px solid yellow;`
    : props.type === 'Mental'
    ? `border: 1px solid purple;`
    : props.type === 'Fire'
    ? `border: 1px solid red;`
    : props.type === 'Crystal'
    ? `border: 1px solid violet;`
    : props.type === 'Wind'
    ? `border: 1px solid teal;`
    : props.type === 'Neutral'
    ? `border: 1px solid dodgerblue;`
    : props.type === 'Melee'
    ? `border: 1px solid orange;`
    : props.type === 'Toxic'
    ? `border: 1px solid darkgreen;`
    : props.type === 'Unknown'
    ? `border: 1px solid white;`
    : null
    )};


`;



const TemCard = ({ name, image, type, description }) => {
    // console.log(type[0])
    return (
    <CardContainer type={type[0]}>
        <CardDescription>
            <CardHeader type={type[0]} src={image} alt="temtem" />
        </CardDescription>
        <CardHeading> {name} </CardHeading>
        <span>Type(s): {type.reduce((el, add) => {return <span>{`${el} ${add}`} </span>})}</span>
    </CardContainer>
    )
}

export default TemCard