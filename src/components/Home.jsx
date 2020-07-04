import React, {Component} from 'react'
import Text, {Title, Subtitle} from './Text'
import RoundIcon from './RoundIcon'
import LittleGrayButton, {BigBlueButton} from './Buttons'
import './pages.css'

class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="home_section">
                    <Title>Setor financeiro</Title>
                    <Text>
                        Mussum Ipsum, cacilds vidis litro abertis. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
                    </Text>
                    <div className="home_section_options">
                        <RoundIcon icon="down-arrow"/>
                        <RoundIcon icon="calendar"/>
                        <RoundIcon icon="calendar"/>
                    </div>
                </div>
                <div className="home_functions">
                    <BigBlueButton>Setor financeiro</BigBlueButton>
                    <BigBlueButton>Setor de produtos</BigBlueButton>
                </div>
                <div className="home_views">
                    <div className="home_views_header">
                        <Subtitle>Como você deseja ver seu volume financeiro?</Subtitle>
                    </div>
                    <LittleGrayButton>Por horário</LittleGrayButton>
                    <LittleGrayButton>Por dia</LittleGrayButton>
                    <LittleGrayButton>Por mês</LittleGrayButton>
                    <LittleGrayButton>Por ano</LittleGrayButton>
                    <LittleGrayButton>Comparar anos</LittleGrayButton>
                </div>
            </div>
        )
    }
}
export default Home