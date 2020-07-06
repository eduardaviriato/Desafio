import React, { Component } from 'react';
import {MediumWhiteButton} from './Buttons'
import Text, { Subtitle } from './Text'

export default class Landing extends Component{
    render(){
        return(
            <div className="landing">
                <div className="PolyLanding" ></div>
                <section className="landing_functions">
                    
                    <MediumWhiteButton>Quem somos?</MediumWhiteButton>
                    <MediumWhiteButton>O que fazemos?</MediumWhiteButton>
                    <MediumWhiteButton>Podemos te ajudar?</MediumWhiteButton>
                    <MediumWhiteButton>Saiba mais</MediumWhiteButton>
                    
                </section>
                <section className="landing_section">
                    <Subtitle>Precisa de ajuda para gerenciar seu omnichannel? Somos a solução.</Subtitle>
                    <Text>Você está à procura de uma ferramenta que vai diminuir o tempo com que demoraria para tomar uma decisão em seus canais do omnichannel?</Text>
                </section>
            </div>)
    }
}
