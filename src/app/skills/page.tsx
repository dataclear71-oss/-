"use client";

import React from "react";
import { Row, Col, Tag, Typography } from "antd";
import {
  CodeOutlined,
  TeamOutlined,
  ReadOutlined,
  ToolOutlined,
  FileSearchOutlined,
  CommentOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const hardSkills = [
  { name: "Законодательство ЦБ", level: 95 },
  { name: "1С: Банк / Кредитование", level: 90 },
  { name: "Анализ финансовой отчётности", level: 85 },
  { name: "Excel / Google Sheets", level: 90 },
  { name: "Бухгалтерский учёт", level: 80 },
  { name: "Основы юриспруденции", level: 70 },
  { name: "CRM-системы банков", level: 85 },
  { name: "Антиотмывочное законодательство", level: 75 },
];

const softSkills = [
  "Внимание к деталям",
  "Стрессоустойчивость",
  "Коммуникация",
  "Аналитическое мышление",
  "Организованность",
  "Умение договариваться",
  "Честность",
  "Самодисциплина",
];

export default function SkillsPage() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Title level={1} className="!text-3xl md:!text-5xl !mb-4 !text-white">
            Навыки
          </Title>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Без этих знаний в кредитном администрировании делать нечего.
            Вот что нужно знать и уметь.
          </p>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={12}>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                  <CodeOutlined className="text-xl" />
                </div>
                <h2 className="text-xl font-bold !mb-0 text-white">Hard Skills</h2>
              </div>
              <p className="text-slate-400 text-sm mb-6">Технические знания — без них не справишься.</p>
              <div className="space-y-4">
                {hardSkills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-slate-300">{s.name}</span>
                      <span className="text-slate-500">{s.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full transition-all" style={{ width: `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={24} lg={12}>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                  <TeamOutlined className="text-xl" />
                </div>
                <h2 className="text-xl font-bold !mb-0 text-white">Soft Skills</h2>
              </div>
              <p className="text-slate-400 text-sm mb-6">Качества, которые отличают хорошего администратора от посредственного.</p>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((s) => (
                  <Tag key={s} color="blue" className="!text-sm !py-2 !px-4">{s}</Tag>
                ))}
              </div>

              <div className="mt-8 bg-slate-900/50 rounded-xl p-6 border border-slate-700/30">
                <h3 className="text-white font-bold text-base mb-3">Почему это важно</h3>
                <ul className="space-y-2">
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    Ошибка в расчёте = убыток для банка и штраф от ЦБ
                  </li>
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    Плохая коммуникация = испорченные отношения с клиентом
                  </li>
                  <li className="text-slate-400 text-sm flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">→</span>
                    Без знания закона банк может потерять лицензию
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}