const FAQ_ITEMS = [
  {
    question: "How do you use AI in your process?",
    answer:
      "As an assistive tool, not a replacement for judgment. I use AI-native tools for engineering, data, prototyping, and shipping — on projects like Spruce and the 311 visualizer, that meant real features, faster, without cutting corners on the fundamentals.",
  },
  {
    question: "Are you open to full-time roles, contract, or both?",
    answer:
      "Both. I'm currently available for select contract and freelance work, and open to full-time roles where I can own design and the build together.",
  },
  {
    question: "What does “shipping” mean for you day to day?",
    answer:
      "The thing goes live, not just gets handed off. Whether it starts as a Figma file or a line of code, I follow a project through to a working, deployed product.",
  },
  {
    question: "Are you a designer or a developer?",
    answer:
      "Both, on purpose. I'm a Front-End Developer & Product Designer — design decisions don't get lost on their way to a working product because I build the product too.",
  },
];

export function Faq() {
  return (
    <section className="mx-auto max-w-[760px] px-8 py-16">
      <h2 className="mb-8 text-3xl font-extrabold">FAQ</h2>
      <dl className="flex flex-col gap-7">
        {FAQ_ITEMS.map((item) => (
          <div key={item.question}>
            <dt className="mb-1.5 text-lg font-bold">{item.question}</dt>
            <dd className="leading-relaxed text-dark/80">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
