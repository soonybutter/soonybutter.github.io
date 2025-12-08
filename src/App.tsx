import { useEffect, useState } from "react";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import { Award, Book,  Cake, Home, ArrowRight, Github, Mail, Pencil,MapPin, Notebook, Rocket, User, Calendar, Phone, GraduationCap, IdCard } from "lucide-react"
import Typewriter from "./components/Typewriter";
import ProjectCard from "./components/ProjectCard"
import { projects } from "./data/projects"
import type { LucideIcon } from "lucide-react";
import profileImg from "./assets/profile.jpg";
import Reveal from"./components/Reveal";
import LangSwitch from "./components/LangSwitch";

const aboutItems = [
  { icon: Calendar,       label: "생년월일", value: "2000.02.29" },
  {
    icon: Mail,          label: "이메일",
    value: <a className="hover:underline" href="mailto:ydy229@naver.com">ydy229@naver.com</a>
  },
  { icon: GraduationCap,  label: "학력",     value: "전북대학교 영어영문학과 / (부)컴퓨터공학과" },
  {icon:Pencil, label:"교육기관", value:"[현대이지웰] Java 풀스택 개발자 아카데미 2024.08-2025.01"}
] as { icon: LucideIcon; label: string; value: string }[];

export default function App() {

  const { t } = useTranslation();

  const isENPath = typeof window !== "undefined" && /^\/en(\/|$)/.test(window.location.pathname);
  const lang = isENPath ? "en" : "ko";
  const list = projects[lang];

  useEffect(() => {
    const target = isENPath ? "en" : "ko";
    if (i18n.language !== target) i18n.changeLanguage(target);
  }, []);

  return (
    <main className="font-sans pb-20">
      
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-display text-4xl"></a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#about">{t("nav.about")}</a>
            <a href="#skills">{t("nav.skills")}</a>
            <a href="#projects">{t("nav.projects")}</a>
            <a href="#contact">{t("nav.contact")}</a>

            {/* 구분선 + 언어 스위치 */}
            <span className="h-5 w-px bg-gray-300" aria-hidden />
            <LangSwitch />

          </div>
        </nav>

        {/* Floating LangSwitch for mobile */}
        <div className="sm:hidden fixed top-3 right-3 z-50">
          <div className="rounded-full border bg-white/80 backdrop-blur px-3 py-1">
            <LangSwitch />
          </div>
        </div>
      </header>


      {/* HERO 타이핑 효과*/}
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-14">
        <div className="mx-auto text-center">
          <h1 className="font-display text-3xl sm:text-4xl leading-[1.1] tracking-tight text-gray-900">
            <Typewriter
              lines={t("hero.lines", { returnObjects: true }) as string[]}
              speed={75}
              lineDelay={600}
              startDelay={150}
              loop={false}
              gap={25}
            />
          </h1>
        </div>
      </section>
      

      {/* ABOUT  */}
      <Reveal as="section" id="about" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-20 sm:scroll-mt-24" once={false} duration={500}>
       <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl md:text-4xl text-center tracking-widest">
          {t("about.title")}
        </h2>

          
          <div className="mt-6 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
              <div className="shrink-0 mx-auto sm:mx-0">
                <img
                  src={profileImg}
                  alt={t("about.altProfile")}
                  className="w-40 sm:w-48 aspect-[3/4] object-cover rounded-md"
                />
              </div>

          {/* 정보 리스트 */}
          <div className="flex-1 font-title font-light text-[15px] sm:text-base">
            <ul className="space-y-3 text-gray-900">
              <li className="flex items-center gap-3">
                <User size={18} className="shrink-0" />
                <span>{t("about.nameValue")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Cake size={18} className="shrink-0" />
                <span>{t("about.birthValue")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:ydy229@naver.com" className="hover:underline">
                  {t("about.emailValue")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap size={18} className="shrink-0" />
                <span>{t("about.eduValue")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Pencil size={18} className="shrink-0" />
                <span>{t("about.academyValue")} </span>
              </li>
              <li className="flex items-center gap-3">
                <IdCard size={18} className="shrink-0" />
                <span>{t("about.certValue1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <IdCard size={18} className="shrink-0" />
                <span>{t("about.certValue2")}</span>
              </li>
            </ul>

            <hr className="my-6 border-t border-dashed border-gray-300" />
            <div className="flex items-center justify-around text-gray-700">
              {/* GitHub */}
              <a
                href="https://github.com/soonybutter"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                title="GitHub"
                className="
                  group p-2 rounded-lg outline-none
                  transition-all duration-200 ease-out
                  hover:-translate-y-0.5 hover:scale-105 hover:text-[#db3281]
                  active:scale-95
                  focus-visible:ring-2 focus-visible:ring-[#db3281] focus-visible:ring-offset-2
                "
              >
                <Github
                  size={28}
                  className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
                  aria-hidden
                />
              </a>

              {/* Blog */}
              <a
                href="https://soonybutter.tistory.com/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Blog"
                title="Blog"
                className="
                  group px-3 py-2 rounded-lg outline-none
                  no-underline hover:no-underline
                  transition-all duration-200 ease-out
                  hover:-translate-y-0.5 hover:scale-105 hover:text-[#db3281]
                  active:scale-95
                  focus-visible:ring-2 focus-visible:ring-[#db3281] focus-visible:ring-offset-2
                "
              >
                <span className="font-black text-2xl leading-none">Blog</span>
              </a>
            </div>



          </div>
              </div>
            </div>
      </section>
      </Reveal>
      
      {/* Numbers */}  
      <Reveal as="section" className="mx-auto max-w-6xl px-3" once={false} delay={80}>
        <section className="mx-auto max-w-5xl px-3">
          <div className="rounded-3xl border shadow-soft p-6  from-gray-30 to-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AwardCard
                label={t("numbers.awardLabel")}
                size="sm"
              />
              <Stat kpi={t("numbers.blogKpi")} label={t("numbers.blogLabel")} size="md" href="https://soonybutter.tistory.com/" />
              <Stat kpi={t("numbers.deployKpi")}   label={t("numbers.deployLabel")} size="md" href="#projects" />
            </div>
          </div>
        </section>
      </Reveal>
      
      
      {/* SKILLS */}
      <Reveal as="section" id="skills" className="mx-auto max-w-6xl px-4 py-16 " once={false} delay={120}>
        <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-4xl text-center mb-4 sm:mb-6">Skills</h2>

        <div className="mt-6 grid grid-cols-6 md:grid-cols-5 gap-2 sm:gap-3 font-title font-light">
          <SkillGroup className="col-span-2 md:col-span-1"
                      title="Language"   items={["Javascript","Java","C++"]}/>
          <SkillGroup className="col-span-2 md:col-span-1"
                      title="Front-end"  items={["Node.js/React","TypeScript","Vite","AJAX","Thymeleaf"]}/>
          <SkillGroup className="col-span-2 md:col-span-1"
                      title="Back-end"   items={["Spring (Boot)","Gradle","Maven","JPA/MyBatis","JWT/OAuth2"]}/>

          <SkillGroup className="col-span-2 col-start-2 md:col-span-1 md:col-start-auto"
                      title="Infra & DB" items={["MySQL","OracleDB","OracleCloud"]}/>
          <SkillGroup className="col-span-2 col-start-4 md:col-span-1 md:col-start-auto"
                      title="Server"     items={["AWS EC2","Azure VM","Tomcat","NginX","Vercel"]}/>
          </div>
        </section>
      </Reveal>
      

      {/* PROJECTS */}
      <Reveal
        as="section"
        id="projects"
        className="bg-gray-50 border-y scroll-mt-20 sm:scroll-mt-24"
        once={false}      
      >
        
        <section className="bg-gray-50 border-y">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <h2 className="font-display text-4xl text-center w-full">Projects</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 max-w-3xl mx-auto">
              {list.map((p) => (
                <ProjectCard key={p.title} p={p} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
      

      {/* CONTACT */}
      <Reveal as="section" id="contact" className="mx-auto max-w-6xl px-4 py-16 " once={false} delay={120}>
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 font-title">
          <h2 className="font-display text-4xl text-center">{t("contact.title")}</h2>
          <div className="mt-10 text-gray-700 text-center">
            <p>{t("contact.desc")}</p>
            <div className="mt-6 flex justify-center gap-4 text-sm">
              <a className="inline-flex items-center gap-2 hover:underline" href="mailto:ydy229@naver.com" aria-label={t("contact.emailBtn")}>
                <Mail size={16}/> {t("contact.emailBtn")}
              </a>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://github.com/soonybutter" target="_blank" rel="noreferrer" aria-label={t("contact.githubBtn")}>
                <Github size={16}/> {t("contact.githubBtn")}
              </a>
            </div>
              
          </div>
        </section>
      </Reveal>
      

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Yang Dayeon {t("footer.builtWith")}
      </footer>

      <MobileNav t={t} />
    </main>
  )
}

function Stat({
  kpi,
  label,
  size = "md",
  href, 
}: {
  kpi: string;
  label: string;
  size?: "sm" | "md" | "lg";
  href?: string; 
}) {
  const sizes = {
    sm: { pad: "p-3", box: "w-14 h-14", kpi: "text-xl"  },
    md: { pad: "p-4", box: "w-16 h-16", kpi: "text-2xl" },
    lg: { pad: "p-5", box: "w-20 h-20", kpi: "text-3xl" },
  }[size];

  const isLink = !!href;
  const isHash = href?.startsWith("#");
  const Tag: any = isLink ? "a" : "div";
  const linkProps = isLink
    ? (isHash ? { href } : { href, target: "_blank", rel: "noreferrer" })
    : {};

  return (
    <Tag
      {...linkProps}
      className={`block rounded-xl border bg-white ${sizes.pad} text-center font-title font-light
                  ${isLink ? "cursor-pointer hover:shadow-md transition-shadow" : ""}`}
      aria-label={isLink ? label : undefined}
    >
      <div className={`mx-auto flex items-center justify-center rounded-full ${sizes.box} bg-white border-3 border-gray-300`}>
        <span className={`${sizes.kpi} leading-none text-[#db3281]`}>{kpi}</span>
      </div>
      <div className="mt-2 text-[13px] sm:text-sm text-gray-700">{label}</div>
    </Tag>
  );
}

function AwardCard({
  label,
  size = "md",
}: {
  label: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { pad: "p-3", box: "w-14 h-14", icon: 22 },
    md: { pad: "p-4", box: "w-16 h-16", icon: 26 },
    lg: { pad: "p-5", box: "w-20 h-20", icon: 30 },
  }[size];

  return (
    <div className={`rounded-xl border bg-white ${sizes.pad} text-center font-title font-light`}>
      <div className={`mx-auto flex items-center justify-center rounded-full ${sizes.box} bg-transparent ring-0`}>
        <Award size={sizes.icon} className="text-[#db3281]" aria-hidden="true" />
      </div>
      <div className="mt-2 text-[10px] sm:text-sm text-gray-700 leading-relaxed whitespace-pre-line">
        {label}
      </div>
    </div>
  );
}


function SkillGroup({
  title,
  items,
  className = "",
}: { title: string; items: string[]; className?: string }) {
  return (
    <div
        className={`
          rounded-3xl border bg-white shadow-md
          w-full mx-auto
          flex flex-col items-center
          px-2 py-3 sm:px-3 sm:py-4
          min-h-[120px] sm:min-h-[140px] md:min-h-[170px]
          ${className}
        `}
      >
      <h3 className="font-display text-[#db3281] text-center [font-size:clamp(12px,3.8vw,20px)] leading-tight mb-1.5">
        {title}
      </h3>

      <ul className="mt-1.5 space-y-1 text-gray-700 list-none text-center [font-size:clamp(10px,3.2vw,14px)] leading-snug break-words">
        {items.map((it, i) => (
          <li key={`${title}-${it}-${i}`}>{it}</li>
        ))}
      </ul>
    </div>
  );
}



function InfoItem({
  Icon,
  label,
  value,
}: {
  Icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border p-5 bg-white shadow-soft">
      <div className="shrink-0">
        <Icon size={28} className="text-gray-800" />
      </div>
      <div>
        <div className="text-gray-800 font-semibold">{label}</div>
        <div className="text-gray-600 mt-1 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function MobileNav({ t }: { t: (k: string) => string }) {
  const items = [
    { id: "about",    label: t("nav.about"),    Icon: User },
    { id: "skills",   label: t("nav.skills"),   Icon: Book },
    { id: "projects", label: t("nav.projects"), Icon: Rocket },
    { id: "contact",  label: t("nav.contact"),  Icon: Mail },
  ];

  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
      // "가장 많이 보이는 섹션"을 활성화
      const visible = entries.filter((e) => e.isIntersecting);
      if (!visible.length) return;
      visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      const top = visible[0];
      const id = (top.target as HTMLElement).id;
      if (id) setActive(id);
    },
    {
      // 화면 중앙 기준 감지 (sticky 헤더 대응)
      rootMargin: "-50% 0px -50% 0px",
      threshold: [0, 0.01, 0.25, 0.5, 0.75, 1],
    }
  );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const smoothScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // 상단 고정 헤더 보정
    const headerOffset = 64;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav
      className="
        sm:hidden fixed bottom-0 inset-x-0 z-50
        border-t bg-white/80 backdrop-blur
        pb-[env(safe-area-inset-bottom)] 
      "
      role="navigation"
      aria-label="Mobile"
    >
      <ul className="mx-auto max-w-6xl grid grid-cols-4">
        {items.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <li key={id} className="flex">
              <button
                onClick={() => smoothScrollTo(id)}
                className={`
                  flex-1 py-2.5 flex flex-col items-center justify-center gap-1.5
                  text-xs
                  ${isActive ? "text-[#db3281] font-medium" : "text-gray-600"}
                  active:scale-95 transition
                `}
                aria-label={label}
              >
                <Icon size={22} aria-hidden="true" className={isActive ? "" : "opacity-80"} />
                <span className="leading-none">{label}</span>
                {/* 활성 탭 인디케이터 */}
                <span
                  aria-hidden="true"
                  className={`
                    mt-1 h-0.5 w-6 rounded-full
                    ${isActive ? "bg-[#db3281]" : "bg-transparent"}
                  `}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}