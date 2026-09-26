export const site = {
  brand: "Rikuto Masuda's Portfolio",
  name: 'Rikuto Masuda',
  fullName: '増田 陸人',
  title: 'Webディレクター / マーケター',
  tagline: '得意を磨く。特異になる。化ける。',
  ctaHref: 'https://app.spirinc.com/t/NMu8ArYvbscj3k1xT2wWu/as/-RYQQ2No-hU3xMlRPAZsL/confirm',
} as const;

export const profile = {
  role: 'Webディレクター/マーケター',
  fullName: '増田 陸人',
  nameEn: 'Rikuto Masuda',
  birth: '1999年6月28生まれ卯年',
  experience: 'Web制作/マーケ業界6年目',
  skills:
    'マーケティング企画/WEBサイトディレクション/コピーライティング/WEBサイトデザイン/広告運用/SEO戦略立案/WEBサイト構築（ヘッドレスCMS）',
  bio: '得意は店舗型ビジネスの集客と採用。指名でWEBサイト制作のディレクションやマーケティングのディレクションにアサインされることも増えてきた。ユーザー起点のボトムアップ思考でプロジェクトを進行。本質に向かうことを忘れない。',
  portrait: {
    src: '/images/profile/portrait.webp',
    width: 690,
    height: 938,
    alt: '増田 陸人のポートレート',
  },
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/rikuto_m0628/?hl=ja',
      icon: '/images/profile/ig.svg',
      width: 43,
      height: 43,
    },
    {
      label: 'Threads',
      href: 'https://www.threads.com/@rikuto_m0628',
      icon: '/images/profile/threads.svg',
      width: 42,
      height: 47,
    },
    {
      label: 'note',
      href: 'https://note.com/masuda1999',
      icon: '/images/profile/note.svg',
      width: 103,
      height: 22,
    },
  ],
} as const;

export const philosophy = {
  title: 'てつがく',
  subtitle: 'philosophy',
  headline: '向かう先は、本質',
  lead: ['外にある正解を探さない。', '本質は、ユーザーの中にしかない。'],
  figure: {
    src: '/images/philosophy/figure.webp',
    width: 83,
    height: 307,
    alt: '',
  },
  columns: [
    {
      title: ['フォーマットではなく、', '構造を疑う。'],
      body: [
        '例えば、スワイプ型LPが流行っているからといって、そのまま当てはめることはしない。',
        'LPが読まれないのは、フォーマットのせいとは限らない。',
        'クリエイティブの入り口がずれているのか、構成そのものに無理があるのか。原因はいつも、ユーザー側の視点に立ち返れば見えてくる。',
      ],
    },
    {
      title: ['“いい感じ”と、', '“機能する”は、別物である。'],
      body: [
        '“いい感じ”は、言語化が停まっている証拠。目的に沿ってUI/UXを突き詰め、“なぜそうしたか”を言い切る形に落とし込む。',
        '広告バナーなら、CTRを1%上げるため、あえて野暮ったいデザインを選ぶこともある。',
        'ただし、いやらしさとは違う。品を保ち、機能美を追求する。',
      ],
    },
    {
      title: ['目先の1件のCVよりも、', '10年関われる顧客を。'],
      body: [
        'CVの最大化ではなく、LTVの最大化を見る。',
        '今この瞬間の数字を追うのではなく、10年先も選ばれ続ける関係をつくること。目先の成果に飛びつく短絡的な施策と、本質的な設計を分けるのは、いつもこの視点の違いになる。',
        'だからこそ、一件の成果より、長く続く関係を選ぶ。',
      ],
    },
  ],
} as const;

export const services = {
  title: 'やっていること',
  subtitle: 'do',
  cards: [
    {
      title: 'WEB制作',
      items: [
        'LP制作',
        'WEBサイト制作（ヘッドレスCNS）',
        'バナー広告クリエイティブコピー',
        '動画広告クリエイティブ台本',
      ],
    },
    {
      title: 'マーケティング',
      items: [
        'マーケディレクション',
        'Meta,Google広告運用',
        'SEO戦略立案から実務まで',
        '広告運用伴走サポート',
      ],
    },
    {
      title: 'SNS戦略・運用',
      items: ['アカウント設計', 'ブランディング戦略', 'コンテンツ企画・作成'],
    },
  ],
} as const;

