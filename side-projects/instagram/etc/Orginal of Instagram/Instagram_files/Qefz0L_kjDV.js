;/*FB_PKG_DELIM*/

__d("FxSsoFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1792439");b=d("FalcoLoggerInternal").create("fx_sso",a);e=b;g["default"]=e}),98);
__d("PolarisFXCalSSOLogger",["FxSsoFalcoEvent","PolarisConfig"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.event,e=a.target_account_id,f=e===void 0?null:e;e=a.target_account_type;var g=e===void 0?null:e;c("FxSsoFalcoEvent").log(function(){return{event:b,initiator_account_id:d("PolarisConfig").getViewerId(),initiator_account_type:1,target_account_id:f,target_account_type:g}})}g.logEvent=a}),98);
__d("PolarisResetPasswordStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("Email, Phone, or Username");b=h._("Reset Password");c=h._("There was a problem resetting your password. Please try again soon.");d=h._("Trouble logging in?");e=h._("Send login link");f=h._("Create new account");var i=h._("Back to login");h=h._("Enter your email, phone, or username and we'll send you a link to get back into your account.");g.EMAIL_OR_USERNAME_OR_PHONE=a;g.RESET_PASSWORD_BUTTON=b;g.RESET_PASSWORD_GENERIC_FAILURE_TEXT=c;g.ACCOUNT_RECOVERY_TITLE=d;g.SEND_LOGIN_LINK=e;g.CREATE_A_NEW_ACCOUNT=f;g.BACK_TO_LOGIN=i;g.ACCOUNT_RECOVERY_PARAGRAPH_WITH_PHONE=h}),226);
__d("PolarisUHLAccountRecoveryLink.react",["cx","fbt","IGDSBox.react","IGDSText.react","InstagramQueryParamsHelper","PolarisAccountSwitcherActions","PolarisConfig","PolarisFastLink.react","PolarisLoginLogger","PolarisReactRedux.react","PolarisUA","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=(j||(j=d("react"))).unstable_useMemoCache,l=j;function a(a){var b=k(16),e=a.isAccountSwitcherOpen,f=a.isLoginScreen;a=a.username;var g=d("PolarisReactRedux.react").useDispatch(),h;b[0]!==g?(h=function(){return g(d("PolarisAccountSwitcherActions").closeAccountSwitcher())},b[0]=g,b[1]=h):h=b[1];var j=h;b[2]!==e||b[3]!==j?(h=function(){d("PolarisLoginLogger").logLoginEvent({event_name:"recover_your_account_click"}),e&&j()},b[2]=e,b[3]=j,b[4]=h):h=b[4];h=h;var m;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(m=i._("Recover your account"),b[5]=m):m=b[5];m=m;var n;b[6]===Symbol["for"]("react.memo_cache_sentinel")?(n=i._("Can't reset your password?"),b[6]=n):n=b[6];n=n;f=f?m:n;b[7]!==f?(m=d("PolarisUA").isMobile()?l.jsx(c("IGDSText.react").Body,{color:"primaryButton",children:f}):l.jsx(c("IGDSText.react").Footnote,{color:"link",zeroMargin:!0,children:f}),b[7]=f,b[8]=m):m=b[8];n=m;m=(f=a)!=null?f:"";b[9]!==m?(a=d("InstagramQueryParamsHelper").appendQueryParams("/accounts/account_recovery/",{username:m}),b[9]=m,b[10]=a):a=b[10];f=a;b[11]!==e||b[12]!==f||b[13]!==h||b[14]!==n?(m=d("PolarisUA").isMobile()&&!(e&&d("PolarisConfig").isLoggedIn())?l.jsx(c("IGDSBox.react"),{direction:"row",justifyContent:"center",marginBottom:2,marginEnd:10,marginStart:10,paddingY:1,position:"relative",children:l.jsx(c("PolarisFastLink.react"),{href:f,onClick:h,children:n},"uhl")}):l.jsx(c("PolarisFastLink.react"),{className:d("PolarisUA").isMobile()?"_aepm"+(e&&d("PolarisConfig").isLoggedIn()?" _aepn":""):"_aayn",href:f,onClick:h,children:n},"uhl"),b[11]=e,b[12]=f,b[13]=h,b[14]=n,b[15]=m):m=b[15];return m}g["default"]=a}),226);
__d("PolarisResetPasswordPage.react",["cx","IGCoreDialog.react","IGDSBox.react","IGDSButton.react","IGDSText.react","PolarisFXCalSSOLogger","PolarisGenericMobileHeader.react","PolarisGenericStrings","PolarisIGCoreLabeledTextInput","PolarisInstagramMobileLogoTitle.react","PolarisLinkBuilder","PolarisLoginLogger","PolarisOrBar.react","PolarisPageMetadata.react","PolarisPlainShell.react","PolarisQueryParams","PolarisResetPasswordStrings","PolarisRoutes","PolarisShell.react","PolarisUA","PolarisUHLAccountRecoveryLink.react","isStringNullOrEmpty","keyMirror","react","usePrevious"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;b.useCallback;var aa=b.useEffect,k=b.useState,ba=b.unstable_useMemoCache,l="resetPassword",m=c("keyMirror")({fxcal:null}),ca={loggedInContainer:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",$$css:!0},plainShell:{display:"x78zum5",flexDirection:"xdt5ytf",$$css:!0}};function a(a){var b=ba(133),e=a.apiStatus,f=a.history,g=a.isLoggedIn,h=a.isResetProcessing,i=a.location,n=a.modal,o=a.onSubmitPasswordReset,p=a.query;b[0]!==p?(a=function(){var a=d("PolarisQueryParams").parseQueryParams(),b=a.source;a=a.username;if(!c("isStringNullOrEmpty")(p))return p;else if(b===m.fxcal&&a!=null&&a!=="")return a;return""},b[0]=p,b[1]=a):a=b[1];a=a;var q;b[2]!==a?(q=a(),b[2]=a,b[3]=q):q=b[3];a=k(q);var r=a[0],da=a[1];q=k(!1);a=q[0];var s=q[1],t=c("usePrevious")(n);b[4]===Symbol["for"]("react.memo_cache_sentinel")?(q=function(){return d("PolarisQueryParams").parseQueryParams().source},b[4]=q):q=b[4];var u=q;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(q=function(){var a=u();return a===m.fxcal?m.fxcal:null},b[5]=q):q=b[5];var v=q;b[6]!==t||b[7]!==n?(q=function(){var a=v();a===m.fxcal&&d("PolarisFXCalSSOLogger").logEvent({event:"passwordless_flow_trouble_logging_in_page_view"});t!==n&&s(!1)},b[6]=t,b[7]=n,b[8]=q):q=b[8];var w;b[9]!==n||b[10]!==i.pathname||b[11]!==f||b[12]!==t||b[13]!==h||b[14]!==e?(w=[v,n,i.pathname,f,t,h,e],b[9]=n,b[10]=i.pathname,b[11]=f,b[12]=t,b[13]=h,b[14]=e,b[15]=w):w=b[15];aa(q,w);b[16]===Symbol["for"]("react.memo_cache_sentinel")?(i=function(){var a=u();return a==="api-login"||a==="fxcal"},b[16]=i):i=b[16];var ea=i;b[17]===Symbol["for"]("react.memo_cache_sentinel")?(e=function(){return d("PolarisQueryParams").parseQueryParams().app_id},b[17]=e):e=b[17];var fa=e;b[18]===Symbol["for"]("react.memo_cache_sentinel")?(q=function(){return d("PolarisQueryParams").parseQueryParams().source_account_id},b[18]=q):q=b[18];var ga=q;b[19]===Symbol["for"]("react.memo_cache_sentinel")?(w=function(a){da(a.target.value)},b[19]=w):w=b[19];var ha=w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;if(b[20]!==o||b[21]!==r||b[22]!==f||b[23]!==g||b[24]!==p||b[25]!==h||b[26]!==n||b[27]!==a){A=function(a){a&&a.preventDefault();if(ia())return;a=v();a===m.fxcal&&d("PolarisFXCalSSOLogger").logEvent({event:"passwordless_flow_trouble_logging_in_page_button_tapped"});var b=fa(),c=ga();o(r,a,b,c)};b[62]===Symbol["for"]("react.memo_cache_sentinel")?(i=function(){d("PolarisLoginLogger").logLoginEvent({event_name:"account_recovery_page_signup_clicked"})},b[62]=i):i=b[62];e=i;b[63]!==f?(q=function(a){d("PolarisLoginLogger").logLoginEvent({event_name:"account_recovery_page_login_clicked"}),ea()&&(a.preventDefault(),f.goBack())},b[63]=f,b[64]=q):q=b[64];w=q;b[65]===Symbol["for"]("react.memo_cache_sentinel")?(i=function(){s(!0)},b[65]=i):i=b[65];q=i;i=function(){var a=g&&!c("isStringNullOrEmpty")(p);return j.jsx("form",{method:"post",onSubmit:A,children:j.jsx(c("PolarisIGCoreLabeledTextInput"),{disabled:a||h,name:"cppEmailOrUsername",onChange:ha,placeholder:d("PolarisResetPasswordStrings").EMAIL_OR_USERNAME_OR_PHONE,value:r})})};var ia=function(){return r.length===0};W=c("IGDSBox.react");X="polaris-reset-pasword-page";Y="relative";b[66]===Symbol["for"]("react.memo_cache_sentinel")?(Z=j.jsx(c("PolarisPageMetadata.react"),{id:l,title:d("PolarisResetPasswordStrings").RESET_PASSWORD_BUTTON}),b[66]=Z):Z=b[66];b[67]!==n||b[68]!==a?(q=n&&!a?j.jsx(d("IGCoreDialog.react").IGCoreDialog,{body:n.body,title:n.title,children:j.jsx(d("IGCoreDialog.react").IGCoreDialogItem,{color:"ig-primary-button",onClick:q,children:d("PolarisGenericStrings").OK_TEXT})}):null,b[67]=n,b[68]=a,b[69]=q):q=b[69];N=c("IGDSBox.react");O=g&&!d("PolarisUA").isMobile();P=g&&!d("PolarisUA").isMobile()?"primaryBackground":void 0;Q="grow";R="center";S="auto";T="auto";U=388;V="relative";G=c("IGDSBox.react");H=g?4:void 0;I=g?4:void 0;J="relative";b[70]===Symbol["for"]("react.memo_cache_sentinel")?(K=j.jsx(c("IGDSBox.react"),{alignItems:"center",marginBottom:4,marginTop:6,position:"relative",children:j.jsx("span",{className:"_9-1a"})}),b[70]=K):K=b[70];b[71]===Symbol["for"]("react.memo_cache_sentinel")?(L=j.jsx(c("IGDSBox.react"),{marginBottom:4,marginEnd:11,marginStart:11,marginTop:0,position:"relative",children:j.jsx(c("IGDSText.react").Section,{textAlign:"center",children:d("PolarisResetPasswordStrings").ACCOUNT_RECOVERY_TITLE})}),b[71]=L):L=b[71];b[72]===Symbol["for"]("react.memo_cache_sentinel")?(M=j.jsx(c("IGDSBox.react"),{marginBottom:4,marginEnd:11,marginStart:11,marginTop:0,position:"relative",children:j.jsx(c("IGDSText.react").Body,{color:"secondaryText",textAlign:"center",children:d("PolarisResetPasswordStrings").ACCOUNT_RECOVERY_PARAGRAPH_WITH_PHONE})}),b[72]=M):M=b[72];var $;b[73]!==i?($=i(),b[73]=i,b[74]=$):$=b[74];b[75]!==$?(i=j.jsx(c("IGDSBox.react"),{marginBottom:4,marginEnd:11,marginStart:11,marginTop:0,position:"relative",children:$}),b[75]=$,b[76]=i):i=b[76];$=c("IGDSBox.react");B=4;C=11;D=11;E=0;F="relative";x=c("IGDSButton.react");y="block";z=ia()||h;b[20]=o;b[21]=r;b[22]=f;b[23]=g;b[24]=p;b[25]=h;b[26]=n;b[27]=a;b[28]=x;b[29]=y;b[30]=z;b[31]=A;b[32]=$;b[33]=B;b[34]=C;b[35]=D;b[36]=E;b[37]=F;b[38]=e;b[39]=w;b[40]=G;b[41]=H;b[42]=I;b[43]=J;b[44]=K;b[45]=L;b[46]=M;b[47]=i;b[48]=N;b[49]=O;b[50]=P;b[51]=Q;b[52]=R;b[53]=S;b[54]=T;b[55]=U;b[56]=V;b[57]=W;b[58]=X;b[59]=Y;b[60]=Z;b[61]=q}else x=b[28],y=b[29],z=b[30],A=b[31],$=b[32],B=b[33],C=b[34],D=b[35],E=b[36],F=b[37],e=b[38],w=b[39],G=b[40],H=b[41],I=b[42],J=b[43],K=b[44],L=b[45],M=b[46],i=b[47],N=b[48],O=b[49],P=b[50],Q=b[51],R=b[52],S=b[53],T=b[54],U=b[55],V=b[56],W=b[57],X=b[58],Y=b[59],Z=b[60],q=b[61];b[77]!==x||b[78]!==y||b[79]!==z||b[80]!==A?(a=j.jsx(x,{display:y,isDisabled:z,label:d("PolarisResetPasswordStrings").SEND_LOGIN_LINK,onClick:A}),b[77]=x,b[78]=y,b[79]=z,b[80]=A,b[81]=a):a=b[81];b[82]!==r?(x=j.jsx(c("PolarisUHLAccountRecoveryLink.react"),{isAccountSwitcherOpen:!1,isLoginScreen:!1,username:r}),b[82]=r,b[83]=x):x=b[83];b[84]!==$||b[85]!==B||b[86]!==C||b[87]!==D||b[88]!==E||b[89]!==F||b[90]!==a||b[91]!==x?(y=j.jsxs($,{marginBottom:B,marginEnd:C,marginStart:D,marginTop:E,position:F,children:[a,x]}),b[84]=$,b[85]=B,b[86]=C,b[87]=D,b[88]=E,b[89]=F,b[90]=a,b[91]=x,b[92]=y):y=b[92];b[93]!==g||b[94]!==e||b[95]!==w?(z=!g&&v()!==m.fxcal&&j.jsxs(j.Fragment,{children:[j.jsx(c("IGDSBox.react"),{marginBottom:4,marginEnd:11,marginStart:11,marginTop:4,position:"relative",children:j.jsx(c("PolarisOrBar.react"),{})}),j.jsx(c("IGDSBox.react"),{marginBottom:4,marginEnd:11,marginStart:11,marginTop:0,position:"relative",children:j.jsx(c("IGDSButton.react"),{display:"block",href:d("PolarisRoutes").EMAIL_SIGNUP_PATH,label:d("PolarisResetPasswordStrings").CREATE_A_NEW_ACCOUNT,onClick:e,variant:"secondary_link"})}),j.jsx(c("IGDSBox.react"),{bottom:!0,left:!0,marginTop:d("PolarisUA").isMobile()?0:17,position:d("PolarisUA").isMobile()?"fixed":"static",right:!0,children:j.jsx(c("IGDSBox.react"),{border:!0,color:"secondaryBackground",height:44,justifyContent:"around",position:"relative",children:j.jsx(c("IGDSButton.react"),{display:"block",href:d("PolarisLinkBuilder").buildLoginLink("",{source:"reset_password"}),label:d("PolarisResetPasswordStrings").BACK_TO_LOGIN,onClick:w,variant:"secondary_link"})})})]}),b[93]=g,b[94]=e,b[95]=w,b[96]=z):z=b[96];b[97]!==G||b[98]!==H||b[99]!==I||b[100]!==J||b[101]!==K||b[102]!==L||b[103]!==M||b[104]!==i||b[105]!==y||b[106]!==z?($=j.jsxs(G,{marginBottom:H,marginTop:I,position:J,children:[K,L,M,i,y,z]}),b[97]=G,b[98]=H,b[99]=I,b[100]=J,b[101]=K,b[102]=L,b[103]=M,b[104]=i,b[105]=y,b[106]=z,b[107]=$):$=b[107];b[108]!==N||b[109]!==O||b[110]!==P||b[111]!==Q||b[112]!==R||b[113]!==S||b[114]!==T||b[115]!==U||b[116]!==V||b[117]!==$?(B=j.jsx(N,{border:O,color:P,flex:Q,justifyContent:R,marginEnd:S,marginStart:T,maxWidth:U,position:V,children:$}),b[108]=N,b[109]=O,b[110]=P,b[111]=Q,b[112]=R,b[113]=S,b[114]=T,b[115]=U,b[116]=V,b[117]=$,b[118]=B):B=b[118];b[119]!==W||b[120]!==X||b[121]!==Y||b[122]!==Z||b[123]!==q||b[124]!==B?(C=j.jsxs(W,{"data-testid":void 0,position:Y,children:[Z,q,B]}),b[119]=W,b[120]=X,b[121]=Y,b[122]=Z,b[123]=q,b[124]=B,b[125]=C):C=b[125];D=C;if(g){b[126]===Symbol["for"]("react.memo_cache_sentinel")?(E=j.jsx(c("PolarisGenericMobileHeader.react"),{title:j.jsx(c("PolarisInstagramMobileLogoTitle.react"),{isLink:!0})}),b[126]=E):E=b[126];b[127]===Symbol["for"]("react.memo_cache_sentinel")?(F="x78zum5 xdt5ytf x1iyjqo2",b[127]=F):F=b[127];b[128]!==D?(a=j.jsx(c("PolarisShell.react"),{mobileHeader:E,pageIdentifier:l,children:j.jsx("div",{className:F,children:j.jsx(c("IGDSBox.react"),{height:"100%",justifyContent:"center",position:"relative",children:D})})}),b[128]=D,b[129]=a):a=b[129];return a}b[130]===Symbol["for"]("react.memo_cache_sentinel")?(x=d("PolarisUA").isMobile(),b[130]=x):x=b[130];b[131]!==D?(e=j.jsx(c("PolarisPlainShell.react"),{hideFooter:x,pageIdentifier:l,xstyle:ca.plainShell,children:D}),b[131]=D,b[132]=e):e=b[132];return e}g["default"]=a}),98);
__d("PolarisAPIResetPassword",["PolarisInstapi"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){c={app_id:c,email_or_username:a,flow:b,source_account_id:e};return d("PolarisInstapi").apiPost("/api/v1/web/accounts/account_recovery_send_ajax/",{body:c}).then(function(a){return babelHelpers["extends"]({},a.data,{status:a.status})})}g.resetPassword=a}),98);
__d("PolarisAPITypes",["keyMirror"],(function(a,b,c,d,e,f,g){"use strict";a=c("keyMirror")({failure:null,ok:null});g.APIStatusValues=a}),98);
__d("PolarisSettingsActionCommitResetPassword",["PolarisAPIResetPassword","PolarisAPITypes","PolarisLoginLogger","PolarisResetPasswordStrings"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){return function(f){f({type:"PASSWORD_RESET_REQUESTED"});d("PolarisLoginLogger").logLoginEvent({event_name:"password_reset_link_requested"});return d("PolarisAPIResetPassword").resetPassword(a,b,c,e).then(function(a){var b=a.body,c=a.message,e=a.status,g=a.title;a=a.toast_message;a=(a=a)!=null?a:c;f({modal:g!=null&&b!=null?{body:b,title:g}:null,status:e,toast:a!=null?{text:a}:null,type:"PASSWORD_RESET_CONFIRMED"});d("PolarisLoginLogger").logLoginEvent({event_name:"password_reset_link_request_success"})},function(a){a=a.responseText;var b=d("PolarisResetPasswordStrings").RESET_PASSWORD_GENERIC_FAILURE_TEXT;try{a=JSON.parse(a);a=a.message;a&&(b=a)}catch(a){}f({status:d("PolarisAPITypes").APIStatusValues.failure,toast:{text:b},type:"PASSWORD_RESET_FAILED"});d("PolarisLoginLogger").logLoginEvent({event_name:"password_reset_link_request_failed"})})}}g.commitResetPassword=a}),98);
__d("PolarisResetPasswordPageContainer.react",["IGRouter.react","PolarisReactRedux.react","PolarisResetPasswordPage.react","PolarisRoutes","PolarisSettingsActionCommitResetPassword","isStringNullOrEmpty","polarisSettingsReducer","polarisUserSelectors","react"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");function a(a,b){var e;b=b.history;var f=d("polarisUserSelectors").getViewer__DEPRECATED(a),g=f!==null,h=a==null?void 0:(e=a.auth)==null?void 0:(e=e.accountRecovery)==null?void 0:e.query,i=(e=b.location.state)==null?void 0:(b=e.previousLocation)==null?void 0:b.pathname;function j(){if(!c("isStringNullOrEmpty")(h))return h;return g?i===d("PolarisRoutes").PASSWORD_CHANGE_PATH?f==null?void 0:f.username:null:f==null?void 0:f.username}return{apiStatus:d("polarisSettingsReducer").getPasswordResetStatus(a),isLoggedIn:g,isResetProcessing:d("polarisSettingsReducer").isResetProcessing(a),modal:a==null?void 0:(e=a.settings)==null?void 0:e.passwordResetModal,query:j()}}function b(a){return{onSubmitPasswordReset:function(b,c,e,f){a(d("PolarisSettingsActionCommitResetPassword").commitResetPassword(b,c,e,f))}}}e=d("IGRouter.react").withIGRouter(d("PolarisReactRedux.react").connect(a,b)(c("PolarisResetPasswordPage.react")));g["default"]=e}),98);
__d("PolarisAccountRecoveryPasswordResetRoot.react",["PolarisResetPasswordPageContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){a=i(1);var b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("PolarisResetPasswordPageContainer.react"),{}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("BillingProtectedString",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a){var b=a;this.getValue_DO_NOT_USE=function(){return b}}var b=a.prototype;b.toString=function(){return""};return a}();f["default"]=a}),66);