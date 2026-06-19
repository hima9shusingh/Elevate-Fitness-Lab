import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gym-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/elevate-logo.svg" alt="Elevate Fitness Lab Logo" className="w-10 h-10" />
              <span className="font-display text-2xl tracking-wider uppercase">
                Elevate <span className="text-gym-orange">Fitness</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Helping people reach their fitness goals with modern facilities and experienced coaches.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-gym-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gym-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gym-orange transition-colors">Services</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-gym-orange transition-colors">Trainers</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-gym-orange transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6">Programs</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">Weight Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">Cardio Fitness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">CrossFit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">Yoga Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gym-orange transition-colors">Personal Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for the latest fitness tips and exclusive offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gym-charcoal border border-white/10 px-4 py-2 w-full focus:outline-none focus:border-gym-orange text-sm"
              />
              <button 
                type="submit" 
                className="bg-gym-orange px-4 py-2 font-semibold uppercase tracking-wider text-sm hover:bg-orange-600 transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Elevate Fitness Lab. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
