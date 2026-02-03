import { Twitter, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen bg-background px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-2xl">
        {/* Bio Section */}
        <article className="space-y-6 text-base leading-relaxed">
          <p>hey, i'm suhaib.</p>

          <p>17.</p>

          <p>
            i'm the founder of{" "}
            <a
              href="https://fakibaz.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              fakibaz.app
            </a>{" "}
            — building a p2p way to share handwritten notes for k-12.
          </p>

          <p>prev @akashgonga</p>

          <p>
            reach me at{" "}
            <a
              href="mailto:suhaib@fakibaz.app"
              className="text-link"
            >
              suhaib@fakibaz.app
            </a>
          </p>
        </article>

        {/* Social Links */}
        <nav className="mt-12 flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/suhaibmuntasir/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link flex items-center gap-1.5"
            aria-label="LinkedIn Profile"
          >
            <span className="text-base">linkedin</span>
          </a>
          <span className="text-muted-foreground">/</span>
          <a
            href="https://x.com/suhaibmuntasirr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link flex items-center gap-1.5"
            aria-label="X (Twitter) Profile"
          >
            <span className="text-base">x</span>
          </a>
        </nav>
      </div>
    </main>
  );
};

export default Index;
