'use client'

import React, { useState } from 'react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "広告費はいくらから始められますか？",
      answer: "月額3万円程度からテスト運用が可能です。地域やキーワードの競合状況により最適な予算をご提案いたします。効果を見ながら段階的に予算を調整していくことをおすすめしています。"
    },
    {
      question: "文章や画像素材が苦手です。原稿は用意できますか？",
      answer: "ご安心ください。専用の原稿・画像素材ひな形をご用意しています。箇条書きメモや簡単な情報提供、スマホでの写真撮影でも構いません。お客様に読みやすく、検索エンジンにも最適化されたコンテンツに整えさせていただきます。"
    },
    {
      question: "なぜ1万円という価格なのですか？",
      answer: "実績作りのためのモニターキャンペーンです。先着3事務所様限定で、制作実績として事務所名とスクリーンショット掲載にご協力いただく条件で特別価格を実現しています。4事務所目以降は通常価格5万円となります。"
    },
    {
      question: "どのような地域が対象ですか？",
      answer: "宇都宮線沿線の士業事務所様が対象です。オンライン完結のため、訪問対応は行いませんが、ビデオ通話での打合せで十分な品質のサービスを提供いたします。"
    },
    {
      question: "制作期間はどのくらいかかりますか？",
      answer: "原稿・画像素材をご提供いただいてから最短1営業日で公開可能です。ただし、内容の確認や修正が必要な場合は3-5営業日程度いただく場合があります。お急ぎの場合は事前にご相談ください。"
    },
    {
      question: "アフターサポートはありますか？",
      answer: "はい。公開後1ヶ月間は無料でサポートいたします。LINE設定のサポート、Google広告の初期調整、簡単な修正対応などを含みます。継続的なサポートをご希望の場合は別途ご相談ください。"
    }
  ]

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            よくあるご質問
          </h2>
          <p className="text-lg text-gray-600">
            お客様からよくいただくご質問にお答えします
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900 text-lg pr-4">
                      Q. {faq.question}
                    </h3>
                    <div className={`transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        A. {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-primary-900 mb-2">
              他にもご質問がございましたら
            </h3>
            <p className="text-primary-700 mb-4">
              LINEでお気軽にお問い合わせください。専門スタッフが丁寧にお答えします。
            </p>
            <a 
              href="https://lin.ee/jlYnS13V" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">💬</span>
              LINEで質問する
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection