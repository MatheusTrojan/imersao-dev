var listaFilmes = ["https://play-lh.googleusercontent.com/em2griqrHoxmxEss_WM5Fi2iqSEKrEfLNAltjX54lREOR0nz0du__KuSi2bA_YNjS4w", "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/d20b35b9c0734c429b652bd0280158a8c7c0dfa1a4c2254d0312eacf4c902c32._RI_V_TTW_.jpg", "https://kbimages1-a.akamaihd.net/538b1473-6d45-47f4-b16e-32a0a6ba7f9a/1200/1200/False/star-wars-episode-iv-a-new-hope-3.jpg"]

// push adiciona items na lista
listaFilmes.push("https://images-na.ssl-images-amazon.com/images/S/pv-target-images/cf612039123df81f21a44121b8a229f1f9088947b7a4bebeae4ee2467fa82ad1._RI_V_TTW_.jpg");

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
};

