'use client';

import { CustomHeader, CustomFooter, CustomCarousel } from '../components';

const Home = () => {
  return (
    <main className=' min-h-screen flex flex-col justify-between '>
      <CustomHeader />
      <div className='flex flex-col flex-grow'>
        <CustomCarousel />
        <div className='w-full flex flex-col items-center py-6 text-custom-dark-blue'>
          <span className='text-5xl font-bold'>Ramos</span>
          <div className='flex w-full justify-around'>
            <div className='flex flex-col items-center'>
              <img src='/images/ramos/lobinho.png' className='h-40' />
              <span>Lobinho</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/images/ramos/escoteiro.png' className='h-40' />
              <span>Escoteiro</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/images/ramos/senior.png' className='h-40' />
              <span>Sênior</span>
            </div>
            <div className='flex flex-col items-center'>
              <img src='/images/ramos/pioneiro.png' className='h-40' />
              <span>Pioneiro</span>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </main>
  );
};
export default Home;
