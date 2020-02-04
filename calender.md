---
layout: default
title: Kalender
---

<head>
    <meta charset='utf-8' />
    <link href='/packagesFullcalendar/core/main.css' rel='stylesheet' />
    <link href='/packagesFullcalendar/daygrid/main.css' rel='stylesheet' />
    <link href='/packagesFullcalendar/timegrid/main.css' rel='stylesheet' />
    <script src='/packagesFullcalendar/core/main.js'></script>
    <script src='/packagesFullcalendar/interaction/main.js'></script>
    <script src='/packagesFullcalendar/daygrid/main.js'></script>
    <script src='/packagesFullcalendar/timegrid/main.js'></script>
    <script type="text/javascript">
      document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          plugins: ['interaction', 'dayGrid', 'timeGrid' ],
          header: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectMirror: true,
      select: function(arg) {
        var title = prompt('Event Title:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: '/componentsFullcalendar/json/events.json'
        });
        calendar.render();
      });
    </script>
    <style>
    body {
        margin: 40px 10px;
        padding: 0;
        font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
        font-size: 14px;
    }
    #calendar {
        max-width: 900px;
        margin: 0 auto;
    }
    </style>
    <script type="text/javascript">
        $(document).ready(function(){
            $('#calendar').fullCalendar({});
            $('#calendar').fullCalendar({
                events: '/componentsFullcalendar/json/events.json'
            });
        });
</script> 
  </head>
  <body>
    <div id='calendar'></div>

</body>

<!--  -->