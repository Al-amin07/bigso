import ImageBackground from "@/components/shared/ImageBackground";
import contactImage from "@/assets/contact.jpg";
const Contact = () => {
  return (
    <div className="">
      <ImageBackground image={contactImage}>
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-[64px] leading-tight max-w-3xl mx-auto text-[#E5025C] font-bold">
            Get in <span className="text-white">Touch</span> with Us
          </h1>
          <p className="text-white mt-6 text-2xl font-medium max-w-5/6 mx-auto">
            We’d love to hear from you! Whether you have questions, feedback, or
            want to discuss a project, our team is here to help.
          </p>
        </div>
      </ImageBackground>
    </div>
  );
};

export default Contact;
