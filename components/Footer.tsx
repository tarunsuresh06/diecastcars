import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

import paymentImage from "@/public/payment.png";

import { FaLocationDot, FaPhone, FaRegEnvelope } from "react-icons/fa6";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white overflow-hidden">
      <div className="wrapper">
        <div className="justify-between items-start mb-4 mt-2 hidden lg:flex">
          <div>
            <h3 className="font-semibold text-2xl">Contact</h3>
            <div className="flex justify-start items-center my-4 gap-2">
              <FaLocationDot size={20} className="text-red-300" />
              <span>71 Pennington Lane Vernon Rockville, CT 06066</span>
            </div>
            <div className="flex justify-start items-center my-4 gap-2">
              <FaPhone size={20} className="text-red-300" />
              <span>+91 123 456 789</span>
            </div>
            <div className="flex justify-start items-center my-4 gap-2">
              <FaRegEnvelope size={20} className="text-red-300" />
              <span>contact@diecastcars.com</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-2xl">My Account</h3>
            <div className="flex flex-col items-start gap-2">
              <Link href="/" className="hover:text-red-300 font-medium">
                My Account
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Order History
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Wish List
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Returns
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-2xl">Extras</h3>
            <div className="flex flex-col items-start gap-2">
              <Link href="/" className="hover:text-red-300 font-medium">
                Brands
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Gift Certificates
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Affiliate
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Specials
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Site Map
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-2xl">Information</h3>
            <div className="flex flex-col items-start gap-2">
              <Link href="/" className="hover:text-red-300 font-medium">
                About Us
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Delivery Information
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Privacy Policy
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Terms & Conditions
              </Link>
              <Link href="/" className="hover:text-red-300 font-medium">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full lg:hidden">
          <AccordionItem value="item-1">
            <AccordionTrigger>Contact</AccordionTrigger>
            <AccordionContent>
              <div className="flex justify-start items-center my-4 gap-2">
                <FaLocationDot size={20} className="text-red-300" />
                <span>71 Pennington Lane Vernon Rockville, CT 06066</span>
              </div>
              <div className="flex justify-start items-center my-4 gap-2">
                <FaPhone size={20} className="text-red-300" />
                <span>+91 123 456 789</span>
              </div>
              <div className="flex justify-start items-center my-4 gap-2">
                <FaRegEnvelope size={20} className="text-red-300" />
                <span>contact@diecastcars.com</span>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>My Account</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-start gap-2">
                <Link href="/" className="hover:text-red-300 font-medium">
                  My Account
                </Link>
                <Link href="/" className="hover:text-red-300 font-medium">
                  Order History
                </Link>
                <Link href="/" className="hover:text-red-300 font-medium">
                  Wish List
                </Link>
                <Link href="/" className="hover:text-red-300 font-medium">
                  Returns
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Extras</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-col items-start gap-2">
                  <Link href="/" className="hover:text-red-300 font-medium">
                    Brands
                  </Link>
                  <Link href="/" className="hover:text-red-300 font-medium">
                    Gift Certificates
                  </Link>
                  <Link href="/" className="hover:text-red-300 font-medium">
                    Affiliate
                  </Link>
                  <Link href="/" className="hover:text-red-300 font-medium">
                    Specials
                  </Link>
                  <Link href="/" className="hover:text-red-300 font-medium">
                    Site Map
                  </Link>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Information</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col items-start gap-2">
                <Link href="/" className="hover:text-red-300 font-medium">
                  About Us
                </Link>
                <Link href="/" className="hover:text-red-300 font-medium">
                  Delivery Information
                </Link>
                <Link href="/" className="hover:text-red-300 font-medium">
                  Privacy Policy
                </Link>
                <Link href="/" className="hover:text-red-300 font-medium">
                  Terms & Conditions
                </Link>
                <Link href="/" className="hover:text-red-300 font-medium">
                  Contact Us
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Separator className="hidden lg:block" />
        <div className="flex flex-col justify-center items-center gap-4 mt-8 md:flex-row md:justify-between">
          <p>
            &#169; copyright 2024 -{" "}
            <Link className="hover:text-red-300 font-medium" href="/">
              DieCastCars
            </Link>
          </p>
          <Image
            src={paymentImage}
            className="md:w-[250px]"
            width={200}
            height={200}
            alt="payment"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
