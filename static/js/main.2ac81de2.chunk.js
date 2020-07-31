(this["webpackJsonpd3js-react-charts-example"]=this["webpackJsonpd3js-react-charts-example"]||[]).push([[0],{33:function(t,e,a){t.exports=a(41)},34:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);a(34);var i=a(3),n=a.n(i),r=a(23),c=a.n(r),l=a(51),o=a(52),s=a(55),d=a(6),h=a(20),g=a(56),m=a(57),_=a(49),f=a(16),u=a(58),b=a(50),p=a(54);const w=(t,e,a,i)=>({name:t,type:e,desc:a,value:i}),k=(t=>{const e=[];let a=new Date;for(let i=0;i<t;++i)e.push({k:a.toISOString().slice(0,10),v:i+Math.floor(205*Math.random())}),a.setTime(a.getTime()+864e5);return e})(800),y={docs:[w("barPadding","Numeric","Adjust distance between two adjacent bars.",10),w("barWidth","Numeric","Adjust the width of each bar. Default 50",50),w("heightChart","Numeric","Height of the chart. Default 500",600),w("marginBottom","Numeric","The margin from the bottom of the element",40),w("marginLeft","Numeric","The margin from the left of the element",20),w("marginRight","Numeric","The margin from the right of the element",40),w("marginTop","Numeric","The margin from the top of the element",20),w("slidingWindow","Boolean","Display a sliding window for using the Brush",!0),w("slidingWindowHeight","Numeric","Sliding window height",160),w("title","Text","The title to display on the chart","Title")]},x=k,j={};y.docs.forEach(t=>{j[t.name]=t.value});const S=t=>{const e=Object.assign({},j,t.config),a=Object(i.useRef)(null),r=Object(i.useRef)(null),c=t.theme?t.theme:"light",w=t.data?t.data:x;function k(t,a,i){const n=Object(h.a)().extent([[0,0],[e._innerWidth,e.slidingWindowHeight-40]]);e._slidingBrush=n,e._slidingBrush.on("end",y),t.append("g").attr("class","slidingBrush").attr("transform","translate(".concat(e._margin.left+e._yAxisWidth,", 20)"));const r=a||0,c=i||0;t.select(".slidingBrush").call(n).call(n.move,[r,c])}function y(){const t=f.c.selection;if(t&&t!==[0,0]){const a=e._xScaleSliding.invert(t[0]),i=e._xScaleSliding.invert(t[1]),n=w.filter(t=>{const e=new Date(t.k);if(e>=a&&e<=i)return!0});e._currData=n,O(n,!0)}}function S(){const t=f.c.selection;if(t){const a=e._xScale.invert(t[0]),i=e._xScale.invert(t[1]),n=w.filter(t=>{const e=new Date(t.k);if(e>=a&&e<=i)return!0});n.length<=3&&(n.length=0,n.push(...e._currData)),e._currData=n,O(n,!1)}else e._dbclick?(clearTimeout(e._dbclickTimer),O(w,!0)):e._dbclickTimer=setTimeout(()=>{e._dbclick=!1},200),e._dbclick=!e._dbclick}e._data=w,e._dbclick=!1;const O=(t,i)=>{if(!i){const a=Object(l.a)(t.map(t=>new Date("".concat(t.k,"T00:00:00"))));k(e._slidingSVG,Math.floor(e._xScaleSliding(a[0])),Math.floor(e._xScaleSliding(a[1])))}const n=Object(h.a)().extent([[0,0],[e._innerWidth,e._innerHeight]]).on("end",S);Object(o.a)(t.map(t=>t.k));const r=Object(g.a)().domain(Object(l.a)(t.map(t=>new Date("".concat(t.k,"T00:00:00"))))).range([0,e._innerWidth]).nice(p.a);e._xScale=r;const s=Object(d.a)(r),f=Object(m.a)().domain(Object(l.a)(t.map(t=>t.v))).range([e._innerHeight,0]).nice(),w=Object(d.b)(f),y=Object(u.a)().curve(b.a).x(t=>r(new Date("".concat(t.k,"T00:00:00")))).y(t=>f(t.v)),x=Object(_.a)(a.current);x.selectAll("*").remove(),x.attr("width",e._width).attr("height",e._height),x.append("g").attr("class","brush").attr("transform","translate(".concat(e._margin.left+e._yAxisWidth,", ").concat(e._titleHeight+e._margin.top,")")),x.select(".brush").call(n),x.append("text").attr("x",Math.round(e._width/2)).attr("y",36).attr("text-anchor","middle").style("font-size","24px").style("font-family","Roboto").text(e._title);const j=x.append("g").attr("width",e._innerWidth).attr("height",e._innerHeight).attr("transform","translate(".concat(e._margin.left,", ").concat(e._margin.top+e._titleHeight,")"));j.append("g").call(w).style("font-size","1.2em").attr("transform","translate(".concat(e._yAxisWidth,",0)")).style("font-family","Roboto").style("color","".concat("dark"===c?"white":"black")),j.append("g").call(s).attr("transform","translate(".concat(e._yAxisWidth,", ").concat(e._innerHeight,")")).style("font-size","1em").style("color","".concat("dark"===c?"white":"black")),j.append("g").attr("class","xgrid").attr("transform","translate(".concat(e._yAxisWidth,", ").concat(e._innerHeight,")")).call(Object(d.a)(r).tickSize(-e._innerHeight).tickFormat("")).style("stroke-width",.2),j.append("g").attr("class","grid").attr("transform","translate(".concat(e._yAxisWidth,", 0)")).call(Object(d.b)(f).tickSize(-e._innerWidth).tickFormat("")).style("stroke-width",.2),j.append("path").datum(t).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("transform","translate(".concat(e._yAxisWidth,",0)")).attr("d",y)};return Object(i.useEffect)(()=>{e._margin={top:e.marginTop,right:e.marginRight,bottom:e.marginBottom,left:e.marginLeft};e._yAxisWidth=5+12*Object(s.a)(w.map(t=>t.v.toString().length)),e._title=e.title?e.title:"",e._titleHeight=0===e.title.length?0:40;const t=Object(_.a)(a.current).node();e._width=t.getBoundingClientRect().width-4,e._height=e._margin.top+e._margin.bottom+e._titleHeight+e.heightChart,e._innerWidth=e._width-e._margin.right-e._margin.left-e._yAxisWidth,e._innerHeight=e.heightChart,e._xScaleSliding=Object(g.a)().domain(Object(l.a)(e._data.map(t=>new Date("".concat(t.k,"T00:00:00"))))).range([0,e._innerWidth]).nice(p.a),e._yScaleSliding=Object(m.a)().domain([0,Object(l.a)(e._data.map(t=>t.v)).slice(-1)]).range([e.slidingWindowHeight-20,20]).nice(),!0===e.slidingWindow&&function(){const t=Object(_.a)(r.current);t.selectAll("*").remove(),t.attr("width",e._width).attr("height",e.slidingWindowHeight),e._slidingSVG=t,k(t);const a=Object(d.a)(e._xScaleSliding),i=Object(d.b)(e._yScaleSliding).tickValues(e._yScaleSliding.ticks(1).concat(e._yScaleSliding.domain())),n=t.append("g").attr("width",e._innerWidth).attr("height",e.slidingWindowHeight);n.append("g").call(a).style("font-size","1em").attr("transform","translate(".concat(e._margin.left+e._yAxisWidth,", ").concat(e.slidingWindowHeight-20,")")).style("color","".concat("dark"===c?"white":"black")),n.append("g").call(i).style("font-size","1em").attr("transform","translate(".concat(e._margin.left+e._yAxisWidth,", 0)")).style("font-family","Roboto").style("color","".concat("dark"===c?"white":"black"));const l=Object(u.a)().curve(b.a).x(t=>e._xScaleSliding(new Date("".concat(t.k,"T00:00:00")))).y(t=>e._yScaleSliding(t.v));n.append("path").datum(e._data).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("transform","translate(".concat(e._margin.left+e._yAxisWidth,",0)")).attr("d",l)}(),O(w,!0)},[t]),n.a.createElement("div",null,n.a.createElement("svg",{width:"100%",className:"d3-class",ref:a}),n.a.createElement("svg",{width:"100%",className:"d3-class",ref:r}))};var O=()=>n.a.createElement(S,{text:"Create React Library Example \ud83d\ude04"});c.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.2ac81de2.chunk.js.map