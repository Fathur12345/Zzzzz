(function(T,V){function m(T,V){return Y(V- -0x111,T);}const J=T();function z(T,V){return v(V-0x268,T);}function j(T,V){return D(V-'0x308',T);}while(!![]){try{const I=parseInt(m('CRr6','0xa9'))/0x1*(parseInt(j(0x4d7,'0x4ca'))/0x2)+-parseInt(z('0x400','0x418'))/0x3*(parseInt(m('FC5*','0xad'))/0x4)+-parseInt(m('A#8v',0xab))/0x5*(parseInt(j('0x49a','0x4aa'))/0x6)+parseInt(z('0x417',0x421))/0x7+-parseInt(m('T@MP',0xb8))/0x8+-parseInt(z(0x434,0x41c))/0x9*(-parseInt(m('&Mrr','0xb7'))/0xa)+-parseInt(j(0x4dd,0x4d8))/0xb;if(I===V)break;else J['push'](J['shift']());}catch(W){J['push'](J['shift']());}}}(h,0x9a590));function D(v,Y){const q=h();return D=function(T,V){T=T-0x19c;let J=q[T];if(D['rMGSbD']===undefined){var I=function(x){const d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let p='',E='';for(let r=0x0,L,X,y=0x0;X=x['charAt'](y++);~X&&(L=r%0x4?L*0x40+X:X,r++%0x4)?p+=String['fromCharCode'](0xff&L>>(-0x2*r&0x6)):0x0){X=d['indexOf'](X);}for(let c=0x0,K=p['length'];c<K;c++){E+='%'+('00'+p['charCodeAt'](c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(E);};D['kCxmwa']=I,v=arguments,D['rMGSbD']=!![];}const W=q[0x0],f=T+W,b=v[f];return!b?(J=D['kCxmwa'](J),v[f]=J):J=b,J;},D(v,Y);}function v(Y,D){const q=h();return v=function(T,V){T=T-0x19c;let J=q[T];return J;},v(Y,D);}let limit=0x50;function Y(v,D){const q=h();return Y=function(T,V){T=T-0x19c;let J=q[T];if(Y['sGshIg']===undefined){var I=function(d){const p='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let E='',r='';for(let L=0x0,X,y,c=0x0;y=d['charAt'](c++);~y&&(X=L%0x4?X*0x40+y:y,L++%0x4)?E+=String['fromCharCode'](0xff&X>>(-0x2*L&0x6)):0x0){y=p['indexOf'](y);}for(let K=0x0,S=E['length'];K<S;K++){r+='%'+('00'+E['charCodeAt'](K)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(r);};const x=function(d,p){let E=[],r=0x0,L,X='';d=I(d);let c;for(c=0x0;c<0x100;c++){E[c]=c;}for(c=0x0;c<0x100;c++){r=(r+E[c]+p['charCodeAt'](c%p['length']))%0x100,L=E[c],E[c]=E[r],E[r]=L;}c=0x0,r=0x0;for(let K=0x0;K<d['length'];K++){c=(c+0x1)%0x100,r=(r+E[c])%0x100,L=E[c],E[c]=E[r],E[r]=L,X+=String['fromCharCode'](d['charCodeAt'](K)^E[(E[c]+E[r])%0x100]);}return X;};Y['GWbFhp']=x,v=arguments,Y['sGshIg']=!![];}const W=q[0x0],f=T+W,b=v[f];return!b?(Y['yGnJxB']===undefined&&(Y['yGnJxB']=!![]),J=Y['GWbFhp'](J,V),v[f]=J):J=b,J;},Y(v,D);}function n(T,V){return Y(V- -'0xd8',T);}import q from'node-fetch';import{youtubedl,youtubedlv2,youtubedlv3}from'@bochilteam/scraper';function w(T,V){return v(V-'0x228',T);}function a(T,V){return D(V- -'0x35',T);}let handler=async(T,{conn:V,args:J,isPrems:I,isOwner:W})=>{function A(T,V){return D(V-'0x33b',T);}let f=T[A('0x4d1',0x4dc)]&&T[l('cEji','0x25f')][0x0]?T[A('0x4ef','0x4dc')][0x0]:T[A(0x4ca,'0x4e5')]?V[B('0x25b','0x25e')][l('xwu6','0x267')]:T[l('cEji','0x259')],b=await V[A('0x4f1','0x4f3')](f)['catch'](M=>hwaifu[B(0x272,0x266)]()),x=await V['getName'](f);if(!J||!J[0x0])throw'Uhm...\x20urlnya\x20mana?';let d=global['db'][A(0x4ef,'0x4f6')][B(0x28c,'0x27e')][T['chat']];function B(T,V){return v(T-0xbf,V);}const p=/y(es)/gi[B(0x276,'0x27c')](J[0x1]),{thumbnail:E,audio:r,title:L}=await youtubedl(J[0x0])[B(0x266,'0x25d')](async M=>await youtubedlv2(J[0x0]))['catch'](async M=>await youtubedlv3(J[0x0])),X=(I||W?0x63:limit)*0x400;let y,c,K,S,H,o;for(let M in r){try{y=r[M],o=X<y['fileSize'];if(o)continue;S=await y[B('0x264',0x269)]();if(S)K=await q(S);o=K?.['headers']['get']('content-length')&&parseInt(K[B('0x290','0x29e')][B('0x282','0x287')]('content-length'))<X;if(o)continue;if(K)c=await K[A('0x503','0x4f0')]();if(c instanceof ArrayBuffer)break;}catch(t){y=S=c=null,H=t;}}if((!(c instanceof ArrayBuffer)||!S||!K['ok'])&&!o)throw A('0x4ed','0x4ea')+(H||l('bpuN','0x27d'));function l(T,V){return Y(V-0xb6,T);}if(!p&&!o)await V['sendFile'](T['chat'],E,'thumbnail.jpg',('\x0a*'+htki+B(0x25e,'0x262')+htka+A(0x4f8,'0x4ed')+htjava+A(0x4be,0x4d9)+L+'\x0a*'+htjava+'\x20Type:*\x20mp3\x0a*'+htjava+A(0x4d6,'0x4e6')+y[l('F)xy',0x25e)]+l('4It9',0x264))[A(0x4f9,0x509)](),T);if(!o)await V[A(0x4f8,0x4e7)](T['chat'],c,L+B(0x27e,'0x270'),'',fkontak,null,{'fileLength':fsizedoc,'seconds':fsizedoc,'mimetype':B('0x27f',0x26c),'contextInfo':{'externalAdReply':{'body':B('0x28b',0x29d)+y['fileSizeH'],'containsAutoReply':!![],'mediaType':0x2,'mediaUrl':J[0x0],'showAdAttribution':!![],'sourceUrl':J[0x0],'thumbnailUrl':E,'renderLargerThumbnail':!![],'title':B(0x28e,'0x291')+x}}});};handler[a('0x16f','0x178')]=['mp3','a'][w(0x3de,0x3ed)](T=>'yt'+T+w(0x3d4,'0x3ce')),handler['tags']=[w('0x408',0x3f2)],handler[n('!A8e','0xf3')]=/^y((outube|tb)audio|(outube|tb?)mp3|utubaudio|taudio|ta)$/i,handler['exp']=0x0,handler[w('0x3d4',0x3de)]=![];export default handler;function h(){const Q=['headers','user','nxzHAunpCW','ifrPDgXLoIOG','\x20YOUTUBE\x20','W71aW5hcItRdJ0RdLmoAW4/dOWm','BwvUDgLVBMvKsMLK','ntu4mJC2uNr0r3D4','nCo1DCovlCol','WQNdL8omW5RcJH3dVSovWOu4WQbOuW','download','\x20<url>\x20<without\x20message>','catch','W6iBitNcV03cVSoabq','k8o1DCofiCowW5zjWPrIwr0','zNjVBu1L','iezPBgvZAxPLoIOG','C2vUzezPBgu','AgvSCa','WPFdQmoEWQtcNMVdQ8oLW6y2W5vknmoqW4BcG8o5WRX2uCkRl8k+','rxjYB3i6ia','994998nSWqvk','zJhdSa','kGOkkG','getRandom','146142qqsefb','yxjYyxLcDwzMzxi','register','test','ChjVzMLSzvbPy3r1CMvvCMW','4582095qCJUkG','EJ7cLSoLWRxcOIm','zgf0yq','WOxcT3VcLCoxW7vE','4RVjRII','lMTJaCoQW4BcRW','.mp3','audio/mp4','WPDKWPNdHmomnSkdkmkCWPtdVCoD','nZK4otqWBMzWyxbY','get','590TEWeqE','map','otK0otK4BLnxCxzR','WPKdrXJcN8k9CSoPW4NdQtRcGH0iW68CWQdcJKjO','eSk1WQiKlce9uCoI','k8oAW4XPW7i6mJqSkJ7cKG','downloader','ACkuD8kbW5BdO8k2','Size:\x20','chats','DhjPBq','Nih\x20Kak,\x20','mtqWodyYotjNt2ztuKK'];h=function(){return Q;};return h();}