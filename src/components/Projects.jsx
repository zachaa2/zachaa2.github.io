import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map(({ title, description, repoUrl, liveUrl }) => (
          <div key={title} className="p-6 bg-transparent border-3 border-[#d4cdbc] hover:border-[#b8b2a3] transition shadow-lg rounded">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-4">{description}</p>
            <div className="flex space-x-4">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener" className="underline">
                  Project Link
                </a>
              )}
              <a href={repoUrl} target="_blank" rel="noopener" className="underline">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
