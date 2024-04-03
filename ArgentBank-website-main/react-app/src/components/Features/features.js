import React from "react";
import "../Features/features.css";
import IconChat from "../../assets/icons/icon-chat.webp";
import IconMoney from "../../assets/icons/icon-money.webp";
import IconSecurity from "../../assets/icons/icon-security.webp";
// Define the FeatureItem component
const FeatureItem = ({ icon, title, children }) => (
  <div className="feature-item">
    <img src={icon} alt={`${title} Icon`} className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{children}</p>
  </div>
);

const Features = () => {
  return (
    <div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <FeatureItem icon={IconChat} title="You are our #1 priority">
          Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.
        </FeatureItem>
        <FeatureItem icon={IconMoney} title="More savings means higher rates">
          The more you save with us, the higher your interest rate will be!
        </FeatureItem>
        <FeatureItem icon={IconSecurity} title="Security you can trust">
          We use top of the line encryption to make sure your data and money is always safe.
        </FeatureItem>
      </section>
    </div>
  );
};

export default Features;
