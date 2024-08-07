import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-12 flex flex-col lg:flex-row items-start gap-x-36 gap-y-10 bg-gradient-to-bl from-green/30 to-green/10 rounded-3xl">
      <Image
        src="/logo.svg"
        alt="Halal DevCo. logo"
        width={180}
        height={37}
        priority
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
        <div className="space-y-4">
          <h3 className="font-semibold text-2xl">Call Center</h3>
          <ul>
            {footerLinks.call_center.map((number, index) => (
              <li key={index}>{number}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-2xl">Location</h3>
          <ul>
            {footerLinks.location.map((loc, index) => (
              <li key={index}>{loc}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-2xl">Services</h3>
          <ul>
            {footerLinks.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-2xl">Quick Links</h3>
          <ul className="flex flex-col space-y-2">
            {footerLinks.quick_links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-2xl">Email</h3>
          <p>{footerLinks.email}</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-2xl">Social Network</h3>
          <ul className="flex flex-wrap gap-2">
            {footerLinks.social_network.map((social, index) => (
              <li key={index}>
                <Link href={social.href} aria-label={social.name}>
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;