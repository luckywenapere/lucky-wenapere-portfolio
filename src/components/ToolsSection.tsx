import Image from "next/image";

export default function ToolsSection() {
  return (
     <section className="relative w-full bg-gray-900 z-20 py-20">
        <div className="px-6 md:px-16">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Tools of the Trade
            </h2>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {/* Graphic Design Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/coreldraw.png"
                  alt="CorelDRAW"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">CorelDRAW</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/canva.png"
                  alt="Canva"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Canva</span>
            </div>

            {/* Filmmaking / Video Editing Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/premiere-pro.png"
                  alt="Adobe Premiere Pro"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Premiere Pro</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/after-effects.png"
                  alt="After Effects"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">After Effects</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/davinci-resolve.png"
                  alt="DaVinci Resolve"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">DaVinci Resolve</span>
            </div>

            {/* Web Development & Coding Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/html.png"
                  alt="HTML"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">HTML</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/css.png"
                  alt="CSS"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">CSS</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/javascript.png"
                  alt="JavaScript"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">JavaScript</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/php.png"
                  alt="PHP"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">PHP</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/nextjs.png"
                  alt="Next.js"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Next.js</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/bootstrap.png"
                  alt="Bootstrap"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Bootstrap</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/wordpress.png"
                  alt="WordPress"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">WordPress</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/github.png"
                  alt="GitHub"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">GitHub</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/tailwind-css.png"
                  alt="Tailwind CSS"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Tailwind CSS</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/typescript.png"
                  alt="TypeScript"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">TypeScript</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/photoshop.png"
                  alt="Photoshop"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Photoshop</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/vscode.png"
                  alt="VS Code"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">VS Code</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/cli.png"
                  alt="CLI"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">CLI</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/notion.png"
                  alt="Notion"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Notion</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/slack.png"
                  alt="Slack"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Slack</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/zoom.png"
                  alt="Zoom"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Zoom</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/microsoft-teams.png"
                  alt="Microsoft Teams"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">MS Teams</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/nodejs.png"
                  alt="Node.js"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Node.js</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/npm.png"
                  alt="NPM"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">NPM</span>
            </div>

            {/* Music Production Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/fl-studio.png"
                  alt="FL Studio"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">FL Studio</span>
            </div>

            {/* Writing & Strategy Tools */}
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/celtx.png"
                  alt="Celtx"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Celtx</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/final-draft.png"
                  alt="Final Draft"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Final Draft</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/google-docs.png"
                  alt="Google Docs"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Google Docs</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/img/tool-logos/microsoft-word.png"
                  alt="Microsoft Word"
                  width={64}
                  height={64}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-yellow-400 text-sm font-medium text-center">Microsoft Word</span>
            </div>
          </div>
        </div>
      </section>
  );
}