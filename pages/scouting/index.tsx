'use client'
import { CustomHeader, CustomFooter } from '../../components';
import "../../app/globals.css";
import "./style.css";

const Scouting = () => {
    return (
        <main className="min-h-screen flex flex-col justify-between">
        <CustomHeader />
        <div className='flex flex-col flex-grow justify-center'>
            <div className='flex flex-row justify-around py-4 rounded-2xl scouting-container'>
                <div className='bg-white rounded w-191 flex flex-col justify-center what-is-scouting h-fit'>
                    <div className='flex flex-col align-center px-10 '>
                        <h2 className='text-2xl pb-2'>O que é escotismo?</h2>
                        <span className='pb-2 inline-block'>O Escotismo é um movimento global educacional que visa desenvolver jovens e adolescentes bem cidadãos responsáveis, éticos econfiantes. Fundado por Lord Baden-Powell no início do  século XX,o Escotismo tem como base uma filosofia que enfatiza valores como solidariedade, serviço à comunidade, respeito pela natureza e autossuficiência.</span>
                        <span className='pb-2 inline-block'>O Escotismo oferece aos jovens a oportunidade de participar de atividades ao ar livre aprender habilidades práticas, promover a liderança, desenvolver habilidades de trabalho em equipe e cultivar amizades duradouras. Os escoteiros participam de acampamentos, caminhadas, atividades de serviço comunitário e uma variedade de experiências que os desafiam a crescer e se tornar pessoas melhores.</span>
                        <span>Uma parte fundamental do Escotismo é o compromisso com o lema "Sempre Alerta", que incentiva os jovens a estarem preparados para enfrentar desafios e a serem cidadãos ativos e conscientes em suas comunidades. O Escotismo é uma jornada de autoconhecimento, responsabilidade e diversão, moldando jovens para serem líderes e contribuintes positivos para a sociedade. É uma oportunidade única para aprender, crescer e se aventurar, enquanto se constrói umabase sólida de valores e princípios.</span>
                    </div>
                </div>
                <div className='scout-image'>
                    <img src="/images/scouting/image-1.png"/>
                </div>
            </div>
            <div className='flex flex-row justify-around py-8 scouting-container'>
                <div className='w-191'></div>
                <div className='bg-white rounded px-14 py-3 w-200 scouting-branches'>
                    <h2 className='text-2xl pb-2'>O escotismo divide os jovens em 4 ramos:</h2>
                    <span className='pb-2 inline-block'>Ramo Lobinho Este ramo é para crianças entre 6,5 e 10 anos. Os lobinhos aprendem muito sobre a vida em meio à natureza, a viver em grupo e desenvolvem sua socialização. Eles formam uma alcateia, que é dividida em pequenos grupos chamados matilhas. O lema dos Lobinhos é “Melhor Possível”.</span>
                    <span className='pb-2 inline-block'>Ramo Escoteiro Este ramo é para jovens entre 11 e 14 anos. Eles formam patrulhas de 5 a 8 jovens, que juntas formam uma tropa. Aqui, além de trabalhar em equipe e entender a importância de respeitar a natureza, eles aprendem diversas coisas que os deixam mais confiantes e decididos. O lema dos escoteiros é “Sempre  Alerta”.</span>
                    <span className='pb-2 inline-block'>Ramo Sênior Este ramo é para jovens com idade entre 15 e 17 anos. Neste ramo, a exploração se converte em  desafios pessoais e os jovens são estimulados a superar estes desafios. O lema dos seniores é “Sempre Alerta”.</span>
                    <span>Ramo Pioneiro Este ramo é para jovens a partir dos 18 anos, e até os 21 incompletos. Eles formam o clã, e é onde se apoiam e descobrem interesses em comum. O lema do Ramo Pioneiro é “Servir”.</span>
                </div>
            </div>
        </div>
        <CustomFooter />
      </main>
    );
};
export default Scouting;