// components/Contact.js

const Contact = () => {
  return (
    <div className="flex flex-col max-w-8xl mx-auto my-8 mt-32 bg-gray-400 p-4 sm:flex-row">
      {/* Get in Touch */}
      <div className="flex-1 p-8 text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">Get in touch with Us</h2>
        <p className="text-gray-600 mb-4">
          Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu.
          Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
        </p>

        <address className="mb-4">
          <p>Address:</p>
          <p>545 Mavis Island<br />Chicago, IL 99191</p>
        </address>

        <p>Telephone:<br />+1 (555) 234-5678</p>
        <p>Email:<br />hello@example.com</p>

        {/* Embedded Map */}
        <div id="map" className="mt-4">
                  {/* Location Map */}
        {/* <div className="p-6 bg-white rounded-md shadow-md"> */}
          <h3 className="text-2xl text-blue-900 font-bold mb-4">Fellowship Location Map</h3>
          {/* Add your embedded map component here */}
          <iframe
            title="Church Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.432458708582!2d3.299081573926725!3d7.417297012134138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a427ce0e3fff1%3A0xb81fc41e48f5b5e1!2sIgbo-Ora%20High%20School!5e0!3m2!1sen!2sng!4v1702061635301!5m2!1sen!2sng"
            width="100%"
            height="300"
            // frameBorder="0"
            // allowFullScreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>        
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 p-8 mt-4 sm:mt-0">
        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-600">First Name:</label>
            <input type="text" id="first-name" name="first-name" className="mt-1 p-2 w-full rounded-md border-gray-300" required />
          </div>

          <div className="mb-4">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-600">Last Name:</label>
            <input type="text" id="last-name" name="last-name" className="mt-1 p-2 w-full rounded-md border-gray-300" required />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full rounded-md border-gray-300" required />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number:</label>
            <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full rounded-md border-gray-300" required />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message:</label>
            <textarea id="message" name="message" className="mt-1 p-2 w-full rounded-md border-gray-300" required />
          </div>

          <button type="submit" className="bg-gray-900 text-white font-bold p-2 rounded-md hover:bg-green-600 w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
