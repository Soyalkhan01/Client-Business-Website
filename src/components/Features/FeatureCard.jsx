function FeatureCard({ icon: Icon, title, description, }) {
  return (
    <div className="bg-pink-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >

      <Icon className="text-5xl text-pink-600 mx-auto mb-5" />

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;