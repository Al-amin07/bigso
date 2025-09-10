const ContactUsForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    const form = new FormData(e.target as HTMLFormElement);
    const name = form.get("name");
    const email = form.get("email");
    const website = form.get("website");
    const message = form.get("message");
    console.log({ name, email, website, message });
    console.log("Form submitted!");
  };
  return (
    <div className=" max-w-5xl mx-auto space-y-[100px] flex flex-col items-center justify-center p-6">
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-12 w-full mt-[80px] space-y-6">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand)] mb-3 lg:mb-5">
            Contact Us
          </h2>
          <p className="text-[#232323] text-lg lg:text-xl">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>

          <div className="space-y-3 mt-6 lg:mt-10">
            <div className="flex items-center text-lg md:text-xl space-x-3">
              <span className="text-orange-500">📧</span>
              <span>example@teamwebflow.com</span>
            </div>
            <div className="flex text-lg md:text-xl space-x-3">
              <span className="text-orange-500">🏢</span>
              <span>407A Ebert Summit Suite 375 Lake Leonardchester</span>
            </div>
            <div className="flex items-center text-lg md:text-xl space-x-3">
              <span className="text-orange-500">📞</span>
              <span>+44 123 654 7890</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 flex-1">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="w-full p-2 border  border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Website*"
            name="website"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="w-full p-2 border border-gray-300 rounded h-24"
          ></textarea>
          <button className="w-full bg-gradient-to-r from-[#9D4DC8] to-[#EA489A] text-white py-2 rounded-xl cursor-pointer flex items-center justify-center space-x-2 hover:bg-purple-700">
            <span>Take Me to the Crazy Zone</span>
            <span>✨</span>
          </button>
        </form>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212412.32316069148!2d-79.78227189402985!3d43.60013974165965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b322ec4918c75%3A0xfb330d877abf7e3d!2sNorth%20York%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sbd!4v1757477753419!5m2!1sen!2sbd"
          className="w-full h-[400px]"
          style={{ border: "0px" }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsForm;
