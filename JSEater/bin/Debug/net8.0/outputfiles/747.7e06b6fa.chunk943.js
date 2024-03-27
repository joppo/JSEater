"use strict";(self.webpackChunkresearcher_portal=self.webpackChunkresearcher_portal||[]).push([[747],{45671:function(e,t,n){n.d(t,{T:function(){return r}});var i=n(4231),r=function(){return(0,i.Rrz)("rp--lastReportSent",void 0)}},53747:function(e,t,n){n.r(t),n.d(t,{ResearcherPortal:function(){return K}});var i,r,a,o=n(29439),l=n(72791),s=n(56110),d=n(1413),c=[{itemKey:"all",headerText:"All"},{itemKey:"pending",headerText:"Pending"},{itemKey:"reviewing",headerText:"Reviewing"},{itemKey:"developing",headerText:"Developing"},{itemKey:"complete",headerText:"Complete"},{itemKey:"additionalInfoNeeded",headerText:"Additional Info Needed"}],u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return"".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"status"," in (").concat(e.map((function(e){return"'".concat(e,"'")})).join(", "),")")},m={all:{},pending:{filter:{status:u(["New","NewDuplicate","Unknown"])}},reviewing:{filter:{status:u(["ReviewRepro","ReviewReproDuplicate"])}},developing:{filter:{status:u(["Develop","DevelopDuplicate","PreRelease","PreReleaseDuplicate"])}},complete:{filter:{status:u(["Closed","Complete","CompleteDuplicate","CompleteNA"])}},additionalInfoNeeded:{filter:{status:!1,statusReason:u(["AdditionalInformationNeeded"],"statusReason")}}},h=n(763),g=n(42053),p=n(59332),f=n(27631),y=n(77291),v=n(4026),b=n(88456),x=n(45779),R=n(65416),w=n(25698),k=n(90511),N=n(42089),S=n(4231),P=n(80184),C=function(e){var t=e.showOnlyMe,n=e.setShowOnlyMe,i=e.onClickResetFilterBar;return(0,S.gJM)().data?(0,P.jsx)(S.f89,{items:[{type:"button",ariaLabel:"Show only my cases",text:"Only my submissions",title:"Show only your own submissions",checked:t,iconProps:{iconName:"AccountManagement"},onClick:function(){return n((function(e){return!e}))}},{type:"separator"},{type:"button",ariaLabel:"Reset all filters to their default value",text:"Reset all filters",title:"Reset all filters to their default value",iconProps:{iconName:"ClearFilter"},onClick:function(){return i()},isIconOnly:!0}]}):null},j=n(88515),W=n(61460),L=n(18511),A=n(29093);!function(e){e.shade30="#004578",e.shade20="#005a9e",e.shade10="#106ebe",e.primary="#0078d4",e.tint10="#2b88d8",e.tint20="#c7e0f4",e.tint30="#deecf9",e.tint40="#eff6fc"}(i||(i={})),function(e){e.black="#000000",e.gray220="#11100f",e.gray210="#161514",e.gray200="#1b1a19",e.gray190="#201f1e",e.gray180="#252423",e.gray170="#292827",e.gray160="#323130",e.gray150="#3b3a39",e.gray140="#484644",e.gray130="#605e5c",e.gray120="#797775",e.gray110="#8a8886",e.gray100="#979593",e.gray90="#a19f9d",e.gray80="#b3b0ad",e.gray70="#bebbb8",e.gray60="#c8c6c4",e.gray50="#d2d0ce",e.gray40="#e1dfdd",e.gray30="#edebe9",e.gray20="#f3f2f1",e.gray10="#faf9f8",e.white="#ffffff"}(r||(r={})),function(e){e.pinkRed10="#750b1c",e.red20="#a4262c",e.red10="#d13438",e.redOrange20="#603d30",e.redOrange10="#da3b01",e.orange30="#8e562e",e.orange20="#ca5010",e.orange10="#ffaa44",e.yellow10="#fce100",e.orangeYellow20="#986f0b",e.orangeYellow10="#c19c00",e.yellowGreen10="#8cbd18",e.green20="#0b6a0b",e.green10="#498205",e.greenCyan10="#00ad56",e.cyan40="#005e50",e.cyan30="#005b70",e.cyan20="#038387",e.cyan10="#00b7c3",e.cyanBlue20="#004e8c",e.cyanBlue10="#0078d4",e.blue10="#4f6bed",e.blueMagenta40="#373277",e.blueMagenta30="#5c2e91",e.blueMagenta20="#8764b8",e.blueMagenta10="#8378de",e.magenta20="#881798",e.magenta10="#c239b3",e.magentaPink20="#9b0062",e.magentaPink10="#e3008c",e.gray40="#393939",e.gray30="#7a7574",e.gray20="#69797e",e.gray10="#a0aeb2"}(a||(a={}));var F=n(40434),O=function(e){var t=e.children,n=e.className,i=void 0===n?"":n,r=e.style,a=void 0===r?{}:r;return(0,P.jsx)("li",{className:i,style:a,children:t})},M=function(e){var t=e.children,n=e.separator,i=void 0===n?"-":n,r=(0,F.BV)().theme;if(!t||!t.length||t.length<1)return(0,P.jsx)(P.Fragment,{children:"-"});var a=t.split(i).map((function(e){return e.trim()})),o=a.shift();return(0,P.jsx)("div",{children:(0,P.jsxs)("ul",{style:{margin:"0",listStyleType:"none",paddingInlineStart:"unset"},children:[(0,P.jsx)(O,{children:o}),a&&a.length>0&&a.map((function(e){var t;return(0,P.jsx)(O,{style:{color:null===r||void 0===r||null===(t=r.palette)||void 0===t?void 0:t.neutralPrimaryAlt,fontSize:"0.9em",paddingTop:"0.15em"},children:e},e)}))]})})},D=n(71580),I=function(e){var t=e.additionalODataQuery,n=void 0===t?{}:t,i=e.showFilter,r=(0,j.k6)().push,s=(0,F.BV)().theme,c=function(){var e=(0,F.BV)().theme,t={backgroundColor:"".concat(e.semanticColors.warningBackground," !important")},n={backgroundColor:"".concat(e.palette.themeLighterAlt," !important")};return{flaggedRowStyles:{styles:{root:{selector:{"&:not(:hover)":t}}}},selectedRowStyles:{styles:{root:(0,d.Z)((0,d.Z)({},n),{},{"&:not(:hover)":n})}}}}(),u=c.flaggedRowStyles,m=function(e){e&&r("/submission/".concat(e))},O=function(){var e,t=(0,S.gJM)().data,n=null===(e=(0,S.pWv)().data)||void 0===e?void 0:e.id,i=(0,S.Rrz)("rp-vulnReport-orderBy",{ascending:!1,key:"modifiedOn"}),r=(0,o.Z)(i,3),a=r[0],s=r[1],d=r[2],c=(0,S.Rrz)("rp-vulnReport-showOnlyMe",!0),u=(0,o.Z)(c,3),m=u[0],h=u[1],g=u[2],p={orderBy:a,filter:t?{submittedById:m&&n&&{data:"'".concat(n,"'"),operator:"eq"}}:void 0};return(0,l.useEffect)((function(){!1===t&&g()}),[t,g]),{orderBy:a,setOrderBy:s,showOnlyMe:m,setShowOnlyMe:h,onClickResetFilterBar:function(){g(),d()},oDataQueryFromFilterBar:p}}(),I=O.onClickResetFilterBar,T=O.orderBy,B=O.setOrderBy,z=O.setShowOnlyMe,_=O.showOnlyMe,E=O.oDataQueryFromFilterBar,K=(0,l.useState)(),Z=(0,o.Z)(K,2),G=Z[0],H=Z[1],V=function(e,t){var n,i=(0,F.BV)().theme,r=(((0,D.MG)()||{}).emailCaseSupport,[{fieldName:"summary",isResizable:!0,key:"summary",name:"Title/Short description",ariaLabel:"Title or short description",maxWidth:300,minWidth:175,targetWidthProportion:2.5,onRender:function(e){var n=e.hasUnread,r=e.isFlagged,a=e.reportNumber,o=e.summary;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(N.r,{href:"/submissions/".concat(a),onClick:function(e){e.preventDefault(),t(a)},styles:{root:(0,d.Z)({},(r||n)&&{color:i.palette.black,fontWeight:"".concat(b.lq.semibold)})},title:o,children:o}),r&&(0,P.jsx)(k.xu,{"aria-label":"This report contains a message that is flagged",iconName:"Flag",style:{color:i.semanticColors.errorText,fontSize:"16px",margin:"0 0 0 16px",position:"absolute",right:"0"}}),n&&(0,P.jsx)("span",{"aria-hidden":"true",className:(0,b.y0)(n&&{backgroundColor:i.palette.accent,bottom:0,left:0,position:"absolute",top:0,width:"4px"})})]})}},{fieldName:"unreadMessageCount",key:"unread",isIconOnly:!0,iconName:"Comment",minWidth:25,maxWidth:25,name:"Unread message count",columnActionsMode:W._1.disabled,onRender:function(e){var n=e.unreadMessageCount,i=e.reportNumber;return!n||n<1?null:(0,P.jsx)(N.r,{onClick:function(){return t(i)},children:(0,P.jsx)(S.X8f,{count:n})})}},{fieldName:"status",isResizable:!0,key:"status",name:"Status",maxWidth:130,minWidth:100,onRender:function(e){var t=e.status;return(0,P.jsx)(S.MDV,{children:t})}},{iconName:"Info",name:"Status reason",fieldName:"statusReason",key:"statusReason",maxWidth:25,minWidth:25,isIconOnly:!0,columnActionsMode:W._1.disabled,onRender:function(e){var t=e.statusReason;return t&&t===S.Fl5.AdditionalInformationNeeded.displayName&&(0,P.jsx)(L.J,{iconName:"InfoSolid",styles:{root:{color:a.red10}},title:S.Fl5.AdditionalInformationNeeded.displayName})}},{fieldName:"bounty",isResizable:!0,key:"bounty",name:"Bounty",maxWidth:200,minWidth:66,columnActionsMode:W._1.disabled,onRender:function(e){var t=e.bounty;return(0,P.jsx)(M,{children:null===t||void 0===t?void 0:t.status})}},{data:"date",fieldName:"createdOn",isResizable:!0,key:"createdOn",maxWidth:200,minWidth:130,targetWidthProportion:1.2,name:"Created On",sortAscendingAriaLabel:". Sorted oldest to newest.",sortDescendingAriaLabel:". Sorted newest to oldest.",onRender:S.On7},{fieldName:"lastActivityOn",isResizable:!0,key:"lastActivityOn",maxWidth:200,minWidth:130,targetWidthProportion:1.2,name:"Last modified",ariaLabel:"Last modified",sortAscendingAriaLabel:". Sorted oldest to newest.",sortDescendingAriaLabel:". Sorted newest to oldest.",onRender:S.On7},{fieldName:"reportNumber",isResizable:!0,key:"reportNumber",maxWidth:250,minWidth:100,name:"Report ID"},{fieldName:"ticketNumber",isResizable:!0,key:"ticketNumber",minWidth:110,maxWidth:200,name:"Case Number"},{fieldName:"securityImpact",isResizable:!0,key:"securityImpact",maxWidth:200,minWidth:136,name:"Security Impact",onRender:function(e){var t,n=e.securityImpact;return n?(null===S.ewt||void 0===S.ewt||null===(t=S.ewt[n])||void 0===t?void 0:t.displayName)||(0,h.startCase)(n):"\u2014"}},{fieldName:"target",isResizable:!0,key:"target",maxWidth:350,minWidth:140,name:"Reported Products",ariaLabel:"Reported Products",targetWidthProportion:3,onRender:function(e){var t,n=e.target;return n?(null===S.fzV||void 0===S.fzV||null===(t=S.fzV[n])||void 0===t?void 0:t.displayName)||(0,h.startCase)(n):"\u2014"}},{key:"chevron",fieldName:"reportNumber",minWidth:25,isIconOnly:!0,name:"Links to individual reports",ariaLabel:"Links to individual reports",iconName:"ChevronRight",onRender:function(e){var n=e.reportNumber;return(0,P.jsx)(A.h,{disabled:!n,styles:{root:{padding:0,marginTop:-12}},iconProps:{iconName:"ChevronRight"},onClick:function(){return t(n)},title:"Open ".concat(n,". You can also double click the row to open it.")})}}]);return null===(n=(0,h.compact)(r))||void 0===n?void 0:n.map((function(t){return null!==e&&void 0!==e&&e.key&&t.fieldName===(null===e||void 0===e?void 0:e.key)?(t.isSorted=!0,t.isSortedDescending=!(null!==e&&void 0!==e&&e.ascending),t.sortAscendingAriaLabel=t.sortAscendingAriaLabel||". Sorted ascending.",t.sortDescendingAriaLabel=t.sortDescendingAriaLabel||". Sorted descending."):(t.isSorted=!1,t.isSortedDescending=void 0),t}))}(T,m),J=(0,g.T)(E,n),q=(0,S.jAk)(J,15),Q=q.data,Y=q.error,U=q.isLoading,X=q.next,$=q.previous,ee=q.hasNext,te=q.hasPrevious,ne=q.page,ie=q.isLoadingNext,re=q.goToPage,ae=q.hasPageAfterNext,oe=(0,h.map)(Q,S.DdC);return(0,P.jsx)(p.K,{verticalFill:!0,horizontalAlign:"stretch",children:(0,P.jsxs)("div",{style:{flexBasis:"100%",flexShrink:1,height:"100%",position:"relative"},children:[Y&&(0,P.jsxs)(f.c,{messageBarType:y.f.error,children:[(0,P.jsx)(v.x,{as:"h2",block:!0,styles:{root:{fontWeight:b.lq.semibold,margin:"0 0 .5em"}},variant:"medium",children:Y.name}),Y.message]}),i&&(0,P.jsx)(C,{onClickResetFilterBar:I,setShowOnlyMe:z,showOnlyMe:_}),G&&(0,P.jsx)(x.O,{message:G}),(0,P.jsx)(R.J,{selectionMode:w.oW.none,columns:V,items:oe||[],enableShimmer:U,shimmerLines:15,onRenderRow:function(e,t){if(!e||!t)return null;var n=e.item.isFlagged;return t((0,g.T)(e,n&&u))},onItemInvoked:function(e){var t=e.reportNumber;m(t)},onColumnHeaderClick:function(e,t){if(t){var n=t.isSorted?" sorted ascending":" sorted descending";H(t.name+n),B((function(e){if(e){if(null===t||void 0===t||!t.fieldName)return e;var n=!!(t.fieldName===e.key)&&!e.ascending;return{key:t.fieldName,ascending:n}}}))}},onRenderDetailsFooter:function(){return(0,P.jsx)(S.H1k,{goToPage:re,hasNext:ee,hasPageAfterNext:ae,hasPrevious:te,isLoading:U,isLoadingNext:ie,next:X,page:ne,previous:$})},onRenderItemColumn:function(e,t,n){var i=null===n||void 0===n?void 0:n.fieldName,r=e.isFlagged;return i?(0,P.jsxs)(P.Fragment,{children:[e[i],"summary"===i&&r&&(0,P.jsx)(k.xu,{"aria-label":"This report contains a message that is flagged",iconName:"Flag",style:{color:s.semanticColors.errorText,fontSize:"16px",margin:"0 0 0 16px",verticalAlign:"inherit"}})]}):null}}),!U&&(!Q||Q.length<1)&&(0,P.jsx)(S.ubH,{description:(0,P.jsxs)(P.Fragment,{children:["Please read this article on"," ",(0,P.jsx)(N.r,{href:"https://msrc-blog.microsoft.com/2020/09/21/what-to-expect-when-reporting-vulnerabilities-to-microsoft/",children:"how the review process works"}),"."]}),heading:"No reports in this status"}),Y&&(0,P.jsx)(S.ubH,{description:"Please check your connection and try to reload the page.\n".concat((null===Y||void 0===Y?void 0:Y.message)||""),heading:"Something went wrong",iconType:"error"})]})})},T=n(35278),B=n(46933),z=n(54794),_=function(){var e=(0,l.useState)("all"),t=(0,o.Z)(e,2),n=t[0],i=t[1],r=(0,S.Rrz)("rp-vulnReport-showFilter",!0),a=(0,o.Z)(r,2),s=a[0],u=a[1],h=(0,S.gJM)().data,g=function(e){return"reports-pivot-".concat(e)},f=m[n];return(0,P.jsxs)(p.K,{verticalFill:!0,horizontalAlign:"stretch",tokens:{childrenGap:"1px"},children:[(0,P.jsxs)(p.K,{horizontal:!0,horizontalAlign:"stretch",wrap:!0,children:[(0,P.jsx)(T.o,{"aria-label":"My vulnerability reports",getTabId:g,headersOnly:!0,onLinkClick:function(e){var t,n;return(null===e||void 0===e||null===(t=e.props)||void 0===t?void 0:t.itemKey)&&i(null===e||void 0===e||null===(n=e.props)||void 0===n?void 0:n.itemKey)},overflowBehavior:"menu",selectedKey:n,children:c.map((function(e){return(0,l.createElement)(B.M,(0,d.Z)((0,d.Z)({},e),{},{key:e.itemKey}))}))}),h&&(0,P.jsx)("div",{style:{marginLeft:"auto",paddingRight:"3px"},children:(0,P.jsx)(z.K,{iconProps:{iconName:"Filter"},checked:s,onClick:function(){return u((function(e){return!e}))},title:s?"Hide filter bar":"Show filter bar",children:"Filter"})})]}),(0,P.jsx)("div",{style:{flexBasis:"100%",flexShrink:1,height:"100%",position:"relative"},"aria-labelledby":g(n),role:"tabpanel",children:(0,P.jsx)(I,{additionalODataQuery:f,showFilter:s})},n)]})},E=n(45671),K=function(){var e=(0,E.T)(),t=(0,o.Z)(e,1)[0],n=t&&t>Date.now()-30*S.Dfg;return(0,l.useEffect)((function(){document.title="MSRC Researcher Portal"}),[]),(0,P.jsxs)("div",{className:"portal--wrapper",style:{maxWidth:"2000px"},children:[(0,P.jsx)(s.m,{callToAction:{path:"/create-report",text:"Create report"},mainHeading:"My vulnerability reports"}),(0,P.jsx)("div",{children:(0,P.jsx)(_,{})}),n&&(0,P.jsx)(S.Dqf,{source:"My Reports",children:"How satisfied are you with the MSRC Researcher Portal?"})]})}},65416:function(e,t,n){n.d(t,{J:function(){return y}});var i=n(19482),r=n(29388),a=n(72791),o=n(41693),l=n(62263),s=n(25698),d=n(64443),c=n(96123),u=n(63266),m=n(34940),h=n(61460),g=n(29134),p=(0,o.y)(),f=function(e){function t(t){var n=e.call(this,t)||this;return n._onRenderShimmerPlaceholder=function(e,t){var i=n.props.onRenderCustomPlaceholder,r=i?i(t,e,n._renderDefaultShimmerPlaceholder):n._renderDefaultShimmerPlaceholder(t);return a.createElement(c.q,{customElementsGroup:r})},n._renderDefaultShimmerPlaceholder=function(e){var t=e.columns,n=e.compact,i=e.selectionMode,r=e.checkboxVisibility,o=e.cellStyleProps,l=void 0===o?g.Wt:o,d=g.lv.rowHeight,c=g.lv.compactRowHeight,p=n?c:d+1,f=[];return i!==s.oW.none&&r!==h.tY.hidden&&f.push(a.createElement(u.N,{key:"checkboxGap",shimmerElements:[{type:m.s.gap,width:"40px",height:p}]})),t.forEach((function(e,t){var n=[],i=l.cellLeftPadding+l.cellRightPadding+e.calculatedWidth+(e.isPadded?l.cellExtraRightPadding:0);n.push({type:m.s.gap,width:l.cellLeftPadding,height:p}),e.isIconOnly?(n.push({type:m.s.line,width:e.calculatedWidth,height:e.calculatedWidth}),n.push({type:m.s.gap,width:l.cellRightPadding,height:p})):(n.push({type:m.s.line,width:.95*e.calculatedWidth,height:7}),n.push({type:m.s.gap,width:l.cellRightPadding+(e.calculatedWidth-.95*e.calculatedWidth)+(e.isPadded?l.cellExtraRightPadding:0),height:p})),f.push(a.createElement(u.N,{key:t,width:"".concat(i,"px"),shimmerElements:n}))})),f.push(a.createElement(u.N,{key:"endGap",width:"100%",shimmerElements:[{type:m.s.gap,width:"100%",height:p}]})),a.createElement("div",{style:{display:"flex"}},f)},n._shimmerItems=t.shimmerLines?new Array(t.shimmerLines):new Array(10),n}return(0,r.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.detailsListStyles,n=e.enableShimmer,i=e.items,o=e.listProps,s=(e.onRenderCustomPlaceholder,e.removeFadingOverlay),c=(e.shimmerLines,e.styles),u=e.theme,m=e.ariaLabelForGrid,h=e.ariaLabelForShimmer,g=(0,r.__rest)(e,["detailsListStyles","enableShimmer","items","listProps","onRenderCustomPlaceholder","removeFadingOverlay","shimmerLines","styles","theme","ariaLabelForGrid","ariaLabelForShimmer"]),f=o&&o.className;this._classNames=p(c,{theme:u});var y=(0,r.__assign)((0,r.__assign)({},o),{className:n&&!s?(0,l.i)(this._classNames.root,f):f});return a.createElement(d.W,(0,r.__assign)({},g,{styles:t,items:n?this._shimmerItems:i,isPlaceholderData:n,ariaLabelForGrid:n&&h||m,onRenderMissingItem:this._onRenderShimmerPlaceholder,listProps:y}))},t}(a.Component),y=(0,i.z)(f,(function(e){var t=e.theme.palette;return{root:{position:"relative",selectors:{":after":{content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,backgroundImage:"linear-gradient(to bottom, transparent 30%, ".concat(t.whiteTranslucent40," 65%,").concat(t.white," 100%)")}}}}}),void 0,{scope:"ShimmeredDetailsList"})}}]);
//# sourceMappingURL=747.7e06b6fa.chunk.js.map