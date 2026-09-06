import { Link } from "react-router-dom";
import {
  returnHero,
  returnSections,
  returnCTA,
} from "../data/returnData";
const HeroIcon = returnHero.icon;

function ReturnPolicy() {
  return (
    <>
      <section className="bg-linear-to-r from-pink-600 via-rose-500 to-pink-700 text-white py-24 rounded-b-[40px]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <HeroIcon className="text-6xl mx-auto mb-6" />

          <h1 className="text-5xl font-extrabold">
            {returnHero.title}
          </h1>

          <p className="mt-6 text-pink-100 text-lg">
            {returnHero.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 space-y-8">

{returnSections.map((item, index) => {
  const Icon = item.icon;

  return (            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-1 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600 text-2xl">
                  <Icon />
                </div>

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>
              </div>

              <p className="mt-6 text-gray-600 leading-8">
                {item.content}
              </p>
            </div>
);
})}

          <div className="bg-pink-600 text-white rounded-3xl p-10 text-center">

            <h2 className="text-3xl font-bold">
             {returnCTA.title}
            </h2>

            <p className="mt-4 text-pink-100">
              {returnCTA.description}
            </p>

            <Link
              to={returnCTA.button.link}
              className="inline-block mt-8 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              {returnCTA.button.text}
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}

export default ReturnPolicy;