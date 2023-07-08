function activatetab(evt, tabName) {
    var i, card, tab;
    card = document.getElementsByClassName("card");
    for (i = 0; i < card.length; i++) {
      card[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" enabled", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " enabled";
}
