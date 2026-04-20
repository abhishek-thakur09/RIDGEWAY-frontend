import React, { useState } from "react";
import api from "../Helper/Api";
import Event from "../data/event";

const AiPanel = () => {
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);

  

  const askAI = async (question) => {
    try {
      setLoading(true);

      const res = await api.post("/ai", {
        message: question,
        events: Event[0].events,
      });

      setAnswer(res.data);

    } catch (error) {
      console.log(error);

      setAnswer({
        title: "Error",
        summary: "Something went wrong.",
        riskLevel: "unknown",
        actionItems: [],
        confidence: 0,
      });

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0B1120] p-4 rounded-2xl text-white h-[490px] flex flex-col">
      <h2 className="text-cyan-400 font-bold mb-4">
        AI INVESTIGATION
      </h2>

      {/* Answer Box */}
      <div className="bg-slate-900 p-4 rounded-xl mb-4 flex-1 overflow-y-auto">

        {loading && (
          <p className="text-cyan-400 animate-pulse">
            Thinking...
          </p>
        )}

        {!loading && !answer && (
          <p className="text-gray-400">
            Select an incident question to generate AI analysis.
          </p>
        )}

        {!loading && answer && (
          <div>
            <h3 className="text-cyan-400 font-bold text-lg">
              {answer.title}
            </h3>

            <p className="mt-3 text-gray-200 leading-7">
              {answer.summary}
            </p>

            <p className="mt-3 text-sm">
              Risk Level:
              <span className="ml-2 text-yellow-400">
                {answer.riskLevel}
              </span>
            </p>

            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">
                Action Items
              </p>

              <ul className="list-disc pl-5 space-y-1">
                {(answer.actionItems || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-green-400 text-sm">
              Confidence: {answer.confidence}%
            </p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className=" flex flex-col space-y-1 ">
        <button
          onClick={() => askAI("What happened last night?")}
          className="bg-blue-950 rounded-2xl p-2 hover:bg-blue-800"
        >
          What happened last night?
        </button>

        <button
          onClick={() => askAI("What needs escalation?")}
          className="bg-blue-950 rounded-2xl p-2 hover:bg-blue-800"
        >
          What needs escalation?
        </button>

        <button
          onClick={() => askAI("What did drone verify?")}
          className="bg-blue-950 rounded-2xl p-2 hover:bg-blue-800"
        >
          What did drone verify?
        </button>
      </div>
    </div>
  );
};

export default AiPanel;