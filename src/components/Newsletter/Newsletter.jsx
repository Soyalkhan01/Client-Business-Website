import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Turnstile } from "@marsidev/react-turnstile";
import { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa"; 


function Newsletter() {

   const [email, setEmail] = useState("")
   const [error, setError] = useState("")
   const [loading, setLoading] = useState(false);
   const [token, setToken] = useState("")
   const [subscribed, setSubscribed] = useState(false);
   const turnstileRef = useRef(null);



const handleSubscribe = async () => {
  if (email.trim() === "") {
    toast.error("Please enter your email.");
    return;
  }
if (!token) {
  toast.error("Please verify that you are human.");
  return;
}


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }
  
const lowerEmail = email.trim().toLowerCase();

const invalidDomains = [
  "@gmi.com",
  "@gmial.com",
  "@gmai.com",
  "@gmal.com",
  "@gmail.co",
  "@gmail.con",
  "@hotmail.co",
  "@yaho.com",
  "@outlok.com"
];

if (invalidDomains.some(domain => lowerEmail.endsWith(domain))) {
  toast.error("Did you mean @gmail.com?");
  return;
}

  setLoading(true);
try {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID,
    {
      subscriber_email: email,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  setSubscribed(true);

  toast.success("🎉 Thank you for subscribing!");

  setError("");
  setEmail("");
  setToken("");

  turnstileRef.current?.reset();

  setTimeout(() => {
    setSubscribed(false);
  }, 3000);

} catch (err) {
  console.log(err);

  setError("Subscription failed. Please try again.");
} finally {
  setLoading(false);
}
};


  return (

    <section className="py-20 bg-pink-600">

      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-white">

          Stay Updated

        </h2>

        <p className="text-pink-100 mt-4">

          Subscribe to receive our latest beauty tips and exclusive offers.

        </p>


  <div className="mt-10">

    <div className="flex flex-col sm:flex-row gap-4">

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-5 py-4 rounded-xl bg-white outline-none"
      />

<Turnstile
  ref={turnstileRef}
  siteKey="0x4AAAAAAEEg2zuwBAyJ-MeL"
  onSuccess={(token) => {
    setToken(token);
  }}
  onExpire={() => {
    setToken("");
  }}
  options={{
    theme: "light",
    size: "flexible",
  }}
  
/>

<button
  onClick={handleSubscribe}
  disabled={loading || subscribed}
  className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:bg-pink-100 transition disabled:opacity-70 flex items-center justify-center gap-2 whitespace-nowrap"
>
  {loading ? (
    "Subscribing..."
  ) : subscribed ? (
    <>
      <FaCheckCircle className="text-green-600" />
      <span>Subscribed</span>
    </>
  ) : (
    "Subscribe"
  )}
</button>

    </div>

    {error && (
      <p className="mt-3 text-red-200 font-medium">
        {error}
      </p>
    )}

  </div>

      </div>

    </section>
  );
}

export default Newsletter;