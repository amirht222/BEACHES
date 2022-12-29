import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            nisi id orci ullamcorper tempor. Etiam efficitur viverra ante, eget
            gravida purus auctor sit amet. Curabitur sollicitudin, arcu eu
            faucibus finibus, purus tellus pellentesque metus, ac sagittis est
            justo non felis. Morbi ornare, mi ullamcorper pellentesque varius,
            augue est consectetur tellus, ut ornare sapien dui non velit. Cras
            nec porta orci, a porttitor magna. Duis blandit vitae diam ac
            scelerisque. Nunc rhoncus eleifend bibendum. Duis ut finibus quam.
            Ut ac posuere purus. Suspendisse odio odio, ultricies non tortor id,
            porta porta ligula. In vel lorem eget turpis suscipit rutrum. Donec.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='border text-center'>
          <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
          <p className='py-4'>12 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Destination</label>
            <select className='border rounded-md p-2'>
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className='flex flex-col my-4'>
            <label>Check-In</label>
            <input className='border rounded-md p-2' type='date' />
          </div>
          <div className='flex flex-col my-2'>
            <label>Check-Out</label>
            <input className='border rounded-md p-2' type='date' />
          </div>
          <button className='w-full my-4'>Rates & Availablities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
