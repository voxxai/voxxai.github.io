/** @type {import('next').NextConfig} */
const nextConfig = {
  // next dev otherwise writes AGENTS.md / CLAUDE.md into the repo.
  agentRules: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
