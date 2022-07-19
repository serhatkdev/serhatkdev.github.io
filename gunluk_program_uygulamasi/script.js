const tarihSec = document.querySelector('#tarih-sec');
const tarihSecBtn = document.querySelector('#tarih-sec-btn');


// Sayfa ilk açıldığında veya yenilediğinde o günün programını ekleyecek
const formatYmd = date => date.toISOString().slice(0, 10);
const guncelTarih = formatYmd(new Date());
window.onload = function () {
    tarihSec.value = guncelTarih;
    tarihSecBtn.click();
    gorevleriGosterGizle();
};

document.addEventListener('DOMContentLoaded', localStoragOku)

const gorevDiv = document.querySelectorAll('.gorev-div');

const tarihDuzenle = document.querySelector('#tarih-duzenle');
const tarihDuzenleBtn = document.querySelector('#tarih-duzenle-btn');

const kacinciMadde = document.querySelector('#kacinci-madde');

const gorev1 = document.querySelector('#gorev-1');
const gorev2 = document.querySelector('#gorev-2');
const gorev3 = document.querySelector('#gorev-3');
const gorev4 = document.querySelector('#gorev-4');
const gorev5 = document.querySelector('#gorev-5');
const gorev6 = document.querySelector('#gorev-6');
const gorev7 = document.querySelector('#gorev-7');
const gorev8 = document.querySelector('#gorev-8');
const gorev9 = document.querySelector('#gorev-9');
const gorev10 = document.querySelector('#gorev-10');
const gorev11 = document.querySelector('#gorev-11');
const gorev12 = document.querySelector('#gorev-12');
const gorev13 = document.querySelector('#gorev-13');
const gorev14 = document.querySelector('#gorev-14');
const gorev15 = document.querySelector('#gorev-15');
const gorev16 = document.querySelector('#gorev-16');
const gorev17 = document.querySelector('#gorev-17');
const gorev18 = document.querySelector('#gorev-18');
const gorev19 = document.querySelector('#gorev-19');
const gorev20 = document.querySelector('#gorev-20');


const yapilacakMetin1 = document.querySelector('#yapilacak-metin1');
const yapilacakMetin2 = document.querySelector('#yapilacak-metin2');
const yapilacakMetin3 = document.querySelector('#yapilacak-metin3');
const yapilacakMetin4 = document.querySelector('#yapilacak-metin4');
const yapilacakMetin5 = document.querySelector('#yapilacak-metin5');
const yapilacakMetin6 = document.querySelector('#yapilacak-metin6');
const yapilacakMetin7 = document.querySelector('#yapilacak-metin7');
const yapilacakMetin8 = document.querySelector('#yapilacak-metin8');
const yapilacakMetin9 = document.querySelector('#yapilacak-metin9');
const yapilacakMetin10 = document.querySelector('#yapilacak-metin10');
const yapilacakMetin11 = document.querySelector('#yapilacak-metin11');
const yapilacakMetin12 = document.querySelector('#yapilacak-metin12');
const yapilacakMetin13 = document.querySelector('#yapilacak-metin13');
const yapilacakMetin14 = document.querySelector('#yapilacak-metin14');
const yapilacakMetin15 = document.querySelector('#yapilacak-metin15');
const yapilacakMetin16 = document.querySelector('#yapilacak-metin16');
const yapilacakMetin17 = document.querySelector('#yapilacak-metin17');
const yapilacakMetin18 = document.querySelector('#yapilacak-metin18');
const yapilacakMetin19 = document.querySelector('#yapilacak-metin19');
const yapilacakMetin20 = document.querySelector('#yapilacak-metin20');

const yapilacak1 = document.querySelector('#yapilacak1');
const yapilacak2 = document.querySelector('#yapilacak2');
const yapilacak3 = document.querySelector('#yapilacak3');
const yapilacak4 = document.querySelector('#yapilacak4');
const yapilacak5 = document.querySelector('#yapilacak5');
const yapilacak6 = document.querySelector('#yapilacak6');
const yapilacak7 = document.querySelector('#yapilacak7');
const yapilacak8 = document.querySelector('#yapilacak8');
const yapilacak9 = document.querySelector('#yapilacak9');
const yapilacak10 = document.querySelector('#yapilacak10');
const yapilacak11 = document.querySelector('#yapilacak11');
const yapilacak12 = document.querySelector('#yapilacak12');
const yapilacak13 = document.querySelector('#yapilacak13');
const yapilacak14 = document.querySelector('#yapilacak14');
const yapilacak15 = document.querySelector('#yapilacak15');
const yapilacak16 = document.querySelector('#yapilacak16');
const yapilacak17 = document.querySelector('#yapilacak17');
const yapilacak18 = document.querySelector('#yapilacak18');
const yapilacak19 = document.querySelector('#yapilacak19');
const yapilacak20 = document.querySelector('#yapilacak20');

const yapilacakListesi = document.querySelectorAll('.p-yapilacak');

const yapilacakDivler = document.querySelectorAll('.yapilacak-div');
const kacTaneGorevOlsun = document.querySelector('#kac-tane-gorev-olsun');
const kacTaneGorevOlsunBtn = document.querySelector('#kac-tane-gorev-olsun-btn');

