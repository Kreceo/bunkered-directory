import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#1c1c1c]">
        <div className="py-8 max-w-3xl flex justify-between m-auto px-4 md:px-0 flex-col md:flex-row">
          {/* Column 1 */}
          <div className="w-full text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase">Enquiries</h2>
            <ul className="text-white text-sm font-normal">
              <li className="mb-2">
                <a href="mailto:sales@bunkered.co.uk" className=" hover:underline">Sales Enquiries</a>
              </li>
              <li className="mb-2">
                <a href="mailto:editorial@bunkered.co.uk" className="hover:underline">Editorial Enquiries</a>
              </li>
              <li className="mb-2">
                <a href="https://www.bunkered.co.uk/suboffer" className="hover:underline">Subscribe to bunkered</a>
              </li>
              <li className="mb-2">
                <a href="mailto:bunkered@dcthomson.co.uk" className="hover:underline">Subscription Enquiries</a>
              </li>
              <li className="mb-2">
                <a href="https://www.bunkered.co.uk/dailyfeed" className="hover:underline">Daily Feed Newsletter</a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full text-white text-left md:text-center text-sm mt-4 md:mt-0">
            <h2 className="mb-6 font-semibold uppercase">Contact us</h2>
            <p className="text-[13px] mb-3">
              Spiers View<br />
              50 High Craighall Road,<br />
              Glasgow<br />
              G4 9UD
            </p>
            <p>
              0141 353 2222<br />
              <span className="text-[10px]">Calls may be recorded for training purposes.</span>
            </p>
          </div>

          {/* Column 3 */}
          <div className="w-full text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase mt-4 md:mt-0 md:text-right">Quick links</h2>
            <ul className="text-white text-sm font-normal">
              <div className="flex md:justify-end mb-2">
                <li className="mr-1">
                  <a href="https://www.bunkered.co.uk/" className="hover:underline">Home |</a>
                </li>
                <li className="">
                  <a href="https://www.bunkered.co.uk/golf-news" className="hover:underline">News</a>
                </li>
              </div>
              <div className="flex md:justify-end mb-2">
                <li className="mr-1">
                  <a href="https://www.bunkered.co.uk/visitscotland" className="hover:underline">VisitScotland |</a>
                </li>
                <li>
                  <a href="https://www.bunkered.co.uk/lessons" className="hover:underline">Lessons</a>
                </li>
              </div>
              <div className="flex md:justify-end mb-2">
                <li className="mr-1">
                  <a href="https://www.bunkered.co.uk/gear" className="hover:underline">Gear |</a>
                </li>
                <li className="mr-1">
                  <a href="https://www.bunkered.co.uk/blog" className="hover:underline">Blog |</a>
                </li>
                <li>
                  <a href="https://www.dcthomson.co.uk/terms-conditions//travel" className="hover:underline">Travel</a>
                </li>
              </div>
              <div className="flex md:justify-end mb-2">
                <li className="mr-1">
                  <a href="https://www.dcthomson.co.uk/privacy-policy/" className="hover:underline">Privacy policy |</a>
                </li>
                <li>
                  <a href="https://www.dcthomson.co.uk/terms-conditions/" className="hover:underline">Terms and Conditions</a>
                </li>
              </div>
              <li className="md:text-right">
                <span className="text-[10px]">Registered No. SC158316</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 py-4 flex items-center flex-col md:flex-row justify-center md:justify-between">
        <div className="flex space-x-2 mb-2 md:mb-0">
          <a href="https://twitter.com/BunkeredOnline" className="bg-[#4ca5e3] rounded-full p-1">
            <FontAwesomeIcon icon={faTwitter} className={'flex p-1.5 w-2.5 h-2.5 text-white'} />
          </a>

          <a href="https://www.facebook.com/BunkeredOnline" className="bg-[#356bc5] rounded-full p-1">
            <FontAwesomeIcon icon={faFacebookF} className={'flex p-1.5 w-2.5 h-2.5 text-white'} />
          </a>
        </div>
        <span className="text-xs text-[#4a4f55] sm:text-center">
          © 2023
          <a href="https://www.bunkered.co.uk/"> Bunkered</a>
        </span>
      </div>
    </footer>
  )
}