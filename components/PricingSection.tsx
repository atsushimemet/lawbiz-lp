'use client'

import React from 'react'

// Google Ads コンバージョン追跡関数
declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void
  }
}

const handleConversion = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-617366745/sCN4CI2u6I0bENmJsaYC'
    })
  }
}

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            料金プラン
          </h2>
          <p className="text-lg text-gray-600">
            明確でシンプルな料金体系
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Regular Plan */}
            <div className="card p-8 text-center relative flex flex-col h-full">
              {/* Spacer for badge alignment */}
              <div className="h-8 mb-4"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">通常プラン</h3>
              
              {/* Price section with consistent height */}
              <div className="mb-8 h-24 flex flex-col justify-center">
                <div className="text-4xl font-bold text-gray-600 mb-2">5万円</div>
                <p className="text-gray-500">（税込）</p>
              </div>

              {/* Features list with flex-grow to fill available space */}
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">ホームページ作成（1ページ）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">LINE導線設置</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">Google広告初期設定・運用代行</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">文章サポート</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">アフターサポート</span>
                </li>
              </ul>
              
              {/* Button and note section */}
              <div className="mt-auto">
                <button className="btn-secondary w-full mb-4" disabled>
                  通常受付
                </button>
                {/* Spacer for note alignment */}
                <div className="h-6"></div>
              </div>
            </div>

            {/* Monitor Plan */}
            <div className="card p-8 text-center relative border-2 border-red-500 bg-gradient-to-b from-white to-red-50 flex flex-col h-full">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  先着3事務所限定
                </div>
              </div>
              
              <div className="h-8 mb-4"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">モニタープラン</h3>
              
              {/* Price section with consistent height */}
              <div className="mb-8 h-24 flex flex-col justify-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-2xl text-gray-400 line-through mr-3">5万円</span>
                  <div className="text-4xl font-bold text-red-600">1万円</div>
                </div>
                <p className="text-red-600 font-semibold">80% OFF</p>
                <p className="text-gray-500 text-sm">（税込）</p>
              </div>

              {/* Features list with flex-grow to fill available space */}
              <ul className="text-left space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">ホームページ作成（1ページ）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">LINE導線設置</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">Google広告初期設定・運用代行</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">文章サポート</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span className="text-gray-700">アフターサポート</span>
                </li>
              </ul>

              {/* Button and note section */}
              <div className="mt-auto">
                <a 
                  href="https://lin.ee/jlYnS13V" 
                  className="btn-primary w-full text-lg py-4 bg-red-600 hover:bg-red-700 mb-4 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConversion}
                >
                  今すぐ申し込む
                </a>
                
                <p className="text-xs text-gray-500 h-6 flex items-center justify-center">
                  ※ モニター条件：制作実績として事務所名・スクリーンショット掲載
                </p>
              </div>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              制作の流れ
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "1", title: "LINE相談", desc: "3分で基本情報入力" },
                { step: "2", title: "打合せ", desc: "オンライン30分程度" },
                { step: "3", title: "原稿・画像素材提供", desc: "ひな形あり" },
                { step: "4", title: "制作", desc: "HP・LINE・広告設定" },
                { step: "5", title: "公開", desc: "最短1営業日" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-primary-600 font-semibold">
                オンライン完結・訪問対応なし
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection