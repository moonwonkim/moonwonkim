import React from "react";

export default function SelfIntroPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6 sm:px-12">
      <div className="max-w-3xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              자기소개서
            </h1>
            <p className="mt-1 text-sm text-slate-500">교육 · F&B · IT 분야 | 영업·마케팅 지원</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-900 text-white text-sm shadow-md hover:opacity-95"
          >
            연락하기
          </a>
        </header>

        <main className="bg-white rounded-2xl shadow-lg p-8">
          <section className="prose prose-slate max-w-none">
            <p className="text-slate-700">저는 제 행동과 역할이 주변에 긍정적인 영향을 주어 사람들이 성장하도록 하는 것을 추구합니다.</p>

            <h3>학창·교육 경험</h3>
            <p>
              대학 시절 토익 스피킹 조교로 활동하며 스터디를 주도하면서 학생들이 자신감을 얻고 성취감을 느낄 수 있도록 돕던 경험은,
              사람의 성장에 영향을 주는 즐거움과 보람을 깨닫게 해주었습니다. 단순한 학습 지원을 넘어 학습 분위기를 조성하고
              동기를 부여했던 경험은, 소통과 리더십의 중요성을 몸소 느낄 수 있는 계기가 되었습니다.
            </p>

            <h3>현장·고객 경험</h3>
            <p>
              또한 식당 홀 아르바이트를 통해 고객 한 분 한 분에게 세심하게 신경 쓰며 매장의 분위기를 긍정적으로 유지한 경험은,
              영업과 마케팅에서 고객 경험을 관리하고 브랜드 가치를 높이는 역량으로 이어졌습니다. 고객 응대 과정에서 배운 경청과
              배려는, 기업 활동에서 고객의 니즈를 정확히 파악하고 충족시키는 데 강점으로 작용할 것입니다.
            </p>

            <h3>IT·조직 경험</h3>
            <p>
              전공인 소프트웨어학과를 기반으로 팀 프로젝트를 주도하며 문제를 분석하고 IT 솔루션을 적용한 경험과,
              공군 장교로 복무하며 체계적 업무 관리와 조직 협업을 심화 적용한 경험은, 전략적 사고와 실행력을 갖춘 제 강점이
              되었습니다. 특히 군 복무 기간 동안 전산 장비 운영과 IT 사업 기획, 예산 확보를 담당하며, 다양한 이해관계자와 협력해
              목표를 달성했던 경험은 실무에서 요구되는 기획력과 책임감을 한층 강화하는 계기가 되었습니다.
            </p>

            <h3>강점 및 포부</h3>
            <p>
              저는 이러한 경험들을 통해 <strong>관계 형성 능력, 문제 해결력, 체계적 실행력</strong>이라는 강점을 갖추게 되었습니다.
              이 강점은 영업과 마케팅 직무에서 고객의 요구를 정확히 이해하고 효과적인 전략을 실행하는 데 직접적으로 기여할 수
              있습니다. 동시에 저는 빠르게 변화하는 시장 환경 속에서 IT 지식을 접목한 디지털 마케팅 역량을 발휘하여 기업의
              경쟁력을 높이고자 합니다. 앞으로도 기업의 목표 달성과 제 성장이 함께 이루어지는 선순환을 만들어가며,
              조직과 함께 발전하는 인재로 나아가겠습니다.
            </p>
          </section>

          <footer className="mt-8 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-slate-500">증빙 가능한 이력</p>
              <ul className="text-sm text-slate-700 mt-2 list-inside list-disc">
                <li>소프트웨어학과 전공</li>
                <li>토익 스피킹 조교 (스터디 운영)</li>
                <li>공군 장교 복무 — 전산 장비 운영·IT 사업 기획</li>
                <li>식당 홀 아르바이트 — 고객 응대/서비스 경험</li>
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/playmates_koreachina/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full border border-slate-200 text-sm hover:shadow"
              >
                관련 SNS로 바로가기
              </a>

              <a
                href="#contact"
                id="contact"
                className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm shadow hover:opacity-95"
              >
                이력서 다운로드
              </a>
            </div>
          </footer>
        </main>

        <p className="text-center text-xs text-slate-400 mt-6">원하시면 이 페이지를 기업/직무(예: 교육·F&B·IT)에 맞춰 커스터마이즈해 드립니다.</p>
      </div>
    </div>
  );
}
