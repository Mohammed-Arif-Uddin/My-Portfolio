import Social from "./Social";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Social
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] hover:text-white transition-all"
          ></Social>
          {/* copy right */}
          <div className="text-muted-foreground">
            Copyright &copy; Mohammed Arif Uddin. All rights reserved.{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
