"use strict";(self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[]).push([[443],{2416:function(t,e,a){a.r(e),a.d(e,{default:function(){return D}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-list"},[e("taskCreate"),e("div",{staticClass:"tasks mt-5"},t._l(t.tasksList,(function(a,i){return e("div",{key:i,staticClass:"task"},[e("taskCard",{staticClass:"mt-3",attrs:{task:a,id:i},on:{deleteCard:t.deleteCard,editTask:t.editCurrentTask}})],1)})),0)],1)},s=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-create"},[e("b-card",{attrs:{"border-variant":"light","bg-variant":"dark","text-variant":"white",title:"Card Title"}},[e("b-form-input",{attrs:{placeholder:"Task"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),e("b-col",{staticClass:"mt-5"},[e("h4",[t._v("Card description")]),e("b-row",[e("b-form-textarea",{attrs:{id:"textarea-no-auto-shrink",placeholder:"Description",rows:"3","max-rows":"8","no-auto-shrink":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),e("b-button",{staticClass:"mt-5",attrs:{href:"#",variant:"primary"},on:{click:t.createTask}},[t._v("Create task")])],1)],1)},d=[],n={name:"TaskListPage",components:{},data(){return{id:0,title:"",description:""}},methods:{createTask(){if(!this.title.length||!this.description.length)return void this.makeToast();const t=this.$store.getters.tasks,e=t?.length?t.length+1:1;this.$store.dispatch("setTask",{id:e,title:this.title,description:this.description}),this.title="",this.description=""},makeToast(){this.$bvToast.toast("Please fill in all fields in new task",{title:"Error",variant:"danger",autoHideDelay:5e3,solid:!0})}}},o=n,l=a(1001),c=(0,l.Z)(o,r,d,!1,null,"6b5332ca",null),k=c.exports,u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"task-create"},[e("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.task?.id)+" "),e("h4",{staticClass:"mb-0"},[t._v(t._s(t.task?.title))])]},proxy:!0}])},[t._v(" "+t._s(t.task?.description)+" "),e("b-card-text"),e("b-row",[e("b-col",[e("taskEditor",{attrs:{task:t.task,id:t.id},on:{editTask:t.editTask}})],1),e("b-col",[e("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.deleteCard(t.task?.id)}}},[t._v("Delete")])],1)],1)],1)],1)},h=[],p=function(){var t=this,e=t._self._c;return e("div",[e("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:t.modalId(t.id),expression:"modalId(id)"}],attrs:{variant:"outline-primary"}},[t._v("Edit")]),e("b-modal",{ref:"modal"+t.id,attrs:{id:"modal"+t.id,title:"BootstrapVue","bg-variant":"dark","header-bg-variant":"dark","header-text-variant":"light","body-bg-variant":"dark","body-text-variant":"light","footer-bg-variant":"dark","footer-text-variant":"light"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[e("div",{staticClass:"w-100"},[e("b-button",{staticClass:"float-right",attrs:{variant:"primary",size:"sm"},on:{click:t.editTask}},[t._v(" Edit task ")])],1)]},proxy:!0}])},[e("div",{staticClass:"task-editor"},[e("h4",[t._v("Card title")]),e("b-form-input",{attrs:{placeholder:t.task?.title},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),e("b-col",{staticClass:"mt-5"},[e("h4",[t._v("Card description")]),e("b-row",[e("b-form-textarea",{attrs:{id:"textarea-no-auto-shrink",placeholder:t.task?.description,rows:"3","max-rows":"8","no-auto-shrink":""},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1)],1)])],1)},m=[],v={name:"TaskListPage",components:{},props:{task:{type:Object,required:!0,default:()=>({id:0,title:"Title",description:"Description"})},id:{type:Number,required:!0,default:0}},data(){return{title:"",description:""}},mounted(){this.title=this.task.title,this.description=this.task.description},methods:{modalId(t){return"modal"+t},editTask(){const t={id:this.task.id,title:this.title,description:this.description};this.$emit("editTask",t),this.$refs[`modal${this.id}`].hide()}}},b=v,f=(0,l.Z)(b,p,m,!1,null,"06393e1c",null),C=f.exports,T={name:"TaskListPage",components:{taskEditor:C},props:{task:{type:Object,default:()=>({id:0,title:"",description:""})},id:{type:Number,required:!0,default:0}},data(){return{title:"",description:""}},methods:{createTask(){this.$store.dispatch("setTask",{title:this.title,description:this.description})},deleteCard(t){this.$emit("deleteCard",t)},editTask(t){this.$emit("editTask",t)}}},_=T,g=(0,l.Z)(_,u,h,!1,null,"31e73393",null),x=g.exports,y=a(3822),w={name:"TaskListPage",components:{taskCreate:k,taskCard:x},data(){return{modifiedChartData:[]}},computed:{...(0,y.Se)(["tasks"]),tasksList(){return this.tasks}},methods:{...(0,y.nv)(["deleteTask","editTask"]),deleteCard(t){this.deleteTask(t)},editCurrentTask(t){this.editTask(t)}}},$=w,L=(0,l.Z)($,i,s,!1,null,"4cc69e4a",null),D=L.exports}}]);
//# sourceMappingURL=about.769ebc36.js.map