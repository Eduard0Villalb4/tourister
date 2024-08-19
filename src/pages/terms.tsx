import { useNavigate } from 'react-router-dom';

const TermsAndCondition = () => {
  const navigate = useNavigate();


  return (
    <div className="overflow-y-scroll overflow-x-hidden h-full bg-white  ">
      <div className="hidden md:block absolute -left-1 -top-48 -z-0">
        <img
          style={{ opacity: 0.05 }}
          src={'/assets/images/word.png'}
          alt={'Vector Dot Map of Mexico'}
          className='w-screen fixed transition -rotate-6'
        />
      </div>
      <header className="p-4 lg:py-2 lg:px-0 container mx-auto grid lg:flex lg:justify-between grid-cols-2 text-slate-700 z-20">
        <nav className="flex items-center">
          <a className='z-20' href="./">          
            <img style={{ padding: '12px', height: '52px' }} src="./assets/touristerLogoDark.png" alt="" />
          </a>

        </nav>
        <div className=" lg:flex">
          <button
            
            onClick={() => navigate('./contact')}
            className="px-4 py-3 bg-[#FF7F50]  hover:bg-[#FF7F50] hover:cursor-pointer text-white font-medium rounded-md mx-1 z-20"
          >
            Contact support
          </button>
        </div>

      </header>
      <section
        id="aboutSection"
        className="p-12 relative"
      >
        <div>
        <h1 className="text-3xl text-black font-bold mb-4">Terms and Conditions</h1>


    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Introduction</h3>
    <p className="text-base text-gray-700 mb-4">
        Welcome to our platform. By using our website and services, you agree to comply with and be bound by the following terms and conditions of use. Please read them carefully.
    </p>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Use of Cookies</h3>
    <p className="text-base text-gray-700 mb-4">
        This website uses cookies to monitor browsing preferences. If you allow cookies to be used, personal information may be stored for use by third parties.
    </p>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">License</h3>
    <p className="text-base text-gray-700 mb-4">
        Unless otherwise stated, we own the intellectual property rights for all material on the website. All intellectual property rights are reserved.
    </p>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">User Content & Responsibility</h3>
    <ul className="list-disc pl-6 mb-4">
        <li className="text-lg text-gray-500 font-semibold">
            Tourister requires users to provide accurate information and maintain the confidentiality of their account details.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
            Users agree to indemnify Tourister for any claims, damages, or liabilities arising from their use of the service, violation of the terms, or infringement of third-party rights.
        </li>
    </ul>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Refunds/Cancellations</h3>
    <p className="text-base text-gray-700 mb-4">
        For the sake of the local guide’s (Tourister’s) time and services, we highly discourage cancellations with less than 24 hours notice.
    </p>

    <ul className="list-disc pl-6 mb-4">
        <li className="text-lg text-gray-500 font-semibold">
        If you cancel 24 hours or less before the Trip date, you will be refunded 50% of the booking cost.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        If you cancel more than 24 hours before the Trip date, you will receive 75% of what you paid.
        </li>
    </ul>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Trip Modifications</h3>
    <ul className="list-disc pl-6 mb-4">
        <li className="text-lg text-gray-500 font-semibold">
        Trip modifications are limited and do not include changing the date.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        You can change the meet-up time within a specified range (e.g., 7am-2pm), meet-up location within a specified range (e.g., 1-10 miles), and modify additional comments made during checkout.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        For a new date, you must cancel and book a new Trip.
        </li>
    </ul>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Limitations of Liability</h3>
    <p className="text-base text-gray-700 mb-4">
        Tourister’s terms specify that it is a technology platform connecting users (i.e., Touristees) and local guides (i.e., Touristers) and does not provide tourist guide services itself. Consequently, Tourister disclaims liability for the acts or omissions of Touristers. Touristees accept that Tourister is not responsible for any accidents, incidents, or disputes that may occur during a trip.
    </p>
    <ul className="list-disc pl-6 mb-4">
        <li className="text-lg text-gray-500 font-semibold">
        We are not responsible for any incidents, damages, or lost items during the Trip.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        Touristees are responsible for their conduct and are expected to comply with all applicable laws and regulations.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        Touristers are responsible for their conduct and are expected to comply with all applicable laws and regulations.
        </li>
    </ul>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">General Good Faith Usage</h3>

    <ul className="list-disc pl-6 mb-4">
        <li className="text-lg text-gray-500 font-semibold">
        We do not encourage illegal activities.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        Users must use the service in good faith and follow all applicable laws.
        </li>
    </ul>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Tourister Security Process</h3>
    <ul className="list-disc pl-6 mb-4">
        <li className="text-lg text-gray-500 font-semibold">
        Touristers are vetted, with their contractor information and ID verified.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        They must have active insurance at the time of signing up.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        Touristers are liable for maintaining their insurance and any incidents that occur.
        </li>
    </ul>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Touristee Security Process</h3>
    <ul className="list-disc pl-6 mb-4">
        <li className="text-lg text-gray-500 font-semibold">
        Touristees (users) are required to provide ID to sign up and book a Trip.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        Additional charges may apply for exceeding mileage, time, or causing damages.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        Common extra charges include excessive cleaning or damages beyond normal wear and tear.
        </li>
    </ul>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">After Trip Charges</h3>
    <p className="text-base text-gray-700 mb-4">
    </p>
    <p className="text-base text-gray-700 mb-4">
    </p>
    <ul className="list-disc pl-6 mb-4">
        <li className="text-lg text-gray-500 font-semibold">
        You agree to pay extra charges for exceeding the allotted mileage, time, or causing damages.
        </li>
        <li className="text-lg text-gray-500 font-semibold">
        Disputes can be raised, but you must agree to pay for any additional charges.
        </li>
    </ul>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Limitations</h3>
    <p className="text-base text-gray-700 mb-4">
        In no event shall we be liable for any damages arising out of the use or inability to use the materials on our website or services.
    </p>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Governing Law</h3>
    <p className="text-base text-gray-700 mb-4">
        Your use of this website and any dispute arising out of such use is subject to the laws of [Your Country].
    </p>

    <h3 className="text-xl text-black font-semibold mt-4 mb-2">Changes to Terms</h3>
    <p className="text-base text-gray-700 mb-4">
        We reserve the right to make changes to these terms and conditions at any time without prior notice.
    </p>
        </div>
      </section>


      <footer className="py-8 px-4 md:px-8 lg:py-16 2xl:px-60 mx-auto relative">
        <div className="grid grid-cols-12 gap-8 text-slate-500 py-16">
          <div className="col-span-4 xl:col-span-4">
            <span className='font-semibold'>Tourister</span>
            <div className='flex space-x-16'>
              <ul>
                <li className="py-3">
                  <a href="./terms-and-conditions">Terms and Conditions</a>
                </li>
                <li className="py-3">
                  <a href="./privacy-policy">Privacy Policy</a>
                </li>
              </ul>
              <ul>
                <li className="py-3">
                  <a href="./contact">contact</a>
                </li>
                <li className="py-3">
                  <a href="./delete-account">Delete account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col lg:flexRow text-gray-400">
          <div className="flex items-center mb-2">
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="support@touristerapp.com"
            >
              <img
                className=" h-[28px] w-[28px]"
                src="./assets/email.svg"
                alt="Email"
              />
            </a>
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/"
            >
              <img
                className=" h-[28px] w-[28px]"
                src="./assets/tiktok.svg"
                alt="Tiktok"
              />
            </a>
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/"
            >
              <img
                className=" h-[28px] w-[28px]"
                src="./assets/instagram.svg"
                alt="Instagram"
              />
            </a>
          </div>
          <p className="text-center">Copyright 2023, All Rights Reserved by Tourister</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndCondition;