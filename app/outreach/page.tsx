"use client";

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionItem = {
  title: string;
  year?: string;
  content: ReactNode;
};

export default function OutreachPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const outreachItems: AccordionItem[] = [
    {
      title: 'Cell Systems Voices – Ecology & Cellular Communities',
      year: '2024',
      content: (
        <>
          I was honored to contribute to the{' '}
          <a
            href="https://www.cell.com/cell-systems/fulltext/S2405-4712(24)00306-5"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cell Systems Voices collection
          </a>
          , writing about how ecological principles can provide insights into cellular communities. This article was part of a special series that amplifies perspectives on challenges and progress in science. I had the privilege to write alongside an inspiring group of scientists whose work I greatly admire.
        </>
      ),
    },
    {
      title: 'The Paper Podcast',
      year: '2024',
      content: (
        <>
          A student-led podcast from the University of Innsbruck. We talked about microbial communities, how they shape the world around us and what we found in our 2022 ISME Journal study.{' '}
          <a
            href="https://open.spotify.com/episode/4ixt2mPMfWoodoT6L6tVhp"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen to the episode
          </a>{' '}
          (German only).
        </>
      ),
    },
    {
      title: 'Zurich Pint of Science',
      year: '2024',
      content: (
        <>
          Part of an 
          {' '}
          <a
            href="https://pintofscience.ch"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            international festival
          </a>{' '}
          bringing scientists into pubs. I moderated a diverse set of talks about microbes over a beer! A lovely way to connect with curious minds. 
        </>
      ),
    },
    {
      title: 'Scientifica Zurich',
      year: '2023',
      content: (
        <>
          A large 
           {' '}
          <a
            href="https://scientifica.ch"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            public science fair
          </a>{' '}
          hosted by ETH and University of Zurich. I enjoyed discussing microbial ecology and showing how bacteria can surprise us.
        </>
      ),
    },
    {
      title: 'BIOspektrum Article – VAAM PhD Award',
      year: '2024',
      content: (
        <>
          After receiving the VAAM PhD award, I was invited to reflect on my doctoral work in an article for BIOspektrum, a community journal in Germany.{' '}
          <a
            href="https://link.springer.com/article/10.1007/s12268-024-2222-x"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the article
          </a>{' '}
          (German only).
        </>
      ),
    },
    {
      title: 'BIOspektrum Article – A synthetic gut bacterial community: the OMM12',
      year: '2023',
      content: (
        <>
          Together with two colleagues, I co-authored a piece on synthetic gut bacterial communities and our model system, the OMM12.{' '}
          <a
            href="https://link.springer.com/article/10.1007/s12268-023-1875-1"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the article
          </a>{' '}
          (German only).
        </>
      ),
    },
    {
      title: '"Behind the Paper" Article – How to become a bacteria whisperer',
      year: '2021',
      content: (
        <>
          A blog post I wrote for the Springer Nature community platform, reflecting on our ISME Journal study and what it means to "listen" to microbial conversations.{' '}
          <a
            href="https://communities.springernature.com/posts/exploring-bacterial-interactions-or-how-to-become-a-bacteria-whisperer"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the blog post
          </a>
          .
        </>
      ),
    },
  ];

  return (
    <div className="w-full px-4">
      <h1 className="text-4xl font-semibold mb-6">outreach</h1>

      <p className="mb-4">
        Not just microbial, but also human communities work best <em>beyond isolation</em>.
      </p>
      <p className="mb-4">
        I'm convinced that science is a collaborative endeavour that can only benefit from diverse perspectives. Correspondingly, I am committed to making my research accessible to both the scientific community and the broader public. Communicating my work beyond academia is a responsibility I deeply value and enjoy.
      </p>
      <p className="mb-8">Find a selected list of my past and current outreach activities below.</p>

      {outreachItems.map((item, index) => (
        <div key={index} className="mb-4 border-b border-neutral-300 dark:border-neutral-700 pb-2">
          <button
            onClick={() => toggle(index)}
            className="flex items-center justify-between w-full font-semibold text-base focus:outline-none"
          >
            <span className="flex items-center">
              {item.title}
              {item.year && <span className="text-sm text-gray-500 ml-2">({item.year})</span>}
            </span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
            />
          </button>
          {openIndex === index && (
            <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{item.content}</div>
          )}
        </div>
      ))}

      <h2 className="text-4xl font-semibold mt-10 mb-4">scientific conferences (selection)</h2>
      <ul className="list-disc space-y-2 pl-6 mb-8">
        <li>ISME19 2024 (Capetown, South Africa), <em>poster presentation</em></li>
        <li>7th Joint Conference DGHM & VAAM 2024 (Würzburg, Germany), <em>invited talk</em></li>
        <li>GRC Marine Microbes 2024 (Switzerland), <em>poster presentation</em></li>
        <li>15th Student Symposium on Molecular Medicine 2024 (Ulm, Germany), <em>invited talk</em></li>
        <li>Spring Meeting KNVM & NVMM 2024 (Arnheim, Netherlands), <em>invited talk</em></li>
        <li>MEEhubs2024 (Lausanne, Switzerland), <em>oral presentation</em></li>
        <li>Keystone Symposium: The Human Microbiome Ecology and Evolution 2024 (Banff, Canada), <em>oral presentation</em></li>
        <li>EMBO Workshop: Bacterial Networks BacNet2022 (Spain), <em>oral presentation</em></li>
        <li>ISME18 2022 (Lausanne, Switzerland), <em>oral presentation</em></li>
        <li>CRC1371 Symposium: Functional and Clinical Relevance of Microbiome Signatures 2022 (Munich, Germany), <em>oral presentation</em></li>
        <li>14th Seeon Conference 2022 (Seeon, Germany), <em>poster presentation</em></li>
        <li>12th International Symposium on Gut Microbiology, INRAE (online), <em>oral presentation</em></li>
        <li>73rd Annual Conference of the DGHM 2021 (Leipzig, Germany), <em>oral presentation</em></li>
        <li>EMBO-EMBL Symposium: New Approaches and Concepts in Microbiology 2021 (online), <em>poster presentation</em></li>
      </ul>
 <div className="mb-8">
        <img
          src="/talk.jpeg"
          alt="Scientific conference"
          className=" shadow object-cover w-full max-w-3xl mx-auto h-auto"
        />
      </div>
      <h2 className="text-4xl font-semibold mb-4">online</h2>
      <p className="mb-4">
        Follow me on{' '}
        <a
          href="https://bsky.app/profile/annasophieweiss.bsky.social"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bluesky
        </a>{' '}
        for more!
      </p>
    </div>
  );
}
