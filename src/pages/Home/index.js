import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

//http://localhost:8080/categorias?_embed=videos

function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      console.log(categoriasComVideos);
      setDadosIniciais(categoriasComVideos);
    })
    .catch((err) => {
      //Aqui colocamos o estado, aparecer a tela do erro, mostrar erro ao usuário.
      //Não recomendado deixar o console.
      console.log(err.message)
    });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Carregando...</div>)}

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
          videoTitle={dadosIniciais[0].videos[0].titulo}
          url={dadosIniciais[0].videos[0].url}
          videoDescription={"Assassin's Creed Odyssey é um jogo eletrônico de RPG de ação desenvolvido pela Ubisoft Quebec e publicado pela Ubisoft. É o décimo primeiro título principal da série Assassin's Creed e foi lançado em 5 de outubro de 2018, para Microsoft Windows, PlayStation 4, Xbox One e Nintendo Switch."}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />
        </>
      )}
    </PageDefault>
  );
}

export default Home;