import Image from "next/image";

const PurposeAndLeadership = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold text-blue-900">
        Our Purpose and Promise
      </h2>
      <p className="text-gray-600 mb-6">Our Values and Actions</p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: "https://wemeestore.com/wp-content/uploads/2024/12/Icon-3.svg",
            title: "Our Values",
            description:
              "Customer focus. Creativity and innovation. Quality and attention to detail. Collaboration and teamwork. Accountability and responsibility.",
          },
          {
            icon: "https://wemeestore.com/wp-content/uploads/2024/12/Icon-4.svg",
            title: "Our Vision",
            description:
              "Becoming the world's leading choice for customized merchandise, empowering individuals and businesses to express their unique identities proudly.",
          },
          {
            icon: "https://wemeestore.com/wp-content/uploads/2024/12/Group-1.svg",
            title: "Our Mission",
            description:
              "Empowering self-expression through personalized merchandise, making customization accessible to everyone, everywhere.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="py-6 px-2 border border-gray-200 bg-[#fafeff]"
          >
            <Image
              src={item.icon}
              alt="Custom Apparel and Corporate Gifting"
              width={50}
              height={100}
              className="mx-auto"
            />
            <h3 className="font-medium text-lg text-black my-1">
              {item.title}
            </h3>
            <p className="text-gray-800 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-blue-900">Leadership Spotlight</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {[
          {
            name: "Vaibhav Jaulkar",
            role: "Director",
            image:
              "https://wemeestore.com/wp-content/uploads/2025/01/Vaibhav-Jaulkar-1.webp",
          },
          {
            name: "Priyanka Agrawal",
            role: "Director",
            image:
              "	https://wemeestore.com/wp-content/uploads/2025/01/Priyanka-Agrawal.webp",
          },
          {
            name: "Yogita Vyas",
            role: "Director",
            image:
              "	https://wemeestore.com/wp-content/uploads/2025/01/Yogita-Vyas.webp",
          },
        ].map((leader, index) => (
          <div key={index} className="text-center">
            <div className="relative w-44 h-48 mx-auto overflow-hidden">
              <Image
                src={leader.image}
                alt={leader.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-3 font-medium text-black">{leader.name}</h3>
            <p className="text-gray-500 text-sm">{leader.role}</p>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-semibold text-blue-900 mt-10 mb-3">
        Our Team
      </h2>
      <div className="relative w-full h-[30rem] mx-auto overflow-hidden shadow-lg">
        <Image
          src="https://wemeestore.com/wp-content/uploads/2025/03/Team-Photo-Webp.webp"
          alt="img"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default PurposeAndLeadership;
