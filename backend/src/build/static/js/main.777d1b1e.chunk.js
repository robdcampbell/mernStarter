(this["webpackJsonpmern-blog"]=this["webpackJsonpmern-blog"]||[]).push([[0],{27:function(e,t,i){},28:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);i(22);var n=i(1),a=i.n(n),s=i(19),u=i.n(s),c=(i(27),i(28),i(0)),r=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Hello, welcome to my blog!"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque numquam quae quis obcaecati, nihil distinctio asperiores iure quibusdam. Harum hic voluptatem expedita itaque cupiditate?"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque numquam quae quis obcaecati, nihil distinctio asperiores iure quibusdam. Harum hic voluptatem expedita itaque cupiditate?"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque numquam quae quis obcaecati, nihil distinctio asperiores iure quibusdam. Harum hic voluptatem expedita itaque cupiditate?"})]})},l=i(9),o=i(2),m=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"About me"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque numquam quae quis obcaecati, nihil distinctio asperiores iure quibusdam. Harum hic voluptatem expedita itaque cupiditate?"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque numquam quae quis obcaecati, nihil distinctio asperiores iure quibusdam. Harum hic voluptatem expedita itaque cupiditate?"}),Object(c.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus itaque numquam quae quis obcaecati, nihil distinctio asperiores iure quibusdam. Harum hic voluptatem expedita itaque cupiditate?"})]})},d=i(7),p=i.n(d),b=i(11),j=i(13),h=function(e){var t=e.articles;return Object(c.jsx)(c.Fragment,{children:t.map((function(e,t){return Object(c.jsxs)(l.b,{className:"article-list-item",to:"/article/".concat(e.name),children:[Object(c.jsx)("h3",{children:e.title}),Object(c.jsx)("p",{children:"".concat(e.content[0].substring(0,150),"...")})]},t)}))})},v=function(e){var t=e.comments;return Object(c.jsx)(c.Fragment,{children:0===t.length?Object(c.jsx)("p",{children:"(No Comments Yet)"}):t.map((function(e,t){return Object(c.jsxs)("div",{className:"comment",children:[Object(c.jsx)("h4",{children:e.username}),Object(c.jsx)("p",{children:e.text})]},t)}))})},x=function(e){var t=e.articleName,i=e.upvotes,n=e.setArticleInfo,a=function(){var e=Object(b.a)(p.a.mark((function e(){var i,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return i=e.sent,e.next=5,i.json();case 5:a=e.sent,n(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"upvotes-section",children:[Object(c.jsx)("button",{onClick:function(e){return a()},children:"Add Upvote"}),Object(c.jsxs)("p",{children:["This post has been upvoted ",i," times"]})]})},f=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"404: Page not found!"})})},O=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],g=i(21),q=function(e){var t=e.articleName,i=e.setArticleInfo,a=Object(n.useState)(""),s=Object(j.a)(a,2),u=s[0],r=s[1],l=Object(n.useState)(""),o=Object(j.a)(l,2),m=o[0],d=o[1],h=function(){var e=Object(b.a)(p.a.mark((function e(){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:m,text:u}),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,i(a),r(""),d("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"add-comment-form",children:[Object(c.jsx)("h3",{children:"Add a comment:"}),Object(c.jsx)("label",{children:"Name:"}),Object(c.jsx)("input",{type:"text",value:m,onChange:function(e){return d(e.target.value)},required:!0}),Object(c.jsx)("label",{children:"Comment: "}),Object(c.jsx)("textarea",{cols:"50",rows:"4",value:u,onChange:function(e){return r(e.target.value)},required:!0}),Object(c.jsx)("button",{onClick:function(e){return h()},children:"Add Comment"})]})},N=function(e){var t=e.match,i=Object(n.useState)({upvotes:0,comments:[]}),a=Object(j.a)(i,2),s=a[0],u=a[1],r=t.params.name,l=O.find((function(e){return e.name===r}));if(Object(n.useEffect)((function(){(function(){var e=Object(b.a)(p.a.mark((function e(){var t,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(r));case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,u(i);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),!l)return Object(c.jsx)(f,{});var o=O.filter((function(e){return e.name!==r}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:l.name}),Object(c.jsx)("h4",{children:l.title}),Object(c.jsxs)("p",{children:[Object(c.jsx)(g.a,{})," ",s.upvotes]}),l.content.map((function(e,t){return Object(c.jsx)("p",{children:e},t)})),Object(c.jsx)(x,{articleName:l.name,upvotes:s.upvotes,setArticleInfo:u}),Object(c.jsx)("h3",{children:"Comments:"}),Object(c.jsx)(v,{comments:s.comments}),Object(c.jsx)(q,{articleName:l.name,setArticleInfo:u}),Object(c.jsx)("h3",{children:"Other Articles:"}),Object(c.jsx)(h,{articles:o})]})},y=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Articles."}),Object(c.jsx)(h,{articles:O})]})},A=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/",children:"home"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/about",children:"about"})}),Object(c.jsx)("li",{children:Object(c.jsx)(l.b,{to:"/articles-list",children:"articles"})})]})]})})})};var w=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(A,{}),Object(c.jsx)("div",{className:"page-body",children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",component:r}),Object(c.jsx)(o.a,{path:"/about",component:m}),Object(c.jsx)(o.a,{path:"/articles-list",component:y}),Object(c.jsx)(o.a,{path:"/article/:name",component:N}),Object(c.jsx)(o.a,{path:"*",component:f})]})})]})})};u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.777d1b1e.chunk.js.map