import{f as h,g as S,i as C,k as I,l as b,m as z}from"./chunk-QEX3WDPP.js";import{Ab as g,Hb as y,Mb as f,Sa as p,Ua as o,Ub as a,Va as m,Vb as v,Wb as c,ia as u,pb as d,yb as n,zb as r}from"./chunk-VVGJ5PLE.js";var P=(()=>{class l{route;router;countryService;sanitizer;country={name:"",population:0,area:0,continent:b.Africa,gdp:0,image:""};constructor(i,t,e,s){this.route=i,this.router=t,this.countryService=e,this.sanitizer=s}ngOnInit(){let i=this.route.snapshot.paramMap.get("id");if(i){let t=this.countryService.getCountry(i);t?this.country=t:this.router.navigate(["/countries"])}}getSafeImageUrl(i){let t=`${I.apiUrl}/uploads/${i}`;return this.sanitizer.bypassSecurityTrustUrl(t)}goBack(){this.router.navigate(["/countries"])}static \u0275fac=function(t){return new(t||l)(m(S),m(C),m(z),m(h))};static \u0275cmp=u({type:l,selectors:[["app-country-details"]],decls:17,vars:7,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-md-8"],[1,"col-md-4"],[1,"img-fluid","zoomable-image",3,"src","alt"],[1,"btn","btn-primary","mt-3",3,"click"]],template:function(t,e){t&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2"),a(4),r(),n(5,"p"),a(6),r(),n(7,"p"),a(8),r(),n(9,"p"),a(10),r(),n(11,"p"),a(12),r()(),n(13,"div",3),g(14,"img",4),r()(),n(15,"button",5),y("click",function(){return e.goBack()}),a(16,"Retour"),r()()),t&2&&(o(4),v(e.country.name),o(2),c("Population: ",e.country.population,""),o(2),c("Superficie: ",e.country.area,""),o(2),c("Continent: ",e.country.continent,""),o(2),c("Produit int\xE9rieur brut: ",e.country.gdp,""),o(2),f("alt",e.country.name),d("src",e.getSafeImageUrl(e.country.image),p))},styles:[".zoomable-image[_ngcontent-%COMP%]{max-width:100%;max-height:100%;width:100%;height:100%;transition:transform .3s ease}.zoomable-image[_ngcontent-%COMP%]:hover{transform:scale(1.2)}  .modal-header{padding:1rem;background-color:#f0f0f0}  .modal-body{padding:1rem}"]})}return l})();export{P as a};
