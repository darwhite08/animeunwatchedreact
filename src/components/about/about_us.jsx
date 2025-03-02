import React from "react";

const teamMembers = [
  {
    name: "Mia Ward",
    title: "Founder & CEO",
    image: "https://picsum.photos/id/1/200/300", // Replace with actual image URL
  },
  {
    name: "Phoenix Baker",
    title: "Head of Engineering",
    image: "https://picsum.photos/id/1/200/300", // Replace with actual image URL
  },
  {
    name: "Lana Steiner",
    title: "Chief Operating Officer",
    image: "https://picsum.photos/id/1/200/300", // Replace with actual image URL
  },
];

const AboutUsPage = () => {
  return (
    <div className="w-full mx-auto px-6 py-12 text-center">
        <h1 className="text-6xl">About us</h1>
      <h2 className="text-3xl font-semibold">
        Meet our team of{" "}
        <span className="italic">creators</span>,{" "}
        <span className="italic">designers</span>, and world-class{" "}
        <span className="italic">problem solvers</span>
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        To be the company our customers want us to be, it takes an{" "}
        <span className="italic">eclectic group</span> of passionate operators.
        Get to know the people <span className="italic">leading the way</span>{" "}
        at Untitled.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-64 text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-full rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500 italic">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsPage;
