'use client';
import { CustomHeader, CustomFooter } from '../components';
import "../app/globals.css";

const About = () => {
    return (
        <main className=' min-h-screen flex flex-col justify-between '>
        <CustomHeader />
        <div className='flex flex-col flex-grow'>
        {/* 
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
    <div className="elfsight-app-976078e4-7b79-47c5-8811-cc3be5c7dc7b" data-elfsight-app-lazy></div>
     */}
    

    <section className='w-full flex flex-col items-center py-6 text-custom-dark-blue'>
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Sobre a história do grupo Escoteiro do Ar 14-Bis</h2>

            <div className="bg-slate-800 shadow-lg rounded-lg overflow-hidden mb-10 md:mb-20">
                <div className="flex flex-col md:flex-row items-center">
                    <img src="/images/about/aviao.png" alt="aviao" className="w-full md:w-1/2"></img>
                    <div className="p-4">
                        <p className="text-zinc-100 text-lg">Fundado no dia 03 de Maio de 1982, com a colaboração de escotistas dos 
                        grupos da Cidade de Canoas e Militares da BACO, em uma casa emprestada na Vila Militar teve nascimento 
                        o 008/RS Grupo Escoteiro do Ar 14-Bis. Inicialmente, o 14 fazia as atividades na praça central da vila, 
                        que logo após, recebeu o nome de Praça 14-Bis, homenageando não só o mais novo grupo escoteiro do estado, 
                        mas também o mais famoso invento criado por Santos Dumont. Com o passar do tempo, o grupo foi crescendo 
                        e surgiu a necessidade de uma nova sede capaz de suportar o número cada vez maior de jovens inscritos.</p>
                    </div>
                </div>
            </div>

            <div className="bg-slate-800 shadow-lg rounded-lg overflow-hidden mb-10 md:mb-20">
                <div className="flex flex-col md:flex-row-reverse items-center">
                    <img src="/images/about/sedeAntiga.png" alt="sedeAntiga" className="w-full md:w-1/2"></img>
                    <div className="p-4">
                        <p className="text-zinc-100 text-lg">Em 1983 foi criada a primeira tropa escoteira feminina, a Cassiopeia tendo 
                        a Perseus como sua primeira patrulha. Vendo este sucesso, o CSSGAPA (Cassino dos Suboficiais e Sargentos 
                        da Guarnição Aeronáutica de Porto Alegre), cedeu um terreno para o grupo construir três prédios para alojar 
                        os escoteiros. Nestes anos de existência, o 14-Bis se tornou referência nacional em se tratando de Modalidade 
                        do Ar, sendo atualmente o Grupo Escoteiro do Ar mais antigo do RS. Seus lobinhos do passado hoje são chefes 
                        escoteiros, professores, pilotos e médicos. São adultos que com o gosto da aventura, descobriram o valor do 
                        trabalho em equipe, da vida ao ar livre e do respeito ao próximo. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
        <CustomFooter />
      </main>
    );
};
export default About;
