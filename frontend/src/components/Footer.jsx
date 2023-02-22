import styles from '../style'
import { slides, github } from '../assets'
import { ScrollToTop } from './ScrollToTop'

const Footer = () => (
  <section>
    <div class=" bg-gradient-to-b from-Tomato to-ChiliRed h-[110px]">
      <div class="max-w-2xl mx-auto text-white py-2">
        <div class="text-center">
          <div class="flex justify-center my-2">
            <div class="flex items-center border rounded-lg  px-2 w-40 mx-2">
              <a href="https://github.com/divya-ilona/Ishaan-App">
                <div class="flex flex-wrap">
                  <img src={github} class="w-[25%] h-[25%] pt-2"></img>
                  <p class="px-4 text-sm">
                    {' '}
                    Find code <br /> on Github{' '}
                  </p>
                </div>
              </a>
            </div>
            <div class="flex items-center border rounded-lg px-2 w-40 mx-2">
              <a href="https://www.canva.com/design/DAFaRCQEeK8/smJLl00CdmTnPXGU6xpJAw/view?utm_content=DAFaRCQEeK8&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu">
                <div class="flex flex-wrap">
                  <img src={slides} class="w-[20%] h-[20%] pt-2"></img>
                  <p class="px-4 text-sm">
                    {' '}
                    Find the <br /> Pitch Deck{' '}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center text-sm text-white">
          <p class="order-2 md:order-1 md:mt-0">
            {' '}
            &copy; 2023 Ishaan App. All rights reserved.{' '}
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  </section>
)

export default Footer
