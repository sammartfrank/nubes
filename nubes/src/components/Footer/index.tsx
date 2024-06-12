import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="container mx-auto text-zinc-400 p-6">
      {/* <p>© {new Date().getFullYear()} Manantiales Apart Hotels</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center md:text-left">
          <h3>Dirección</h3>
          <p>Alberti 445, B7600FHI Mar del Plata, Provincia de Buenos Aires</p>
        </div>
        <div className="text-center md:text-left md:flex md:flex-col md:flex-end">
          <h3>Contacto</h3>
          <p>Email: manantiales@manantiales.com.ar </p>
          <p>Teléfono:(54-223) 486-2222 / 1999</p>
        </div>
        <div>
          <h3>Síguenos</h3>
          <div className="text-center md:text-left flex flex-row gap-5">
            <Link
              href="https://www.facebook.com/manantiales"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/manantiales"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              href="https://www.twitter.com/manantiales"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
