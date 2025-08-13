import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Bot,
  Brain,
  Calendar,
  Award,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
  HeartHandshake,
  Clock,
  ShieldCheck,
  GraduationCap,
  Rocket,
} from "lucide-react";

const logoUrl = new URL("./Pictures/LTClabLOGO.png", import.meta.url).href;

// Vibrant, playful + still modern. Tailwind required.
// Language: Azerbaijanca

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-white/40 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const Stat = ({ label, value }) => (
  <div className="flex flex-col items-start gap-1 rounded-2xl border border-transparent bg-white/80 px-4 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur-sm">
    <span className="text-[11px] text-neutral-500">{label}</span>
    <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">{value}</span>
  </div>
);

const Pill = ({ text }) => (
  <span className="rounded-full bg-neutral-900/90 px-2.5 py-1 text-[11px] font-medium text-white">{text}</span>
);

const ModuleCard = ({ icon: Icon, title, desc, items, gradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.45 }}
    className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm"
  >
    <div className={`absolute inset-x-0 top-0 h-1.5 ${gradient}`} />
    <div className="p-5">
      <div className="flex flex-wrap w-full items-center gap-2 rounded-xl bg-neutral-50 px-3 py-2 text-sm font-medium">
        <span className={`flex-shrink-0 grid h-7 w-7 place-items-center rounded-xl ${gradient} text-white`}>
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex-1 break-words">{title}</span>
      </div>
      <p className="mt-3 text-sm text-neutral-600">{desc}</p>
      <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-800">
        {items.map((it, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-neutral-400" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        <Pill text="3 ay" />
        <Pill text="Layihə əsaslı" />
      </div>
    </div>
  </motion.div>
);

// Image version for provided brand logos
const ImageLogoChip = ({ src, label }) => (
  <div className="flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-2.5 shadow-sm">
    <img src={src} alt={label} className="h-9 w-9 rounded-xl object-contain" />
    <span className="text-sm text-neutral-800">{label}</span>
  </div>
);

const TimelineDot = ({ label, color }) => (
  <div className="flex items-center gap-3">
    <div className={`h-3 w-3 rounded-full ${color}`}></div>
    <span className="text-sm">{label}</span>
  </div>
);

const QA = ({ q, a }) => (
  <details className="group rounded-2xl border border-neutral-200 bg-white p-4 open:shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-medium text-neutral-900">
      {q}
      <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] text-neutral-600 group-open:hidden">aç</span>
      <span className="hidden rounded-full bg-neutral-900 px-2 py-1 text-[10px] text-white group-open:inline">bağla</span>
    </summary>
    <p className="mt-2 text-sm text-neutral-600">{a}</p>
  </details>
);

export default function LTCLabKidsV2() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Decorative blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-amber-300 via-pink-300 to-fuchsia-400 blur-3xl opacity-30" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-300 via-sky-300 to-indigo-400 blur-3xl opacity-30" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="LTC Lab Kids Logo"
              className="h-10 w-10 rounded-2xl object-contain shadow-sm"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">LTC Lab Kids</div>
              <div className="text-[11px] text-neutral-500">8–14 yaş · 12 aylıq texnologiya səyahəti</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#modules" className="hover:text-neutral-700">Modullar</a>
            <a href="#timeline" className="hover:text-neutral-700">Plan</a>
            <a href="#gallery" className="hover:text-neutral-700">Galereya</a>
            <a href="#faq" className="hover:text-neutral-700">FAQ</a>
            <a href="#apply" className="rounded-xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-3 py-2 text-white shadow-sm hover:opacity-95">Qeydiyyat</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.10),transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-3 flex flex-wrap gap-2">
                <Badge>Yeni qruplar: Sentyabr 2025</Badge>
                <Badge>İlkin dərs: pulsuz</Badge>
              </div>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-extrabold leading-tight tracking-tight">
                Uşaqlar üçün 
                <span className="bg-gradient-to-r from-amber-500 via-pink-600 to-indigo-600 bg-clip-text text-transparent"> rəngli kodlama macərası</span>
              </motion.h1>
              <p className="mt-3 max-w-prose text-neutral-600">
                4 modul, 12 ay. Oyunlaşdırılmış dərslər, layihələr və təqdimatlarla real bacarıqlar. Təhlükəsiz və motivasiyaedici mühit.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/99451215088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
                >
                  Demo dərsə yazıl <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#modules" className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-medium hover:bg-neutral-50">Proqrama bax</a>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <Stat label="Proqram" value="12 ay · 4 modul" />
                <Stat label="Metod" value="Layihə əsaslı" />
                <Stat label="Yaş aralığı" value="8–14" />
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
              <div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-pink-50 to-amber-50 p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { t: "Proqramlaşdırma", i: <Code2 className='h-4 w-4'/> },
                      { t: "Veb development", i: <Globe className='h-4 w-4'/> },
                      { t: "Robototexnika", i: <Bot className='h-4 w-4'/> },
                      { t: "Süni intellekt", i: <Brain className='h-4 w-4'/> },
                    ].map((m, idx) => (
                      <div key={idx} className="rounded-2xl bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-2 text-xs text-neutral-500">
                          <Star className="h-3.5 w-3.5" /> Modul {idx + 1}
                        </div>
                        <div className="mt-1 font-medium">{m.t}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-neutral-500">Hər modul 3 ay — 12 ayda tam səyahət</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2"><HeartHandshake className="h-5 w-5" /><h3 className="text-base font-semibold">Nəyə görə LTC Lab Kids?</h3></div>
            <p className="text-sm text-neutral-700">Pedoqoji modelimiz oyunlaşdırma + real layihələr üzərində qurulub; uşaqlar “öyrənərkən yaradır”. Məqsədimiz motivasiyanı yüksək saxlayaraq dayanıqlı vərdiş formalaşdırmaqdır.</p>
            <ul className="mt-2 grid gap-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Kiçik qruplar, fərdi diqqət</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Layihə və təqdimat mərkəzli yanaşma</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Valideynlər üçün aylıq geribildirim</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Mentorlarla 1:1 dəstək slotları</li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2"><ShieldCheck className="h-5 w-5" /><h3 className="text-base font-semibold">Təhlükəsizlik</h3></div>
            <p className="text-sm text-neutral-700">Uşaq dostu kontent, avadanlıq təhlükəsizliyi, nəzarətli mühit. Dərs otaqları nəzarət altındadır; robototexnika üçün qoruyucu qaydalar dərs zamanı tətbiqlə öyrədilir.</p>
            <ul className="mt-2 grid gap-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Avadanlıqdan istifadə təlimatı hər modulun əvvəlində</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Valideynlərlə açıq kommunikasiya, insident protokolu</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Məlumatların gizliliyi: şəkil/videolar yalnız razılıqla</li>
            </ul>
          </div>

          {/* Future-oriented emotional block */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2"><Rocket className="h-5 w-5" /><h3 className="text-base font-semibold">Gələcəyin peşələrinə hazırlıq</h3></div>
            <p className="text-sm text-neutral-700">Kod yalnız fənn deyil — düşünmə tərzidir. Bu gün oyun qurur, sabah ideyasını prototipə çevirir, bir gün peşəyə.</p>
            <ul className="mt-2 grid gap-2 text-sm text-neutral-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> AI savadlılığı və data düşüncəsi</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Yaradıcı problem həlli və sürətli prototipləmə</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5"/> Komanda işi, təqdimat və liderlik vərdişləri</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">4 modul — 12 aylıq səyahət</h2>
            <p className="mt-1 text-sm text-neutral-600">Hər modul 3 ay davam edir. Oyun + layihə balansı.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ModuleCard
            icon={Code2}
            title="Modul 1 · Proqramlaşdırma"
            desc="Scratch və Python ilə alqoritmik düşüncə. Oyun, animasiya, miniproqramlar."
            items={["Scratch ilə vizual kodlama", "Python əsasları (dəyişən, şərt, dövr)", "Oyun dizaynına giriş", "Algoritmlər və məntiq"]}
            gradient="bg-gradient-to-r from-amber-500 to-pink-500"
          />
          <ModuleCard
            icon={Globe}
            title="Modul 2 · Veb development"
            desc="HTML, CSS, JavaScript ilə responsiv saytlar. UI/UX əsasları."
            items={["Semantik HTML", "CSS & responsiv dizayn", "JS əsasları", "1 səhifəlik portfolio saytı"]}
            gradient="bg-gradient-to-r from-indigo-600 to-fuchsia-600"
          />
          <ModuleCard
            icon={Bot}
            title="Modul 3 · Robototexnika"
            desc="Arduino / micro:bit ilə sensorlar, aktuatorlar və mexanizmlər. STEAM layihələri."
            items={["Elektronika təhlükəsizliyi", "Sensorlar və aktuatorlar", "micro:bit/Arduino kodlama", "Mini robot layihəsi"]}
            gradient="bg-gradient-to-r from-emerald-500 to-cyan-500"
          />
          <ModuleCard
            icon={Brain}
            title="Modul 4 · Süni intellekt"
            desc="AI anlayışları, etik qaydalar və tətbiqlər. Teachable Machine və GenAI ilə kreativ layihələr."
            items={["ML-ə giriş", "Teachable Machine ilə təsnifat", "Data etikası və təhlükəsizlik", "GenAI ilə ideyadan prototipə"]}
            gradient="bg-gradient-to-r from-violet-600 to-fuchsia-600"
          />
        </div>
      </section>

      {/* Stack/Tools */}
      <section id="stack" className="mx-auto max-w-6xl px-4 py-6">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <h3 className="text-lg font-semibold tracking-tight">Öyrənəcəyin texnologiyalar</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <ImageLogoChip src={logoUrl} label="LTC Lab" />
            <ImageLogoChip src="/scratch-cat-logo-png_seeklogo-431721.png" label="Scratch" />
            <ImageLogoChip src="/html5.png" label="HTML5" />
            <ImageLogoChip src="/CSS3_logo.svg" label="CSS3" />
            <ImageLogoChip src="/Unofficial_JavaScript_logo_2.svg.png" label="JavaScript" />
            <ImageLogoChip src="/arduino-1.svg" label="Arduino" />
            <ImageLogoChip src="/microbit_logo_icon_248480.png" label="micro:bit" />
            <ImageLogoChip src="/0f04f0b2-a39a-4621-8bb5-1f5f7bf9bf10_mq.jpg" label="Teachable Machine" />
            <ImageLogoChip src="/Octicons-mark-github.svg" label="GitHub" />
            <ImageLogoChip src="/openai.svg" label="OpenAI · GenAI" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <h3 className="text-lg font-semibold tracking-tight">12 aylıq plan</h3>
          </div>
          <div className="relative h-3 w-full rounded-full bg-neutral-100">
            <div className="absolute left-0 top-0 h-3 w-1/4 rounded-l-full bg-gradient-to-r from-amber-500 to-pink-500" />
            <div className="absolute left-1/4 top-0 h-3 w-1/4 bg-gradient-to-r from-indigo-600 to-fuchsia-600" />
            <div className="absolute left-2/4 top-0 h-3 w-1/4 bg-gradient-to-r from-emerald-500 to-cyan-500" />
            <div className="absolute left-3/4 top-0 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-violet-600 to-fuchsia-600" />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <TimelineDot label="Modul 1 · aylar 1–3" color="bg-amber-500" />
            <TimelineDot label="Modul 2 · aylar 4–6" color="bg-fuchsia-600" />
            <TimelineDot label="Modul 3 · aylar 7–9" color="bg-emerald-500" />
            <TimelineDot label="Modul 4 · aylar 10–12" color="bg-violet-600" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-4 flex items-center gap-2">
          <GraduationCap className="h-5 w-5" />
          <h3 className="text-lg font-semibold tracking-tight">Galereya</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative h-44 overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white shadow-sm">
            <img
              src="/ltclabkidsbirinci.jpg"
              alt="Galereya şəkil 1"
              className="h-full w-full object-cover"
            />
          </div>
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="relative h-44 overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white shadow-sm"
            >
              <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(99,102,241,0.15),transparent_65%)]" />
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-br from-amber-300 to-pink-400 blur-2xl opacity-40" />
              <div className="absolute inset-0 grid place-items-center text-xs text-neutral-500">Şəkil üçün yer</div>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes & Method */}
      <section className="mx-auto max-w-6xl px-4 pb-2">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <Award className="h-5 w-5" />
              <h3 className="text-base font-semibold">Uşaqlar nə qazanır?</h3>
            </div>
            <ul className="mt-2 grid gap-2 text-sm text-neutral-700">
              {[
                "Problemləri mərhələli həll etmə",
                "Kreativ düşüncə və layihə planlama",
                "Komanda işi və təqdimat bacarığı",
                "Rəqəmsal portfel (GitHub / veb)",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <Users className="h-5 w-5" />
              <h3 className="text-base font-semibold">Təşkilati</h3>
            </div>
            <ul className="mt-2 grid gap-2 text-sm text-neutral-700">
              {[
                "Həftədə 2 dəfə, 90 dəqiqə",
                "Valideynlər üçün aylıq geribildirim",
                "Dil: Azərbaycan dili",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold tracking-tight">Qeydiyyat formu</h3>
            <p className="mt-1 text-sm text-neutral-600">Google Form-u doldurun — komandamız sizinlə əlaqə saxlasın.</p>
          </div>
          <div className="flex flex-col items-center justify-center py-8">
            <a
              href="https://forms.gle/gaS7ydmosknDNXfN7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-8 py-4 text-lg font-medium text-white shadow-sm transition hover:opacity-95"
            >
              Formaya keç <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-neutral-600">
              Qeydiyyat üçün Google Formu doldurun.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ (expanded) */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold tracking-tight">Tez-tez verilən suallar</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <QA q="Öncədən bilik tələb olunurmu?" a="Xeyr. Proqram sıfırdan başlayır və yaşa uyğun adaptasiya olunur." />
            <QA q="Qiymətləndirmə necə aparılır?" a="Hər modul sonunda layihə təqdimatı, rubrik və mentor rəyi ilə." />
            <QA q="Avadanlıq lazımdır?" a="Məkanımızda kompüter və robototexnika dəstləri mövcuddur; şəxsi noutbuk tələb olunmur." />
            <QA q="Dərs dili" a="Azərbaycan dilində." />
            <QA q="Valideynlərlə əlaqə" a="Aylıq proqres hesabatı və yazılı məsləhətlər paylaşılır." />
            <QA q="Müəllim heyəti necə seçilir?" a="Müəllimlər texniki test, demo dərs və uşaqlarla kommunikasiya üzrə müsahibədən keçir. Uşaq pedaqogikası, kurikulum və sinif idarəçiliyi üzrə daxilidən təlim alırlar; robototexnika üçün təhlükəsizlik brifingi verilir. Hər modulda dərs müşahidəsi və geribildirim mexanizmi tətbiq olunur." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-neutral-600">
          <img
            src={logoUrl}
            alt="LTC Lab Kids Logo"
            className="h-8 w-8 rounded-2xl object-contain"
          />
          <span>© {new Date().getFullYear()} LTC Lab Kids · Bakı</span>
        </div>
      </footer>
    </div>
  );
}

