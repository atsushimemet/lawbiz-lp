import React from 'react'

const ProblemsSection = () => {
  const problems = [
    {
      icon: "📱",
      title: "ホームページが古くスマホで読みづらい",
      description: "レスポンシブ対応していない古いサイトでは、スマホユーザーの離脱率が高くなります"
    },
    {
      icon: "📞",
      title: "問い合わせが電話のみで機会損失",
      description: "若い世代は電話を敬遠する傾向があり、LINEなどの気軽な連絡手段が必要です"
    },
    {
      icon: "🔍",
      title: "Google検索で見つけてもらいにくい",
      description: "SEO対策や広告運用ができていないため、潜在顧客にリーチできていません"
    }
  ]

  return (
    <section className="py-16 bg-gray-50" id="problems">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            このようなお悩みはありませんか？
          </h2>
          <p className="text-lg text-gray-600">
            多くの士業事務所が抱える共通の課題です
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="card p-6 text-center">
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                {problem.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">解決策はシンプルです</h3>
          <p className="text-xl mb-2">
            <span className="font-semibold">スマホ対応HP</span> + 
            <span className="font-semibold"> LINE導線</span> + 
            <span className="font-semibold"> Google広告</span>
          </p>
          <p className="text-primary-100">
            この3つをワンセットで整えることで、問い合わせ機会を確実に増やします
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection