import './Galeria.css'
import icon from "../../assets/img/upload.svg"
import { Botao } from '../../components/botao/Botao'
import {Card} from '../../components/card/Card'
export const Galeria = () => {
    return(
        <>
        <h1 className='tituloGaleria'>Galeria Online</h1>

        <form className="formulario" onSubmit="">
            <div className="compoNome">
                <label>Nome</label>
                <input type="text" className="inputNome"></input>
            </div>
            <div className="campoImagem">
                <label className="arquivoLabel">
                    <i><img src={icon} alt="Icone de upload de imagem"/></i>
                    <input type="file" className="arquivoInput"/>
                </label>
            </div>
            <Botao nomeBotao="Cadastrar"/>
        </form>

        <div className='campoCards'>
            
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
            <Card tituloCard="Conrad"/>
        </div>
        </>
    )
}