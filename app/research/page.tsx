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
        As a first step toward uncovering general principles of microbial community resilience, I am examining how core microbial functions hold up when 
        the environment shifts. Although overlapping abilities among species and their interaction networks are thought to underpin stability, we still lack a 
        clear, systematic picture of how specific traits and network structures shape whole‑community responses across conditions.
        To close this gap, I am building synthetic bacterial communities that deliberately differ in species makeup, metabolic skill sets, and interaction 
        patterns, drawing on strain libraries from marine habitats. 
        Using high‑throughput droplet microfluidics, I measure thousands of micro‑cultures at once, tracking substrate turnover, metabolite secretion, 
        and growth across gradients of temperature, pH, and nutrient complexity. This setup lets me test whether resilience springs from shared ecological 
        features, and how trait distributions, resource landscapes, and network architecture steer the outcome.
      </>
    ),
  },
  {
    id: 2,
    title: 'ecology of a synthetic gut community',
    imageSrc: '/omm12.png',
    description: (
      <>
        During my PhD, I used a synthetic gut bacterial community, the Oligo‑Mouse‑Microbiota (OMM12), as a tractable gut model to map how diet, host environment, and species loss 
        reshape microbial interaction networks and, in turn, key functions such as colonization resistance to Salmonella. Bottom‑up mono‑ and pair‑culture assays,
         metabolomics, and metabolic‑network reconstructions showed that both exploitative and interference competition organize the community, and that shifting 
         nutrient landscapes can redirect its structure. Dropout experiments pinpointed “keystone” strains that modulate the abundance
          and metabolic output of the entire consortium in a context dependent manner. Together, these projects contributed mechanistic and ecological knowledge 
          about how gut 
          communities assemble and protect their host. You can find the resulting publications here: 
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
        I combined single‑cell fluorescence microscopy, two‑strain competition assays, and mathematical modelling to reveal how the timing of 
        Colicin E2 production and cell lysis controls the battle between toxin‑producing and sensitive <em>Escherichia coli</em> strains.
        Delaying cell lysis lets producers stockpile more toxin, and this higher dose—not the exact release moment—ultimately decides the winner. 
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
        An overarching goal of my research program is to uncover the principles that govern
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
