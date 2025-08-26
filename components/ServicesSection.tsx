import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      iconBg: "bg-blue-100",
      iconText: "WEB",
      iconColor: "text-blue-600",
      title: "ホームページ作成（1ページ構成）",
      description: "事務所紹介・対応業務・料金目安・相談の流れ・FAQ・アクセス情報を含む完全なランディングページ",
      features: ["レスポンシブデザイン", "SEO最適化", "高速表示対応"]
    },
    {
      iconBg: "bg-green-100",
      iconText: "LINE",
      iconColor: "text-green-600",
      title: "LINE導線の設置",
      description: "友だち追加ボタン・QRコード設置、自動応答での一次ヒアリング機能",
      features: ["自動応答設定", "ヒアリングテンプレート", "管理画面案内"]
    },
    {
      iconBg: "bg-purple-100",
      iconText: "ADS",
      iconColor: "text-purple-600",
      title: "Google検索広告の代行",
      description: "アカウント初期設定、地域・キーワード設定、運用開始まで完全サポート",
      features: ["キーワード選定", "広告文作成", "地域ターゲティング"]
    },
    {
      iconBg: "bg-orange-100",
      iconText: "FAST",
      iconColor: "text-orange-600",
      title: "スピード公開",
      description: "原稿・画像素材提供後、最短1営業日で公開可能",
      features: ["迅速な対応", "品質チェック", "公開後サポート"]
    },
    {
      iconBg: "bg-indigo-100",
      iconText: "EDIT",
      iconColor: "text-indigo-600",
      title: "文章サポート",
      description: "専用ひな形に沿って記入いただければ、読みやすく整えます",
      features: ["原稿・画像ひな形提供", "文章校正", "専門用語の分かりやすい説明"]
    }
  ]

  return (
    <section className="py-16 bg-white" id="services">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            提供内容
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            モニター価格1万円に含まれるサービス
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium border border-red-200">
            通常5万円相当のサービスを特別価格で提供
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="card p-6">
              <div className={`${service.iconBg} ${service.iconColor} w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold mb-4`}>
                {service.iconText}
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <span className="text-green-600 mr-2 text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Notes */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h4 className="font-semibold text-amber-900 mb-3 flex items-center">
            <span className="bg-amber-600 text-white px-2 py-1 rounded text-xs mr-2">INFO</span>
            ご注意事項
          </h4>
          <div className="space-y-2 text-sm text-amber-800">
            <p>• <strong>広告費は別途必要です</strong>（月額3万円程度からの運用を推奨）</p>
            <p>• <strong>独自ドメイン・サーバー費用は別途</strong>（既存のものがあれば流用可能）</p>
            <p>• <strong>モニター条件：</strong>制作実績として事務所名・スクリーンショット掲載にご協力ください</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection