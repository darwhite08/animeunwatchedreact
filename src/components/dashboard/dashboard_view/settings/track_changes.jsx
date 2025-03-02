import { CheckCircle, Clock } from "lucide-react";

const WorkflowTimeline = () => {
  const steps = [
    { type: "email", sent: true, daysAgo: "4 days ago", scheduled: false },
    { type: "wait", duration: "2 business days" },
    { type: "email", sent: false, scheduled: "Tomorrow" },
    { type: "wait", duration: "2 business days" },
    { type: "email", sent: false, scheduled: "In 4 days" },
  ];

  const insights = {
    active: 150,
    enrolled: 158,
    exited: 40,
    activePercentage: "85%",
    exitedPercentage: "20%",
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded-xl shadow-md">
      <div className="flex items-center space-x-2 text-gray-500 text-sm">
        <span>Enrolled by</span>
        <span className="font-semibold">Kyle’s workflow</span>
        <span className="ml-auto">3 days ago</span>
      </div>

      <div className="mt-4 relative pl-6">
        {steps.map((step, index) => (
          <div key={index} className="relative mb-6 flex items-start">
            {/* Vertical line */}
            {index !== steps.length - 1 && (
              <div
                className={`absolute left-3 top-5 h-full w-0.5 ${
                  index < 2 ? "bg-green-500" : "bg-gray-300"
                }`}
              ></div>
            )}

            {/* Icon */}
            <div className="relative z-10 flex-shrink-0 w-6 h-6 flex items-center justify-center bg-white">
              {step.type === "email" ? (
                step.sent ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <Clock className="text-gray-400" size={20} />
                )
              ) : (
                <Clock className="text-gray-400" size={20} />
              )}
            </div>

            {/* Step Content */}
            <div className="ml-4">
              {step.type === "email" ? (
                <div className="bg-gray-50 p-3 rounded-lg shadow-sm border">
                  <p className="text-gray-700 font-semibold">Automated email</p>
                  <p className="text-gray-500 text-sm">
                    {step.sent ? step.daysAgo : step.scheduled}
                  </p>
                  <p className="text-sm mt-2">
                    <strong>Hey Harry – I think we’re the right fit for you!</strong>
                    <br />
                    Hello Harry, I’ve seen that your company Hog...
                  </p>
                </div>
              ) : (
                <p className="text-gray-500">{step.duration}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between text-center">
        <div>
          <p className="text-lg font-bold">{insights.active}</p>
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-xs text-gray-400">{insights.activePercentage}</p>
        </div>
        <div>
          <p className="text-lg font-bold">{insights.enrolled}</p>
          <p className="text-sm text-gray-500">Enrolled</p>
          <p className="text-xs text-gray-400">100%</p>
        </div>
        <div>
          <p className="text-lg font-bold">{insights.exited}</p>
          <p className="text-sm text-gray-500">Exited</p>
          <p className="text-xs text-gray-400">{insights.exitedPercentage}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowTimeline;
