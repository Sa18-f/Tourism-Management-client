import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import SpotsCard from "../SpotsCard/SpotsCard";
// import { useState } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import Countries from "../Countries/Countries";




const Home = () => {
  const spots = useLoaderData();
  const firstSixSpots = spots.slice(0, 6);

  // typewriter
  const [text] = useTypewriter({
    words: ['Bali', 'Cox’s Bazar', 'Bangkok', 'Sundarban', 'Bandarban', 'Saint Martin'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div>
      <Header></Header>
      {/* Tourist spots */}
      <h1 className='lg:text-5xl text-3xl text-center my-8 font-bold'>Let’s find out about <br /> <span style={{ fontWeight: 'bold', color: '#3182ce' }}>
        {text}
      </span>
      </h1>
      <div className='grid lg:grid-cols-3 gap-4'>
        {
          firstSixSpots.map(spots => <SpotsCard
            key={spots._id}
            spots={spots}
          ></SpotsCard>)
        }
      </div>
      <Countries></Countries>
      {/* my section 1 */}
      <Fade>
        <section className="my-12">
          <h1 className="text-5xl font-bold">Start Your Vacation with<br /> Our Special Services!</h1>
          <div className="mt-10 grid lg:grid-cols-3 gap-5">
            {/* card 1 */}
            <div className="card glass">
              <figure><img src="https://i.ibb.co/8PQ0DHp/josiah-weiss-tth-Ks4-A7-XMY-unsplash.jpg" alt="car!" /></figure>
              <div className="card-body">
                <h2 className="card-title">Ship Cruises</h2>
                <p>Unlike ocean liners, which are used for transport, cruise ships typically embark on round-trip voyages to various ports of call, where passengers may go on tours known as shore excursions.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent">Book now!</button>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="card glass">
              <figure><img src="https://i.ibb.co/Ntjzqr8/event.jpg" alt="car!" /></figure>
              <div className="card-body">
                <h2 className="card-title">Event Tours</h2>
                <p>Celebrate local culture on one of our Special Event Tours. You will visit destination at its most vibrant, during a cultural event or festive season. You can create an event tour plan with our agency.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent">Book now!</button>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="card glass">
              <figure><img src="https://i.ibb.co/g4ppDrc/mountain.jpg" alt="car!" /></figure>
              <div className="card-body">
                <h2 className="card-title">Mountain Tours</h2>
                <p>The mountain destinations within a broader context and covers topics around the three major pillars: sustainable development and planning, investments and incentives, and operational issues.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent">Book now!</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      {/* my section 2 */}
      <section className="my-12">
        <div className="text-center my-5">
          <h1 className="text-5xl font-bold">Why Choose Us</h1>
          <p className="my-5">JourneyMingle is a travel search engine that helps you find the best travel options. Once you have <br /> found what you are  looking for, you are redirected to the airline or travel agent’s site <br />where you make your booking directly.</p>
        </div>
        <div className="grid grid-cols-4 gap-6 my-12">
          <div className="col-span-2 border-2 rounded-xl border-[#FBB56333] bg-[#FBB5630D] p-6">
            <img src="https://i.ibb.co/hmptg6V/Group-1.png" alt="" />
            <h4 className="card-title mt-4 mb-3">Handpicked Hotels</h4>
            <p className="card-description">You can use the same magic that powers our flight search to find your perfect stay anywhere. Hand Picked Hotels offers the best resorts on the Channel Islands, nestled just off the coast, offering an enchanting escape that feels both comfortably close to the eyes.</p>
          </div>
          <div className="col-span-2 border-2 rounded-xl border-[#29CEF633] bg-[#29CEF60D] p-6">
            <img src="https://i.ibb.co/j9CnsBb/Group-27.png" alt="" />
            <h4 className="card-title mt-4 mb-3">World Class Service</h4>
            <p className="card-description">We’re a search engine, so after you’ve found the best flight ticket you’ll book directly with the airline or travel provider on their site. This will give you the opportunity to add any loyalty information you would like and select your preferred flight options, such as seating.</p>
          </div>
          <div className="col-start-2 col-span-2 border-2 rounded-xl border-[#E9444433] bg-[#E944440D] p-6">
            <img src="https://i.ibb.co/T19Lg5V/Group-26.png" alt="" />
            <h4 className="card-title mt-4 mb-3">Best Price Guarantee</h4>
            <p className="card-description">Finding flights is easy here, over 100 million savvy travellers come to us each month to find cheap flight tickets, hotels and car hire. Here are a few simple tips on how to get the most out of your flight search. Save money and time Whether it’s the fastest flight or the smartest stay,</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;