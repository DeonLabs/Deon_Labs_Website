"use client";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const dt = new Date();
  const isTabletorGreater = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <footer>
      <div className="w-[100vw] bg-Footer-mobile bg-no-repeat py-[15rem] md:bg-Footer-tablet md:bg-cover md:py-[22rem] lg:bg-Footer-Desktop ">
        <h1 className="relative top-[0.6rem] px-[3rem] text-center font-tektur text-2xl font-semibold md:px-[4rem] md:text-5xl lg:px-[20%]">
          YOU BUILD WEB3 PRODUCT, WE WILL BUILD ECOSYSTEM FOR YOU!!
        </h1>
      </div>
      <div className="glass mx-auto w-[90vw] rounded-b-none rounded-t-[32px] border px-[4%] py-[10px] font-tektur">
        <div className="mb-10 mt-10 flex flex-col gap-y-12 md:mb-14 md:mt-20 md:gap-y-16">
          <div
            className={`flex flex-row flex-wrap ${
              isTabletorGreater
                ? "justify-between"
                : "flex-wrap items-center justify-center gap-y-6"
            }`}
          >
            <div className="flex flex-row gap-x-10">
              <Link
                href="https:\\google.com"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Image
                  alt="google"
                  src="/footer/footer google.png"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https:\\linkedin.com"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Image
                  alt="linkedin"
                  src="/footer/footer linkedin.png"
                  width={24}
                  height={24}
                />
              </Link>
              <Link
                href="https:\\twitter.com"
                target="_blank"
                referrerPolicy="no-referrer"
              >
                <Image
                  alt="twitter"
                  src="/footer/footer twitter.png"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
            <div className="flex flex-row gap-x-10">
              <Link href="#" className="hover:text-[#FF306E]">
                Docs
              </Link>
              <Link href="#" className="hover:text-[#FF306E]">
                Career
              </Link>
              <Link href="#" className="hover:text-[#FF306E]">
                Ecosystem
              </Link>
            </div>
          </div>
          <div className="mx-auto text-center text-base">
            ©️ {dt.getFullYear()} DeonLabs - All Rights Reserved
          </div>
        </div>

        <Image
          alt="footer logo top"
          src="/footer/footer logo top.png"
          width={isTabletorGreater ? 278 : 104}
          height={isTabletorGreater ? 104 : 22}
          className={`footer-mask-top absolute top-0 ${
            isTabletorGreater ? "right-[4%]" : "right-[calc(4%+20px)]"
          }`}
        />
        <Image
          alt="footer logo bottom"
          src="/footer/footer logo bottom.png"
          width={isTabletorGreater ? 278 : 104}
          height={isTabletorGreater ? 104 : 22}
          className={`footer-mask-bottom absolute bottom-0 ${
            isTabletorGreater ? "left-[calc(4%-20px)]" : "left-[4%]"
          }`}
        />
      </div>
    </footer>
  );
}
export default Footer;
