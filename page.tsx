import {supabase} from "@/lib/supabase";
import AddToCart from "@/components/AddToCart";

export default async function Home(){
  let products:any[]=[];
  try{
    const {data}=await supabase().from("products").select("id,name,category,selling_price,image_emoji,rating").eq("active",true).order("created_at",{ascending:false});
    products=data||[];
  }catch{}
  return <><div className="top">🚚 Welcome to VivekKart • Demo store</div>
  <nav className="nav"><div className="logo">VivekKart</div><input className="search" placeholder="Search products..." /><button className="cart">🛒 Cart</button></nav>
  <main className="wrap"><section className="hero"><h1>Smart Shopping, Better Prices</h1><p className="muted">Quality products at prices set by VivekKart.</p></section>
  <h2>Trending Products</h2><div className="grid">{products.length?products.map(p=><article className="card" key={p.id}><div className="pic">{p.image_emoji||"🛍️"}</div><h3>{p.name}</h3><div>⭐ {p.rating||"New"}</div><p className="price">₹{p.selling_price}</p><AddToCart id={p.id}/></article>):<p className="muted">No products yet. Add products from the admin panel.</p>}</div></main></>}
