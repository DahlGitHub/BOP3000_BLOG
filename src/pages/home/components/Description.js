import Typewriter from 'typewriter-effect';
import logo from '../../../assets/logo/logospacing.png';

const Description = () => {
    return (
        <div className="bg-light" id="project">
          <div className="container py-5">
            <div class="row">

              <div class="col-md-6 col-sm-12 animate text-center">
                <div class="py-5 pb-5 container">
                 <img src={logo} width="300" class="img-fluid rounded"/>
                </div>
              </div>

              <div class="col-md-6 col-sm-12">
                <div class="py-5 pb-5 container">
                    <span class="text-number text-bg">01.</span>
                    <p class="text-title text-break">Bachelor Project</p>
                    <span class="text-sub-title text-break">Made by
                    <span class="text-bg">
                      <Typewriter 
                        options={{
                          strings: ['Henrik Lindam', 'Adrian Dahl', 'Jøran Bøsang', 'Martin Hodne'],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                          pauseFor: 2000,
                        }}
                      /></span>
                    </span>
                    <p class="text-content mt-4">
                    Målet vårt med prosjektet er å utvikle en applikasjon som gjør det enklere for grupper å
                    kommunisere, organisere, strukturere osv. arbeid innad i gruppen. Siden det finnes diverse
                    verktøy man kan ta i bruk allerede i dag, er planen å gjøre undersøkelser av grupper som
                    bruker andre verktøy for å se hva de liker og muligens savner i andre applikasjoner.
                    </p>
                    <br/>
                    <p class="text-content">Visjonen for applikasjonen Hexacore er en plattform som benytter ulike planleggingsverktøy
                    for effektivisering av arbeid, slik at grupper kan velge selv hva de trenger for plattformen.
                    Studenter som skal jobbe sammen i prosjekter eller organisasjoner med mange subgrupper
                    er de mest logiske sluttbrukerne mener vi.
                    </p>
         
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Description;