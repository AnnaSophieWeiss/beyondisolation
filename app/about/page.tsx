export default function AboutPage() {
  return (
    <div className="w-full px-6 py-10 max-w-5xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">about me</h1>

      {/* Image and Intro side by side */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Text content */}
        <div className="flex-1 text-base leading-relaxed space-y-4">
          <p className="text-base leading-relaxed mb-6">
         I'm currently a Postdoctoral Research at the {" "}
          <a
             href="https://mse.ethz.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
        >
            Microbial Systems Ecology Group at ETH Zürich   
          </a>{" "}
  and a Walter Benjamin Fellow funded by the German Research Foundation (DFG). 
  My {" "}
  <a href="/research" className="text-blue-600 underline">
    research
  </a>{" "}
  focuses on microbial community dynamics, functional redundancy, bacterial interactions and synthetic bacterial community models (SynComs).
 
</p>
          
 <p>
   My background combines biophysics and microbiology, with both experimental and computational work on microbial interactions and bacterial community 
   ecology. I hold a PhD in Microbiology from LMU Munich, where I investigated synthetic gut communities and the microbiome's role in colonization
    resistance against enteropathogens in the group of {" "}
          <a
             href="https://www.mls.ls.tum.de/inmb/startseite/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
        >
            Prof. Dr. Stecher.
          </a>{" "}
   </p>
   {/* Download link below the header */}
    <p className="text-base leading-relaxed mb-6">
     Download my{" "}
      <a
      href="/CV_AnnaWeiss_05:2025.pdf"
      download
      className="text-blue-600 underline"
     >
      CV as PDF
    </a>{" "}
      or see details below.
    </p>
         
        </div>
        

        {/* Profile Image */}
        <div className="w-32 h-42 shrink-0">
          <img
            src="/Foto_AW.jpg"
            alt="Anna S. Weiss"
            className="rounded-lg shadow object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Education & Research Experience</h2>
        <ul className="space-y-2">
          <li>
            <strong>Since 06/2025:</strong> Walter Benjamin Fellow – Postdoctoral Fellowship awarded by the German Research Foundation (DFG)
          </li>
          <li>
            <strong>Since 04/2025:</strong> Lecturer, ETH Zürich – Department of Civil, Environmental and Geomatic Engineering
          </li>
          <li>
            <strong>Since 06/2023:</strong> Postdoctoral Researcher, Microbial Systems Ecology Group, Department of Environmental Microbiology, 
            Swiss Federal Institute of Aquatic Science and Technology (EAWAG), ETH Zürich
            <br />
            <em>Main Project:</em> Elucidating the effects of functional redundancy and bacterial interaction
            networks on functional stability of microbial communities
          </li>
          <li>
            <strong>2019–2023:</strong> PhD Microbiology, LMU Munich – <em>summa cum laude</em>
            <br />
            <em>Thesis:</em> Ecology of a Synthetic Gut Bacterial Community
          </li>
          <li>
            <strong>2016–2018:</strong> M.Sc. Physics & Biophysics, LMU Munich
             <br />
            <em>Thesis:</em> Influence of Delay in Toxin Expression on Two-Strain Bacterial Competition in Escherichia coli
          </li>
          <li>
            <strong>2012–2016:</strong> B.Sc. Physics, LMU Munich
            <br />
            <em>Thesis: </em> Quantum Confinement in Ligand-Stabilized Organometall Iodide Perovskite Nanocrystals
          </li>
        </ul>
      </section>

      {/* Selected Publications */}
      <section>
       
        <h2 className="text-2xl font-semibold mt-8 mb-4">Selected Publications</h2>
         
        <ul className="list-disc list-inside space-y-2">
          <li>
            Weiss AS et al. (2024). "Cell Systems Voices: How can concepts from ecology enable insights about cellular communities?"
            <em> Cell Systems</em>.{" "}
            <a
              href="https://doi.org/10.1016/j.cels.2024.09.010"
              className="text-blue-600 underline"
            >
              DOI
            </a>
          </li>
          <li>
    Weiss AS et al. (2023). "Nutritional and host environments determine community ecology and keystone species in a synthetic gut bacterial community."{" "}
    <em> Nature Communications</em>.{" "}
    <a
      href="https://doi.org/10.1038/s41467-023-40372-0"
      className="text-blue-600 underline"
    >
      DOI
    </a>
  </li>
          <li>
            Weiss AS et al. (2021). "In vitro interaction network of a synthetic gut bacterial community"
            <em> ISME J</em>.{" "}
            <a
              href="https://doi.org/10.1038/s41396-021-01153-z"
              className="text-blue-600 underline"
            >
              DOI
            </a>
          </li>
          <li>
            Weiss AS et al. (2020). "Dynamics of ColicinE2 production and release determine the competitive success of a toxin-producing bacterial population"
            <em> Scientific Reports</em>.{" "}
            <a
              href="https://doi.org/10.1038/s41598-020-61086-z"
              className="text-blue-600 underline"
            >
              DOI
            </a>
          </li>
        </ul>
      <br/>
      <p className="mt-2">
        See metrics and the full list on {" "}
        <a
          href="https://scholar.google.de/citations?user=tZUzybkAAAAJ&hl=de"
          className="text-blue-600 underline"
        >
          Google Scholar
        </a>
      </p>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Awards & Honors</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>2024 – Dr. Hildegard and Heinrich Fuchs Award, PhD Award of the Medical Faculty of the Ludwig-Maximilians University Munich (LMU)</li>
          <li>2024 – PhD Award of the Association for General and Applied Microbiology (VAAM), Germany</li>
          <li>2023 – PhD Thesis awarded with <em>summa cum laude</em>, Ludwig-Maximilians University Munich (LMU)</li>
          <li>2022 – NK & Irene Cheung Family Scholarship, Keystone Symposia</li>
          <li>2022 – EMBO Travel Grant, European Molecular Biology Organization (EMBL) </li>
          <li>2022 – Seeon Conference Poster Award, German Society for Hygiene and Microbiology (DGHM), Germany</li>
        </ul>
      </section>

      {/* Teaching & Supervision */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Teaching & Supervision</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Elective course for Master and PhD Students, Experimental Microfluidics, ETH Zürich.</li>
          <li>Bachelor Course, Practical course in Microbiology for Environmental Science, ETH Zürich.</li>
          <li>Co-Supervision of PhD Students, Microbial Systems Ecology Group, ETH Zürich.</li>
          <li>Bachelor Course, Practical course in Microbiology for Environmental Science, ETH Zürich.</li>
          <li>Supervised BSc and MSc students at ETH Zürich and LMU Munich </li>
          <li>Supervision of Master Course, Practical course : Animal Models, Microbiota and Pathogens, LMU Munich.</li>
        </ul>
      </section>

      {/* Service */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Academic and Institutional Service</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Peer reviewer for: Science, Nature Communications, ISME Journal, ISME Communications, npj and others</li>
          <li>Conference organization: Core organization team for MEEhubs2026, a hubbased conference on microbial ecology and evolution.</li>
          <li>Postdoc representative at the Institute for Biogeochemistry and Pollutant Dynamics (IBP), ETH Zürich.</li>
        </ul>
      </section>
    </div>
  );
}
