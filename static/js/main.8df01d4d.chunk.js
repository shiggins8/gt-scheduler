(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,n){e.exports=n(97)},72:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"db",function(){return v}),n.d(r,"env",function(){return M}),n.d(r,"user",function(){return W}),n.d(r,"actions",function(){return Y});var a=n(0),s=n.n(a),i=n(36),c=n.n(i),o=n(11),u=n(20),l=n(9),d=n(12),f=n(100),p=n(98),h=n(99),m=Object(f.a)("".concat("DB","/SET_OSCAR"),function(e){return{oscar:e}}),b={setOscar:m},v=Object(p.a)(Object(d.a)({},Object(h.a)(m),function(e,t){var n=t.payload;return Object(l.a)({},e,n)}),{oscar:null}),E=n(3),g=n(16),O=["M","T","W","R","F"],y=function(e){var t=/(\d{1,2}):(\d{2}) (a|p)m/.exec(e),n=Object(g.a)(t,4),r=n[1],a=n[2];return 60*(("p"===n[3]?12:0)+Number.parseInt(r%12))+Number.parseInt(a)},C=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e/60|0,r=e%60;return"".concat(n>12?n-12:n,":").concat(r<10?"0"+r:r).concat(t?" ".concat(n<12?"a":"p","m"):"")},j=function(e){return e?"".concat(C(e.start,!1)," - ").concat(C(e.end)):"TBA"},N=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,n="#",r=0;r<3;r++){var a=(Math.random()*(t-e)+e|0).toString(16);n+=(1===a.length?"0":"")+a}return n},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#BBBBBB";return.299*parseInt(e.substring(1,3),16)+.587*parseInt(e.substring(3,5),16)+.114*parseInt(e.substring(5,7),16)>128?"dark-content":"light-content"},k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")},w=function(){return window.innerWidth<768},x=function(e){return Object(E.a)(new Set(e))},A=Object(f.a)("".concat("ENV","/SET_MOBILE"),function(e){return{mobile:e}}),T={setMobile:A},D={mobile:w()},M=Object(p.a)(Object(d.a)({},Object(h.a)(A),function(e,t){var n=t.payload;return Object(l.a)({},e,n)}),D),R=n(27),I=n.n(R),F=Object(f.a)("".concat("USER","/SET_DESIRED_COURSES"),function(e){return{desiredCourses:e}}),B=Object(f.a)("".concat("USER","/SET_PINNED_CRNS"),function(e){return{pinnedCrns:e}}),L=Object(f.a)("".concat("USER","/SET_EXCLUDED_CRNS"),function(e){return{excludedCrns:e}}),_=Object(f.a)("".concat("USER","/SET_COLOR_MAP"),function(e){return{colorMap:e}}),P={setDesiredCourses:F,setPinnedCrns:B,setExcludedCrns:L,setColorMap:_},U=function(){var e=null;try{e=JSON.parse(I.a.get("data"))}catch(l){e={}}var t=e,n=t.desiredCourses,r=void 0===n?[]:n,a=t.pinnedCrns,s=void 0===a?[]:a,i=t.excludedCrns,c=void 0===i?[]:i,o=t.colorMap,u=void 0===o?{}:o;return r.forEach(function(e){e in u||(u[e]=N())}),{desiredCourses:r,pinnedCrns:s,excludedCrns:c,colorMap:u}}(),W=Object(p.a)(Object(d.a)({},Object(h.a)(F,B,L,_),function(e,t){var n=t.payload,r=Object(l.a)({},e,n);return function(e){var t=e.desiredCourses,n=void 0===t?[]:t,r=e.pinnedCrns,a=void 0===r?[]:r,s=e.excludedCrns,i=void 0===s?[]:s,c=e.colorMap,o=void 0===c?{}:c;I.a.set("data",JSON.stringify({desiredCourses:n,pinnedCrns:a,excludedCrns:i,colorMap:o}),{expires:365})}(r),r}),U),Y=Object(l.a)({},b,T,P),H=n(2),V=n(4),G=n(7),z=n(5),q=n(6),K=n(8),J=n(39),X=n.n(J),Z=n(40),$=n.n(Z),Q=n(41),ee=n.n(Q),te=function(e,t){if(!(navigator.userAgent.indexOf("MSIE")>-1&&-1==navigator.userAgent.indexOf("MSIE 10"))){"undefined"===typeof e&&(e="default"),"undefined"===typeof t&&(t="Calendar");var n=-1!==navigator.appVersion.indexOf("Win")?"\r\n":"\n",r=[],a=["BEGIN:VCALENDAR","PRODID:"+t,"VERSION:2.0"].join(n),s=n+"END:VCALENDAR",i=["SU","MO","TU","WE","TH","FR","SA"];return{events:function(){return r},calendar:function(){return a+n+r.join(n)+s},addEvent:function(t,a,s,c,o,u){if("undefined"===typeof t||"undefined"===typeof a||"undefined"===typeof s||"undefined"===typeof c||"undefined"===typeof o)return!1;if(u&&!u.rrule){if("YEARLY"!==u.freq&&"MONTHLY"!==u.freq&&"WEEKLY"!==u.freq&&"DAILY"!==u.freq)throw"Recurrence rrule frequency must be provided and be one of the following: 'YEARLY', 'MONTHLY', 'WEEKLY', or 'DAILY'";if(u.until&&isNaN(Date.parse(u.until)))throw"Recurrence rrule 'until' must be a valid date string";if(u.interval&&isNaN(parseInt(u.interval)))throw"Recurrence rrule 'interval' must be an integer";if(u.count&&isNaN(parseInt(u.count)))throw"Recurrence rrule 'count' must be an integer";if("undefined"!==typeof u.byday){if("[object Array]"!==Object.prototype.toString.call(u.byday))throw"Recurrence rrule 'byday' must be an array";if(u.byday.length>7)throw"Recurrence rrule 'byday' array must not be longer than the 7 days in a week";for(var l in u.byday=u.byday.filter(function(e,t){return u.byday.indexOf(e)==t}),u.byday)if(i.indexOf(u.byday[l])<0)throw"Recurrence rrule 'byday' values must include only the following: 'SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'"}}var d=new Date(c),f=new Date(o),p=new Date,h=("0000"+d.getFullYear().toString()).slice(-4),m=("00"+(d.getMonth()+1).toString()).slice(-2),b=("00"+d.getDate().toString()).slice(-2),v=("00"+d.getHours().toString()).slice(-2),E=("00"+d.getMinutes().toString()).slice(-2),g=("00"+d.getSeconds().toString()).slice(-2),O=("0000"+f.getFullYear().toString()).slice(-4),y=("00"+(f.getMonth()+1).toString()).slice(-2),C=("00"+f.getDate().toString()).slice(-2),j=("00"+f.getHours().toString()).slice(-2),N=("00"+f.getMinutes().toString()).slice(-2),S=("00"+f.getSeconds().toString()).slice(-2),k="",w="";v+E+g+j+N+S!=0&&(k="T"+v+E+g,w="T"+j+N+S);var x,A=h+m+b+k,T=O+y+C+w,D=("0000"+p.getFullYear().toString()).slice(-4)+("00"+(p.getMonth()+1).toString()).slice(-2)+("00"+p.getDate().toString()).slice(-2)+"T"+("00"+p.getHours().toString()).slice(-2)+("00"+p.getMinutes().toString()).slice(-2)+("00"+p.getSeconds().toString()).slice(-2);if(u)if(u.rrule)x=u.rrule;else{if(x="RRULE:FREQ="+u.freq,u.until){var M=new Date(Date.parse(u.until)).toISOString();x+=";UNTIL="+M.substring(0,M.length-13).replace(/[-]/g,"")+"000000Z"}u.interval&&(x+=";INTERVAL="+u.interval),u.count&&(x+=";COUNT="+u.count),u.byday&&u.byday.length>0&&(x+=";BYDAY="+u.byday.join(","))}(new Date).toISOString();var R=["BEGIN:VEVENT","UID:"+r.length+"@"+e,"CLASS:PUBLIC","DESCRIPTION:"+a,"DTSTAMP;VALUE=DATE-TIME:"+D,"DTSTART;VALUE=DATE-TIME:"+A,"DTEND;VALUE=DATE-TIME:"+T,"LOCATION:"+s,"SUMMARY;LANGUAGE=en-us:"+t,"TRANSP:TRANSPARENT","END:VEVENT"];return x&&R.splice(4,0,x),R=R.join(n),r.push(R),R},download:function(e,t){if(r.length<1)return!1;t="undefined"!==typeof t?t:".ics",e="undefined"!==typeof e?e:"calendar";var i,c=a+n+r.join(n)+s;if(-1===navigator.userAgent.indexOf("MSIE 10"))i=new Blob([c]);else{var o=new BlobBuilder;o.append(c),i=o.getBlob("text/x-vCalendar;charset="+document.characterSet)}return saveAs(i,e+t),c},build:function(){return!(r.length<1)&&a+n+r.join(n)+s}}}console.log("Unsupported Browser")},ne=function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(V.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){var n=this.state!==t,r=!function(e,t){var n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(function(n){return n in t&&e[n]===t[n]})}(this.props,e);return n||r}}]),t}(a.Component),re=n(18),ae=n(42),se=(n(72),n(22)),ie=n.n(se),ce=function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=e.actions,a=e.color,i=Object(re.a)(e,["className","children","actions","color"]);return s.a.createElement("div",Object.assign({className:k("ActionRow",t)},i),n,s.a.createElement("div",{className:k("actions","default")},r.filter(function(e){return e}).map(function(e,t){var n=e.className,r=e.icon,i=Object(re.a)(e,["className","icon"]),c=Object(l.a)({key:t,className:k("action",n),children:s.a.createElement("div",{className:"icon",style:{backgroundColor:a}},s.a.createElement(ae.a,{fixedWidth:!0,icon:r}))},i);return"href"in c?s.a.createElement("a",Object.assign({},c,{rel:"noopener noreferrer",target:"_blank"})):"text"in c?s.a.createElement(ie.a,c):s.a.createElement("div",c)})))}}]),t}(a.Component),oe=(n(77),function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=Object(re.a)(e,["className"]),r=Object(l.a)({className:k("Button",t)},n);return"href"in r?s.a.createElement("a",Object.assign({},r,{rel:"noopener noreferrer",target:"_blank"})):"text"in r?s.a.createElement(ie.a,r):s.a.createElement("div",r)}}]),t}(a.Component)),ue=(n(79),function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.overlayCrns,r=e.preview,a=this.props.env.mobile,i=this.props.user.pinnedCrns;return s.a.createElement("div",{className:k("Calendar",a&&"mobile",r&&"preview",t)},r&&s.a.createElement("img",{className:"ratio",src:"5x2.png",alt:""}),!r&&s.a.createElement("div",{className:"times"},new Array(13).fill(0).map(function(e,t){var n=480+60*t;return s.a.createElement("div",{className:"time",key:n},s.a.createElement("span",{className:"label"},function(e){var t=e/60|0;return"".concat(t>12?t-12:t).concat(t<12?"a":"p","m")}(n)))})),!r&&s.a.createElement("div",{className:"days"},O.map(function(e){return s.a.createElement("div",{className:"day",key:e},s.a.createElement("span",{className:"label"},e))})),s.a.createElement("div",{className:"meetings"},i.map(function(e){return s.a.createElement(je,{key:e,crn:e,preview:r})}),n&&n.filter(function(e){return!i.includes(e)}).map(function(e){return s.a.createElement(je,{key:e,crn:e,overlay:!r,preview:r})})))}}]),t}(ne)),le=Object(o.b)(function(e){return{env:e.env,user:e.user}},Y)(ue),de=n(43),fe=(n(81),function(e){function t(e){var n;Object(H.a)(this,t),(n=Object(G.a)(this,Object(z.a)(t).call(this,e))).state={sortingOptionIndex:0},n.sortingOptions=[{label:"Most Compact",calculateFactor:function(e){var t=e.startMap,n=e.endMap;return+Object.keys(t).map(function(e){return n[e]-t[e]}).reduce(function(e,t){return e+t},0)}},{label:"Earliest Ending",calculateFactor:function(e){var t=e.endMap,n=Object.values(t);return+(n.reduce(function(e,t){return e+t},0)/n.length)}},{label:"Latest Beginning",calculateFactor:function(e){var t=e.startMap,n=Object.values(t);return-(n.reduce(function(e,t){return e+t},0)/n.length)}}];var r=n.props.db.oscar;return n.memoizedGetCombinations=Object(de.a)(r.getCombinations.bind(r)),n.handleChangeSortingOptionIndex=n.handleChangeSortingOptionIndex.bind(Object(K.a)(Object(K.a)(n))),n}return Object(q.a)(t,e),Object(V.a)(t,[{key:"handleSetPinnedCrns",value:function(e){this.props.setPinnedCrns(e)}},{key:"handleChangeSortingOptionIndex",value:function(e){var t=e.target.value;this.setState({sortingOptionIndex:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.onSetOverlayCrns,a=this.props.user,i=a.desiredCourses,c=a.pinnedCrns,o=a.excludedCrns,u=this.state.sortingOptionIndex,d=this.memoizedGetCombinations(i,c,o),f=this.sortingOptions[u],p=d.map(function(e){return Object(l.a)({},e,{factor:f.calculateFactor(e)})}).sort(function(e,t){return e.factor-t.factor});return s.a.createElement("div",{className:k("CombinationsContainer",n)},c.length>0&&s.a.createElement(oe,{onClick:function(){return e.handleSetPinnedCrns([])}},"Reset Sections"),s.a.createElement(oe,{className:"sorting-option"},s.a.createElement("select",{onChange:this.handleChangeSortingOptionIndex,value:u},this.sortingOptions.map(function(e,t){return s.a.createElement("option",{key:t,value:t},e.label)}))),s.a.createElement("div",{className:"combinations"},p.map(function(t,n){var a=t.crns;return s.a.createElement("div",{className:"combination",key:n,onMouseEnter:function(){return r(a)},onMouseLeave:function(){return r([])},onClick:function(){return e.handleSetPinnedCrns(Object(E.a)(c).concat(Object(E.a)(a)))}},s.a.createElement("div",{className:"number"},n+1),s.a.createElement(le,{className:"preview",overlayCrns:a,preview:!0}))})))}}]),t}(ne)),pe=Object(o.b)(function(e){return{db:e.db,user:e.user}},Y)(fe),he=n(10),me=(n(83),function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(z.a)(t).call(this,e))).state={expanded:!1,paletteShown:!1},n.handleSelectColor=n.handleSelectColor.bind(Object(K.a)(Object(K.a)(n))),n}return Object(q.a)(t,e),Object(V.a)(t,[{key:"handleRemoveCourse",value:function(e){var t=this.props.user,n=t.desiredCourses,r=t.pinnedCrns,a=t.excludedCrns,s=t.colorMap;this.props.setDesiredCourses(n.filter(function(t){return t!==e.id})),this.props.setPinnedCrns(r.filter(function(t){return!e.sections.some(function(e){return e.crn===t})})),this.props.setExcludedCrns(a.filter(function(t){return!e.sections.some(function(e){return e.crn===t})})),this.props.setColorMap(Object(l.a)({},s,Object(d.a)({},e.id,void 0)))}},{key:"handleToggleExpanded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.expanded;this.setState({expanded:e})}},{key:"handleSelectColor",value:function(e){var t=this.props.courseId,n=this.props.user.colorMap;this.props.setColorMap(Object(l.a)({},n,Object(d.a)({},t,e)))}},{key:"handleTogglePaletteShown",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.paletteShown;this.setState({paletteShown:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.courseId,a=t.onAddCourse,i=t.onSetOverlayCrns,c=this.props.db.oscar,o=this.props.user,u=o.pinnedCrns,l=o.colorMap,d=this.state,f=d.expanded,p=d.paletteShown,h=c.findCourse(r),m=l[h.id],b=S(m),v={};h.sections.forEach(function(e){var t=Object(g.a)(e.instructors,1)[0],n=void 0===t?"Not Assigned":t;n in v||(v[n]=[]),v[n].push(e)});var E={icon:he.e,href:"https://oscar.gatech.edu/pls/bprod/bwckctlg.p_disp_course_detail?cat_term_in=201902&subj_code_in=".concat(h.subject,"&crse_numb_in=").concat(h.number)};return s.a.createElement("div",{className:k("Course",b,"default",n),style:{backgroundColor:m},key:h.id},s.a.createElement(ce,{className:k("course-header",f&&"divider-bottom"),actions:a?[{icon:he.g,onClick:a},E]:[{icon:f?he.b:he.a,onClick:function(){return e.handleToggleExpanded()}},E,{icon:he.f,onClick:function(){return e.handleTogglePaletteShown()}},{icon:he.j,onClick:function(){return e.handleRemoveCourse(h)}}],color:m},s.a.createElement("div",{className:"row"},s.a.createElement("span",{className:"course_id"},h.id),s.a.createElement("span",{className:"section_ids"},h.sections.filter(function(e){return u.includes(e.crn)}).map(function(e){return e.id}).join(", "))),s.a.createElement("div",{className:"row"},s.a.createElement("span",{className:"course_title",dangerouslySetInnerHTML:{__html:h.title}}),s.a.createElement("span",{className:"section_crns"},h.sections.filter(function(e){return u.includes(e.crn)}).map(function(e){return e.crn}).join(", "))),p&&s.a.createElement(ye,{className:"palette",onSelectColor:this.handleSelectColor,color:m,onMouseLeave:function(){return e.handleTogglePaletteShown(!1)}})),f&&s.a.createElement("div",{className:"course-body"},Object.keys(v).map(function(e){return s.a.createElement(Oe,{key:e,color:m,name:e,sections:v[e],onSetOverlayCrns:i})})))}}]),t}(ne)),be=Object(o.b)(function(e){return{db:e.db,user:e.user}},Y)(me),ve=(n(85),function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(z.a)(t).call(this,e))).state={keyword:""},n.inputRef=s.a.createRef(),n.handleChangeKeyword=n.handleChangeKeyword.bind(Object(K.a)(Object(K.a)(n))),n.handlePressEnter=n.handlePressEnter.bind(Object(K.a)(Object(K.a)(n))),n}return Object(q.a)(t,e),Object(V.a)(t,[{key:"handleChangeKeyword",value:function(e){var t=e.target.value;this.setState({keyword:t})}},{key:"handlePressEnter",value:function(e){var t=this.props.db.oscar,n=this.state.keyword;if("Enter"===e.key){e.preventDefault();var r=t.searchCourses(n);r.length&&this.handleAddCourse(r[0])}}},{key:"handleAddCourse",value:function(e){var t=this.props.user,n=t.desiredCourses,r=t.excludedCrns,a=t.colorMap;if(!n.includes(e.id)){var s=e.sections.filter(function(e){return!e.meetings.length||e.meetings.some(function(e){return!e.days.length||!e.period})}).map(function(e){return e.crn});this.props.setDesiredCourses(Object(E.a)(n).concat([e.id])),this.props.setExcludedCrns(Object(E.a)(r).concat(Object(E.a)(s))),this.props.setColorMap(Object(l.a)({},a,Object(d.a)({},e.id,N()))),this.setState({keyword:""}),this.inputRef.current.focus()}}},{key:"render",value:function(){var e=this,t=this.props.className,n=this.props.db.oscar,r=this.props.user,a=r.desiredCourses,i=r.pinnedCrns,c=this.state.keyword;return s.a.createElement("div",{className:k("CourseAdd",t)},s.a.createElement("input",{type:"text",ref:this.inputRef,value:c,onChange:this.handleChangeKeyword,className:"keyword",placeholder:"XX 0000",onKeyPress:this.handlePressEnter}),s.a.createElement("div",{className:"autocomplete"},n.searchCourses(c).filter(function(e){return!a.includes(e.id)}).map(function(t){return s.a.createElement(be,{key:t.id,courseId:t.id,pinnedCrns:i,onAddCourse:function(){return e.handleAddCourse(t)}})})))}}]),t}(ne)),Ee=Object(o.b)(function(e){return{db:e.db,user:e.user}},Y)(ve),ge=(n(87),function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(z.a)(t).call(this,e))).state={expanded:!0},n}return Object(q.a)(t,e),Object(V.a)(t,[{key:"handleTogglePinned",value:function(e){var t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns;n.includes(e.crn)?this.props.setPinnedCrns(n.filter(function(t){return t!==e.crn})):(this.props.setPinnedCrns(Object(E.a)(n).concat([e.crn])),this.props.setExcludedCrns(r.filter(function(t){return t!==e.crn})))}},{key:"handleToggleExcluded",value:function(e){var t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns;r.includes(e.crn)?this.props.setExcludedCrns(r.filter(function(t){return t!==e.crn})):(this.props.setExcludedCrns(Object(E.a)(r).concat([e.crn])),this.props.setPinnedCrns(n.filter(function(t){return t!==e.crn})))}},{key:"handleExcludeAll",value:function(){var e=this.props.sections,t=this.props.user,n=t.pinnedCrns,r=t.excludedCrns,a=e.map(function(e){return e.crn});this.props.setExcludedCrns(x(Object(E.a)(r).concat(Object(E.a)(a)))),this.props.setPinnedCrns(n.filter(function(e){return!a.includes(e)}))}},{key:"handleIncludeAll",value:function(){var e=this.props.sections,t=this.props.user.excludedCrns,n=e.map(function(e){return e.crn});this.props.setExcludedCrns(t.filter(function(e){return!n.includes(e)}))}},{key:"handleToggleExpanded",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.state.expanded;this.setState({expanded:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.color,a=t.name,i=t.sections,c=t.onSetOverlayCrns,o=this.props.user,u=o.pinnedCrns,l=o.excludedCrns,d=this.state.expanded,f=i.every(function(e){return l.includes(e.crn)}),p=i.some(function(e){return u.includes(e.crn)});return s.a.createElement("div",{className:k("Instructor",n)},s.a.createElement(ce,{className:k("name","divider-bottom",f&&"strikethrough",!p&&"inactive"),actions:[{icon:d?he.b:he.a,onClick:function(){return e.handleToggleExpanded()}},!["TBA","Not Assigned"].includes(a)&&{icon:he.e,href:"http://www.ratemyprofessors.com/search.jsp?queryBy=teacherName&schoolName=Georgia+Institute+of+Technology&query=".concat(encodeURIComponent(function(e){var t=e.split(" ");return[t.shift(),t.pop()].join(" ")}(a)))},f?{icon:he.d,onClick:function(){return e.handleIncludeAll()}}:{icon:he.c,onClick:function(){return e.handleExcludeAll()}}],color:r},a||"Not Assigned"),d&&s.a.createElement("div",{className:"sections"},i.map(function(t){var n=l.includes(t.crn),a=u.includes(t.crn);return s.a.createElement(ce,{className:k("section","divider-bottom",n&&"strikethrough",!a&&"inactive"),onMouseEnter:function(){return c([t.crn])},onMouseLeave:function(){return c([])},actions:[{icon:a?he.i:he.h,onClick:function(){return e.handleTogglePinned(t)}},{icon:he.e,href:"https://oscar.gatech.edu/pls/bprod/bwckschd.p_disp_detail_sched?term_in=201902&crn_in=".concat(t.crn)},{icon:n?he.d:he.c,onClick:function(){return e.handleToggleExcluded(t)}}],color:r,key:t.id},s.a.createElement("div",{className:"section-header"},s.a.createElement("span",{className:"section_id"},t.id)),s.a.createElement("div",{className:"meetings"},t.meetings.map(function(e,t){return s.a.createElement("div",{className:"meeting",key:t},s.a.createElement("span",{className:"days"},e.days.join("")),s.a.createElement("span",{className:"period"},j(e.period)))})))})))}}]),t}(ne)),Oe=Object(o.b)(function(e){return{user:e.user}},Y)(ge),ye=(n(89),function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.color,r=e.onSelectColor,a=Object(re.a)(e,["className","color","onSelectColor"]);return s.a.createElement("div",Object.assign({className:k("Palette",t)},a),[["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF"],["#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF"],["#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"]].map(function(e,t){return s.a.createElement("div",{className:"palette-row",key:t},e.map(function(e){return s.a.createElement("div",{className:k("color",e===n&&"frame"),key:e,style:{backgroundColor:e},onClick:function(){return r(e)}})}))}))}}]),t}(a.Component)),Ce=(n(91),function(e){function t(){return Object(H.a)(this,t),Object(G.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(q.a)(t,e),Object(V.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.crn,r=e.overlay,a=e.preview,i=this.props.db.oscar,c=this.props.env.mobile,o=this.props.user.colorMap,u=i.findSection(n),l=o[u.course.id],d=S(l);return s.a.createElement("div",{className:k("TimeBlocks",c&&"mobile",r&&"overlay",t)},u.meetings.map(function(e,t){return e.period&&e.days.map(function(n){return s.a.createElement("div",{className:k("meeting",d,"default",n),key:[t,n].join("-"),style:{top:(e.period.start-480)/780*100+"%",height:(e.period.end-e.period.start)/780*100+"%",backgroundColor:l}},!a&&s.a.createElement("div",{className:"meeting-wrapper"},s.a.createElement("span",{className:"course_id"},u.course.id,c?"":" ".concat(u.id)),s.a.createElement("span",{className:"period"},j(e.period)),!c&&s.a.createElement("span",{className:"where"},e.where),!c&&s.a.createElement("span",{className:"instructors"},e.instructors.join(", "))))})}))}}]),t}(ne)),je=Object(o.b)(function(e){return{env:e.env,db:e.db,user:e.user}},Y)(Ce),Ne=function(){function e(t){var n=this;Object(H.a)(this,e),this.courses=Object.keys(t).map(function(e){return new Se(e,t[e])}),this.courseMap={},this.crnMap={},this.courses.forEach(function(e){n.courseMap[e.id]=e,e.sections.forEach(function(e){n.crnMap[e.crn]=e})})}return Object(V.a)(e,[{key:"findCourse",value:function(e){return this.courseMap[e]}},{key:"findSection",value:function(e){return this.crnMap[e]}},{key:"searchCourses",value:function(e){var t=/^\s*([a-zA-Z]*)\s*(\d*)\s*$/.exec(e.toUpperCase())||[],n=Object(g.a)(t,3),r=n[1],a=n[2];return r&&a?this.courses.filter(function(e){return e.subject===r&&e.number.startsWith(a)}):r?this.courses.filter(function(e){return e.subject===r}):a?this.courses.filter(function(e){return e.number.startsWith(a)}):[]}},{key:"getCombinations",value:function(e,t,n){var r=this,a=[];return function s(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(i!==e.length){var o=r.findCourse(e[i]),u=function(e){return!n.includes(e.crn)},l=function(e){return t.includes(e.crn)},d=function(e){return Object(E.a)(t).concat(Object(E.a)(c)).some(function(t){return n=r.findSection(t),a=e,n.meetings.some(function(e){return a.meetings.some(function(t){return e.period&&t.period&&O.some(function(n){return e.days.includes(n)&&t.days.includes(n)})&&e.period.start<t.period.end&&t.period.start<e.period.end})});var n,a})};if(o.hasLab){var f=o.lectures.filter(l),p=o.labs.filter(l);p.length?p.forEach(function(e){e.lectures.filter(u).forEach(function(e){if(l(e))s(i+1,c);else{if(d(e))return;s(i+1,Object(E.a)(c).concat([e.crn]))}})}):f.length?f.forEach(function(e){e.labs.filter(u).forEach(function(e){d(e)||s(i+1,Object(E.a)(c).concat([e.crn]))})}):o.lectures.filter(u).forEach(function(e){d(e)||e.labs.filter(u).forEach(function(t){d(t)||s(i+1,Object(E.a)(c).concat([e.crn,t.crn]))})})}else o.sections.some(l)?s(i+1,c):Object.values(o.sectionGroups).forEach(function(e){var t=e.sections.find(u);t&&!d(t)&&s(i+1,Object(E.a)(c).concat([t.crn]))})}else a.push(c)}(),a.map(function(e){var n={},a={};return r.iterateTimeBlocks(Object(E.a)(t).concat(Object(E.a)(e)),function(e,t){e in n&&!(n[e]>t.start)||(n[e]=t.start),e in a&&!(a[e]<t.end)||(a[e]=t.end)}),{crns:e,startMap:n,endMap:a}})}},{key:"iterateTimeBlocks",value:function(e,t){var n=this;e.forEach(function(e){n.findSection(e).meetings.forEach(function(e){return e.period&&e.days.forEach(function(n){t(n,e.period)})})})}}]),e}(),Se=function(){function e(t,n){var r=this;Object(H.a)(this,e),this.id=t;var a=this.id.split(" "),s=Object(g.a)(a,2);this.subject=s[0],this.number=s[1],this.title=n.title,this.sections=Object.keys(n.sections).map(function(e){return new ke(r,e,n.sections[e])});var i=this.sections.filter(function(e){return e.credits>0}),c=this.sections.filter(function(e){return 0===e.credits});this.hasLab=!this.id.startsWith("VIP")&&i.length&&c.length,this.hasLab?(this.lectures=i,this.labs=c,this.lectures.forEach(function(e){return e.labs=r.labs.filter(function(t){return t.id.startsWith(e.id)})}),this.labs.forEach(function(e){return e.lectures=r.lectures.filter(function(t){return e.id.startsWith(t.id)})}),this.lectures.every(function(e){return!e.labs.length})&&(this.lectures.forEach(function(e){return e.labs=r.labs}),this.labs.forEach(function(e){return e.lectures=r.lectures}))):this.sectionGroups=this.distinct(this.sections)}return Object(V.a)(e,[{key:"distinct",value:function(e){var t={};return e.forEach(function(e){var n=e.meetings.map(function(e){return{days:e.days,period:e.period}}),r=JSON.stringify(n),a=t[r];a?a.sections.push(e):t[r]={hash:r,meetings:n,sections:[e]}}),t}}]),e}(),ke=function e(t,n,r){Object(H.a)(this,e),this.course=t,this.id=n,this.crn=r.crn,this.credits=r.credits,this.meetings=r.meetings.map(function(e){var t=e.days,n=e.period,r=e.instructors,a=e.where;return{days:"&nbsp;"===t?[]:Object(E.a)(t),period:"TBA"===n?void 0:{start:y(n.split(" - ")[0]),end:y(n.split(" - ")[1])},instructors:r.map(function(e){return e.replace(/ \(P\)$/,"")}),where:a}}),this.instructors=x(this.meetings.reduce(function(e,t){return Object(E.a)(e).concat(Object(E.a)(t.instructors))},[]))},we=(n(93),function(e){function t(e){var n;return Object(H.a)(this,t),(n=Object(G.a)(this,Object(z.a)(t).call(this,e))).state={overlayCrns:[],tabIndex:0},n.captureRef=s.a.createRef(),n.handleResize=n.handleResize.bind(Object(K.a)(Object(K.a)(n))),n.handleSetOverlayCrns=n.handleSetOverlayCrns.bind(Object(K.a)(Object(K.a)(n))),n.handleExport=n.handleExport.bind(Object(K.a)(Object(K.a)(n))),n.handleDownload=n.handleDownload.bind(Object(K.a)(Object(K.a)(n))),n}return Object(q.a)(t,e),Object(V.a)(t,[{key:"componentDidMount",value:function(){var e=this;X.a.get("https://jasonpark.me/gt-schedule-crawler/courses.json").then(function(t){var n=new Ne(t.data);e.props.setOscar(n)}),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"getTotalCredits",value:function(){var e=this.props.db.oscar;return this.props.user.pinnedCrns.reduce(function(t,n){return t+e.findSection(n).credits},0)}},{key:"handleResize",value:function(e){var t=this.props.env.mobile,n=w();t!==n&&this.props.setMobile(n)}},{key:"handleSetOverlayCrns",value:function(e){this.setState({overlayCrns:e})}},{key:"handleExport",value:function(){var e=this.props.db.oscar,t=this.props.user.pinnedCrns,n=te(),r={from:new Date("Jan 07, 2019"),to:new Date("May 02, 2019")};r.from.setHours(0),r.to.setHours(23,59,59,999),t.forEach(function(t){var a=e.findSection(t);a.meetings.forEach(function(e){if(e.period&&e.days.length){for(var t=a.course.id,s=a.course.title,i=e.where,c=new Date(r.from);!e.days.includes(["-","M","T","W","R","F","-"][c.getDay()]);)c.setDate(c.getDate()+1);c.setHours(e.period.start/60|0,e.period.start%60);var o=new Date(c);o.setHours(e.period.end/60|0,e.period.end%60);var u={freq:"WEEKLY",until:r.to,byday:e.days.map(function(e){return{M:"MO",T:"TU",W:"WE",R:"TH",F:"FR"}[e]})};n.addEvent(t,s,i,c,o,u)}})}),n.download("gt-scheduler")}},{key:"handleDownload",value:function(){var e=this.captureRef.current;$.a.toPng(e,{width:2*e.offsetWidth,height:2*e.offsetHeight,style:{left:0,transform:"scale(".concat(2,")"),"transform-origin":"top left"}}).then(function(e){return ee()(e,"schedule.png")})}},{key:"handleChangeTab",value:function(e){this.setState({tabIndex:e})}},{key:"render",value:function(){var e=this,t=this.props.env.mobile,n=this.props.db.oscar,r=this.props.user,a=r.pinnedCrns,i=r.desiredCourses,c=this.state,o=c.overlayCrns,u=c.tabIndex;return n&&s.a.createElement("div",{className:k("App",t&&"mobile")},!t&&s.a.createElement("div",{className:"calendar-container"},s.a.createElement(le,{overlayCrns:o})),s.a.createElement("div",{className:"capture-container",ref:this.captureRef},s.a.createElement(le,{className:"fake-calendar"})),s.a.createElement("div",{className:"sidebar"},t&&s.a.createElement("div",{className:"tab-container"},["Courses","Combinations","Calendar"].map(function(t,n){return s.a.createElement("div",{className:k("tab",u===n&&"active"),onClick:function(){return e.handleChangeTab(n)},key:n},t)})),s.a.createElement("div",{className:"title"},s.a.createElement("span",{className:"primary"},"Spring 2019"),s.a.createElement("span",{className:"secondary"},this.getTotalCredits()," Credits")),s.a.createElement("div",{className:"scroller"},s.a.createElement("div",{className:k("courses-container",0===u&&"active")},s.a.createElement("div",{className:"course-list"},i.map(function(t){return s.a.createElement(be,{courseId:t,expandable:!0,key:t,onSetOverlayCrns:e.handleSetOverlayCrns})})),s.a.createElement(Ee,null)),s.a.createElement(pe,{className:k("combinations-container",1===u&&"active"),onSetOverlayCrns:this.handleSetOverlayCrns}),t&&s.a.createElement("div",{className:k("calendar-container",2===u&&"active")},s.a.createElement(le,{overlayCrns:o}))),a.length>0&&s.a.createElement(oe,{text:a.join(", ")},s.a.createElement("span",null,"Copy CRNs")),s.a.createElement(oe,{onClick:this.handleExport},"Export Calendar"),s.a.createElement(oe,{onClick:this.handleDownload},"Download as PNG"),s.a.createElement(oe,{href:"https://github.com/parkjs814/gt-scheduler"},"Fork me on GitHub")))}}]),t}(ne)),xe=Object(o.b)(function(e){return{env:e.env,db:e.db,user:e.user}},Y)(we),Ae=(n(95),Object(u.c)(Object(u.b)(r)));c.a.render(s.a.createElement(o.a,{store:Ae},s.a.createElement(xe,null)),document.getElementById("root"))}},[[44,2,1]]]);
//# sourceMappingURL=main.8df01d4d.chunk.js.map