const enFazla20GorevP = document.querySelector('#en-fazla-20-gorev-p');

const gosterGizle = document.querySelector('#goster-gizle');
const istatistikler = document.querySelector('#istatistikler');

// let prev;

// const change = (i) => {

//     if (prev === undefined) prev = i;

//     const next = i;

//     if (prev < next) console.log("increase");

//     if (prev > next) console.log("decrease");

//     prev = next;
// };


//kaç tane görev olsun kodları
kacTaneGorevOlsun.addEventListener('input', (e) => {


    kacTaneGorevEklesin(kacTaneGorevOlsun.value);

    if (kacTaneGorevOlsun.value > 20) {
        enFazla20GorevP.textContent = "En Fazla 20 Görev Ekleybilirsiniz!"
        enFazla20GorevP.classList.add('text-danger', 'animate__animated', 'animate__shakeX')
        kacTaneGorevEklesin('20');
        kacTaneGorevOlsun.value = 20;
    } else {
        enFazla20GorevP.textContent = ""
    }

    enFazla20GorevP.addEventListener('animationend', () => {
        enFazla20GorevP.classList.remove('animate__animated', 'animate__shakeX')
        uyariyiSil();
    });


    const gorevlerObject = JSON.parse(localStorage.getItem(tarihDuzenle.value));

    const gorevlerArray = Object.values(gorevlerObject).reverse();
    let x = 20;

    for (let i = 0; i < 20; i++) {

        //   console.log(gorevlerArray[i]);
        x--;

        if ((gorevlerArray[i] != '') && (gorevlerArray[i] != tarihDuzenle.value)) {
            break;
        }

        //
    }
    if (kacTaneGorevOlsun.value < x + 1 && kacTaneGorevOlsun.value != '' ) {
        kacTaneGorevEklesin((x + 1).toString())
        kacTaneGorevOlsun.value = x + 1
        enFazla20GorevP.innerHTML = "Daha az görev eklemek isterseniz, <br> ilk önce en sondaki görevi silip kaydedin!";
        enFazla20GorevP.classList.add('text-danger', 'animate__animated', 'animate__shakeX');
        uyariyiSil();

    }
    e.preventDefault();
})



// yapilacakDivler.forEach(function (yapilacakDiv) {

tarihDuzenle.addEventListener('change', (e) => {


    const gorevlerObject = JSON.parse(localStorage.getItem(tarihDuzenle.value));

    const gorevlerArray = Object.values(gorevlerObject).reverse();
    let x = 20;

    for (let i = 0; i < 20; i++) {

        //   console.log(gorevlerArray[i]);
        x--;

        if ((gorevlerArray[i] != '') && (gorevlerArray[i] != tarihDuzenle.value)) {
            console.log(gorevlerArray[i] + " kod çalıştı");
            break;
        }
        kacTaneGorevEklesin((x).toString())
        kacTaneGorevOlsun.value = x
    }



})




// });



let yapilacaklar = [];
let yildizlilar = [];

// tarih seçildiğinde görevleri getiren kodlar
tarihSecBtn.addEventListener('click', (e) => {


    // console.log(JSON.parse(localStorage.getItem(tarihSec.value)).tarih);

    if (tarihSec.value == '') {
        alert("Lütfen Bir Tarih Seçin")
    } else {
        if (tarihSec.value == JSON.parse(localStorage.getItem(tarihSec.value)).tarih) {


            gorevDiv.forEach(function (gorev) {



                // console.log(JSON.parse(localStorage.getItem(tarihSec.value)).tarih);

                yapilacakMadde(gorev, JSON.parse(localStorage.getItem(tarihSec.value)))

            })


        }

    }

    yapilacakListesi.forEach(function (list) {

        if (list.innerHTML == "Yapıldı") {
            list.parentElement.children[0].style.backgroundColor = "#28a745";
        } else {
            list.parentElement.children[0].style.backgroundColor = "#007bff";
        }

    })

    gorevleriGosterGizle();

    e.preventDefault();

    istatistiklerFun();

})

function istatistiklerFun() {
    let yapildiSayisi = 0;
    let birGunOnceYapildiSayisi = 0;
    let toplamGorevSayisi = 0;
    let birGunOnceToplamGorevSayisi = 0;
    const tarihSecArray = tarihSec.value.split("-")

    tarihSecArray[2] = (tarihSecArray[2] - 1).toString();

    const birGunOnce = tarihSecArray.join('-');


    let birGunOnceArray;
    if (localStorage.getItem(birGunOnce) != null) {
        birGunOnceArray = Object.values(JSON.parse(localStorage.getItem(birGunOnce)));



        for (let i = 1; i < birGunOnceArray.length; i++) {


            if (birGunOnceArray[i] == 'Yapıldı') {
                birGunOnceYapildiSayisi++
            }

            if (birGunOnceArray[i] != '') {
                birGunOnceToplamGorevSayisi++;
            }
        }
    }


    for (let i = 0; i < yapilacakListesi.length; i++) {


        if (yapilacakListesi[i].textContent == 'Yapıldı') {
            yapildiSayisi++
        }

        if (yapilacakListesi[i].textContent != '') {
            toplamGorevSayisi++;
        }
    }

    const basariOrani = (100 / toplamGorevSayisi) * yapildiSayisi
    const birGunOnceBasariOrani = (100 / birGunOnceToplamGorevSayisi) * birGunOnceYapildiSayisi
    const degisimOrani = basariOrani - birGunOnceBasariOrani
    // console.log(degisimOrani);

    // if (localStorage.getItem(tarihSec.value) == null) {

    // }

    if (localStorage.getItem(tarihSec.value) == null && isNaN(degisimOrani)) {
        istatistikler.innerHTML = ``
    } else if (localStorage.getItem(tarihSec.value) == null) {
        istatistikler.innerHTML = ``
    } else if (isNaN(degisimOrani)) {
        istatistikler.innerHTML = `Bugünün Başarı Oranı: %${parseInt(basariOrani)}`
        console.log("çalıştı");
    } else {
        istatistikler.innerHTML = `Bugünün Başarı Oranı: %${parseInt(basariOrani)}</br>Bir Önceki Güne Göre Değişim: %${parseInt(degisimOrani)}`
    }
}


