import { PricingTable, type PlanLevel } from "../ui/pricing-table";

const features = [
    { name: "Basic Analytics", included: "starter" },
    { name: "Up to 5 team members", included: "starter" },
    { name: "Basic support", included: "starter" },
    { name: "Advanced Analytics", included: "pro" },
    { name: "Up to 20 team members", included: "pro" },
    { name: "Priority support", included: "pro" },
    { name: "Custom integrations", included: "all" },
    { name: "Unlimited team members", included: "all" },
    { name: "24/7 phone support", included: "all" },
];

const plans = [
    {
        name: "Starter",
        price: { monthly: 15, yearly: 144 },
        level: "starter",
    },
    {
        name: "Pro",
        price: { monthly: 49, yearly: 470 },
        level: "pro",
        popular: false,
    },
    {
        name: "Enterprise",
        price: { monthly: 99, yearly: 990 },
        level: "all",
    },
];

function PricingTableDemo() {
    return (
        <PricingTable
            features={features}
            plans={plans}
            defaultPlan="pro"
            defaultInterval="monthly"
            onPlanSelect={(plan: PlanLevel) => console.log("Selected plan:", plan)}
            containerClassName="py-12"
            buttonClassName="bg-orange-400 hover:bg-orange-500 text-white"
        />
    );
}

export { PricingTableDemo }