export const works = {
  title: 'つくったものたち',
  subtitle: 'works',
  items: [
    // 一旦非表示: 01 / 05 / 07
    // { src: '/images/works/01.webp', width: 611, height: 1262, alt: '制作実績 1' },
    { src: '/images/works/02.webp', width: 611, height: 1262, alt: '制作実績 2' },
    { src: '/images/works/03.webp', width: 611, height: 1262, alt: '制作実績 3' },
    { src: '/images/works/04.webp', width: 611, height: 1262, alt: '制作実績 4' },
    // { src: '/images/works/05.webp', width: 611, height: 1262, alt: '制作実績 5' },
    { src: '/images/works/06.webp', width: 611, height: 1262, alt: '制作実績 6' },
    // { src: '/images/works/07.webp', width: 611, height: 1262, alt: '制作実績 7' },
    { src: '/images/works/08.webp', width: 611, height: 1262, alt: '制作実績 8' },
    { src: '/images/works/09.webp', width: 611, height: 1262, alt: '制作実績 9' },
    { src: '/images/works/10.webp', width: 611, height: 1262, alt: '制作実績 10' },
    { src: '/images/works/11.webp', width: 611, height: 1262, alt: '制作実績 11' },
    { src: '/images/works/12.webp', width: 611, height: 1262, alt: '制作実績 12' },
    { src: '/images/works/13.webp', width: 611, height: 1262, alt: '制作実績 13' },
  ],
} as const;

export const performance = {
  title: 'せいか',
  subtitle: 'performance',
  lead: ['マーケティング、制作に携わったときの', '成果を一部ご紹介。'],
  /** PC: 従来どおりの1行テキスト（順序固定） */
  items: [
    '美容鍼サロンで月間新規数20名→70名安定。CPA10,000円→3,500円まで削減',
    'パーソナルピラティスの月間新規0名→10名安定、サブスク購入率70%以上',
    '一人ダイエットサロンで過去最高売上400万円達成',
    'メンズ専門アイブロウサロンで採用サイト制作後、5店舗→20店舗展開',
    'フェイシャルエステで月間新規0名→20名安定',
    '美容クリニック看護師採用で採用単価3.5万円で2名採用',
    'ネイリスト採用で採用単価1.0万円で2名採用',
    '小顔サロンで月間新規数50名、CPA3,000円',
    '整体院で月間新規数30名→60名、CPA2,000円',
  ],
  /** SP: カード用（集客 / 採用） */
  groups: [
    {
      label: '集客',
      items: [
        {
          industry: '美容鍼サロン',
          metric: { prefix: '月間新規 ', from: '20名', to: '70名' },
          detail: 'CPA 10,000円 → 3,500円',
        },
        {
          industry: 'パーソナルピラティス',
          metric: { prefix: '月間新規 ', from: '0名', to: '10名' },
          detail: 'サブスク購入率 70%以上',
        },
        {
          industry: '一人ダイエットサロン',
          metric: { prefix: '過去最高売上 ', from: '400万円', suffix: '達成' },
        },
        {
          industry: 'フェイシャルエステ',
          metric: { prefix: '月間新規 ', from: '0名', to: '20名' },
        },
        {
          industry: '小顔サロン',
          metric: { prefix: '月間新規 ', from: '50名' },
          detail: 'CPA 3,000円',
        },
        {
          industry: '整体院',
          metric: { prefix: '月間新規 ', from: '30名', to: '60名' },
          detail: 'CPA 2,000円',
        },
      ],
    },
    {
      label: '採用',
      items: [
        {
          industry: 'メンズ専門アイブロウサロン',
          metric: { prefix: '', from: '5店舗', to: '20店舗', suffix: '展開' },
          detail: '採用サイト制作後',
        },
        {
          industry: '美容クリニック看護師',
          metric: { prefix: '', from: '2名', suffix: '採用' },
          detail: '採用単価 3.5万円',
        },
        {
          industry: 'ネイリスト',
          metric: { prefix: '', from: '2名', suffix: '採用' },
          detail: '採用単価 1.0万円',
        },
      ],
    },
  ],
  note: '※必ず成果を保証するものではありません。また、上記の成果は私一人の力ではなく、クライアントのご協力、制作・マーケティングチームの尽力があっての成果です。',
  figures: {
    left: {
      src: '/images/performance/figure-left.webp',
      width: 395,
      height: 593,
      alt: '',
    },
    right: {
      src: '/images/performance/figure-right.webp',
      width: 352,
      height: 529,
      alt: '',
    },
  },
} as const;

export const cta = {
  eyebrow: '\\30-60分の壁打ち相談無料/',
  button: 'ますだに相談する',
  note: '制作もマーケティングの相談も、こちらから',
} as const;
