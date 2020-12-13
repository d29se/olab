import React from 'react'
import Link from 'next/link'
// Style
import style from "./research.module.scss"
// Components
import FlaskSvg from "../../components/Svg/FlaskSvg"
import FloatingGoTopButton from "../../components/FloatingGoTopButton/FloatingGoTopButton"


function HandPipette() {
  return <img src="/images/hand-pipette.png" className={style.pipette} alt="Hands pipette" ></img>
}

function ResearchesList() {
  const researches = [
    {
      id: 1,
      name: "Technology Development",
      anchor: "#techdev"
    },
    {
      id: 2,
      name: "Proteasome Inhibitors",
      anchor: "#proteainhib"
    },
    {
      id: 3,
      name: "Proteases in cancer and immunity",
      anchor: "#proteaincancer"
    },
    {
      id: 4,
      name: "Microbial Proteases",
      anchor: "#microprotea"
    },
    {
      id: 5,
      name: "Proteases associated with neurodegeneration",
      anchor: "#proteaneurogen"
    },
  ]
  return (
    <div className={style.researchesList}>
      <ul>
        {researches.map((research) => {
          return (
            <li key={research.id}>
              <Link href={research.anchor} >
                <a className={style.researchesListElement} >
                  <FlaskSvg />
                  {research.name}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>

      <HandPipette />

    </div>
  )
}


function Research() {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <p className={style.headingTitle}>Research</p>
      </div>

      <FloatingGoTopButton />
      <ResearchesList />

      <div className={style.research}>
        <h1 id="techdev">Technology Development</h1>
        <p>
          Previously, I developed a novel protease substrate profiling method that is universally applicable to all proteolytic enzymes. This technique, termed Multiplex Substrate Profiling by Mass Spectrometry (MSP-MS), utilizes a highly diversified library of rationally designed synthetic peptides. When proteases are incubated with this peptide mixture, cleavage products are quantified by LC-MS/MS. In the past two years, I have collaborated with David Gonzalez and we have made improvements to this assay so that it has higher throughput, improved quantitation and sensitivity and allows us to generate kinetic values for hundreds of cleavage events in parallel. I was invited to present this work at the 10 th General Meeting of International Proteolysis Society in Canada. In January 2020, I receive $50k in pilot funding from the UCSD Mother Milk Infant Center to apply the MSP-MS technology to understanding the role of proteases in human milk. In addition, to substrate specificity profiling, I have developed a point- of-care protease assay with electrical engineer, Drew Hall (Jacobs School of Engineering) that uses electromagnetic sensors to detect peptide cleavage. This device will be miniaturized so that it can be powered by a mobile phone device and has applications for at-home quantitation of neutrophil elastase activity in sputum of cystic fibrosis patients or for rapid quantitation of matrix metalloproteinases activity in wound fluid during dressing changes. Dr Hall and I were initially funded by CTRI pilot funds and were subsequently funded by NIH/NIBIB with a Trailblazer Award to further develop this technology. I have presented this work at the 11 th General Meeting of International Proteolysis Society in Czech Republic and 2019 ASBMB Symposium of Serine Proteases, Potomac, MD.
        </p>

        <h1 id="proteainhib">Proteasome Inhibitors</h1>
        <p>
          Previously, I developed several highly potent proteasome inhibitors that killed Plasmodiumfalciparum, the causative agent of malaria. These compounds showed little toxicity againsthuman cells or rodents. In the past two years, I have expanded my research program beyondmalaria and have validated that proteasome inhibitors were effective at killing a related parasite,Babesia divergens. In addition, I isolated and biochemically characterized proteasomes fromother eukaryotic human pathogens, such as the parasitic worm Schistosoma mansoni(collaboration with Conor Caffrey) and the protozoa Trichomonas vaginalis (collaboration withLars Eckmann, UCSD SOM) and have received NIH funding for both projects to develop potentand selective inhibitors. In addition, I received $165k from the EU to supervise and mentorpostdoctoral fellow Pavla Fajtova for two years in my lab. Her research is focused on developingproteasome inhibitors that are selective for T. vaginalis. Due to my expertise in proteasomeinhibitor research, I was invited to published a review article in FEBS and co-author a bookchapter for Burger&#39;s Medicinal Chemistry 8th Edition with Conor Caffrey. Outside of parasiteproteasomes, I have also performed extensive biochemical studies to uncover the functionaldifference between the human constitutive and immunoproteasomes. In collaboration, with BillGerwick, we have developed a set of highly potent and selective immunoproteasome inhibitorsand we have filed for a patent on this work. These inhibitors will be evaluated in animal modelsof auto-immune disease.
        </p>

        <h1 id="proteaincancer">Proteases in cancer and immunity</h1>
        <p>
          Proteases are known to play a central role in tumorigeneses and are often over-expressed and secreted in the tumor microenvironment. We determined that patients with malignant pancreatic cysts have high levels of the aspartyl protease, gastricsin and the serine protease, tripeptidyl          peptidase 1. In the past two years, we have developed an activity-based probe to stratify these patients and filed a patent. I have performed additional research in the cancer field to uncover the extracellular proteolytic profile of lung cancer cells lines and in urine of patients with bladder cancer. I received $15k in pilot award funding from the UCSD Academic Senate to pursue this research and generate data for an NIH or American Cancer Society grant proposal. For immune cells, I previously characterized proteolytic activity in neutrophil extracts and in a collaboration with Pieter Dorrestein, Nuno Bandeira and David Gonzalez have used this knowledge to determine that the proteases, neutrophil elastase and cathepsin G were responsible for excessive proteolysis in the lungs of patients with cystic fibrosis. Finally, Bill Gerwick and I have discovered cyclic peptides from marine bacteria that are potent inhibitors of neutrophil elastase and these may be developed further to treat cystic fibrosis.
        </p>

        <h1 id="microprotea">Microbial Proteases</h1>
        <p>
          Most of the research studies that I have been involved in, has focused on discovery of microbialproteases to understand their role in infectious disease. In particular, I have published extensivelyon proteases isolated from fungi, bacteria, viruses and worms.
        </p>

        <h2>I. Fungal proteases</h2>
        <p>
          I have biochemically characterized proteases from fungi that are pathogenic to humans and batswhile also discovering fungal proteases that protect our skin from Staphylococcus aureusinfections. In addition, I have designed fluorogenic substrates that can detect Candida proteasesin blood and patented this work. I have received NIH/NIAID funding to identify protease drugtargets in Coccidioides immitis, the causative agent of Valley Fever. Future work in this fieldwill focus on the development of fungal protease inhibitors, including proteasome inhibitors,while also evaluating the use of secreted fungal proteases as biomarkers for fungal infections.
        </p>
        <h2>II. Bacterial Proteases</h2>
        <p>
          I have uncovered the substrate specificity profile of Mycobacterium tuberculosis proteases thatare essential for long-term survival phagolysosomes and immunomodulation of hostinflammatory responses. These profiles were used to design fluorogenic substrates and activity-based probes for biochemical studies. In addition, I have characterized proteases that are secretedby bacteria in the gut microbiome and developed peptide inhibitors to target these enzymes. Incollaboration with Victor Nizet, we have discovered that bacterial proteases secreted from GroupA Streptococci and Pseudomonas aeruginosa modulate human immune responses by activatingIL-1β in an inflammasome-independent process. I have also developed fluorogenic substratesthat are cleaved by bacterial integral membrane proteases. These substrates have allowed us toscreen compounds libraries for inhibitors of these enzymes.
        </p>
        <h2>III. Viral Proteases</h2>
        <p>
          I performed substrate profiling studies on viral proteases that are found in HIV, hepatitis A virus,polio virus and human rhinovirus. In addition, I discovered that HIV protease cleaves the hostprotein, eIF3d, which promotes translation of viral proteins over host proteins. In a recentcollaboration with Ruben Abagyan and Carlo Ballatore, we discovered novel inhibitors thattarget the proteases in hepatitis C virus that potently targets the mutant protease found in drug-resistant strains. In April 2020, my group expressed the SARS-CoV-2 main protease and papain-like protease and have screened marine natural products and synthetic compounds to identifyinhibitors of these enzymes. I will continue to screen for potential SARS-CoV-2 proteaseinhibitors and have multiple collaborators from around the world who are providing me withcompounds to test.
        </p>
        <h2>IV. Worm Proteases</h2>
        <p>
          I am a member of the Center for Discovery and Innovation in Parasitic Diseases and havecollaborated extensively with Conor Caffrey and Jim McKerrow to discover new drugs to treatschistosomiasis, abdominal angiostrongyliasis and cercarial dermatitis in humans, and liver flukein livestock. I have also characterized proteases in Schistosoma mansoni and Angiostrongyluscostaricensis. Using a model worm species, Schmidtea mediterranea, I have collaborated withJim McKerrow to perform an in-depth functional characterization of the gut digestive enzymerepertoire in order to improve our understanding of protein digestion capabilities of worms.
        </p>

        <h1 id="proteaneurogen">Proteases associated with neurodegeneration</h1>
        <p>
          Cytosolic cathepsin B has been shown to participate in neurodegeneration and Alzheimer’sDisease. In collaboration with Vivian Hook, we have developed a pH selective inhibitor ofcathepsin B that potently targets this enzyme when localized in the neutral pH environment ofthe cytosol. The compound only weakly inhibits the enzyme when localized in the acidiclysosome. These studies were funded by an R01 grant to Vivian Hook (PI) and I (co-I) whichwill allow us to develop drug-like compounds that can selectively inactivate pathogeniccathepsin B in the cytosolic of cells. In addition, I have performed extensive studies onpresenilins-associated rhomboid-like protein, a mitochondrial membrane protease thatcontributes to mitochondrial dysregulation in Parkinson&#39;s disease.Neuropeptides are vital for cell-cell communication and function in the regulation of the nervousand endocrine systems. In collaboration with Vivian Hook, we subjected neuropeptide-containing dense core secretory vesicles to global phosphopeptidomics analyses by liquidchromatography-mass spectrometry. We identified numerous phosphorylated peptides derivedfrom neuropeptide precursors such as chromogranins, secretogranins, proenkephalin and pro-NPY. Vivian and I are now focused on understanding the functional role of all proteases that areinvolved in neuropeptide formation and degradation.
        </p>
      </div>

    </div>
  )
}

export default Research









