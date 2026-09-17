
const prices=[
 {name:"Paracetamol / Acetaminophen",cat:"Pain Relief",price:"Check local listing",slug:"paracetamol-price-guide"},
 {name:"Vitamin C Products",cat:"Vitamins",price:"Compare sellers",slug:"vitamin-c-price-guide"},
 {name:"Oral Rehydration Salts (ORS)",cat:"Hydration",price:"Compare sellers",slug:"ors-price-guide"},
 {name:"Antiseptic Products",cat:"First Aid",price:"Compare sellers",slug:"antiseptic-price-guide"}
];
const q=document.querySelector("#siteSearch");
const results=document.querySelector("#searchResults");
if(q){
 q.addEventListener("input",()=>{
   const term=q.value.toLowerCase().trim();
   if(!term){results.innerHTML="";return}
   const hits=prices.filter(x=>(x.name+" "+x.cat).toLowerCase().includes(term));
   results.innerHTML=hits.length?hits.map(x=>`<a class="card" href="/${x.slug}.html"><span class="tag">${x.cat}</span><h3>${x.name}</h3><p>${x.price}</p></a>`).join(""):`<div class="notice">No matching guide found yet. Try another product or health topic.</div>`;
 });
}