function yapilacakMadde(gorev, yapilacak) {

    switch (gorev.id) {
        case "gorev-1":
            gorev.children[2].textContent = yapilacak.madde1;
            break;
        case "gorev-2":
            gorev.children[2].textContent = yapilacak.madde2;
            break;
        case "gorev-3":
            gorev.children[2].textContent = yapilacak.madde3;
            break;
        case "gorev-4":
            gorev.children[2].textContent = yapilacak.madde4;
            break;
        case "gorev-5":
            gorev.children[2].textContent = yapilacak.madde5;
            break;
        case "gorev-6":
            gorev.children[2].textContent = yapilacak.madde6;
            break;
        case "gorev-7":
            gorev.children[2].textContent = yapilacak.madde7;
            break;
        case "gorev-8":
            gorev.children[2].textContent = yapilacak.madde8;
            break;
        case "gorev-9":
            gorev.children[2].textContent = yapilacak.madde9;
            break;
        case "gorev-10":
            gorev.children[2].textContent = yapilacak.madde10;
            break;
        case "gorev-11":
            gorev.children[2].textContent = yapilacak.madde11;
            break;
        case "gorev-12":
            gorev.children[2].textContent = yapilacak.madde12;
            break;
        case "gorev-13":
            gorev.children[2].textContent = yapilacak.madde13;
            break;
        case "gorev-14":
            gorev.children[2].textContent = yapilacak.madde14;
            break;
        case "gorev-15":
            gorev.children[2].textContent = yapilacak.madde15;
            break;
        case "gorev-16":
            gorev.children[2].textContent = yapilacak.madde16;
            break;
        case "gorev-17":
            gorev.children[2].textContent = yapilacak.madde17;
            break;
        case "gorev-18":
            gorev.children[2].textContent = yapilacak.madde18;
            break;
        case "gorev-19":
            gorev.children[2].textContent = yapilacak.madde19;
            break;
        case "gorev-20":
            gorev.children[2].textContent = yapilacak.madde20;
            break;
        default:
            break;
    }
}

// tarih seçteki tarih değiştirildiğinde çalışan kodlar
tarihSec.addEventListener('change', (e) => {

    if (JSON.parse(localStorage.getItem(tarihSec.value)) == null) {
        yapilacak1.textContent = "";
        yapilacak2.textContent = "";
        yapilacak3.textContent = "";
        yapilacak4.textContent = "";
        yapilacak5.textContent = "";
        yapilacak6.textContent = "";
        yapilacak7.textContent = "";
        yapilacak8.textContent = "";
        yapilacak9.textContent = "";
        yapilacak10.textContent = "";
        yapilacak11.textContent = "";
        yapilacak12.textContent = "";
        yapilacak13.textContent = "";
        yapilacak14.textContent = "";
        yapilacak15.textContent = "";
        yapilacak16.textContent = "";
        yapilacak17.textContent = "";
        yapilacak18.textContent = "";
        yapilacak19.textContent = "";
        yapilacak20.textContent = "";
    } else {
        yapilacak1.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde1;
        yapilacak2.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde2;
        yapilacak3.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde3;
        yapilacak4.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde4;
        yapilacak5.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde5;
        yapilacak6.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde6;
        yapilacak7.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde7;
        yapilacak8.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde8;
        yapilacak9.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde9;
        yapilacak10.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde10;
        yapilacak11.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde11;
        yapilacak12.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde12;
        yapilacak13.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde13;
        yapilacak14.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde14;
        yapilacak15.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde15;
        yapilacak16.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde16;
        yapilacak17.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde17;
        yapilacak18.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde18;
        yapilacak19.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde19;
        yapilacak20.textContent = JSON.parse(localStorage.getItem(tarihSec.value)).madde20;
    }

    yapilacakListesi.forEach(function (list) {

        if (list.innerHTML == "Yapıldı") {
            list.parentElement.children[0].style.backgroundColor = "#28a745";
        } else {
            list.parentElement.children[0].style.backgroundColor = "#007bff";
        }

    });

    gorevleriGosterGizle();

    istatistiklerFun();

    e.preventDefault();


})

