import React from 'react'
import CardItem from './CardItem'
import klogo from '../assets/kesko-logo.svg'



const Kesko = ({ finalProducts }) => {

  return (
    <div>
      {Object.keys(finalProducts).length === 0 ? (
        <p className='mt-8 text-xl font-medium text-gray-700 flex items-center'>
          Nothing to buy in K-Group!
          <img className="ml-2" src={klogo} alt='🟠'/> 
        </p>  
      ) : (
        <>
          <p className='mb-3 text-xl font-medium text-gray-700 flex items-center'>
            Buy in K-Group 
            <img className="ml-2" src={klogo} alt='🟠'/> 
          </p>    
          <div className='bg-secondary h-auto rounded-2xl p-2 space-y-2 mb-2'>
            { Object.entries(finalProducts).map(([name, [ price_kpl, price_kilo, imageUrl ]]) => {        
              return (
                  <CardItem key={name} name={name} price_kpl={price_kpl} price_kilo={price_kilo} imageUrl={imageUrl} />
              )
            }) }
          </div>
        </>
      )}
      
    </div>
  )
}

export default Kesko