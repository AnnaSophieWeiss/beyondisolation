export default function AboutPage() {
  return (
    <div className="w-full px-6 py-10 max-w-5xl mx-auto flex flex-col gap-6">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">About Me</h1>

      {/* Download link below the header */}
      <p className="text-base leading-relaxed mb-6">
        Download my{" "}
        <a
          href="/CV_AnnaWeiss_05:2025.pdf"
          download
          className="text-blue-600 underline"
        >
          CV as PDF
        </a>
        .
      </p>

      {/* Image and Intro side by side */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Text content */}
        <div className="flex-1 text-base leading-relaxed space-y-4">
          <p className="text-base leading-relaxed mb-6">
         I'm currently a Postdoctoral Research at {" "}
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
  focuses on microbial community dynamics, functional redundancy, bacterial interactions and synthetic gut microbiota models.
 
</p>
          
          <p>
            My background combines biophysics and microbiology, with both experimental and computational work on microbial interactions and bacterial community 
            ecology.I hold a PhD in Microbiology from LMU Munich, where I investigated synthetic gut communities and the microbiome's role in colonization ,
            resistance against enteropathogens in the group of Prof. Dr. Stecher.
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
            <strong>Since 05/2025:</strong> Walter Benjamin Fellow – Postdoctoral Fellowship awarded by the German Research Foundation (DFG)
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
            Weiss AS et al. (2024). "Cell Systems Voices: How can concepts from ecology enable insights about cellular communities?"<br />
            <em>Cell Systems</em>.{" "}
            <a
              href="https://doi.org/10.1016/j.cels.2024.09.010"
              className="text-blue-600 underline"
            >
              DOI
            </a>
          </li>
          <li>
            Weiss AS et al. (2023). "Nutritional and host environments determine community ecology and keystone species in a synthetic gut bacterial community"<br />
            <em>Nature Communications</em>.{" "}
            <a
              href="https://doi.org/10.1038/s41467-023-40372-0"
              className="text-blue-600 underline"
            >
              DOI
            </a>
          </li>
          <li>
            Weiss AS et al. (2021). "In vitro interaction network of a synthetic gut bacterial community"<br />
            <em>ISME J</em>.{" "}
            <a
              href="https://doi.org/10.1038/s41396-021-01153-z"
              className="text-blue-600 underline"
            >
              DOI
            </a>
          </li>
          <li>
            Weiss AS et al. (2020). "Dynamics of ColicinE2 production and release..."<br />
            <em>Scientific Reports</em>.{" "}
            <a
              href="https://doi.org/10.1038/s41598-020-61086-z"
              className="text-blue-600 underline"
            >
              DOI
            </a>
          </li>
        </ul>
        <p className="mt-2">
          Full list:{" "}
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
          <li>2024 – Dr. Hildegard and Heinrich Fuchs Award (LMU)</li>
          <li>2024 – VAAM PhD Award (Germany)</li>
          <li>2023 – PhD awarded with <em>summa cum laude</em>, LMU Munich</li>
          <li>2022 – NK & Irene Cheung Family Scholarship (Keystone Symposia)</li>
        </ul>
      </section>

      {/* Teaching & Supervision */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Teaching & Supervision</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Lecturer, ETH Zürich – Microbiology & Experimental Microfluidics</li>
          <li>Supervised BSc, MSc, and PhD students at ETH and LMU</li>
        </ul>
      </section>

      {/* Service */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Academic Service</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Peer reviewer for: Science, Nature Communications, ISME Journal, and others</li>
          <li>Conference organizer for MEEhubs 2026 (Microbial Ecology and Evolution)</li>
          <li>Postdoc representative at ETH Zürich</li>
        </ul>
      </section>
    </div>
  );
}
