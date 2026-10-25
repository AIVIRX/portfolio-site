const features = [
  ["Visual Interface Builder", "Compose interfaces using editable components, nested containers, and modifiers."],
  ["SwiftUI Code Generation", "Convert the design’s component hierarchy into SwiftUI source code."],
  ["Layers & Pages", "Organize components, manage selection, and build multi-page designs."],
  ["Property Inspector", "Customize typography, colors, spacing, dimensions, and visual effects."],
  ["AI-Assisted Editing", "Generate and modify interfaces through natural-language instructions."],
  ["Flexible Canvases", "Design layouts for phone screens, widgets, and custom canvas dimensions."],
  ["Design Persistence", "Save documents locally or through iCloud Drive, with local fallback when iCloud is unavailable."],
  ["Image Export", "Capture designs as images and generate lightweight document previews."],
  ["SF Symbols Browser", "Explore native symbols and configure their appearance."],
  ["Adaptive Interface", "Platform-specific navigation, toolbars, inspectors, and canvas interactions."],
  ["Appearance Support", "Preview designs in light and dark modes."],
];

const architecture = [
  ["Models", "UIComponent, DesignPage, and DesignFile represent editable designs and their persistence format."],
  ["Views", "Feature-specific SwiftUI interfaces for the editor, canvas, inspectors, library, and design browser."],
  ["State Management", "Observable objects coordinate component changes, selection, viewport state, and document management."],
  ["Services", "Dedicated integrations for AI editing, purchases, image search, and design publishing."],
  ["Platform Layer", "Shared abstractions and conditional implementations bridge UIKit and AppKit."],
];

const stack = [
  ["Language", "Swift"],
  ["UI Framework", "SwiftUI, with UIKit and AppKit integration"],
  ["State Management", "Combine, ObservableObject, and @Published"],
  ["Concurrency", "Swift concurrency, actors, and background dispatch queues"],
  ["Persistence", "Codable JSON documents, FileManager, and iCloud Drive"],
  ["Backend", "Supabase"],
  ["Subscriptions", "RevenueCat"],
  ["Image Loading", "URLSession, URLCache, NSCache, and ImageIO"],
  ["Platforms", "iOS/iPadOS 18+ and macOS 15.6+"],
];

const decisions = [
  ["Shared Component Model", "Rendering, code generation, and persistence operate on the same recursive design structure."],
  ["Separated Viewport State", "Zoom and pan state are isolated from document state to limit unnecessary editor updates."],
  ["Background Document Saving", "Capture value snapshots before encoding and writing documents on a serial background queue."],
  ["Native Image Pipeline", "Actor-isolated image loading combines request deduplication, memory and disk caching, and image downsampling."],
  ["Separate Preview and Export Paths", "Bound thumbnail resolution while preserving higher-resolution design exports."],
  ["Platform-Adaptive Controls", "Reuse core editing logic while adapting presentation and input handling to each platform."],
];

function Entries({ items }: { items: string[][] }) {
  return <ul className="dockui-list">
    {items.map(([title, description]) => <li key={title}><strong>{title}:</strong>{" "}{description.split(/(UIComponent|DesignPage|DesignFile|ObservableObject|@Published)/g).map((part, index) => /^(UIComponent|DesignPage|DesignFile|ObservableObject|@Published)$/.test(part) ? <code key={index}>{part}</code> : part)}</li>)}
  </ul>;
}

export default function DockUICaseStudy() {
  return <>
    <section id="features"><h2>Features</h2><Entries items={features} /></section>
    <section id="architecture"><h2>Architecture</h2><p>The app uses a feature-organized SwiftUI architecture with observable state, dedicated services, and separate rendering and code-generation layers.</p><Entries items={architecture} /></section>
    <section id="technical-stack"><h2>Technical Stack</h2><Entries items={stack} /></section>
    <section id="engineering"><h2>Key Engineering Decisions</h2><Entries items={decisions} /></section>
  </>;
}
