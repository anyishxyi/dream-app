import React from 'react';
import { TextField } from '@mui/material';
// import { makeStyles } from '@mui/styles';
import ButtonDream from '../button-dream/button-dream';
import './home.css';

import page1 from '../../assets/images/Page-1.svg';
import page2 from '../../assets/images/Page-2.svg';
import page3 from '../../assets/images/Page-3.svg';
import page4 from '../../assets/images/Page-4.svg';
import page5 from '../../assets/images/Page-5.svg';
import page6 from '../../assets/images/Page-6.svg';
import page7 from '../../assets/images/Page-7.svg';

const Home: React.FC = () => {
  const inputStyle: React.CSSProperties = {
    width: '500px',
    borderColor: 'white !important'
  };

  return (
    <section className='home-section'>
      <div className='section left-section'>
        <h2>Pour commencer...</h2>
        <p>Faire votre Shynleï, jouer avec, c'est l'occasion d'écouter vos rêves, de les partager et de prendre confiance dans votre richesse.</p>
        <div className='title'>Nom et prénom :</div>
        <TextField id="standard-basic" variant="standard" style={inputStyle}/>
        <div className='title'>Mon intention :</div>
        <p>L'intention, l'objectif de ce Shynleï</p>
        <TextField id="standard-basic" variant="standard" style={inputStyle}/>
      </div>
      <div className='section'>
        <h2 className='ml'>Votre Shynleï c'est...</h2>
        <p className='ml'>7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 3 interprétations pour vous aider</p>
        <div className='container right'>
          <div className='section'>
            <div className='shynlei'>
              <img src={page1} alt="" className='shynlei-img' />
              <span className='shynlei-content'>1. Le rêve libère l'expression</span>
            </div>
            <div className='shynlei'>
              <img src={page3} alt="" className='shynlei-img' />
              <span className='shynlei-content'>3. La différence rend unique</span>
            </div>
            <div className='shynlei'>
              <img src={page5} alt="" className='shynlei-img' />
              <span className='shynlei-content'>5. La clé exprime le style</span>
            </div>
            <div className='shynlei'>
              <img src={page7} alt="" className='shynlei-img' />
              <span className='shynlei-content'>7. Le ciel bleu révèle l'alignement</span>
            </div>
          </div>
          <div className='section'>
            <div className='shynlei'>
              <img src={page2} alt="" className='shynlei-img' />
              <span className='shynlei-content'>2. Le sens éclaire le parcours</span>
            </div>
            <div className='shynlei'>
              <img src={page4} alt="" className='shynlei-img' />
              <span className='shynlei-content'>4. La valeur humaine met en mouvement</span>
            </div>
            <div className='shynlei'>
              <img src={page6} alt="" className='shynlei-img' />
              <span className='shynlei-content'>6. Le parcours associe réve et réalité</span>
            </div>
          </div>
        </div>
        <div className="bottomButton">
          <ButtonDream />
        </div>
      </div>
    </section>
  );
};

export default Home;
