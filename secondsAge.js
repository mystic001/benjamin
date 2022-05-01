
/*Given an age in seconds, calculate how old
someone would be on:
Mercury: orbital period 0.2408467 Earth
years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years,
365.25 Earth days, or 31557600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth
years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth
years
So if you were told someone were
1,000,000,000 seconds old, you should be
able to say that they're 31.69 Earth-years
old.*/




function agersu(){
    
}

const ageResult = (numb) => {

    const earthConstantSeconds = 31557600;

  
    const planetsSeconds = orbital => orbital * earthConstantSeconds
    
    
    const planets = [
        {
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
            console.log((Math.round(100 * realage) / 100) + " " + item.name + " years old")
            return null;
        }

    )

}


ageResult(1000000000)