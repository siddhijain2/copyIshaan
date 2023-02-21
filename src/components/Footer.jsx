import styles from "../style";
import { slides, github } from "../assets";
import { footerLinks } from "../constants";
import { ScrollToTop } from "./ScrollToTop";

const Footer = () => (
  <section>
    <div class=" bg-gradient-to-b from-Tomato to-ChiliRed">
      <div class="max-w-2xl mx-auto text-white py-10">
        <div class="text-center">
          <div class="flex justify-center my-10">
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
              <a href="https://github.com/divya-ilona/Ishaan-App">
                <img src={github} class="w-7 md:w-8"></img>
                <div class="text-left ml-3">
                  <p class="text-xs text-gray-200">Find the code </p>
                  <p class="text-sm md:text-base"> on Github</p>
                </div>
              </a>
            </div>
            <div class="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
              <a href="https://www.canva.com/design/DAFaRCQEeK8/smJLl00CdmTnPXGU6xpJAw/view?utm_content=DAFaRCQEeK8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
                <img src={slides} class="w-7 md:w-8"></img>
                <div class="text-left ml-3">
                  <p class="text-xs text-gray-200">Find the </p>
                  <p class="text-sm md:text-base"> Pitch Deck </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p class="order-2 md:order-1 mt-8 md:mt-0">
            {" "}
            &copy; Beautiful Footer, 2021.{" "}
          </p>
          <div class="order-1 md:order-2">
            <span class="px-2">About us</span>
            <span class="px-2 border-l">Contact us</span>
            <span class="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  </section>
);

export default Footer;
