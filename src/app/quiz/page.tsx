"use client";

import React, { useState } from "react";
import { Button, Radio, Result, Progress, Tag } from "antd";
import { ArrowRightOutlined, CheckCircleOutlined, CloseCircleOutlined, ReloadOutlined } from "@ant-design/icons";

interface Question {
  q: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    q: "Что проверяет кредитный администратор в первую очередь?",
    options: ["Кредитную историю заёмщика", "Заявку на кредит", "Доходы руководителя банка", "Курс доллара"],
    correct: 1,
    explanation: "Первым делом — сверка заявки с нормативами банка и ЦБ.",
  },
  {
    q: "Кто устанавливает нормативы для банков?",
    options: ["Минфин", "Центральный банк РФ", "Правительство", "Налоговая"],
    correct: 1,
    explanation: "ЦБ РФ — главный регулятор банковской деятельности.",
  },
  {
    q: "Что такое просроченная задолженность?",
    options: ["Кредит, который ещё не одобрен", "Платёж, не внесённый в срок", "Кредит с пониженной ставкой", "Закрытый кредит"],
    correct: 1,
    explanation: "Просрочка — это когда заёмщик не вернул деньги в установленный срок.",
  },
  {
    q: "Зачем банк проверяет ЭРТХ при выдаче автокредита?",
    options: ["Узнать цвет машины", "Проверить, не в залоге ли транспорт", "Посчитать пробег", "Узнать модель"],
    correct: 1,
    explanation: "ЭРТХ показывает обременения — если машина в залоге, выдавать кредит рискованно.",
  },
  {
    q: "Какой навык важнее всего для кредитного администратора?",
    options: ["Умение программировать", "Внимание к деталям", "Знание иностранных языков", "Навыки продаж"],
    correct: 1,
    explanation: "Одна ошибка в цифрах = убыток для банка. Внимание — критически важно.",
  },
  {
    q: "Что делает кредитный администратор при просрочке?",
    options: ["Ничего — это дело юристов", "Связывается с заёмщиком и ищет решение", "Подаёт в суд сразу", "Прощает долг"],
    correct: 1,
    explanation: "Сначала — коммуникация. Суд — это крайняя мера.",
  },
  {
    q: "Что такое реструктуризация кредита?",
    options: ["Закрытие кредита досрочно", "Изменение условий кредита для заёмщика", "Выдача нового кредита", "Передача кредита другому банку"],
    correct: 1,
    explanation: "Реструктуризация — изменение графика или суммы платежа, чтобы заёмщик мог выплатить долг.",
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));

  const q = questions[current];
  const progress = ((current + 1) / questions.length) * 100;

  const handleCheck = () => {
    if (selected === null) return;
    const newAnswers = [...answers];
    newAnswers[current] = selected;
    setAnswers(newAnswers);

    if (selected === q.correct) setScore((s) => s + 1);

    if (current < questions.length - 1) {
      setTimeout(() => {
        setCurrent((c) => c + 1);
        setSelected(null);
      }, 1200);
    } else {
      setTimeout(() => setShowResult(true), 1200);
    }
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswers(new Array(questions.length).fill(null));
  };

  if (showResult) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="py-12 md:py-20 px-4">
        <div className="max-w-xl mx-auto">
          <Result
            icon={pct >= 70 ? <CheckCircleOutlined className="!text-green-500" /> : <CloseCircleOutlined className="!text-red-500" />}
            title={pct >= 70 ? "Ты справился!" : "Есть над чем поработать"}
            subTitle={`Правильных ответов: ${score} из ${questions.length} (${pct}%)`}
            extra={[
              <Button key="reset" type="primary" icon={<ReloadOutlined />} onClick={reset}>
                Пройти ещё раз
              </Button>,
            ]}
          />
          <div className="mt-8 space-y-3">
            {questions.map((q, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                <p className="text-white text-sm font-bold mb-2">{q.q}</p>
                <div className="flex items-center gap-2 mb-1">
                  <Tag color={answers[i] === q.correct ? "green" : "red"}>
                    {answers[i] === q.correct ? "Верно" : "Неверно"}
                  </Tag>
                  <span className="text-slate-400 text-xs">{q.explanation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-20 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Тест</h1>
          <p className="text-slate-400 text-base">
            Проверь, подходит ли тебе профессия кредитного администратора.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>Вопрос {current + 1} из {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress percent={progress} showInfo={false} strokeColor="#2563eb" />
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-bold text-white mb-6">{q.q}</h2>
          <Radio.Group
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="w-full"
          >
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <Radio key={i} value={i} className="w-full">
                  <span className="text-slate-300 text-sm">{opt}</span>
                </Radio>
              ))}
            </div>
          </Radio.Group>

          {selected !== null && (
            <div className={`mt-4 p-3 rounded-lg text-sm ${selected === q.correct ? "!bg-green-500/10 !border-green-500/30 !text-green-400" : "!bg-red-500/10 !border-red-500/30 !text-red-400"}`}>
              {selected === q.correct ? "✓ Правильно!" : "✗ Неправильно."} {q.explanation}
            </div>
          )}

          <Button
            type="primary"
            block
            size="large"
            className="mt-6"
            disabled={selected === null}
            onClick={handleCheck}
          >
            {current < questions.length - 1 ? "Следующий вопрос" : "Показать результат"}
          </Button>
        </div>
      </div>
    </div>
  );
}