const gorevleriGosterGizle = function () {
    const gorevlerGG = JSON.parse(localStorage.getItem(tarihSec.value));
    if (gorevlerGG != null) {
        const gorevlerGGArray = Object.values(gorevlerGG).reverse();
        // console.log(gorevlerGGArray);

        let x = 20;

        for (let i = 0; i < 20; i++) {

            //   console.log(gorevlerArray[i]);
            x--;

            if ((gorevlerGGArray[i] != '') && (gorevlerGGArray[i] != tarihDuzenle.value)) {
                // console.log(gorevlerGGArray[i] + " kod çalıştı");
                break;
            }
        }

        kacTaneGorevDiviGostersin((x + 1).toString())
    } else {
        kacTaneGorevDiviGostersin('0')
    }
}


// Butona tıkladıktan sonra yapılacak görevi listeye ekler
tarihDuzenleBtn.addEventListener('click', (e) => {

    const duzenlenecekTarih = tarihDuzenle.value;

    if (tarihDuzenle.value == '') {
        alert("Lütfen Bir Tarih Seçin")
    } else if (bosGorevKaydetme()) {
    alert("Lütfen En Az Bir Görev Ekleyin!")
    } else {
        yapilacaklar.push({
            tarih: duzenlenecekTarih,
            madde1: yapilacakMetin1.value,
            madde2: yapilacakMetin2.value,
            madde3: yapilacakMetin3.value,
            madde4: yapilacakMetin4.value,
            madde5: yapilacakMetin5.value,
            madde6: yapilacakMetin6.value,
            madde7: yapilacakMetin7.value,
            madde8: yapilacakMetin8.value,
            madde9: yapilacakMetin9.value,
            madde10: yapilacakMetin10.value,
            madde11: yapilacakMetin11.value,
            madde12: yapilacakMetin12.value,
            madde13: yapilacakMetin13.value,
            madde14: yapilacakMetin14.value,
            madde15: yapilacakMetin15.value,
            madde16: yapilacakMetin16.value,
            madde17: yapilacakMetin17.value,
            madde18: yapilacakMetin18.value,
            madde19: yapilacakMetin19.value,
            madde20: yapilacakMetin20.value,
        })

        localStorage.setItem(duzenlenecekTarih, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));

        window.scroll({
            top: 1,
            behavior: 'smooth'
        });
        enFazla20GorevP.textContent = "Görevler Kaydedildi!"
        enFazla20GorevP.classList.remove('text-danger')
        enFazla20GorevP.classList.add('text-success', 'animate__animated', 'animate__rubberBand')

        enFazla20GorevP.addEventListener('animationend', () => {
            enFazla20GorevP.classList.remove('animate__animated', 'animate__rubberBand')
            uyariyiSil();
        });
    }

    // bosGorevKaydetme()
    e.preventDefault()
})


//boş görev kaydetmeye çalışırken çaluşacak kodlar
function bosGorevKaydetme() {

    let bosMu;
    let x = 0;

    yapilacakDivler.forEach(yapilacakDiv => {
        
        yapilacakDiv.children[1].value

        if (yapilacakDiv.children[1].value === '') {
            x++
        }
    })

    if (x==20) {
        return true
    }else{
        return false
    }

    // return bosMu;


}

bosGorevKaydetme()

function uyariyiSil() {
    setTimeout(() => {
        enFazla20GorevP.textContent = ""
    }, 3500);
}



// Tarih seçildiğinde yapılacakların textlerde gösterilmesi
tarihDuzenle.addEventListener('change', (e) => {

    let y = kacTaneGorevOlsun.value;

    if (JSON.parse(localStorage.getItem(tarihDuzenle.value)) == null) {
        yapilacakMetin1.value = "";
        yapilacakMetin2.value = "";
        yapilacakMetin3.value = "";
        yapilacakMetin4.value = "";
        yapilacakMetin5.value = "";
        yapilacakMetin6.value = "";
        yapilacakMetin7.value = "";
        yapilacakMetin8.value = "";
        yapilacakMetin9.value = "";
        yapilacakMetin10.value = "";
        yapilacakMetin11.value = "";
        yapilacakMetin12.value = "";
        yapilacakMetin13.value = "";
        yapilacakMetin14.value = "";
        yapilacakMetin15.value = "";
        yapilacakMetin16.value = "";
        yapilacakMetin17.value = "";
        yapilacakMetin18.value = "";
        yapilacakMetin19.value = "";
        yapilacakMetin20.value = "";
        // kacTaneGorevOlsun.value = '';

        kacTaneGorevOlsun.value = y;
        kacTaneGorevEklesin(y)


    } else {
        yapilacakMetin1.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde1;
        yapilacakMetin2.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde2;
        yapilacakMetin3.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde3;
        yapilacakMetin4.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde4;
        yapilacakMetin5.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde5;
        yapilacakMetin6.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde6;
        yapilacakMetin7.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde7;
        yapilacakMetin8.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde8;
        yapilacakMetin9.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde9;
        yapilacakMetin10.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde10;
        yapilacakMetin11.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde11;
        yapilacakMetin12.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde12;
        yapilacakMetin13.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde13;
        yapilacakMetin14.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde14;
        yapilacakMetin15.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde15;
        yapilacakMetin16.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde16;
        yapilacakMetin17.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde17;
        yapilacakMetin18.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde18;
        yapilacakMetin19.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde19;
        yapilacakMetin20.value = JSON.parse(localStorage.getItem(tarihDuzenle.value)).madde20;
    }

    if (tarihDuzenle.value === '') {

    }

    e.preventDefault();
})


