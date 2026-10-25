import Image from "next/image";

const groups = [
  {
    title: "Development",
    items: [
      { name: "Swift", icon: "swift", description: "The language behind my Apple apps." },
      { name: "SwiftUI", icon: "swiftui", description: "Native interfaces for Apple platforms." },
      { name: "Xcode", icon: "xcode", description: "Building, testing, and shipping Apple apps." },
    ],
  },
  {
    title: "Backend & Publishing",
    items: [
      { name: "Supabase", icon: "supabase", description: "Database, authentication, and storage." },
      { name: "RevenueCat", icon: "revenuecat", description: "In-app purchases and subscriptions." },
      { name: "App Store Connect", icon: "app-store-connect.jpeg", description: "Managing app releases and store listings." },
    ],
  },
  {
    title: "Design & Assets",
    items: [
      { name: "Icon Composer", icon: "icon-composer", description: "Designing app icons for Apple platforms." },
      { name: "SF Symbols", icon: "sf-symbols", description: "Consistent symbols for Apple interfaces." },
      { name: "Affinity", icon: "affinity.webp", description: "Creating and refining app assets." },
      { name: "Photoshop", icon: "photoshop.webp", description: "Image editing and visual assets." },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { name: "Git & GitHub", icon: "github", description: "Version control and code collaboration." },
      { name: "Notion", icon: "notion", description: "Ideas, project plans, and documentation." },
      { name: "TestFlight", icon: "testflight.webp", description: "Beta testing apps and collecting feedback." },
      { name: "ASO Engine", icon: "aso-engine", description: "My own tool for app localization." },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="tech-stack" id="stack" aria-labelledby="tech-stack-heading">
      <header className="tech-stack-heading">
        <p>Tech Stack</p>
        <h2 id="tech-stack-heading">What I Use</h2>
      </header>
      <div className="tech-stack-grid">
        {groups.map((group) => (
          <div className="tech-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((tool) => (
                <li key={tool.name}>
                  <span className="tech-icon">
                    <Image src={`/icons/${tool.icon.includes(".") ? tool.icon : `${tool.icon}.png`}`} width={40} height={40} alt="" />
                  </span>
                  <div><h4>{tool.name}</h4><p>{tool.description}</p></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
