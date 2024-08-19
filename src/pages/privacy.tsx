import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-y-scroll overflow-x-hidden h-full bg-white">
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

      <section id="privacyPolicySection" className="p-12 relative">
        <div>
          <h1 className="text-3xl text-black font-bold mb-4">Privacy Policy</h1>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">Introduction</h3>
          <p className="text-base text-gray-700 mb-4">
            Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use Tourister App. We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review it periodically. Any questions can be sent to support@touristerapp.com.
          </p>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">Use of Cache System</h3>
          <p className="text-base text-gray-700 mb-4">
            This app uses cookies/cache in order to enhance the user's experience. By using this app, you allow items to be stored locally such as image caches and personal information.
          </p>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">License</h3>
          <p className="text-base text-gray-700 mb-4">
            We reserve the right to use all services and technology in this app exclusively. Any alteration, modification, misuse, or manipulation of Tourister App can be prosecuted by law. Unless otherwise stated, we own the rights to any intellectual property, source code, trademarks, and visuals presented in Tourister App.
          </p>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">Information Collected</h3>
          <p className="text-base text-gray-700 mb-4">
            <strong>Personal Information:</strong> When you sign in with Google, we collect your email address, profile photo, first name, and last name. The user might share optional information in order to build a profile and verify identity. We DO NOT sell your information. We use a third-party library to collect users' payment information, and we do not store it or have access to it.
          </p>
          <p className="text-base text-gray-700 mb-4">
            <strong>Usage Data:</strong> We DO NOT collect information about your interactions with the app such as pages visited, features used, and time spent on the app.
          </p>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">How We Use Your Information</h3>
          <p className="text-base text-gray-700 mb-4">
            <strong>Service Delivery:</strong> We use your personal information to provide our services, facilitate bookings, and communicate with you.
          </p>
          <p className="text-base text-gray-700 mb-4">
            <strong>Third-Party Libraries:</strong> We share limited information with third-party services that help the app function, such as Firebase for authentication (email, name, photo) and Stripe (payment details) for payment processing.
          </p>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">Data Sharing and Selling</h3>
          <p className="text-base text-gray-700 mb-4">
            <strong>No Sale of Personal Information:</strong> We do not sell your personal information to any third parties.
          </p>
          <p className="text-base text-gray-700 mb-4">
            <strong>Third-Party Sharing:</strong> We share limited information with third-party libraries solely to provide and enhance our services.
          </p>
          <p className="text-base text-gray-700 mb-4">
            We DO NOT share your name or email with Touristers, only your avatar image and display name, which you can modify to your choosing. In case of a legal dispute, we reserve the right to share any information with the corresponding authorities.
          </p>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">Data Security</h3>
          <p className="text-base text-gray-700 mb-4">
            <strong>Encryption:</strong> We use 64-bit end-to-end encryption to protect sensitive information like Verification Images and HTTPS security for in-transit communication.
          </p>
          <p className="text-base text-gray-700 mb-4">
            <strong>Data Protection:</strong> We implement appropriate technical and organizational measures to safeguard your data.
          </p>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">Your Rights</h3>
          <p className="text-base text-gray-700 mb-4">
            <strong>Data Deletion:</strong> You can delete your personal information at any time through the app. When you delete your information, it will be replaced with a placeholder to maintain app functionality, but we will not hold any personal information in our database, and this action cannot be undone.
          </p>

          <h3 className="text-xl text-black font-semibold mt-4 mb-2">Contact Us</h3>
          <p className="text-base text-gray-700 mb-4">
            If you have any questions or concerns about this Privacy Policy, please contact us at support@touristerapp.com. You can also visit our landing page to learn more or communicate with us.
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

export default PrivacyPolicy;
