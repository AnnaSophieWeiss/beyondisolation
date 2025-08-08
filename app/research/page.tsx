"use client";

import React from 'react';
import Image from 'next/image';

// Replace image files in public/ folder: kchip_project.jpg, gut_syncom.jpg, aquatic_systems.jpg, vaginal_microbiome.jpg
const projects = [
  {
    id: 1,
    title: 'functional redundancy and bacterial interactions in marine bacterial communities',
    imageSrc: '/kchip_project.jpg',
    description: (
      <>
      
        With my work, I aim to contribute to our understanding of how microbial communities respond to environmental change, and what makes their functional output 
        resilient. While functional redundancy and interaction networks are often assumed to confer stability, we still lack a mechanistic 
        understanding of how these features interact to shape whole-community behavior across conditions. To address this,  I am building synthetic bacterial communities that deliberately differ in species makeup, 
        metabolic skill sets, and interaction patterns, drawing on strain libraries from marine habitats, drawing on strain 
        libraries from marine systems. Using high-throughput droplet microfluidics, I measure thousands of communities in parallel, tracking substrate
        turnover and growth across gradients of temperature, pH, and nutrient complexity. This experimental platform allows me to test how resilience
        emerges from ecological structure — and how it is shaped by trait distributions, resource environments, and network architecture.

      </>
    ),
  },
  {
    id: 2,
    title: 'ecology of a synthetic gut community',
    imageSrc: '/omm12.png',
    description: (
      <>
        During my PhD, I used a synthetic gut bacterial community, the Oligo‑Mouse‑Microbiota (OMM12), as a tractable gut model to map how the biotic and abiotic context, 
        and community composition
        reshape microbial interaction networks and, in turn, key functions such as colonization resistance to <em>Salmonella enterica</em>. 
        Bottom‑up mono‑ and community co‑cultures,
         metabolomics, and metabolic‑network reconstructions showed that both syntrophic interactions and interference competition organize the 
         community, and that shifting 
         nutrient landscapes can redirect its structure. Dropout experiments pinpointed “keystone” strains that modulate the composition
          and metabolic output of the bacterial community in a context dependent manner. 
          Together, these projects contributed mechanistic and ecological knowledge about how gut 
          communities assemble, interact with their environment and protect their host. You can find the resulting publications here: 
           <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <a
              href="https://doi.org/10.1038/s41467-023-40372-0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Nature Communications, 2023
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1038/s41396-021-01153-z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              The ISME Journal, 2021
            </a>
          </li>
          <li>
            <a
              href="https://doi.org/10.1016/j.chom.2021.09.004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Cell Host & Microbe, 2021
            </a>
          </li>
        </ul>


      </>
    ),
  },
  
  {
    id: 3,
    title: 'timing of toxin release in bacterial warfare',
    imageSrc: '/singlcell.png',
    description: (
      <>
        Combining single‑cell fluorescence microscopy, two‑strain competition assays, and mathematical modelling helped us to reveal how the timing of 
        Colicin E2 production and cell lysis controls the battle between toxin‑producing and sensitive <em>Escherichia coli</em> strains.
        Delaying cell lysis lets producers stockpile more toxin, and this higher dose, not the exact release moment, ultimately decides the winner. 
        This work uncoupled “when” from “how much” in toxin warfare and showed how metabolic conditions (e.g., glucose vs. glycerol) tune these dynamics. 
        Read the full story here:

        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <a
              href="https://doi.org/10.1038/s41598-020-61086-z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Scientific Reports, 2020
            </a>
          </li>
        </ul>

      </>
    ),
  },
];

export default function ResearchPage() {
  return (
    <div className="w-full px-6 py-10 max-w-5xl mx-auto flex flex-col gap-10">
      {/* Intro */}
      <h1 className="text-4xl font-semibold">research projects</h1>
      <p className="text-lg leading-relaxed">
        An overarching goal of my research is to uncover the principles that govern
        microbial community stability and resilience across environmental contexts, using
        synthetic communities ranging from free-living (aquatic) to host-associated (gut,
        vaginal) systems. By studying how these ecosystems retain or lose function under controlled disturbances, 
        I aim to identify general rules and convert them into predictive ecological models. Grounded in biophysics and microbial ecology, 
        my work examines how physical, physiological, and ecological constraints shape microbial traits and interactions, and how those factors, 
        in turn, determine community composition, collective behavior, and long‑term functional robustness.
      </p>

      {/* Project Sections */}
      {projects.map((proj, idx) => {
        const isEven = idx % 2 === 1;
        return (
          <section
            key={proj.id}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              isEven ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-48 md:w-64 lg:w-72 aspect-square relative">
              <Image
                src={proj.imageSrc}
                alt={proj.title}
                fill
                className="object-contain 2xl shadow-md"
              />
            </div>

            {/* Text */}
            <div className="flex-1 space-y-2">
              <h2 className="text-2xl font-semibold">{proj.title}</h2>
              <p className="text-base leading-relaxed">{proj.description}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
