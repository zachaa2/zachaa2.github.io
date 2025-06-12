export default function Resume() {
    return (
      <section id="resume" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">My Resume</h2>
        <div className="w-full h-[80vh] border border-gray-300 rounded overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full"
          />
        </div>
      </section>
    );
  }