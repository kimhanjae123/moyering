import { useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const DetailTabSchedule = () => {
  const [startDate, setStartDate] = useState('2025-05-12');
  const [endDate, setEndDate] = useState('2026-06-12');
  const [events, setEvents] = useState([
    { title: '1회차', start: '2025-05-27' },
    { title: '2회차', start: '2025-06-03' },
    { title: '3회차', start: '2025-06-10' },
  ]);

  return (
    <div className="schedule-tab-container">
      <section className="date-range">
        <h3>클래스 일정</h3>
        
        <div className="dr-labels">
          <div className="dr-item-start">클래스 시작일</div>
          <div className="dr-item-end">클래스 종료일</div>
        </div>
        
        <div className="dr-inputs">
          <input
            type="date"
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <span className="dr-sep">~</span>
          <input
            type="date"
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </div>
      </section>

      <section className="calendar-section">
        <h3>일정 설정</h3>
        <div className="calendar-box">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="ko"
            events={events}
            height="auto"
          />
        </div>
      </section>
    </div>
  );
};

export default DetailTabSchedule;
