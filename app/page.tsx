import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <>
      <section>
        <div className="w-45 h-13 shrink-0 mb-8">
          <img
            src="/kchip_thin.jpeg"
            alt="Anna S. Weiss"
            className="shadow object-cover w-full h-full"
          />
        </div>
        {/* Headline and primary image below it */}
        <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
          microbial communities – ecology emerges <em>beyond isolation</em>
        </h1>
        

        {/* Text next to a second picture with preserved aspect ratio */}
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <p className="mb-2">Hi, I'm Dr. Anna S. Weiss.</p>
            <p className="mb-4">
              I’m a microbiologist and microbial ecologist fascinated by how bacteria interact, form communities,
              and shape ecosystems. My work explores the unifying principles of bacterial ecology. Going beyond
              studying bacteria in isolation helps us embrace the complexity of microbial life. I'm fascinated by the emergent patterns that appear when microbes form the diverse and vibrant communities we observe in nature. Correspondingly, the goal of my research is to uncover the hidden patterns that drive microbial behavior in communities and translate that understanding into broader ecological and evolutionary insights.
            </p>
            <p className="mb-4">
              This website is a growing collection of my research, ideas, and vision. Thanks for stopping by!
            </p>
          </div>
         
        </div>
      </section>

    
    </>
  )
}
