"use client";

import React from "react";
import { Button, Row, Col } from "antd";
import {
  BankOutlined,
  FileTextOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  SolutionOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const tasks = [
  { icon: <FileTextOutlined />, title: "Проверка документов", desc: "Сверяю данные в заявке с нормативами. Одна ошибка — и банк теряет деньги." },
  { icon: <AuditOutlined />, title: "Контроль исполнения", desc: "Слежу, чтобы каждый кредит был закрыт вовремя. Если просрочка — действую." },
  { icon: <SafetyCertificateOutlined />, title: "Соблюдение регламентов", desc: "ЦБ и регуляторы меняют правила часто. Моя задача — чтобы банк всегда был в рамках." },
  { icon: <SolutionOutlined />, title: "Работа с просрочкой", desc: "Договариваюсь с заёмщиками, реструктурирую долги, запускаю процессы взыскания." },
  { icon: <TeamOutlined />, title: "Взаимодействие с отделами", desc: "Кредитный, юридический, розничный — все ждут от меня точной информации." },
  { icon: <BankOutlined />, title: "Формирование отчётности", desc: "Готовлю отчёты для руководства и регулятора. Цифры должны сходиться." },
  { icon: <FileTextOutlined />, title: "Обработка выкупов", desc: "Оформляю выкуп просроченных кредитов, контролирую передачу прав." },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-blue-400 text-5xl mb-6"><BankOutlined /></div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Специалист по кредитному<br />администрированию
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Человек, который следит, чтобы кредиты выдавались правильно,
            возвращались вовремя, а банк не нарушал закон.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/skills">
              <Button type="primary" size="large">
                Какие навыки нужны <ArrowRightOutlined />
              </Button>
            </Link>
            <Link href="/quiz">
              <Button size="large" className="!bg-slate-800 !text-slate-200 !border-slate-600 hover:!bg-slate-700">
                Пройти тест
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
            Кто это простыми словами
          </h2>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12">
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Представь: банк выдал 10 000 кредитов. Кто-то платит вовремя,
              кто-то забыл, а кто-то вообще пропал. <strong className="text-white">Кредитный администратор</strong> —
              это тот, кто держит всю эту машину в рабочем состоянии.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              Он проверяет документы, следит за платежами, связывается с
              заёмщиками, готовит отчёты для Центрального банка. Если что-то
              идёт не так — разбирается.
            </p>
            <p className="text-slate-400 text-base">
              Это не просто «секретарь с кредитами». Это аналитик + юрист + коммуникатор в одном лице.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            Что ты делаешь каждый день
          </h2>
          <Row gutter={[20, 20]}>
            {tasks.map((t, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 h-full hover:border-blue-500/30 transition-colors">
                  <div className="text-blue-400 text-2xl mb-3">{t.icon}</div>
                  <h3 className="text-white font-bold text-base mb-2">{t.title}</h3>
                  <p className="text-slate-400 text-sm">{t.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="bg-slate-800/50 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-white">Хочешь попробовать?</h2>
          <p className="text-slate-400 text-lg mb-8">
            Пройди тест и узнай, подходит ли тебе эта профессия.
          </p>
          <Link href="/quiz">
            <Button type="primary" size="large">Пройти тест</Button>
          </Link>
        </div>
      </section>
    </>
  );
}