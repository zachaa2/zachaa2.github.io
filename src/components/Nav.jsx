export default function Nav() {
    return (
      <nav className="fixed top-0 w-full backdrop-blur-md py-4">
        <ul className="container mx-auto flex justify-center space-x-6">
          {['about','skills','projects'].map(id => (
            <li key={id}>
              <a href={`#${id}`}
                 className="hover:text-blue-600 capitalize">
                {id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  