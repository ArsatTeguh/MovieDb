import React from "react";
import "./Main5.css";
import './Responsive/Responsive5.css'
import { Container } from "react-bootstrap";
import Buttons from "../Util/Button";

const Main5 = () => {
  return (
    <>
      <div className="bapak-main5">
        <Container>
          <div className="content-main5">
            <div className="text-main5">
              <h4>Tanya Jawab Umum</h4>
            </div>

            <div className="btn-mains5">
              <Buttons
                judul="Apa itu KonFlix?"
                jawaban="  Netflix adalah layanan streaming yang menawarkan berbagai acara TV pemenang penghargaan, film, anime, dokumenter, dan banyak lagi di
                ribuan perangkat yang terhubung ke Internet. Kamu bisa menonton
                sepuasnya, kapan pun kamu mau, tanpa satu iklan pun – semuanya dengan
                satu harga bulanan yang murah. Selalu ada tontonan baru dan acara TV
                serta film baru yang ditambahkan setiap minggu!"
              />
              <Buttons
                judul="Berapa biaya berlangganan KonFlix?"
                jawaban="Tonton Netflix di smartphone, tablet, Smart TV, laptop, atau perangkat streaming-mu, semuanya dengan satu harga bulanan tetap Rentang harga mulai dari Rp54.000 hingga Rp186.000 per bulan. Tanpa biaya ekstra, tanpa kontrak."
              />
              <Buttons
                judul="Di mana saya bisa menonton?"
                jawaban="Tonton di mana pun, kapan pun. Masuk ke akun Netflix-mu untuk menonton langsung di netflix.com dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi Netflix, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.

              Kamu juga bisa men-download acara favoritmu dengan aplikasi iOS, Android, atau Windows 10. Gunakan download untuk menonton saat kamu di perjalanan dan tidak punya koneksi Internet. Bawa Netflix ke mana saja."
              />
              <Buttons
                judul="Bagaimana cara membatalkanya?"
                jawaban="Netflix fleksibel. Tanpa kontrak menyebalkan dan tanpa komitmen. Kamu dapat dengan mudah membatalkan akunmu secara online dengan dua kali klik. Tanpa biaya pembatalan – mulai atau hentikan akunmu kapan pun."
              />
              <Buttons
                judul="Apa yang bisa ditonton di KonFlix?"
                jawaban="Netflix memiliki pustaka lengkap yang berisi film panjang, film dokumenter, acara TV, anime, Netflix original pemenang penghargaan, dan lebih banyak lagi. Tonton sepuasnya, kapan pun kamu mau."
              />
              <Buttons
                judul="Apa KonFlix sesuai untuk anak-anak?"
                jawaban="Pengalaman Netflix Anak disertakan dalam keanggotaan agar kamu punya kontrol orang tua saat anak-anak menikmati acara TV dan film untuk keluarga di rumah.

              Profil anak dilengkapi kontrol orang tua yang dilindungi PIN sehingga kamu bisa membatasi rating usia konten yang bisa ditonton anak dan memblokir judul tertentu yang tidak boleh ditonton anak-anak."
              />
            </div>

            <div className="inputs-main5">
              <p>
                Siap menonton? masukan email untuk membuat atau memulai lagi
                keanggotaanmu.
              </p>
              <input
                className="input-main5"
                type="text"
                placeholder="Alamat Email"
              />
              <button className="btn-input-main5">Mulai > </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main5;
