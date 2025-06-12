import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact(){
  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <div className="flex justify-center space-x-6 text-2xl">
        <a
        	href="mailto:aaron.zachariah@gmail.com"
        	aria-label="Email"
        	className="text-gray-800 hover:text-blue-600 transition"
        >
        <FiMail />
        </a>
        <a
        	href="https://linkedin.com/in/aaron-zachariah"
        	target="_blank" rel="noopener noreferrer"
        	aria-label="LinkedIn"
        	className="text-gray-800 hover:text-blue-600 transition"
        >
        <FiLinkedin />
        </a>
        <a
        	href="https://github.com/zachaa2"
        	target="_blank" rel="noopener noreferrer"
        	aria-label="GitHub"
        	className="text-gray-800 hover:text-blue-600 transition"
        >
        <FiGithub />
        </a>
      </div>
    </section>
  )
}