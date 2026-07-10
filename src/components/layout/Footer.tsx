export default function Footer() {
  return (
    <footer className="bg-[#08090a] py-8 border-t border-white/5 relative z-20">
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex items-center justify-center">
        <p className="text-white/40 text-[13px] font-medium tracking-wide">
          © {new Date().getFullYear()} Anurag Anand. All rights reserved.     </p>
      </div>
    </footer>
  );
}
