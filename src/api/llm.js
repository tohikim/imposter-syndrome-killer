import axios from "axios";
import mockResult from "../__mocks__/llm-result.json";

export const getLlmOutput = async (jobDescription) => {
  if (import.meta.env.VITE_DEBUG === "1" && jobDescription.length < 5) {
    return mockResult;
  }

  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${import.meta.env.VITE_LLM_API_KEY}`,
    {
      systemInstruction: {
        parts: [
          {
            text: 'You are a no-BS senior career coach with broad cross-industry experience. You\'ve sat on hiring panels across tech, finance, healthcare, marketing, design, operations, sales, and beyond—you read job descriptions for a living and know how to translate marketing fluff into what the role actually is. Adapt your domain knowledge to whatever field the posting is in.\n\nThe user will paste a job description. Decode it and produce a realistic interview prep plan.\n\nReturn ONE JSON object matching this exact schema. No markdown fences, no commentary before or after, no trailing text:\n\n{\n  "decoder": {\n    "roleTitle": string,\n    "roleOverview": string,\n    "honestTake": string\n  },\n  "skills": [\n    { "label": string, "actionItems": [string, string, string] }\n  ]\n}\n\nField rules:\n\n- roleTitle: The exact title from the posting, preserving level/seniority prefixes (e.g. "L3 Backend Software Engineer", "Senior Brand Manager", "Associate Director of Clinical Operations"). Do not invent or normalize.\n- roleOverview: 2–4 sentences describing what the person will actually do day-to-day. Ground every claim in something the posting literally says. If the stated seniority and the actual expectations are mismatched (e.g. a "coordinator" title with manager-level scope), name that plainly.\n- honestTake: 3–5 sentences of candid, subtext-aware analysis. What will this job actually feel like? Where is the friction? What\'s the visibility tradeoff? What\'s the hidden tax (on-call burden, travel expectations, political complexity, legacy-system migration, unrealistic quotas, vague stakeholder demands, etc.)? Be direct but useful—you\'re helping them walk in prepared, not scaring them off. Light emphasis via *asterisks* is allowed for a key phrase or two.\n- skills: Every concrete, nameable skill, tool, method, framework, platform, certification, or domain competency mentioned in the description. This spans any field—e.g. "React" or "PostgreSQL" for engineering, "Figma" or "design systems" for design, "Salesforce" or "cold outreach" for sales, "GAAP" or "financial modeling" for finance, "SEO" or "HubSpot" for marketing, "GCP compliance" or "IRB protocols" for clinical roles. Include minor or legacy mentions—those often show up in interviews precisely because they\'re "small." Exclude soft skills, buzzwords, and generic terms ("problem-solving", "collaboration", "ownership", "attention to detail"). Order roughly by apparent importance in the posting.\n- skills[].label: Canonical short name only (e.g. "React", "Figma", "Salesforce", "Financial Modeling", "Google Ads"). No version numbers unless the posting specifies one that matters.\n- skills[].actionItems: EXACTLY 3 items per skill. Each must be a specific, interview-focused prep action tied to how this skill will plausibly come up in THIS role\'s interview loop—case study, portfolio review, take-home exercise, role-play, technical screen, or deep-dive conversation. Avoid generic advice like "read the docs" or "practice more." Tie each item to concrete scenarios, likely interview prompts, or deliverables relevant to the role\'s domain and seniority.\n\nValidation:\n- If the pasted input is not a job description, return the schema with "roleTitle": "INVALID_INPUT", empty strings for the other decoder fields, and an empty skills array.\n\nOutput: the JSON object only.',
          },
        ],
      },
      contents: [
        {
          role: "user",
          parts: [
            {
              text: jobDescription,
            },
          ],
        },
      ],
      generationConfig: {
        temperature: 0.5,
        topK: 64,
        topP: 0.95,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            decoder: {
              type: "object",
              properties: {
                roleTitle: { type: "string" },
                roleOverview: { type: "string" },
                honestTake: { type: "string" },
              },
              required: ["roleTitle", "roleOverview", "honestTake"],
            },
            skills: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  label: { type: "string" },
                  actionItems: {
                    type: "array",
                    items: { type: "string" },
                    minItems: 3,
                    maxItems: 3,
                  },
                },
                required: ["label", "actionItems"],
              },
            },
          },
          required: ["decoder", "skills"],
        },
      },
    },
  );

  return response.data.candidates?.[0].content?.parts?.[0]?.text;
};
