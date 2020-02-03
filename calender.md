---
layout: default
title: Kalender
---

<head>
<style>

</style>
</head>
<body>   
    <div id="calendar"></div>

    
<script type="text/javascript">
        $(document).ready(function(){
            $('#calendar').fullCalendar({});
            $('#calendar').fullCalendar({
                events: '/events.json'
            });
        });
    </script>    
</body>

