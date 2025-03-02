import React from "react";


const articles = [
    {
      time: "8 Mins Read",
      date: "02 Dec 20",
      title: "Salesforce to purchase workplace-chat tool Slack for nearly $28 billion.",
      description:
        "Slack has become indispensable for many businesses operating remotely during the pandemic.",
    },
    {
      time: "6 Mins Read",
      date: "01 Dec 20",
      title: "Biden’s economic team poised to challenge GOP’s renewed debt worries.",
      description:
        "The president’s ultimatum targeting the digital protections, known as Section 230.",
    },
    {
      time: "5 Mins Read",
      date: "28 Nov 20",
      title: "More than half of emergency small-business funds went to larger businesses.",
      description:
        "I neglect my talents far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      time: "5 Mins Read",
      date: "28 Nov 20",
      title: "More than half of emergency small-business funds went to larger businesses.",
      description:
        "I neglect my talents far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
  ];
function BlogWhatsNewSection(params) {
    return (
        <div className=" flex flex-row w-full  bg-hite rounded-lg ">
            {/* Header Section */}
            <div className="basis-1/3 bg-[url('public/assets/blob/blob.svg')] py-14 bg-contain bg-bottom bg-no-repeat w-full">
                <div className="bg-white/80 backdrop-blur-3xl h-full px-10">
                    <h2 className="text-4xl font-bold">What’s New?</h2>
                    <p className="mt-4 text-gray-600">
                        where expert and undiscovered <span className="font-semibold">voices</span> can share their{" "}
                        <span className="font-semibold">writing</span> on any topic.
                    </p>
                </div>
            </div>

            {/* Articles Section */}
            <div className="basis-2/3 rounded-lg bg-[url('public/assets/blob/blob.svg')]   bg-contain bg-top bg-no-repeat">
                <div className="p-6 rounded-lg bg-white/90 backdrop-blur-3xl py-10 px-10">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="border-b py-6 flex flex-col md:flex-row md:justify-between md:items-center"
                        >
                            <div className="text-gray-500 text-sm flex flex-col text-sm">
                                <span className="font-semibold text-xs bg-green-200 rounded-lg text-green-700 px-2 py-1">{article.time}</span>
                                <span className="px-2 pt-1">
                                {article.date}
                                </span>
                            </div>
                            <div className="md:w-2/3">
                                <h3 className="font-semibold text-lg">{article.title}</h3>
                                <p className="text-gray-500">{article.description}</p>
                            </div>
                            <div>
                                <a href="#" className="text-black font-semibold hover:underline">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default BlogWhatsNewSection;