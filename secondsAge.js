const ageResult = (numb) => {

    const earthConstantSeconds = 31557600
    const planetsSeconds = (orbital) => orbital * earthConstantSeconds
    const planets = [{
            name: "Mercury",
            orbital: 0.2408467
        },

        {
            name: "Venus",
            orbital: 0.61519726
        },
        {
            name: "Mars",
            orbital: 1.8808158
        },
        {
            name: "Earth",
            orbital: 1
        },
        {
            name: "Jupiter",
            orbital: 11.862615
        },
        {
            name: "Saturn",
            orbital: 29.447498
        },
        {
            name: "Uranus",
            orbital: 84.016846
        },
        {
            name: "Neptune",
            orbital: 164.79132

        }


    ]

    planets.map((item) => {
            const secs = planetsSeconds(item.orbital)
            const realage = numb / secs
            console.log((Math.round(100 * realage) / 100) + " " + item.name + " years")
            return null;
        }

    )

}


ageResult(1000000000)