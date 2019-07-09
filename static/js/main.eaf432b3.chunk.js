(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(7),r=a.n(s);function c(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Time-Zones-React"))}var u=a(1),i=a(2),o=a(4),m=a(3),h=a(5);function v(e){var t=e.date,a=e.dayName,n=e.monthName;return l.a.createElement("article",null,l.a.createElement("h2",null,"Local Time"),l.a.createElement("p",null,t.toLocaleTimeString()),l.a.createElement("p",null,a[t.getDay()],", ",t.getDate()," ",n[t.getMonth()]," ",t.getFullYear()))}function p(e){var t=new Date(e.date.getTime()+e.difference),a=e.utc,n=e.dayName,s=e.monthName;return l.a.createElement("article",null,l.a.createElement(E,{utc:a}),l.a.createElement("p",null,t.toLocaleTimeString()),l.a.createElement("p",null,n[t.getDay()],", ",t.getDate()," ",s[t.getMonth()]," ",t.getFullYear()))}var E=function(e){return e.utc>=0?l.a.createElement("h2",null,"UTC+",e.utc):l.a.createElement("h2",null,"UTC",e.utc)},b=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={daylightLabels:["PDT","MDT","EDT","CEST"],nonDaylightLabels:["PST","MST","EST","CET"],labels:["PDT","MDT","EDT","CEST"],daylightHours:[-7,-6,-4,2],nonDaylightHours:[-8,-7,-5,1],hours:[-7,-6,-4,2],seasonSummer:"Summer Time",seasonWinter:""},a.handleSwitch=function(){"PDT"===a.state.labels[0]?a.setState({labels:a.state.nonDaylightLabels,hours:a.state.nonDaylightHours,seasonSummer:"",seasonWinter:"Winter Time"}):"PST"===a.state.labels[0]&&a.setState({labels:a.state.daylightLabels,hours:a.state.daylightHours,seasonSummer:"Summer Time",seasonWinter:""})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"buttons_top"},l.a.createElement("div",{className:"switch_seasons"},l.a.createElement("span",{className:"span_summer"},this.state.seasonSummer),l.a.createElement("label",{className:"switch"},l.a.createElement("input",{type:"checkbox",onClick:this.handleSwitch}),l.a.createElement("div",{className:"switch_btn"})),l.a.createElement("span",{className:"span_winter"},this.state.seasonWinter)),l.a.createElement("div",{className:"pre_timezones_btn"},l.a.createElement("button",{onClick:function(){return e.props.utcChange(e.state.hours[0])}},this.state.labels[0]),l.a.createElement("button",{onClick:function(){return e.props.utcChange(e.state.hours[1])}},this.state.labels[1]),l.a.createElement("button",{onClick:function(){return e.props.utcChange(e.state.hours[2])}},this.state.labels[2]),l.a.createElement("button",{onClick:function(){return e.props.utcChange(e.state.hours[3])}},this.state.labels[3])))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:0,isOnClickDisable:!1},a.plusOnce=function(){var e=a.state.value;++e>14||a.state.isOnClickDisable||a.setState({value:e})},a.plusMultiple=function(){var e=a.state.value;a.setState({isOnClickDisable:!1}),clearInterval(a.interval),a.interval=setInterval(function(){++e>14?clearInterval(a.interval):a.setState({value:e,isOnClickDisable:!0})},250)},a.minusOnce=function(){var e=a.state.value;--e<-12||a.state.isOnClickDisable||a.setState({value:e})},a.minusMultiple=function(){var e=a.state.value;a.setState({isOnClickDisable:!1}),clearInterval(a.interval),a.interval=setInterval(function(){--e<-12?clearInterval(a.interval):a.setState({value:e,isOnClickDisable:!0})},250)},a.stopInterval=function(){clearInterval(a.interval)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"buttons_bottom"},l.a.createElement("h3",null,"UTC"),l.a.createElement("div",{className:"utc_nav"},l.a.createElement("div",null,l.a.createElement("button",{onClick:this.plusOnce,onMouseDown:this.plusMultiple,onMouseUp:this.stopInterval,onMouseOut:this.stopInterval,onTouchStart:this.plusMultiple,onTouchEnd:this.stopInterval},"+"),l.a.createElement("input",{type:"number",className:"utc_scale",value:this.state.value,readOnly:!0}),l.a.createElement("button",{onClick:this.minusOnce,onMouseDown:this.minusMultiple,onMouseUp:this.stopInterval,onMouseOut:this.stopInterval,onTouchStart:this.minusMultiple,onTouchEnd:this.stopInterval},"-")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.props.utcChange(e.state.value)}},"Set"),l.a.createElement("button",{onClick:function(){return e.setState({value:0})}},"Reset"))))}}]),t}(n.Component);function d(e){var t=e.utcChange;return l.a.createElement("article",null,l.a.createElement(b,{utcChange:t}),l.a.createElement(f,{utcChange:t}))}var C=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={date:new Date,offset:6e4*(new Date).getTimezoneOffset(),ms:36e5,utc:0,dayName:["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"],monthName:["\u044f\u043d\u0432\u0430\u0440\u044f","\u0444\u0435\u0432\u0440\u0430\u043b\u044f","\u043c\u0430\u0440\u0442\u0430","\u0430\u043f\u0440\u0435\u043b\u044f","\u043c\u0430\u044f","\u0438\u044e\u043d\u044f","\u0438\u044e\u043b\u044f","\u0430\u0432\u0433\u0443\u0441\u0442\u0430","\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f","\u043e\u043a\u0442\u044f\u0431\u0440\u044f","\u043d\u043e\u044f\u0431\u0440\u044f","\u0434\u0435\u043a\u0430\u0431\u0440\u044f"]},a.dateNow=function(){a.setState({date:new Date})},a.utcChange=function(e){a.setState({utc:e})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.timerID=setInterval(this.dateNow,1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state.offset+this.state.utc*this.state.ms,t=this.state,a=t.date,n=t.utc,s=t.dayName,r=t.monthName;return l.a.createElement("section",null,l.a.createElement(v,{date:a,dayName:s,monthName:r}),l.a.createElement(d,{utcChange:this.utcChange}),l.a.createElement(p,{date:a,utc:n,difference:e,dayName:s,monthName:r}))}}]),t}(n.Component);function g(){return l.a.createElement("footer",null)}a(14);r.a.render(l.a.createElement(function(){return l.a.createElement("div",{className:"container"},l.a.createElement(c,null),l.a.createElement(C,null),l.a.createElement(g,null))},null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.eaf432b3.chunk.js.map