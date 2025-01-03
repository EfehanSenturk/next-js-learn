import React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center space-x-10">
      <div className="md:w-1/2 h-screen">
        <Image
          alt="login"
          src="/login.jpg"
          width={1080}
          height={1920}
          className="w-full h-screen object-cover brightness-50"
        />
      </div>
      <div className="w-1/2 mt-10 pr-4">{children}</div>
    </div>
  );
};

export default AuthLayout;
