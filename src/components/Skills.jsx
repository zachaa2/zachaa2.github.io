import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        {skills.map((skill) => (
          <li key={skill} className="p-4 bg-tansparant border-3 border-[#d4cdbc] hover:border-[#b8b2a3] transition shadow rounded text-center">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
