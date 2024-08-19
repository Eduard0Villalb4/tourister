import { useNavigate } from 'react-router-dom';

const Contact = () => {
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

      <section className="p-12 relative h-[70vh]">
        
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

export default Contact;
