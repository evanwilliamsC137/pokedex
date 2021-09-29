import React from "react";
import './style.css'

//Function that dynamically creates each pokemon's card
function Card({pokemon}) {
    return(
        <div className={"container"}>


        <div className={"Card"}>
            <div className={"Card_img"}>
                <img src={pokemon.sprites.front_default}/>
            </div>
            <div className={"Card_name"}>
                {pokemon.name}
            </div>
            <div className={"Card_types"}>
                {pokemon.types.map(type =>{
                    return <div className={"Card_type"}>
                        {type.type.name}
                    </div>
                })}
            </div>
            <div className={"Card_info"}>
                <div className={"Card_data Card_data--weight"}>
                    <p className={'title'}>Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className={"Card_data Card_data--height"}>
                    <p className={'title'}>Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className={"Card_data Card_data--ability"}>
                    <p className={'title'}>Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Card