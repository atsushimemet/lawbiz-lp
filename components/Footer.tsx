import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary-400">
            運営について
          </h3>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              宇都宮線沿線の士業事務所向けに、<br className="sm:hidden" />
              <span className="font-semibold text-white">「スマホ対応HP + LINE導線 + Google広告」</span><br />
              をワンセットで提供するデジタルマーケティングサービスです。
            </p>
            
            <p className="text-gray-400 mb-4">
              オンライン完結でスピーディに対応いたします<br />
              <span className="font-semibold">（訪問対応は行っておりません）</span>
            </p>

            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-primary-400 mb-3">運営会社</h4>
              <div className="text-center">
                <p className="text-white font-semibold text-lg mb-2">Gosset合同会社</p>
                <p className="text-gray-400 text-sm mb-4">
                  士業向けデジタルマーケティング専門<br />
                  実績豊富なプロフェッショナルチーム
                </p>
                <a 
                  href="https://gosset-lp.vercel.app/" 
                  className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🏢 会社概要・実績を見る
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-primary-400 mb-3">対象エリア</h4>
                <p className="text-gray-400 text-sm">
                  宇都宮線沿線<br />
                  （オンライン対応）
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-400 mb-3">対象業種</h4>
                <p className="text-gray-400 text-sm">
                  税理士事務所<br />
                  司法書士事務所
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-400 mb-3">提供サービス</h4>
                <p className="text-gray-400 text-sm">
                  HP制作・LINE導線<br />
                  Google広告運用代行
                </p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm mb-4">
                ※ 本サービスは士業事務所専門のデジタルマーケティング支援サービスです<br />
                ※ 法的なアドバイスは提供しておりません
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  <span className="mr-2">💬</span>
                  無料相談はこちら
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer