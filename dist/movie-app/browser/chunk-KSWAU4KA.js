import{b as ue,c as fe}from"./chunk-YHQYQD2Q.js";import{a as Ce}from"./chunk-EKAYUGSG.js";import{$a as Y,$b as te,Aa as A,Ab as ee,Ba as a,Bb as h,Ca as p,D as S,Da as F,Ed as pe,Fc as ne,Ga as f,Ha as x,Ia as b,J as W,Ja as c,Ka as H,La as I,Lc as oe,Ma as w,Md as se,Nd as ce,Oa as P,Od as E,P as u,Pa as O,Pd as me,Q as j,Ra as m,S as B,Sa as M,Ta as L,W as C,X as y,Za as D,aa as Q,be as de,ce as _e,de as ve,ee as ge,fa as R,fe as he,gb as v,gd as re,ha as r,ia as T,ib as g,id as ae,kd as le,oa as N,pa as z,pc as ie,ra as s,sa as $,ta as l,tb as G,wb as J,xa as q,xb as K,ya as k,yb as X,za as U,zb as Z}from"./chunk-KIWVUDLE.js";var ye=(()=>{let n=class n{transform(o,i){return o?o.length<=i?o:o.slice(0,i-3)+"...":""}};n.\u0275fac=function(i){return new(i||n)},n.\u0275pipe=B({name:"truncate",type:n,pure:!0,standalone:!0});let e=n;return e})();var Se=["*",[["p-header"]],[["p-footer"]]],ke=["*","p-header","p-footer"];function Fe(e,n){e&1&&f(0)}function Ie(e,n){if(e&1&&(a(0,"div",8),I(1,1),s(2,Fe,1,0,"ng-container",6),p()),e&2){let t=c();r(2),l("ngTemplateOutlet",t.headerTemplate)}}function we(e,n){e&1&&f(0)}function Pe(e,n){if(e&1&&(a(0,"div",9),m(1),s(2,we,1,0,"ng-container",6),p()),e&2){let t=c();r(),L(" ",t.header," "),r(),l("ngTemplateOutlet",t.titleTemplate)}}function Oe(e,n){e&1&&f(0)}function De(e,n){if(e&1&&(a(0,"div",10),m(1),s(2,Oe,1,0,"ng-container",6),p()),e&2){let t=c();r(),L(" ",t.subheader," "),r(),l("ngTemplateOutlet",t.subtitleTemplate)}}function Ee(e,n){e&1&&f(0)}function Le(e,n){e&1&&f(0)}function Ve(e,n){if(e&1&&(a(0,"div",11),I(1,2),s(2,Le,1,0,"ng-container",6),p()),e&2){let t=c();r(2),l("ngTemplateOutlet",t.footerTemplate)}}var Te=(()=>{class e{el;header;subheader;set style(t){pe.equals(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;templates;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_style=N(null);constructor(t){this.el=t}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"title":this.titleTemplate=t.template;break;case"subtitle":this.subtitleTemplate=t.template;break;case"content":this.contentTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}getBlockableElement(){return this.el.nativeElement.children[0]}static \u0275fac=function(o){return new(o||e)(T(Q))};static \u0275cmp=u({type:e,selectors:[["p-card"]],contentQueries:function(o,i,d){if(o&1&&(w(d,se,5),w(d,ce,5),w(d,E,4)),o&2){let _;P(_=O())&&(i.headerFacet=_.first),P(_=O())&&(i.footerFacet=_.first),P(_=O())&&(i.templates=_)}},hostAttrs:[1,"p-element"],inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},ngContentSelectors:ke,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(o,i){o&1&&(H(Se),a(0,"div",0),s(1,Ie,3,1,"div",1),a(2,"div",2),s(3,Pe,3,2,"div",3)(4,De,3,2,"div",4),a(5,"div",5),I(6),s(7,Ee,1,0,"ng-container",6),p(),s(8,Ve,3,1,"div",7),p()()),o&2&&(q(i.styleClass),l("ngClass","p-card p-component")("ngStyle",i._style()),$("data-pc-name","card"),r(),l("ngIf",i.headerFacet||i.headerTemplate),r(2),l("ngIf",i.header||i.titleTemplate),r(),l("ngIf",i.subheader||i.subtitleTemplate),r(3),l("ngTemplateOutlet",i.contentTemplate),r(),l("ngIf",i.footerFacet||i.footerTemplate))},dependencies:[G,J,X,K],styles:[`@layer primeng{.p-card-header img{width:100%}}
`],encapsulation:2,changeDetection:0})}return e})(),xe=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=j({type:e});static \u0275inj=W({imports:[h,me]})}return e})();var je=e=>["/movie",e];function Be(e,n){if(e&1){let t=x();a(0,"p-button",10),b("click",function(){C(t);let i=c(3);return y(i.toggleMovieToWatchLater(i.movie.id))}),p()}e&2&&l("rounded",!0)("outlined",!0)}function Qe(e,n){if(e&1){let t=x();a(0,"p-button",11),b("click",function(){C(t);let i=c(3);return y(i.toggleMovieToWatchLater(i.movie.id))}),p()}e&2&&l("rounded",!0)("outlined",!0)}function Re(e,n){if(e&1){let t=x();a(0,"p-button",12),b("click",function(){C(t);let i=c(3);return y(i.toggleMovieToFavorite(i.movie.id))}),p()}e&2&&l("rounded",!0)("outlined",!0)}function Ne(e,n){if(e&1){let t=x();a(0,"p-button",13),b("click",function(){C(t);let i=c(3);return y(i.toggleMovieToFavorite(i.movie.id))}),p()}e&2&&l("rounded",!0)("outlined",!0)}function ze(e,n){if(e&1&&s(0,Be,1,2,"p-button",8)(1,Qe,1,2)(2,Re,1,2,"p-button",9)(3,Ne,1,2),e&2){let t=c(2);k(0,t.isWatchLater?0:1),r(2),k(2,t.isFavorite?2:3)}}function $e(e,n){if(e&1&&(s(0,ze,4,2,"ng-template",1),a(1,"div",2)(2,"h3",3)(3,"a",4),m(4),v(5,"truncate"),p()(),a(6,"ul",5)(7,"li"),m(8,"Release date "),a(9,"span"),m(10),v(11,"date"),p()(),a(12,"li"),m(13,"Rating "),a(14,"span"),m(15),v(16,"number"),p()()(),a(17,"p",6),m(18),v(19,"truncate"),p()(),F(20,"img",7),v(21,"defaultImage")),e&2){let t=c();r(2),l("pTooltip",t.movie.title),r(),l("routerLink",Y(23,je,t.movie.id)),r(),M(g(5,8,t.movie.title,20)),r(6),M(g(11,11,t.movie.release_date,"dd.MM.yyyy")),r(5),M(g(16,14,t.movie.vote_average,"1.1-1")),r(3),M(g(19,17,t.movie.overview,250)),r(2),l("src",g(21,20,t.imageSrc,t.defaultImageSrc),R)("alt",t.movie.title)}}var be=(()=>{let n=class n extends he{constructor(o,i){super(),this.store=o,this.dialogService=i,this.movie=null,this.isFavorite=!1,this.isWatchLater=!1,this.imageSrc=null,this.defaultImageSrc="../../../assets/images/movies-card/not-found.jpg",this.user=null}toggleMovieToFavorite(o){this.user?(this.isFavorite=!this.isFavorite,this.store.dispatch(ne({movieId:o,isFavorite:this.isFavorite}))):this.initPopup()}toggleMovieToWatchLater(o){this.user?(this.isWatchLater=!this.isWatchLater,this.store.dispatch(oe({movieId:o,isWatchLater:this.isWatchLater}))):this.initPopup()}initPopup(){let o=this.dialogService.open(fe,{header:"Log In With TMDB Account",width:"25rem"})}ngOnInit(){this.imageSrc=this.movie?.poster_path?"https:/image.tmdb.org/t/p/w500"+this.movie?.poster_path:null,this.store.select(le).pipe(S(this.destroy$)).subscribe(o=>{this.user=o}),this.movie&&(this.store.select(re(this.movie)).pipe(S(this.destroy$)).subscribe(o=>{this.isFavorite=o}),this.store.select(ae(this.movie)).pipe(S(this.destroy$)).subscribe(o=>{this.isWatchLater=o}))}};n.\u0275fac=function(i){return new(i||n)(T(ie),T(ue))},n.\u0275cmp=u({type:n,selectors:[["app-movie-card"]],inputs:{movie:"movie"},standalone:!0,features:[z,D],decls:2,vars:1,consts:[["styleClass","movie"],["pTemplate","header"],[1,"movie__content"],["tooltipPosition","top","showDelay","700","hideDelay","300",1,"movie__title",3,"pTooltip"],[3,"routerLink"],[1,"movie__info"],[1,"movie__description"],[1,"movie__poster",3,"src","alt"],["icon","pi pi-bookmark-fill",3,"rounded","outlined"],["icon","pi pi-heart-fill",3,"rounded","outlined"],["icon","pi pi-bookmark-fill",3,"click","rounded","outlined"],["icon","pi pi-bookmark",3,"click","rounded","outlined"],["icon","pi pi-heart-fill",3,"click","rounded","outlined"],["icon","pi pi-heart",3,"click","rounded","outlined"]],template:function(i,d){i&1&&(a(0,"p-card",0),s(1,$e,22,25),p()),i&2&&(r(),k(1,d.movie?1:-1))},dependencies:[h,ee,Z,Ce,ye,ge,ve,xe,Te,E,_e,de,te],styles:[".movie__content[_ngcontent-%COMP%]{color:#f5f5f5;position:absolute;left:0;bottom:0;z-index:1;width:100%;height:100%;transform:translateY(70%);background-color:#252525bf;padding:.75rem 1.25rem;transition:transform .3s ease-in-out,padding .3s ease-in-out}.movie__title[_ngcontent-%COMP%]{display:inline-block;font-size:24px}.movie__title[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.movie__info[_ngcontent-%COMP%]{font-size:14px}.movie__info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:4px}.movie__info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e3b40a}.movie__info[_ngcontent-%COMP%]:not(:last-child){margin-bottom:8px}.movie__description[_ngcontent-%COMP%]{font-size:14px}.movie__poster[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}"]});let e=n;return e})();var qe=(e,n)=>n.id;function Ue(e,n){if(e&1&&(a(0,"div"),F(1,"app-movie-card",1),p()),e&2){let t=n.$implicit;r(),l("movie",t)}}var Mt=(()=>{let n=class n{};n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=u({type:n,selectors:[["app-movies-list"]],inputs:{movies:"movies"},standalone:!0,features:[D],decls:3,vars:0,consts:[[1,"movies-list"],[3,"movie"]],template:function(i,d){i&1&&(a(0,"div",0),U(1,Ue,2,1,"div",null,qe),p()),i&2&&(r(),A(d.movies))},dependencies:[h,be],styles:[".movies-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:1.5rem 1rem}"],changeDetection:0});let e=n;return e})();export{Mt as a};