const faBookmark = document.querySelector('.fa-bookmark');
const closeBtn = document.querySelector('.favoriler-close');
const favorilerBackground = document.querySelector('.favoriler-background');
const copyP = document.querySelector('.copy-p');
const favoriP = document.querySelectorAll('.favori-p');
const favorDivler = document.querySelectorAll('.favori-div');


faBookmark.addEventListener('click', (e) => {

    favorilerBackground.classList.toggle('hidden');
    localStoragOku()

    e.preventDefault();
})

closeBtn.addEventListener('click', (e) => {

    favorilerBackground.classList.add('hidden');

    e.preventDefault();
})

yapilacakDivler.forEach(function (yapilacakDiv) {


    yapilacakDiv.addEventListener('mouseover', (e) => {
        yapilacakDiv.children[2].classList.remove('hidden');
        yapilacakDiv.children[1].style.width = '290px';
    })

    yapilacakDiv.addEventListener('mouseout', (e) => {
        yapilacakDiv.children[2].classList.add('hidden');
        yapilacakDiv.children[1].style.width = '330px';
    })


    yapilacakDiv.children[2].addEventListener('click', () => {

        let favoriler;

        if (localStorage.getItem('favoriler') === null) {
            favoriler = [];
        } else {
            favoriler = JSON.parse(localStorage.getItem('favoriler'))
        }


        if (yapilacakDiv.children[1].value != '') {

            if (favoriler.length < 10) {
                favoriler.push(yapilacakDiv.children[1].value)
                localStorage.setItem('favoriler', JSON.stringify(favoriler))

                window.scroll({
                    top: 1,
                    behavior: 'smooth'
                });

                enFazla20GorevP.textContent = "Favorilere Eklendi!"
                enFazla20GorevP.classList.remove('text-danger')
                enFazla20GorevP.classList.add('text-success', 'animate__animated', 'animate__rubberBand')
                enFazla20GorevP.addEventListener('animationend', () => {
                    enFazla20GorevP.classList.remove('animate__animated', 'animate__rubberBand')
                    uyariyiSil();
                });

            } else {
                window.scroll({
                    top: 1,
                    behavior: 'smooth'
                });
                enFazla20GorevP.textContent = "En Fazla 10 Tane Görev Kopyalayabilirsiniz!"
                enFazla20GorevP.classList.add('text-danger', 'animate__animated', 'animate__shakeX');

                enFazla20GorevP.addEventListener('animationend', () => {
                    enFazla20GorevP.classList.remove('animate__animated', 'animate__shakeX')
                    uyariyiSil();
                });
            }

        }

    })

})


favorDivler.forEach(function (favoriDiv) {

    // console.log(favoriDiv.children[0].textContent);

    favoriDiv.children[2].addEventListener('click', () => {
        if (favoriDiv.children[0].textContent != '') {
            const kopyalamaikonu = favoriDiv.children[2];
            kopyalamaikonu.classList.remove('far');
            kopyalamaikonu.classList.add('fas');
            kopyalamaikonu.style.marginTop = '3px'

            setInterval(() => {
                kopyalamaikonu.classList.add('far');
                kopyalamaikonu.classList.remove('fas');
                kopyalamaikonu.style.marginTop = '0px'
            }, 300)
        }
    })

    favoriDiv.children[1].addEventListener('click', (e) => {

        let favoriler;

        if (localStorage.getItem('favoriler') === null) {
            favoriler = [];
        } else {
            favoriler = JSON.parse(localStorage.getItem('favoriler'))
        }

        if (favoriDiv.children[0].textContent != '') {
            // splice item silme
            if (confirm("Bu favori görevi silmekten emin misiniz?")) {
                const silinecekElemanİndex = favoriler.indexOf(favoriDiv.children[0].textContent);
                favoriler.splice(silinecekElemanİndex, 1);
                localStorage.setItem('favoriler', JSON.stringify(favoriler));
                localStoragOku()
            }

        }


    })

    favoriDiv.children[2].addEventListener('click', () => {
        console.log(favoriDiv.children[0].textContent);

        navigator.clipboard.writeText(favoriDiv.children[0].textContent);
    })

})



function localStoragOku() {

    let favoriler;
    if (localStorage.getItem('favoriler') === null) {
        favoriler = [];
    } else {
        favoriler = JSON.parse(localStorage.getItem('favoriler'))
    }

    // favoriP.forEach(function (favori) {

    //     favori.te

    // })

    for (let i = 0; i < favoriP.length; i++) {
        const element = favoriP[i];
        element.textContent = favoriler[i];
    }
}


// İstatistikler İçin Kodlar

gosterGizle.addEventListener('click', (e) => {

    istatistikler.classList.toggle('hidden');
    istatistikler.classList.add('acilma-animasyonu')

    if (istatistikler.classList.contains('hidden')) {
        gosterGizle.textContent = 'Göster'
    } else {
        gosterGizle.textContent = 'Gizle'
    }

})


