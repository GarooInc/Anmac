"use client";
import React, { useState } from 'react';

const MissionVisionValues = () => {
  const [selectedTab, setSelectedTab] = useState('Misión');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Misión':
        return (
          <div className='flex flex-col items-start justify-center gap-2 pt-10'>
            <h2 className='font-bold text-2xl text-blue_anmac'>Misión</h2>
            <p className='font-poppins text-lg'>Nuestra misión es garantizar que todos los medicamentos, ya sean genéricos o de marca, cumplan con los más altos estándares de calidad. Nos dedicamos a promover el uso de medicamentos genéricos y biosimilares de calidad, ya que estos no solo mejoran la salud de las personas, sino también la economía de los países.</p>
          </div>
        );
      case 'Visión':
        return (
          <div className='flex flex-col items-start justify-center gap-2 pt-10'>
            <h2 className='font-bold text-2xl text-blue_anmac'>Visión</h2>
            <p className='font-poppins text-lg'>Nuestra visión es ser líderes en la promoción de medicamentos genéricos y biosimilares de calidad, contribuyendo al acceso equitativo a la salud a nivel global.</p>
          </div>
        );
      case 'Valores':
        return (
          <div className='flex flex-col items-start justify-center gap-2 pt-10'>
            <h2 className='font-bold text-2xl text-blue_anmac'>Valores</h2>
            <p className='font-poppins text-lg'>Nuestros valores fundamentales incluyen la calidad, la accesibilidad, la transparencia y el compromiso con la salud y el bienestar de las personas.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='flex gap-4 border-b-2 border-gray-300 justify-evenly'>
        <button
          className={`text-3xl pb-4 ${selectedTab === 'Misión' ? 'font-bold text-blue_anmac border-b-4 border-blue_anmac' : ''}` }
          onClick={() => setSelectedTab('Misión')}
        >
          Misión
        </button>
        <button
          className={`text-3xl pb-4 ${selectedTab === 'Visión' ? 'font-bold text-blue_anmac border-b-4 border-blue_anmac' : ''}` }
          onClick={() => setSelectedTab('Visión')}
        >
          Visión
        </button>
        <button
            className={`text-3xl pb-4 ${selectedTab === 'Valores' ? 'font-bold text-blue_anmac border-b-4 border-blue_anmac' : ''}` }  
          onClick={() => setSelectedTab('Valores')}
        >
          Valores
        </button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default MissionVisionValues;
