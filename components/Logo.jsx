import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <img src="/LogoNew.png" width={74} height={74} priority alt="" />
    </Link>
  );
};

export default Logo;
