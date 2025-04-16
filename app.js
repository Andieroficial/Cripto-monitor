// Contraseña cifrada (usa la contraseña segura proporcionada anteriormente)
const encryptedPassword = btoa("Cryp70M0n3y@2023!"); // Contraseña cifrada

// Verificar si hay una sesión activa en localStorage
let isLoggedIn = localStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
    console.log("Sesión activa detectada. Mostrando contenido."); // Mensaje de depuración
    document.getElementById('password-form').style.display = 'none';
    document.getElementById('app-content').style.display = 'block';
    updatePrices();
}

function checkPassword() {
    console.log("Función checkPassword ejecutada"); // Mensaje de depuración

    const passwordInput = document.getElementById('password-input');
    const errorMessage = document.getElementById('error-message');

    if (!passwordInput || !errorMessage) {
        console.error("Error: Elementos del DOM no encontrados.");
        return;
    }

    if (btoa(passwordInput.value) === encryptedPassword) {
        console.log("Contraseña correcta. Guardando sesión..."); // Mensaje de depuración
        localStorage.setItem("isLoggedIn", "true");
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('app-content').style.display = 'block';
        updatePrices();
    } else {
        console.log("Contraseña incorrecta."); // Mensaje de depuración
        errorMessage.textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
    }
}

async function fetchCryptoPrices() {
    try {
        console.log("Solicitando datos a la API...");

        // Primera solicitud (Grupo 1)
        const response1 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,litecoin,bitcoin-cash,dash,digibyte,tron,tether,feyorra,zcash,binancecoin&vs_currencies=usd');
        if (!response1.ok) throw new Error(`Error en la solicitud 1: ${response1.status}`);
        const data1 = await response1.json();

        // Segunda solicitud (Grupo 2)
        const response2 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana,ripple,matic-network,the-open-network,usd-coin,monero,taraxa,pepe,official-trump,cardano,stellar&vs_currencies=usd');
        if (!response2.ok) throw new Error(`Error en la solicitud 2: ${response2.status}`);
        const data2 = await response2.json();

        // Combinar los resultados
        const combinedData = { ...data1, ...data2 };
        console.log("Datos obtenidos:", combinedData);
        return combinedData;
    } catch (error) {
        console.error('Error al obtener los precios:', error);
        return null;
    }
}

async function updatePrices() {
    console.log("Actualizando precios...");
    const prices = await fetchCryptoPrices();
    if (prices) {
        document.getElementById('bitcoin-price').textContent = `Bitcoin (BTC): USD ${prices.bitcoin.usd}`;
        document.getElementById('ethereum-price').textContent = `Ethereum (ETH): USD ${prices.ethereum.usd}`;
        document.getElementById('dogecoin-price').textContent = `Dogecoin (DOGE): USD ${prices.dogecoin.usd}`;
        document.getElementById('litecoin-price').textContent = `Litecoin (LTC): USD ${prices.litecoin.usd}`;
        document.getElementById('bitcoincash-price').textContent = `Bitcoin Cash (BCH): USD ${prices['bitcoin-cash'].usd}`;
        document.getElementById('dash-price').textContent = `Dash (DASH): USD ${prices.dash.usd}`;
        document.getElementById('digibyte-price').textContent = `DigiByte (DGB): USD ${prices.digibyte.usd}`;
        document.getElementById('tron-price').textContent = `Tron (TRX): USD ${prices.tron.usd}`;
        document.getElementById('tether-price').textContent = `Tether (USDT): USD ${prices.tether.usd}`;
        document.getElementById('feyorra-price').textContent = `Feyorra (FEY): USD ${prices.feyorra.usd}`;
        document.getElementById('zcash-price').textContent = `Zcash (ZEC): USD ${prices.zcash.usd}`;
        document.getElementById('binancecoin-price').textContent = `Binance Coin (BNB): USD ${prices.binancecoin.usd}`;
        document.getElementById('solana-price').textContent = `Solana (SOL): USD ${prices.solana.usd}`;
        document.getElementById('ripple-price').textContent = `Ripple (XRP): USD ${prices.ripple.usd}`;
        document.getElementById('polygon-price').textContent = `Polygon (POL): USD ${prices['matic-network'].usd}`;
        document.getElementById('cardano-price').textContent = `Cardano (ADA): USD ${prices.cardano.usd}`;
        document.getElementById('toncoin-price').textContent = `Toncoin (TON): USD ${prices['the-open-network'].usd}`;
        document.getElementById('stellar-price').textContent = `Stellar (XLM): USD ${prices.stellar.usd}`;
        document.getElementById('usdcoin-price').textContent = `USD Coin (USDC): USD ${prices['usd-coin'].usd}`;
        document.getElementById('monero-price').textContent = `Monero (XMR): USD ${prices.monero.usd}`;
        document.getElementById('taraxa-price').textContent = `Taraxa (TARA): USD ${prices.taraxa.usd}`;
        document.getElementById('pepe-price').textContent = `Pepe (PEPE): USD ${prices.pepe.usd}`;
        document.getElementById('official-trump-price').textContent = `Official Trump (TRUMP): USD ${prices['official-trump'].usd}`;
    } else {
        document.getElementById('bitcoin-price').textContent = "Bitcoin (BTC): Error al cargar el precio";
        document.getElementById('ethereum-price').textContent = "Ethereum (ETH): Error al cargar el precio";
        document.getElementById('dogecoin-price').textContent = "Dogecoin (DOGE): Error al cargar el precio";
        document.getElementById('litecoin-price').textContent = "Litecoin (LTC): Error al cargar el precio";
        document.getElementById('bitcoincash-price').textContent = "Bitcoin Cash (BCH): Error al cargar el precio";
        document.getElementById('dash-price').textContent = "Dash (DASH): Error al cargar el precio";
        document.getElementById('digibyte-price').textContent = "DigiByte (DGB): Error al cargar el precio";
        document.getElementById('tron-price').textContent = "Tron (TRX): Error al cargar el precio";
        document.getElementById('tether-price').textContent = "Tether (USDT): Error al cargar el precio";
        document.getElementById('feyorra-price').textContent = "Feyorra (FEY): Error al cargar el precio";
        document.getElementById('zcash-price').textContent = "Zcash (ZEC): Error al cargar el precio";
        document.getElementById('binancecoin-price').textContent = "Binance Coin (BNB): Error al cargar el precio";
        document.getElementById('solana-price').textContent = "Solana (SOL): Error al cargar el precio";
        document.getElementById('ripple-price').textContent = "Ripple (XRP): Error al cargar el precio";
        document.getElementById('polygon-price').textContent = "Polygon (POL): Error al cargar el precio";
        document.getElementById('cardano-price').textContent = "Cardano (ADA): Error al cargar el precio";
        document.getElementById('toncoin-price').textContent = "Toncoin (TON): Error al cargar el precio";
        document.getElementById('stellar-price').textContent = "Stellar (XLM): Error al cargar el precio";
        document.getElementById('usdcoin-price').textContent = "USD Coin (USDC): Error al cargar el precio";
        document.getElementById('monero-price').textContent = "Monero (XMR): Error al cargar el precio";
        document.getElementById('taraxa-price').textContent = "Taraxa (TARA): Error al cargar el precio";
        document.getElementById('pepe-price').textContent = "Pepe (PEPE): Error al cargar el precio";
        document.getElementById('official-trump-price').textContent = "Official Trump (TRUMP): Error al cargar el precio";
    }
}

// Actualizar los precios cada 30 segundos
setInterval(updatePrices, 30000);

// Cargar los precios al iniciar la app
updatePrices();
