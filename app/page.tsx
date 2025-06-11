import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <>
      <section>  
        <h1 className="mb-8 text-4xl font-semibold tracking-tighter">
          microbial communities – ecology emerges beyond isolation
        </h1>
         <div className="w-45 h-13 shrink-0">
          <img
            src="/kchip_thin.jpeg"
            alt="Anna S. Weiss"
            className="rounded-lg shadow object-cover w-full h-full"
          />
        </div>
        <br/>
        <p className="mb-2">
          Hi, I'm Dr. Anna S. Weiss.</p>
          <p className="mb-4">
          I’m a microbiologist and microbial ecologist fascinated by how bacteria interact, form communities,
          and shape ecosystems. My work explores the unifying principles of bacterial ecology. Going beyond
          studying bacteria in isolation helps us embrace the complexity of microbial life. 
          My goal is to uncover the hidden patterns that drive microbial behavior and translate that understanding
          into broader ecological and evolutionary insights.</p>
          <p className="mb-4"> 
          This website is a growing collection of my research, ideas, and vision. Thanks for stopping by!</p>
        
      </section>

       
    </>
  )
}