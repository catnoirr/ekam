import Image from "next/image";

const PurposeAndLeadership = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold text-blue-600">
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

      <h2 className="text-4xl font-bold text-blue-600">Leadership Spotlight</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {[
          {
            name: "Vaibhav Jaulkar",
            role: "Director",
            image:
              "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?t=st=1741367145~exp=1741370745~hmac=6a85ccd9c89f8a4224689d80527556617546359ab10f319c2c39002b5b865863&w=1380",
          },
          {
            name: "Priyanka Agrawal",
            role: "Director",
            image:
              "	https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?t=st=1741367243~exp=1741370843~hmac=c5b4c9509aa6cfe8c6645e273d614c86cbd2f304d86ecc5e0af1cdcf4d850d9a&w=740",
          },
          {
            name: "Yogita Vyas",
            role: "Director",
            image:
              "	https://img.freepik.com/free-photo/front-view-young-businessman-office-clothing_23-2148763859.jpg?t=st=1741367309~exp=1741370909~hmac=145091208bce2afd0d84b2d216fe2e20f97f6ba382fbf6ed5d67b9190fe88b34&w=1380",
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
      <h2 className="text-3xl font-semibold text-blue-600 mt-10 mb-3">
        Our Team
      </h2>
      <div className="relative w-full h-[30rem] mx-auto overflow-hidden shadow-lg">
        <Image
          src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15861.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid"
          alt="img"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default PurposeAndLeadership;
