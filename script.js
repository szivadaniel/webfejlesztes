document.getElementById("gomb").addEventListener("click", pont);
function pont()
{
    let osszpontszam=0;

    const helyesvalasz1 = document.getElementById("helyes1").checked;
    const helytelenvalasz2 = document.getElementById("helytelen1/1").checked;
    const helytelenvalasz3 = document.getElementById("helytelen1/2").checked;
    const helytelenvalasz4 = document.getElementById("helytelen1/3").checked;

    if(helyesvalasz1==1)
    {
        osszpontszam=osszpontszam+1;
    }

    const helyesvalasz2 = document.getElementById("helyes2").checked;
    const helytelenvalasz5 = document.getElementById("helytelen2/1").checked;
    const helytelenvalasz6 = document.getElementById("helytelen2/2").checked;
    const helytelenvalasz7 = document.getElementById("helytelen2/3").checked;

    if(helyesvalasz2==1)
    {
        osszpontszam=osszpontszam+1;
    }
    
    const helytelenvalasz8 = document.getElementById("helytelen3/1").checked;
    const helytelenvalasz9 = document.getElementById("helytelen3/2").checked;
    const helytelenvalasz10 = document.getElementById("helytelen3/3").checked;
    const helyesvalasz3 = document.getElementById("helyes3").checked;
    
    if(helyesvalasz3==1)
        {
            osszpontszam=osszpontszam+1;
        }

    const nyertJatszma = document.getElementById("nyert_jatszma").value;
    if (parseInt(nyertJatszma) == 3) 
    {
        osszpontszam = osszpontszam+1;
    }

    const helytelenvalasz11 = document.getElementById("helytelen5/1").checked;
    const helytelenvalasz12 = document.getElementById("helytelen5/2").checked;
    const helyesvalasz4 = document.getElementById("helyes5").checked;
    const helytelenvalasz13 = document.getElementById("helytelen5/3").checked;

    if(helyesvalasz4==1)
        {
            osszpontszam=osszpontszam+1;
        }

    const helytelenvalasz14 = document.getElementById("helytelen6/1").checked;
    const helyesvalasz5 = document.getElementById("helyes6").checked;
    const helytelenvalasz15 = document.getElementById("helytelen6/2").checked;
    const helytelenvalasz16 = document.getElementById("helytelen6/3").checked;

    if(helyesvalasz5==1)
        {
            osszpontszam=osszpontszam+1;
        }

    const helytelenvalasz17 = document.getElementById("helytelen7/1").checked;
    const helyesvalasz6 = document.getElementById("helyes7").checked;
    const helytelenvalasz18 = document.getElementById("helytelen7/2").checked;
    const helytelenvalasz19 = document.getElementById("helytelen7/3").checked;
    
    if(helyesvalasz6==1)
        {
            osszpontszam=osszpontszam+1;
        }
    
    const helyesvalasz7 = document.getElementById("helyes8").checked;
    const helytelenvalasz20 = document.getElementById("helytelen8/1").checked;
    const helytelenvalasz21 = document.getElementById("helytelen8/2").checked;
    const helytelenvalasz22 = document.getElementById("helytelen8/3").checked;
        
        if(helyesvalasz7==1)
            {
                osszpontszam=osszpontszam+1;
            }

    const hossz = document.getElementById("palya_hossz").value;
            if (parseInt(hossz) == 23) 
            {
                osszpontszam = osszpontszam+1;
            }
                
    const helytelenvalasz23 = document.getElementById("helytelen10/1").checked;
    const helyesvalasz8 = document.getElementById("helyes10").checked;
    const helytelenvalasz24 = document.getElementById("helytelen10/2").checked;
    const helytelenvalasz25 = document.getElementById("helytelen10/3").checked;
                                
            if(helyesvalasz8 == 1)
                {
                     osszpontszam=osszpontszam+1;
                }
                
    document.getElementById("pontszam").innerHTML = "A pontszámod: " + osszpontszam +"/10";

    let visszajelzes = "";

    if (osszpontszam === 10) 
        {
        visszajelzes = "Hihetetlen! Teljesen tökéletes munka, gratulálok! 🎉";
    } 
    else if (osszpontszam > 6) 
        {
        visszajelzes = "Nagyon ügyes vagy! Már csak egy kis finomítás kell, és tökéletes lesz! 🌟";
    } 
    else 
    {
        visszajelzes = "Ne add fel! Legközelebb biztosan jobban fog menni! 💪";
    }
    document.getElementById("visszajelzes").innerHTML = visszajelzes;
}


