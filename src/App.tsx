import { Cake, Home, ArrowRight, Github, Mail, Pencil,MapPin, Notebook, Rocket, User, Calendar, Phone, GraduationCap, IdCard } from "lucide-react"
import Typewriter from "./components/Typewriter";
import ProjectCard from "./components/ProjectCard"
import { projects } from "./data/projects"
import type { LucideIcon } from "lucide-react";
import profileImg from "./assets/profile.jpg";
import Reveal from"./components/Reveal";

const aboutItems = [
  //{ icon: User,           label: "이름",     value: "양다연" },
  { icon: Calendar,       label: "생년월일", value: "2000.02.29" },
  //{ icon: MapPin,         label: "위치",     value: "대한민국" },
  //{ icon: Phone,          label: "연락처",   value: "010-0000-0000" },
  {
    icon: Mail,          label: "이메일",
    value: <a className="hover:underline" href="mailto:ydy229@naver.com">ydy229@naver.com</a>
  },
  { icon: GraduationCap,  label: "학력",     value: "전북대학교 영어영문학과 / (부)컴퓨터공학과" },
  {icon:Pencil, label:"교육기관", value:"[현대이지웰] Java 풀스택 개발자 아카데미 2024.08-2025.01"}
] as { icon: LucideIcon; label: string; value: string }[];

export default function App() {
  return (
    <main className="font-sans">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
        <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-display text-4xl"></a>
          <div className="hidden sm:flex gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>


      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-14">
        <div className="mx-auto text-center">
          <h1 className="font-display text-4xl md:text-4xl lg:text-4xl leading-[1.05] tracking-tight text-gray-900">
            <Typewriter
              lines={[
                "안녕하세요!",
                "사용자 경험을 최우선으로 생각하는",
                "풀스택 개발자 양다연입니다."
              ]}
              speed={70}        // 타이핑 속도
              lineDelay={600}   // 줄 전환 지연
              startDelay={150}  // 시작 지연
              loop={false}
              gap={25}
            />
          </h1>
        </div>
      </section>
      

      {/* ABOUT  */}
      <Reveal as="section" id="about" className="mx-auto max-w-6xl px-4 py-16" once={false} duration={500}>
       <section id="about" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl md:text-4xl text-center tracking-widest">
          ABOUT
        </h2>

          {/* 가운데 배치 + 사진(좌) / 정보(우) */}
          <div className="mt-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-8 sm:gap-12">
              
            <div className="shrink-0 mr-6 sm:mr-10">
            <img
                src={profileImg}
                alt="프로필 사진"
                className="w-40 sm:w-48 aspect-[3/4] object-cover rounded-md"
            />
          </div>

          {/* 정보 리스트 */}
          <div className="flex-1">
            <ul className="space-y-3 text-gray-900">
              <li className="flex items-center gap-3">
                <User size={18} className="shrink-0" />
                <span>양다연</span>
              </li>
              <li className="flex items-center gap-3">
                <Cake size={18} className="shrink-0" />
                <span>2000. 02. 29</span>
              </li>
              <li className="flex items-center gap-3">
                <Home size={18} className="shrink-0" />
                <span>대한민국</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:ydy229@naver.com" className="hover:underline">
                  ydy229@naver.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <GraduationCap size={18} className="shrink-0" />
                <span>전북대학교 ( 영어영문학 / 부전공 컴퓨터공학 )</span>
              </li>
              <li className="flex items-center gap-3">
                <Pencil size={18} className="shrink-0" />
                <span>[현대이지웰] Java 풀스택 개발자 아카데미 ( 24.08–25.01 )</span>
              </li>
              <li className="flex items-center gap-3">
                <IdCard size={18} className="shrink-0" />
                <span>정보처리기사</span>
              </li>
            </ul>

            {/* 점선 구분선 + 하단 아이콘 */}
            <hr className="my-6 border-t border-dashed border-gray-300" />
            <div className="flex items-center justify-around text-gray-700">
              <a href="https://github.com/soonybutter" target="_blank" rel="noreferrer" className="p-2 hover:opacity-80">
                <Github size={28} />
              </a>
              <a href="https://soonybutter.tistory.com/" target="_blank" rel="noreferrer" className="p-2 hover:opacity-80">
                <span className="font-black text-2xl leading-none">Blog</span>
              </a>
            </div>
          </div>
              </div>
            </div>
      </section>
      </Reveal>
      
        
      <Reveal as="section" className="mx-auto max-w-6xl px-4" once={false} delay={80}>
        <section className="mx-auto max-w-5xl px-3">
          <div className="rounded-2xl border shadow-soft p-6  from-gray-50 to-white">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Stat kpi="3+" label="주요 프로젝트"/>
                <Stat kpi="150+" label="기술 블로그 포스트"/>
                <Stat kpi="3+" label="배포 경험(AWS/Azure)"/>
                {/*<Stat kpi="정보처리기사" label="자격증"/>*/}
                {/*<Stat kpi="OAuth2" label="금융·보안"/>*/}
            </div>
          </div>
        </section>
      </Reveal>
      
      
      {/* SKILLS */}
      <Reveal as="section" id="skills" className="mx-auto max-w-6xl px-4 py-16 " once={false} delay={120}>
        <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-5xl text-center">Skills</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <SkillGroup title="Language" items={["Javascript","Java","C++"]}/>
            <SkillGroup title="Front-end" items={["Node.js/React", "TypeScript", "Vite", "AJAX", "Thymeleaf"]}/>
            <SkillGroup title="Back-end" items={["Spring (Boot)", "Gradle", "Maven", "JPA/MyBatis", "JWT/OAuth2"]}/>
            <SkillGroup title="Infra & DB" items={["MySQL", "OracleDB", "OracleCloud "]}/>
            <SkillGroup title="Server" items={["AWS EC2", "Azure VM", "Tomcat", "NginX", "Vercel"]}/>
          </div>
        </section>
      </Reveal>
      

      {/* PROJECTS */}
      <Reveal as="section" id="projects" className="bg-gray-50 border-y once={false}">
          <section id="projects" className="bg-gray-50 border-y">
            <div className="mx-auto max-w-5xl px-4 py-16">
              <h2 className="font-display text-5xl text-center w-full">Projects</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 max-w-3xl mx-auto">
              {projects.map((p, i) => (
                <ProjectCard key={p.title} p={p}/>
              ))}
            </div>
            </div>
          </section>
      </Reveal>
      
      

      

      {/* CONTACT */}
      <Reveal as="section" id="contact" className="mx-auto max-w-6xl px-4 py-16 " once={false} delay={120}>
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-5xl text-center">Contact</h2>
          <div className="mt-10 text-gray-700 text-center">
            <p>문의사항은 아래로 연락 주시면 감사하겠습니다. ☺️</p>
            <div className="mt-6 flex justify-center gap-4 text-sm">
              <a className="inline-flex items-center gap-2 ">
                <Mail size={16}/> ydy229@naver.com
              </a>
              <a className="inline-flex items-center gap-2 hover:underline" href="https://github.com/soonybutter" target="_blank" rel="noreferrer">
                <Github size={16}/> GitHub
              </a>
            </div>
          </div>
        </section>
      </Reveal>
      

      {/* FOOTER */}
      <footer className="py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Yang Dayeon — Built with React • Vite • Tailwind
      </footer>
    </main>
  )
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 text-center">
      <div className="font-display text-5xl leading-none">{kpi}</div>
      <div className="mt-1 text-xs text-gray-600">{label}</div>
    </div>
  )
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border p-6 bg-white shadow-soft">
      <h3 className="font-display text-3xl">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-800"></span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
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