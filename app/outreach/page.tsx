'use client';
import { useState } from 'react';

type AccordionItem = {
  title: string;
  year?: string;
  content: React.ReactNode;
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
          Part of an international festival bringing scientists into pubs. I moderated a diverse set of talks about microbes over a beer! A lovely way to connect with curious minds.
        </>
      ),
    },
    {
      title: 'Scientifica Zurich',
      year: '2023',
      content: (
        <>
          A large public science fair hosted by ETH and University of Zurich. I enjoyed discussing microbial ecology and showing how bacteria can surprise us.
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
      title: 'BIOspektrum Article – Synthetic Gut Bacterial community: the OMM12',
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
      title: 'Behind the Paper – How to become a bacteria whisperer',
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
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Outreach</h1>

      <p className="mb-4">
        Not just microbial, but also human communities work best <em>beyond isolation</em>.
      </p>
      <p className="mb-4">
        I'm convinced that science is a collaborative endeavour that can only profit from diverse perspectives.
        Correspondingly, I am committed to making my research accessible to both the scientific community and
        the broader public. Communicating science beyond academia is a responsibility I deeply value and enjoy.
      </p>
      <p className="mb-8">Find a selected list of my past and current outreach activities below.</p>

      <h2 className="text-2xl font-semibold mb-4">Outreach and Science Communication</h2>

      {outreachItems.map((item, index) => (
        <div key={index} className="mb-4 border-b border-neutral-300 dark:border-neutral-700 pb-2">
          <button
            onClick={() => toggle(index)}
            className="text-left w-full font-semibold text-lg focus:outline-none"
          >
            {item.title}
            {item.year && <span className="text-sm text-gray-500 ml-2">({item.year})</span>}
          </button>
          {openIndex === index && (
            <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{item.content}</div>
          )}
        </div>
      ))}

      <h2 className="text-2xl font-semibold mt-10 mb-4">Scientific Conferences</h2>
      <ul className="list-disc pl-6 mb-8">
        <li>ISME</li>
        <li>sdfsd</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Online</h2>
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
        or check out my
        <a href="/blog" className="text-blue-600 underline ml-1">
          blog
        </a>{' '}
        for more!
      </p>
    </div>
  );
}
