import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import WritingSection from "@/components/WritingSection";

interface HomePost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

interface HomeClientProps {
  latestPosts: HomePost[];
}

export default function HomeClient({ latestPosts }: HomeClientProps) {
  return (
    <div className="relative min-h-screen w-full font-sans text-[var(--foreground)]">
      <Header />
      <main className="relative">
        <HeroSection />
        <ExpertiseSection />
        <ClientsSection />
        <WritingSection posts={latestPosts} />
      </main>
      <Footer />
    </div>
  );
}
