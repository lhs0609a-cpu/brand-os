export default function Home() {
  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern opacity-50" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[128px] animate-pulse-glow" />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">
            B
          </div>
          <span className="font-semibold text-lg">Brand OS</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm text-white/70 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-medium rounded-full bg-white text-black hover:bg-white/90 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm rounded-full glass">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/80">Now in Public Beta</span>
        </div>

        <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
          Your Brand,{" "}
          <span className="gradient-text">Elevated</span>
        </h1>

        <p className="max-w-2xl mt-6 text-lg md:text-xl text-white/60 leading-relaxed">
          The next-generation platform for building, managing, and scaling your brand identity.
          Powered by AI. Designed for creators.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <button className="px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity glow">
            Start Free Trial
          </button>
          <button className="px-8 py-4 text-base font-medium rounded-full glass hover:bg-white/10 transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Demo
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-12 mt-20 text-center">
          <div>
            <div className="text-4xl font-bold gradient-text">10K+</div>
            <div className="text-sm text-white/50 mt-1">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text">50M+</div>
            <div className="text-sm text-white/50 mt-1">Assets Created</div>
          </div>
          <div>
            <div className="text-4xl font-bold gradient-text">99.9%</div>
            <div className="text-sm text-white/50 mt-1">Uptime</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-32 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="gradient-text">stand out</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Powerful tools that help you create, manage, and scale your brand effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="group p-8 rounded-3xl glass gradient-border hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Asset Generation</h3>
            <p className="text-white/50 leading-relaxed">
              Generate stunning visuals, logos, and brand assets with our advanced AI engine.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="group p-8 rounded-3xl glass gradient-border hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Color System</h3>
            <p className="text-white/50 leading-relaxed">
              Automatically generate harmonious color palettes that match your brand personality.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="group p-8 rounded-3xl glass gradient-border hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Template Library</h3>
            <p className="text-white/50 leading-relaxed">
              Access thousands of professionally designed templates for any platform or use case.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="group p-8 rounded-3xl glass gradient-border hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Team Collaboration</h3>
            <p className="text-white/50 leading-relaxed">
              Work together seamlessly with real-time editing, comments, and version history.
            </p>
          </div>

          {/* Feature Card 5 */}
          <div className="group p-8 rounded-3xl glass gradient-border hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
            <p className="text-white/50 leading-relaxed">
              Track brand performance and engagement with comprehensive analytics and insights.
            </p>
          </div>

          {/* Feature Card 6 */}
          <div className="group p-8 rounded-3xl glass gradient-border hover:bg-white/[0.08] transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">API & Integrations</h3>
            <p className="text-white/50 leading-relaxed">
              Connect with your favorite tools and automate your brand workflow with our API.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center p-12 md:p-20 rounded-[2.5rem] glass gradient-border">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to transform your{" "}
            <span className="gradient-text">brand?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Join thousands of creators and businesses who trust Brand OS to build their identity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold rounded-full bg-white text-black hover:bg-white/90 transition-colors">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 text-base font-medium rounded-full border border-white/20 hover:bg-white/10 transition-colors">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 md:px-12 lg:px-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">
              B
            </div>
            <span className="font-semibold">Brand OS</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-sm text-white/30">
            &copy; 2025 Brand OS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
