// Footer.jsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-semibold text-white">SecureVault</h2>
          <p className="mt-2 text-sm text-gray-400">
            Your trusted password manager. Securely store and manage all your
            credentials in one place.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-medium text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/features" className="hover:text-white">Features</a></li>
            <li><a href="/pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h3 className="text-xl font-medium text-white mb-2">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white"><FaGithub size={20} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
          </div>
          <ul className="space-y-1 text-sm">
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SecureVault. All rights reserved.
      </div>
    </footer>
  );
}
