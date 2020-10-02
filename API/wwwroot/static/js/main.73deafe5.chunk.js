(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{347:function(e,t,a){e.exports=a(614)},353:function(e,t,a){},614:function(e,t,a){"use strict";a.r(t),a.d(t,"history",(function(){return Wt}));var n=a(0),r=a.n(n),i=a(17),o=a.n(i),c=a(21),l=a(43),u=(a(352),a(353),a(354),a(625)),s=a(336),m=a(641),d=a(337),b=a(128),p=a(637),h=a(41),f=a(18),v=a.n(f),g=a(38),E=a(335),y=a(12),j=a(98),O=a(11),w=(a(109),a(8)),S=a(75),C=a.n(S),k=a(57);C.a.defaults.baseURL="http://localhost:5000/api",C.a.interceptors.request.use((function(e){var t=window.localStorage.getItem("jwt");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),C.a.interceptors.response.use(void 0,(function(e){"Network Error"!==e.message||e.response||k.b.error("Network error - make sure you're connected");var t=e.response,a=t.status,n=t.data,r=t.config;throw 404===a&&Wt.push("/notfound"),400===a&&"get"===r.method&&n.errors.hasOwnProperty("id")&&Wt.push("/notfound"),500===a&&k.b.error("Server error - check the terminal for more info!"),e.response}));var x,A,z,I,R,P,D,L,M,F,H,T,G,q,N,B,U,V,Y,$,W,J,K,Q,X,Z,_,ee,te,ae,ne,re,ie,oe,ce,le,ue,se,me,de,be,pe=function(e){return e.data},he=function(e){return C.a.get(e).then(pe)},fe=function(e,t){return C.a.post(e,t).then(pe)},ve=function(e,t){return C.a.put(e,t).then(pe)},ge=function(e){return C.a.delete(e).then(pe)},Ee={list:function(){return he("/activities")},details:function(e){return he("/activities/".concat(e))},create:function(e){return fe("/activities",e)},update:function(e){return ve("/activities/".concat(e.id),e)},delete:function(e){return ge("/activities/".concat(e))},attend:function(e){return fe("/activities/".concat(e,"/attend"),{})},unattend:function(e){return ge("/activities/".concat(e,"/attend"))}},ye={current:function(){return he("/user")},login:function(e){return fe("/user/login",e)},register:function(e){return fe("/user/register",e)}},je={get:function(e){return he("/profiles/".concat(e))}},Oe=function(e,t){return e.date=new Date(e.date),e.isGoing=e.attendees.some((function(e){return e.username===t.username})),e.isHost=e.attendees.some((function(e){return e.username===t.username&&e.isHost})),e},we=function(e){return{displayName:e.displayName,isHost:!1,username:e.username,image:e.image}},Se=a(210),Ce=(x=w.f.ref,A=function(){function e(t){var a=this;Object(h.a)(this,e),this.rootStore=void 0,Object(y.a)(this,"activityRegistry",z,this),Object(y.a)(this,"activity",I,this),Object(y.a)(this,"loadingInitial",R,this),Object(y.a)(this,"submitting",P,this),Object(y.a)(this,"target",D,this),Object(y.a)(this,"loading",L,this),Object(y.a)(this,"hubConnection",M,this),Object(y.a)(this,"createHubConnection",F,this),Object(y.a)(this,"stopHubConnection",H,this),Object(y.a)(this,"addComment",T,this),Object(y.a)(this,"loadActivities",G,this),Object(y.a)(this,"createActivity",q,this),Object(y.a)(this,"loadActivity",N,this),Object(y.a)(this,"clearActivity",B,this),this.getActivity=function(e){return a.activityRegistry.get(e)},Object(y.a)(this,"editActivity",U,this),Object(y.a)(this,"cancelSelectedActivity",V,this),Object(y.a)(this,"deleteActivity",Y,this),Object(y.a)(this,"attendActivity",$,this),Object(y.a)(this,"cancelAttendance",W,this),this.rootStore=t}return Object(j.a)(e,[{key:"groupActivitiesByDate",value:function(e){var t=e.sort((function(e,t){return e.date.getTime()-t.date.getTime()}));return Object.entries(t.reduce((function(e,t){var a=t.date.toISOString().split("T")[0];return e[a]=e[a]?[].concat(Object(E.a)(e[a]),[t]):[t],e}),{}))}},{key:"activitiesByDate",get:function(){return this.groupActivitiesByDate(Array.from(this.activityRegistry.values()))}}]),e}(),z=Object(O.a)(A.prototype,"activityRegistry",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Map}}),I=Object(O.a)(A.prototype,"activity",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=Object(O.a)(A.prototype,"loadingInitial",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),P=Object(O.a)(A.prototype,"submitting",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),D=Object(O.a)(A.prototype,"target",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),L=Object(O.a)(A.prototype,"loading",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),M=Object(O.a)(A.prototype,"hubConnection",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=Object(O.a)(A.prototype,"createHubConnection",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.hubConnection=(new Se.a).withUrl("http://localhost:5000/chat",{accessTokenFactory:function(){return e.rootStore.commonStore.token}}).configureLogging(Se.b.Information).build(),e.hubConnection.start().then((function(){return console.log(e.hubConnection.state)})).then((function(){console.log("Attempting to join group"),e.hubConnection.invoke("AddToGroup",t)})).catch((function(e){return console.log("Error establishing connection: ",e)})),e.hubConnection.on("ReceiveComment",(function(t){Object(w.h)((function(){e.activity.comments.push(t)}))})),e.hubConnection.on("Send",(function(e){k.b.info(e)}))}}}),H=Object(O.a)(A.prototype,"stopHubConnection",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.hubConnection.invoke("RemoveFromGroup",e.activity.id).then((function(){e.hubConnection.stop()})).then((function(){return console.log("Connection stopped")})).catch((function(e){return console.log(e)})),e.hubConnection.stop()}}}),T=Object(O.a)(A.prototype,"addComment",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(g.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.activityId=e.activity.id,t.prev=1,t.next=4,e.hubConnection.invoke("SendComment",a);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()}}),Object(O.a)(A.prototype,"activitiesByDate",[w.c],Object.getOwnPropertyDescriptor(A.prototype,"activitiesByDate"),A.prototype),G=Object(O.a)(A.prototype,"loadActivities",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(g.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingInitial=!0,t.prev=1,t.next=4,Ee.list();case 4:a=t.sent,Object(w.h)("loading activities",(function(){a.forEach((function(t){Oe(t,e.rootStore.userStore.user),e.activityRegistry.set(t.id,t)})),e.loadingInitial=!1})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),Object(w.h)("load activities error",(function(){return e.loadingInitial=!1})),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))}}),q=Object(O.a)(A.prototype,"createActivity",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(g.a)(v.a.mark((function t(a){var n,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.submitting=!0,t.prev=1,t.next=4,Ee.create(a);case 4:(n=we(e.rootStore.userStore.user)).isHost=!0,(r=[]).push(n),a.attendees=r,a.comments=[],a.isHost=!0,Object(w.h)("creating activity",(function(){e.activityRegistry.set(a.id,a),e.submitting=!1})),Wt.push("/activities/".concat(a.id)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(1),Object(w.h)("creating activity error",(function(){e.submitting=!1})),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}()}}),N=Object(O.a)(A.prototype,"loadActivity",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=e.getActivity(a))){t.next=6;break}return e.activity=n,t.abrupt("return",n);case 6:return e.loadingInitial=!0,t.prev=7,t.next=10,Ee.details(a);case 10:return n=t.sent,Object(w.h)("getting activity",(function(){Oe(n,e.rootStore.userStore.user),e.activity=n,e.activityRegistry.set(n.id,n),e.loadingInitial=!1})),t.abrupt("return",n);case 15:t.prev=15,t.t0=t.catch(7),Object(w.h)("get activity error",(function(){e.loadingInitial=!1})),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[7,15]])})));return function(e){return t.apply(this,arguments)}}()}}),B=Object(O.a)(A.prototype,"clearActivity",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.activity=null}}}),U=Object(O.a)(A.prototype,"editActivity",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(g.a)(v.a.mark((function t(a){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.submitting=!0,t.prev=1,t.next=4,Ee.update(a);case 4:Object(w.h)("editing activity",(function(){e.activityRegistry.set(a.id,a),e.activity=a,e.submitting=!1})),Wt.push("/activities/".concat(a.id)),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(1),Object(w.h)("edit activity error",(function(){e.submitting=!1})),k.b.error("Problem submitting data"),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}}),V=Object(O.a)(A.prototype,"cancelSelectedActivity",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.activity=null}}}),Y=Object(O.a)(A.prototype,"deleteActivity",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(g.a)(v.a.mark((function t(a,n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.submitting=!0,e.target=a.currentTarget.name,t.prev=2,t.next=5,Ee.delete(n);case 5:Object(w.h)("deleting activity",(function(){e.activityRegistry.delete(n),e.submitting=!1,e.target=""})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),Object(w.h)("deleting activity",(function(){e.submitting=!1,e.target=""})),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e,a){return t.apply(this,arguments)}}()}}),$=Object(O.a)(A.prototype,"attendActivity",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(g.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=we(e.rootStore.userStore.user),e.loading=!0,t.prev=2,t.next=5,Ee.attend(e.activity.id);case 5:Object(w.h)((function(){e.activity&&(e.activity.attendees.push(a),e.activity.isGoing=!0,e.activityRegistry.set(e.activity.id,e.activity),e.loading=!1)})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),Object(w.h)((function(){e.loading=!1})),k.b.error("Problem signing up to activity");case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))}}),W=Object(O.a)(A.prototype,"cancelAttendance",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(g.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,Ee.unattend(e.activity.id);case 4:Object(w.h)((function(){e.activity&&(e.activity.attendees=e.activity.attendees.filter((function(t){return t.username!==e.rootStore.userStore.user.username})),e.activity.isGoing=!1,e.activityRegistry.set(e.activity.id,e.activity),e.loading=!1)})),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),Object(w.h)((function(){e.loading=!1})),k.b.error("Problem cancelling attendance");case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))}}),A),ke=(J=function(){function e(t){Object(h.a)(this,e),this.rootStore=void 0,Object(y.a)(this,"user",K,this),Object(y.a)(this,"login",Q,this),Object(y.a)(this,"register",X,this),Object(y.a)(this,"getUser",Z,this),Object(y.a)(this,"logout",_,this),this.rootStore=t}return Object(j.a)(e,[{key:"isLoggedIn",get:function(){return!!this.user}}]),e}(),K=Object(O.a)(J.prototype,"user",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(O.a)(J.prototype,"isLoggedIn",[w.c],Object.getOwnPropertyDescriptor(J.prototype,"isLoggedIn"),J.prototype),Q=Object(O.a)(J.prototype,"login",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye.login(a);case 3:n=t.sent,Object(w.h)((function(){e.user=n})),e.rootStore.commonStore.setToken(n.token),Wt.push("/activities"),t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}}),X=Object(O.a)(J.prototype,"register",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye.register(a);case 3:n=t.sent,e.rootStore.commonStore.setToken(n.token),e.rootStore.modalStore.closeModal(),Wt.push("/activities"),t.next=12;break;case 9:throw t.prev=9,t.t0=t.catch(0),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}}),Z=Object(O.a)(J.prototype,"getUser",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return Object(g.a)(v.a.mark((function t(){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ye.current();case 3:a=t.sent,Object(w.h)((function(){e.user=a})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))}}),_=Object(O.a)(J.prototype,"logout",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.rootStore.commonStore.setToken(null),e.user=null,Wt.push("/")}}}),J),xe=(ee=function e(t){var a=this;Object(h.a)(this,e),this.rootStore=void 0,Object(y.a)(this,"token",te,this),Object(y.a)(this,"appLoaded",ae,this),Object(y.a)(this,"setToken",ne,this),Object(y.a)(this,"setAppLoaded",re,this),this.rootStore=t,Object(w.g)((function(){return a.token}),(function(e){e?window.localStorage.setItem("jwt",e):window.localStorage.removeItem("jwt")}))},te=Object(O.a)(ee.prototype,"token",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return window.localStorage.getItem("jwt")}}),ae=Object(O.a)(ee.prototype,"appLoaded",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),ne=Object(O.a)(ee.prototype,"setToken",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.token=t}}}),re=Object(O.a)(ee.prototype,"setAppLoaded",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.appLoaded=!0}}}),ee),Ae=(ie=w.f.shallow,oe=function e(t){Object(h.a)(this,e),this.rootStore=void 0,Object(y.a)(this,"modal",ce,this),Object(y.a)(this,"openModal",le,this),Object(y.a)(this,"closeModal",ue,this),this.rootStore=t},ce=Object(O.a)(oe.prototype,"modal",[ie],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{open:!1,body:null}}}),le=Object(O.a)(oe.prototype,"openModal",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.modal.open=!0,e.modal.body=t}}}),ue=Object(O.a)(oe.prototype,"closeModal",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.modal.open=!1,e.modal.body=null}}}),oe),ze=(se=function(){function e(t){Object(h.a)(this,e),this.rootStore=void 0,Object(y.a)(this,"profile",me,this),Object(y.a)(this,"loadingProfile",de,this),Object(y.a)(this,"loadProfile",be,this),this.rootStore=t}return Object(j.a)(e,[{key:"isCurrentUser",get:function(){return!(!this.rootStore.userStore.user||!this.profile)&&this.rootStore.userStore.user.username===this.profile.username}}]),e}(),me=Object(O.a)(se.prototype,"profile",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),de=Object(O.a)(se.prototype,"loadingProfile",[w.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),Object(O.a)(se.prototype,"isCurrentUser",[w.c],Object.getOwnPropertyDescriptor(se.prototype,"isCurrentUser"),se.prototype),be=Object(O.a)(se.prototype,"loadProfile",[w.b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=Object(g.a)(v.a.mark((function t(a){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loadingProfile=!0,t.prev=1,t.next=4,je.get(a);case 4:n=t.sent,Object(w.h)((function(){e.profile=n,e.loadingProfile=!1})),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),Object(w.h)((function(){e.loadingProfile=!1})),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}}),se);Object(w.d)({enforceActions:"always"});var Ie=Object(n.createContext)(new function e(){Object(h.a)(this,e),this.activityStore=void 0,this.userStore=void 0,this.commonStore=void 0,this.modalStore=void 0,this.profileStore=void 0,this.activityStore=new Ce(this),this.userStore=new ke(this),this.commonStore=new xe(this),this.modalStore=new Ae(this),this.profileStore=new ze(this)}),Re=Object(p.a)((function(){var e=Object(n.useContext)(Ie).userStore,t=e.logout,a=e.user;return r.a.createElement(s.a,{fixed:"top",inverted:!0},r.a.createElement(u.a,null,r.a.createElement(s.a.Item,{header:!0,as:c.c,exact:!0,to:"/"},r.a.createElement("img",{src:"/assets/logo.png",alt:"logo",style:{marginRight:"10px"}}),"Reactivities"),r.a.createElement(s.a.Item,{name:"Activities",as:c.c,to:"/activities"}),r.a.createElement(s.a.Item,null,r.a.createElement(m.a,{as:c.c,to:"/createActivity",positive:!0,content:"Create Activity"})),a&&r.a.createElement(s.a.Item,{position:"right"},r.a.createElement(d.a,{avatar:!0,spaced:"right",src:a.image||"/assets/user.png"}),r.a.createElement(b.a,{pointing:"top left",text:a.displayName},r.a.createElement(b.a.Menu,null,r.a.createElement(b.a.Item,{as:c.b,to:"/profile/".concat(a.username),text:"My profile",icon:"user"}),r.a.createElement(b.a.Item,{onClick:t,text:"Logout",icon:"power"}))))))})),Pe=a(338),De=a(126),Le=a(163),Me=a(633),Fe=a(211),He=a(73),Te=a(629),Ge=a(634),qe=a(631),Ne=function(e){var t=e.attendees;return r.a.createElement(Ge.a,{horizontal:!0},t.map((function(e){return r.a.createElement(Ge.a.Item,{key:e.username},r.a.createElement(qe.a,{header:e.displayName,trigger:r.a.createElement(d.a,{size:"mini",circular:!0,src:e.image||"/assets/user.png"})}))})))},Be=Object(p.a)((function(e){var t=e.activity,a=t.attendees.filter((function(e){return e.isHost}))[0];return r.a.createElement(Fe.a.Group,null,r.a.createElement(Fe.a,null,r.a.createElement(Me.a.Group,null,r.a.createElement(Me.a,null,r.a.createElement(Me.a.Image,{size:"tiny",circular:!0,src:a.image||"/assets/user.png",style:{marginBottom:3}}),r.a.createElement(Me.a.Content,null,r.a.createElement(Me.a.Header,{as:c.b,to:"/activities/".concat(t.id)},t.title),r.a.createElement(Me.a.Description,null,"Hosted by ",r.a.createElement(c.b,{to:"/profile/".concat(a.username)},a.displayName)),t.isHost&&r.a.createElement(Me.a.Description,null,r.a.createElement(Le.a,{basic:!0,color:"orange",content:"You are hosting this activity"})),t.isGoing&&!t.isHost&&r.a.createElement(Me.a.Description,null,r.a.createElement(Le.a,{basic:!0,color:"green",content:"You are going to this activity"})))))),r.a.createElement(Fe.a,null,r.a.createElement(He.a,{name:"clock"})," ",Object(Te.a)(t.date,"h:mm a"),r.a.createElement(He.a,{name:"marker"})," ",t.venue,", ",t.city),r.a.createElement(Fe.a,{secondary:!0},"Attendees will go here"),r.a.createElement(Fe.a,{secondary:!0},r.a.createElement(Ne,{attendees:t.attendees})),r.a.createElement(Fe.a,{clearing:!0},r.a.createElement("span",null,t.description),r.a.createElement(m.a,{as:c.b,to:"/activities/".concat(t.id),floated:"right",content:"View",color:"blue"})))})),Ue=Object(p.a)((function(){var e=Object(n.useContext)(Ie).activityStore.activitiesByDate;return r.a.createElement(n.Fragment,null,e.map((function(e){var t=Object(De.a)(e,2),a=t[0],i=t[1];return r.a.createElement(n.Fragment,{key:a},r.a.createElement(Le.a,{key:a,size:"large",color:"blue"},Object(Te.a)(a,"eeee do MMMM YYYY")," "),r.a.createElement(Me.a.Group,{divided:!0},i.map((function(e){return r.a.createElement(Be,{key:e.id,activity:e})}))))})))})),Ve=a(643),Ye=a(626),$e=function(e){var t=e.inverted,a=void 0===t||t,n=e.content;return r.a.createElement(Ve.a,{active:!0,inverted:a},r.a.createElement(Ye.a,{content:n}))},We=Object(p.a)((function(){var e=Object(n.useContext)(Ie).activityStore,t=e.loadActivities,a=e.loadingInitial;return Object(n.useEffect)((function(){t()}),[t]),a?r.a.createElement($e,{content:"Loading activities..."}):r.a.createElement(Pe.a,null,r.a.createElement(Pe.a.Column,{width:10},r.a.createElement(Ue,null)),r.a.createElement(Pe.a.Column,{width:6},r.a.createElement("h2",null,"Activity filters")))})),Je=a(25),Ke=a(209),Qe=a(164),Xe=a(630),Ze=function e(t){Object(h.a)(this,e),this.id=void 0,this.title="",this.category="",this.description="",this.date=void 0,this.time=void 0,this.city="",this.venue="",t&&t.date&&(t.time=t.date),Object.assign(this,t)},_e=a(639),et=a(19),tt=function(e){var t=e.input,a=e.width,n=e.type,i=e.placeholder,o=e.meta,c=o.touched,l=o.error;return r.a.createElement(Xe.a.Field,{error:c&&!!l,type:n,width:a},r.a.createElement("input",Object.assign({},t,{placeholder:i})),c&&l&&r.a.createElement(Le.a,{basic:!0,color:"red"},l))},at=function(e){var t=e.input,a=e.width,n=e.rows,i=e.placeholder,o=e.meta,c=o.touched,l=o.error;return r.a.createElement(Xe.a.Field,{error:c&&!!l,width:a},r.a.createElement("textarea",Object.assign({rows:n},t,{placeholder:i})),c&&l&&r.a.createElement(Le.a,{basic:!0,color:"red"},l))},nt=a(333),rt=function(e){var t=e.input,a=e.width,n=e.placeholder,i=e.date,o=void 0!==i&&i,c=e.time,l=void 0!==c&&c,u=e.meta,s=e.error;Object(Qe.a)(e,["input","width","placeholder","date","time","meta","error"]);return r.a.createElement(Xe.a.Field,{error:u&&!!s,width:a},r.a.createElement(nt.DateTimePicker,{placeholder:n,value:t.value||null,onChange:t.onChange,onBlur:t.onBlur,onKeyDown:function(e){return e.preventDefault()},date:o,time:l}),u&&s&&r.a.createElement(Le.a,{basic:!0,color:"red"},s))},it=a(627),ot=function(e){var t=e.input,a=e.width,n=e.options,i=e.placeholder,o=e.meta,c=o.touched,l=o.error;return r.a.createElement(Xe.a.Field,{error:c&&!!l,width:a},r.a.createElement(it.a,{value:t.value,onChange:function(e,a){return t.onChange(a.value)},placeholder:i,options:n}),c&&l&&r.a.createElement(Le.a,{basic:!0,color:"red"},l))},ct=[{key:"drinks",text:"Drinks",value:"drinks"},{key:"culture",text:"Culture",value:"culture"},{key:"film",text:"Film",value:"film"},{key:"food",text:"Food",value:"food"},{key:"music",text:"Music",value:"music"},{key:"travel",text:"Travel",value:"travel"}],lt=a(27),ut=Object(lt.combineValidators)({title:Object(lt.isRequired)({message:"The event title is required"}),category:Object(lt.isRequired)("Category"),description:Object(lt.composeValidators)(Object(lt.isRequired)("Description"),Object(lt.hasLengthGreaterThan)(4)({message:"Description needs to be at least 5 characters"}))(),city:Object(lt.isRequired)("City"),venue:Object(lt.isRequired)("Venue"),date:Object(lt.isRequired)("Date"),time:Object(lt.isRequired)("Time")}),st=Object(p.a)((function(e){var t=e.match,a=e.history,i=Object(n.useContext)(Ie).activityStore,o=i.createActivity,c=i.editActivity,l=i.submitting,u=i.loadActivity,s=Object(n.useState)(!1),d=Object(De.a)(s,2),b=d[0],p=d[1],h=Object(n.useState)(new Ze),f=Object(De.a)(h,2),v=f[0],g=f[1];Object(n.useEffect)((function(){t.params.id&&(p(!0),u(t.params.id).then((function(e){return g(new Ze(e))})).finally((function(){return p(!1)})))}),[u,t.params.id]);return r.a.createElement(Pe.a,null,r.a.createElement(Pe.a.Column,{width:10},r.a.createElement(Fe.a,{clearing:!0},r.a.createElement(et.b,{validate:ut,onSubmit:function(e){var t=function(e,t){var a=t.getHours()+":"+t.getMinutes()+":00",n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate(),o="".concat(n,"-").concat(r,"-").concat(i);return new Date(o+" "+a)}(e.date,e.time),a=(e.date,e.time,Object(Qe.a)(e,["date","time"]));if(a.date=t,a.id)c(a);else{var n=Object(Ke.a)(Object(Ke.a)({},a),{},{id:Object(_e.a)()});o(n)}},initialValues:v,render:function(e){var t=e.handleSubmit,n=e.invalid;e.pristine;return r.a.createElement(Xe.a,{onSubmit:t,loading:b},r.a.createElement(et.a,{name:"title",placeholder:"Title",value:v.title,component:tt}),r.a.createElement(et.a,{name:"description",placeholder:"Description",rows:3,value:v.description,component:at}),r.a.createElement(et.a,{component:ot,options:ct,name:"category",placeholder:"Category",value:v.category}),r.a.createElement(Xe.a.Group,{widths:"equal"},r.a.createElement(et.a,{component:rt,name:"date",date:!0,placeholder:"Date",value:v.date}),r.a.createElement(et.a,{component:rt,name:"time",time:!0,placeholder:"Time",value:v.time})),r.a.createElement(et.a,{component:tt,name:"city",placeholder:"City",value:v.city}),r.a.createElement(et.a,{component:tt,name:"venue",placeholder:"Venue",value:v.venue}),r.a.createElement(m.a,{loading:l,floated:"right",positive:!0,type:"submit",content:"Submit",disabled:b||n}),r.a.createElement(m.a,{onClick:v.id?function(){return a.push("/activities/".concat(v.id))}:function(){return a.push("/activities")},floated:"right",type:"button",content:"Cancel",disabled:b}))}}))))})),mt=a(645),dt=a(103),bt=a(61),pt=a(640),ht=function(e){var t=e.error,a=e.text;return r.a.createElement(pt.a,{error:!0},r.a.createElement(pt.a.Header,null,t.statusText),t.data&&Object.keys(t.data.errors).length>0&&r.a.createElement(pt.a.List,null,Object.values(t.data.errors).flat().map((function(e,t){return r.a.createElement(pt.a.Item,{key:t},e)}))),a&&r.a.createElement(pt.a.Content,{content:a}))},ft=Object(lt.combineValidators)({email:Object(lt.isRequired)("Email"),password:Object(lt.isRequired)("Password")}),vt=function(){var e=Object(n.useContext)(Ie).userStore.login;return r.a.createElement(et.b,{onSubmit:function(t){return e(t).catch((function(e){return Object(dt.a)({},bt.a,e)}))},validate:ft,render:function(e){var t=e.handleSubmit,a=e.submitting,n=e.submitError,i=e.invalid,o=e.pristine,c=e.dirtySinceLastSubmit;return r.a.createElement(Xe.a,{onSubmit:t,error:!0},r.a.createElement(mt.a,{as:"h2",content:"Login to Reactivities",color:"teal",textAlign:"center"}),r.a.createElement(et.a,{name:"email",component:tt,placeholder:"Email"}),r.a.createElement(et.a,{name:"password",component:tt,placeholder:"Password",type:"password"}),n&&!c&&r.a.createElement(ht,{error:n,text:"Invalid email or password"}),r.a.createElement(m.a,{disabled:i&&!c||o,loading:a,color:"teal",content:"Login",fluid:!0}))}})},gt=Object(lt.combineValidators)({username:Object(lt.isRequired)("Username"),displayName:Object(lt.isRequired)("DisplayName"),email:Object(lt.isRequired)("Email"),password:Object(lt.isRequired)("Password")}),Et=function(){var e=Object(n.useContext)(Ie).userStore.register;return r.a.createElement(et.b,{onSubmit:function(t){return e(t).catch((function(e){return Object(dt.a)({},bt.a,e)}))},validate:gt,render:function(e){var t=e.handleSubmit,a=e.submitting,n=e.submitError,i=e.invalid,o=e.pristine,c=e.dirtySinceLastSubmit;return r.a.createElement(Xe.a,{onSubmit:t,error:!0},r.a.createElement(mt.a,{as:"h2",content:"Sign up to Reactivities",color:"teal",textAlign:"center"}),r.a.createElement(et.a,{name:"username",component:tt,placeholder:"Username"}),r.a.createElement(et.a,{name:"displayName",component:tt,placeholder:"Display Name"}),r.a.createElement(et.a,{name:"email",component:tt,placeholder:"Email"}),r.a.createElement(et.a,{name:"password",component:tt,placeholder:"Password",type:"password"}),n&&!c&&r.a.createElement(ht,{error:n}),r.a.createElement(m.a,{disabled:i&&!c||o,loading:a,color:"teal",content:"Register",fluid:!0}))}})},yt=function(){var e=Object(n.useContext)(Ie).userStore.login;return r.a.createElement(et.b,{onSubmit:function(t){return e({email:"bob@test.com",password:"Pa$$w0rd"})},render:function(e){var t=e.handleSubmit,a=e.submitting;return r.a.createElement(Xe.a,{onSubmit:t,error:!0},r.a.createElement(mt.a,{as:"h2",content:"Login to Reactivities",color:"teal",textAlign:"center"}),r.a.createElement(et.a,{name:"email",defaultValue:"bob@test.com",component:tt,placeholder:"Email"}),r.a.createElement(et.a,{name:"password",component:tt,type:"password",defaultValue:"Pa$$w0rd"}),r.a.createElement(m.a,{loading:a,color:"teal",content:"Login",fluid:!0}))}})},jt=function(){var e=Object(n.useContext)(Ie),t=e.userStore,a=t.isLoggedIn,i=t.user,o=e.modalStore.openModal;return r.a.createElement(Fe.a,{inverted:!0,textAlign:"center",vertical:!0,className:"masthead"},r.a.createElement(u.a,{text:!0},r.a.createElement(mt.a,{as:"h1",inverted:!0},r.a.createElement(d.a,{size:"massive",src:"/assets/logo.png",alt:"logo",style:{marginBottom:12}}),"Reactivities"),a&&i?r.a.createElement(n.Fragment,null,r.a.createElement(mt.a,{as:"h2",inverted:!0,content:"Welcome back ".concat(i.displayName)}),r.a.createElement(m.a,{as:c.b,to:"/activities",size:"huge",inverted:!0},"Go to activities!")):r.a.createElement(n.Fragment,null,r.a.createElement(mt.a,{as:"h2",inverted:!0,content:"Welcome to Reactivities"}),r.a.createElement(m.a,{onClick:function(){return o(r.a.createElement(vt,null))},size:"huge",inverted:!0},"Login"),r.a.createElement(m.a,{onClick:function(){return o(r.a.createElement(Et,null))},size:"huge",inverted:!0},"Register"),r.a.createElement(m.a,{onClick:function(){return o(r.a.createElement(yt,null))},size:"huge",inverted:!0},"Test App"))))},Ot={filter:"brightness(30%)"},wt={position:"absolute",bottom:"5%",left:"5%",width:"100%",height:"auto",color:"white"},St=Object(p.a)((function(e){var t=e.activity,a=Object(n.useContext)(Ie).activityStore,i=a.attendActivity,o=a.cancelAttendance,l=a.loading,u=t.attendees.filter((function(e){return e.isHost}))[0];return r.a.createElement(Fe.a.Group,null,r.a.createElement(Fe.a,{basic:!0,attached:"top",style:{padding:"0"}},r.a.createElement(d.a,{src:"/assets/categoryImages/".concat(t.category,".jpg"),fluid:!0,style:Ot}),r.a.createElement(Fe.a,{style:wt,basic:!0},r.a.createElement(Me.a.Group,null,r.a.createElement(Me.a,null,r.a.createElement(Me.a.Content,null,r.a.createElement(mt.a,{size:"huge",content:t.title,style:{color:"white"}}),r.a.createElement("p",null,Object(Te.a)(t.date,"eeee do MMMM")),r.a.createElement("p",null,"Hosted by ",r.a.createElement(c.b,{to:"/profile/".concat(u.username)},r.a.createElement("strong",null,"Bob")))))))),r.a.createElement(Fe.a,{clearing:!0,attached:"bottom"},t.isHost?r.a.createElement(m.a,{as:c.b,to:"/manage/".concat(t.id),color:"orange",floated:"right"},"Manage Event"):t.isGoing?r.a.createElement(m.a,{loading:l,onClick:o},"Cancel attendance"):r.a.createElement(m.a,{loading:l,onClick:i,color:"teal"},"Join Activity")))})),Ct=function(e){var t=e.activity;return r.a.createElement(Fe.a.Group,null,r.a.createElement(Fe.a,{attached:"top"},r.a.createElement(Pe.a,null,r.a.createElement(Pe.a.Column,{width:1},r.a.createElement(He.a,{size:"large",color:"teal",name:"info"})),r.a.createElement(Pe.a.Column,{width:15},r.a.createElement("p",null,t.description)))),r.a.createElement(Fe.a,{attached:!0},r.a.createElement(Pe.a,{verticalAlign:"middle"},r.a.createElement(Pe.a.Column,{width:1},r.a.createElement(He.a,{name:"calendar",size:"large",color:"teal"})),r.a.createElement(Pe.a.Column,{width:15},r.a.createElement("span",null,Object(Te.a)(t.date,"eeee do MMMM")," at ",Object(Te.a)(t.date,"h:mm a"))))),r.a.createElement(Fe.a,{attached:!0},r.a.createElement(Pe.a,{verticalAlign:"middle"},r.a.createElement(Pe.a.Column,{width:1},r.a.createElement(He.a,{name:"marker",size:"large",color:"teal"})),r.a.createElement(Pe.a.Column,{width:11},r.a.createElement("span",null,t.venue,", ",t.city)))))},kt=a(632),xt=a(636),At=Object(p.a)((function(){var e=Object(n.useContext)(Ie).activityStore,t=e.createHubConnection,a=e.stopHubConnection,i=e.addComment,o=e.activity;return Object(n.useEffect)((function(){return t(o.id),function(){a()}}),[t,a]),r.a.createElement(n.Fragment,null,r.a.createElement(Fe.a,{textAlign:"center",attached:"top",inverted:!0,color:"teal",style:{border:"none"}},r.a.createElement(mt.a,null,"Chat about this event")),r.a.createElement(Fe.a,{attached:!0},r.a.createElement(kt.a.Group,null,o&&o.comments&&o.comments.map((function(e){return r.a.createElement(kt.a,null,r.a.createElement(kt.a.Avatar,{src:e.image||"/assets/user.png"}),r.a.createElement(kt.a.Content,null,r.a.createElement(kt.a.Author,{as:c.b,to:"/profile/".concat(e.username)},e.displayName),r.a.createElement(kt.a.Metadata,null,r.a.createElement("div",null,Object(xt.a)(e.createdAt,new Date))),r.a.createElement(kt.a.Text,null,e.body)))})),r.a.createElement(et.b,{onSubmit:i,render:function(e){var t=e.handleSubmit,a=e.submitting,n=e.form;return r.a.createElement(Xe.a,{onSubmit:function(){return t().then((function(){return n.reset()}))}},r.a.createElement(et.a,{name:"body",component:at,rows:2,placeholder:"Add your comment"}),r.a.createElement(m.a,{loading:a,content:"Add Reply",labelPosition:"left",icon:"edit",primary:!0}))}}))))})),zt=Object(p.a)((function(e){var t=e.attendees;return r.a.createElement(n.Fragment,null,r.a.createElement(Fe.a,{textAlign:"center",style:{border:"none"},attached:"top",secondary:!0,inverted:!0,color:"teal"},t.length," ",1===t.length?"Person":"People"," going"),r.a.createElement(Fe.a,{attached:!0},r.a.createElement(Ge.a,{relaxed:!0,divided:!0},t.map((function(e){return r.a.createElement(Me.a,{key:e.username,style:{position:"relative"}},e.isHost&&r.a.createElement(Le.a,{style:{position:"absolute"},color:"orange",ribbon:"right"},"Host"),r.a.createElement(d.a,{size:"tiny",src:e.image||"/assets/user.png"}),r.a.createElement(Me.a.Content,{verticalAlign:"middle"},r.a.createElement(Me.a.Header,{as:"h3"},r.a.createElement(c.b,{to:"/profile/".concat(e.username)},e.displayName)),r.a.createElement(Me.a.Extra,{style:{color:"orange"}},"Following")))})))))})),It=Object(p.a)((function(e){var t=e.match,a=(e.history,Object(n.useContext)(Ie).activityStore),i=a.activity,o=a.loadActivity,c=a.loadingInitial;return Object(n.useEffect)((function(){o(t.params.id)}),[o,t.params.id]),c?r.a.createElement($e,{content:"Loading activity..."}):i?r.a.createElement(Pe.a,null,r.a.createElement(Pe.a.Column,{width:10},r.a.createElement(St,{activity:i}),r.a.createElement(Ct,{activity:i}),r.a.createElement(At,null)),r.a.createElement(Pe.a.Column,{width:6},r.a.createElement(zt,{attendees:i.attendees}))):r.a.createElement("h2",null,"Activity not found")})),Rt=function(){return r.a.createElement(Fe.a,{placeholder:!0},r.a.createElement(mt.a,{icon:!0},r.a.createElement(He.a,{name:"search"}),"Oops - we've looked everywhere but couldn't find this."),r.a.createElement(Fe.a.Inline,null,r.a.createElement(m.a,{as:c.b,to:"/activities",primary:!0},"Return to Activities page")))},Pt=a(635),Dt=Object(p.a)((function(){var e=Object(n.useContext)(Ie).modalStore,t=e.modal,a=t.open,i=t.body,o=e.closeModal;return r.a.createElement(Pt.a,{open:a,onClose:o,size:"mini"},r.a.createElement(Pt.a.Content,null,i))})),Lt=a(642),Mt=a(628),Ft=a(647),Ht=Object(p.a)((function(e){var t=e.profile;return r.a.createElement(Fe.a,null,r.a.createElement(Pe.a,null,r.a.createElement(Pe.a.Column,{width:12},r.a.createElement(Me.a.Group,null,r.a.createElement(Me.a,null,r.a.createElement(Me.a.Image,{avatar:!0,size:"small",src:t.image||"/assets/user.png"}),r.a.createElement(Me.a.Content,{verticalAlign:"middle"},r.a.createElement(mt.a,{as:"h1"},t.displayName))))),r.a.createElement(Pe.a.Column,{width:4},r.a.createElement(Lt.a.Group,{widths:2},r.a.createElement(Lt.a,{label:"Followers",value:"5"}),r.a.createElement(Lt.a,{label:"Following",value:"42"})),r.a.createElement(Mt.a,null),r.a.createElement(Ft.a,{animated:"move"},r.a.createElement(Ft.a.Content,{visible:!0,style:{width:"100%"}},r.a.createElement(m.a,{fluid:!0,color:"teal",content:"Following"})),r.a.createElement(Ft.a.Content,{hidden:!0},r.a.createElement(m.a,{fluid:!0,basic:!0,color:"red",content:"Unfollow"}))))))})),Tt=a(648),Gt=a(638),qt=Object(p.a)((function(){var e=Object(n.useContext)(Ie).profileStore.profile;return r.a.createElement(Tt.a.Pane,null,r.a.createElement(mt.a,{floated:"left",icon:"image",content:"Photos"}),r.a.createElement(Gt.a.Group,{itemsPerRow:5},e&&e.photos.map((function(e){return r.a.createElement(Gt.a,{key:e.id},r.a.createElement(d.a,{src:e.url}))}))))})),Nt=[{menuItem:"About",render:function(){return r.a.createElement(Tt.a.Pane,null,"About content")}},{menuItem:"Photos",render:function(){return r.a.createElement(qt,null)}},{menuItem:"Activities",render:function(){return r.a.createElement(Tt.a.Pane,null,"Activities content")}},{menuItem:"Followers",render:function(){return r.a.createElement(Tt.a.Pane,null,"Followers content")}},{menuItem:"Following",render:function(){return r.a.createElement(Tt.a.Pane,null,"Following content")}}],Bt=function(){return r.a.createElement(Tt.a,{menu:{fluid:!0,vertical:!0},menuPosition:"right",panes:Nt,activeIndex:1})},Ut=Object(p.a)((function(e){var t=e.match,a=Object(n.useContext)(Ie).profileStore,i=a.loadingProfile,o=a.profile,c=a.loadProfile;return Object(n.useEffect)((function(){c(t.params.username)}),[c,t]),i?r.a.createElement($e,{content:"Loading profile..."}):r.a.createElement(Pe.a,null,r.a.createElement(Pe.a.Column,{width:16},r.a.createElement(Ht,{profile:o}),r.a.createElement(Bt,null)))})),Vt=Object(Je.f)(Object(p.a)((function(e){var t=e.location,a=Object(n.useContext)(Ie),i=a.commonStore,o=i.setAppLoaded,c=i.token,l=i.appLoaded,s=a.userStore.getUser;return Object(n.useEffect)((function(){c?s().finally((function(){return o()})):o()}),[s,o,c]),l?r.a.createElement(n.Fragment,null,r.a.createElement(Dt,null),r.a.createElement(k.a,{position:"bottom-right"}),r.a.createElement(Je.a,{exact:!0,path:"/",component:jt}),r.a.createElement(Je.a,{path:"/(.+)",render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(Re,null),r.a.createElement(u.a,{style:{marginTop:"7em"}},r.a.createElement(Je.c,null,r.a.createElement(Je.a,{exact:!0,path:"/activities",component:We}),r.a.createElement(Je.a,{path:"/activities/:id",component:It}),r.a.createElement(Je.a,{key:t.key,path:["/createActivity","/manage/:id"," "],component:st}),r.a.createElement(Je.a,{path:"/profile/:username",component:Ut}),r.a.createElement(Je.a,{component:Rt}))))}})):r.a.createElement($e,{content:"Loading app..."})})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Yt=Object(Je.f)((function(e){var t=e.children,a=e.location.pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[a]),t})),$t=a(334);a.n($t)()();var Wt=Object(l.a)();o.a.render(r.a.createElement(c.a,null,r.a.createElement(Yt,null,r.a.createElement(Vt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[347,1,2]]]);
//# sourceMappingURL=main.73deafe5.chunk.js.map