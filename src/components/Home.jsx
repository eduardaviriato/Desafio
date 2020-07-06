import React, {Component} from 'react'
import Text, {Title, Subtitle} from './Text'
import {Link} from 'react-router-dom'
import LittleGrayButton, {BigBlueButton} from './Buttons'
import Drop from './Dropdown'
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
                        <Drop/>
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
                    <Link to="/charts/hours" className="no-decoration"><LittleGrayButton>Por horário</LittleGrayButton></Link>
                    <Link to="/charts/days" className="no-decoration"><LittleGrayButton>Por dia</LittleGrayButton></Link>
                    <Link to="/charts/months" className="no-decoration"><LittleGrayButton>Por mês</LittleGrayButton></Link>
                    <Link to="/charts/years" className="no-decoration"><LittleGrayButton>Por ano</LittleGrayButton></Link>
                    <Link to="/charts/compare_years" className="no-decoration"><LittleGrayButton>Comparar anos</LittleGrayButton></Link>
                </div>
            </div>
        )
    }
}
export default Home