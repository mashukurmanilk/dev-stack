import Logo from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand & Socials */}
          <div className="flex flex-col max-w-sm md:col-span-2">
            <img className="w-[98.4px] h-7 mb-6" src={Logo} alt="DevStack Logo"/>
            <p className="text-slate-500 text-[13px] leading-relaxed mb-6">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-4 text-[13px] font-medium text-slate-700">
              <a href="#" className="hover:text-pink-600 transition-colors">GitHub</a>
              <a href="#" className="hover:text-pink-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-pink-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Product */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[13px] font-bold text-slate-900 tracking-wider">PRODUCT</h4>
            <a href="#" className="text-[13px] text-slate-500 hover:text-pink-600 transition-colors">Home</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-pink-600 transition-colors">Technologies</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-pink-600 transition-colors">Projects</a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[13px] font-bold text-slate-900 tracking-wider">COMPANY</h4>
            <a href="#" className="text-[13px] text-slate-500 hover:text-pink-600 transition-colors">About</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-pink-600 transition-colors">Contact</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-pink-600 transition-colors">Careers</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[13px] font-bold text-slate-900 tracking-wider">LEGAL</h4>
            <a href="#" className="text-[13px] text-slate-500 hover:text-pink-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-[13px] text-slate-500 hover:text-pink-600 transition-colors">Terms of Service</a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-slate-400">© 2026 DevStack. All rights reserved.</p>
          <div className="flex gap-6 text-[13px] text-slate-400">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
