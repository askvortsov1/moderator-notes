module.exports=function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=13)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["components/UserPage"]},function(t,e){t.exports=flarum.core.compat.Component},,function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},function(t,e){t.exports=flarum.core.compat["components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["helpers/fullTime"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core},function(t,e,o){"use strict";o.r(e);var r=o(1),n=o.n(r),a=o(2),s=o(5),i=o.n(s),u=o(8),c=o.n(u);function l(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var p=o(6),d=o.n(p),f=o(9),h=o.n(f),y=o(10),v=o.n(y),b=function(t){function e(){return t.apply(this,arguments)||this}return l(e,t),e.prototype.view=function(){var t=this.props.note,e=t.addedByUser(),o=v()(t.createdAt());return m("div",{className:"DiscussionListItem"},m("div",{className:"DiscussionListItem-main"},m("h3",{className:"DiscussionListItem-title"},e.username),o,m("ul",{className:"DiscussionListItem-info"},m("li",{className:"item-excerpt"},m("span",null,t.note())))))},e}(d.a),N=o(3),g=o.n(N),x=o(11),M=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.init=function(){t.prototype.init.call(this),this.success=!1,this.noteContent=m.prop(""),this.user=this.props.user},o.className=function(){return"ModeratorNotesCreateModal Modal--large"},o.title=function(){return app.translator.trans("fof-moderator-notes.forum.moderatorNotes.create-heading")},o.content=function(){return this.success?m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",null,app.translator.trans("fof-moderator-notes.forum.moderatorNotes.confirmation_message")),m("div",{className:"Form-group"},m(g.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("fof-moderator-notes.forum.moderatorNotes.dismiss_button"))))):m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("div",{className:"Form-group"},m("div",null,m("label",null,app.translator.trans("fof-moderator-notes.forum.moderatorNotes.input_heading",{username:this.user.username()}),m("textarea",{className:"FormControl",value:this.noteContent(),oninput:m.withAttr("value",this.noteContent),rows:"6"})))),m("div",{className:"Form-group"},m(g.a,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},app.translator.trans("fof-moderator-notes.forum.moderatorNotes.submit_button")))))},o.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0,app.store.createRecord("notes").save({userId:this.user.id(),note:this.noteContent()},{errorHandler:this.onerror.bind(this)}).then((function(){return e.success=!0})).catch((function(){})).then(this.loaded.bind(this))},o.onerror=function(e){422===e.status&&(e.alert.props.children=app.translator.trans("fof-moderator-notes.forum.moderatorNotes.no_content_given")),t.prototype.onerror.call(this,e)},e}(o.n(x).a),w=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.init=function(){t.prototype.init.call(this),this.loading=!0,this.notes=[],this.refresh()},o.view=function(){var t;this.loading&&(t=h.a.component());var e=this.props.params.user;return m("div",{className:"DiscussionList"},m("h1",{className:"DiscussionList-notes"},n.a.translator.trans("fof-moderator-notes.forum.user.notes")),e.canCreateModeratorNotes()?m("div",null,m(g.a,{className:"Button Button--primary Button--block",onclick:this.handleOnClickCreate.bind(this)},n.a.translator.trans("fof-moderator-notes.forum.moderatorNotes.add_button"))):m("div",null),m("p",null),m("ul",{className:"DiscussionList-discussions"},this.notes.map((function(t){return m("li",{key:t.id(),"data-id":t.id()},b.component({note:t}))})),!this.loading&&0===this.notes.length&&m("label",null,n.a.translator.trans("fof-moderator-notes.forum.moderatorNotes.noNotes"))),m("div",{className:"DiscussionList-loadMore"},t))},o.parseResults=function(t){return[].push.apply(this.notes,t),this.loading=!1,m.lazyRedraw(),t},o.refresh=function(){var t=this;return n.a.store.find("notes",this.props.params.user.id()).then((function(e){t.notes=[],t.parseResults(e)}),(function(){t.loading=!1,m.redraw()}))},o.handleOnClickCreate=function(t){t.preventDefault(),n.a.modal.show(new M(this.props.params))},e}(d.a),B=function(t){function e(){return t.apply(this,arguments)||this}l(e,t);var o=e.prototype;return o.init=function(){t.prototype.init.call(this),this.loadUser(m.route.param("username"))},o.content=function(){return m("div",{className:"DiscussionsUserPage"},w.component({params:{user:this.user,sort:"newest"}}))},e}(i.a),_=o(0),C=o.n(_),O=o(4),U=o.n(O),D=function(){U.a.prototype.canViewModeratorNotes=C.a.attribute("canViewModeratorNotes"),app.routes["user.notes"]={path:"/u/:username/notes",component:B.component()},Object(a.extend)(i.a.prototype,"navItems",(function(t){this.user.canViewModeratorNotes()&&t.add("notes",c.a.component({href:app.route("user.notes",{username:this.user.username()}),children:app.translator.trans("fof-moderator-notes.forum.user.notes"),icon:"fas fa-sticky-note"}),10)}))};function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var L=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return k(j(e=t.call.apply(t,[this].concat(r))||this),"id",C.a.attribute("id")),k(j(e),"note",C.a.attribute("note")),k(j(e),"createdAt",C.a.attribute("createdAt")),k(j(e),"addedByUser",C.a.attribute("addedByUser")),k(j(e),"displayName",C.a.attribute("addedByUser.username")),k(j(e),"avatarUrl",C.a.attribute("addedByUser.avatarUrl")),k(j(e),"color",C.a.attribute("addedByUser.color")),e}return l(e,t),e}(C.a),F=o(12);n.a.initializers.add("fof/moderator-notes",(function(t){t.store.models.notes=L,U.a.prototype.canViewModeratorNotes=C.a.attribute("canViewModeratorNotes"),U.a.prototype.canCreateModeratorNotes=C.a.attribute("canCreateModeratorNotes"),D()}));var P=[new F.Extend.Model("moderatorNotes",L)];o.d(e,"extend",(function(){return P}))}]);
//# sourceMappingURL=forum.js.map