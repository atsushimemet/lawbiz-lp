import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="section-container py-16 lg:py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6 border border-amber-200">
            <span className="w-2 h-2 bg-amber-600 rounded-full mr-2 animate-pulse"></span>
            先着3事務所限定
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            士業専門の<br className="sm:hidden" />
            <span className="text-primary-600">ホームページ制作</span>
            <div className="mt-4">
              <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                特別価格 1万円
              </span>
            </div>
          </h1>

          {/* Price Comparison */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className="text-xl text-gray-500 line-through">通常価格 5万円</span>
            <div className="w-8 h-px bg-gray-400"></div>
            <span className="text-2xl font-bold text-red-600 bg-red-50 px-4 py-2 rounded-lg border border-red-200">
              モニター価格 1万円
            </span>
          </div>

          {/* Target Audience */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            対象：<span className="font-semibold text-gray-900">宇都宮線沿線</span>の税理士・司法書士事務所<br />
            <span className="text-lg">オンライン完結・訪問対応なし</span>
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl border">
              <div className="text-primary-600 text-2xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">スマホ対応HP</h3>
              <p className="text-gray-600 text-sm">レスポンシブデザインで全デバイス対応</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border">
              <div className="text-green-600 text-2xl mb-3">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">LINE問い合わせ導線</h3>
              <p className="text-gray-600 text-sm">自動応答システム付きで効率的</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl border">
              <div className="text-blue-600 text-2xl mb-3">🔍</div>
              <h3 className="font-semibold text-gray-900 mb-2">Google広告運用代行</h3>
              <p className="text-gray-600 text-sm">初期設定から運用開始まで完全サポート</p>
            </div>
          </div>

          {/* Speed Note */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-10 max-w-md mx-auto">
            <p className="text-blue-800 font-medium">
              ⚡ 最短1営業日で公開可能
            </p>
            <p className="text-blue-600 text-sm mt-1">
              原稿・画像素材が揃っている場合
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="https://lin.ee/jlYnS13V" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="mr-2">💬</span>
              LINEで無料相談
            </Link>
            <Link 
              href="#services" 
              className="btn-secondary text-lg py-4 px-8"
            >
              詳細を確認
            </Link>
          </div>

          {/* Trust Elements */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm mb-4">安心してご利用いただけます</p>
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-green-600 mr-1">✓</span>
                オンライン完結
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-1">✓</span>
                実績重視の品質
              </div>
              <div className="flex items-center">
                <span className="text-green-600 mr-1">✓</span>
                アフターサポート付き
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection