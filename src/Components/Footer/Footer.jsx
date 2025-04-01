import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center text-sm py-1 fixed bottom-0 w-full">
      <img src="/logo_footer.png" alt="Verizon Logo" className="h-14 mb-1" />

      <p className="text-sm">&copy; {new Date().getFullYear()} Verizon Launchpad. All Rights Reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;
