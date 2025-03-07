import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#fafeff] py-10 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div>
          <Image
            src="https://wemeestore.com/wp-content/uploads/2025/01/About-Us-Image-Desktop-Mode.webp"
            alt="Custom Apparel and Corporate Gifting"
            width={800}
            height={500}
          />
        </div>
        <div className="text-lg leading-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">About WeMee</h2>
          <p className="text-gray-700 mb-4">
            At WeMee, we create impactful corporate gifting solutions that
            enhance brand identity, foster employee engagement, and build lasting
            relationships. With innovative and trend-driven ideas, we offer
            scalable, customizable, and globally accessible gifts designed to make a
            memorable impression.
          </p>
          <p className="text-gray-700 mb-4">
            Our commitment to premium quality, attention to detail, and timely
            delivery ensures every gift reflects your brand&apos;s excellence. Backed by
            dedicated client support, we make corporate gifting seamless,
            thoughtful, and truly meaningful.
          </p>
          <p className="text-gray-700">
            Partner with WeMee to turn gifts into lasting experiences!
          </p>
        </div>
      </div>
    </section>
  );
}
