import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : 'http://localhost:3000'
  ),
  title: '士業専門ホームページ制作 | 宇都宮線沿線限定 1万円プラン',
  description: '税理士・司法書士事務所専門のホームページ制作サービス。スマホ対応HP + LINE導線 + Google広告運用を1万円で提供。宇都宮線沿線の士業事務所限定、先着3事務所のモニターキャンペーン実施中。',
  keywords: '士業,税理士,司法書士,ホームページ制作,LINE導線,Google広告,宇都宮線,格安,モニター',
  openGraph: {
    title: '士業専門ホームページ制作 | 1万円プラン',
    description: 'スマホ対応HP + LINE導線 + Google広告を1万円で。宇都宮線沿線の士業事務所限定。',
    type: 'website',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-617366745"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-617366745');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
}