import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DisplayVilainServicePage from '../components/DisplayVilainServicePage'

const Stag = () => {
  // State réupération des infos de la catégorie concernée
  const [vilainInfo1, setVilainInfo1] = useState([])
  // UseEffect
  useEffect(() => {
    axios.get('http://localhost:4242/occupation/stag').then(response => {
      setVilainInfo1(response.data)
    })
  }, [])

  return (
    <div className='page-Service'>
      <Link to='/'>
        <p> retour </p>
      </Link>
      <div className='serviceDescription'>
        <h2>Choisissez votre prestataire pour un EVG</h2>
        <div className='descriptionImg'>
          <p>
            Vous souhaitez enterrez la vie de jeune garçon ou de jeune fille
            d'une connaissance ? Ici nos professionnels les enterreront tout
            court.
          </p>
          <img
            src={require('../assets/img/evjf.png')}
            alt='stag'
            // details='EVG/EVJF'
          />
        </div>
      </div>
      <div className='posts'>
        {vilainInfo1
          ? vilainInfo1.map(vilainInfo1 => {
              return (
                <DisplayVilainServicePage
                  vilainInfo1={vilainInfo1}
                  key={vilainInfo1.id}
                  // key={vilainInfo1.name}
                />
              )
            })
          : null}
      </div>
    </div>
  )
}

export default Stag
