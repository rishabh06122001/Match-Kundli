import React from 'react'
import NewKundli from './NewKundli';
import SaveKundli from './SaveKundli';

const KundliMatching = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
      'Jan', 'Feb', 'Mar', 'APR', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className=' mx-24 gap-4'>
        {/* heading div */}
        <div className='flex flex-col items-center'>
            <p className='text-2xl text-gray-800 font-bold'>Kundli Matching</p>
            <p className='text-gray-600 mb-0 text-lg'>Find your right one, through matchmaking</p>
            
        </div>
        <div className='flex items-center'>
              <div className=' h-px w-full bg-gray-100'></div>
              <img src='astrotalk-mini-logo.webp' alt='photo'></img>
              <div className='h-px w-full bg-gray-100'></div>
        </div>
        <div className='py-30 bg-white text-justify' >
          <p className='text-lg font-semibold text-gray-800'>Free Match Making - Kundli Milan & Gun Milan to Check Possibilities of Marriage</p>
          <p>Kundli milan or kundali matching is an important consideration to make when you decide to get married. Kundli matching, also called Gun matching or Horoscope matching is the first step towards marriage when the parents decide to match the kundlis of the girl and the boy to ensure the couple is compatible. The gun milan exercise has been a part of India's culture for 1000s of years now and continues to be so.

            <br/>So, if you too are the lucky one who is planning to get married, and hence looking for a horoscope matching with someone you have started liking, then Astrotalk can help you. The Kundali milan online software on Astrotalk has been prepared by the top astrologers of Astrotalk. The software caters to the free Kundli milan needs of the individuals and gives you insights; such as the number of guns matching for the girl and the boy, what they are compatible in, what their future would be like if they get married, and so much more. The online gun milan software can save you time and the hassle of going out to look for an astrologer to get the gun milan exercise done. Also, in case you have any doubts about the free kundali milan offered by Astrotalk, you can always connect with the astrologers on board and get those doubts sorted for yourself.</p>
        </div>
        <div className=' md:flex gap-6 xs:flex-col max-h-fit mt-10 '>
          <NewKundli/>
          <SaveKundli/>
        </div>
    </div>
  )
}

export default KundliMatching