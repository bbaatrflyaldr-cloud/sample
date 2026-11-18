import Image from "next/image";
import Header from "@/components/Header";
import Stats from "@/components/Stats";
import Reveal from "@/components/Reveal";
import FloorExplorer from "@/components/FloorExplorer";
import Gallery from "@/components/Gallery";
import { floors, totalArea, totalUnits } from "@/data/floors";

const zones = [
  { icon: "🛍️", title: "Брэнд дэлгүүр", text: "Эр, эм хувцас, гутал, цүнх, спорт, аяллын бараа." },
  { icon: "📱", title: "Технологи", text: "Гар утас, компьютер, гэр ахуйн цахилгаан бараа." },
  { icon: "🥖", title: "Хүнс, кафе", text: "Бэйкери, шинэхэн хүнс, ундаа, ресторан." },
  { icon: "🎬", title: "Зугаа цэнгэл", text: "Кино театр, хүүхдийн тоглоомын төв, VIP өрөө." },
  { icon: "🏋️", title: "Эрүүл мэнд", text: "Фитнес, гоо сайхан, үсчин, массаж, сургалт." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* HERO */}
        <section className="hero">
          <Image
            src="/images/gallery/atrium.jpeg"
            alt="Selbe Mall-ийн төв атриум"
            fill
            priority
            sizes="100vw"
            className="hero-img"
          />
          <div className="hero-overlay" />
          <div className="container hero-inner">
            <span className="eyebrow gold">Улаанбаатар • Худалдааны шинэ өнцөг</span>
            <h1>
              Худалдаа. Хоол. <em>Зугаа цэнгэл.</em>
            </h1>
            <p>
              Selbe Mall — олон улсын брэнд, технологи, хүнс, кино театр, эрүүл мэндийн
              үйлчилгээг нэг дор цогцолсон орчин үеийн худалдааны төв.
            </p>
            <div className="hero-actions">
              <a href="#floors" className="btn btn-gold">Давхрууд үзэх</a>
              <a href="#gallery" className="btn btn-ghost">Галерей</a>
            </div>
          </div>
        </section>

        <Stats
          items={[
            { value: floors.length, label: "Давхрын төлөвлөлт" },
            { value: totalUnits, label: "Өрөө, талбай" },
            { value: Math.round(totalArea), label: "Нийт талбай, м²" },
          ]}
        />

        {/* ABOUT */}
        <section id="about">
          <div className="container about-grid">
            <Reveal className="about-visual">
              <Image
                src="/images/gallery/lobby.jpeg"
                alt="Selbe Mall-ийн лобби"
                fill
                sizes="(max-width: 960px) 92vw, 560px"
                className="cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">Бидний тухай</span>
              <h2>Орон зай, туршлагын огтлолцол</h2>
              <p className="lead">
                Selbe Mall нь худалдаа, амралтын хэв маяг, харилцаа нэгтгэсэн орчин үеийн орон зай юм.
                Төвийн атриумыг тойрсон чөлөөт хөдөлгөөн, өргөн коридор, тансаг интерьер нь худалдан
                авалтыг тав тухтай туршлага болгоно.
              </p>
              <div className="zones">
                {zones.map((z) => (
                  <div className="zone" key={z.title}>
                    <span className="zone-ic">{z.icon}</span>
                    <div>
                      <h4>{z.title}</h4>
                      <p>{z.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* FLOORS */}
        <section id="floors" className="floors-section">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Давхар тус бүр</span>
              <h2>Давхрын төлөвлөлт</h2>
              <p className="lead">
                Давхраа сонгоод төлөвлөлт, бүсчлэл, үйлчилгээний мэдээллийг үзнэ үү. Зураг дээр дарж
                томруулна.
              </p>
            </Reveal>
            <FloorExplorer />
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery">
          <div className="container">
            <Reveal>
              <span className="eyebrow">Интерьер</span>
              <h2>Галерей</h2>
              <p className="lead">Орчин үеийн интерьер, олон түвшинт орон зай, чөлөөт хөдөлгөөн.</p>
            </Reveal>
            <Gallery />
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="visit">
          <div className="container visit-grid">
            <Reveal className="info-card">
              <span className="eyebrow">Холбоо барих</span>
              <h3>Манайд зочлоорой</h3>
              <ul className="hours">
                <li><span>Даваа – Баасан</span><b>10:00 – 22:00</b></li>
                <li><span>Бямба</span><b>10:00 – 23:00</b></li>
                <li><span>Ням</span><b>11:00 – 22:00</b></li>
              </ul>
              <p className="contact-line">📍 Улаанбаатар хот</p>
              <p className="contact-line">📞 +976 0000-0000</p>
              <p className="contact-line">✉️ info@selbemall.example</p>
              <p className="note">Цаг, хаяг, утасны дугаарыг жинхэнэ мэдээллээр солино уу.</p>
            </Reveal>
            <Reveal className="cta-card" delay={120}>
              <h3>Түрээсийн санал</h3>
              <p>
                Брэнд дэлгүүр, кафе, үйлчилгээний талбай түрээслэх сонирхолтой бол давхар бүрийн
                төлөвлөлтөөс өөрт тохирох талбайг сонгон бидэнтэй холбогдоно уу.
              </p>
              <a href="mailto:leasing@selbemall.example" className="btn btn-gold">Түрээсийн хүсэлт илгээх</a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <div className="logo">Selbe<span>Mall</span></div>
              <p>Худалдаа, амралтын хэв маяг, харилцаа нэгтгэсэн орчин үеийн орон зай.</p>
            </div>
            <div>
              <h4>Цэс</h4>
              <ul>
                <li><a href="#about">Бидний тухай</a></li>
                <li><a href="#floors">Давхрууд</a></li>
                <li><a href="#gallery">Галерей</a></li>
                <li><a href="#visit">Холбоо барих</a></li>
              </ul>
            </div>
            <div>
              <h4>Дагах</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="copy">
            <span>© 2026 Selbe Mall. Бүх эрх хуулиар хамгаалагдсан.</span>
            <span>Загвар (sample) вэбсайт</span>
          </div>
        </div>
      </footer>
    </>
  );
}
