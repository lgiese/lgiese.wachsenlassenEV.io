---
layout: default
title: Kalender
---

<html>
    <head>
        <meta charset='utf-8' />
        <link href='/assets/css/jquery-ui.css' rel='stylesheet' />
        <link href='/packagesFullcalendar/core/main.css' rel='stylesheet' />
        <link href='/packagesFullcalendar/daygrid/main.css' rel='stylesheet' />
        <link href='/packagesFullcalendar/timegrid/main.css' rel='stylesheet' />
        <script type='text/javascript' src='/assets/js/jquery-1.11.2.min.js'></script>
        <script type='text/javascript' src='/assets/js/jquery-ui.min.js'></script>
        <script src='/packagesFullcalendar/interaction/main.js'></script>
        <script src='/packagesFullcalendar/daygrid/main.js'></script>
        <script src='/packagesFullcalendar/timegrid/main.js'></script>
        <script type='text/javascript' src='/bower_components/underscore/underscore.js'></script>
        <script type='text/javascript' src='/bower_components/backbone/backbone.js'></script>
        <script type='text/javascript' src='/assets/js/application.js'>
        </script>
        <script type="text/javascript">
    $( document ).ready(function() {
        $('#calendar').fullCalendar({});
        $(function(){
        var Event = Backbone.Model.extend();
        var Events = Backbone.Collection.extend({
            model: Event,
            url: 'events'
        });
        var EventsView = Backbone.View.extend({
            initialize: function(){
                _.bindAll(this); 
                this.collection.bind('reset', this.addAll);
            },
            render: function() {
                this.el.fullCalendar({
                    plugins: ['interaction', 'dayGrid', 'timeGrid' ],
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                        ignoreTimezone: false
                    },
                    selectable: true,
                    selectHelper: true,
                    editable: true
                });
            },
            addAll: function(){
                this.el.fullCalendar('addEventSource', this.collection.toJSON());
            }
        });
        var events = new Events();
        new EventsView({el: $("#calendar"), collection: events}).render();
        events.fetch();
        });
    });
</script>
    </head>
    <body>
        <div id='calendar'></div>
        <div id='eventDialog' class='dialog ui-helper-hidden'>
            <form>
                <div>
                    <label>Title:</label>
                    <input id='title' class="field" type="text"></input>
                </div>
                <div>
                    <label>Color:</label>
                    <input id='color' class="field" type="text"></input>
                </div>
            </form>
        </div>       
    </body>
</html>