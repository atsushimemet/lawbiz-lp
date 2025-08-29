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

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700" id="contact">
      <div className="section-container">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            今すぐ無料相談を始めましょう
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            先着3事務所限定のモニターキャンペーン<br />
            お早めにお申し込みください
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* LINE Contact */}
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <div className="text-center">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-lg flex items-center justify-center text-sm font-bold mb-4 mx-auto">
                  LINE
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  LINEで無料相談
                </h3>
                <p className="text-gray-600 mb-6">
                  友だち追加で自動ヒアリングが開始されます
                </p>
                
                <a 
                  href="https://lin.ee/jlYnS13V" 
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleConversion}
                >
                  <span className="bg-white text-green-600 px-2 py-1 rounded text-xs mr-3 font-bold">APP</span>
                  友だち追加する
                </a>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">QRコードでも追加可能</p>
                  <div className="bg-white h-32 rounded-lg flex items-center justify-center">
                    <img 
                      src="https://qr-official.line.me/gs/M_906lvrvs_GW.png?oat_content=qr" 
                      alt="LINE友達追加QRコード"
                      className="h-28 w-28 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                LINEで相談するメリット
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="bg-yellow-400 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>24時間いつでも送信OK</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-400 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span>3分で基本情報を入力完了</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-400 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span>自動ヒアリング後、担当者からご連絡</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-400 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <span>しつこい営業は一切いたしません</span>
                </div>
                <div className="flex items-start">
                  <span className="bg-yellow-400 text-yellow-900 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">5</span>
                  <span>相談だけでも大歓迎です</span>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <div className="bg-red-600 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold mb-2">
              <span className="bg-white text-red-600 px-2 py-1 rounded text-sm mr-2">重要</span>
              お急ぎください
            </h3>
            <p className="text-red-100">
              モニター価格1万円は先着3事務所限定です<br />
              4事務所目以降は通常価格5万円となります
            </p>
          </div>

          {/* Trust Signals */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm">
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>完全無料相談</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>オンライン完結</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-green-400 mr-2">✓</span>
              <span>無理な勧誘なし</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection