import logo from "./assets/images/dragon_Ball_Z_logo_A.png"

import { useState } from 'react'

import style from './App.module.css'

import {Menu} from './components/menu.jsx'

function App() {
  const [aparecerVideo, setAparecerVideo] = useState(false)
  const [aparecerBotao, setAparecerBotao] = useState(false)

  return (
    <>
     {/* {first ? <nav>batata</nav>: <nav>Arroz</nav>}
     <button onClick={() => setfirst(true)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="" /></button> */}
   <Menu option01='Início' option02='Personagens'/>
   <section className={style.Inicio}>
      <div className={style.primeira}>
        <img src={logo} alt="logo" className={style.logo}/>
       
        <div className={style.wrapInfo}>
        <p className={style.paragrafoLP}>Dragon Ball é uma famosa obra criada por Akira Toriyama, cuja primeira publicação ocorreu em novembro de 1984 na revista Weekly Shonen Jump. Devido ao imenso sucesso, em um curto período de tempo, a história ganhou uma adaptação para o anime em fevereiro de 1986, produzida pela Toei Animation. Posteriormente, em abril de 1989, a Toei também adaptou a continuação da história para o formato de mangá. Mais tarde, em 2015, foi lançada uma nova série de anime, Dragon Ball Super, que continuou expandindo o universo da obra. A trama central acompanha a vida de Son Goku e seus amigos, seus desafios e aventuras, enquanto eles enfrentam inimigos poderosos e exploram temas como amizade, superação e luta pelo bem.</p>
        <button className={style.btAparecerB} onClick={ () => {setAparecerBotao(true)}}>Quero saber mais!s!</button>
       
        </div>
        </div>
       
       <div className={style.AparecerVideo}>
       {aparecerBotao &&   <button className={style.btAparecerV} onClick={() => {setAparecerVideo(true); } }>Quero saber mais!</button>}
       {aparecerVideo && <iframe width="90%" height="200" src="https:www.youtube.com/embed//BIIUfbE2ajc?si=NP22kjHzyZmOpuUM"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
       </div>
      
   </section>
   
  
   
    </>
  )
}

export default App
