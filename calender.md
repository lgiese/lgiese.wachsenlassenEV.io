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
      selectable: false,
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
      editable: false,
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
        margin: 300px 0 0 0;
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
<div id="column" style="width:60%;height:250px;overflow:hidden;float:left;">
    <h2> Wann geht's wieder ab in' Garten?</h2>
    <p>Wir haben immer mal wieder Aktionstermine, an denen wir möglichst viele Leute brauchen, um ordentlich was zu schaffen. Ab und zu müssen wir natürlich auch mal ein Festchen feiern oder ähnliches. Diese festen Termine findest du unten im Kalender. Ansonsten ist auch sonst immer mal wieder jemand da, vor allem an den Wochenenden. Probier's und schau vorbei. Alternativ gönnst du dir einfach ein bisschen Gartenzeit alleine oder mit Freunden/Familie!</p>
    <p>Die Wettervorhersage verrät dir noch was du anziehen sölltest und jetz aber: <b>Ab in' Garten!!!</b></p>
</div>
<div id="column" style="width:300px;height:250px;overflow:hidden;float:right;">
    <div style="position:relative;top:0px;left:0px;width:300px;height:221px;">
        <iframe src="https://kachelmannwetter.com/widget/rectangle/2873759" width="300" height="221" scrolling="no" marginheight="0" frameborder="no"></iframe>
        <div style="position:absolute;top:221px;left:0px;width:300px;height:29px;"><a style="border:0px;" href="https://kachelmannwetter.com/de/" target="_blank"><img src="https://kachelmannwetter.com/images/widgets/kachelmannwetter-logo.png" alt="kachelmannwetter.com" width="300" height="29" border="0" style="border:0px;" /></a></div>
    </div>
</div>


<h4> Wetter in: </h4>
    
<div id='calendar' style="width:100%"></div> 
</body>