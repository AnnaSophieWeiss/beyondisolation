import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <>
      <section>
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Microbial Communities – Ecology emerges beyond isolation
        </h1>
        <p className="mb-4">
          {`Hi! I'm Dr. Anna S. Weiss.
          I’m a microbiologist and microbial ecologist fascinated by how bacteria interact, form communities,
          and shape ecosystems. My work explores the unifying principles of bacterial ecology—going beyond
          traditional isolation to embrace the complexity of microbial life.
          My goal is to uncover the hidden patterns that drive microbial behavior and translate that understanding
          into broader ecological and evolutionary insights.
          This website is a growing collection of my research, ideas, and group vision. Thanks for stopping by!`}
        </p>
      </section>

      <div className="my-8">
        <BlogPosts />
      </div>
    </>
  )
}