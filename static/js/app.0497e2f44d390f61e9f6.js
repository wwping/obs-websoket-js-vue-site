webpackJsonp([1],{"5iDN":function(t,n){},"7QVd":function(t,n){},"7TJK":function(t,n){},AAFa:function(t,n){},FA3P:function(t,n){},FA3e:function(t,n){},GiMZ:function(t,n){},MpEx:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),c=e("//Fk"),o=e.n(c),r=e("Dd8w"),i=e.n(r),a=e("2gJW"),u=e.n(a),d=e("NYxO"),m=e("lMDy"),l={name:"Connect",data:function(){return{obs:null}},computed:i()({},Object(d.b)({connecting:function(t){return t.connecting},connect_config:function(t){return t.connect_config},scenes:function(t){return t.scenes},current_scene:function(t){return t.current_scene}})),watch:{connecting:function(t){this.updateSources()}},mounted:function(){var t=this;this.obs=new u.a,this.obs.on("ConnectionClosed",this.close),this.obs.on("StreamStarted",this.streamStarted),this.obs.on("StreamStopped",this.streamStopped),this.obs.on("RecordingPaused",this.recordingPaused),this.obs.on("RecordingResumed",this.recordingResumed),this.obs.on("RecordingStarted",this.recordingStarted),this.obs.on("RecordingStopped",this.recordingStopped),this.obs.on("Exiting",this.exiting),this.obs.on("BroadcastCustomMessage",function(t){});["SwitchScenes","ScenesChanged","SceneCollectionChanged","SceneCollectionListChanged","TransitionListChanged","TransitionDurationChanged","ProfileChanged","ProfileListChanged","StreamStarted","StreamStopped","StreamStatus","RecordingStarted","RecordingStopped","RecordingPaused","RecordingResumed","ReplayStarted","ReplayStopped","SourceCreated","SourceDestroyed","SourceVolumeChanged","SourceMuteStateChanged","SourceAudioActivated","SourceAudioDeactivated","SourceAudioActivated","SourceAudioSyncOffsetChanged","SourceAudioMixersChanged","SourceRenamed","SourceFilterAdded","SourceFilterRemoved","SourceFilterVisibilityChanged","SourceFiltersReordered","MediaPaused","MediaStopped","MediaNext","MediaPrevious","MediaStarted","MediaEnded","SourceOrderChanged","SceneItemAdded","SceneItemRemoved","SceneItemVisibilityChanged","SceneItemLockChanged","SceneItemTransformChanged","SceneItemSelected","SceneItemDeselected","PreviewSceneChanged","StudioModeSwitched"].map(function(n){t.obs.on(n,function(){t.updateSources()})}),m.a.add("obs-command",this.command),m.a.add("obs-connect",this.connect),m.a.add("obs-disconnect",this.disconnect),m.a.add("obs-setCurrentScene",this.setCurrentScene),this.connect()},methods:{connect:function(){var t=this,n=this.connect_config.address+":"+this.connect_config.port;this.obs.connect({address:n,password:this.connect_config.secret}).then(function(){t.success()}).catch(function(){t.error()})},disconnect:function(){this.obs.disconnect()},setConnecting:function(t){this.$store.dispatch("connecting",t)},success:function(){this.setConnecting(!0)},error:function(){this.setConnecting(!1)},close:function(){this.setConnecting(!1)},exiting:function(){this.setConnecting(!1)},setCurrentScene:function(t){this.command({cmd:"SetCurrentScene",params:{"scene-name":t},callback:function(){}}),this.$store.dispatch("current_scene",t)},updateSources:function(){this.getScenes(),this.getTransition(),this.getMedias(),this.getRecordStatus(),this.getStreamingStatus()},getScenes:function(){var t=this;this.command({cmd:"GetSceneList",callback:function(n){"ok"==n.status&&(t.$store.dispatch("scenes",n.scenes),t.$store.dispatch("current_scene",n.currentScene))}})},getMedias:function(){var t=this;this.command({cmd:"GetSpecialSources",callback:function(n){if("ok"==n.status){var e=["desktop-1","desktop-2","mic-1","mic-2","mic-3"],s=[];for(var c in n)e.indexOf(c)>=0&&s.push(n[c]);t.command({cmd:"GetSourceTypesList",callback:function(n){if("ok"==n.status){var e=n.types.filter(function(t){return 1==t.caps.hasAudio}).map(function(t){return t.typeId}),c=t.scenes.filter(function(n){return n.name==t.current_scene})[0].sources.filter(function(t){return e.indexOf(t.type)>=0&&1==t.render}).map(function(t){return t.name}),r=(c=c.concat(s)).map(function(n){return new o.a(function(e,s){t.command({cmd:"GetVolume",params:{source:n,useDecibel:!0},callback:function(t){"ok"==t.status?e(t):s()}})})});o.a.all(r).then(function(n){t.$store.dispatch("sounds",n.map(function(t){return{name:t.name,muted:t.muted,volume:t.volume}}))})}}})}}})},getTransition:function(){var t=this;this.command({cmd:"GetTransitionList",params:{},callback:function(n){"ok"==n.status&&(t.$store.dispatch("transitions",n.transitions),t.$store.dispatch("current_transition",n.currentTransition))}}),this.command({cmd:"GetTransitionDuration",params:{},callback:function(n){"ok"==n.status&&t.$store.dispatch("transition_duration",n.transitionDuration)}})},setStreaming:function(t){this.$store.dispatch("streaming",t)},streamStarted:function(){this.setStreaming(!0)},streamStopped:function(){this.setStreaming(!1)},getStreamingStatus:function(){var t=this;this.command({cmd:"GetStreamingStatus",callback:function(n){"ok"==n.status&&t.setStreaming(n.streaming)}})},setRecording:function(t){this.$store.dispatch("recording",t)},setRecordingPause:function(t){this.$store.dispatch("record_paused",t)},recordingStarted:function(){this.setRecording(!0)},recordingStopped:function(){this.setRecording(!1)},recordingPaused:function(){this.setRecordingPause(!0)},recordingResumed:function(){this.setRecordingPause(!1)},getRecordStatus:function(){var t=this;this.command({cmd:"GetRecordingStatus",callback:function(n){"ok"==n.status&&(t.setRecording(n.isRecording),t.setRecordingPause(n.isRecordingPaused))}})},command:function(t){var n=t.cmd,e=t.params,s=t.callback;this.obs.send(n,e||{}).then(s).catch(s)}}},f={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]},p={name:"App",components:{Connect:e("VU/8")(l,f,!1,null,null,null).exports}},h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("Connect"),this._v(" "),n("router-view")],1)},staticRenderFns:[]};var g=e("VU/8")(p,h,!1,function(t){e("pQAj")},null,null).exports,v=e("/ocq");s.default.use(v.a);var _=new v.a({routes:[{path:"/",name:"Index",component:e("eerB").default}]}),S=e("mvHQ"),b=e.n(S);s.default.use(d.a);var C=new d.a.Store({state:{connecting:!1,streaming:!1,recording:!1,record_paused:!1,connect_config:{address:"127.0.0.1",port:4444,secret:""},scenes:[],current_scene:"",transitions:[],current_transition:"",transition_duration:0,sounds:[]},getters:{},mutations:{connecting:function(t,n){return t.connecting=n},streaming:function(t,n){return t.streaming=n},recording:function(t,n){return t.recording=n},record_paused:function(t,n){return t.record_paused=n},scenes:function(t,n){return t.scenes=JSON.parse(b()(n))},current_scene:function(t,n){return t.current_scene=n},transitions:function(t,n){return t.transitions=n},current_transition:function(t,n){return t.current_transition=n},transition_duration:function(t,n){return t.transition_duration=n},sounds:function(t,n){return t.sounds=JSON.parse(b()(n))},connect_config:function(t,n){return t.connectConfig=JSON.parse(b()(n))}},actions:{connecting:function(t,n){return t.commit("connecting",n)},streaming:function(t,n){return t.commit("streaming",n)},recording:function(t,n){return t.commit("recording",n)},record_paused:function(t,n){return t.commit("record_paused",n)},scenes:function(t,n){return t.commit("scenes",n)},current_scene:function(t,n){return t.commit("current_scene",n)},transitions:function(t,n){return t.commit("transitions",n)},current_transition:function(t,n){return t.commit("current_transition",n)},transition_duration:function(t,n){return t.commit("transition_duration",n)},sounds:function(t,n){return t.commit("sounds",n)},connect_config:function(t,n){return t.commit("connect_config",n)}}}),k=e("b3L9"),R=e.n(k),$=(e("7QVd"),e("woOf")),x=e.n($),I=e("TXmL"),y=e("kofV"),w=e.n(y),F=e("K4an"),T=e.n(F);s.default.use(I.a);var M={en:x()({df:{unconnecting:"not connect",connecting:"connected",connect:"connect",unconnect:"disconnect",address:"address",port:"port",secret:"password",scenes:"scenes",sources:"sources",sounds:"sounds",transtions:"transtions",controls:"controls",startStream:"start stream",stopStream:"stop stream",startRecord:"start record",stopRecord:"stop record",pauseRecord:"pause record",resumeRecord:"resume record",manager:"view",setting:"setting",save:"save"}},w.a),zh:x()({df:{unconnecting:"未连接",connecting:"已连接",connect:"连接",unconnect:"断开",address:"地址",port:"端口",secret:"密码",scenes:"场景",sources:"来源",sounds:"声音",transtions:"转场特效",controls:"控制",startStream:"开始推流",stopStream:"停止推流",startRecord:"开始录制",stopRecord:"停止录制",pauseRecord:"暂停录制",resumeRecord:"继续录制",manager:"管理",setting:"设置",save:"保存"}},T.a)};var P,O=new I.a({locale:(P=localStorage.getItem("local")||"zh",s.default.env&&s.default.env.language&&(P=s.default.env.language),P),messages:M});s.default.use(R.a),s.default.use(R.a,{i18n:function(t,n){return O.t(t,n)}}),s.default.config.productionTip=!1,new s.default({el:"#app",router:_,store:C,i18n:O,components:{App:g},template:"<App/>"})},SIJk:function(t,n){},YLJF:function(t,n){},aYpb:function(t,n){},adE4:function(t,n){},eerB:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),c=e.n(s),o=e("NYxO"),r=e("lMDy"),i={name:"Title",data:function(){return{language:localStorage.getItem("local")||"zh",languages:[{name:"en",txt:"English"},{name:"zh",txt:"简体中文"}]}},computed:c()({connectText:function(){return this.connecting?this.$t("df.connecting"):this.$t("df.unconnecting")}},Object(o.b)({connecting:function(t){return t.connecting}})),mounted:function(){},methods:{connect:function(){r.a.push("obs-connect")},disconnect:function(){r.a.push("obs-disconnect")},languageChange:function(t){localStorage.setItem("local",t),window.location.reload()}}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap-title flex-display"},[e("div",[e("div",{staticClass:"status",class:{connecting:t.connecting}},[e("span",[e("Icon",{attrs:{type:"ios-infinite",size:"16"}})],1),t._v(" "),e("span",[t._v(t._s(t.connectText))]),t._v(" "),e("span",{staticClass:"status-btn"},[t.connecting?e("a",{staticClass:"error",on:{click:t.disconnect}},[t._v(t._s(t.$t("df.unconnect")))]):e("a",{attrs:{href:"javascript:;"},on:{click:t.connect}},[t._v(t._s(t.$t("df.connect")))])])])]),t._v(" "),e("div",{staticClass:"flex-1"}),t._v(" "),e("div",[e("Select",{staticStyle:{width:"auto"},attrs:{size:"small"},on:{"on-change":t.languageChange},model:{value:t.language,callback:function(n){t.language=n},expression:"language"}},t._l(t.languages,function(n){return e("Option",{key:n.name,attrs:{value:n.name}},[t._v(t._s(n.txt))])}),1)],1)])},staticRenderFns:[]};var u=e("VU/8")(i,a,!1,function(t){e("aYpb"),e("MpEx")},"data-v-8d425d92",null).exports,d={name:"Controls",data:function(){return{}},computed:c()({},Object(o.b)({streaming:function(t){return t.streaming},recording:function(t){return t.recording},record_paused:function(t){return t.record_paused}})),methods:{startRecord:function(){r.a.push("obs-command",{cmd:"StartRecording",callback:function(){}})},stopRecord:function(){r.a.push("obs-command",{cmd:"StopRecording",callback:function(){}})},startStream:function(){r.a.push("obs-command",{cmd:"StartStreaming",callback:function(){}})},stopStream:function(){r.a.push("obs-command",{cmd:"StopStreaming",callback:function(){}})},pauseRecording:function(){r.a.push("obs-command",{cmd:"PauseRecording",callback:function(){}})},resumeRecording:function(){r.a.push("obs-command",{cmd:"ResumeRecording",callback:function(){}})}}},m={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ul",[e("li",[t.streaming?e("Button",{attrs:{type:"warning",size:"small"},on:{click:t.stopStream}},[t._v(t._s(t.$t("df.stopStream")))]):e("Button",{attrs:{size:"small"},on:{click:t.startStream}},[t._v(t._s(t.$t("df.startStream")))])],1),t._v(" "),e("li",[t.record_paused?e("span",[e("Button",{attrs:{type:"warning",size:"small"},on:{click:t.stopRecord}},[t._v(t._s(t.$t("df.stopRecord")))]),t._v(" "),e("Button",{attrs:{size:"small"},on:{click:t.resumeRecording}},[t._v(t._s(t.$t("df.resumeRecord")))])],1):t.recording?e("span",[e("Button",{attrs:{type:"warning",size:"small"},on:{click:t.stopRecord}},[t._v(t._s(t.$t("df.stopRecord")))]),t._v(" "),e("Button",{attrs:{size:"small"},on:{click:t.pauseRecording}},[t._v(t._s(t.$t("df.pauseRecord")))])],1):e("span",[e("Button",{attrs:{size:"small"},on:{click:t.startRecord}},[t._v(t._s(t.$t("df.startRecord")))])],1)])])])},staticRenderFns:[]};var l=e("VU/8")(d,m,!1,function(t){e("FA3e")},"data-v-d91e2d32",null).exports,f={name:"Scenes",computed:c()({},Object(o.b)({scenes:function(t){return t.scenes},current_scene:function(t){return t.current_scene}})),methods:{change:function(t){r.a.push("obs-setCurrentScene",t)}}},p={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ul",t._l(t.scenes,function(n,s){return e("li",{key:s,class:{current:n.name==t.current_scene},on:{click:function(e){return t.change(n.name)}}},[t._v(t._s(n.name))])}),0)])},staticRenderFns:[]};var h=e("VU/8")(f,p,!1,function(t){e("SIJk")},"data-v-e74317f0",null).exports,g={name:"Sources",computed:c()({},Object(o.b)({scenes:function(t){return t.scenes},current_scene:function(t){return t.current_scene}}),{sources:function(){var t=this,n=this.scenes.filter(function(n){return n.name==t.current_scene})[0];return n?n.sources:[]}}),methods:{setRender:function(t,n){r.a.push("obs-command",{cmd:"SetSceneItemProperties",params:{"scene-name":this.current_scene,item:{name:t},visible:n},callback:function(t){}})},setLock:function(t,n){r.a.push("obs-command",{cmd:"SetSceneItemProperties",params:{"scene-name":this.current_scene,item:{name:t},locked:n},callback:function(t){}})}}},v={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ul",t._l(t.sources,function(n,s){return e("li",{key:s,staticClass:"flex-display"},[e("span",{staticClass:"icon"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(n.name))]),t._v(" "),e("span",{staticClass:"flex-1"}),t._v(" "),e("span",{staticClass:"render"},[n.render?e("Icon",{attrs:{type:"md-eye",size:"18"},on:{click:function(e){return t.setRender(n.name,!1)}}}):e("Icon",{attrs:{type:"ios-eye-off-outline",size:"18"},on:{click:function(e){return t.setRender(n.name,!0)}}})],1),t._v(" "),e("span",{staticClass:"lock"},[n.locked?e("Icon",{attrs:{type:"md-lock",size:"18"},on:{click:function(e){return t.setLock(n.name,!1)}}}):e("Icon",{attrs:{type:"ios-unlock-outline",size:"18"},on:{click:function(e){return t.setLock(n.name,!0)}}})],1)])}),0)])},staticRenderFns:[]};var _=e("VU/8")(g,v,!1,function(t){e("GiMZ")},"data-v-41a41fc2",null).exports,S={name:"Transtions",data:function(){return{transtion:""}},computed:c()({},Object(o.b)({transitions:function(t){return t.transitions},current_transition:function(t){return t.current_transition},transition_duration:function(t){return t.transition_duration}})),mounted:function(){},methods:{currentChange:function(t){r.a.push("obs-command",{cmd:"SetCurrentTransition",params:{"transition-name":t},callback:function(){}})},durationChange:function(t){r.a.push("obs-command",{cmd:"SetTransitionDuration",params:{duration:t},callback:function(){}})}}},b={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"transition"},[e("ul",[e("li",[e("Select",{attrs:{value:t.current_transition},on:{"on-change":t.currentChange}},t._l(t.transitions,function(n){return e("Option",{key:n.name,attrs:{value:n.name}},[t._v(t._s(n.name))])}),1)],1),t._v(" "),e("li",[e("InputNumber",{attrs:{min:0,value:t.transition_duration},on:{"on-change":t.durationChange}}),t._v(" ms\n            ")],1)])])])},staticRenderFns:[]};var C=e("VU/8")(S,b,!1,function(t){e("pKV3")},"data-v-c3b749ba",null).exports,k=e("mvHQ"),R=e.n(k),$={name:"Sounds",data:function(){return{sounds:[]}},computed:c()({},Object(o.b)({obssounds:function(t){return t.sounds}})),watch:{obssounds:function(t){this.sounds=JSON.parse(R()(this.obssounds))}},mounted:function(){},methods:{volumeChange:function(t){r.a.push("obs-command",{cmd:"SetVolume",params:{source:t.name,volume:t.volume,useDecibel:!0}}),this.$store.dispatch("sounds",this.sounds)},setMute:function(t){r.a.push("obs-command",{cmd:"SetMute",params:{source:t.name,mute:!t.muted}}),this.$store.dispatch("sounds",this.sounds)}}},x={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("ul",{staticClass:"sounds-wrap"},t._l(t.sounds,function(n,s){return e("li",{key:s},[e("dl",[e("dt",[t._v(t._s(n.name))]),t._v(" "),e("dd",{staticClass:"flex-display"},[e("Slider",{staticClass:"flex-1",attrs:{step:.01,min:-100,max:0},on:{"on-change":function(e){return t.volumeChange(n)}},model:{value:n.volume,callback:function(e){t.$set(n,"volume",e)},expression:"item.volume"}}),t._v(" "),e("span",{staticClass:"mute"},[n.muted?e("Icon",{attrs:{type:"md-volume-off"},on:{click:function(e){return t.setMute(n)}}}):e("Icon",{attrs:{type:"md-volume-up"},on:{click:function(e){return t.setMute(n)}}})],1)],1)])])}),0)])},staticRenderFns:[]};var I={components:{Controls:l,Scenes:h,Sources:_,Transtions:C,Sounds:e("VU/8")($,x,!1,function(t){e("FA3P"),e("adE4")},"data-v-687088ce",null).exports}},y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"wrap-manager flex-display"},[e("div",{staticClass:"scenes flex-1"},[e("h3",[t._v(t._s(t.$t("df.scenes")))]),t._v(" "),e("div",{staticClass:"cont scroll"},[e("Scenes")],1)]),t._v(" "),e("div",{staticClass:"sources flex-1"},[e("h3",[t._v(t._s(t.$t("df.sources")))]),t._v(" "),e("div",{staticClass:"cont scroll"},[e("Sources")],1)]),t._v(" "),e("div",{staticClass:"sounds flex-1"},[e("h3",[t._v(t._s(t.$t("df.sounds")))]),t._v(" "),e("div",{staticClass:"cont scroll"},[e("Sounds")],1)]),t._v(" "),e("div",{staticClass:"transtions flex-1"},[e("h3",[t._v(t._s(t.$t("df.transtions")))]),t._v(" "),e("div",{staticClass:"cont scroll"},[e("Transtions")],1)]),t._v(" "),e("div",{staticClass:"contrls flex-1"},[e("h3",[t._v(t._s(t.$t("df.controls")))]),t._v(" "),e("div",{staticClass:"cont scroll"},[e("Controls")],1)])])])},staticRenderFns:[]};var w=e("VU/8")(I,y,!1,function(t){e("7TJK")},"data-v-23e4d32b",null).exports,F={name:"Preview",data:function(){return{src:""}},mounted:function(){this.takeScreenshot()},computed:c()({},Object(o.b)({scenes:function(t){return t.scenes},current_scene:function(t){return t.current_scene}})),methods:{takeScreenshot:function(){var t=this;r.a.push("obs-command",{cmd:"TakeSourceScreenshot",params:{sourceName:this.current_scene,embedPictureFormat:"jpg",compressionQuality:100},callback:function(n){"ok"==n.status&&(t.src=n.img),setTimeout(t.takeScreenshot,1e3)}})}}},T={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"preview"},[n("img",{attrs:{src:this.src,alt:""}})])])},staticRenderFns:[]};var M=e("VU/8")(F,T,!1,function(t){e("YLJF")},"data-v-0df36f94",null).exports,P={name:"Setting",data:function(){return{formItem:{address:"",port:"",secret:""},formItemRule:{}}},computed:c()({},Object(o.b)({connect_config:function(t){return t.connect_config}})),mounted:function(){this.formItem=JSON.parse(R()(this.connect_config))},methods:{handleSubmit:function(t){this.$store.dispatch("connect_config",this.formItem),r.a.push("obs-disconnect"),r.a.push("obs-connect")}}},O={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"setting-wrap"},[e("Form",{ref:"formItem",attrs:{model:t.formItem,rules:t.formItemRule,"label-width":80}},[e("FormItem",{attrs:{prop:"address",label:t.$t("df.address")}},[e("Input",{model:{value:t.formItem.address,callback:function(n){t.$set(t.formItem,"address",n)},expression:"formItem.address"}})],1),t._v(" "),e("FormItem",{attrs:{prop:"port",label:t.$t("df.port")}},[e("Input",{model:{value:t.formItem.port,callback:function(n){t.$set(t.formItem,"port",n)},expression:"formItem.port"}})],1),t._v(" "),e("FormItem",{attrs:{prop:"secret",label:t.$t("df.secret")}},[e("Input",{attrs:{type:"password"},model:{value:t.formItem.secret,callback:function(n){t.$set(t.formItem,"secret",n)},expression:"formItem.secret"}})],1),t._v(" "),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:function(n){return t.handleSubmit("formItem")}}},[t._v(t._s(t.$t("df.save")))])],1)],1)],1)])},staticRenderFns:[]};var A={name:"Index",components:{Title:u,Manager:w,Preview:M,Setting:e("VU/8")(P,O,!1,function(t){e("znxs")},"data-v-10f3f01c",null).exports},data:function(){return{}},watch:{width:function(){this.height=this.width/16*9}},mounted:function(){},methods:{}},V={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"wrap"},[n("div",{staticClass:"title"},[n("Title")],1),this._v(" "),n("Tabs",{attrs:{value:"manager"}},[n("TabPane",{attrs:{label:this.$t("df.manager"),name:"manager"}},[n("div",{ref:"preview",staticClass:"preview"},[n("Preview")],1),this._v(" "),n("div",{staticClass:"manager"},[n("Manager")],1)]),this._v(" "),n("TabPane",{attrs:{label:this.$t("df.setting"),name:"setting"}},[n("Setting")],1)],1)],1)])},staticRenderFns:[]};var z=e("VU/8")(A,V,!1,function(t){e("AAFa"),e("5iDN")},"data-v-576c2f11",null);n.default=z.exports},lMDy:function(t,n,e){"use strict";n.a={subs:{},add:function(t,n){"function"==typeof n&&(this.subs[t]||(this.subs[t]=[]),this.subs[t].push(n))},remove:function(t,n){for(var e=this.subs[t]||[],s=e.length-1;s>=0;s--)e[s]==n&&e.splice(s,1)},push:function(t,n){for(var e=this.subs[t]||[],s=e.length-1;s>=0;s--)e[s](n)}}},pKV3:function(t,n){},pQAj:function(t,n){},znxs:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.0497e2f44d390f61e9f6.js.map