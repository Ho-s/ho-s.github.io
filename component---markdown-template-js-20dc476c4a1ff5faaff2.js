(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[813],{7413:function(e,t,n){"use strict";n.r(t);var o=n(7294),a=n(967);t.default=function(e){var t=e.data.markdownRemark;return o.createElement(a.Z,null,o.createElement("div",{className:"markdownTemplate",style:{position:"relative",marginBottom:"200px",lineHeight:"1.7"}},o.createElement("h4",{style:{paddingBottom:"5px",borderBottom:"1px solid gray"}},o.createElement("span",{style:{color:"gray"}},t.frontmatter.title),o.createElement("span",{style:{float:"right",color:"red"}},t.frontmatter.date)),o.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.createElement("div",{className:"contents",dangerouslySetInnerHTML:{__html:t.tableOfContents}})))}},967:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(7294),a=n(5444),r=function(){var e=(0,o.useState)(!0),t=e[0],n=e[1],r=(0,o.useCallback)((function(){var e=window.pageYOffset,t=window.innerHeight;n(!(e>=t))}),[]);(0,o.useEffect)((function(){if("/"===window.location.pathname)return window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[r]),(0,o.useEffect)((function(){"/"===window.location.pathname?n(!0):n(!1)}),[]);var l=t?{paddingTop:"2.5vh",paddingBottom:"2.5vh",position:"absolute",top:"90vh",left:"0",transition:"top .2s",color:"white",minWidth:"400px"}:{transition:"color .2s",backgroundColor:"rgba(255, 255, 255, 0.5)",borderBottom:"#e9e9e9 1px solid",zIndex:"3",backdropFilter:" blur(5px)",paddingTop:"2.5vh",paddingBottom:"2.5vh",position:"fixed",top:0,left:0,minWidth:"400px"},i=t?{top:"0",filter:"opacity(.6) drop-shadow(0 0 0 white)",position:"absolute",width:"26px",height:"26px",color:"white",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat"}:{position:"absolute",width:"26px",height:"26px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/103412811-4ba46f80-4bba-11eb-94b9-454fc8d16d8d.png)",backgroundSize:"contain",top:"0",backgroundRepeat:"no-repeat"},c=t?{lineHeight:"1",position:"absolute",width:"90px",left:"30px",color:"white",fontSize:"27px"}:{lineHeight:"1",fontSize:"27px",position:"absolute",color:"black",width:"90px",left:"30px"},s=t?{float:"left",marginRight:"1rem",textDecoration:"none",color:"white",transition:"color .1s linear"}:{float:"left",marginRight:"1rem",textDecoration:"none",color:"black",transition:"color .1s linear"};return o.createElement("header",{style:l},o.createElement("div",null,o.createElement(a.rU,{to:"/",style:{position:"relative",textDecoration:"none"}},o.createElement("div",{style:i}),o.createElement("div",{className:"header-title",style:c},o.createElement("span",null,"Ho'space")))),o.createElement("div",{style:{width:"261px",margin:"0",padding:"0",listStyle:"none",float:"right"}},o.createElement("li",null,o.createElement(a.rU,{className:"header-link",style:s,to:"/about/"},"About")),o.createElement("li",null,o.createElement(a.rU,{className:"header-link",style:s,to:"/projects/"},"Projects")),o.createElement("li",null,o.createElement(a.rU,{className:"header-link",style:s,to:"/blog/"},"Blog")),o.createElement("li",null,o.createElement(a.rU,{className:"header-link",style:s,to:"/contact/"},"Contact"))))},l=function(){return o.createElement("footer",{style:{fontSize:"12px",position:"absolute",bottom:"0",backgroundColor:"#e9e9e9",height:"50px"}},o.createElement("div",{style:{fontWeight:"600",float:"left"}},"Follow me in "),o.createElement("ul",{style:{float:"left",margin:0,padding:0,display:"flex",flexFlow:"row wrap"}},o.createElement("li",{style:{listStyle:"none"}},o.createElement("a",{href:"https://github.com/Ho-s"},o.createElement("div",{style:{margin:"0 2px 0px 20px",float:"left",width:"15px",height:"15px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/103414512-a1304a80-4bc1-11eb-93ee-b4bd31af9e57.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}),o.createElement("div",{style:{fontWeight:"600",color:"black",float:"left"}},"Github"))),o.createElement("li",{style:{listStyle:"none"}},o.createElement("a",{href:"mailto:kjcoco13@gmail.com"},o.createElement("div",{style:{margin:"0 2px 0px 20px",float:"left",width:"15px",height:"15px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/103415271-bd81b680-4bc4-11eb-8ddc-08f84d52f406.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}),o.createElement("div",{style:{fontWeight:"600",color:"black",float:"left"}},"Gmail"))),o.createElement("li",{style:{listStyle:"none"}},o.createElement("a",{href:"https://www.facebook.com/byungho.joo.5/"},o.createElement("div",{style:{margin:"0 2px 0px 20px",float:"left",width:"15px",height:"15px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/104439445-76d48900-55d4-11eb-823e-5d1d60b92497.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}),o.createElement("div",{style:{fontWeight:"600",color:"black",float:"left"}},"Facebook"))),o.createElement("li",{style:{listStyle:"none"}},o.createElement("a",{href:"http://qr.kakao.com/talk/Qs4iWKmmtszYlS_qLsk9msnspqs-"},o.createElement("div",{style:{margin:"0 2px 0px 20px",float:"left",width:"15px",height:"15px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/112701624-7e69b580-8ed4-11eb-8512-eef46767ed98.png)",backgroundRepeat:"no-repeat",backgroundSize:"contain"}}),o.createElement("div",{style:{fontWeight:"600",color:"black",float:"left"}},"Kakao")))),o.createElement("div",{style:{marginTop:"30px"}},"© 2021 Ho' Space. Powered by graphql & Gatsby."))},i=function(e){var t=e.children,n=(0,o.useState)("-40px"),a=n[0],i=n[1],c=(0,o.useState)(!0),s=c[0],d=c[1];(0,o.useEffect)((function(){var e=function(){d(!1)};return window.addEventListener("load",e()),function(){window.removeEventListener("load",e())}}),[s]);var p=(0,o.useCallback)((function(){var e=window.pageYOffset,t=window.innerHeight;i(e>=t/2?"30px":"-40px")}),[]);(0,o.useEffect)((function(){return window.addEventListener("scroll",p),function(){window.removeEventListener("scroll",p)}}),[p]);return o.createElement(o.Fragment,null,s&&o.createElement("div",{style:{position:"fixed",width:"100vw",height:"100vh",backgroundColor:"white",zIndex:"4",top:0}},o.createElement("div",{style:{margin:"calc(50vh - 200px) auto",width:"400px",height:"400px",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/104911800-c3520700-59ce-11eb-8448-35ab98a92bc6.gif)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})),o.createElement(r,null),o.createElement("div",{style:{margin:"0 auto",minWidth:"330px",maxWidth:"990px",padding:"0 1.0875rem 1.45rem",marginTop:"10vh"}},o.createElement("main",{style:{}},t)),o.createElement("button",{onClick:function(){window.scrollTo(0,0)},className:"toTheTop",style:{bottom:a,border:"none",zIndex:"3",backgroundImage:"url(https://user-images.githubusercontent.com/71132893/104469041-7ef3ef00-55fb-11eb-873f-3d13378914e9.png)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"20px",cursor:"pointer",textAlign:"center",position:"fixed",transition:"all linear .2s",right:"30px",width:"38px",height:"38px",backgroundColor:"#e9e9e9",borderRadius:"38px",fontSize:0,outline:"none"}},"-"),o.createElement(l,null))}}}]);
//# sourceMappingURL=component---markdown-template-js-20dc476c4a1ff5faaff2.js.map