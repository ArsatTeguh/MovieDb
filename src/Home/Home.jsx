import '../Component/Mains/Responsive/ResponsHome.css'
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="bapak">
        <div className="containers"> 
          <div className="container-bg">
            <div className="bg">
              <h1>Film, acara TV tak <br/> terbatas, dan lebih banyak  <br/> lagi.</h1>
              <h4>Tonton di mana pun. Batalkan kapan pun.</h4>
              <p>
                Siap menonton? Mauskan email untuk membuat atau memulai lagi
                keanggotaan.
              </p>
            </div>
            <div className="search">
              <input className="input-email" type="text" placeholder='Masukan Email'/>
              <button className="btn-email" >Mulai</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
