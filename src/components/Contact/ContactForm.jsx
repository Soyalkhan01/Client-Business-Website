import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";

import {
  contactFormContent,
  emailConfig,
  turnstileConfig,
  invalidDomains,
} from "../../data/contactData";

function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");
 const turnstileRef = useRef(null);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData ((prev) => ({
      ...prev,
      [name]:value,
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  
  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim()
  ) {
    toast.error("Please fill all fields");
    return;
  }
  
  const namePattern = /^[A-Za-z\s'-]{2,50}$/;
  
  if (!namePattern.test(formData.name)) {
    toast.error("Please enter a valid name.");
    return;
  }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(formData.email)) {
  toast.error("Please enter a valid email address.");
  return;
}

if (formData.subject.trim().length < 3) {
  toast.error("Subject must be at least 3 characters long.");
  return;
}

if (formData.message.trim().length < 10) {
  toast.error("Message must be at least 10 characters long.");
  return;
}

const lowerEmail = formData.email.trim().toLowerCase();

if (invalidDomains.some(domain => lowerEmail.endsWith(domain))) {
  toast.error("Did you mean @gmail.com?");
  return;
}
setLoading(true);

  try {
await emailjs.send(
  emailConfig.serviceId,
  emailConfig.templateId,
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  emailConfig.publicKey
);
    if (!token) {
  toast.error("Please verify that you are human.");
  return;
}
    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
setToken("");

turnstileRef.current?.reset();
    setTimeout(() => {
      setSuccess(false);
    }, 3000);

  } catch (error) {
    console.error(error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (

    <>
<form
  onSubmit={handleSubmit}
  className="bg-pink-50 p-8 rounded-2xl shadow-md"
>

      <div className="space-y-6">

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
placeholder={contactFormContent.placeholders.name}
          className="w-full p-4 rounded-lg border border-gray-300 outline-nonefocus:border-pink-600
focus:ring-4
focus:ring-pink-200
transition"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
placeholder={contactFormContent.placeholders.email}
          className="w-full p-4 rounded-lg border border-gray-300 outline-none focus:border-pink-600"
        />

        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
placeholder={contactFormContent.placeholders.subject}
          className="w-full p-4 rounded-lg border border-gray-300 outline-none focus:border-pink-600"
        />

        <textarea
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
placeholder={contactFormContent.placeholders.message}
          className="w-full p-4 rounded-lg border border-gray-300 outline-none focus:border-pink-600"
        ></textarea>

<div className="flex justify-center">
  <Turnstile
    ref={turnstileRef}
siteKey={turnstileConfig.siteKey}
    onSuccess={(token) => setToken(token)}
    onExpire={() => setToken("")}
    options={{
      theme: "light",
      size: "normal",
    }}
  />
</div>

<button
  type="submit"
  disabled={loading}
  className="w-full bg-linear-to-r from-pink-600 to-rose-500 text-white py-4 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 disabled:opacity-70"
>
{loading
  ? contactFormContent.button.loading
  : contactFormContent.button.idle}
</button>
      </div>


    </form>
{success && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-[90%] text-center animate-[fadeIn_.3s_ease]">

<div className="text-6xl text-green-500 flex justify-center mb-4">
  <FaCheckCircle />
</div>

<h2 className="text-3xl font-bold text-gray-800">
{contactFormContent.successPopup.title}

</h2>

<p className="text-gray-600 mt-3 leading-7 whitespace-pre-line">
  {contactFormContent.successPopup.description}
</p>

    </div>

  </div>
)}
    </>
  );
}

export default ContactForm;