"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import PushableButton from "@/components/PushableButton";

export default function Pricing() {
  const plans = [
    {
      name: "MVP Development Package",
      highlighted: true,
      price: 1999,
      features: [
        "Complete MVP development in 2-3 weeks",
        "Seamless integrations (payments, auth, etc.)",
        "30 days of free maintenance",
      ],
    },

    {
      name: "Growth Retainer Package",
      price: 2999,
      features: [
        "60 hours of development time per month",
        "Weekly strategy calls",
        "Continuous maintenance & optimization",
        "Flexible hours allocation",
      ],
    },
  ];

  return (
    <section
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className={`py-16 md:py-24 tracking-wider rounded-3xl`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-widest mb-2">
              Pricing
            </h2>
            <p className="text-5xl md:text-6xl italic font-serif">Options</p>
          </div>
        </div>

        <div className="space-y-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex  text-white flex-col md:flex-row justify-between items-start md:items-center p-8 font-bold rounded-2xl ${
                plan.highlighted ? "border border-orange-500" : ""
              }`}
            >
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-medium mb-6">{plan.name}</h3>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-white tracking-widest"
                    >
                      <CheckCircle className="w-6 h-6 inline-block mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <div className="text-center md:text-left">
                  <div className="text-6xl font-medium">${plan.price}</div>
                </div>
                <Link href={"https://cal.com/launchitoday/15min"}>
                  <PushableButton text="Get Started" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
