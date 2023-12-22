// components/AboutUs.js
import React from 'react';

const Welcome = () => {
  return (
    <section id="about" className="px-3 bg-cover bg-center text-white py-32 pb-16 h-full" style={{ backgroundImage: "url('/images/about.jpeg')" }}>
      <div className="container mx-auto flex justify-center items-center h-full">
        <div className="text-center pt-10">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our CAYYCOF Fellowship</h2>
          <p className="text-gray-300">
            Thank you for visiting our website and exploring who we are.
          </p>

          {/* About Us Content */}
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-gray-300">
              At Christ Apostolic Campus Youth Fellowship (CACCYOF) Igboora, we extend a warm welcome to you. Our fellowship is built on love, faith, and the joy of fellowship. Whether you are a longtime member or a first-time visitor, we are excited to share our story with you.
            </p>

            <p className="text-gray-300 mt-4">
              The About Us page is a glimpse into the heart of our fellowship. Here, you will discover our mission, values, and the incredible journey that has shaped us into the fellowship we are today. We invite you to learn more about our beliefs, history, and the people who make up our vibrant congregation.
            </p>

            <p className="text-gray-300 mt-4">
              Feel free to explore the various sections on this page to get to know us better. If you have any questions or if there is anything else you would like to learn about, please dont hesitate to reach usout. We are here to connect, share, and grow together in faith and fellowship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
