function change(ref) {
    console.log(ref)

    document.getElementById('oooo').style.backgroundColor = ref;
    if (ref === 'black') {
        document.getElementById('search').style.color = 'white'
    }
}

function load() {


    const x = document.getElementById("srch")
    fetch('https://api.tvmaze.com/search/shows?q=' + x.value).then(res => res.json()).then(
        res => {
            console.log(res[0].show.image.medium)
            var t = "";
            res.map((r) => {
                if (r.show.image != null)
                    t += '<img src="' + r.show.image.medium + '" alt="" width="260" height="320">'
            })
            document.getElementById('app').innerHTML = t;

        }
    )
}