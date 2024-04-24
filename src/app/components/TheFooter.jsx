import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-logo-white.png";

export default function TheFooter() {
  return (
    <footer
      id="footer"
      className="flex-shrink-0 justify-between px-5 lg:px-10 pt-12 lg:pt-14 pb-4 w-full bg-black text-white h-fit"
    >
      <div className="grid gap-y-12 grid-cols-1 lg:grid-cols-3 w-fit lg:w-full mx-auto">
        <div className="flex flex-col col-span-full lg:col-span-1">
          <Link href="/">
            <Image
              src={clutchLogo}
              alt="Clutch Bowling"
              className="w-[300px] h-auto"
            />
          </Link>
        </div>

        <ul className="flex flex-col gap-y-5 col-span-1 lg:mx-auto">
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/FAQ">FAQs</Link>
          <Link href="/patch-notes">Patch Notes</Link>
          <Link href="/contact">Contact</Link>
        </ul>

        <div className="flex flex-col gap-y-5 col-span-full lg:col-span-1 lg:mx-auto text-xl">
          <div className="flex flex-row items-start gap-3">
            <FaLocationDot className="mt-1" />
            <a
              href="https://maps.app.goo.gl/zoq8vx7NMeZvhW6D7"
              target="_blank"
              className="text-base"
            >
              370 Belmont St NE <br />
              Salem, OR 97301
            </a>
          </div>
          <div className="flex flex-row items-center gap-3">
            <FaPhone />
            <a className="text-base" href="tel:+15039675228" target="_blank">
              503-779-7796
            </a>
          </div>
          <div className="flex flex-row items-center gap-3">
            <MdEmail />
            <a
              className="text-base"
              href="mailto:sales@clutchbowling.com"
              target="_blank"
            >
              sales@clutchbowling.com
            </a>
          </div>
          <div className="text-3xl flex flex-row gap-x-5">
            <a
              href="https://www.linkedin.com/company/clutchbowling/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/clutchbowling" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/ClutchBowling" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/clutchbowling/" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="col-span-full text-center text-xs">
          © 2024 Clutch Bowling
        </div>
      </div>
    </footer>
  );
}
