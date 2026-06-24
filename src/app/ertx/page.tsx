"use client";

import React from "react";
import { Row, Col, Tag } from "antd";
import {
  BankOutlined,
  SafetyCertificateOutlined,
  BarChartOutlined,
  GlobalOutlined,
  TeamOutlined,
  AlertOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const reasons = [
  {
    icon: <BankOutlined className="text-2xl" />,
    title: "Стабильность банковского сектора",
    desc: "Кредитный портфель — основа дохода банка. Без администрирования он разваливается за полгода.",
  },
  {
    icon: <SafetyCertificateOutlined className="text-2xl" />,
    title: "Защита от штрафов ЦБ",
    desc: "Нарушение нормативов — это миллионы в штрафах. Администратор не даёт этому случиться.",
  },
  {
    icon: <BarChartOutlined className="text-2xl" />,
    title: "Контроль просроченной задолженности",
    desc: "В 2024 году просрочка по кредитам — одна из главных проблем банков. Кредитный администратор — первая линия обороны.",
  },
  {
    icon: <GlobalOutlined className="text-2xl" />,
    title: "Масштаб влияния",
    desc: "Один специалист отвечает за тысячи кредитов. Ошибка одного — убытки для тысяч клиентов.",
  },
  {
    icon: <TeamOutlined className="text-2xl" />,
    title: "Связующее звено",
    desc: "Без кредитного администратора юристы не знают, что подавать в суд, аналитики — что считать, а менеджеры — кому звонить.",
  },
  {
    icon: <AlertOutlined className="text-2xl" />,
    title: "Антиотмывочное законодательство",
    desc: "Банки обязаны выявлять подозрительные операции. Кредитный администратор — один из тех, кто это делает.",
  },
  {
    icon: <ThunderboltOutlined className="text-2xl" />,
    title: "Роль в ЭРТХ",
    desc: "ЭРТХ — это единый реестр транспортных средств. Кредитный администратор проверяет залоги, контролирует обременения и обеспечивает законность операций с транспортом через банк.",
  },
];

export default function ERTXPage() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Роль в ЭРТХ</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Почему кредитный администратор — ключевая фигура
            в работе с Единым реестром транспортных средств.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Что такое ЭРТХ</h2>
          <p className="text-slate-300 text-base leading-relaxed mb-4">
            Единый реестр транспортных средств (ЭРТХ) — государственная база данных,
            в которой хранится информация о всех транспортных средствах на территории
            России: регистрация, залоги, ограничения, ДТП, штрафы.
          </p>
          <p className="text-slate-400 text-base">
            Банки обязаны проверять реестр перед выдачей автокредитов и при
            оформлении залога транспортного средства. Это делает кредитного
            администратора ключевым звеном в процессе.
          </p>
        </div>

        <Row gutter={[20, 20]}>
          {reasons.map((r, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 h-full hover:border-blue-500/30 transition-colors">
                <div className="text-blue-400 text-2xl mb-3">{r.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{r.title}</h3>
                <p className="text-slate-400 text-sm">{r.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}