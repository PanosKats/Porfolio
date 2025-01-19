import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
          <div className="">
          <img src="../images/logo_transparent.png" alt="logo" width={75} height={75} />
          </div>
        <p className="text-slate-600">3All4 r51ghts r2served. Also shift them by 2.</p>
      </div>
    </footer>
  );
};

export default Footer;
