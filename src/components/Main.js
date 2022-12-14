import Stat from "../components/Stat"
import Offer from "../components/Offer"
import Prestation from "../components/Prestation"
import seminaire1 from "../images/Seminaire91.png"
import seminaire2 from "../images/Seminaire21.png"
import seminaire3 from "../images/Samuserauyoga.png"
import sqvt from "../images/sqvt.png"
import heart from "../images/heart.png"
import abs from "../images/abs.png"
import dev from "../images/development.png"
import reward from "../images/reward.png"
import idea from "../images/idea.png"


const Main = () => {
  return (
    <section>
        <Prestation
        firstTitle={`Nos offres pour accompagner vos salariés`}
        secTitle={`Offrez une expérience collaborateur unique centrée sur l'humain`}
        text={`
                Mademoiselle Happiness vous accompagne dans l'amélioration des conditions de travail et plus généralement le bonheur de vos salariés.
                Nos experts vous proposent des méthodes axées sur le développement de l'individu et l'intelligence collective.
                Nous vous aidons à la mise en œuvre d'un plan d'actions bien-être annuel sur mesure favorisant l’épanouissement durable de vos salariés pour gagner en performance individuelle et collective. 
            `}            
        />
        <div className="flex flex-row justify-between">
            <Offer 
                firstTitle={`LES ATELIERS`}
                secTitle={`QUALITE DE VIE AU TRAVAIL`}
                text={`Plus de 30 workshops et serious games thématiques à destination de vos équipes pour innover et améliorer l'engagement de vos collaborateurs.`}
                info={`A partir de 1h30 à 4 heures d'animations `}
                img={seminaire1}
            />
            <Offer 
                firstTitle={`LES JOURNEES BIEN-ÊTRE`}
                secTitle={`ET COHESION`}
                text={`Développer la performance de vos équipes et renforcer la cohésion des collaborateurs à travers des événements team builing, conférences, séminaires d'entreprise.`}
                info={`1 à 2 journées de séminaire`}
                img={seminaire2}
            />
            <Offer 
                firstTitle={`LES OFFRES D'ATELIERS`}
                secTitle={`BIEN-ÊTRE AU TRAVAIL`}
                text={`Nous co-construisons avec vous un programme bien-être sur mesure répondant à votre problématique : temps de convivialité, sport d'entreprise, experts en énergétique, méditation, yoga, naturopathe, nutritionniste, sophrologue, décoration des bureaux...`}
                info={`1h par session`}
                img={seminaire3}

            />
        </div>
        <div className="flex flex-col-1 justify-center py-6">
            <button className="btn btn-wide btn-outline btn-info">Demander un devis</button>
        </div>
        <Prestation 
            firstTitle={`Chiffres clés`}
            secTitle={`S’intéresser au bien-être de vos collaborateurs, un gage de performance !`}
            text={`
                    Les études menées sur l’impact de la QVT* concluent à une forte corrélation entre la Qualité de Vie au Travail et la performance de l’entreprise.
                `}
            info={`*Qualité de Vie au Travail`}
        />
        <div className="flex flex-col justify-center">
            <div className="stats shadow">
                <Stat 
                    img={heart}
                    value={`2 X`}
                    title={`moins malade`}
                />
                <Stat 
                    img={abs}
                    value={`6 X`}
                    title={`moins absent`}
                />
                <Stat 
                    img={dev}
                    value={`9 X`}
                    title={`plus investi`}
                />
                <Stat 
                    img={reward}
                    value={`31 %`}
                    title={`plus productif`}
                />
                <Stat 
                    img={idea}
                    value={`55 %`}
                    title={`plus creatif`}
                />
            </div>
            <div className="stat-desc grid place-items-start">Source : étude menée par Harvard & le MIT, 2018</div>
        </div>

        <Prestation 
            firstTitle={`Nos événements QVT du mois de juin !`}
            img={sqvt}      
        />

        <div className="flex justify-center mb-6">
            <button className="btn btn-wide btn-outline btn-info">Consultez le programme</button>
        </div>

        <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold mb-8">Vous avez un projet ?</h2>
            <button className="btn btn-wide btn-outline btn-info">Rencontrons-nous...</button>
        </div>    
        <form className="grid grid-cols-2 justify-items-center px-96">
            <div className="" >
                <div className="flex items-center border-b-2 border-primary py-2 mb-4 max-w-xs">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Prénom" aria-label="Full name" />
                </div> 
                <div className="flex items-center border-b-2 border-primary py-2 mb-4 max-w-xs">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Société" aria-label="Full name" />
                </div>
                <div className="flex items-center border-b-2 border-primary py-2 mb-4 max-w-xs">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Full name" />
                </div> 
            </div>
            <div className="" >
                <div className="flex items-center border-b-2 border-primary py-2 mb-4 max-w-xs">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Nom" aria-label="Full name" />
                </div> 
                <div className="flex items-center border-b-2 border-primary py-2 mb-4 max-w-xs">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Fonction" aria-label="Full name" />
                </div>
                <div className="flex items-center border-b-2 border-primary py-2 mb-4 max-w-xs">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Téléphone" aria-label="Full name" />
                </div> 
            </div>
            <div className="flex justify-start w-full px-2">
                <label className="label cursor-pointer">
                    <input type="checkbox" checked className="checkbox checkbox-primary" />
                    <span className="label-text">Remember me</span> 
                </label>
            </div>
            {/* <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                Sign Up
            </button>
            <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                Cancel
            </button> */}
        </form>
    </section>
  )
}

export default Main