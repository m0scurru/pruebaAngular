"use strict";(self.webpackChunkWiikinder=self.webpackChunkWiikinder||[]).push([[816],{6529:(f,s,r)=>{r.r(s),r.d(s,{AdministracionModule:()=>Z});var c=r(6019),d=r(1509),t=r(3556),l=r(4522);let a=(()=>{class o{constructor(n){this.http=n,this.urlAdmin="http://127.0.0.1:8000/api/crudAdmin"}getUsuarios(){return this.http.get(this.urlAdmin)}}return o.\u0275fac=function(n){return new(n||o)(t.LFG(l.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function g(o,e){if(1&o&&(t.TgZ(0,"tr",18),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t._UZ(9,"td"),t.qZA()),2&o){const n=e.$implicit,i=e.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(n.correo),t.xp6(2),t.Oqu(n.nombre),t.xp6(2),t.Oqu(n.activo)}}function u(o,e){if(1&o&&(t.TgZ(0,"div",13),t.TgZ(1,"table",14),t.TgZ(2,"thead"),t.TgZ(3,"tr",15),t.TgZ(4,"th",16),t._uU(5,"#"),t.qZA(),t.TgZ(6,"th",16),t._uU(7,"Correo"),t.qZA(),t.TgZ(8,"th",16),t._uU(9,"Nombre"),t.qZA(),t.TgZ(10,"th",16),t._uU(11,"Activo"),t.qZA(),t.TgZ(12,"th",16),t._uU(13,"Accion"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"tbody"),t.YNc(15,g,10,4,"tr",17),t.qZA(),t.qZA(),t.qZA()),2&o){const n=t.oxw();t.xp6(15),t.Q6J("ngForOf",n.personas)}}const p=[{path:"crud",component:(()=>{class o{constructor(n){this.restCrudService=n,this.personas=[],this.nombre="Wiikinder",this.logo="../assets/logo.png"}ngOnInit(){this.getUsuarios()}getUsuarios(){this.restCrudService.getUsuarios().subscribe(n=>{this.personas=n})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(a))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-crud"]],decls:16,vars:2,consts:[[1,"container-fluid"],[1,"col-12","col-sm-12","col-md-12","col-lg-12"],[1,"row","text-center","fondoHeaderYFooter","titulos"],[1,"col-11","col-sm-11","col-md-11","col-lg-11"],[1,"p-3"],[1,"row"],[1,"tituloLogo"],[1,"col-4","col-sm-3","col-md-2","col-lg-2",3,"src"],[1,"row","fondoGeneral","d-flex","justify-content-center","pt-3"],[1,"col-12","col-sm-12","col-md-8"],["class","table-responsive",4,"ngIf"],[1,"bg-light","text-center","text-lg-start","row"],[1,"text-center","p-3","titulos","col-12","col-sm-12","col-md-12","col-lg-12","fondoHeaderYFooter"],[1,"table-responsive"],[1,"table","table-sm"],[1,"table-primary"],["scope","col"],["class","table-secondary",4,"ngFor","ngForOf"],[1,"table-secondary"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"header",2),t.TgZ(3,"div",3),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"h1",6),t._UZ(7,"img",7),t._uU(8,"Wiikinder"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"main"),t.TgZ(10,"section",8),t.TgZ(11,"div",9),t.YNc(12,u,16,1,"div",10),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"footer",11),t.TgZ(14,"div",12),t._uU(15," \xa9 2021 Copyright: LauraM "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(7),t.s9C("src",i.logo,t.LSH),t.xp6(5),t.Q6J("ngIf",i.personas.length>0))},directives:[c.O5,c.sg],styles:['.fondoHeaderYFooter[_ngcontent-%COMP%]{background-color:#5d498b}@font-face{font-family:MagicalMistery;src:url(MagicalMystery.4e0f42d887fde487.ttf) format("opentype")}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{box-sizing:border-box;margin:0;padding:0;font-family:MagicalMistery}.fondoGeneral[_ngcontent-%COMP%]{background-color:#e2cddc}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{color:#b02261}button[_ngcontent-%COMP%]{background-color:#b02261}.tituloLogo[_ngcontent-%COMP%]{background:linear-gradient(#8735e6,#ff00c8);-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(2px 2px #000000)}.logo[_ngcontent-%COMP%]{max-width:200px}']}),o})()}];let m=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(p)],d.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,m]]}),o})()}}]);