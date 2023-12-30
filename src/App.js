import "./App.css";
import StakeHolder from "./stakeHolder";

function App() {
  return (
    <>
      <StakeHolder
        entries={[
          {
            role: "Product Manager",
            description:
              "Oversees the platform's development aligning with market needs and business objectives.",
            icon: "fa-list-check",
          },
          {
            role: "Risk Compliance Officer",
            description:
              "Ensures that the platform adheres to financial regulations and compliance standards.",
            icon: "fa-stethoscope",
          },
          {
            role: "Data Security Analyst",
            description:
              "Responsible for protecting data integrity and preventing unauthorized access.",
            icon: "fa-magnifying-glass-chart",
          },
          {
            role: "Investment Strategist",
            description:
              "Develops investment strategies and financial products to meet client goals.",
            icon: "fa-sack-dollar",
          },
          {
            role: "UX/UI Designer",
            description:
              "Designs intuitive user interfaces for a seamless customer experience.",
            icon: "fa-object-group",
          },
          {
            role: "Customer Support Lead",
            description:
              "Manages client relations and handles customer inquiries and issues.",
            icon: "fa-phone",
          },
          {
            role: "Software Developer",
            description:
              "Builds and maintains the technological infrastructure of the platform.",
            icon: "fa-code",
          },
        ]}
      />
    </>
  );
}

export default App;
