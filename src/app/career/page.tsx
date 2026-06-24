"use client";

import React from "react";
import { Row, Col, Timeline, Tag } from "antd";
import {
  ReadOutlined,
  ExperimentOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
  TrophyOutlined,
  BankOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { Button } from "antd";

const steps = [
  {
    icon: <ReadOutlined />,
    title: "Учись в вузе",
    desc: "Экономика, финансы, бухучёт или юриспруденция. Не обязательно МГУ — главное понимать базу.",
    tags: ["3–5 лет"],
  },
  {
    icon: <ExperimentOutlined />,
    title: "Стажировка в банке",
    desc: "Пока учишься — ищи стажировки. Даже бесплатная. Ты увидишь, как это работает изнутри.",
    tags: ["3–6 мес."],
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: "Получи сертификаты",
    desc: "Курсы по кредитованию, антиотмывочному законодательству. Ценятся: ИББС, РШЧФ, НИУ ВШЭ.",
    tags: ["1–3 мес."],
  },
  {
    icon: <RocketOutlined />,
    title: "Начни с позиции",
    desc: "Кредитный администратор, специалист операционного отдела, помощник аналитика. Любой вход в банк.",
    tags: ["0–1 год"],
  },
  {
    icon: <TrophyOutlined />,
    title: "Расти",
    desc: "Через 2–3 года — старший администратор. Через 5 — руководитель кредитного подразделения.",
    tags: ["2–5 лет"],
  },
  {
    icon: <BankOutlined />,
    title: "Стань экспертом",
    desc: "Кредитный директор, риск-менеджер, внутренний аудитор. Двери открыты везде.",
    tags: ["5+ лет"],
  },
];

export default function CareerPage() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Карьера</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Как студенту войти в кредитное администрирование и расти.
            Пошаговый план — без воды.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-white text-center">
            План действий
          </h2>
          <Row gutter={[24, 24]}>
            {steps.map((s, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 h-full hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                      {s.icon}
                    </div>
                    <h3 className="text-white font-bold text-base !mb-0">{s.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <Tag key={t} color="blue" className="!text-xs">{t}</Tag>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Совет студенту</h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            Не жди окончания вуза. Уже сейчас читай нормативы ЦБ, проходи
            курсы на Stepik, ищи стажировки. Первые полгода в банке —
            бесценный опыт.
          </p>
          <Link href="/quiz">
            <Button size="large" className="!bg-white !text-blue-700 !border-white">
              Узнать, подходит ли тебе <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}