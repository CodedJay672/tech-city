import React from "react";

const Footer = () => {
  return (
    <secton className="wrapper bg-gay-300 border-t">
      <p className="text-center text-sm text-gray-600">
        Tech City Copyright since {new Date().getFullYear()}. All Rights
        Reserved
      </p>
    </secton>
  );
};

export default Footer;
