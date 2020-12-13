
// Style
import style from "./index.module.scss"
// Components
import HomeCardBar from "../components/HomeCardBar/HomeCardBar"


function SkaggsNight() {
    return <  img src="/images/skaggs-night.jpg" className={style.skaggsnight} alt="Skaggs Building at night" ></img>
}
function SkaggsDay() {
    return <  img src="/images/skaggs-day.jpg" className={style.skaggsday} alt="Skaggs Building at night" ></img>
}


function Index() {

    return (
        <div className={style.container}>
            <div className={style.heading}>
                <div className={style.headingTitle}>
                    <p>Skaggs School of Pharmacy and</p>
                    <p>Pharmaceutical Sciences</p>
                </div>
            </div>
            <HomeCardBar />



            <div className={style.overview}>
                <p>
                    In addition our group is highly collaborative and we routinely generate substrate specificity
                    profiles of endo- and exo-peptidases that have been isolated from diverse organisms that includes ticks,
                    crustaceans and parasitic worms.
                    </p>
                    <SkaggsNight />
                <p>
                    My laboratory interests lie in the detection and characterization of proteolytic
                    
                    enzymes that are involved in disease. In particular, we are interested in understanding
                    the role of peptidases/proteases at host-pathogen and tumor-stroma interfaces.
                    Our research utilizes a mass spectrometry based platform technology to uncover the global
                    proteolytic activity in complex biological samples such as the secretions of cancer cells and infectious organisms.
                    </p>
                    <SkaggsDay />
                <p>
                    Our workflow also includes in-depth proteomic analysis to identify the enzymes. Knowledge of which peptidases are
                    functionally active in diseased tissue and not active in healthy tissue allow us to 1) develop peptidase
                    inhibitors to shut down the function, 2) generate peptidase-activated imaging agents to locate the disease
                    or 3) develop peptidase-activated drugs to aid in the delivery of toxic compounds to the site of disease.
                    Using this technology, we have uncovered novel proteolytic activities in gastric juice, pancreatic cyst fluid,
                    serum and neutrophil extracts.
                    </p>
                    
            </div>

        </div>
    )
}

export default Index