function termek_1()
{
    var termek = document.getElementById("termek1")     ;
    var ertek = termek.value                            ;
    if (ertek !=0)
    {
        var p1 = document.getElementById("p1")          ;
        p1.innerHTML = "Tenisz csuklópánt: "  + ertek + "db" ;
    }
    else
    {
        var p1 = document.getElementById("p1")          ;
        p1.innerHTML = ""                               ;       
    }
    osszeg() ;
}
function termek_2()
{
    var termek = document.getElementById("termek2")     ;
    var ertek = termek.value                            ;
    if (ertek !=0)
    {
        var p2 = document.getElementById("p2")          ;
        p2.innerHTML = "Wilson pro staff teniszütő: "  + ertek + "db" ;
    }
    else
    {
        var p1 = document.getElementById("p2")          ;
        p1.innerHTML = ""                               ;       
    }
    osszeg() ;
}
function termek_3()
{
    var termek = document.getElementById("termek3")     ;
    var ertek = termek.value                            ;
    if (ertek !=0)
    {
        var p3 = document.getElementById("p3")          ;
        p3.innerHTML = "US Open teniszladab (5 labda/doboz): "  + ertek + "db" ;
    }
    else
    {
        var p3 = document.getElementById("p3")          ;
        p3.innerHTML = ""                               ;       
    }
    osszeg() ;
}
function termek_4()
{
    var termek = document.getElementById("termek4")     ;
    var ertek = termek.value                            ;
    if (ertek !=0)
    {
        var p4 = document.getElementById("p4")          ;
        p1.innerHTML = "Head tenisztáska (2 rekeszes): "  + ertek + "db" ;
    }
    else
    {
        var p4 = document.getElementById("p4")          ;
        p4.innerHTML = ""                               ;       
    }
    osszeg() ;
}
function osszeg()
{
    var termek1 = document.getElementById("termek1")     ;
    var db1 = termek1.value                            ;
    var termek2 = document.getElementById("termek2")     ;
    var db2 = termek2.value                            ;
    var termek3 = document.getElementById("termek3")     ;
    var db3 = termek3.value                            ;
    var termek4 = document.getElementById("termek4")     ;
    var db4 = termek4.value                            ;
    var osszeg = db1 * 1790 + db2 * 22980 + db3 * 2550 + db4 * 32150 ;
    if (osszeg !=0)
    {
            var p5 = document.getElementById("osszeg")  ;
            p5.innerHTML = "Végösszeg: "  + osszeg + " Ft"  ;
    }
    else
    {
            var p5 = document.getElementById("osszeg")      ;
            p5.innerHTML = ""                               ;       
    }
}
function kosar_torol()
{
    var p1 = document.getElementById("p1")          ;
    p1.innerHTML ="" ;
    var p2 = document.getElementById("p2")          ;
    p2.innerHTML ="" ;
    var p3 = document.getElementById("p3")          ;
    p3.innerHTML ="" ;
    var p4 = document.getElementById("p4")          ;
    p4.innerHTML ="" ;
    var p5 = document.getElementById("osszeg")          ;
    p5.innerHTML ="" ;

    var termek1 = document.getElementById("termek1")     ;
    termek1.value = 0                            ;
    var termek2 = document.getElementById("termek2")     ;
    termek2.value = 0                            ;
    var termek3 = document.getElementById("termek3")     ;
    termek3.value = 0                            ;
    var termek4 = document.getElementById("termek4")     ;
    termek4.value = 0;                           ;
}