//duzenle için kodlar
gorevDiv.forEach(function (duzenle) {

    const duzenlebtn = duzenle.children[3];
    const kacinciGorev = parseInt(duzenle.children[1].textContent);

    duzenlebtn.addEventListener('click', (e) => {
        const secilenGorev = JSON.parse(localStorage.getItem(tarihSec.value));
        secilenGorevArray = Object.keys(secilenGorev);
        gorevValueleri = Object.values(secilenGorev);
        const kacinciMadde = gorevValueleri[kacinciGorev]
        console.log(kacinciMadde);

        // const yeniValue = prompt("Seçilen Görevi Düzenle",kacinciMadde);

        if (duzenle.children[2].textContent == "") {
            alert("Bu görev oluşturulmamış. Lütfen görev oluşturun!")
        } else if (duzenle.children[2].textContent == "Yapıldı") {
            alert('Bu görevi yaptığınız için buradan düzenleyemezsiniz! Düzenleme işlemini "Görev Oluştur/Düzenle" bölümünden yapabilirsiniz.')
        } else {
            const yeniValue = prompt("Seçilen Görevi Düzenle", kacinciMadde);
            if (duzenle.id == "gorev-1") {
                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yeniValue,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));;
                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-2") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yeniValue,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-3") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yeniValue,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-4") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yeniValue,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-5") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yeniValue,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-6") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yeniValue,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-7") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yeniValue,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-8") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yeniValue,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-9") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yeniValue,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-10") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yeniValue,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-11") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yeniValue,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-12") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yeniValue,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-13") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yeniValue,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-14") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yeniValue,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-15") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yeniValue,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-16") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yeniValue,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-17") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yeniValue,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-18") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yeniValue,
                    madde19: yapilacak19.textContent,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-19") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yeniValue,
                    madde20: yapilacak20.textContent,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            } else if (duzenle.id == "gorev-20") {

                yapilacaklar.push({
                    tarih: tarihSec.value,
                    madde1: yapilacak1.textContent,
                    madde2: yapilacak2.textContent,
                    madde3: yapilacak3.textContent,
                    madde4: yapilacak4.textContent,
                    madde5: yapilacak5.textContent,
                    madde6: yapilacak6.textContent,
                    madde7: yapilacak7.textContent,
                    madde8: yapilacak8.textContent,
                    madde9: yapilacak9.textContent,
                    madde10: yapilacak10.textContent,
                    madde11: yapilacak11.textContent,
                    madde12: yapilacak12.textContent,
                    madde13: yapilacak13.textContent,
                    madde14: yapilacak14.textContent,
                    madde15: yapilacak15.textContent,
                    madde16: yapilacak16.textContent,
                    madde17: yapilacak17.textContent,
                    madde18: yapilacak18.textContent,
                    madde19: yapilacak19.textContent,
                    madde20: yeniValue,
                })
                localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                duzenle.children[0].style.backgroundColor = "#28a745";

                tarihSecBtn.click();
            }
        }


    })

})


//yapıldı butonu için kodlar    
gorevDiv.forEach(function (button) {

    // console.log(button.children[2].textContent);
    button.children[0].addEventListener('click', (e) => {

        if (button.children[2].textContent == "") {
            alert("Bu görev oluşturulmamış. Lütfen görev oluşturun!")
        } else if (button.children[2].textContent == "Yapıldı") {
            alert('Bu görevi zaten yapmışsınız. Eğer bu görevi düzenlemek isterseniz "Görev/Oluştur Düzenle" kısmından düzenleyebilirsiniz.')
        } else {
            if (button.id == "gorev-1") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: "Yapıldı",
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-2") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: "Yapıldı",
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-3") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: "Yapıldı",
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-4") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: "Yapıldı",
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-5") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: "Yapıldı",
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-6") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: "Yapıldı",
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-7") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: "Yapıldı",
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-8") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: "Yapıldı",
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-9") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: "Yapıldı",
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-10") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: "Yapıldı",
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-11") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: "Yapıldı",
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-12") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: "Yapıldı",
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-13") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: "Yapıldı",
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-14") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: "Yapıldı",
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-15") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: "Yapıldı",
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-16") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: "Yapıldı",
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-17") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: "Yapıldı",
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-18") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: "Yapıldı",
                        madde19: yapilacak19.textContent,
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-19") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: "Yapıldı",
                        madde20: yapilacak20.textContent,
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            } else if (button.id == "gorev-20") {
                if (confirm('Bu görev yapıldı mı? (Bu seçimi daha sonra geri alamazsınız!)')) {
                    yapilacaklar.push({
                        tarih: tarihSec.value,
                        madde1: yapilacak1.textContent,
                        madde2: yapilacak2.textContent,
                        madde3: yapilacak3.textContent,
                        madde4: yapilacak4.textContent,
                        madde5: yapilacak5.textContent,
                        madde6: yapilacak6.textContent,
                        madde7: yapilacak7.textContent,
                        madde8: yapilacak8.textContent,
                        madde9: yapilacak9.textContent,
                        madde10: yapilacak10.textContent,
                        madde11: yapilacak11.textContent,
                        madde12: yapilacak12.textContent,
                        madde13: yapilacak13.textContent,
                        madde14: yapilacak14.textContent,
                        madde15: yapilacak15.textContent,
                        madde16: yapilacak16.textContent,
                        madde17: yapilacak17.textContent,
                        madde18: yapilacak18.textContent,
                        madde19: yapilacak19.textContent,
                        madde20: "Yapıldı",
                    })
                    localStorage.setItem(tarihSec.value, JSON.stringify(yapilacaklar[yapilacaklar.length - 1]));
                    button.children[0].style.backgroundColor = "#28a745";
                };
                tarihSecBtn.click();
            }
        }

        e.preventDefault()
    })

})



