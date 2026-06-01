// 最新消息資料，列表頁與內頁共用。文案取自 wanchee.com.tw 原站 news.htm
// 與 news/120504_01、news/120504_02 的雜誌掃描頁。
export const news = [
  {
    slug: 'aluminum-free-baking-powder-lab-report',
    date: '2012.05.04',
    title: '泡打粉品質保證 — 中華穀類研究所無鋁泡打粉實驗報告',
    summary: '傳統油條與添加無鋁油條膨發劑之品質口感比較（烘焙工業雜誌）。',
    intro: '本公司泡打粉品質保證，請安心食用。以下新聞引用自中華穀類研究所的無鋁泡打粉實驗文章。',
    articles: [
      {
        title: '傳統油條與添加無鋁油條膨發劑之油條品質與口感比較',
        source: '烘焙工業 159 — 2011 年 9 月（39–42 頁）',
        images: ['/images/news/p39.jpg', '/images/news/p40.jpg', '/images/news/p41.jpg'],
      },
      {
        title: '無鋁發粉在產品上之應用與試驗',
        source: '烘焙工業 150 — 2010 年 3 月（54–59 頁）',
        images: [
          '/images/news/p54.jpg',
          '/images/news/p55.jpg',
          '/images/news/p56.jpg',
          '/images/news/p57.jpg',
          '/images/news/p58.jpg',
          '/images/news/p59.jpg',
        ],
      },
    ],
  },
  {
    slug: 'aluminum-free-baking-powder-launch',
    date: '2012.04.09',
    title: '月光牌無鋁配方泡打粉上市',
    summary: '本公司推出無鋁配方月光牌泡打粉，詳情參閱產品介紹。',
    intro: '本公司推出無鋁配方的月光牌無鋁泡打粉，與全球最大食品集團 KERRY 合作，雙重發酵、穩定度第一。詳情請參閱產品介紹。',
    link: { href: '/products/aluminum-free-baking-powder', label: '查看產品介紹 — 月光牌無鋁配方泡打粉' },
  },
  {
    slug: 'website-relaunch-2012',
    date: '2012.01.01',
    title: '萬記貿易全新網頁更新',
    summary: '官方網站改版上線。',
    intro: '萬記貿易有限公司全新網頁更新上線，提供產品介紹、最新消息與聯絡資訊。',
  },
];

export function getNews(slug) {
  return news.find((n) => n.slug === slug);
}
