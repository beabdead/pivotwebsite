;/*FB_PKG_DELIM*/

__d("PolarisProfileTabVirtualFeed_items.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{plural:!0},name:"PolarisProfileTabVirtualFeed_items",selections:[{alias:null,args:null,kind:"ScalarField",name:"pk",storageKey:null},{args:null,kind:"FragmentSpread",name:"PolarisFeedCard_media"}],type:"XDTMediaDict",abstractKey:null};e.exports=a}),null);
__d("PolarisProfileTabVirtualFeed.next.react",["CometErrorBoundary.react","CometRelay","PolarisFeedCard.react","PolarisFeedContext.react","PolarisGenericVirtualFeed.react","PolarisProfileTabVirtualFeed_items.graphql","emptyFunction","polarisLogAction","react","react-compiler-runtime","usePolarisGetFeedContainerWidth","usePolarisGetFeedMediaWidthBasedOnReelHeight"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||d("react"),k={item:{paddingBottom:"xwib8y2",$$css:!0}};function l(){c("polarisLogAction")("feedUnitFailure",{source:"PolarisProfileTabVirtualFeed.next"})}function a(a){var e=d("react-compiler-runtime").c(18),f=a.analyticsContext,g=a.hasNextPage,i=a.initialRenderCount,n=a.isLoadingNext,o=a.items,p=a.onNextPage,q=a.untruncateCaption;a=c("usePolarisGetFeedContainerWidth")();var r=c("usePolarisGetFeedMediaWidthBasedOnReelHeight")(),s=d("CometRelay").useFragment(h!==void 0?h:h=b("PolarisProfileTabVirtualFeed_items.graphql"),o);e[0]!==s?(o=s.map(m),e[0]=s,e[1]=o):o=e[1];o=o;var t;e[2]!==s||e[3]!==q?(t=function(a){a=a.index;return j.jsx(c("CometErrorBoundary.react"),{onError:l,children:j.jsx(c("PolarisFeedCard.react"),{mediaFragmentKey:s[a],position:a,untruncateCaption:q,xstyle:k.item})},a)},e[2]=s,e[3]=q,e[4]=t):t=e[4];t=t;var u;e[5]===Symbol["for"]("react.memo_cache_sentinel")?(u="xdj266r xkrivgy xat24cr x1gryazu x1rva566",e[5]=u):u=e[5];var v;e[6]!==f||e[7]!==g||e[8]!==i||e[9]!==n||e[10]!==p||e[11]!==o||e[12]!==t?(v=j.jsx(c("PolarisGenericVirtualFeed.react"),{allowSampledScrollLogging:!0,analyticsContext:f,enablePrefetch:!1,enablePriorityFetching:!1,hasNextPage:g,initialRenderCount:i,isFetching:n,items:o,onNextPage:p,renderFeedItem:t,visibleCount:o.length}),e[6]=f,e[7]=g,e[8]=i,e[9]=n,e[10]=p,e[11]=o,e[12]=t,e[13]=v):v=e[13];e[14]!==a||e[15]!==r||e[16]!==v?(f=j.jsx("div",{className:u,children:j.jsx(d("PolarisFeedContext.react").PolarisFeedContextProvider,{feedContainerWidth:a,feedMediaWidth:r,setShowEmptyFeed:c("emptyFunction"),showEmptyFeed:!1,children:v})}),e[14]=a,e[15]=r,e[16]=v,e[17]=f):f=e[17];return f}function m(a){a=a.pk;return a}g["default"]=a}),98);
__d("PolarisProfileFeedTabContent.react",["CAAWebClientLoggingEventSource","CometPlaceholder.react","CometRelay","CometRouteURL","JSResourceForInteraction","PolarisConfig","PolarisConnectionsLogger","PolarisPostDeleteContextProvider.react","PolarisProfilePostsActionConstants","PolarisProfilePostsQuery","PolarisProfilePostsTabContentFragment","PolarisProfileTabContentSpinner.react","PolarisProfileTabVirtualFeed.next.react","PolarisSimilarAccountsModalLazy.react","PolarisUA","cr:2789","igMapTypenameToRelayID","lazyLoadComponent","polarisUserSelectors","react","react-compiler-runtime","usePolarisIsSmallScreen","usePolarisRemoveNodeFromConnection","usePolarisSelector","usePolarisShowLoggedOutLoginModal"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;e.useCallback;e.useMemo;var j=e.useState,k=c("lazyLoadComponent")(c("JSResourceForInteraction")("PolarisEmptyProfileOtherUsers.react").__setRef("PolarisProfileFeedTabContent.react"));function a(a){var e=d("react-compiler-runtime").c(39),f=a.contentQuery,g=a.initialRenderCount,h=a.untruncateCaption,m=a.userID;a=a.username;var n=c("usePolarisIsSmallScreen")();f=d("CometRelay").usePreloadedQuery(c("PolarisProfilePostsQuery"),f);f=d("CometRelay").usePaginationFragment(c("PolarisProfilePostsTabContentFragment"),f);var o=f.data,p=f.hasNext,q=f.isLoadingNext,r=f.loadNext;f=c("usePolarisShowLoggedOutLoginModal")();var s;e[0]!==m?(s=function(a){return d("polarisUserSelectors").maybeGetUserById(a,m)},e[0]=m,e[1]=s):s=e[1];s=c("usePolarisSelector")(s);var t=j(null),u=t[0],v=t[1];e[2]===Symbol["for"]("react.memo_cache_sentinel")?(t=function(a){d("PolarisUA").isMobile()||(a.preventDefault(),v("similarAccounts"))},e[2]=t):t=e[2];t=t;var w;e[3]===Symbol["for"]("react.memo_cache_sentinel")?(w=function(){v(null)},e[3]=w):w=e[3];w=w;var x;e[4]!==o.xdt_api__v1__feed__user_timeline_graphql_connection.edges?(x=o.xdt_api__v1__feed__user_timeline_graphql_connection.edges.flatMap(l),e[4]=o.xdt_api__v1__feed__user_timeline_graphql_connection.edges,e[5]=x):x=e[5];x=x;x=x;var y;e[6]!==r?(y=function(){r(d("PolarisProfilePostsActionConstants").PAGE_SIZE)},e[6]=r,e[7]=y):y=e[7];y=y;var z=c("usePolarisRemoveNodeFromConnection")(),A=o.xdt_api__v1__feed__user_timeline_graphql_connection.__id;e[8]!==A||e[9]!==z?(o=function(a){a=c("igMapTypenameToRelayID")("XDTMediaDict",a,null);z(A,a)},e[8]=A,e[9]=z,e[10]=o):o=e[10];o=o;if(x.length===0&&!p&&!q){var B;e[11]===Symbol["for"]("react.memo_cache_sentinel")?(B=i.jsx(c("PolarisProfileTabContentSpinner.react"),{}),e[11]=B):B=e[11];e[12]!==n||e[13]!==m||e[14]!==a?(t=i.jsx(k,{analyticsContext:d("PolarisConnectionsLogger").CONNECTIONS_CONTAINER_MODULES.profile,isSmallScreen:n,onSeeAllClicked:t,userID:m,username:a}),e[12]=n,e[13]=m,e[14]=a,e[15]=t):t=e[15];e[16]!==u||e[17]!==m||e[18]!==a?(n=u?i.jsx(c("PolarisSimilarAccountsModalLazy.react"),{entryPath:d("CometRouteURL").getWindowURL(),onClose:w,pageId:u,userID:m,username:a}):null,e[16]=u,e[17]=m,e[18]=a,e[19]=n):n=e[19];e[20]!==n||e[21]!==t?(w=i.jsx(c("CometPlaceholder.react"),{fallback:B,children:i.jsxs(i.Fragment,{children:[t,n]})}),e[20]=n,e[21]=t,e[22]=w):w=e[22];return w}e[23]!==p||e[24]!==g||e[25]!==q||e[26]!==x||e[27]!==y||e[28]!==h?(u=i.jsx(c("PolarisProfileTabVirtualFeed.next.react"),{analyticsContext:"profilePage",hasNextPage:p,initialRenderCount:g,isLoadingNext:q,items:x,onNextPage:y,untruncateCaption:h}),e[23]=p,e[24]=g,e[25]=q,e[26]=x,e[27]=y,e[28]=h,e[29]=u):u=e[29];if(e[30]!==f||e[31]!==s){B=f&&d("PolarisConfig").isLoggedOutUser()&&b("cr:2789")!=null&&i.jsx(b("cr:2789"),{dialogSource:d("CAAWebClientLoggingEventSource").CAAWebClientLoggingDialogSource.PROFILE,pageType:"profile",user:(a=s)!=null?a:void 0});e[30]=f;e[31]=s;e[32]=B}else B=e[32];e[33]!==u||e[34]!==B?(n=i.jsxs("div",{children:[u,B]}),e[33]=u,e[34]=B,e[35]=n):n=e[35];e[36]!==o||e[37]!==n?(t=i.jsx(c("PolarisPostDeleteContextProvider.react"),{onDeleted:o,children:n}),e[36]=o,e[37]=n,e[38]=t):t=e[38];return t}function l(a){a=a.node;return a}g["default"]=a}),98);
__d("XPolarisProfileTabNames",[],(function(a,b,c,d,e,f){a=Object.freeze({ADMINS:"admins",CHANNEL:"channel",EFFECTS:"effects",FEED:"feed",FOLLOWERS:"followers",FOLLOWING:"following",HASHTAG_FOLLOWING:"hashtag_following",MEMBERS:"members",POSTS:"posts",REELS:"reels",RELATED_PROFILES:"related_profiles",SAVED:"saved",SIMILAR_ACCOUNTS:"similar_accounts",TAGGED:"tagged"});f["default"]=a}),66);
__d("XPolarisProfileViewTypes",[],(function(a,b,c,d,e,f){a=Object.freeze({MUTUAL_FIRST:"mutualFirst",MUTUAL_ONLY:"mutualOnly"});f["default"]=a}),66);
__d("XPolarisProfileControllerParamsRefineValidator",["XPolarisProfileTabNames","XPolarisProfileViewTypes","coerceRouteParams","refine"],(function(a,b,c,d,e,f,g){e=(b=d("refine")).or(b.literal(null),b.enumObject(c("XPolarisProfileTabNames")));f=b.or(b.literal(null),b.string());d=b.or(b.literal(null),b.enumObject(c("XPolarisProfileViewTypes")));var h=b.or(b.literal(null),b.array(b.string())),i=b.or(b.literal(null),b.number());h=b.object({__tn__:f,a_mpk:f,a_tt:f,c:h,campaign_id:i,creative:f,dl_source:f,e:f,enable_persistent_cta:b.bool(),entry_point:f,event_time:i,extra_1:f,extra_2:f,gclid:f,ig_rid:f,igsh:f,igshid:f,keyword:f,partner_id:f,pcs:i,placement:f,pro_dash_tool:b.string(),sc_t:f,sem_attr_id:f,show_ad_partnerships_dialog:b.bool(),show_pro_dash_dialog:b.bool(),show_story_unavailable:f,tab:e,tracking_id:f,username:b.string(),utm_campaign:f,utm_medium:f,utm_source:f,view_type:d});var j=b.coercion(h),k=Object.freeze({username:{legacyNames:[],"default":null,coercibleType:"STRING"},tab:{legacyNames:[],"default":null,enumType:1,coercibleType:"ENUM"},show_story_unavailable:{legacyNames:[],"default":null,coercibleType:"STRING"},view_type:{legacyNames:[],"default":null,enumType:1,coercibleType:"ENUM"},show_pro_dash_dialog:{legacyNames:[],"default":!1,coercibleType:"BOOL"},pro_dash_tool:{legacyNames:[],"default":"",coercibleType:"STRING"},show_ad_partnerships_dialog:{legacyNames:[],"default":!1,coercibleType:"BOOL"},a_tt:{legacyNames:[],"default":null,coercibleType:"STRING"},a_mpk:{legacyNames:[],"default":null,coercibleType:"STRING"},c:{legacyNames:[],"default":null,coercibleType:"STRING_VECTOR"},__tn__:{legacyNames:[],"default":null,coercibleType:"STRING"},e:{legacyNames:[],"default":null,coercibleType:"STRING"},enable_persistent_cta:{legacyNames:[],"default":!1,coercibleType:"BOOL"},entry_point:{legacyNames:[],"default":null,coercibleType:"STRING"},sc_t:{legacyNames:[],"default":null,coercibleType:"STRING"},igshid:{legacyNames:[],"default":null,coercibleType:"STRING"},pcs:{legacyNames:[],"default":null,coercibleType:"INT"},gclid:{legacyNames:[],"default":null,coercibleType:"STRING"},campaign_id:{legacyNames:[],"default":null,coercibleType:"INT"},partner_id:{legacyNames:[],"default":null,coercibleType:"STRING"},tracking_id:{legacyNames:[],"default":null,coercibleType:"STRING"},extra_1:{legacyNames:[],"default":null,coercibleType:"STRING"},extra_2:{legacyNames:[],"default":null,coercibleType:"STRING"},event_time:{legacyNames:[],"default":null,coercibleType:"INT"},sem_attr_id:{legacyNames:[],"default":null,coercibleType:"STRING"},placement:{legacyNames:[],"default":null,coercibleType:"STRING"},creative:{legacyNames:[],"default":null,coercibleType:"STRING"},keyword:{legacyNames:[],"default":null,coercibleType:"STRING"},igsh:{legacyNames:[],"default":null,coercibleType:"STRING"},utm_source:{legacyNames:[],"default":null,coercibleType:"STRING"},utm_medium:{legacyNames:[],"default":null,coercibleType:"STRING"},utm_campaign:{legacyNames:[],"default":null,coercibleType:"STRING"},dl_source:{legacyNames:[],"default":null,coercibleType:"STRING"},ig_rid:{legacyNames:[],"default":null,coercibleType:"STRING"}});function a(a){return j(c("coerceRouteParams")(a,k))}g.refineXPolarisProfileControllerParams=a}),98);
__d("PolarisProfileFeedTabRoot.react",["CometPlaceholder.react","CometRouteParams","InstagramSEOCrawlBot","PolarisGenericVirtualFeedConstants","PolarisProfileTabContentSpinner.react","PolarisProfileTabsUtils","XPolarisProfileControllerParamsRefineValidator","XPolarisProfileControllerRouteBuilder","deferredLoadComponent","react","react-compiler-runtime","requireDeferredForDisplay","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useEffect,k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisProfileFeedTabContent.react").__setRef("PolarisProfileFeedTabRoot.react"));function a(a){var b=d("react-compiler-runtime").c(11),e=a.props;a=a.queries;var f=c("useCometRouterDispatcher")(),g=d("CometRouteParams").useCometRefinedRouteParams(d("XPolarisProfileControllerParamsRefineValidator").refineXPolarisProfileControllerParams),h=String(g==null?void 0:g.username),l,m;b[0]!==f||b[1]!==h?(l=function(){d("PolarisProfileTabsUtils").isFeedTabAvailable()||(f==null?void 0:f.go(c("XPolarisProfileControllerRouteBuilder").buildUri({username:h}).toString(),{replace:!0}))},m=[f,h],b[0]=f,b[1]=h,b[2]=l,b[3]=m):(l=b[2],m=b[3]);j(l,m);if(!d("PolarisProfileTabsUtils").isFeedTabAvailable())return null;l=(g==null?void 0:g.tab)===null?12:d("PolarisGenericVirtualFeedConstants").FEED_INITIAL_RENDER_COUNT_FOR_SEO_CRAWLERS;m=c("InstagramSEOCrawlBot").is_crawler_with_ssr?l:d("PolarisGenericVirtualFeedConstants").FEED_INITIAL_RENDER_COUNT;l=(g==null?void 0:g.tab)===null&&c("InstagramSEOCrawlBot").is_crawler_with_ssr;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(g=i.jsx(c("PolarisProfileTabContentSpinner.react"),{}),b[4]=g):g=b[4];b[5]!==m||b[6]!==e.userID||b[7]!==a.contentQuery||b[8]!==l||b[9]!==h?(g=i.jsx(c("CometPlaceholder.react"),{fallback:g,children:i.jsx(k,{contentQuery:a.contentQuery,initialRenderCount:m,untruncateCaption:l,userID:e.userID,username:h})}),b[5]=m,b[6]=e.userID,b[7]=a.contentQuery,b[8]=l,b[9]=h,b[10]=g):g=b[10];return g}g["default"]=a}),98);
__d("XPolarisSavedCollectionsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{username}/saved/{slug}/{?collection_id}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);