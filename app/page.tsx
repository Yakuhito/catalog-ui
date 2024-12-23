import { Logo } from '@/components/Logo'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center">
          <Logo className="w-32 h-32 mb-8" />
          <div className="max-w-4xl text-left space-y-6">
            <p>
            Benvinguts a CATalog, el registre descentralitzat que redefinirà la manera en què es indexen, verifiquen i gestionen els tokens i aplicacions de Chia. Dissenyat per a l&aposarquitectura basada en monedes única de la blockchain de Chia, CATalog està creat per oferir una solució descentralitzada, segura i escalable per gestionar metadades d&aposactius i entrades de registre. Aquesta plataforma innovadora representa un pas endavant significatiu per habilitar un ecosistema robust per a les aplicacions descentralitzades (dApps) basades en Chia.
            </p>
            <p>
            La història de CATalog comença amb el problema de la unicitat: un repte que durant molt de temps ha impedit el desenvolupament d&aposaplicacions descentralitzades complexes a Chia. A diferència de les blockchains tradicionals que es basen en sistemes basats en comptes i mapatges, el model de monedes de Chia requereix mètodes únics i eficients per rastrejar i verificar les entrades d&aposactius. CATalog supera aquests reptes amb solucions avançades com sistemes de registre basats en ranures, permetent una escalabilitat sense problemes i una integritat sense igual.
            </p>
            <p>
            Permetent als emissors de tokens gestionar directament les seves entrades, CATalog assegura que el registre es mantingui descentralitzat i fiable. A diferència de les solucions centralitzades, que depenen del control i l&aposadministració de tercers, CATalog aprofita el mecanisme de consens de Chia per oferir un registre immutable i resistent a la censura. Això significa que les entrades, actualitzacions i verificacions es duen a terme a la cadena, donant poder a la comunitat per construir i interactuar amb confiança.
            </p>
            <p>
            CATalog es llançarà el 2025, portant amb si una nova era de possibilitats per als usuaris i desenvolupadors de Chia. Estigueu atents a les novetats i prepareu-vos per experimentar un sistema de registre descentralitzat dissenyat per escalar amb el futur de la tecnologia blockchain.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
