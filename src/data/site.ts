export const site = {
  name: 'Rikuto',
  fullName: '戸増田 陸人',
  title: 'Frontend / Product Engineer',
  tagline: '体験の質にこだわる、プロダクトづくり。',
  email: 'hello@example.com',
  location: 'Japan',
  socials: [
    { label: 'GitHub', href: 'https://github.com/massun1999' },
    { label: 'X', href: 'https://x.com/' },
  ],
} as const;

export const projects = [
  {
    title: 'Sample Project Alpha',
    role: 'Design & Frontend',
    year: '2025',
    summary: 'ユーザーの導線を整理し、読みやすさと操作感を両立した Web アプリ。',
    stack: ['Astro', 'TypeScript', 'Vercel'],
    href: '#',
  },
  {
    title: 'Sample Project Beta',
    role: 'Full-stack',
    year: '2024',
    summary: '社内向けダッシュボード。データ可視化と日次オペレーションを一本化。',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    href: '#',
  },
  {
    title: 'Sample Project Gamma',
    role: 'Frontend',
    year: '2024',
    summary: 'ブランドサイトの再構築。ファーストビューの印象と読み込み速度を改善。',
    stack: ['Astro', 'CSS', 'Cloudflare'],
    href: '#',
  },
] as const;
