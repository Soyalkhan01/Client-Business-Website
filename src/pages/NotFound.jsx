import { Link } from "react-router-dom";
import { notFoundContent } from "../data/notFoundData";

function NotFound() {

  const Icon = notFoundContent.badge.icon;


{notFoundContent.decorations.map((cls, index) => (
  <div key={index} className={cls}></div>
))}
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-pink-50 via-white to-pink-100 overflow-hidden">

<div className="absolute w-32 h-32 rounded-full bg-pink-300/30 blur-2xl animate-float top-10 left-20"></div>

<div className="absolute w-24 h-24 rounded-full bg-pink-400/20 blur-xl animate-float2 bottom-20 right-20"></div>

<div className="absolute w-40 h-40 rounded-full bg-pink-200/30 blur-3xl animate-float3 top-1/2 left-1/2"></div>
      {/* Background Decorations */}

      <div className="absolute w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-30 -top-20 -left-20"></div>

      <div className="absolute w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      {/* Content */}

      <div className="relative z-10 text-center px-6">

      <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-medium">

<div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-medium">
  <Icon className="text-yellow-400 text-lg" />
  {notFoundContent.badge.text}
</div>


</div>

<h1 className="mt-6 text-[120px] md:text-[180px] font-black text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-pink-600 to-pink-400 animate-bounceSlow">

{notFoundContent.code}

</h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-800">
{notFoundContent.title}
        </h2>

        <p className="mt-5 max-w-xl mx-auto text-gray-600 leading-8">
{notFoundContent.description}
        </p>

<Link
  to={notFoundContent.button.link}
  className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-2xl bg-linear-to-r from-pink-600 to-pink-500 text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300"
>
  {notFoundContent.button.text}
</Link>

      </div>

    </section>
  );
}

export default NotFound;