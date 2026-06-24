"use client";

import React from "react";
import { Timeline, Tag } from "antd";
import {
  ClockCircleOutlined,
  FileTextOutlined,
  PhoneOutlined,
  TeamOutlined,
  CoffeeOutlined,
  CheckCircleOutlined,
  EditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const dayEvents = [
  {
    color: "blue",
    dot: <ClockCircleOutlined />,
    children: (
      <div>
        <p className="text-white font-bold">09:00 — Начало дня</p>
        <p className="text-slate-400 text-sm">Открываю почту. 12 новых заявок на реструктуризацию. Распределяю по специалистам.</p>
      </div>
    ),
  },
  {
    color: "blue",
    dot: <FileTextOutlined />,
    children: (
      <div>
        <p className="text-white font-bold">09:30 — Проверка документов</p>
        <p className="text-slate-400 text-sm">Три заявки на кредит. Сверяю данные с нормативами ЦБ. Одна заявка — с ошибкой в справке о доходах. Возвращаю на доработку.</p>
      </div>
    ),
  },
  {
    color: "blue",
    dot: <PhoneOutlined />,
    children: (
      <div>
        <p className="text-white font-bold">11:00 — Звонок заёмщику</p>
        <p className="text-slate-400 text-sm">Клиент просрочил платёж на 5 дней. Выясняю причину. Договариваемся о графике погашения. Фиксирую всё в CRM.</p>
      </div>
    ),
  },
  {
    color: "green",
    dot: <CoffeeOutlined />,
    children: (
      <div>
        <p className="text-white font-bold">12:30 — Перерыв</p>
        <p className="text-slate-400 text-sm">Кофе, обед, прогулка. Без этого мозг не работает.</p>
      </div>
    ),
  },
  {
    color: "blue",
    dot: <TeamOutlined />,
    children: (
      <div>
        <p className="text-white font-bold">14:00 — Совещание с кредитным отделом</p>
        <p className="text-slate-400 text-sm">Обсуждаем портфель просроченных кредитов. Принимаем решение о реструктуризации 23 задолженностей.</p>
      </div>
    ),
  },
  {
    color: "blue",
    dot: <EditOutlined />,
    children: (
      <div>
        <p className="text-white font-bold">15:30 — Отчётность</p>
        <p className="text-slate-400 text-sm">Готовлю ежемесячный отчёт для руководства. Цифры, динамика, прогнозы. Завтраresentation перед директором.</p>
      </div>
    ),
  },
  {
    color: "blue",
    dot: <FileDoneOutlined />,
    children: (
      <div>
        <p className="text-white font-bold">17:00 — Выкуп просроченных кредитов</p>
        <p className="text-slate-400 text-sm">Оформляю пакет документов на передачу права требования. Юрист проверяет — всё чисто.</p>
      </div>
    ),
  },
  {
    color: "green",
    dot: <CheckCircleOutlined />,
    children: (
      <div>
        <p className="text-white font-bold">18:00 — Конец дня</p>
        <p className="text-slate-400 text-sm">Закрываю задачи в трекере. Завтра — новые заявки и одна проверка от регулятора. Всё под контролем.</p>
      </div>
    ),
  },
];

export default function DayPage() {
  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">Один день из жизни</h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Как выглядит рабочий день кредитного администратора. Ни фантазии — только реальность.
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-10">
          <Timeline items={dayEvents} />
        </div>

        <div className="mt-8 bg-slate-800/30 border border-slate-700/30 rounded-xl p-6 text-center">
          <p className="text-slate-400 text-sm">
            Времена и задачи меняются в зависимости от банка, отдела и текущей ситуации.
            Но суть одна: проверять, контролировать, решать.
          </p>
        </div>
      </div>
    </div>
  );
}