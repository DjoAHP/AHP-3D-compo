import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export function SocialLinks() {
  const socialLinks = [
    {
      icon: faFacebookF,
      href: 'https://www.facebook.com/profile.php?id=61552761924550',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      icon: faInstagram,
      href: 'https://www.instagram.com/ahp.studiovj/',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: faYoutube,
      href: '#',
      label: 'Youtube',
      color: 'hover:text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8">
          {socialLinks.map(({ icon, href, label, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`text-white transition-colors duration-200 ${color}`}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}