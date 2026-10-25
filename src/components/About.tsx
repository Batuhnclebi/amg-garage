const principles = [
  {
    title: "Marka odağı",
    text: "Mercedes-Benz araçlara özel bir servis anlayışıyla çalışıyoruz.",
  },
  {
    title: "Özenli yaklaşım",
    text: "Her araca dikkat ve titizlikle yaklaşmayı önemsiyoruz.",
  },
  {
    title: "Kolay ulaşım",
    text: "Konumumuzu Google Haritalar'da açabilir veya doğrudan arayabilirsiniz.",
  },
];

export default function About() {
  return (
    <section id="hakkimizda" aria-labelledby="hakkimizda-baslik" className="bg-carbon py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amg-bright">
            Hakkımızda
          </p>
          <h2
            id="hakkimizda-baslik"
            className="font-[family-name:var(--font-display)] text-4xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-6xl"
          >
            Mercedes-Benz&apos;e özel, güven veren servis
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            AMG Garaj, Düzce&apos;de Mercedes-Benz araç sahiplerine özel hizmet veren bir
            servistir. Aracınıza gösterilen özeni ve güncel çalışmalarımızı sosyal medya
            hesaplarımızdan takip edebilirsiniz.
          </p>
        </div>

        <ul className="grid gap-px self-center bg-line">
          {principles.map((item, index) => (
            <li key={item.title} className="flex gap-5 bg-carbon py-6 pr-2">
              <span
                aria-hidden="true"
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-amg-bright"
              >
                0{index + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide">{item.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-mist">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