// kaç tane görev ekleme seçeneği kodları

function kacTaneGorevEklesin(gorevSayisi) {

    switch (gorevSayisi) {
        case "1":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.add('hidden');
            yapilacakMetin3.parentElement.classList.add('hidden');
            yapilacakMetin4.parentElement.classList.add('hidden');
            yapilacakMetin5.parentElement.classList.add('hidden');
            yapilacakMetin6.parentElement.classList.add('hidden');
            yapilacakMetin7.parentElement.classList.add('hidden');
            yapilacakMetin8.parentElement.classList.add('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "2":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.add('hidden');
            yapilacakMetin4.parentElement.classList.add('hidden');
            yapilacakMetin5.parentElement.classList.add('hidden');
            yapilacakMetin6.parentElement.classList.add('hidden');
            yapilacakMetin7.parentElement.classList.add('hidden');
            yapilacakMetin8.parentElement.classList.add('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "3":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.add('hidden');
            yapilacakMetin5.parentElement.classList.add('hidden');
            yapilacakMetin6.parentElement.classList.add('hidden');
            yapilacakMetin7.parentElement.classList.add('hidden');
            yapilacakMetin8.parentElement.classList.add('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "4":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.add('hidden');
            yapilacakMetin6.parentElement.classList.add('hidden');
            yapilacakMetin7.parentElement.classList.add('hidden');
            yapilacakMetin8.parentElement.classList.add('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "5":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.add('hidden');
            yapilacakMetin7.parentElement.classList.add('hidden');
            yapilacakMetin8.parentElement.classList.add('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "6":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.add('hidden');
            yapilacakMetin8.parentElement.classList.add('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "7":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.add('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "8":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "9":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "10":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "11":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "12":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "13":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.remove('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "14":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.remove('hidden');
            yapilacakMetin14.parentElement.classList.remove('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "15":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.remove('hidden');
            yapilacakMetin14.parentElement.classList.remove('hidden');
            yapilacakMetin15.parentElement.classList.remove('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "16":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.remove('hidden');
            yapilacakMetin14.parentElement.classList.remove('hidden');
            yapilacakMetin15.parentElement.classList.remove('hidden');
            yapilacakMetin16.parentElement.classList.remove('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "17":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.remove('hidden');
            yapilacakMetin14.parentElement.classList.remove('hidden');
            yapilacakMetin15.parentElement.classList.remove('hidden');
            yapilacakMetin16.parentElement.classList.remove('hidden');
            yapilacakMetin17.parentElement.classList.remove('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "18":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.remove('hidden');
            yapilacakMetin14.parentElement.classList.remove('hidden');
            yapilacakMetin15.parentElement.classList.remove('hidden');
            yapilacakMetin16.parentElement.classList.remove('hidden');
            yapilacakMetin17.parentElement.classList.remove('hidden');
            yapilacakMetin18.parentElement.classList.remove('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "19":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.remove('hidden');
            yapilacakMetin14.parentElement.classList.remove('hidden');
            yapilacakMetin15.parentElement.classList.remove('hidden');
            yapilacakMetin16.parentElement.classList.remove('hidden');
            yapilacakMetin17.parentElement.classList.remove('hidden');
            yapilacakMetin18.parentElement.classList.remove('hidden');
            yapilacakMetin19.parentElement.classList.remove('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
        case "20":
            yapilacakMetin1.parentElement.classList.remove('hidden');
            yapilacakMetin2.parentElement.classList.remove('hidden');
            yapilacakMetin3.parentElement.classList.remove('hidden');
            yapilacakMetin4.parentElement.classList.remove('hidden');
            yapilacakMetin5.parentElement.classList.remove('hidden');
            yapilacakMetin6.parentElement.classList.remove('hidden');
            yapilacakMetin7.parentElement.classList.remove('hidden');
            yapilacakMetin8.parentElement.classList.remove('hidden');
            yapilacakMetin9.parentElement.classList.remove('hidden');
            yapilacakMetin10.parentElement.classList.remove('hidden');
            yapilacakMetin11.parentElement.classList.remove('hidden');
            yapilacakMetin12.parentElement.classList.remove('hidden');
            yapilacakMetin13.parentElement.classList.remove('hidden');
            yapilacakMetin14.parentElement.classList.remove('hidden');
            yapilacakMetin15.parentElement.classList.remove('hidden');
            yapilacakMetin16.parentElement.classList.remove('hidden');
            yapilacakMetin17.parentElement.classList.remove('hidden');
            yapilacakMetin18.parentElement.classList.remove('hidden');
            yapilacakMetin19.parentElement.classList.remove('hidden');
            yapilacakMetin20.parentElement.classList.remove('hidden');
            break;
        default:
            yapilacakMetin1.parentElement.classList.add('hidden');
            yapilacakMetin2.parentElement.classList.add('hidden');
            yapilacakMetin3.parentElement.classList.add('hidden');
            yapilacakMetin4.parentElement.classList.add('hidden');
            yapilacakMetin5.parentElement.classList.add('hidden');
            yapilacakMetin6.parentElement.classList.add('hidden');
            yapilacakMetin7.parentElement.classList.add('hidden');
            yapilacakMetin8.parentElement.classList.add('hidden');
            yapilacakMetin9.parentElement.classList.add('hidden');
            yapilacakMetin10.parentElement.classList.add('hidden');
            yapilacakMetin11.parentElement.classList.add('hidden');
            yapilacakMetin12.parentElement.classList.add('hidden');
            yapilacakMetin13.parentElement.classList.add('hidden');
            yapilacakMetin14.parentElement.classList.add('hidden');
            yapilacakMetin15.parentElement.classList.add('hidden');
            yapilacakMetin16.parentElement.classList.add('hidden');
            yapilacakMetin17.parentElement.classList.add('hidden');
            yapilacakMetin18.parentElement.classList.add('hidden');
            yapilacakMetin19.parentElement.classList.add('hidden');
            yapilacakMetin20.parentElement.classList.add('hidden');
            break;
    }
}


// kaç tan gorev divi göstersin kodlar
function kacTaneGorevDiviGostersin(gorevSayisi) {

    switch (gorevSayisi) {
        case "1":
            gorev1.classList.remove('hidden');
            gorev2.classList.add('hidden');
            gorev3.classList.add('hidden');
            gorev4.classList.add('hidden');
            gorev5.classList.add('hidden');
            gorev6.classList.add('hidden');
            gorev7.classList.add('hidden');
            gorev8.classList.add('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "2":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.add('hidden');
            gorev4.classList.add('hidden');
            gorev5.classList.add('hidden');
            gorev6.classList.add('hidden');
            gorev7.classList.add('hidden');
            gorev8.classList.add('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "3":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.add('hidden');
            gorev5.classList.add('hidden');
            gorev6.classList.add('hidden');
            gorev7.classList.add('hidden');
            gorev8.classList.add('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "4":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.add('hidden');
            gorev6.classList.add('hidden');
            gorev7.classList.add('hidden');
            gorev8.classList.add('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "5":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.add('hidden');
            gorev7.classList.add('hidden');
            gorev8.classList.add('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "6":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.add('hidden');
            gorev8.classList.add('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "7":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.add('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "8":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "9":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "10":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "11":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "12":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "13":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.remove('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "14":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.remove('hidden');
            gorev14.classList.remove('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "15":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.remove('hidden');
            gorev14.classList.remove('hidden');
            gorev15.classList.remove('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "16":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.remove('hidden');
            gorev14.classList.remove('hidden');
            gorev15.classList.remove('hidden');
            gorev16.classList.remove('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "17":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.remove('hidden');
            gorev14.classList.remove('hidden');
            gorev15.classList.remove('hidden');
            gorev16.classList.remove('hidden');
            gorev17.classList.remove('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "18":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.remove('hidden');
            gorev14.classList.remove('hidden');
            gorev15.classList.remove('hidden');
            gorev16.classList.remove('hidden');
            gorev17.classList.remove('hidden');
            gorev18.classList.remove('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
        case "19":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.remove('hidden');
            gorev14.classList.remove('hidden');
            gorev15.classList.remove('hidden');
            gorev16.classList.remove('hidden');
            gorev17.classList.remove('hidden');
            gorev18.classList.remove('hidden');
            gorev19.classList.remove('hidden');
            gorev20.classList.add('hidden');
            break;
        case "20":
            gorev1.classList.remove('hidden');
            gorev2.classList.remove('hidden');
            gorev3.classList.remove('hidden');
            gorev4.classList.remove('hidden');
            gorev5.classList.remove('hidden');
            gorev6.classList.remove('hidden');
            gorev7.classList.remove('hidden');
            gorev8.classList.remove('hidden');
            gorev9.classList.remove('hidden');
            gorev10.classList.remove('hidden');
            gorev11.classList.remove('hidden');
            gorev12.classList.remove('hidden');
            gorev13.classList.remove('hidden');
            gorev14.classList.remove('hidden');
            gorev15.classList.remove('hidden');
            gorev16.classList.remove('hidden');
            gorev17.classList.remove('hidden');
            gorev18.classList.remove('hidden');
            gorev19.classList.remove('hidden');
            gorev20.classList.remove('hidden');
            break;
        default:
            gorev1.classList.add('hidden');
            gorev2.classList.add('hidden');
            gorev3.classList.add('hidden');
            gorev4.classList.add('hidden');
            gorev5.classList.add('hidden');
            gorev6.classList.add('hidden');
            gorev7.classList.add('hidden');
            gorev8.classList.add('hidden');
            gorev9.classList.add('hidden');
            gorev10.classList.add('hidden');
            gorev11.classList.add('hidden');
            gorev12.classList.add('hidden');
            gorev13.classList.add('hidden');
            gorev14.classList.add('hidden');
            gorev15.classList.add('hidden');
            gorev16.classList.add('hidden');
            gorev17.classList.add('hidden');
            gorev18.classList.add('hidden');
            gorev19.classList.add('hidden');
            gorev20.classList.add('hidden');
            break;
    }
}