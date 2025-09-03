import { ArrowRight, Github, Mail, Pencil,MapPin, Notebook, Rocket, User, Calendar, Phone, GraduationCap } from "lucide-react"
import ProjectCard from "./components/ProjectCard"
import { projects } from "./data/projects"
import type { LucideIcon } from "lucide-react";

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
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </nav>
      </header>


      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-7xl leading-none">양다연_</h1>
            <p className="mt-3 text-lg text-gray-700">
              
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/soonybutter" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 ring-1 ring-gray-300">
                <Github size={18}/> GitHub
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
              <Notebook size={16}/> Blog: https://soonybutter.tistory.com/ <br/>
            </div>
          </div>
          
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-6xl">About Me</h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            안녕하세요!<br />
            사용자 경험을 최우선으로 생각하는 개발자 양다연입니다. <br />
            팀원과의 협업에 열린 자세로 임하여 사용자의 일상에 기여하겠습니다.
          </p>

          {/* ── Info Grid ───────────────────────────────────────── */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutItems.map((it) => (
              <InfoItem key={it.label} Icon={it.icon} label={it.label} value={it.value} />
            ))}
          </div>
        </div>

      </section>



      <section>
      <div className="rounded-2xl border shadow-soft p-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="grid grid-cols-3 gap-4">
          <Stat kpi="3+" label="주요 프로젝트"/>
          <Stat kpi="150+" label="기술 블로그 포스트"/>
          <Stat kpi="3+" label="배포 경험(AWS/Azure)"/>
          <Stat kpi="정보처리기사" label="자격증"/>
          <Stat kpi="OAuth2" label="금융·보안"/>
          
        </div>
      </div>
      </section>
      
      {/* SKILLS */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-6xl">Skills</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <SkillGroup title="Language" items={["Javascript","Java","C++","TypeScript"]}/>
          <SkillGroup title="Front-end" items={["Node.js/React", "TypeScript", "Vite", "AJAX", "Thymeleaf"]}/>
          <SkillGroup title="Back-end" items={["Spring (Boot)", "Gradle", "Maven", "JPA/MyBatis", "JWT/OAuth2"]}/>
          <SkillGroup title="Infra & DB" items={["MySQL", "OracleDB", "OracleCloud "]}/>
          <SkillGroup title="Server" items={["AWS EC2", "Azure VM", "Tomcat", "NginX", "Vercel"]}/>
        </div>
        
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-gray-50 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-6xl">Projects</h2>
            <span className="inline-flex items-center gap-2 text-sm text-gray-600"><Rocket size={16}/> selected works</span>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p}/>
            ))}
          </div>
        </div>
      </section>
      

      

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-6xl">Contact</h2>
        <div className="mt-4 text-gray-700">
          <p>문의사항은 아래로 연락 주시면 감사하겠습니다. ☺️</p>
          <div className="mt-3 flex gap-4 text-sm">
            <a className="inline-flex items-center gap-2 hover:underline" href="mailto:you@example.com">
              <Mail size={16}/> ydy229@naver.com
            </a>
            <a className="inline-flex items-center gap-2 hover:underline" href="https://github.com/soonybutter" target="_blank" rel="noreferrer">
              <Github size={16}/> GitHub
            </a>
          </div>
        </div>
      </section>

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