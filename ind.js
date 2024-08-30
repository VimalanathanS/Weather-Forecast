async function getWeather() 
        {
            const city = document.getElementById('input').value;
            console.log(city);
            const apiKey = '473eba31a31cc69cad0e13b072299d65'; 
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            try 
            {
                const response = await fetch(url);
                if (!response.ok) 
                {
                    window.alert('City not Found...');                    
                }
                const data = await response.json();
                const temp=data.main.temp+" °C";
                const press=data.main.pressure+" mb";
                const Hum=data.main.humidity+" %";
                console.log(data.main);
                change();
                document.getElementById('result').value=temp;
                document.getElementById('result1').value=press;
                document.getElementById('result2').value=Hum;
            } 
            catch (error) 
            {
                // document.getElementById('result').innerHTML = `<p style="color: red;">${error.message}</p>`;
            }
        }
        function change()
        {
             document.getElementById('H1').innerHTML="Your Weather Is !";
        }