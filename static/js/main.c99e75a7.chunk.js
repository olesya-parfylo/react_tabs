(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var s=a(8),n=a.n(s),o=a(2),c=a(3),i=a(5),r=a(4),l=a(1),b=a.n(l),d=a(6),h=a.n(d),p=(a(13),a(0)),u=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedTabId:e.props.selectedTabId},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e){e.selectedTabId!==this.props.selectedTabId&&this.setState({selectedTabId:this.props.selectedTabId})}},{key:"render",value:function(){var e=this.props,t=e.usedTabs,a=e.onTabSelected,s=this.state.selectedTabId;return Object(p.jsx)("ul",{className:"tabs",children:t.map((function(e){return Object(p.jsxs)("li",{className:"tabs__tab",children:[Object(p.jsx)("button",{type:"button",className:h()("tabs__button",{"tabs__button--selectedTab":e.id===s}),onClick:function(){s!==e.id&&a(e)},children:Object(p.jsx)("h3",{className:h()({"tabs__tab--selectedTab":e.id===s}),children:e.title})}),Object(p.jsx)("p",{className:h()("tabs__paragraph",{"tabs__paragraph--selectedTab":e.id===s}),children:e.content})]},e.id)}))})}}]),a}(b.a.Component),m=(a(15),[{id:"tab-1",title:"Home",content:'A home page (or homepage) is the main web page of a website. The term also refers to one or more pages always shown in a web browser when the application starts up. In this case, it is also known as the start page or startup page.\n    The word "home" comes from the use of the Home key on a keyboard to return to the start page at any time.'},{id:"tab-2",title:"Profile",content:"Interface and product catalog language will be switched automatically to the language user has selected in user profile page. You can find the date when you became a member in your profile page."},{id:"tab-3",title:"Contact",content:"Far too many website designers put contact pages near the bottom of their priority list in terms of copywriting and design. It\u2019s no wonder that many contact pages look like they were built in the 1990s, while the rest of the website is beautiful and updated.\n\n    That, my friends, is a huge mistake. Your Contact Us page is one of the most valuable pages on your website. And for most companies, it's typically one of the most-visited site pages."}]),f=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(o.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedTab:m[0],usedTabs:m},e.onTabSelected=function(t){e.setState({selectedTab:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.selectedTab,a=e.usedTabs;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:this.state.selectedTab.title}),Object(p.jsx)("div",{children:Object(p.jsx)(u,{usedTabs:a,selectedTabId:t.id,onTabSelected:this.onTabSelected})})]})}}]),a}(b.a.Component);n.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c99e75a7.chunk.js.map