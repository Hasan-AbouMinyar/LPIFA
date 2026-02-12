import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Globe, GraduationCap, Play, Mail } from "lucide-react";

// WhatsApp SVG icon component (Lucide doesn't include brand icons)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const teamMembers = [
  {
    name: "حسن أحمد أبومنيار",
    role: "مطور برمجيات",
    bio: "مطور شغوف متخصص في بناء تطبيقات الويب الحديثة، مع تركيز دقيق على تجربة المستخدم والأداء.",
    avatar: "/avatars/hasan.JPEG",
    whatsapp: "https://wa.me/218924214929",
    portfolio: "https://hasan-abouminyar.vercel.app",
    email: "h.abouminyar@gmail.com",
  },
  {
    name: "حسام حسين فرج محمد",
    role: "مطور برمجيات",
    bio: "مهندس برمجيات ذو خبرة، يجمع بين المهارات التقنية القوية وحل المشكلات الإبداعي لتقديم حلول فعالة.",
    avatar: "/avatars/default.jpg",
    whatsapp: "https://wa.me/218912508411",
    portfolio: "https://husamalwerfali.vercel.app",
    email: "husam.alwerfali@gmail.com",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 bg-grid-slate-200 [mask-image:linear-gradient(to_bottom,white_60%,transparent)]" />

      {/* ─── Navbar ─── */}
      <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Image src="/avatars/logo.png" alt="Logo" width={40} height={40} className="rounded-md" />
          <div className="flex items-center gap-6">
            <a href="#team" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">الفريق</a>
            <a href="#promo-video" className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900">الفيديو</a>

          </div>
        </div>
      </nav>

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* ─── Header Section ─── */}
        <header className="mb-20 text-center">

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            تعرف على الفريق
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-500">
            نحن مجموعة من المطورين والمصممين الشغوفين، نعمل معًا لتقديم حلول
            برمجية مبتكرة. تعرف على العقول اللامعة وراء هذا المنتج.
          </p>
        </header>

        {/* ─── Video Section ─── */}
        <section className="mx-auto mb-24 max-w-5xl" id="promo-video">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/PfisXY6mcMU"
                title="فيديو ترويجي للمشروع"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="border-t border-slate-100 px-6 py-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Play className="size-4" />
                <span>فيديو ترويجي للمشروع</span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Team Grid ─── */}
        <section id="team">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">أعضاء فريقنا</h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-slate-300" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-lg transition-shadow hover:shadow-xl"
              >
                {/* ─── Large Photo ─── */}
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* ─── Text Content on the overlay ─── */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-right">
                  <p className="text-base font-bold text-white">
                    {member.name}
                  </p>
                  <p className="text-sm text-white/60">
                    {member.role}
                  </p>

                  {/* Action buttons row */}
                  <div className="mt-4 flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border-0"
                    >
                      <a href={`mailto:${member.email}`}>
                        <Mail className="size-4 ms-1.5" />
                        إيميل
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      className="bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border-0"
                    >
                      <a
                        href={member.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon className="size-4 ms-1.5" />
                        واتساب
                      </a>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      className="bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 border-0"
                    >
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="size-4 ms-1.5" />
                        المعرض
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="mt-24 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2026 LPIFA. جميع الحقوق محفوظة.
          </p>
        </footer>
      </main>
    </div>
  );
}
