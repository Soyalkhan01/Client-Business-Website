import { contactInfo } from "../../data/contactData";

function ContactInfo() {
  return (
    <>
    <div>
<h2 className="text-4xl font-extrabold text-gray-900">
<h2>{contactInfo.heading}</h2>
</h2>

<p className="text-pink-600 font-semibold mt-2">
<p>{contactInfo.subtitle}</p>
</p>

<div className="mt-10 space-y-8">

{contactInfo.cards.map((item, index) => {

const Icon = item.icon;

return (

<div
key={index}
className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
>

<div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">

<Icon className="text-pink-600 text-xl" />

</div>

<div>

<h3 className="font-bold">

{item.title}

</h3>

{item.href ? (

<a
href={item.href}
className="text-gray-600 hover:text-pink-600 transition"
>

{item.value}

</a>

) : (

<p className="text-gray-600">

{item.value}

</p>

)}

</div>

</div>

);

})}

</div>
    <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">

  <iframe
    title="Beauty Store Location"
src={contactInfo.map}
    width="100%"
    height="320"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />

</div>
    </div>
    
</>
  );
}

export default ContactInfo;