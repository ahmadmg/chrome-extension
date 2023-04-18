async function getBg() {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=computer")
    const data = await res.json()
    console.log(data.urls.full)
   
    document.body.style.backgroundImage =`url("${data.urls.full}")`;
    }
    
 getBg()