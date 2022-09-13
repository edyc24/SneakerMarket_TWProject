window.onload=()=>{
    var nav=document.getElementsByClassName("nav-links")[0];
    var hide=document.getElementsById("fa fa-times")[0];
    var open=document.getElementsById("fa fa-bars")[0];
    
    console.log(nav,hide,open);

    function openmenu(){
        nav.style.right="0";
    }

    function hidemenu(){
        nav.style.right="-300px";
    }

    hide.addEventListener("click",hidemenu);
    open.addEventListener("click",openmenu);

}