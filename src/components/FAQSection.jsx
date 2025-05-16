import { useState } from "react";

const FAQSection = () => {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "How do I book a tutor on TutorFlow?",
      answer:
        "Simply browse tutors by language or subject, select the one that fits your needs, and schedule a session at a time that works for you. You can book directly from their profile page.",
    },
    {
      question: "What subjects and languages can I learn?",
      answer:
        "TutorFlow offers tutoring in over 120 subjects, including languages like English, Spanish, and French, as well as academic subjects like math, science, and coding.",
    },
    {
      question: "How much does a tutoring session cost?",
      answer:
        "Pricing varies by tutor and session type. You can view each tutor’s rates on their profile. We also offer flexible payment options to suit your budget.",
    },
    {
      question: "Can I cancel or reschedule a session?",
      answer:
        "Yes! You can cancel or reschedule a session directly from your account dashboard, as long as it’s within the tutor’s cancellation policy (usually 24 hours before the session).",
    },
    {
      question: "Are the tutors qualified?",
      answer:
        "Absolutely. All tutors on TutorFlow are vetted for their expertise and experience. Many have years of teaching experience, and their profiles include ratings and reviews from other learners.",
    },
    {
      question: "What if I’m not satisfied with a session?",
      answer:
        "We strive for your satisfaction! If you’re not happy with a session, contact our support team within 48 hours, and we’ll work to resolve the issue, which may include a refund or credit for a future session.",
    },
  ];

  // Toggle accordion item
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 text-base-content">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center mb-12 text-base-content/80">
          Got questions? We’ve got answers.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-plus bg-base-200 rounded-lg"
            >
              <input
                type="checkbox"
                checked={openIndex === index}
                onChange={() => toggleAccordion(index)}
                className="peer"
              />
              <div className="collapse-title text-lg font-semibold text-base-content peer-checked:bg-primary peer-checked:text-white">
                {faq.question}
              </div>
              <div className="collapse-content text-base-content/80">
                <p className="mt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;