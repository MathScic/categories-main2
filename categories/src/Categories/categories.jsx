import React from 'react'
import { useState } from 'react'
import event from '../event'


function Categories() {
    const [selectedType, setSelectedType] = useState('toutes');
  
    const handleTypeChange = (type) => {
      setSelectedType(type);
    };
  
    const getFilteredPhotos = selectedType === 'toutes' ? event : event.filter(photo => photo.type === selectedType)  
    return (
      <div>
        <h1>Nos Réalisations</h1>
        <h2>Categories</h2>
        <div className='selectContainer'>
          <input type="hidden" name='select' value />
          <button type='button' className='openButton' onClick={() => handleTypeChange('toutes')}>Toutes</button>
          <button type='button' onClick={() => handleTypeChange('conférence')}>Conférences</button>
          <button type='button' onClick={() => handleTypeChange('expérience digitale')}>Expérience Digitale</button>
          <button type='button' onClick={() => handleTypeChange('soirée entreprise')}>Soirée d'entreprise</button>
        </div>
  
        <div>
          {getFilteredPhotos.map((photo) => (
            <div key={photo.id}>
              <img src={photo.cover} alt={photo.description} />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Categories;